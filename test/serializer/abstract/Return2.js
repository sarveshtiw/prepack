let x = global.__abstract ? __abstract("boolean", "true") : true;

y = 1;

function f(b) {
  if (b) return 1;
  y = 2;
  return 2;
}

z = f(x);

inspect = function() { return "" + y + z; }
