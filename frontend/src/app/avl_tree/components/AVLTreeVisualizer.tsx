"use client"

import React, { useState, useCallback, useEffect } from 'react';
import { AVLTree, AVLNode } from '../types/AVLTree';
import { useTreeLayout } from '../hooks/useTreeLayout';
import { TreeNode } from './TreeNode';
import { TreeEdge } from './TreeEdge';

export const AVLTreeVisualizer: React.FC = () => {
  const [tree] = useState(() => new AVLTree());
  const [root, setRoot] = useState<AVLNode | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [traversalResult, setTraversalResult] = useState<number[]>([]);
  const [message, setMessage] = useState('');
  
  const { positions, calculatePositions } = useTreeLayout();

  const updateTree = useCallback(() => {
    setRoot({ ...tree.root } as AVLNode | null);
    if (tree.root) {
      calculatePositions(tree.root);
    }
    setTraversalResult(tree.getInorderTraversal());
  }, [tree, calculatePositions]);

  const handleInsert = useCallback(() => {
    const value = parseInt(inputValue);
    if (isNaN(value)) {
      setMessage('Please enter a valid number');
      return;
    }
    
    tree.insert(value);
    updateTree();
    setInputValue('');
    setMessage(`Inserted ${value}`);
    setTimeout(() => setMessage(''), 2000);
  }, [inputValue, tree, updateTree]);

  const handleDelete = useCallback(() => {
    const value = parseInt(inputValue);
    if (isNaN(value)) {
      setMessage('Please enter a valid number');
      return;
    }
    
    tree.delete(value);
    updateTree();
    setInputValue('');
    setMessage(`Deleted ${value}`);
    setTimeout(() => setMessage(''), 2000);
  }, [inputValue, tree, updateTree]);

  const handleReset = useCallback(() => {
    tree.root = null;
    setRoot(null);
    setTraversalResult([]);
    setMessage('Tree cleared');
    setTimeout(() => setMessage(''), 2000);
  }, [tree]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleInsert();
    }
  }, [handleInsert]);

  const renderTree = useCallback((node: AVLNode | null): React.ReactNode => {
    if (!node) return null;
    
    const nodePos = positions.get(node.id);
    if (!nodePos) return null;

    const edges: React.ReactNode[] = [];
    
    if (node.left) {
      const leftPos = positions.get(node.left.id);
      if (leftPos) {
        edges.push(
          <TreeEdge
            key={`edge-${node.id}-${node.left.id}`}
            fromX={nodePos.x}
            fromY={nodePos.y}
            toX={leftPos.x}
            toY={leftPos.y}
          />
        );
      }
    }
    
    if (node.right) {
      const rightPos = positions.get(node.right.id);
      if (rightPos) {
        edges.push(
          <TreeEdge
            key={`edge-${node.id}-${node.right.id}`}
            fromX={nodePos.x}
            fromY={nodePos.y}
            toX={rightPos.x}
            toY={rightPos.y}
          />
        );
      }
    }

    return (
      <React.Fragment key={node.id}>
        {edges}
        <TreeNode
          node={node}
          x={nodePos.x}
          y={nodePos.y}
        />
        {renderTree(node.left)}
        {renderTree(node.right)}
      </React.Fragment>
    );
  }, [positions]);

  useEffect(() => {
    // Start with empty tree
  }, [tree, updateTree]);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ fontSize: '32px', color: '#333', marginBottom: '10px' }}>
            AVL Tree Visualizer
          </h1>
        </div>

        <div style={{ 
          backgroundColor: 'white', 
          padding: '20px', 
          marginBottom: '20px', 
          border: '1px solid #ddd',
          borderRadius: '5px'
        }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter a number"
              style={{
                padding: '8px 12px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px',
                color: 'black'
              }}
            />
            <button
              onClick={handleInsert}
              style={{
                padding: '8px 16px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Insert
            </button>
            <button
              onClick={handleDelete}
              style={{
                padding: '8px 16px',
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Delete
            </button>
            <button
              onClick={handleReset}
              style={{
                padding: '8px 16px',
                backgroundColor: '#FF9800',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Reset
            </button>
            {message && (
              <span style={{ 
                padding: '8px 12px', 
                backgroundColor: '#e3f2fd', 
                color: '#1976d2',
                borderRadius: '4px',
                fontSize: '14px'
              }}>
                {message}
              </span>
            )}
          </div>

          {traversalResult.length > 0 && (
            <div style={{ 
              marginTop: '15px', 
              padding: '10px', 
              backgroundColor: '#f9f9f9', 
              borderRadius: '4px',
              border: '1px solid #eee',
              color: 'black'
            }}>
              <strong>In-order Traversal: </strong>
              {traversalResult.join(', ')}
            </div>
          )}
        </div>

        <div style={{ 
          backgroundColor: 'white', 
          border: '1px solid #ddd', 
          borderRadius: '5px',
          overflow: 'auto',
          minHeight: '600px'
        }}>
          <div style={{ 
            position: 'relative', 
            minHeight: '600px', 
            minWidth: '1000px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '20px'
          }}>
            {root ? (
              <div style={{ 
                position: 'relative', 
                width: '100%', 
                height: '100%',
                minWidth: '1000px'
              }}>
                {renderTree(root)}
              </div>
            ) : null}
          </div>
        </div>

      </div>
    </div>
  );
};