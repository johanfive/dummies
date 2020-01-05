/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { toolTipBockStyle, toolTipStyle } from './styles';
import { BorderPatrol } from '../';

export const ToolTip = ({ content, toolTipIcon }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHovered = () => setHovered(!hovered);
  return (
    <div style={toolTipBockStyle()} onMouseEnter={toggleHovered} onMouseLeave={toggleHovered}>
      {toolTipIcon || '(?)'}
      {hovered && <BorderPatrol style={toolTipStyle()}>{content}</BorderPatrol>}
    </div>
  );
};
