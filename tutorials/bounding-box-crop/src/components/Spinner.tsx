import React, { HTMLAttributes } from 'react';

type SpinnerProps = HTMLAttributes<HTMLDivElement>;
const Spinner = ({ className, ...rest }: SpinnerProps): JSX.Element => {
  const classes = `spinner-border text-primary${className ? ` ${className}` : ''}`;
  return (
    <div className={classes} role="status" {...rest}>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
