import React, { CSSProperties } from 'react'

const containerStyle: CSSProperties = { width: '100%', height: '95vh' };
const imgStyle: CSSProperties = { width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'top' };
type SimpleImageViewerProps = {
  doc: string;
}
const SimpleImageViewer = ({doc}: SimpleImageViewerProps) => {
  return (
    <div style={containerStyle}>
      <img src={doc} style={imgStyle}/>
    </div>
  )
}

export default SimpleImageViewer
