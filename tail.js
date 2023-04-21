const tail = function(arrInput) {

  if (arrInput.length <= 1) {
    return []
  }

  const arrTail = arrInput.slice(1);
  return arrTail;
};

module.exports = tail;