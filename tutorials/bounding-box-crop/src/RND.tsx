import { Button } from "@lucidtech/flyt-form";
import React, { useEffect, useRef, useState } from "react";
import { Rnd } from "react-rnd";
import CustomHandle from "./CustomHandle";

type CanvasProps = {
  doc: string;
  predictions: any;
  dimensions: Dimensions;
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

interface Position {
  x: number;
  y: number;
}

interface Prediction {
  value: [number, number, number, number];
  label: string | null;
}

function normalizeToPixels(
  dimensions: Dimensions & Position,
  imageDimensions: Dimensions
): Dimensions & Position {
  const { width: imageWidth, height: imageHeight } = imageDimensions;
  const { x, y, width, height } = dimensions;
  const pixelX = x * imageWidth;
  const pixelY = y * imageHeight;
  const pixelWidth = width * imageWidth;
  const pixelHeight = height * imageHeight;

  return { x: pixelX, y: pixelY, width: pixelWidth, height: pixelHeight };
}

function normalizePositionToScale(
  position: Position,
  imageDimensions: Dimensions
): Position {
  const { width: imageWidth, height: imageHeight } = imageDimensions;
  const scaleX = (1 / imageWidth) * position.x;
  const scaleY = (1 / imageHeight) * position.y;
  return {
    x: scaleX,
    y: scaleY,
  };
}

function normalizeDimensionsToScale(
  dimensions: Dimensions,
  imageDimensions: Dimensions
): Dimensions {
  const { width: imageWidth, height: imageHeight } = imageDimensions;
  const scaleWidth = (1 / imageWidth) * dimensions.width;
  const scaleHeight = (1 / imageHeight) * dimensions.height;
  return {
    width: scaleWidth,
    height: scaleHeight,
  };
}

function normalizeToScale(
  box: Dimensions & Position,
  imageDimensions: Dimensions
): Dimensions & Position {
  const { x, y, width, height } = box;
  const { width: scaleWidth, height: scaleHeight } = normalizeDimensionsToScale(
    { width, height },
    imageDimensions
  );
  const { x: scaleX, y: scaleY } = normalizePositionToScale(
    { x, y },
    imageDimensions
  );

  return {
    x: scaleX,
    y: scaleY,
    width: scaleWidth,
    height: scaleHeight,
  };
}

// good enough for our purpose ok
function generateSemiRandomId(): string {
  const newBoxId = `newBox-${new Date().getTime()}-${Math.floor(
    Math.random() * 10000
  )}`;

  return newBoxId;
}

const MIN_CONTAINER_WIDTH = 600;
const MIN_CONTAINER_HEIGHT = 600;

const RND = ({ doc, predictions, dimensions }: CanvasProps) => {
  const [boundingBoxes, setBoundingBoxes] = useState<Array<BoundingBox>>([]);
  const [imageSizeProps, setImageSizeProps] = useState<Dimensions | null>(null);

  // get image scale for canvas (stage) size so it fits
  useEffect(() => {
    if (!doc) return;

    const image = new Image();
    image.src = doc;

    image.onload = () => {
      let { width, height } = image;

      let targetWidth = MIN_CONTAINER_WIDTH;
      let targetHeight = MIN_CONTAINER_HEIGHT;

      // check if we have more space we could use
      const NAV_BAR_WIDTH = 300; // + some padding for safety 🤷‍♀️
      if (dimensions.width - NAV_BAR_WIDTH > targetWidth) {
        targetWidth = dimensions.width - NAV_BAR_WIDTH;
      }
      const HEIGHT_PADDING = 250; // for safety
      if (dimensions.height - HEIGHT_PADDING > targetHeight) {
        targetHeight = dimensions.height - HEIGHT_PADDING;
      }

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

  // when we load our initial predictions
  useEffect(() => {
    const filteredPredictions = predictions.filter(
      (prediction) =>
        Array.isArray(prediction.value) && prediction.value.length === 4
    );
    const initialBoundingBoxes = filteredPredictions.map(
      (prediction, index) => {
        const [x, y, width, height] = prediction.value;
        const box: BoundingBox = {
          x,
          y,
          width,
          height,
          id: prediction.label
            ? `${prediction.label}-${index}`
            : generateSemiRandomId(),
        };
        return box;
      }
    );
    setBoundingBoxes(initialBoundingBoxes);
  }, [predictions]);

  const addBox = () => {
    if (!imageSizeProps) return;
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
    const filteredPredictions = predictions.filter(
      (prediction) =>
        Array.isArray(prediction.value) && prediction.value.length === 4
    );
    const initialBoundingBoxes = filteredPredictions.map(
      (prediction, index) => {
        const [x, y, width, height] = prediction.value;
        const box: BoundingBox = {
          x,
          y,
          width,
          height,
          id: prediction.label
            ? `${prediction.label}-${index}`
            : generateSemiRandomId(),
        };
        return box;
      }
    );
    setBoundingBoxes(initialBoundingBoxes);
  };

  const output = () => {
    console.log(boundingBoxes);
  };

  const onChange = (
    index: number,
    position?: Position,
    dimensions?: Dimensions
  ) => {
    setBoundingBoxes((prev) => {
      const boxArrayCopy = prev.slice();
      let boxCopy = { ...boxArrayCopy[index] };
      if (position) {
        const scalePosition = normalizePositionToScale(
          position,
          imageSizeProps || { width: 1, height: 1 }
        );
        boxCopy = { ...boxCopy, ...scalePosition };
      }
      if (dimensions) {
        const scaleDimensions = normalizeDimensionsToScale(
          dimensions,
          imageSizeProps || { width: 1, height: 1 }
        );
        boxCopy = { ...boxCopy, ...scaleDimensions };
      }
      boxArrayCopy[index] = boxCopy;
      return boxArrayCopy;
    });
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
        className='my-3'
      >
        <Button variant='success' onClick={addBox}>
          <span className='fe fe-plus-square mr-2' /> Add box
        </Button>
        <Button variant='danger' onClick={reset}>
          <span className='fe fe-refresh-ccw mr-2' /> Reset to predictions
        </Button>
        <Button variant='primary' onClick={output}>
          <span className='fe fe-info mr-2' /> Output
        </Button>
      </div>
      <div
        style={{
          backgroundPosition: "0px 0px, 10px 10px",
          backgroundSize: "20px 20px",
          backgroundImage:
            "linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee 100%),linear-gradient(45deg, #eee 25%, white 25%, white 75%, #eee 75%, #eee 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          id='imageContainer'
          style={{
            width: imageSizeProps?.width,
            height: imageSizeProps?.height,
            border: "1px solid rgba(0,0,0,0.5)",
            boxSizing: "content-box",
          }}
        >
          <img
            src={doc}
            style={{
              objectFit: "contain",
              width: imageSizeProps?.width,
              height: "auto",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
            draggable={false}
          />

          {imageSizeProps &&
            boundingBoxes.map((box, index) => {
              const { x, y, width, height } = normalizeToPixels(
                box,
                imageSizeProps
              );
              return (
                <Rnd
                  key={box.id}
                  bounds='parent'
                  size={{
                    width: width,
                    height: height,
                  }}
                  position={{
                    x: x,
                    y: y,
                  }}
                  onDragStop={(_event: any, d: any) => {
                    onChange(index, { x: d.x, y: d.y });
                  }}
                  onResize={(_event, _direction, ref, _delta, position) => {
                    onChange(index, position, {
                      width: ref.offsetWidth,
                      height: ref.offsetHeight,
                    });
                  }}
                  minHeight={40}
                  minWidth={40}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.2)",
                    border: "1px dashed rgba(0,0,0,0.5)",
                  }}
                  resizeHandleComponent={{
                    bottomLeft: <CustomHandle />,
                    bottomRight: <CustomHandle />,
                    topLeft: <CustomHandle />,
                    topRight: <CustomHandle />,
                  }}
                >
                  <Button
                    variant='danger'
                    onClick={() => deleteBox(box.id || "")}
                    className='m-2 p-1'
                    style={{
                      position: "absolute",
                      borderColor: "var(--danger)",
                    }}
                  >
                    <span className='fe fe-trash-2' />
                  </Button>
                </Rnd>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default RND;
