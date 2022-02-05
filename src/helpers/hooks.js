import { useCallback, useEffect, useRef, useState } from 'react';
import { getComics } from '../api/comicsService';

export const useFetchData = (format, offset, setOffset) => {
  const [comicsList, setComicsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setComicsList([]);
    setOffset(0);
    setHasMore(true);
  }, [format]);

  const fetchData = useCallback(async () => {
    if (!hasMore) return;

    await setLoading(true);
    const {
      data: { data: { results = [], count } = {} },
    } = await getComics({ format, offset });
    setComicsList([...comicsList, ...results]);
    setLoading(false);
    setHasMore(count > 0);
  }, [format, offset]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [comicsList, fetchData, loading, hasMore];
};

export const useInfiniteList = (incrementCounter, isLoading, hasMore) => {
  const observer = useRef();
  const finalElement = useCallback(
    (node) => {
      if (isLoading || !hasMore) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          console.log('visible');

          incrementCounter();
        }
      });
      if (node) observer.current.observe(node);
    },
    [incrementCounter, isLoading, hasMore]
  );

  return [observer, finalElement];
};
