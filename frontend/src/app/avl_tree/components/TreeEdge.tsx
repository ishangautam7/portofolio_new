import React from 'react';

interface TreeEdgeProps {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
}

export const TreeEdge: React.FC<TreeEdgeProps> = ({ fromX, fromY, toX, toY }) => {
  const length = Math.sqrt(Math.pow(toX - fromX, 2) + Math.pow(toY - fromY, 2));
  const angle = Math.atan2(toY - fromY, toX - fromX) * 180 / Math.PI;

  const edgeStyle: React.CSSProperties = {
    position: 'absolute',
    left: fromX,
    top: fromY - 1,
    width: length,
    height: 2,
    backgroundColor: '#333',
    transformOrigin: '0 50%',
    transform: `rotate(${angle}deg)`,
  };

  return <div style={edgeStyle} />;
};