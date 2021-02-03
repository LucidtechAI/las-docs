import { KonvaEventObject } from "konva/types/Node";
import React, { useState } from "react";
import { Stage, Layer, Image, Transformer, Rect } from "react-konva";
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
  fill: string;
  id: string;
}

const initialBoundingBoxes = [
  {
    x: 10,
    y: 10,
    width: 100,
    height: 100,
    fill: "red",
    id: "rect1",
  },
  {
    x: 150,
    y: 150,
    width: 100,
    height: 100,
    fill: "green",
    id: "rect2",
  },
];

const Canvas = ({ doc }: CanvasProps) => {
  const [image] = useImage(doc);
  const [boundingBoxes, setBoundingBoxes] = useState<Array<BoundingBox>>(initialBoundingBoxes);


  const [selectedId, selectBox] = React.useState<string | null>(null);

  const checkDeselect = (event: KonvaEventObject<MouseEvent | TouchEvent>) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = event.target === event.target.getStage();
    if (clickedOnEmpty) {
      selectBox(null);
    }
  };

  return (
    <Stage width={window.innerWidth - 30} height={window.innerHeight - 100} onMouseDown={checkDeselect}
    onTouchStart={checkDeselect}>
      <Layer>

        <Image image={image} />
      </Layer>
      <Layer>
      {boundingBoxes.map((box, i) => {
          return (
            <BoundingBox
              key={i}
              shapeProps={box}
              isSelected={box.id === selectedId}
              onSelect={() => {
                selectBox(box.id);
              }}
              onChange={(newAttrs) => {
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
