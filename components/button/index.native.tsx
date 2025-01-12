import React from 'react';
import { Button as ButtonRN } from 'react-native';
import { ButtonPropsInterface } from './props.interface';

export function Button(props: ButtonPropsInterface) {
  return <ButtonRN title={props.text} onPress={props.onClick} />;
}
