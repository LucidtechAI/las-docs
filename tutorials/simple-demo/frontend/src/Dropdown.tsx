import { Select } from '@lucidtech/flyt-form';
import { SelectProps } from '@lucidtech/flyt-form/dist/types/components/Select';
import React from 'react';

export type DropdownProps = {} & SelectProps<string>;
const Dropdown = ({}: DropdownProps): JSX.Element => {
  return (
    <>
      <label htmlFor={fieldKey} className={styles.label}>
        {fieldInfo?.display || fieldKey}
      </label>
      <Select options={} />
    </>
  );
};

export default Dropdown;
