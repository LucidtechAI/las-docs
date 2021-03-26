import React, { forwardRef } from 'react';
import { Select, SelectProps } from '@lucidtech/flyt-form';

import styles from './Form.module.css';
import { EnumOption, Field } from './types';

type SelectPropsWithoutOnChange = Omit<SelectProps<EnumOption>, 'onChange'>;
export type DropdownProps = {
  fieldKey: string;
  field: Field;
  onChange: (fieldKey: string, value: string) => void;
} & SelectPropsWithoutOnChange;
const Dropdown = forwardRef<HTMLButtonElement, DropdownProps>(
  ({ options, field, fieldKey, selectedItem, onChange, ...rest }: DropdownProps, ref): JSX.Element => {
    const handSelectedItemChange = (item) => {
      if (item.selectedItem) {
        onChange(fieldKey, item.selectedItem);
      }
    };

    return (
      <>
        <label htmlFor={fieldKey} className={styles.label}>
          {field?.display || fieldKey}
        </label>
        <Select
          options={options}
          selectedItem={selectedItem}
          placeholder="Select an option..."
          handleSelectedItemChange={handSelectedItemChange}
          innerRef={ref}
          {...rest}
        />
      </>
    );
  },
);

Dropdown.displayName = 'Dropdown';

export default Dropdown;
