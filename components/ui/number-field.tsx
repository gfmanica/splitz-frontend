import { ComponentProps } from 'react';
import {
    NativeSyntheticEvent,
    TextInput,
    TextInputChangeEventData
} from 'react-native';

type NumberField = Omit<ComponentProps<typeof TextInput>, 'onChange'> & {
    onChange: (value: string | number) => void;
};

export function NumberField({ value, onChange, ...rest }: NumberField) {
    return (
        <TextInput
            keyboardType="numeric"
            {...rest}
            value={String(value).replace('.', ',')}
            onChangeText={(text) => {
                if (text.endsWith(',') || text.endsWith('.')) {
                    onChange(text);
                } else {
                    onChange(Number(text.replace(',', '.')));
                }
            }}
        />
    );
}
