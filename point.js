function point(x, y) {
  this.x = Math.floor(x);
  this.y = Math.floor(y);
}

point.prototype = {
  equal: function (pt) {
    if (this.x == pt.x && this.y == pt.y) {
      return true;
    } else {
      return false;
    }
  }
};