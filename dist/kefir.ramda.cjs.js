'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var R = require('ramda');
var K = require('karet.lift');

// THIS FILE IS GENERATED

var F = /*#__PURE__*/K.lift(R.F);
var T = /*#__PURE__*/K.lift(R.T);
var add = /*#__PURE__*/K.lift(R.add);
var addIndex = /*#__PURE__*/K.liftRec(R.addIndex);
var adjust = /*#__PURE__*/K.lift(R.adjust);
var all = /*#__PURE__*/K.lift(R.all);
var allPass = /*#__PURE__*/K.liftRec(R.allPass);
var always = /*#__PURE__*/K.liftRec(R.always);
var and = /*#__PURE__*/K.lift(R.and);
var andThen = /*#__PURE__*/K.lift(R.andThen);
var any = /*#__PURE__*/K.lift(R.any);
var anyPass = /*#__PURE__*/K.liftRec(R.anyPass);
var ap = /*#__PURE__*/K.lift(R.ap);
var aperture = /*#__PURE__*/K.lift(R.aperture);
var append = /*#__PURE__*/K.lift(R.append);
var apply = /*#__PURE__*/K.lift(R.apply);
var applySpec = /*#__PURE__*/K.liftRec(R.applySpec);
var applyTo = /*#__PURE__*/K.lift(R.applyTo);
var ascend = /*#__PURE__*/K.lift(R.ascend);
var assoc = /*#__PURE__*/K.lift(R.assoc);
var assocPath = /*#__PURE__*/K.lift(R.assocPath);
var binary = /*#__PURE__*/K.liftRec(R.binary);
var bind = /*#__PURE__*/K.liftRec(R.bind);
var both = /*#__PURE__*/K.liftRec(R.both);
var call = /*#__PURE__*/K.liftRec(R.call);
var chain = /*#__PURE__*/K.liftRec(R.chain);
var clamp = /*#__PURE__*/K.lift(R.clamp);
var clone = /*#__PURE__*/K.lift(R.clone);
var comparator = /*#__PURE__*/K.liftRec(R.comparator);
var complement = /*#__PURE__*/K.liftRec(R.complement);
var compose = /*#__PURE__*/K.liftRec(R.compose);
var composeK = /*#__PURE__*/K.liftRec(process.env.NODE_ENV === 'production' ? R.composeK : function composeK() {
  if (!composeK.warned) {
    composeK.warned = 1;
    console.warn("Warning: `composeK` has been deprecated in favor of `composeWith(chain)`.");
  }
  return R.composeK.apply(this, arguments);
});
var composeP = /*#__PURE__*/K.liftRec(process.env.NODE_ENV === 'production' ? R.composeP : function composeP() {
  if (!composeP.warned) {
    composeP.warned = 1;
    console.warn("Warning: `composeP` has been deprecated in favor of `composeWith(then)`.");
  }
  return R.composeP.apply(this, arguments);
});
var composeWith = /*#__PURE__*/K.liftRec(R.composeWith);
var concat = /*#__PURE__*/K.lift(R.concat);
var cond = /*#__PURE__*/K.liftRec(R.cond);
var construct = /*#__PURE__*/K.liftRec(R.construct);
var constructN = /*#__PURE__*/K.liftRec(R.constructN);
var contains = /*#__PURE__*/K.lift(process.env.NODE_ENV === 'production' ? R.contains : function contains(_0, _1) {
  if (!contains.warned) {
    contains.warned = 1;
    console.warn("Warning: `contains` has been renamed to `includes`.");
  }
  return R.contains.apply(this, arguments);
});
var converge = /*#__PURE__*/K.liftRec(R.converge);
var countBy = /*#__PURE__*/K.lift(R.countBy);
var curry = /*#__PURE__*/K.liftRec(R.curry);
var curryN = /*#__PURE__*/K.liftRec(R.curryN);
var dec = /*#__PURE__*/K.lift(R.dec);
var defaultTo = /*#__PURE__*/K.lift(R.defaultTo);
var descend = /*#__PURE__*/K.lift(R.descend);
var difference = /*#__PURE__*/K.lift(R.difference);
var differenceWith = /*#__PURE__*/K.lift(R.differenceWith);
var dissoc = /*#__PURE__*/K.lift(R.dissoc);
var dissocPath = /*#__PURE__*/K.lift(R.dissocPath);
var divide = /*#__PURE__*/K.lift(R.divide);
var drop = /*#__PURE__*/K.lift(R.drop);
var dropLast = /*#__PURE__*/K.lift(R.dropLast);
var dropLastWhile = /*#__PURE__*/K.lift(R.dropLastWhile);
var dropRepeats = /*#__PURE__*/K.lift(R.dropRepeats);
var dropRepeatsWith = /*#__PURE__*/K.lift(R.dropRepeatsWith);
var dropWhile = /*#__PURE__*/K.lift(R.dropWhile);
var either = /*#__PURE__*/K.liftRec(R.either);
var empty = /*#__PURE__*/K.lift(R.empty);
var endsWith = /*#__PURE__*/K.lift(R.endsWith);
var eqBy = /*#__PURE__*/K.lift(R.eqBy);
var eqProps = /*#__PURE__*/K.lift(R.eqProps);
var equals = /*#__PURE__*/K.lift(R.equals);
var evolve = /*#__PURE__*/K.lift(R.evolve);
var filter = /*#__PURE__*/K.lift(R.filter);
var find = /*#__PURE__*/K.lift(R.find);
var findIndex = /*#__PURE__*/K.lift(R.findIndex);
var findLast = /*#__PURE__*/K.lift(R.findLast);
var findLastIndex = /*#__PURE__*/K.lift(R.findLastIndex);
var flatten = /*#__PURE__*/K.lift(R.flatten);
var flip = /*#__PURE__*/K.liftRec(R.flip);
var forEach = /*#__PURE__*/K.lift(R.forEach);
var forEachObjIndexed = /*#__PURE__*/K.lift(R.forEachObjIndexed);
var fromPairs = /*#__PURE__*/K.lift(R.fromPairs);
var groupBy = /*#__PURE__*/K.lift(R.groupBy);
var groupWith = /*#__PURE__*/K.lift(R.groupWith);
var gt = /*#__PURE__*/K.lift(R.gt);
var gte = /*#__PURE__*/K.lift(R.gte);
var has = /*#__PURE__*/K.lift(R.has);
var hasIn = /*#__PURE__*/K.lift(R.hasIn);
var hasPath = /*#__PURE__*/K.lift(R.hasPath);
var head = /*#__PURE__*/K.lift(R.head);
var identical = /*#__PURE__*/K.lift(R.identical);
var identity = /*#__PURE__*/K.lift(R.identity);
var ifElse = /*#__PURE__*/K.liftRec(R.ifElse);
var inc = /*#__PURE__*/K.lift(R.inc);
var includes = /*#__PURE__*/K.lift(R.includes);
var indexBy = /*#__PURE__*/K.lift(R.indexBy);
var indexOf = /*#__PURE__*/K.lift(R.indexOf);
var init = /*#__PURE__*/K.lift(R.init);
var innerJoin = /*#__PURE__*/K.lift(R.innerJoin);
var insert = /*#__PURE__*/K.lift(R.insert);
var insertAll = /*#__PURE__*/K.lift(R.insertAll);
var intersection = /*#__PURE__*/K.lift(R.intersection);
var intersperse = /*#__PURE__*/K.lift(R.intersperse);
var into = /*#__PURE__*/K.lift(R.into);
var invert = /*#__PURE__*/K.lift(R.invert);
var invertObj = /*#__PURE__*/K.lift(R.invertObj);
var invoker = /*#__PURE__*/K.liftRec(R.invoker);
var is = /*#__PURE__*/K.lift(R.is);
var isEmpty = /*#__PURE__*/K.lift(R.isEmpty);
var isNil = /*#__PURE__*/K.lift(R.isNil);
var join = /*#__PURE__*/K.lift(R.join);
var juxt = /*#__PURE__*/K.liftRec(R.juxt);
var keys = /*#__PURE__*/K.lift(R.keys);
var keysIn = /*#__PURE__*/K.lift(R.keysIn);
var last = /*#__PURE__*/K.lift(R.last);
var lastIndexOf = /*#__PURE__*/K.lift(R.lastIndexOf);
var length = /*#__PURE__*/K.lift(R.length);
var lens = /*#__PURE__*/K.lift(R.lens);
var lensIndex = /*#__PURE__*/K.lift(R.lensIndex);
var lensPath = /*#__PURE__*/K.lift(R.lensPath);
var lensProp = /*#__PURE__*/K.lift(R.lensProp);
var lift = /*#__PURE__*/K.liftRec(R.lift);
var liftN = /*#__PURE__*/K.liftRec(R.liftN);
var lt = /*#__PURE__*/K.lift(R.lt);
var lte = /*#__PURE__*/K.lift(R.lte);
var map = /*#__PURE__*/K.lift(R.map);
var mapAccum = /*#__PURE__*/K.lift(R.mapAccum);
var mapAccumRight = /*#__PURE__*/K.lift(R.mapAccumRight);
var mapObjIndexed = /*#__PURE__*/K.lift(R.mapObjIndexed);
var match = /*#__PURE__*/K.lift(R.match);
var mathMod = /*#__PURE__*/K.lift(R.mathMod);
var max = /*#__PURE__*/K.lift(R.max);
var maxBy = /*#__PURE__*/K.lift(R.maxBy);
var mean = /*#__PURE__*/K.lift(R.mean);
var median = /*#__PURE__*/K.lift(R.median);
var memoizeWith = /*#__PURE__*/K.liftRec(R.memoizeWith);
var merge = /*#__PURE__*/K.lift(process.env.NODE_ENV === 'production' ? R.merge : function merge(_0, _1) {
  if (!merge.warned) {
    merge.warned = 1;
    console.warn("Warning: `merge` has been deprecated in favor of new `mergeRight`.");
  }
  return R.merge.apply(this, arguments);
});
var mergeAll = /*#__PURE__*/K.lift(R.mergeAll);
var mergeDeepLeft = /*#__PURE__*/K.lift(R.mergeDeepLeft);
var mergeDeepRight = /*#__PURE__*/K.lift(R.mergeDeepRight);
var mergeDeepWith = /*#__PURE__*/K.lift(R.mergeDeepWith);
var mergeDeepWithKey = /*#__PURE__*/K.lift(R.mergeDeepWithKey);
var mergeLeft = /*#__PURE__*/K.lift(R.mergeLeft);
var mergeRight = /*#__PURE__*/K.lift(R.mergeRight);
var mergeWith = /*#__PURE__*/K.lift(R.mergeWith);
var mergeWithKey = /*#__PURE__*/K.lift(R.mergeWithKey);
var min = /*#__PURE__*/K.lift(R.min);
var minBy = /*#__PURE__*/K.lift(R.minBy);
var modulo = /*#__PURE__*/K.lift(R.modulo);
var move = /*#__PURE__*/K.lift(R.move);
var multiply = /*#__PURE__*/K.lift(R.multiply);
var nAry = /*#__PURE__*/K.liftRec(R.nAry);
var negate = /*#__PURE__*/K.lift(R.negate);
var none = /*#__PURE__*/K.lift(R.none);
var not = /*#__PURE__*/K.lift(R.not);
var nth = /*#__PURE__*/K.lift(R.nth);
var nthArg = /*#__PURE__*/K.liftRec(R.nthArg);
var o = /*#__PURE__*/K.liftRec(R.o);
var objOf = /*#__PURE__*/K.lift(R.objOf);
var of = /*#__PURE__*/K.lift(R.of);
var omit = /*#__PURE__*/K.lift(R.omit);
var once = /*#__PURE__*/K.liftRec(R.once);
var or = /*#__PURE__*/K.lift(R.or);
var otherwise = /*#__PURE__*/K.lift(R.otherwise);
var over = /*#__PURE__*/K.lift(R.over);
var pair = /*#__PURE__*/K.lift(R.pair);
var partial = /*#__PURE__*/K.liftRec(R.partial);
var partialRight = /*#__PURE__*/K.liftRec(R.partialRight);
var partition = /*#__PURE__*/K.lift(R.partition);
var path = /*#__PURE__*/K.lift(R.path);
var pathEq = /*#__PURE__*/K.lift(R.pathEq);
var pathOr = /*#__PURE__*/K.lift(R.pathOr);
var pathSatisfies = /*#__PURE__*/K.lift(R.pathSatisfies);
var paths = /*#__PURE__*/K.lift(R.paths);
var pick = /*#__PURE__*/K.lift(R.pick);
var pickAll = /*#__PURE__*/K.lift(R.pickAll);
var pickBy = /*#__PURE__*/K.lift(R.pickBy);
var pipe = /*#__PURE__*/K.liftRec(R.pipe);
var pipeK = /*#__PURE__*/K.liftRec(process.env.NODE_ENV === 'production' ? R.pipeK : function pipeK() {
  if (!pipeK.warned) {
    pipeK.warned = 1;
    console.warn("Warning: `pipeK` has been deprecated in favor of `pipeWith(chain)`.");
  }
  return R.pipeK.apply(this, arguments);
});
var pipeP = /*#__PURE__*/K.liftRec(process.env.NODE_ENV === 'production' ? R.pipeP : function pipeP() {
  if (!pipeP.warned) {
    pipeP.warned = 1;
    console.warn("Warning: `pipeP` has been deprecated in favor of `pipeWith(then)`.");
  }
  return R.pipeP.apply(this, arguments);
});
var pipeWith = /*#__PURE__*/K.liftRec(R.pipeWith);
var pluck = /*#__PURE__*/K.lift(R.pluck);
var prepend = /*#__PURE__*/K.lift(R.prepend);
var product = /*#__PURE__*/K.lift(R.product);
var project = /*#__PURE__*/K.lift(R.project);
var prop = /*#__PURE__*/K.lift(R.prop);
var propEq = /*#__PURE__*/K.lift(R.propEq);
var propIs = /*#__PURE__*/K.lift(R.propIs);
var propOr = /*#__PURE__*/K.lift(R.propOr);
var propSatisfies = /*#__PURE__*/K.lift(R.propSatisfies);
var props = /*#__PURE__*/K.lift(R.props);
var range = /*#__PURE__*/K.lift(R.range);
var reduce = /*#__PURE__*/K.lift(R.reduce);
var reduceBy = /*#__PURE__*/K.liftRec(R.reduceBy);
var reduceRight = /*#__PURE__*/K.lift(R.reduceRight);
var reduceWhile = /*#__PURE__*/K.liftRec(R.reduceWhile);
var reduced = /*#__PURE__*/K.lift(R.reduced);
var reject = /*#__PURE__*/K.lift(R.reject);
var remove = /*#__PURE__*/K.lift(R.remove);
var repeat = /*#__PURE__*/K.lift(R.repeat);
var replace = /*#__PURE__*/K.lift(R.replace);
var reverse = /*#__PURE__*/K.lift(R.reverse);
var scan = /*#__PURE__*/K.lift(R.scan);
var sequence = /*#__PURE__*/K.lift(R.sequence);
var set = /*#__PURE__*/K.lift(R.set);
var slice = /*#__PURE__*/K.lift(R.slice);
var sort = /*#__PURE__*/K.lift(R.sort);
var sortBy = /*#__PURE__*/K.lift(R.sortBy);
var sortWith = /*#__PURE__*/K.lift(R.sortWith);
var split = /*#__PURE__*/K.lift(R.split);
var splitAt = /*#__PURE__*/K.lift(R.splitAt);
var splitEvery = /*#__PURE__*/K.lift(R.splitEvery);
var splitWhen = /*#__PURE__*/K.lift(R.splitWhen);
var startsWith = /*#__PURE__*/K.lift(R.startsWith);
var subtract = /*#__PURE__*/K.lift(R.subtract);
var sum = /*#__PURE__*/K.lift(R.sum);
var symmetricDifference = /*#__PURE__*/K.lift(R.symmetricDifference);
var symmetricDifferenceWith = /*#__PURE__*/K.lift(R.symmetricDifferenceWith);
var tail = /*#__PURE__*/K.lift(R.tail);
var take = /*#__PURE__*/K.lift(R.take);
var takeLast = /*#__PURE__*/K.lift(R.takeLast);
var takeLastWhile = /*#__PURE__*/K.lift(R.takeLastWhile);
var takeWhile = /*#__PURE__*/K.lift(R.takeWhile);
var tap = /*#__PURE__*/K.lift(R.tap);
var test = /*#__PURE__*/K.lift(R.test);
var thunkify = /*#__PURE__*/K.liftRec(R.thunkify);
var times = /*#__PURE__*/K.lift(R.times);
var toLower = /*#__PURE__*/K.lift(R.toLower);
var toPairs = /*#__PURE__*/K.lift(R.toPairs);
var toPairsIn = /*#__PURE__*/K.lift(R.toPairsIn);
var toString = /*#__PURE__*/K.lift(R.toString);
var toUpper = /*#__PURE__*/K.lift(R.toUpper);
var transduce = /*#__PURE__*/K.lift(R.transduce);
var transpose = /*#__PURE__*/K.lift(R.transpose);
var traverse = /*#__PURE__*/K.lift(R.traverse);
var trim = /*#__PURE__*/K.lift(R.trim);
var tryCatch = /*#__PURE__*/K.liftRec(R.tryCatch);
var type = /*#__PURE__*/K.lift(R.type);
var unapply = /*#__PURE__*/K.liftRec(R.unapply);
var unary = /*#__PURE__*/K.liftRec(R.unary);
var uncurryN = /*#__PURE__*/K.liftRec(R.uncurryN);
var unfold = /*#__PURE__*/K.lift(R.unfold);
var union = /*#__PURE__*/K.lift(R.union);
var unionWith = /*#__PURE__*/K.lift(R.unionWith);
var uniq = /*#__PURE__*/K.lift(R.uniq);
var uniqBy = /*#__PURE__*/K.lift(R.uniqBy);
var uniqWith = /*#__PURE__*/K.lift(R.uniqWith);
var unless = /*#__PURE__*/K.lift(R.unless);
var unnest = /*#__PURE__*/K.lift(R.unnest);
var until = /*#__PURE__*/K.lift(R.until);
var update = /*#__PURE__*/K.lift(R.update);
var useWith = /*#__PURE__*/K.liftRec(R.useWith);
var values = /*#__PURE__*/K.lift(R.values);
var valuesIn = /*#__PURE__*/K.lift(R.valuesIn);
var view = /*#__PURE__*/K.lift(R.view);
var when = /*#__PURE__*/K.lift(R.when);
var where = /*#__PURE__*/K.lift(R.where);
var whereEq = /*#__PURE__*/K.lift(R.whereEq);
var without = /*#__PURE__*/K.lift(R.without);
var xor = /*#__PURE__*/K.lift(R.xor);
var xprod = /*#__PURE__*/K.lift(R.xprod);
var zip = /*#__PURE__*/K.lift(R.zip);
var zipObj = /*#__PURE__*/K.lift(R.zipObj);
var zipWith = /*#__PURE__*/K.lift(R.zipWith);

exports.__ = R.__;
exports.F = F;
exports.T = T;
exports.add = add;
exports.addIndex = addIndex;
exports.adjust = adjust;
exports.all = all;
exports.allPass = allPass;
exports.always = always;
exports.and = and;
exports.andThen = andThen;
exports.any = any;
exports.anyPass = anyPass;
exports.ap = ap;
exports.aperture = aperture;
exports.append = append;
exports.apply = apply;
exports.applySpec = applySpec;
exports.applyTo = applyTo;
exports.ascend = ascend;
exports.assoc = assoc;
exports.assocPath = assocPath;
exports.binary = binary;
exports.bind = bind;
exports.both = both;
exports.call = call;
exports.chain = chain;
exports.clamp = clamp;
exports.clone = clone;
exports.comparator = comparator;
exports.complement = complement;
exports.compose = compose;
exports.composeK = composeK;
exports.composeP = composeP;
exports.composeWith = composeWith;
exports.concat = concat;
exports.cond = cond;
exports.construct = construct;
exports.constructN = constructN;
exports.contains = contains;
exports.converge = converge;
exports.countBy = countBy;
exports.curry = curry;
exports.curryN = curryN;
exports.dec = dec;
exports.defaultTo = defaultTo;
exports.descend = descend;
exports.difference = difference;
exports.differenceWith = differenceWith;
exports.dissoc = dissoc;
exports.dissocPath = dissocPath;
exports.divide = divide;
exports.drop = drop;
exports.dropLast = dropLast;
exports.dropLastWhile = dropLastWhile;
exports.dropRepeats = dropRepeats;
exports.dropRepeatsWith = dropRepeatsWith;
exports.dropWhile = dropWhile;
exports.either = either;
exports.empty = empty;
exports.endsWith = endsWith;
exports.eqBy = eqBy;
exports.eqProps = eqProps;
exports.equals = equals;
exports.evolve = evolve;
exports.filter = filter;
exports.find = find;
exports.findIndex = findIndex;
exports.findLast = findLast;
exports.findLastIndex = findLastIndex;
exports.flatten = flatten;
exports.flip = flip;
exports.forEach = forEach;
exports.forEachObjIndexed = forEachObjIndexed;
exports.fromPairs = fromPairs;
exports.groupBy = groupBy;
exports.groupWith = groupWith;
exports.gt = gt;
exports.gte = gte;
exports.has = has;
exports.hasIn = hasIn;
exports.hasPath = hasPath;
exports.head = head;
exports.identical = identical;
exports.identity = identity;
exports.ifElse = ifElse;
exports.inc = inc;
exports.includes = includes;
exports.indexBy = indexBy;
exports.indexOf = indexOf;
exports.init = init;
exports.innerJoin = innerJoin;
exports.insert = insert;
exports.insertAll = insertAll;
exports.intersection = intersection;
exports.intersperse = intersperse;
exports.into = into;
exports.invert = invert;
exports.invertObj = invertObj;
exports.invoker = invoker;
exports.is = is;
exports.isEmpty = isEmpty;
exports.isNil = isNil;
exports.join = join;
exports.juxt = juxt;
exports.keys = keys;
exports.keysIn = keysIn;
exports.last = last;
exports.lastIndexOf = lastIndexOf;
exports.length = length;
exports.lens = lens;
exports.lensIndex = lensIndex;
exports.lensPath = lensPath;
exports.lensProp = lensProp;
exports.lift = lift;
exports.liftN = liftN;
exports.lt = lt;
exports.lte = lte;
exports.map = map;
exports.mapAccum = mapAccum;
exports.mapAccumRight = mapAccumRight;
exports.mapObjIndexed = mapObjIndexed;
exports.match = match;
exports.mathMod = mathMod;
exports.max = max;
exports.maxBy = maxBy;
exports.mean = mean;
exports.median = median;
exports.memoizeWith = memoizeWith;
exports.merge = merge;
exports.mergeAll = mergeAll;
exports.mergeDeepLeft = mergeDeepLeft;
exports.mergeDeepRight = mergeDeepRight;
exports.mergeDeepWith = mergeDeepWith;
exports.mergeDeepWithKey = mergeDeepWithKey;
exports.mergeLeft = mergeLeft;
exports.mergeRight = mergeRight;
exports.mergeWith = mergeWith;
exports.mergeWithKey = mergeWithKey;
exports.min = min;
exports.minBy = minBy;
exports.modulo = modulo;
exports.move = move;
exports.multiply = multiply;
exports.nAry = nAry;
exports.negate = negate;
exports.none = none;
exports.not = not;
exports.nth = nth;
exports.nthArg = nthArg;
exports.o = o;
exports.objOf = objOf;
exports.of = of;
exports.omit = omit;
exports.once = once;
exports.or = or;
exports.otherwise = otherwise;
exports.over = over;
exports.pair = pair;
exports.partial = partial;
exports.partialRight = partialRight;
exports.partition = partition;
exports.path = path;
exports.pathEq = pathEq;
exports.pathOr = pathOr;
exports.pathSatisfies = pathSatisfies;
exports.paths = paths;
exports.pick = pick;
exports.pickAll = pickAll;
exports.pickBy = pickBy;
exports.pipe = pipe;
exports.pipeK = pipeK;
exports.pipeP = pipeP;
exports.pipeWith = pipeWith;
exports.pluck = pluck;
exports.prepend = prepend;
exports.product = product;
exports.project = project;
exports.prop = prop;
exports.propEq = propEq;
exports.propIs = propIs;
exports.propOr = propOr;
exports.propSatisfies = propSatisfies;
exports.props = props;
exports.range = range;
exports.reduce = reduce;
exports.reduceBy = reduceBy;
exports.reduceRight = reduceRight;
exports.reduceWhile = reduceWhile;
exports.reduced = reduced;
exports.reject = reject;
exports.remove = remove;
exports.repeat = repeat;
exports.replace = replace;
exports.reverse = reverse;
exports.scan = scan;
exports.sequence = sequence;
exports.set = set;
exports.slice = slice;
exports.sort = sort;
exports.sortBy = sortBy;
exports.sortWith = sortWith;
exports.split = split;
exports.splitAt = splitAt;
exports.splitEvery = splitEvery;
exports.splitWhen = splitWhen;
exports.startsWith = startsWith;
exports.subtract = subtract;
exports.sum = sum;
exports.symmetricDifference = symmetricDifference;
exports.symmetricDifferenceWith = symmetricDifferenceWith;
exports.tail = tail;
exports.take = take;
exports.takeLast = takeLast;
exports.takeLastWhile = takeLastWhile;
exports.takeWhile = takeWhile;
exports.tap = tap;
exports.test = test;
exports.thunkify = thunkify;
exports.times = times;
exports.toLower = toLower;
exports.toPairs = toPairs;
exports.toPairsIn = toPairsIn;
exports.toString = toString;
exports.toUpper = toUpper;
exports.transduce = transduce;
exports.transpose = transpose;
exports.traverse = traverse;
exports.trim = trim;
exports.tryCatch = tryCatch;
exports.type = type;
exports.unapply = unapply;
exports.unary = unary;
exports.uncurryN = uncurryN;
exports.unfold = unfold;
exports.union = union;
exports.unionWith = unionWith;
exports.uniq = uniq;
exports.uniqBy = uniqBy;
exports.uniqWith = uniqWith;
exports.unless = unless;
exports.unnest = unnest;
exports.until = until;
exports.update = update;
exports.useWith = useWith;
exports.values = values;
exports.valuesIn = valuesIn;
exports.view = view;
exports.when = when;
exports.where = where;
exports.whereEq = whereEq;
exports.without = without;
exports.xor = xor;
exports.xprod = xprod;
exports.zip = zip;
exports.zipObj = zipObj;
exports.zipWith = zipWith;
