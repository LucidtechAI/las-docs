import { KonvaEventObject } from "konva/types/Node";
import React, { useMemo, useRef, useState } from "react";
import { Stage, Layer, Image as KonvaImage, Rect } from "react-konva";
import useImage from "use-image";

import BoundingBoxGroup from "./BoundingBox";

type CanvasProps = {
  doc: string;
};

export type BoundingBox = {
  x: number;
  y: number;
  width: number;
  height: number;
  id?: string;
};

const initialBoundingBoxes = [
  {
    x: 10,
    y: 10,
    width: 100,
    height: 100,
    id: "rect1",
  },
  {
    x: 150,
    y: 150,
    width: 100,
    height: 100,
    id: "rect2",
  },
];

interface Dimensions {
  width: number;
  height: number;
}

const Canvas = ({ doc }: CanvasProps) => {
  const [image] = useImage(doc);
  const [boundingBoxes, setBoundingBoxes] = useState<Array<BoundingBox>>(
    initialBoundingBoxes
  );

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

  const getCenteredXYProps = (dimensions: Dimensions) => {
    const x = (stageWidth - dimensions.width) / 2;
    const y = (stageHeight - dimensions.height) / 2;

    return { x, y };
  };

  const imageSizeProps: BoundingBox = useMemo(() => {
    if (!image) return { width: 0, height: 0, x: 0, y: 0 };

    let { width, height } = image;

    // could add padding or extra dimension to make up for here
    const targetW = stageWidth;
    const targetH = stageHeight;

    // compute the ratios of image dimensions to aperture dimensions
    const widthFit = targetW / width;
    const heightFit = targetH / height;

    // compute a scale for best fit and apply it
    const scale = widthFit > heightFit ? heightFit : widthFit;

    width = width * scale;
    height = height * scale;

    const { x, y } = getCenteredXYProps({ width, height });

    return { width, height, x, y };
  }, [image]);

  return (
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
  );
};

export default Canvas;
