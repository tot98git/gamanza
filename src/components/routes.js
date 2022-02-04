import { Route, Routes } from 'react-router-dom';
import MainView from './MainView/Presentational';

const RouteContainer = () => (
  <Routes>
    <Route path="/*" element={MainView()} />
    <Route path="/:format" element={MainView()} />
  </Routes>
);

export default RouteContainer;
