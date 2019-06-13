// 初始页面格子对象
function LiveTable(row, col) {
  this.row = row;
  this.col = col;
  this.table = [row];
}

// LiveTable的初始化
LiveTable.prototype.init = function () {
  for (var i = 0; i < this.row; i++) {
    this.table[i] = [this.col];
    for (var j = 0; j < this.col; j++) {
      this.table[i][j] = 0;
    }
  }
}