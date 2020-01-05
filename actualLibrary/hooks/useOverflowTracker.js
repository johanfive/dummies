/* eslint-disable sort-keys */
import { useRef, useState, useEffect } from 'react';
import { useWindowSize } from './';

const initialState = {
  top: false,
  left: false,
  right: false,
  bottom: false
};

export const useOverflowTracker = () => {
  const ref = useRef(null);
  const [overflowOn, setOverflowOn] = useState(initialState);
  const [ maxWidth, maxHeight] = useWindowSize();
  useEffect(() => {
    const coordinates = ref.current.getBoundingClientRect();
    setOverflowOn({
      top: coordinates.top < 0,
      left: coordinates.left < 0,
      right: coordinates.right > maxWidth,
      bottom: coordinates.bottom > maxHeight
    });
  }, []);
  return [ref, overflowOn];
};
