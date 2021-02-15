import React, { useEffect, useState } from 'react';
import { Button } from '@lucidtech/flyt-form';

import { QueueStatus, RemoteComponentExternalProps } from './types';
import ErrorAlert from './components/ErrorAlert';
import PDFViewer from './components/PDFViewer';
import { GlobalHotKeys } from 'react-hotkeys';
import HotkeyHint from './components/HotkeyHint';

declare const ___TUTORIAL_VERSION___: string;

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
  const [groups, setGroups] = useState<Array<Array<number>>>([]);

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
    const payload = {
      documentId: transitionExecution?.input?.documentId,
      verified: {},
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
    TOGGLE_HINT: onToggleHint,
  };

  // react-hotkeys types aren't 100% correct sadly
  const keyMap: any = {
    TOGGLE_HINT: {
      name: 'Toggle hint',
      sequences: ['ctrl+F1'],
    },
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <GlobalHotKeys keyMap={keyMap} handlers={handlers} />
      <div style={{ width: '100%' }}>
        <HotkeyHint show={showKeybinds} toggleHint={onToggleHint} />
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="card">
            <div className="card-body" style={{ minHeight: '900px' }}>
              {error ? (
                <ErrorAlert>{error.toString()}</ErrorAlert>
              ) : (
                <PDFViewer doc={doc} loading={somethingIsLoading} groups={groups} setGroups={setGroups} />
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
                    disabled={isLoadingDocument}
                  >
                    <span className="fe fe-check" />
                  </Button>
                </div>
                <div style={{ order: 1, display: 'flex', flexDirection: 'row' }}>
                  <Button variant="soft" style={{ order: 2 }} onClick={skip} disabled={isLoadingDocument}>
                    <span className="fe fe-skip-forward" />
                  </Button>
                  <Button
                    variant="danger"
                    className="mr-2"
                    style={{ order: 1 }}
                    onClick={reject}
                    disabled={isLoadingDocument}
                  >
                    <span className="fe fe-slash" />
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
