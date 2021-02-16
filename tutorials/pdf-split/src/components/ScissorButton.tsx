import React, { HTMLAttributes } from 'react';
import { Button } from '@lucidtech/flyt-form';

type ScissorButtonProps = HTMLAttributes<HTMLButtonElement>;

const ScissorButton = (props: ScissorButtonProps): JSX.Element => {
  return (
    <Button variant="success" {...props}>
      <span className="fe fe-scissors" />
    </Button>
  );
};

export default ScissorButton;
