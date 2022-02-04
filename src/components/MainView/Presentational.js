import { useParams } from 'react-router';
import Breadcrumb from '../Breadcrumb/Presentational';
import ComicsList from '../ComicsList/Container';
import Header from '../Header/Presentational';

const MainView = () => {
  return (
    <div className="main-wrapper">
      <div className="main-container">
        <Header />
        <Breadcrumb />
        <ComicsList />
      </div>
    </div>
  );
};

export default MainView;
