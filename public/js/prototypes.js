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