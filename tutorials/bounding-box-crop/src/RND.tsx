import { Button } from "@lucidtech/flyt-form";
import React, { useEffect, useMemo, useState } from "react";
import { Rnd } from "react-rnd";

type CanvasProps = {
  doc: string;
  predictions: any;
};

export type BoundingBox = {
  x: number;
  y: number;
  width: number;
  height: number;
  id?: string;
};
interface Dimensions {
  width: number;
  height: number;
}

interface Prediction {
  value: [number, number, number, number];
  label: string | null;
}

// normalize to pixel values
function normalizePredictionsToPixels(
  predictions: Array<Prediction>,
  imageDimensions: Dimensions
): Array<BoundingBox> {
  const { width: imageWidth, height: imageHeight } = imageDimensions;

  // For now, expect prediction value to be an array of 4 values: x, y, width, height
  const filteredPredictions = predictions.filter(
    (prediction) =>
      Array.isArray(prediction.value) && prediction.value.length === 4
  );
  const initialBoundingBoxes: Array<BoundingBox> = filteredPredictions.map(
    (prediction, index) => {
      const [x, y, width, height] = prediction.value;
      const pixelX = x * imageWidth;
      const pixelY = y * imageHeight;
      const pixelWidth = width * imageWidth;
      const pixelHeight = height * imageHeight;
      return {
        x: pixelX,
        y: pixelY,
        width: pixelWidth,
        height: pixelHeight,
        id: `${prediction.label || "no-label"}-${index.toString()}`,
      };
    }
  );

  return initialBoundingBoxes;
}

function normalizeOutput(
  boundingBoxes: Array<BoundingBox>,
  imageDimensions: {
    width: number;
    height: number;
  }
) {
  const { width: imageWidth, height: imageHeight } = imageDimensions;
  const output = boundingBoxes.map((box) => {
    const { x, y } = box;
    const width = (1 / imageWidth) * box.width;
    const height = (1 / imageHeight) * box.height;
    const outX = (1 / imageWidth) * x;
    const outY = (1 / imageHeight) * y;
    return {
      raw: [box.x, box.y, box.width, box.height],
      value: [outX, outY, width, height],
      label: box.id,
    };
  });

  return output;
}

const RND = ({ doc, predictions }: CanvasProps) => {
  const [boundingBoxes, setBoundingBoxes] = useState<Array<BoundingBox>>([]);

  const CONTAINER_WIDTH = 700;
  const CONTAINER_HEIGHT = 700;

  // get image scale for canvas (stage) size so it fits
  const imageSizeProps: Dimensions = useMemo(() => {
    if (!doc) return { width: 0, height: 0 };

    const image = new Image();
    image.src = doc;

    let { width, height } = image;

    // could add padding or extra dimension to make up for here
    const targetWidth = CONTAINER_WIDTH; // + (padding * 2) for instance
    const targetHeight = CONTAINER_HEIGHT;

    // compute the ratios of image dimensions to aperture dimensions
    const widthFit = targetWidth / width;
    const heightFit = targetHeight / height;

    // compute a scale for best fit and apply it
    const scale = widthFit > heightFit ? heightFit : widthFit;

    width = width * scale;
    height = height * scale;

    return { width, height };
  }, [doc]);

  // when we load our initial predictions
  useEffect(() => {
    const { width: imageWidth, height: imageHeight } = imageSizeProps;
    const initialBoundingBoxes = normalizePredictionsToPixels(predictions, {
      width: imageWidth,
      height: imageHeight,
    });
    setBoundingBoxes(initialBoundingBoxes);
  }, [predictions, imageSizeProps]);

  const addBox = () => {
    const { width: imageWidth, height: imageHeight } = imageSizeProps;
    // should be good enough to not create duplicate ids
    const newBoxId = `newBox-${new Date().getTime()}-${Math.floor(
      Math.random() * 10000
    )}`;
    setBoundingBoxes((prev) => [
      ...prev,
      {
        x: 0.5 * imageWidth,
        y: 0.5 * imageHeight,
        width: 100,
        height: 100,
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

  const reset = () => {
    const { width: imageWidth, height: imageHeight } = imageSizeProps;
    const initialBoundingBoxes = normalizePredictionsToPixels(predictions, {
      width: imageWidth,
      height: imageHeight,
    });
    setBoundingBoxes(initialBoundingBoxes);
  };

  const output = () => {
    const { width: imageWidth, height: imageHeight } = imageSizeProps;
    const out = normalizeOutput(boundingBoxes, {
      width: imageWidth,
      height: imageHeight,
    });
    console.log(out);
  };

  const onChange = (
    index: number,
    position?: { x: number; y: number },
    dimensions?: { width: number; height: number }
  ) => {
    setBoundingBoxes((prev) => {
      const boxArrayCopy = prev.slice();
      let boxCopy = { ...boxArrayCopy[index] };
      if (position) {
        boxCopy = { ...boxCopy, ...position };
      }
      if (dimensions) {
        boxCopy = { ...boxCopy, ...dimensions };
      }
      boxArrayCopy[index] = boxCopy;
      return boxArrayCopy;
    });
  };

  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}} className="my-3">
        <Button variant='success' onClick={addBox}>
          <span className='fe fe-plus-square mr-2' /> Add box
        </Button>
        <Button variant='danger' onClick={reset}>
          <span className='fe fe-refresh-ccw mr-2' /> Reset to predictions
        </Button>
      </div>
      <div
        style={{
          backgroundPosition: "0px 0px, 10px 10px",
          backgroundSize: "20px 20px",
          backgroundImage:
            "linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee 100%),linear-gradient(45deg, #eee 25%, white 25%, white 75%, #eee 75%, #eee 100%)",
          width: CONTAINER_WIDTH,
          height: CONTAINER_HEIGHT,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          id='imageContainer'
          style={{ width: imageSizeProps.width, height: imageSizeProps.height }}
        >
          <img
            src={doc}
            style={{
              objectFit: "contain",
              width: "auto",
              height: "auto",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />

          {boundingBoxes.map((box, index) => {
            return (
              <Rnd
                key={box.id}
                bounds='parent'
                size={{
                  width: box.width,
                  height: box.height,
                }}
                position={{
                  x: box.x,
                  y: box.y,
                }}
                onDragStop={(_event: any, d: any) => {
                  onChange(index, { x: d.x, y: d.y });
                }}
                onResize={(_event, _direction, ref, _delta, position) => {
                  onChange(index, position, {
                    width: ref.offsetWidth,
                    height: ref.offsetHeight,
                  });
                }}
                style={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  border: "1px dashed rgba(0,0,0,0.5)",
                }}
              >
                <Button
                  variant='danger'
                  onClick={() => deleteBox(box.id || "")}
                  className='m-2 p-1'
                >
                  <span className='fe fe-trash-2' />
                </Button>
              </Rnd>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RND;