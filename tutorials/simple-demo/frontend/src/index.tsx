import React, {
  createRef,
  ReactNode,
  RefObject,
  useEffect,
  useMemo,
  useState,
  useLayoutEffect,
  KeyboardEventHandler,
  useRef,
} from 'react';
import { configure, GlobalHotKeys } from 'react-hotkeys';

import { Button } from '@lucidtech/flyt-form';
import { Prediction } from '@lucidtech/las-sdk-core/lib/types';

import { QueueStatus, RemoteComponentExternalProps } from './types';
import DocumentViewer, { DocumentType } from './DocumentViewer';
import Keybinds from './Keybinds';
import styles from './index.module.css';
import MaskedDateInput from './MaskedDateInput';
import FieldInput from './FieldInput';
import { useKeybinds } from './useKeybinds';
import { b64DecodeUnicode, normalizeDate } from './utils';
import Dropdown from './Dropdown';

configure({ ignoreTags: [] });

type ConfidenceLevel = 'lowest' | 'low' | 'high' | 'highest';
type ButtonVariant = 'success' | 'soft' | 'danger' | 'primary';
declare const ___FORM_VERSION___: string;

const btnIcons = {
  success: 'fe fe-check',
  soft: 'fe fe-skip-forward',
  danger: 'fe fe-slash',
};

export const getButtonIcon = (variant?: ButtonVariant): JSX.Element | null =>
  variant && variant !== 'primary' ? <span className={btnIcons[variant]} /> : null;

const Grid = (props: { children: ReactNode }) => <div className={styles['form-grid']} {...props} />;

const getPercentage = (confidenceValue: number): number => Math.floor(confidenceValue * 100);

const getBestPrediction = (fieldName: string, predictions: Prediction[]): Prediction | undefined => {
  const fieldPredictions = predictions.filter((prediction) => prediction.label === fieldName);
  fieldPredictions.sort((a, b) => b.confidence - a.confidence);

  return fieldPredictions.pop();
};

type EnumOption =
  | string
  | {
      display: string;
      value: string;
    };

export type Field = {
  type: string;
  display: string;
  enum?: Array<EnumOption>;
  confidenceLevels: { automated: number; highest: number; high: number; low: number };
};

const RemoteComponent = ({
  transitionExecution,
  transition,
  onApprove,
  onReject,
  onRequestNew,
  getAsset,
  onSkip,
  client,
  queueStatus,
}: RemoteComponentExternalProps): JSX.Element => {
  // You'd probably prefer to use a form library like React Hook Forms, Formik, or similar.
  // For this example we'll simplify it and just make use of useState.
  const [fields, setFields] = useState<Record<string, Field>>({});
  const [values, setValues] = useState<Record<string, string | undefined | null>>({});
  // predictions will serve as our initial values for the form
  const [predictions, setPredictions] = useState<Prediction[]>([]);

  const [doc, setDoc] = useState<string | null>(null);
  const [contentType, setContentType] = useState<DocumentType | null>(null);
  const [isLoadingDocument, setIsLoadingDocument] = useState(true);

  const [isLoadingAssets, setIsLoadingAssets] = useState(true);
  const { showKeybinds, onToggle } = useKeybinds();

  // useState for array of refs
  const [elRefs, setElRefs] = useState<Array<RefObject<HTMLElement>>>([]);
  const submitRef = useRef<HTMLButtonElement>(null);

  // load fields from asset
  useEffect(() => {
    const fieldsAssetId = transition?.assets?.fieldConfig;
    if (!fieldsAssetId) return;
    getAsset(fieldsAssetId)
      .then((res) => {
        const decoded = b64DecodeUnicode(res.content!);
        const fields = JSON.parse(decoded);

        setFields(fields);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        setIsLoadingAssets(false);
      });
  }, [transition]);

  // whenever we get new fields or predictions, set new initial values
  const initialValues = useMemo(() => {
    const vals: Record<string, Prediction | undefined> = {};
    Object.keys(fields).forEach((fieldName) => {
      const prediction = getBestPrediction(fieldName, predictions);
      // normalize date values
      if (fields[fieldName].type === 'date' && prediction?.value) {
        const normalized = normalizeDate(prediction.value.toString());
        prediction.value = normalized;
      }
      vals[fieldName] = prediction;
    });

    return vals;
  }, [predictions, fields]);

  // and also reset values
  useEffect(() => {
    const vals: Record<string, string | undefined | null> = {};
    Object.entries(initialValues).forEach(([fieldName, prediction]) => {
      vals[fieldName] = prediction?.value as string | undefined | null;
    });

    setValues(vals);

    // reset refs
    setElRefs((elRefs) =>
      Array(Object.keys(fields).length)
        .fill(null)
        .map((_, i) => elRefs[i] || createRef()),
    );
  }, [initialValues, fields]);

  // focus first non-automated input after new transition execution
  useLayoutEffect(() => {
    const nonAutomatedFields = elRefs.filter((ref) => {
      const isNotAutomated = !ref.current?.classList.contains('automated');
      return isNotAutomated;
    });

    nonAutomatedFields[0]?.current?.focus();
  }, [elRefs]);

  // new transition execution, get document, and set predictions
  useEffect(() => {
    if (!transitionExecution) return;

    setIsLoadingDocument(true);
    setPredictions(transitionExecution.input.predictions);

    if (!transitionExecution.input.documentId) return;
    client
      .getDocument(transitionExecution.input.documentId)
      .then((res) => {
        setDoc(res.content!);
        setContentType(res.contentType);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        setIsLoadingDocument(false);
      });
  }, [transitionExecution]);

  const onChange = (field: string, value: string) => {
    setValues((prevVals) => ({
      ...prevVals,
      [field]: value,
    }));
  };

  const getConfidenceLevel = (fieldName: string, confidenceLevel: number): ConfidenceLevel => {
    const levels = {
      highest: fields[fieldName]?.confidenceLevels?.highest || 0.97,
      high: fields[fieldName]?.confidenceLevels?.high || 0.9,
      low: fields[fieldName]?.confidenceLevels?.low || 0.5,
    };

    if (confidenceLevel >= levels.highest) return 'highest';
    if (confidenceLevel >= levels.high) return 'high';
    if (confidenceLevel >= levels.low) return 'low';
    return 'lowest';
  };

  // Helper functions that we'll use to show the confidence label and automation label,
  // but only when a value has not been manually edited.
  const isChanged = (field: string) => values[field] !== initialValues[field]?.value;

  const getConfidenceProps = (field: string) => {
    const confidence = initialValues[field]?.confidence || 0;
    const isAutomated = !isChanged(field) && confidence >= (fields[field]?.confidenceLevels?.automated || 0.98);
    return {
      confidenceAutomated: isAutomated,
      confidenceLevel: isChanged(field) ? undefined : getConfidenceLevel(field, confidence),
      confidenceValue: getPercentage(confidence) || undefined,
    };
  };

  const approve = () => {
    const valuesCopy = { ...values };
    Object.keys(valuesCopy).forEach((key) => (valuesCopy[key] = valuesCopy[key] || null));
    const payload = {
      ...transitionExecution.input,
      verified: valuesCopy,
    };
    onApprove(payload);
    onRequestNew();
  };

  const reject = () => {
    onReject('Manually rejecting');
    onRequestNew();
  };

  const skip = () => {
    onSkip();
    onRequestNew();
  };

  const focusNext = (current: HTMLElement) => {
    const currentIndex = elRefs.findIndex((ref) => ref.current === current);

    // couldn't find the currently active input in the ref list, which would be super weird
    if (currentIndex === -1) {
      console.debug('Unable to find current focused input');
      return;
    }

    if (currentIndex < elRefs.length) {
      const nextElement = elRefs[currentIndex + 1];
      nextElement?.current?.focus();
    } else {
      // if no fields left, focus the submit button
      submitRef.current?.focus();
    }
  };

  const defaultKeyHandler: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      focusNext(event.target as HTMLElement);
    }
  };

  const getFieldComponent = (fieldKey: string, value: string | null | undefined, ref?: any): JSX.Element => {
    const isEnum = fields[fieldKey].enum;
    if (Array.isArray(isEnum)) {
      const options = fields[fieldKey].enum!.map((option) => {});
      return <Dropdown options={} selected={value || ''} ref={ref} />;
    } else {
      const type = fields[fieldKey].type;
      switch (type) {
        case 'date':
          return (
            <MaskedDateInput
              fieldInfo={fields[fieldKey]}
              fieldKey={fieldKey}
              value={value || ''}
              onChange={onChange}
              ref={ref}
              onKeyDown={defaultKeyHandler}
              {...getConfidenceProps(fieldKey)}
            />
          );
        default:
          return (
            <FieldInput
              fieldInfo={fields[fieldKey]}
              fieldKey={fieldKey}
              value={value || ''}
              onChange={onChange}
              ref={ref}
              onKeyDown={defaultKeyHandler}
              {...getConfidenceProps(fieldKey)}
            />
          );
      }
    }
  };

  const somethingIsLoading = isLoadingAssets || queueStatus === QueueStatus.LOADING || isLoadingDocument;

  const handlers = {
    APPROVE: approve,
    REJECT: reject,
    SKIP: skip,
    TOGGLE_HINT: onToggle,
  };

  // react-hotkeys types aren't 100% correct sadly
  const keyMap: any = {
    APPROVE: {
      name: 'Approve',
      sequences: ['ctrl+enter'],
    },
    REJECT: {
      name: 'Reject',
      sequences: ['ctrl+q'],
    },
    SKIP: {
      name: 'Skip',
      sequences: ['ctrl+space'],
    },
    TOGGLE_HINT: {
      name: 'Toggle hint',
      sequences: ['shift+alt+?'],
    },
    // PAGE_UP: {
    //   name: 'Page up (multi-page)',
    //   sequences: ['PageUp'],
    // },
    // PAGE_DOWN: {
    //   name: 'Page down (multi-page)',
    //   sequences: ['PageDown'],
    // },
    // FIRST_PAGE: {
    //   name: 'First page (multi-page)',
    //   sequences: ['shift+home'],
    // },
    // LAST_PAGE: {
    //   name: 'Last page (multi-page)',
    //   sequences: ['shift+end'],
    // },
    ZOOM_IN: {
      name: 'Zoom in',
      sequences: ['shift+alt+PageUp'],
    },
    ZOOM_OUT: {
      name: 'Zoom out',
      sequences: ['shift+alt+PageDown'],
    },
    MOVE_UP: {
      name: 'Move up (zoomed)',
      sequences: ['shift+alt+up'],
    },
    MOVE_DOWN: {
      name: 'Move down (zoomed)',
      sequences: ['shift+alt+down'],
    },
    MOVE_RIGHT: {
      name: 'Move right (zoomed)',
      sequences: ['shift+alt+right'],
    },
    MOVE_LEFT: {
      name: 'Move down (zoomed)',
      sequences: ['shift+alt+left'],
    },
  };

  return (
    <GlobalHotKeys keyMap={keyMap} handlers={handlers} allowChanges>
      <Keybinds toggleHint={onToggle} show={showKeybinds} />

      <div className={styles['main-container']}>
        <div className={styles['document-viewer-container']}>
          <DocumentViewer
            fileName={transitionExecution.input.documentId}
            doc={doc}
            documentType={contentType}
            loading={isLoadingDocument || queueStatus === QueueStatus.LOADING}
          />
        </div>
        <div className={styles['form-container']}>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="card ml-3">
              <div className="card-header">
                <header className={styles['form-header']}>
                  <h2>
                    <span
                      className={`fe fe-file-text mr-3`}
                      style={{
                        backgroundColor: 'lightblue',
                        color: 'white',
                        borderRadius: '50%',
                        padding: '0.3em',
                      }}
                    />
                    {transition?.name || 'Document'}
                  </h2>
                </header>
              </div>

              <div className={`${styles['form-body']} card-body`}>
                <Grid>
                  {Object.entries(values).map(([fieldKey, value], index) => {
                    return (
                      <React.Fragment key={fieldKey}>
                        {getFieldComponent(fieldKey, value, elRefs[index])}
                      </React.Fragment>
                    );
                  })}
                </Grid>
              </div>

              <div className="card-footer">
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ order: 2 }}>
                    <Button
                      variant="success"
                      style={{ width: '150px', order: 1 }}
                      onClick={approve}
                      disabled={isLoadingDocument || isLoadingAssets}
                      type="button"
                    >
                      {getButtonIcon('success')}
                    </Button>
                  </div>
                  <div style={{ order: 1, display: 'flex', flexDirection: 'row' }}>
                    <Button
                      variant="soft"
                      style={{ order: 2 }}
                      onClick={skip}
                      disabled={isLoadingDocument || isLoadingAssets}
                      type="button"
                    >
                      {getButtonIcon('soft')}
                    </Button>
                    <Button
                      variant="danger"
                      className="mr-2"
                      style={{ order: 1 }}
                      onClick={reject}
                      disabled={isLoadingDocument || isLoadingAssets}
                      type="button"
                    >
                      {getButtonIcon('danger')}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <p className="text-muted small text-right">Version: {___FORM_VERSION___}</p>
        </div>
      </div>
    </GlobalHotKeys>
  );
};

export default RemoteComponent;
