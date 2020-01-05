/* eslint-disable react/prop-types */
import React from 'react';
import { useOverflowTracker } from '../hooks';

const TOP = 'top';
const LEFT = 'left';
const RIGHT = 'right';
const BOTTOM = 'bottom';
const sides = [TOP, LEFT, RIGHT, BOTTOM];
const opposite = {
  [BOTTOM]: TOP,
  [LEFT]: RIGHT,
  [RIGHT]: LEFT,
  [TOP]: BOTTOM
};

export const BorderPatrol = ({ children, style }) => {
  const [wrapperRef, overflowOn] = useOverflowTracker();
  const safeStyles = {
    ...style
  };
  sides.forEach(side => {
    if (overflowOn[side]) {
      safeStyles[side] = '0';
      delete safeStyles[opposite[side]];
    }
  });
  return (
    <div ref={wrapperRef} style={safeStyles}>
      {children}
    </div>
  );
};
