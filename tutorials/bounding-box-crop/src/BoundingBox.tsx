import { TransformerConfig } from "konva/types/shapes/Transformer";
import React from "react";
import { KonvaNodeComponent, Rect as KonvaRect, Transformer } from "react-konva";
import Konva from "konva";
import { Rect, RectConfig } from "konva/types/shapes/Rect";
import { Vector2d } from "konva/types/types";
import { NodeConfig, Node } from "konva/types/Node";

const BoundingBox = ({ shapeProps, isSelected, onSelect, onChange }) => {
  const shapeRef = React.useRef<Konva.Rect>(null);
  const trRef = React.useRef<Konva.Transformer>(null);

  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current?.nodes([shapeRef.current!]);
      trRef.current?.getLayer()?.batchDraw();
    }
  }, [isSelected]);

  function checkInBounds (this: any, pos: Vector2d) {
    console.log(this, pos)
    let newX = pos.x;
    let newY = pos.y;

    // check parent canvas for max width/height
    if (this?.parent?.canvas) {
      const maxHeight = this?.parent?.canvas.height;
      const maxWidth = this?.parent?.canvas.width;
      const currentHeight = this?.attrs?.height;
      const currentWidth = this?.attrs?.width;
      if (pos.y > maxHeight - currentHeight) {
        newY = maxHeight - currentHeight;
      }

      if (pos.x > maxWidth - currentWidth) {
        newX = maxWidth - currentWidth;
      }
    }

    // use local position for < 0 bounds (top + left)
    if (pos.x < 0) {
      newX = 0;
    }

    if (pos.y < 0) {
      newY = 0;
    }

    return {
      x: newX,
      y: newY,
    };
  };

  return (
    <>
      <KonvaRect
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        opacity={0.2}
        dragBoundFunc={checkInBounds}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(_event) => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = shapeRef.current;
          const scaleX = node?.scaleX();
          const scaleY = node?.scaleY();

          // we will reset it back
          node?.scaleX(1);
          node?.scaleY(1);
          onChange({
            ...shapeProps,
            x: node?.x(),
            y: node?.y(),
            // set minimal value
            width: Math.max(5, (node?.width() || 1) * (scaleX || 1)),
            height: Math.max((node?.height() || 1) * (scaleY || 1)),
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          rotateEnabled={false}
          keepRatio={false}
          enabledAnchors={[
            "top-left",
            "top-right",
            "bottom-left",
            "bottom-right",
          ]}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

export default BoundingBox;
