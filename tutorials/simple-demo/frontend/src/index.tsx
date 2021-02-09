import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { PDFObject } from 'react-pdfobject';

import { Button, DateInput, Input } from '@lucidtech/flyt-form';
import { QueueStatus, RemoteComponentExternalProps } from './types';
import { Prediction } from '@lucidtech/las-sdk-core/lib/types';
import Spinner from 'react-bootstrap/Spinner';

type ConfidenceLevel = 'lowest' | 'low' | 'high' | 'highest';
type ButtonVariant = 'success' | 'soft' | 'danger' | 'primary';
declare const ___TUTORIAL_VERSION___: string;

const btnIcons = {
  success: 'fe fe-check',
  soft: 'fe fe-skip-forward',
  danger: 'fe fe-slash',
};

export const getButtonIcon = (variant?: ButtonVariant): JSX.Element | null =>
  variant && variant !== 'primary' ? <span className={btnIcons[variant]} /> : null;

const Grid = (props: { children: ReactNode }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'minmax(auto, 1fr) 3fr',
      rowGap: '5px',
      columnGap: '20px',
      alignItems: 'center',
      width: '100%'
    }}
    {...props}
  />
);

const labelStyle: React.CSSProperties = {
  marginBottom: 0,
  fontWeight: 'bold',
};

const getPercentage = (confidenceValue: number): number => Math.floor(confidenceValue * 100);

const formatDate = (date: Date): string => {
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
  const month = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(date);
  const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
  return `${year}-${month}-${day}`;
};

const getBestPrediction = (fieldName: string, predictions: Prediction[]): Prediction | undefined => {
  const fieldPredictions = predictions.filter((prediction) => prediction.label === fieldName);
  fieldPredictions.sort((a, b) => b.confidence - a.confidence);

  return fieldPredictions.pop();
};

type Field = {
  type: string;
  display: string;
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
  queueStatus
}: RemoteComponentExternalProps): JSX.Element => {
  // You'd probably prefer to use a form library like React Hook Forms, Formik, or similar.
  // For this example we'll simplify it and just make use of useState.
  const [fields, setFields] = useState<Record<string, Field>>({});
  const [values, setValues] = useState<Record<string, string | undefined | null>>({});
  // predictions will serve as our initial values for the form
  const [predictions, setPredictions] = useState<Prediction[]>([]);

  const [doc, setDoc] = useState('');
  const [isLoadingDocument, setIsLoadingDocument] = useState(true);

  const [isLoadingAssets, setIsLoadingAssets] = useState(true);

  // load fields from asset
  useEffect(() => {
    const fieldsAssetId = transition?.assets?.fieldConfig;
    if (!fieldsAssetId) return;
    getAsset(fieldsAssetId)
      .then((res) => {
        const decoded = window.atob(res.content!);
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
      vals[fieldName] = prediction;
    });

    return vals;
  }, [predictions, fields]);

  // and also reset values
  useEffect(() => {
    const vals: Record<string, string | undefined | null> = {};
    Object.keys(fields).forEach((fieldName) => {
      const prediction = getBestPrediction(fieldName, predictions);
      vals[fieldName] = prediction?.value as string | undefined | null;
    });

    setValues(vals);
  }, [predictions, fields]);

  // new transition execution, get document, and set predictions
  useEffect(() => {
    if (!transitionExecution) return;

    setIsLoadingDocument(true);
    setPredictions(transitionExecution.input.predictions);

    if (!transitionExecution.input.documentId) return;
    client
      .getDocument(transitionExecution.input.documentId)
      .then((res) => {
        const dataUrl = `data:${res.contentType};base64,${res.content}`;
        setDoc(dataUrl);
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
    const documentId = transitionExecution.input?.documentId;
    Object.keys(valuesCopy).forEach((key) => valuesCopy[key] = valuesCopy[key] || null);
    const payload = {
      documentId: documentId,
      verified: valuesCopy
    }
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

  const getFieldComponent = (fieldKey: string, value: string | null | undefined): JSX.Element => {
    const type = fields[fieldKey].type;
    switch (type) {
      case 'date':
        return (
          <>
            <label htmlFor={fieldKey} style={labelStyle}>
              {fields[fieldKey].display || fieldKey}
            </label>
            <div>
              <DateInput
                selected={value && typeof value === 'string' && new Date(value)}
                onSelect={(date) => onChange(fieldKey, formatDate(date))}
                onChange={(date) => onChange(fieldKey, formatDate(date as Date))}
                {...getConfidenceProps(fieldKey)}
              />
            </div>
          </>
        );
      default:
        return (
          <>
            <label htmlFor={fieldKey} style={labelStyle}>
              {fields[fieldKey].display || fieldKey}
            </label>
            <Input
              name={fieldKey}
              value={value || ''}
              onChange={(e) => onChange(fieldKey, e.target.value)}
              {...getConfidenceProps(fieldKey)}
            />
          </>
        );
    }
  };

  const somethingIsLoading = isLoadingAssets || queueStatus === QueueStatus.LOADING || isLoadingDocument

  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
      <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="mr-5">
        {isLoadingDocument || queueStatus === QueueStatus.LOADING ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <PDFObject url={doc} containerProps={{ style: { width: '100%', height: '95vh' } }} />
        )}
      </div>
      <div style={{ minWidth: '40%' }}>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="card">
            <div className="card-header">
              <header style={{ display: 'flex', flexDirection: 'row' }}>
                <h2 style={{ margin: 0 }}>
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

            <div className="card-body" style={ {display: 'flex', justifyContent: 'center', alignItems: 'center'} }>
              {somethingIsLoading ? (
                <Spinner animation="border" variant="primary" />
              ) : (
                <Grid>
                  {Object.entries(values).map(([fieldKey, value]) => {
                    return <React.Fragment key={fieldKey}>{getFieldComponent(fieldKey, value)}</React.Fragment>;
                  })}
                </Grid>
              )}
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
                  >
                    {getButtonIcon('soft')}
                  </Button>
                  <Button
                    variant="danger"
                    className="mr-2"
                    style={{ order: 1 }}
                    onClick={reject}
                    disabled={isLoadingDocument || isLoadingAssets}
                  >
                    {getButtonIcon('danger')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <p className="text-muted small text-right">Version: {___TUTORIAL_VERSION___}</p>
      </div>
    </div>
  );
};

export default RemoteComponent;
