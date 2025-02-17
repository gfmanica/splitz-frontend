import { ComponentProps } from 'react';
import {
    NativeSyntheticEvent,
    TextInput,
    TextInputChangeEventData
} from 'react-native';

type NumberField = Omit<
    ComponentProps<typeof TextInput>,
    'onChange' | 'value'
> & {
    onChange: (value: string | number) => void;
    value: string | number;
    max?: number;
};

export function NumberField({ value, onChange, max, ...rest }: NumberField) {
    return (
        <TextInput
            keyboardType="numeric"
            {...rest}
            value={String(value).replace('.', ',')}
            onChangeText={(text) => {
                let newValue =
                    text.endsWith(',') || text.endsWith('.')
                        ? text
                        : Number(text.replace(',', '.'));
                if (typeof newValue !== 'string' && max && newValue > max) {
                    newValue = max;
                }
                onChange(newValue);
            }}
        />
    );
}
