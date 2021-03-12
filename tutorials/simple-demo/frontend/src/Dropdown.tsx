import React, { forwardRef } from 'react';
import { Select } from '@lucidtech/flyt-form';
import { SelectProps } from '@lucidtech/flyt-form/dist/types/components/Select';

import styles from './Form.module.css';
import { Field } from './';

export type DropdownProps = {
  fieldKey: string;
  field: Field;
  selected: string;
} & SelectProps<string>;
const Dropdown = forwardRef<HTMLInputElement, DropdownProps>(
  ({ options, field, fieldKey }: DropdownProps, ref): JSX.Element => {
    return (
      <>
        <label htmlFor={fieldKey} className={styles.label}>
          {field?.display || fieldKey}
        </label>
        <Select options={options} />
      </>
    );
  },
);

Dropdown.displayName = 'Dropdown';

export default Dropdown;
