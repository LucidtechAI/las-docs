import React, { ReactNode, useEffect, useMemo, useState } from 'react';

import { QueueStatus, RemoteComponentExternalProps } from './types';
import { Prediction } from '@lucidtech/las-sdk-core';

declare const ___TUTORIAL_VERSION___: string;


const getBestPrediction = (fieldName: string, predictions: Prediction[]): Prediction | undefined => {
  const fieldPredictions = predictions.filter((prediction) => prediction.label === fieldName);
  fieldPredictions.sort((a, b) => b.confidence - a.confidence);

  return fieldPredictions.pop();
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
  const [doc, setDoc] = useState('');
  const [isLoadingDocument, setIsLoadingDocument] = useState(true);

  // new transition execution, get document, and set predictions
  useEffect(() => {
    if (!transitionExecution?.input.documentId) return;

    setIsLoadingDocument(true);

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


  const approve = () => {
    const payload = {
      documentId: transitionExecution?.input.documentId,
      verified: {}
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

  const somethingIsLoading = queueStatus === QueueStatus.LOADING || isLoadingDocument

  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
      <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="mr-5">
        {isLoadingDocument || queueStatus === QueueStatus.LOADING ? (
          <Spinner animation="border" variant="primary" />
        ) : null}
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
