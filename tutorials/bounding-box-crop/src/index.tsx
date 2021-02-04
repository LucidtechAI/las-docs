import React, { useEffect, useState } from "react";

import { QueueStatus, RemoteComponentExternalProps } from "./types";
import { Prediction } from "@lucidtech/las-sdk-core";
import Canvas from "./Canvas";

declare const ___TUTORIAL_VERSION___: string;

const getBestPrediction = (
  fieldName: string,
  predictions: Prediction[]
): Prediction | undefined => {
  const fieldPredictions = predictions.filter(
    (prediction) => prediction.label === fieldName
  );
  fieldPredictions.sort((a, b) => b.confidence - a.confidence);

  return fieldPredictions.pop();
};

const RemoteComponent = ({
  transitionExecution,
  transition,
  onApprove,
  onReject,
  onRequestNew,
  onSkip,
  client,
  queueStatus,
}: RemoteComponentExternalProps) => {
  const [doc, setDoc] = useState("");
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
      verified: {},
    };
    onApprove(payload);
    onRequestNew();
  };

  const reject = () => {
    onReject("Manually rejecting");
    onRequestNew();
  };

  const skip = () => {
    onSkip();
    onRequestNew();
  };

  const somethingIsLoading =
    queueStatus === QueueStatus.LOADING || isLoadingDocument;

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className='mr-5'
      >
        {isLoadingDocument || queueStatus === QueueStatus.LOADING
          ? "Loading..."
          : null}
      </div>
      <div style={{ minWidth: "40%" }}>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='card'>
            <div
              className='card-body'
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {somethingIsLoading ? "Loading..." : <Canvas doc={doc} />}
            </div>

            <div className='card-footer'>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ order: 2 }}>
                  <button
                    style={{ width: "150px", order: 1 }}
                    onClick={approve}
                    disabled={isLoadingDocument}
                  >
                    Yes
                  </button>
                </div>
                <div
                  style={{ order: 1, display: "flex", flexDirection: "row" }}
                >
                  <button
                    style={{ order: 2 }}
                    onClick={skip}
                    disabled={isLoadingDocument}
                  >
                    Skip
                  </button>
                  <button
                    className='mr-2'
                    style={{ order: 1 }}
                    onClick={reject}
                    disabled={isLoadingDocument}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <p className='text-muted small text-right'>
          Version: {___TUTORIAL_VERSION___}
        </p>
      </div>
    </div>
  );
};

export default RemoteComponent;
