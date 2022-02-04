import Card from './components/Card/Presentational';
import { mapComicItemToCard } from '../../helpers/comics';
import Modal from './components/Modal/Presentational';
import { useState } from 'react';

const ComicsList = ({ list }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentComic, setCurrentComic] = useState({});

  const toggleModal = () => setModalOpen(!modalOpen);
  const handleCurrentComic = (comic) => () => {
    setCurrentComic(comic);
    setModalOpen(true);
  };

  const cardRenderer = (item) => (
    <Card
      {...mapComicItemToCard(item)}
      onClick={toggleModal}
      handleCurrentComic={handleCurrentComic}
    />
  );

  return (
    <div className="comics-wrapper">
      <Modal
        visible={modalOpen}
        handleClose={toggleModal}
        data={currentComic}
      />
      <div className="container">{list.map(cardRenderer)}</div>
    </div>
  );
};

export default ComicsList;
