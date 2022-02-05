import Card from './components/Card/Presentational';
import { mapComicItemToCard } from '../../helpers/comics';
import Modal from './components/Modal/Presentational';
import { useState } from 'react';

const ComicsList = ({ list, loading, observer }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentComic, setCurrentComic] = useState({});

  const toggleModal = () => setModalOpen(!modalOpen);
  const handleCurrentComic = (comic) => () => {
    setCurrentComic(comic);
    setModalOpen(true);
  };

  const cardRenderer = (item, idx) => (
    <Card
      key={item.id}
      observer={idx === list.length - 1 ? observer : null}
      {...mapComicItemToCard(item)}
      onClick={toggleModal}
      handleCurrentComic={handleCurrentComic}
    />
  );

  return (
    <div className="comics-wrapper _flex _column">
      <Modal
        visible={modalOpen}
        handleClose={toggleModal}
        data={currentComic}
      />
      <div className="container">{list.map(cardRenderer)}</div>
      {loading && (
        <div className="loading-container">Loading more results...</div>
      )}
    </div>
  );
};

export default ComicsList;
