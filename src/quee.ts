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
    var newNode = new QueueNode<T>(val);
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

    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
