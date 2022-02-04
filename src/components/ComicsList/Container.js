import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { getComics } from '../../api/comicsService';
import { mapComicItemToCard } from '../../helpers/comics';
import { useFetchData, useInfiniteList } from '../../helpers/hooks';
import Presentational from './Presentational';

const ComicsListContainer = () => {
  const { format } = useParams();
  const [comicsList, loading] = useFetchData(format);
  useInfiniteList();

  return <Presentational list={comicsList} />;
};

export default ComicsListContainer;
