import React, { forwardRef } from 'react';
import { useRifm } from 'rifm';
import { Input } from '@lucidtech/flyt-form';
import { InputProps } from '@lucidtech/flyt-form/dist/types/components/Input';
import { Field } from '.';
import styles from './Form.module.css';

const parseDigits = (string: string) => (string.match(/\d+/g) || []).join('');

const formatDate = (string: string) => {
  const digits = parseDigits(string);
  const chars = digits.split('');
  return chars.reduce((r, v, index) => (index === 2 || index === 4 ? `${r}.${v}` : `${r}${v}`), '').substr(0, 8);
};

type InputPropsWithoutOnChange = Omit<InputProps, 'onChange'>;
export type MaskedDateInputProps = {
  fieldInfo?: Field;
  fieldKey: string;
  value: string | null | undefined;
  onChange: (fieldKey: string, value: string) => void;
} & InputPropsWithoutOnChange;
const MaskedDateInput = forwardRef<HTMLInputElement, MaskedDateInputProps>(
  ({ value, fieldInfo, fieldKey, onChange, ...rest }: MaskedDateInputProps, ref) => {
    const maskedOnChange = (value: string) => {
      onChange(fieldKey, value);
    };

    const rifm = useRifm({
      value: value || '',
      onChange: maskedOnChange,
      format: formatDate,
      accept: /\d/g,
      mask: 8 <= (value?.length || 0),
    });

    return (
      <>
        <label htmlFor={fieldKey} className={styles.label}>
          {fieldInfo?.display || fieldKey}
        </label>
        <Input name={fieldKey} value={rifm.value} onChange={rifm.onChange} placeholder="dd.mm.yy" ref={ref} {...rest} />
      </>
    );
  },
);

MaskedDateInput.displayName = 'MaskedDateInput';

export default MaskedDateInput;
