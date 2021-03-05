import React, { HTMLAttributes } from 'react';

type SpinnerProps = HTMLAttributes<HTMLDivElement>;
const Spinner = ({ className, color, ...rest }: SpinnerProps): JSX.Element => {
  const classes = `spinner-border ${!color ? 'text-primary' : ''}${className ? ` ${className}` : ''}`;
  const style = rest.style ? { ...rest.style, color } : { color };
  return (
    <div className={classes} role="status" {...rest} style={style}>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
