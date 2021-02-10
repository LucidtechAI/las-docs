import React, { useEffect, useState } from 'react';

import { BoundingBox, QueueStatus, RemoteComponentExternalProps } from './types';
import RND from './components/RND';
import { Button } from '@lucidtech/flyt-form';
import { debounce, generateSemiRandomId } from './utils';
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
  const [boundingBoxes, setBoundingBoxes] = useState<Array<BoundingBox>>([]);
  const [doc, setDoc] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoadingDocument, setIsLoadingDocument] = useState(true);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  // handle window resizing
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 30);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

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

    // filter and map predictions into initial bounding boxes
    const predictions = input?.predictions || [];
    const initialBoundingBoxes = predictions.map((prediction) => {
      const { x, y, w, h } = prediction;
      const box: BoundingBox = {
        x,
        y,
        width: w,
        height: h,
        id: generateSemiRandomId(),
      };
      return box;
    });
    setBoundingBoxes(initialBoundingBoxes);

    // get document
    client
      .getDocument(transitionExecution.input.documentId)
      .then((res) => {
        if (res.contentType !== 'image/jpeg') {
          throw Error('Only JPEG supported for cropping');
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
    const initialBoundingBoxes = predictions.map((prediction) => {
      const { x, y, w, h } = prediction;
      const box: BoundingBox = {
        x,
        y,
        width: w,
        height: h,
        id: generateSemiRandomId(),
      };
      return box;
    });
    setBoundingBoxes(initialBoundingBoxes);
  };

  const onChange = (newBoxes: Array<BoundingBox>) => {
    setBoundingBoxes(newBoxes);
  };

  const addBox = () => {
    const newBoxId = `newBox-${generateSemiRandomId()}`;
    setBoundingBoxes((prev) => [
      ...prev,
      {
        x: 0.35,
        y: 0.35,
        width: 0.2,
        height: 0.2,
        id: newBoxId,
      },
    ]);
  };

  const deleteBox = (id: string) => {
    setBoundingBoxes((prev) => {
      const copy = [...prev];
      const indexToDelete = copy.findIndex((box) => box.id === id);
      if (indexToDelete >= 0) {
        copy.splice(indexToDelete, 1);
      }
      return copy;
    });
  };

  const approve = () => {
    const output = boundingBoxes.map(box => ({ x: box.x, y: box.y, w: box.width, h: box.height }))
    const payload = {
      documentId: transitionExecution?.input?.documentId,
      verified: output,
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
            <div className="card-header" style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  maxWidth: '600px',
                }}
                className="my-3"
              >
                <Button variant="success" onClick={addBox}>
                  <span className="fe fe-plus-square mr-2" /> Add box
                </Button>
                <Button variant="danger" onClick={reset}>
                  <span className="fe fe-refresh-ccw mr-2" /> Reset to predictions
                </Button>
              </div>
            </div>
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
                <RND
                  key={transitionExecution?.input?.documentId || ''}
                  doc={doc}
                  predictions={transitionExecution.input?.predictions}
                  dimensions={dimensions}
                  loading={somethingIsLoading}
                  boundingBoxes={boundingBoxes}
                  onDelete={deleteBox}
                  onChange={onChange}
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
