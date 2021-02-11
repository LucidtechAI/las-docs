import React, { HTMLAttributes } from 'react';
import { Button } from '@lucidtech/flyt-form';

type MergeButtonProps = HTMLAttributes<HTMLButtonElement>;

const MergeButton = (props: MergeButtonProps): JSX.Element => {
  return (
    <Button variant="success" {...props}>
      <span className="fe fe-link-2" />
    </Button>
  );
};

export default MergeButton;
