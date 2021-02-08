import { Button } from '@lucidtech/flyt-form';
import React, { useEffect, useState } from 'react';
import { Position, Rnd } from 'react-rnd';
import CustomHandle from './CustomHandle';
import Spinner from './Spinner';
import { BoundingBox, Dimensions } from './types';
import { normalizeDimensionsToScale, normalizePositionToScale, normalizeToPixels } from './utils';

type RNDProps = {
  doc: string;
  predictions: any;
  dimensions: Dimensions;
  loading?: boolean;
  boundingBoxes: Array<BoundingBox>;
  onDelete: (id: string) => void;
  onChange: (newBoxes: Array<BoundingBox>) => void;
};

const MIN_CONTAINER_WIDTH = 600;
const MIN_CONTAINER_HEIGHT = 600;

const RND = ({ doc, dimensions, loading, boundingBoxes, onDelete, onChange }: RNDProps): JSX.Element => {
  const [imageSizeProps, setImageSizeProps] = useState<Dimensions | null>(null);

  let targetWidth = MIN_CONTAINER_WIDTH;
  let targetHeight = MIN_CONTAINER_HEIGHT;

  // check if we have more space we could use
  const NAV_BAR_WIDTH = 300; // + some padding for safety 🤷‍♀️
  if (dimensions.width - NAV_BAR_WIDTH > targetWidth) {
    targetWidth = dimensions.width - NAV_BAR_WIDTH;
  }
  const HEIGHT_PADDING = 275; // for safety
  if (dimensions.height - HEIGHT_PADDING > targetHeight) {
    targetHeight = dimensions.height - HEIGHT_PADDING;
  }

  // get image scale for canvas (stage) size so it fits
  useEffect(() => {
    setImageSizeProps(null);
    if (!doc) return;

    const image = new Image();
    image.src = doc;

    image.onload = () => {
      let { width, height } = image;

      // compute the ratios of image dimensions to aperture dimensions
      const widthFit = targetWidth / width;
      const heightFit = targetHeight / height;

      // compute a scale for best fit and apply it
      const scale = widthFit > heightFit ? heightFit : widthFit;

      width = width * scale;
      height = height * scale;

      setImageSizeProps({ width, height });
    };
  }, [doc, dimensions]);

  const onBoxChange = (index: number, position?: Position, dimensions?: Dimensions) => {
    const boxArrayCopy = [...boundingBoxes];
    let boxCopy = { ...boxArrayCopy[index] };
    if (position) {
      const scalePosition = normalizePositionToScale(position, imageSizeProps || { width: 1, height: 1 });
      boxCopy = { ...boxCopy, ...scalePosition };
    }
    if (dimensions) {
      const scaleDimensions = normalizeDimensionsToScale(dimensions, imageSizeProps || { width: 1, height: 1 });
      boxCopy = { ...boxCopy, ...scaleDimensions };
    }
    boxArrayCopy[index] = boxCopy;
    onChange(boxArrayCopy);
  };

  return (
    <div
      style={{
        backgroundPosition: '0px 0px, 10px 10px',
        backgroundSize: '20px 20px',
        backgroundImage:
          'linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee 100%),linear-gradient(45deg, #eee 25%, white 25%, white 75%, #eee 75%, #eee 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: targetWidth,
        minHeight: targetHeight,
      }}
    >
      {loading || !imageSizeProps ? (
        <Spinner />
      ) : (
        <div
          id="imageContainer"
          style={{
            width: imageSizeProps?.width,
            height: imageSizeProps?.height,
            boxSizing: 'content-box',
          }}
        >
          <img
            src={doc}
            style={{
              objectFit: 'contain',
              width: imageSizeProps?.width,
              height: 'auto',
              maxWidth: '100%',
              maxHeight: '100%',
            }}
            draggable={false}
          />

          {boundingBoxes.map((box, index) => {
            const { x, y, width, height } = normalizeToPixels(box, imageSizeProps);
            // base key on window dimensions to force a re-render of boxes if window gets resized
            // slightly hacky but necessary it seems
            const key = `${box.id}-${dimensions.height}-${dimensions.width}-${imageSizeProps.width}-${imageSizeProps.height}`;
            return (
              <Rnd
                key={key}
                bounds="parent"
                size={{
                  width: width,
                  height: height,
                }}
                position={{
                  x: x,
                  y: y,
                }}
                onDragStop={(_event: any, d: any) => {
                  onBoxChange(index, { x: d.x, y: d.y });
                }}
                onResize={(_event, _direction, ref, _delta, position) => {
                  onBoxChange(index, position, {
                    width: ref.offsetWidth,
                    height: ref.offsetHeight,
                  });
                }}
                minHeight={40}
                minWidth={40}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  border: '1px dashed rgba(0,0,0,0.5)',
                }}
                resizeHandleComponent={{
                  bottomLeft: <CustomHandle />,
                  bottomRight: <CustomHandle />,
                  topLeft: <CustomHandle />,
                  topRight: <CustomHandle />,
                }}
              >
                <Button
                  variant="danger"
                  onClick={() => box.id && onDelete(box.id)}
                  className="m-2 p-1"
                  style={{
                    borderColor: 'var(--danger)',
                  }}
                >
                  <span className="fe fe-trash-2" />
                </Button>
              </Rnd>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RND;
