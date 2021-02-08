import React from 'react';

type ErrorProps = {
  children: React.ReactNode;
};
const ErrorAlert = ({ children }: ErrorProps): JSX.Element => {
  return (
    <div className="alert alert-danger" role="alert">
      Error: {children}
    </div>
  );
};

export default ErrorAlert;
