import React, { HTMLAttributes } from 'react';

type CustomHandleProps = HTMLAttributes<HTMLDivElement>;
const CustomHandle = (props: CustomHandleProps): JSX.Element => {
  return (
    <div
      style={{
        display: 'flex',
        background: 'rgba(255,255,255,0.8)',
        borderRadius: '50%',
        border: '1px solid rgba(0,0,0,0.8)',
        height: '80%',
        width: '80%',
        padding: 0,
        margin: '2px',
      }}
      className="custom-handle"
      {...props}
    />
  );
};

export default CustomHandle;
