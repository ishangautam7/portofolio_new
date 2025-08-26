import React from 'react';
import { AVLNode } from '../types/AVLTree';

interface TreeNodeProps {
  node: AVLNode;
  x: number;
  y: number;
}

export const TreeNode: React.FC<TreeNodeProps> = ({ node, x, y }) => {
  const nodeStyle: React.CSSProperties = {
    position: 'absolute',
    left: x - 25,
    top: y - 25,
    width: 50,
    height: 50,
    borderRadius: '50%',
    backgroundColor: '#4CAF50',
    border: '2px solid #333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const heightIndicatorStyle: React.CSSProperties = {
    position: 'absolute',
    top: -8,
    right: -8,
    width: 18,
    height: 18,
    borderRadius: '50%',
    backgroundColor: '#FF5722',
    color: 'white',
    fontSize: '10px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #333',
  };

  return (
    <div style={nodeStyle}>
      {node.value}
      <div style={heightIndicatorStyle}>
        {node.height}
      </div>
    </div>
  );
};