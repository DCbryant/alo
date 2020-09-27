class Set {
  constructor(props = []) {
    this._set = props;
    this.size = this._set.length;
  }

  add (x) {
    if (!this._set.includes(x)) {
      this._set.push(x);
    }
    this.size = this._set.length;
  }

  delete (x) {
    return this._set.filter(s => s !== x)
  }

  has (x) {
    return this._set.includes(x)
  }

  clear () {
    this._set = [];
  }
}

const set = new Set();
set.add("a")
set.add("b")
set.add("a")
console.log(set);