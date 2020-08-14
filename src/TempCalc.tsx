import React, { useState } from 'react';

interface Props {
  cityText: string;
}

export const TempCalc: React.FC<Props> = ({ cityText }) => {
  const [city, setCity] = useState<string>('');

  return (
    <div>
      <h3>{cityText}</h3>
      <h4>{city || 'No City Entered.'}</h4>
      <input type="text" onChange={(e) => setCity(e.target.value)} />
    </div>
  );
};
