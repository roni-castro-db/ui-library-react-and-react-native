import React from 'react';
import { Button } from '../components/button';

export default {
  title: 'Button WEB',
};

export const ButtonWeb = () => (
  <Button text="Web button" onClick={() => console.log('web click')} />
);
