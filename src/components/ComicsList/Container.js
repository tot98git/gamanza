import { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { getComics } from '../../api/comicsService';
import { mapComicItemToCard } from '../../helpers/comics';
import { useFetchData, useInfiniteList } from '../../helpers/hooks';
import Presentational from './Presentational';

const ComicsListContainer = () => {
  const { format } = useParams();
  const [offset, setOffset] = useState(0);
  const [comicsList, , loading, hasMore] = useFetchData(
    format,
    offset,
    setOffset
  );

  const incrementOffset = () => {
    setOffset(offset + 20);
  };

  const [, observer] = useInfiniteList(incrementOffset, loading, hasMore);

  return (
    <Presentational list={comicsList} loading={loading} observer={observer} />
  );
};

export default ComicsListContainer;
