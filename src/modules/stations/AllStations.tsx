import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_STATIONS = gql`
  query {
    allStations(first: 5) {
      id
      name
      available
    }
  }
`;

const AllStations = () => {
  const { loading, error, data } = useQuery(GET_STATIONS);
  if (loading) {
    return <>Loading your stations...</>;
  }
  if (error) {
    return <>Error: {error.message}</>;
  }
  if (!data) {
    return <>No stations found.</>;
  }
  const { allStations } = data;
  return (
    <div>
      <h1>Your Stations</h1>
      <ul>
        {allStations.map((station: any) => (
          <li key={station.id}>
            {station.name}: {station.available}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllStations;
