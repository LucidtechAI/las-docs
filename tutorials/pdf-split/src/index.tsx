import React, { useEffect, useState } from 'react';
import { Button } from '@lucidtech/flyt-form';

import { QueueStatus, RemoteComponentExternalProps } from './types';
import ErrorAlert from './components/ErrorAlert';
import PDFViewer from './components/PDFViewer';
import HotkeyHint from './components/HotkeyHint';

import styles from './index.module.css';

declare const ___PDF_SPLIT_VERSION___: string;

export type Group = {
  pages: Array<number>;
  category: Category;
};
export type Groups = Array<Group>;
export type Category = 'INVOICE' | 'RECEIPT' | 'MULTIPLE_RECEIPTS';

const RemoteComponent = ({
  transitionExecution,
  onApprove,
  onReject,
  onRequestNew,
  onSkip,
  client,
  queueStatus,
}: RemoteComponentExternalProps): JSX.Element => {
  const [doc, setDoc] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoadingDocument, setIsLoadingDocument] = useState(true);
  const [groups, setGroups] = useState<Groups>([]);

  // keybinds
  const [showKeybinds, setShowKeybinds] = useState(true);
  const localStorageIdentifier = 'pdfSplit:showKeybindHints';

  // check user preference for showing/displaying keybinds
  useEffect(() => {
    const preference = localStorage.getItem(localStorageIdentifier);
    setShowKeybinds(preference === 'true');
  }, []);

  const storePreference = (show: boolean) => {
    localStorage.setItem(localStorageIdentifier, show.toString());
  };

  const onToggleHint = () => {
    storePreference(!showKeybinds);
    setShowKeybinds((prev) => !prev);
  };

  // new transition execution, map predictions and get document (image)
  useEffect(() => {
    if (!transitionExecution) return;

    setError(null); // reset any errors
    const { input } = transitionExecution;

    // if no document, what are we even doing?
    if (!input?.documentId) {
      setError('No document');
      return;
    }

    setIsLoadingDocument(true);

    // get document
    client
      .getDocument(transitionExecution.input.documentId)
      .then((res) => {
        if (res.contentType !== 'application/pdf') {
          throw Error('Only PDF supported for splitting');
        }
        res.content && setDoc(res.content);
      })
      .catch((e) => {
        console.error(e);
        setError(e);
      })
      .finally(() => {
        setIsLoadingDocument(false);
      });
  }, [transitionExecution]);

  const approve = () => {
    const input = transitionExecution?.input || {};
    const payload = {
      ...input,
      verified: groups,
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

  const somethingIsLoading = queueStatus === QueueStatus.LOADING || isLoadingDocument;

  const handlers = {
    APPROVE: approve,
    REJECT: reject,
    SKIP: skip,
    TOGGLE_HINT: onToggleHint,
  };

  // react-hotkeys types aren't 100% correct sadly
  const keyMap: any = {
    APPROVE: {
      name: 'Approve',
      sequences: ['shift+enter'],
    },
    REJECT: {
      name: 'Reject',
      sequences: ['shift+q'],
    },
    SKIP: {
      name: 'Skip',
      sequences: ['shift+space'],
    },
    TOGGLE_HINT: {
      name: 'Toggle hint',
      sequences: ['shift+?'],
    },
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <div style={{ width: '100%' }}>
        <HotkeyHint show={showKeybinds} toggleHint={onToggleHint} />
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="card">
            <div className={`card-body ${styles['card-body']} ${somethingIsLoading ? styles['loading'] : ''}`}>
              {error ? (
                <ErrorAlert>{error.toString()}</ErrorAlert>
              ) : (
                <PDFViewer
                  doc={doc}
                  loading={somethingIsLoading}
                  groups={groups}
                  setGroups={setGroups}
                  extraKeymap={keyMap}
                  extraHandlers={handlers}
                  predictions={transitionExecution?.input?.predictions}
                />
              )}
            </div>

            <div className="card-footer" style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  maxWidth: '600px',
                  width: '100%',
                }}
              >
                <div style={{ order: 2 }}>
                  <Button
                    variant="success"
                    style={{ width: '150px', order: 1 }}
                    onClick={approve}
                    disabled={somethingIsLoading}
                    title="Approve and submit"
                  >
                    <span className="fe fe-check" />
                  </Button>
                </div>
                <div style={{ order: 1, display: 'flex', flexDirection: 'row' }}>
                  <Button
                    variant="soft"
                    style={{ order: 2 }}
                    onClick={skip}
                    disabled={somethingIsLoading}
                    title="Skip document"
                  >
                    <span className="fe fe-skip-forward" />
                  </Button>
                  <Button
                    variant="danger"
                    className="mr-2"
                    style={{ order: 1 }}
                    onClick={reject}
                    disabled={somethingIsLoading}
                    title="Reject document"
                  >
                    <span className="fe fe-slash" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <p className="text-muted small text-right">Version: {___PDF_SPLIT_VERSION___}</p>
      </div>
    </div>
  );
};

export default RemoteComponent;
