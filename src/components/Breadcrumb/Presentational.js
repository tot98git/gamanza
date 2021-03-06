import { useParams } from 'react-router-dom';
import { COMICS_FORMAT_LABELS } from '../../constants/comics';

const Breadcrumb = () => {
  const { format } = useParams();

  return (
    <div className="breadcrumb-wrapper">
      <div className="container">
        Home{' '}
        {format ? (
          <>
            > <span>{COMICS_FORMAT_LABELS[format.toUpperCase()]}s </span>
          </>
        ) : (
          '> All'
        )}
      </div>
    </div>
  );
};

export default Breadcrumb;
