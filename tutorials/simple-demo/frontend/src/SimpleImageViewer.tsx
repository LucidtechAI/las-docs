import React from 'react'

type SimpleImageViewerProps = {
  doc: string;
}
const SimpleImageViewer = ({doc}: SimpleImageViewerProps) => {
  return (
    <div>
      <img src={doc} />
    </div>
  )
}

export default SimpleImageViewer
