import { useState, useCallback } from 'react';
import { AVLNode } from '../types/AVLTree';

interface NodePosition {
  x: number;
  y: number;
}

export const useTreeLayout = () => {
  const [positions, setPositions] = useState<Map<string, NodePosition>>(new Map());

  const calculatePositions = useCallback((root: AVLNode | null) => {
    const newPositions = new Map<string, NodePosition>();
    
    if (!root) {
      setPositions(newPositions);
      return;
    }

    // Calculate the width needed for each subtree
    const calculateSubtreeWidth = (node: AVLNode | null): number => {
      if (!node) return 0;
      
      const leftWidth = calculateSubtreeWidth(node.left);
      const rightWidth = calculateSubtreeWidth(node.right);
      
      // Minimum spacing between nodes
      const minSpacing = 80;
      
      if (!node.left && !node.right) {
        return minSpacing;
      }
      
      return Math.max(minSpacing, leftWidth + rightWidth + minSpacing);
    };

    // Position nodes with proper spacing
    const positionNodes = (
      node: AVLNode | null,
      x: number,
      y: number,
      availableWidth: number
    ): void => {
      if (!node) return;

      newPositions.set(node.id, { x, y });

      if (node.left || node.right) {
        const leftWidth = calculateSubtreeWidth(node.left);
        const rightWidth = calculateSubtreeWidth(node.right);
        const totalChildWidth = leftWidth + rightWidth;
        
        const verticalSpacing = 100;
        
        if (node.left) {
          const leftX = x - (totalChildWidth / 4) - (leftWidth / 4);
          positionNodes(node.left, leftX, y + verticalSpacing, leftWidth);
        }
        
        if (node.right) {
          const rightX = x + (totalChildWidth / 4) + (rightWidth / 4);
          positionNodes(node.right, rightX, y + verticalSpacing, rightWidth);
        }
      }
    };

    // Calculate total tree dimensions
    const treeWidth = calculateSubtreeWidth(root);
    const containerWidth = Math.max(800, treeWidth + 200); // Ensure minimum width
    
    // Start positioning from center
    const startX = containerWidth / 2;
    const startY = 80;
    
    positionNodes(root, startX, startY, treeWidth);
    setPositions(newPositions);
  }, []);

  return { positions, calculatePositions };
};