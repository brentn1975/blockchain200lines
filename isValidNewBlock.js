var isValidNewBlock = (newBlock, previousBlock) => {
  if (previousBlock.index + 1 !== newBlock.index {
    console.log('invalid index');
    return false;
  } else if (previousBlock.hash !== newBlock.previousHash) {
    console.log('invalid previousHash');
    return false;
  } else if (calculatedHashForBlock(newBlock) !==newBlock.hash) {
    console.log('invalid hash: ' + calculatedHashForBLock(newBlock)' + ' ' + newBlock.hash);
    return false;
  }
  return true;
};
