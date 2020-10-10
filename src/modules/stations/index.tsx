import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import AllStations from './AllStations';
import Station, { StationType } from './Station';

const Stations = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <AllStations />
      </Route>
      <Route path={`${path}/:stationId`}>
        {({ match, location }) => {
          return (
            <Station
              initialStationData={location.state as StationType}
              stationId={match!.params.stationId}
            />
          );
        }}
      </Route>
    </Switch>
  );
};

export default Stations;
