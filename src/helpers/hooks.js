import { useEffect, useState } from 'react';
import { getComics } from '../api/comicsService';

export const useFetchData = (format) => {
  const [comicsList, setComicsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const {
        data: { data: { results = [] } = {} },
      } = await getComics({ format });

      setComicsList(results);
    };

    fetchData();
    setLoading(false);
  }, [format]);

  return [comicsList, loading];
};

export const useInfiniteList = () => {
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    console.log('Fetch more list items!');
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};
