import React, { useEffect, useState } from "react";

import { QueueStatus, RemoteComponentExternalProps } from "./types";
import RND from "./RND";
import { Button } from "@lucidtech/flyt-form";

declare const ___TUTORIAL_VERSION___: string;

function debounce(fn: any, ms: number) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(function () {
      timer = null;
      // @ts-ignore 🤷‍♀️
      fn.apply(this, arguments);
    }, ms);
  };
}

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
  const [doc, setDoc] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoadingDocument, setIsLoadingDocument] = useState(true);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 100);

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  // new transition execution, get document, and set predictions
  useEffect(() => {
    setError(null);
    if (!transitionExecution?.input.documentId) return;
    setIsLoadingDocument(true);

    client
      .getDocument(transitionExecution.input.documentId)
      .then((res) => {
        if (res.contentType !== "image/jpeg") {
          throw Error("Only JPEG supported for cropping");
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
              {somethingIsLoading ? (
                "Loading..."
              ) : (
                <RND
                  doc={doc}
                  predictions={transitionExecution.input?.predictions}
                  dimensions={dimensions}
                />
              )}
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
                  <Button
                    variant='success'
                    style={{ width: "150px", order: 1 }}
                    onClick={approve}
                    disabled={isLoadingDocument}
                  >
                    <span className='fe fe-check' />
                  </Button>
                </div>
                <div
                  style={{ order: 1, display: "flex", flexDirection: "row" }}
                >
                  <Button
                    variant='soft'
                    style={{ order: 2 }}
                    onClick={skip}
                    disabled={isLoadingDocument}
                  >
                    <span className='fe fe-skip-forward' />
                  </Button>
                  <Button
                    variant='danger'
                    className='mr-2'
                    style={{ order: 1 }}
                    onClick={reject}
                    disabled={isLoadingDocument}
                  >
                    <span className='fe fe-slash' />
                  </Button>
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
