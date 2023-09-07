HTMLElement.prototype.insertAfter = function(nodoExistente, newNode) {
  if (nodoExistente.nextSibling) {
    return nodoExistente.parentNode.insertBefore(
      newNode,
      nodoExistente.nextSibling
    );
  } else {
    return nodoExistente.parentNode.appendChild(newNode);
  }
};

Number.prototype.formatMoney = function (n, x) {
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
  return "$" + this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&.');
};