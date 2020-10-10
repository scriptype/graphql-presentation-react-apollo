import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import AllStations from './AllStations';
import Station, { StationType } from './Station';

const Stations = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        {({ location }) => {
          return (
            <AllStations fromStation={(location.state as any)?.fromStation} />
          );
        }}
      </Route>
      <Route path={`${path}/:stationId`}>
        {({ match, location }) => {
          return (
            <Station
              fromList={(location.state as any)?.fromList}
              initialStationData={
                (location.state as any)?.stationData as StationType
              }
              stationId={match!.params.stationId}
            />
          );
        }}
      </Route>
    </Switch>
  );
};

export default Stations;
