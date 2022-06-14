import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Button } from '../components/button';

// On-Device Register
storiesOf('Button', module).add('Button native', () => (
  <Button
    text="React native button"
    onClick={() => console.log('native button click')}
  />
));
