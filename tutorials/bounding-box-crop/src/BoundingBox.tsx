import React from "react";
import { Rect as KonvaRect, Group, Transformer } from "react-konva";
import Konva from "konva";
import { Vector2d } from "konva/types/types";

const BoundingBox = ({ shapeProps, isSelected, onSelect, onChange }) => {
  const shapeRef = React.useRef<Konva.Group>(null);
  const trRef = React.useRef<Konva.Transformer>(null);

  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current?.nodes([shapeRef.current!]);
      trRef.current?.getLayer()?.batchDraw();
    }
  }, [isSelected]);

  function checkInBounds(this: any, pos: Vector2d) {
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
  }

  return (
    <>
      <Group
        ref={shapeRef}
        onClick={onSelect}
        onTap={onSelect}
        dragBoundFunc={checkInBounds}
        draggable
        {...shapeProps}
        onDragStart={onSelect}
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransform={(_event) => {
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
      >
        <KonvaRect
          fill='white'
          opacity={0.2}
          x={0}
          y={0}
          width={shapeProps.width}
          height={shapeProps.height}
        />
        <KonvaRect
          stroke='green'
          strokeEnabled
          x={0}
          y={0}
          width={shapeProps.width}
          height={shapeProps.height}
          strokeWidth={2}
          dashEnabled
          dash={[5, 5]}
        />
      </Group>
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
borderEnabled={false}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 10 || newBox.height < 10) {
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
