import { useState, useEffect } from 'react';

export const useInfiniteScroll = (fetchMoreData) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        isFetching
      ) {
        return;
      }
      setIsFetching(true);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFetching]);

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreData(() => {
      setIsFetching(false);
    });
  }, [isFetching, fetchMoreData]);

  return { isFetching, setIsFetching };
};