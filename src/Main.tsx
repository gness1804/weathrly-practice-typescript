import React from 'react';

interface Props {
  cityText: string;
}

export const Main = ({ cityText }: Props) => {
  return (
    <div>
      <h3>{cityText}</h3>
    </div>
  );
};
