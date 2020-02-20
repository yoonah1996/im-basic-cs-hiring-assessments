/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */
var Queue = function() {
  this._storage ={};
  this.count = 0;
};

Queue.prototype.add = function(num) {
  this._storage[this.count] = num;
  this.count++;
  return this._storage;
};

Queue.prototype.remove = function() {
  if(Object.keys(this._storage).length === 0) return undefined;
  let result = this._storage[Object.keys(this._storage)[0]];
  delete this._storage[Object.keys(this._storage)[0]];
  return result;
};

// if(Object.keys(this._storage).length === 0) return undefined;
//   let result = this._storage[this.count - Object.keys(this._storage).length];
//   delete this._storage[this.count - Object.keys(this._storage).length];
//   return result;

module.exports = Queue;