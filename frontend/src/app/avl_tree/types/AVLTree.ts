export interface AVLNode {
    value: number;
    height: number;
    left: AVLNode | null;
    right: AVLNode | null;
    x?: number;
    y?: number;
    id: string;
  }
  
  export class AVLTree {
    root: AVLNode | null = null;
    private nodeIdCounter = 0;
  
    private createNode(value: number): AVLNode {
      return {
        value,
        height: 1,
        left: null,
        right: null,
        id: `node-${this.nodeIdCounter++}`
      };
    }
  
    private getHeight(node: AVLNode | null): number {
      return node ? node.height : 0;
    }
  
    private getBalance(node: AVLNode | null): number {
      return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }
  
    private updateHeight(node: AVLNode): void {
      node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }
  
    private rotateRight(y: AVLNode): AVLNode {
      const x = y.left!;
      const T2 = x.right;
  
      x.right = y;
      y.left = T2;
  
      this.updateHeight(y);
      this.updateHeight(x);
  
      return x;
    }
  
    private rotateLeft(x: AVLNode): AVLNode {
      const y = x.right!;
      const T2 = y.left;
  
      y.left = x;
      x.right = T2;
  
      this.updateHeight(x);
      this.updateHeight(y);
  
      return y;
    }
  
    insert(value: number): void {
      this.root = this.insertNode(this.root, value);
    }
  
    private insertNode(node: AVLNode | null, value: number): AVLNode {
      if (!node) {
        return this.createNode(value);
      }
  
      if (value < node.value) {
        node.left = this.insertNode(node.left, value);
      } else if (value > node.value) {
        node.right = this.insertNode(node.right, value);
      } else {
        return node;
      }
  
      this.updateHeight(node);
  
      const balance = this.getBalance(node);
  
      if (balance > 1 && value < node.left!.value) {
        return this.rotateRight(node);
      }
  
      if (balance < -1 && value > node.right!.value) {
        return this.rotateLeft(node);
      }
  
      if (balance > 1 && value > node.left!.value) {
        node.left = this.rotateLeft(node.left!);
        return this.rotateRight(node);
      }
  
      if (balance < -1 && value < node.right!.value) {
        node.right = this.rotateRight(node.right!);
        return this.rotateLeft(node);
      }
  
      return node;
    }
  
    delete(value: number): void {
      this.root = this.deleteNode(this.root, value);
    }
  
    private deleteNode(node: AVLNode | null, value: number): AVLNode | null {
      if (!node) return null;
  
      if (value < node.value) {
        node.left = this.deleteNode(node.left, value);
      } else if (value > node.value) {
        node.right = this.deleteNode(node.right, value);
      } else {
        if (!node.left || !node.right) {
          const temp = node.left || node.right;
          if (!temp) {
            return null;
          } else {
            return temp;
          }
        } else {
          const temp = this.getMinValueNode(node.right);
          node.value = temp.value;
          node.right = this.deleteNode(node.right, temp.value);
        }
      }
  
      this.updateHeight(node);
  
      const balance = this.getBalance(node);
  
      if (balance > 1 && this.getBalance(node.left) >= 0) {
        return this.rotateRight(node);
      }
  
      if (balance > 1 && this.getBalance(node.left) < 0) {
        node.left = this.rotateLeft(node.left!);
        return this.rotateRight(node);
      }
  
      if (balance < -1 && this.getBalance(node.right) <= 0) {
        return this.rotateLeft(node);
      }
  
      if (balance < -1 && this.getBalance(node.right) > 0) {
        node.right = this.rotateRight(node.right!);
        return this.rotateLeft(node);
      }
  
      return node;
    }
  
    private getMinValueNode(node: AVLNode): AVLNode {
      let current = node;
      while (current.left) {
        current = current.left;
      }
      return current;
    }
  
    getInorderTraversal(): number[] {
      const result: number[] = [];
      this.inorderTraversal(this.root, result);
      return result;
    }
  
    private inorderTraversal(node: AVLNode | null, result: number[]): void {
      if (node) {
        this.inorderTraversal(node.left, result);
        result.push(node.value);
        this.inorderTraversal(node.right, result);
      }
    }
  }