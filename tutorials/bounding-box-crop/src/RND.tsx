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

function getCenteredXYProps(
  stageDimensions: Dimensions,
  shapeDimensions: Dimensions
) {
  const x = (stageDimensions.width - shapeDimensions.width) / 2;
  const y = (stageDimensions.height - shapeDimensions.height) / 2;

  return { x, y };
}

// normalize to pixel values
function normalizePredictionsToPixels(
  predictions: Array<Prediction>,
  imageDimensions: {
    width: number;
    height: number;
    offsetX: number;
    offsetY: number;
  }
): Array<BoundingBox> {
  const {
    width: imageWidth,
    height: imageHeight,
    offsetX,
    offsetY,
  } = imageDimensions;

  // For now, expect prediction value to be an array of 4 values: x, y, width, height
  const filteredPredictions = predictions.filter(
    (prediction) =>
      Array.isArray(prediction.value) && prediction.value.length === 4
  );
  const initialBoundingBoxes: Array<BoundingBox> = filteredPredictions.map(
    (prediction, index) => {
      const [x, y, width, height] = prediction.value;
      const pixelX = x * imageWidth + offsetX;
      const pixelY = y * imageHeight + offsetY;
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

const RND = ({ doc, predictions }: CanvasProps) => {
  const [boundingBoxes, setBoundingBoxes] = useState<Array<BoundingBox>>([]);

  const stageWidth = 600;
  const stageHeight = 600;

  // get image scale for canvas (stage) size so it fits
  const imageSizeProps: BoundingBox = useMemo(() => {
    if (!doc) return { width: 0, height: 0, x: 0, y: 0 };

    const image = new Image();
    image.src = doc;

    let { width, height } = image;
    console.log(width, height);

    // could add padding or extra dimension to make up for here
    const targetWidth = stageWidth; // + (padding * 2) for instance
    const targetHeight = stageHeight;

    // compute the ratios of image dimensions to aperture dimensions
    const widthFit = targetWidth / width;
    const heightFit = targetHeight / height;

    // compute a scale for best fit and apply it
    const scale = widthFit > heightFit ? heightFit : widthFit;

    width = width * scale;
    height = height * scale;

    const { x, y } = getCenteredXYProps(
      { width: stageWidth, height: stageHeight },
      { width, height }
    );

    return { width, height, x, y };
  }, [doc]);

  // when we load our initial predictions
  useEffect(() => {
    const { width: imageWidth, height: imageHeight, x, y } = imageSizeProps;
    const initialBoundingBoxes = normalizePredictionsToPixels(predictions, {
      width: imageWidth,
      height: imageHeight,
      offsetX: x,
      offsetY: y,
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
    const { width: imageWidth, height: imageHeight, x, y } = imageSizeProps;
    const initialBoundingBoxes = normalizePredictionsToPixels(predictions, {
      width: imageWidth,
      height: imageHeight,
      offsetX: x,
      offsetY: y,
    });
    setBoundingBoxes(initialBoundingBoxes);
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
    <div
      style={{
        backgroundPosition: "0px 0px, 10px 10px",
        backgroundSize: "20px 20px",
        backgroundImage:
          "linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee 100%),linear-gradient(45deg, #eee 25%, white 25%, white 75%, #eee 75%, #eee 100%)",
      }}
    >
      <img
        src={doc}
        style={{ objectFit: "contain", width: stageWidth, height: stageHeight }}
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
            onDragStop={(e: any, d: any) => {
              onChange(index, { x: d.x, y: d.y });
            }}
            onResize={(e, direction, ref, delta, position) => {
              onChange(index, position, {
                width: ref.offsetWidth,
                height: ref.offsetHeight,
              });
            }}
            style={{ backgroundColor: "green" }}
          >
            001
            {/* <div onClick={() => deleteBox(box.id || "")}>Del</div> */}
          </Rnd>
        );
      })}
    </div>
  );
};

export default RND;
