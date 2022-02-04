import {
  COMICS_PROPERTIES,
  COMICS_PROPERTIES_LABELS,
} from '../../../../constants/comics';
import { mapComicProperties } from '../../../../helpers/comics';
import Button from '../Button/Presentational';

const Modal = ({
  visible,
  handleClose,
  data: { thumbnail, title, price, ...item } = {},
}) => {
  const properties = mapComicProperties(item);

  const featureRenderer = (key) => {
    const label = COMICS_PROPERTIES_LABELS[key];
    const value = properties[COMICS_PROPERTIES[key]];

    let readableValue = value;

    if (typeof value === 'object') {
      readableValue = value.slice(0, 4).join(', ');
    }

    return (
      <div className="feature-item" key={key}>
        {readableValue ? (
          <>
            <span className="label">{label}:</span>{' '}
            <span className="value">{readableValue}</span>
          </>
        ) : null}
      </div>
    );
  };

  const wrapperCls = `modal-wrapper ${visible ? 'visible' : ''}`;

  return (
    <div className={wrapperCls}>
      <div className="window">
        <div className="modal-container">
          <div className="content-wrapper _flex">
            <div className="img-wrapper">
              <img src={thumbnail} alt="Thumbnail" />
            </div>
            <div className="content _flex _column">
              <div className="header _flex">
                <span onClick={handleClose}>X</span>
              </div>
              <h1>{title}</h1>
              <div className="features">
                {Object.keys(COMICS_PROPERTIES).map(featureRenderer)}
              </div>
              <div className="bottom _inline-flex">
                <span>{price}</span>
                <Button label="Close" onClick={handleClose} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
