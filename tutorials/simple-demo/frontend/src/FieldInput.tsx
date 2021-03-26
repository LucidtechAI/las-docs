import React, { forwardRef } from 'react';
import { Input, InputProps } from '@lucidtech/flyt-form';
import { Field } from './types';
import styles from './Form.module.css';

type InputPropsWithoutOnChange = Omit<InputProps, 'onChange'>;
export type FieldInputProps = {
  fieldInfo?: Field;
  fieldKey: string;
  value: string | null | undefined;
  onChange: (fieldKey: string, value: string) => void;
} & InputPropsWithoutOnChange;
const FieldInput = forwardRef<HTMLInputElement, FieldInputProps>(
  ({ fieldInfo, fieldKey, value, onChange, ...rest }: FieldInputProps, ref) => {
    return (
      <>
        <label htmlFor={fieldKey} className={styles.label}>
          {fieldInfo?.display || fieldKey}
        </label>
        <Input
          name={fieldKey}
          value={value || ''}
          onChange={(e) => onChange(fieldKey, e.target.value)}
          ref={ref}
          {...rest}
        />
      </>
    );
  },
);

FieldInput.displayName = 'FieldInput';

export default FieldInput;
