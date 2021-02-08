import React, { HTMLAttributes } from 'react';

type CustomHandleProps = HTMLAttributes<HTMLDivElement>;
const CustomHandle = (props: CustomHandleProps): JSX.Element => {
  return (
    <div
      style={{
        display: 'flex',
        background: 'rgba(255,255,255,0.5)',
        borderRadius: '50%',
        border: '1px solid rgba(0,0,0,0.8)',
        height: '50%',
        width: '50%',
        padding: 0,
        margin: '5px',
      }}
      className="custom-handle"
      {...props}
    />
  );
};

export default CustomHandle;
