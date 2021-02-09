import React, { useEffect, useState } from 'react';

import { QueueStatus, RemoteComponentExternalProps } from './types';
import { Button } from '@lucidtech/flyt-form';
import ErrorAlert from './components/ErrorAlert';

declare const ___TUTORIAL_VERSION___: string;

const RemoteComponent = ({
  transitionExecution,
  transition,
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
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

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

    // filter and map predictions
    const predictions = input?.predictions || [];
    const filteredPredictions = predictions.filter(
      (prediction) => Array.isArray(prediction.value) && prediction.value.length === 4,
    );

    // get document
    client
      .getDocument(transitionExecution.input.documentId)
      .then((res) => {
        if (res.contentType !== 'application/pdf') {
          throw Error('Only PDF supported for splitting');
        }
        const dataUrl = `data:${res.contentType};base64,${res.content}`;
        setDoc(dataUrl);
      })
      .catch((e) => {
        console.error(e);
        setError(e);
      })
      .finally(() => {
        setIsLoadingDocument(false);
      });
  }, [transitionExecution]);

  const reset = () => {
    const predictions = transitionExecution?.input?.predictions || [];
    const filteredPredictions = predictions.filter(
      (prediction) => Array.isArray(prediction.value) && prediction.value.length === 4,
    );
  };

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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <div style={{ width: '100%' }}>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="card">
            <div
              className="card-body"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {error ? (
                <ErrorAlert>{error.toString()}</ErrorAlert>
              ) : (
                <div>Split</div>
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
