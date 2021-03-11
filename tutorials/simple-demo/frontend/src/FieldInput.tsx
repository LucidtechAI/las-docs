import React from 'react';
import { Input } from '@lucidtech/flyt-form';
import { InputProps } from '@lucidtech/flyt-form/dist/types/components/Input';
import { Field } from './';
import styles from './FieldInput.module.css';

type InputPropsWithoutOnChange = Omit<InputProps, 'onChange'>;
export type FieldInputProps = {
  fieldInfo?: Field;
  fieldKey: string;
  value: string | null | undefined;
  onChange: (fieldKey: string, value: string) => void;
} & InputPropsWithoutOnChange;
const FieldInput = ({ fieldInfo, fieldKey, value, onChange, ...rest }: FieldInputProps): JSX.Element => {
  return (
    <>
      <label htmlFor={fieldKey} className={styles.label}>
        {fieldInfo?.display || fieldKey}
      </label>
      <Input name={fieldKey} value={value || ''} onChange={(e) => onChange(fieldKey, e.target.value)} {...rest} />
    </>
  );
};

export default FieldInput;
