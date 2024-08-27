is.num = (n) => typeof n === "number";
is.nan = (n) => Number.isNaN(n);
is.str = (n) => typeof n === "string";
is.bool = (n) => typeof n === "boolean";
is.undef = (n) => typeof n === "undefined";
is.def = (n) => typeof n !== "undefined";
is.arr = (n) => Array.isArray(n);
is.obj = (n) => typeof n === "object" && !Array.isArray(x) && x !== null;
is.fun = (n) => typeof n === "function";
is.truthy = (n) => typeof n === Boolean(n);
is.falsy = (n) => typeof n === !Boolean(n);
