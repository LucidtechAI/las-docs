import React from "react";
import {
  Rect as KonvaRect,
  Group,
  Transformer,
  Text,
  Rect,
  Circle,
  Image as KonvaImage
} from "react-konva";
import Konva from "konva";
import { Vector2d } from "konva/types/types";
import { BoundingBox } from "./Canvas";

import trash from './trash-2.svg';

type BoundingBoxProps = {
  bounds: BoundingBox;
  shapeProps: BoundingBox;
  isSelected: boolean;
  onSelect: () => void;
  onChange: (newAttrs: BoundingBox) => void;
  onDelete: () => void;
};

const deleteIcon = new Image()
deleteIcon.src = trash;

const BoundingBoxGroup = ({
  shapeProps,
  isSelected,
  onSelect,
  onChange,
  bounds,
  onDelete,
}: BoundingBoxProps) => {
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
    if (bounds) {
      const maxHeight = bounds.height;
      const maxWidth = bounds.width;
      const currentHeight = this?.attrs?.height;
      const currentWidth = this?.attrs?.width;
      if (pos.y > bounds.y + maxHeight - currentHeight) {
        newY = bounds.y + maxHeight - currentHeight;
      }

      if (pos.x > bounds.x + maxWidth - currentWidth) {
        newX = bounds.x + maxWidth - currentWidth;
      }
    }

    // use local position for < 0 bounds (top + left)
    if (pos.x < bounds.x) {
      newX = bounds.x;
    }

    if (pos.y < bounds.y) {
      newY = bounds.y;
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
        onDragMove={(e) => {
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
            x: node?.x() || 0,
            y: node?.y() || 0,
            // set minimal value
            width: Math.max(5, (node?.width() || 1) * (scaleX || 1)),
            height: Math.max((node?.height() || 1) * (scaleY || 1)),
          });
        }}
      >
        <KonvaRect
          fill='rgba(255,255,255,0.2)'
          x={0}
          y={0}
          width={shapeProps.width}
          height={shapeProps.height}
          stroke='rgba(0,0,0,0.8)'
          strokeEnabled
          strokeWidth={1}
          dashEnabled
          dash={[5, 5]}
        />
        <Group
          x={10}
          y={10}
          width={20}
          height={20}
          onClick={onDelete}
          onMouseEnter={(e) => {
            const container = e.target?.getStage()?.container();
            if (container) {
              container.style.cursor = "pointer";
            }
          }}
          onMouseLeave={(e) => {
            const container = e.target?.getStage()?.container();
            if (container) {
              container.style.cursor = "default";
            }
          }}
        >
          <Rect fill='rgba(255,0,0,0.5)' x={0} y={0} width={20} height={20} strokeEnabled stroke="black" cornerRadius={3}  strokeWidth={1}/>
          <KonvaImage image={deleteIcon} width={14} height={14} x={3} y={3} />
        </Group>
      </Group>
      {isSelected && (
        <Transformer
          ref={trRef}
          rotateEnabled={false}
          keepRatio={false}
          anchorCornerRadius={50}
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

export default BoundingBoxGroup;
