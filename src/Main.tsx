import React from 'react';
import { TempCalc } from './TempCalc';

interface Props {
  cityText: string;
}

export const Main = ({ cityText }: Props) => {
  return (
    <div>
      <TempCalc cityText={cityText} />
    </div>
  );
};
