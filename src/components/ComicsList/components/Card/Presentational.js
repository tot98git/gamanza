import Button from '../Button/Presentational';

const ComicsCard = ({ observer, handleCurrentComic, ...comic }) => {
  const { thumbnail, title, price, id } = comic;
  return (
    <div className="comics-card" key={id} ref={observer}>
      <div className="container _flex">
        <div className="thumbnail">
          <img src={thumbnail} alt="Thumbnail" />
        </div>
        <div className="info-wrapper _flex _center">
          <div className="info-container _flex _column">
            <div className="title">
              <span>{title}</span>
            </div>
            <div className="additional-info _flex _column">
              <div className="container _flex  _column">
                <span>{price}</span>
                <Button label="More info" onClick={handleCurrentComic(comic)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicsCard;
