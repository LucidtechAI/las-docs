import { KonvaEventObject } from "konva/types/Node";
import React, { useRef, useState } from "react";
import { Stage, Layer, Image, Rect } from "react-konva";
import useImage from "use-image";

import BoundingBox from "./BoundingBox";

type CanvasProps = {
  doc: string;
};

type BoundingBox = {
  x: number;
  y: number;
  width: number;
  height: number;
  id: string;
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

const Canvas = ({ doc }: CanvasProps) => {
  const [image] = useImage(doc);
  const [boundingBoxes, setBoundingBoxes] = useState<Array<BoundingBox>>(
    initialBoundingBoxes
  );

  const backgroundOverlay = useRef(null)

  const [selectedId, selectBox] = React.useState<string | null>(null);

  const checkDeselect = (event: KonvaEventObject<MouseEvent | TouchEvent>) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = event.target === backgroundOverlay.current;
    if (clickedOnEmpty) {
      selectBox(null);
    }
  };

  const width = window.innerWidth - 30;
  const height = window.innerHeight - 100;

  return (
    <Stage
      width={window.innerWidth - 30}
      height={window.innerHeight - 100}
      onMouseDown={checkDeselect}
      onTouchStart={checkDeselect}
    >
      <Layer>
        <Image image={image} />
        <Rect fill='black' opacity={0.2} width={width} height={height} ref={backgroundOverlay} />
</Layer><Layer>
        {boundingBoxes.map((box, i) => {
          return (
            <BoundingBox
              key={box.id}
              shapeProps={box}
              isSelected={box.id === selectedId}
              onSelect={() => {
                selectBox(box.id);
              }}
              onChange={(newAttrs: any) => {
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
