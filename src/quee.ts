class QueueNode<T> {
  value: T;
  next: QueueNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class QueueTs<T> {
  first: QueueNode<T> | null;
  last: QueueNode<T> | null;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val: T) {
    let newNode = new QueueNode<T>(val);
    if (!this.first) {
      this.first = newNode!;
      this.last = newNode;
    } else {
      this.last!.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}




class LruCache<T> {

  private values: Map<string, T> = new Map<string, T>();
  private maxEntries: number = 20;

  public get(key: string): T {
    const hasKey = this.values.has(key);
    let entry: T;
    if (hasKey) {
      // peek the entry, re-insert for LRU strategy
      entry = this.values.get(key)!;
      this.values.delete(key);
      this.values.set(key, entry);
    }

    return entry!;
  }

  public put(key: string, value: T) {

    if (this.values.size >= this.maxEntries) {
      // least-recently used cache eviction strategy
      const keyToDelete = this.values.keys().next().value;

      this.values.delete(keyToDelete);
    }

    this.values.set(key, value);
  }

}