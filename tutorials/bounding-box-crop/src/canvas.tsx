import { KonvaEventObject } from "konva/types/Node";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Stage, Layer, Image as KonvaImage, Rect } from "react-konva";
import useImage from "use-image";

import BoundingBoxGroup from "./BoundingBox";
import Preview from "./Preview";

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
  imageDimensions: { width: number; height: number, offsetX: number, offsetY: number }
): Array<BoundingBox> {
  const { width: imageWidth, height: imageHeight, offsetX, offsetY } = imageDimensions;

  // For now, expect prediction value to be an array of 4 values: x, y, width, height
  const filteredPredictions = predictions.filter(
    (prediction) =>
      Array.isArray(prediction.value) && prediction.value.length === 4
  );
  const initialBoundingBoxes: Array<BoundingBox> = filteredPredictions.map(
    (prediction, index) => {
      const [x, y, width, height] = prediction.value;
      const pixelX = (x * imageWidth) + offsetX;
      const pixelY = (y * imageHeight) + offsetY;
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

function normalizeOutput(boundingBoxes: Array<BoundingBox>, imageDimensions: { width: number; height: number, offsetX: number, offsetY: number }) {
  const { width: imageWidth, height: imageHeight, offsetX, offsetY } = imageDimensions;
  const output = boundingBoxes.map(box => {
    const x = box.x - offsetX;
    const y = box.y - offsetY;
    const width = 1/imageWidth * box.width ;
    const height = 1/imageHeight * box.height;
    const outX = 1/imageWidth * x
    const outY = 1/imageHeight * y
    return {
      raw: [box.x, box.y, box.width, box.height],
      value: [outX, outY, width, height],
      label: box.id
    }
  })

  return output;
}

const Canvas = ({ doc, predictions }: CanvasProps) => {
  const [image] = useImage(doc);
  const [boundingBoxes, setBoundingBoxes] = useState<Array<BoundingBox>>([]);

  const backgroundOverlay = useRef(null);

  const [selectedId, selectBox] = React.useState<string | null>(null);

  const checkDeselect = (event: KonvaEventObject<MouseEvent | TouchEvent>) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = event.target === backgroundOverlay.current;
    if (clickedOnEmpty) {
      selectBox(null);
    }
  };

  const stageWidth = 600;
  const stageHeight = 600;

  // get image scale for canvas (stage) size so it fits
  const imageSizeProps: BoundingBox = useMemo(() => {
    if (!image) return { width: 0, height: 0, x: 0, y: 0 };

    let { width, height } = image;

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
  }, [image]);

  // when we load our initial predictions
  useEffect(() => {
    const { width: imageWidth, height: imageHeight, x, y } = imageSizeProps;
    const initialBoundingBoxes = normalizePredictionsToPixels(predictions, { width: imageWidth, height: imageHeight, offsetX: x, offsetY: y})
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
    setBoundingBoxes(prev => {
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
    const initialBoundingBoxes = normalizePredictionsToPixels(predictions, { width: imageWidth, height: imageHeight, offsetX: x, offsetY: y})
    setBoundingBoxes(initialBoundingBoxes);
  };

  const output = () => {
    const { width: imageWidth, height: imageHeight, x, y } = imageSizeProps;
    const out = normalizeOutput(boundingBoxes, { width: imageWidth, height: imageHeight, offsetX: x, offsetY: y})
    console.log(out)
  }

  return (
    <>
      <Stage
        width={stageWidth}
        height={stageHeight}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
        style={{
          backgroundPosition: "0px 0px, 10px 10px",
          backgroundSize: "20px 20px",
          backgroundImage:
            "linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee 100%),linear-gradient(45deg, #eee 25%, white 25%, white 75%, #eee 75%, #eee 100%)",
        }}
      >
        <Layer>
          <KonvaImage image={image} {...imageSizeProps} />
          <Rect
            fill='black'
            opacity={0.2}
            ref={backgroundOverlay}
            {...imageSizeProps}
          />
        </Layer>
        <Layer>
          {boundingBoxes.map((box, i) => {
            return (
              <BoundingBoxGroup
                key={box.id}
                shapeProps={box}
                isSelected={box.id === selectedId}
                bounds={imageSizeProps}
                onDelete={() => deleteBox(box.id || "")}
                onSelect={() => {
                  selectBox(box.id || null);
                }}
                onChange={(newAttrs: BoundingBox) => {
                  const boxCopy = boundingBoxes.slice();
                  boxCopy[i] = newAttrs;
                  setBoundingBoxes(boxCopy);
                }}
              />
            );
          })}
        </Layer>
      </Stage>
      {/* <Preview
        thumbnails={boundingBoxes}
        width={200}
        height={600}
        image={image}
        onSelect={selectBox}
      /> */}
      <div>
        <button onClick={addBox}>+ Add box</button>
        <button onClick={reset}>Reset</button>
        <button onClick={output}>Output</button>
      </div>
    </>
  );
};

export default Canvas;
