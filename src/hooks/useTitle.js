import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Diamond Tech`;
  }, [title]);
};

export default useTitle;
