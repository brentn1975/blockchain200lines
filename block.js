class Block {
  constructor(index,previousHash, timestamp, data, hash) {
    this.index = index;
    this.previousHash = previousHash.tostring();
    this.timestamp = timestamp;
    this.data = data;
    this.hash = hash.toString();
  }
}
