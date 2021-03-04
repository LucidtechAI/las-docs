import React, { CSSProperties } from 'react';

type SimpleImageViewerProps = {
  doc: string;
  zoom?: 100 | 150 | 200;
};
const SimpleImageViewer = ({ doc, zoom = 100 }: SimpleImageViewerProps): JSX.Element => {
  const containerStyle: CSSProperties = { width: '100%', height: '95vh', backgroundColor: '#777' };
  const imgStyle: CSSProperties = { width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'top' };
  const barOuterStyle: CSSProperties = {
    overflow: 'hidden',
    paddingBottom: '10px',
  };
  const barInnerStyle: CSSProperties = {
    display: 'flex',
    backgroundColor: '#444',
    color: 'white',
    height: '30px',
    fontSize: '20px',
    boxShadow: '0 4px 4px rgba(0, 0, 0, 0.658)',
  };
  const imageContainerStyle: CSSProperties = { padding: '30px', height: 'calc(100% - 30px)', overflowY: 'auto' };
  const iconGroup: CSSProperties = { height: '100%' };
  return (
    <div style={containerStyle}>
      <div style={barOuterStyle}>
        <div style={barInnerStyle}>
          <div style={iconGroup}>
            <span className="fe fe-zoom-in" />
            <span className="fe fe-zoom-out" />
          </div>
          <div style={iconGroup}>
            <span className="fe fe-rotate-ccw" />
            <span className="fe fe-rotate-cw" />
          </div>
        </div>
      </div>
      <div style={imageContainerStyle}>
        <img src={doc} style={imgStyle} />
      </div>
    </div>
  );
};

export default SimpleImageViewer;
