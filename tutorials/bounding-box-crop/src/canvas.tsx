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

function getCenteredXYProps(
  stageDimensions: Dimensions,
  shapeDimensions: Dimensions
) {
  const x = (stageDimensions.width - shapeDimensions.width) / 2;
  const y = (stageDimensions.height - shapeDimensions.height) / 2;

  return { x, y };
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
    const { width: imageWidth, height: imageHeight } = imageSizeProps;

    // normalize to pixel values
    const initialBoundingBoxes: Array<BoundingBox> = predictions.map(
      (prediction, index) => {
        // For now, expect prediction value to be an array of 4 values: x, y, width, height
        if (!Array.isArray(prediction.value) || prediction.value.length !== 4)
          return;
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
          id: prediction.label || index.toString(),
        };
      }
    );

    setBoundingBoxes(initialBoundingBoxes);
  }, [predictions, imageSizeProps]);

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
      <Preview
        thumbnails={boundingBoxes}
        width={200}
        height={600}
        image={image}
        onSelect={selectBox}
      />
    </>
  );
};

export default Canvas;
