import React from 'react';

type Props = {
  stationId: number;
};

const Station = ({ stationId }: Props) => {
  return <>Station: {stationId}</>;
};

export default Station;
