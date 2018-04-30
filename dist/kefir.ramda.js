(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ramda'), require('karet.lift')) :
	typeof define === 'function' && define.amd ? define(['exports', 'ramda', 'karet.lift'], factory) :
	(factory((global.Kefir = global.Kefir || {}, global.Kefir.ramda = {}),global.R,global.karet.lift));
}(this, (function (exports,R,K) { 'use strict';

	// THIS FILE IS GENERATED

	var F = /*#__PURE__*/K.liftRec(R.F);
	var T = /*#__PURE__*/K.liftRec(R.T);
	var __ = /*#__PURE__*/K.liftRec(R.__);
	var add = /*#__PURE__*/K.liftRec(R.add);
	var addIndex = /*#__PURE__*/K.liftRec(R.addIndex);
	var adjust = /*#__PURE__*/K.liftRec(R.adjust);
	var all = /*#__PURE__*/K.liftRec(R.all);
	var allPass = /*#__PURE__*/K.liftRec(R.allPass);
	var always = /*#__PURE__*/K.liftRec(R.always);
	var and = /*#__PURE__*/K.liftRec(R.and);
	var any = /*#__PURE__*/K.liftRec(R.any);
	var anyPass = /*#__PURE__*/K.liftRec(R.anyPass);
	var ap = /*#__PURE__*/K.liftRec(R.ap);
	var aperture = /*#__PURE__*/K.liftRec(R.aperture);
	var append = /*#__PURE__*/K.liftRec(R.append);
	var apply = /*#__PURE__*/K.liftRec(R.apply);
	var applySpec = /*#__PURE__*/K.liftRec(R.applySpec);
	var applyTo = /*#__PURE__*/K.liftRec(R.applyTo);
	var ascend = /*#__PURE__*/K.liftRec(R.ascend);
	var assoc = /*#__PURE__*/K.liftRec(R.assoc);
	var assocPath = /*#__PURE__*/K.liftRec(R.assocPath);
	var binary = /*#__PURE__*/K.liftRec(R.binary);
	var bind = /*#__PURE__*/K.liftRec(R.bind);
	var both = /*#__PURE__*/K.liftRec(R.both);
	var call = /*#__PURE__*/K.liftRec(R.call);
	var chain = /*#__PURE__*/K.liftRec(R.chain);
	var clamp = /*#__PURE__*/K.liftRec(R.clamp);
	var clone = /*#__PURE__*/K.liftRec(R.clone);
	var comparator = /*#__PURE__*/K.liftRec(R.comparator);
	var complement = /*#__PURE__*/K.liftRec(R.complement);
	var compose = /*#__PURE__*/K.liftRec(R.compose);
	var composeK = /*#__PURE__*/K.liftRec(R.composeK);
	var composeP = /*#__PURE__*/K.liftRec(R.composeP);
	var concat = /*#__PURE__*/K.liftRec(R.concat);
	var cond = /*#__PURE__*/K.liftRec(R.cond);
	var construct = /*#__PURE__*/K.liftRec(R.construct);
	var constructN = /*#__PURE__*/K.liftRec(R.constructN);
	var contains = /*#__PURE__*/K.liftRec(R.contains);
	var converge = /*#__PURE__*/K.liftRec(R.converge);
	var countBy = /*#__PURE__*/K.liftRec(R.countBy);
	var curry = /*#__PURE__*/K.liftRec(R.curry);
	var curryN = /*#__PURE__*/K.liftRec(R.curryN);
	var dec = /*#__PURE__*/K.liftRec(R.dec);
	var defaultTo = /*#__PURE__*/K.liftRec(R.defaultTo);
	var descend = /*#__PURE__*/K.liftRec(R.descend);
	var difference = /*#__PURE__*/K.liftRec(R.difference);
	var differenceWith = /*#__PURE__*/K.liftRec(R.differenceWith);
	var dissoc = /*#__PURE__*/K.liftRec(R.dissoc);
	var dissocPath = /*#__PURE__*/K.liftRec(R.dissocPath);
	var divide = /*#__PURE__*/K.liftRec(R.divide);
	var drop = /*#__PURE__*/K.liftRec(R.drop);
	var dropLast = /*#__PURE__*/K.liftRec(R.dropLast);
	var dropLastWhile = /*#__PURE__*/K.liftRec(R.dropLastWhile);
	var dropRepeats = /*#__PURE__*/K.liftRec(R.dropRepeats);
	var dropRepeatsWith = /*#__PURE__*/K.liftRec(R.dropRepeatsWith);
	var dropWhile = /*#__PURE__*/K.liftRec(R.dropWhile);
	var either = /*#__PURE__*/K.liftRec(R.either);
	var empty = /*#__PURE__*/K.liftRec(R.empty);
	var endsWith = /*#__PURE__*/K.liftRec(R.endsWith);
	var eqBy = /*#__PURE__*/K.liftRec(R.eqBy);
	var eqProps = /*#__PURE__*/K.liftRec(R.eqProps);
	var equals = /*#__PURE__*/K.liftRec(R.equals);
	var evolve = /*#__PURE__*/K.liftRec(R.evolve);
	var filter = /*#__PURE__*/K.liftRec(R.filter);
	var find = /*#__PURE__*/K.liftRec(R.find);
	var findIndex = /*#__PURE__*/K.liftRec(R.findIndex);
	var findLast = /*#__PURE__*/K.liftRec(R.findLast);
	var findLastIndex = /*#__PURE__*/K.liftRec(R.findLastIndex);
	var flatten = /*#__PURE__*/K.liftRec(R.flatten);
	var flip = /*#__PURE__*/K.liftRec(R.flip);
	var forEach = /*#__PURE__*/K.liftRec(R.forEach);
	var forEachObjIndexed = /*#__PURE__*/K.liftRec(R.forEachObjIndexed);
	var fromPairs = /*#__PURE__*/K.liftRec(R.fromPairs);
	var groupBy = /*#__PURE__*/K.liftRec(R.groupBy);
	var groupWith = /*#__PURE__*/K.liftRec(R.groupWith);
	var gt = /*#__PURE__*/K.liftRec(R.gt);
	var gte = /*#__PURE__*/K.liftRec(R.gte);
	var has = /*#__PURE__*/K.liftRec(R.has);
	var hasIn = /*#__PURE__*/K.liftRec(R.hasIn);
	var head = /*#__PURE__*/K.liftRec(R.head);
	var identical = /*#__PURE__*/K.liftRec(R.identical);
	var identity = /*#__PURE__*/K.liftRec(R.identity);
	var ifElse = /*#__PURE__*/K.liftRec(R.ifElse);
	var inc = /*#__PURE__*/K.liftRec(R.inc);
	var indexBy = /*#__PURE__*/K.liftRec(R.indexBy);
	var indexOf = /*#__PURE__*/K.liftRec(R.indexOf);
	var init = /*#__PURE__*/K.liftRec(R.init);
	var innerJoin = /*#__PURE__*/K.liftRec(R.innerJoin);
	var insert = /*#__PURE__*/K.liftRec(R.insert);
	var insertAll = /*#__PURE__*/K.liftRec(R.insertAll);
	var intersection = /*#__PURE__*/K.liftRec(R.intersection);
	var intersperse = /*#__PURE__*/K.liftRec(R.intersperse);
	var into = /*#__PURE__*/K.liftRec(R.into);
	var invert = /*#__PURE__*/K.liftRec(R.invert);
	var invertObj = /*#__PURE__*/K.liftRec(R.invertObj);
	var invoker = /*#__PURE__*/K.liftRec(R.invoker);
	var is = /*#__PURE__*/K.liftRec(R.is);
	var isEmpty = /*#__PURE__*/K.liftRec(R.isEmpty);
	var isNil = /*#__PURE__*/K.liftRec(R.isNil);
	var join = /*#__PURE__*/K.liftRec(R.join);
	var juxt = /*#__PURE__*/K.liftRec(R.juxt);
	var keys = /*#__PURE__*/K.liftRec(R.keys);
	var keysIn = /*#__PURE__*/K.liftRec(R.keysIn);
	var last = /*#__PURE__*/K.liftRec(R.last);
	var lastIndexOf = /*#__PURE__*/K.liftRec(R.lastIndexOf);
	var length = /*#__PURE__*/K.liftRec(R.length);
	var lens = /*#__PURE__*/K.liftRec(R.lens);
	var lensIndex = /*#__PURE__*/K.liftRec(R.lensIndex);
	var lensPath = /*#__PURE__*/K.liftRec(R.lensPath);
	var lensProp = /*#__PURE__*/K.liftRec(R.lensProp);
	var lift = /*#__PURE__*/K.liftRec(R.lift);
	var liftN = /*#__PURE__*/K.liftRec(R.liftN);
	var lt = /*#__PURE__*/K.liftRec(R.lt);
	var lte = /*#__PURE__*/K.liftRec(R.lte);
	var map = /*#__PURE__*/K.liftRec(R.map);
	var mapAccum = /*#__PURE__*/K.liftRec(R.mapAccum);
	var mapAccumRight = /*#__PURE__*/K.liftRec(R.mapAccumRight);
	var mapObjIndexed = /*#__PURE__*/K.liftRec(R.mapObjIndexed);
	var match = /*#__PURE__*/K.liftRec(R.match);
	var mathMod = /*#__PURE__*/K.liftRec(R.mathMod);
	var max = /*#__PURE__*/K.liftRec(R.max);
	var maxBy = /*#__PURE__*/K.liftRec(R.maxBy);
	var mean = /*#__PURE__*/K.liftRec(R.mean);
	var median = /*#__PURE__*/K.liftRec(R.median);
	var memoize = /*#__PURE__*/K.liftRec(R.memoize);
	var memoizeWith = /*#__PURE__*/K.liftRec(R.memoizeWith);
	var merge = /*#__PURE__*/K.liftRec(R.merge);
	var mergeAll = /*#__PURE__*/K.liftRec(R.mergeAll);
	var mergeDeepLeft = /*#__PURE__*/K.liftRec(R.mergeDeepLeft);
	var mergeDeepRight = /*#__PURE__*/K.liftRec(R.mergeDeepRight);
	var mergeDeepWith = /*#__PURE__*/K.liftRec(R.mergeDeepWith);
	var mergeDeepWithKey = /*#__PURE__*/K.liftRec(R.mergeDeepWithKey);
	var mergeWith = /*#__PURE__*/K.liftRec(R.mergeWith);
	var mergeWithKey = /*#__PURE__*/K.liftRec(R.mergeWithKey);
	var min = /*#__PURE__*/K.liftRec(R.min);
	var minBy = /*#__PURE__*/K.liftRec(R.minBy);
	var modulo = /*#__PURE__*/K.liftRec(R.modulo);
	var multiply = /*#__PURE__*/K.liftRec(R.multiply);
	var nAry = /*#__PURE__*/K.liftRec(R.nAry);
	var negate = /*#__PURE__*/K.liftRec(R.negate);
	var none = /*#__PURE__*/K.liftRec(R.none);
	var not = /*#__PURE__*/K.liftRec(R.not);
	var nth = /*#__PURE__*/K.liftRec(R.nth);
	var nthArg = /*#__PURE__*/K.liftRec(R.nthArg);
	var o = /*#__PURE__*/K.liftRec(R.o);
	var objOf = /*#__PURE__*/K.liftRec(R.objOf);
	var of = /*#__PURE__*/K.liftRec(R.of);
	var omit = /*#__PURE__*/K.liftRec(R.omit);
	var once = /*#__PURE__*/K.liftRec(R.once);
	var or = /*#__PURE__*/K.liftRec(R.or);
	var over = /*#__PURE__*/K.liftRec(R.over);
	var pair = /*#__PURE__*/K.liftRec(R.pair);
	var partial = /*#__PURE__*/K.liftRec(R.partial);
	var partialRight = /*#__PURE__*/K.liftRec(R.partialRight);
	var partition = /*#__PURE__*/K.liftRec(R.partition);
	var path = /*#__PURE__*/K.liftRec(R.path);
	var pathEq = /*#__PURE__*/K.liftRec(R.pathEq);
	var pathOr = /*#__PURE__*/K.liftRec(R.pathOr);
	var pathSatisfies = /*#__PURE__*/K.liftRec(R.pathSatisfies);
	var pick = /*#__PURE__*/K.liftRec(R.pick);
	var pickAll = /*#__PURE__*/K.liftRec(R.pickAll);
	var pickBy = /*#__PURE__*/K.liftRec(R.pickBy);
	var pipe = /*#__PURE__*/K.liftRec(R.pipe);
	var pipeK = /*#__PURE__*/K.liftRec(R.pipeK);
	var pipeP = /*#__PURE__*/K.liftRec(R.pipeP);
	var pluck = /*#__PURE__*/K.liftRec(R.pluck);
	var prepend = /*#__PURE__*/K.liftRec(R.prepend);
	var product = /*#__PURE__*/K.liftRec(R.product);
	var project = /*#__PURE__*/K.liftRec(R.project);
	var prop = /*#__PURE__*/K.liftRec(R.prop);
	var propEq = /*#__PURE__*/K.liftRec(R.propEq);
	var propIs = /*#__PURE__*/K.liftRec(R.propIs);
	var propOr = /*#__PURE__*/K.liftRec(R.propOr);
	var propSatisfies = /*#__PURE__*/K.liftRec(R.propSatisfies);
	var props = /*#__PURE__*/K.liftRec(R.props);
	var range = /*#__PURE__*/K.liftRec(R.range);
	var reduce = /*#__PURE__*/K.liftRec(R.reduce);
	var reduceBy = /*#__PURE__*/K.liftRec(R.reduceBy);
	var reduceRight = /*#__PURE__*/K.liftRec(R.reduceRight);
	var reduceWhile = /*#__PURE__*/K.liftRec(R.reduceWhile);
	var reduced = /*#__PURE__*/K.liftRec(R.reduced);
	var reject = /*#__PURE__*/K.liftRec(R.reject);
	var remove = /*#__PURE__*/K.liftRec(R.remove);
	var repeat = /*#__PURE__*/K.liftRec(R.repeat);
	var replace = /*#__PURE__*/K.liftRec(R.replace);
	var reverse = /*#__PURE__*/K.liftRec(R.reverse);
	var scan = /*#__PURE__*/K.liftRec(R.scan);
	var sequence = /*#__PURE__*/K.liftRec(R.sequence);
	var set = /*#__PURE__*/K.liftRec(R.set);
	var slice = /*#__PURE__*/K.liftRec(R.slice);
	var sort = /*#__PURE__*/K.liftRec(R.sort);
	var sortBy = /*#__PURE__*/K.liftRec(R.sortBy);
	var sortWith = /*#__PURE__*/K.liftRec(R.sortWith);
	var split = /*#__PURE__*/K.liftRec(R.split);
	var splitAt = /*#__PURE__*/K.liftRec(R.splitAt);
	var splitEvery = /*#__PURE__*/K.liftRec(R.splitEvery);
	var splitWhen = /*#__PURE__*/K.liftRec(R.splitWhen);
	var startsWith = /*#__PURE__*/K.liftRec(R.startsWith);
	var subtract = /*#__PURE__*/K.liftRec(R.subtract);
	var sum = /*#__PURE__*/K.liftRec(R.sum);
	var symmetricDifference = /*#__PURE__*/K.liftRec(R.symmetricDifference);
	var symmetricDifferenceWith = /*#__PURE__*/K.liftRec(R.symmetricDifferenceWith);
	var tail = /*#__PURE__*/K.liftRec(R.tail);
	var take = /*#__PURE__*/K.liftRec(R.take);
	var takeLast = /*#__PURE__*/K.liftRec(R.takeLast);
	var takeLastWhile = /*#__PURE__*/K.liftRec(R.takeLastWhile);
	var takeWhile = /*#__PURE__*/K.liftRec(R.takeWhile);
	var tap = /*#__PURE__*/K.liftRec(R.tap);
	var test = /*#__PURE__*/K.liftRec(R.test);
	var times = /*#__PURE__*/K.liftRec(R.times);
	var toLower = /*#__PURE__*/K.liftRec(R.toLower);
	var toPairs = /*#__PURE__*/K.liftRec(R.toPairs);
	var toPairsIn = /*#__PURE__*/K.liftRec(R.toPairsIn);
	var toString = /*#__PURE__*/K.liftRec(R.toString);
	var toUpper = /*#__PURE__*/K.liftRec(R.toUpper);
	var transduce = /*#__PURE__*/K.liftRec(R.transduce);
	var transpose = /*#__PURE__*/K.liftRec(R.transpose);
	var traverse = /*#__PURE__*/K.liftRec(R.traverse);
	var trim = /*#__PURE__*/K.liftRec(R.trim);
	var tryCatch = /*#__PURE__*/K.liftRec(R.tryCatch);
	var type = /*#__PURE__*/K.liftRec(R.type);
	var unapply = /*#__PURE__*/K.liftRec(R.unapply);
	var unary = /*#__PURE__*/K.liftRec(R.unary);
	var uncurryN = /*#__PURE__*/K.liftRec(R.uncurryN);
	var unfold = /*#__PURE__*/K.liftRec(R.unfold);
	var union = /*#__PURE__*/K.liftRec(R.union);
	var unionWith = /*#__PURE__*/K.liftRec(R.unionWith);
	var uniq = /*#__PURE__*/K.liftRec(R.uniq);
	var uniqBy = /*#__PURE__*/K.liftRec(R.uniqBy);
	var uniqWith = /*#__PURE__*/K.liftRec(R.uniqWith);
	var unless = /*#__PURE__*/K.liftRec(R.unless);
	var unnest = /*#__PURE__*/K.liftRec(R.unnest);
	var until = /*#__PURE__*/K.liftRec(R.until);
	var update = /*#__PURE__*/K.liftRec(R.update);
	var useWith = /*#__PURE__*/K.liftRec(R.useWith);
	var values = /*#__PURE__*/K.liftRec(R.values);
	var valuesIn = /*#__PURE__*/K.liftRec(R.valuesIn);
	var view = /*#__PURE__*/K.liftRec(R.view);
	var when = /*#__PURE__*/K.liftRec(R.when);
	var where = /*#__PURE__*/K.liftRec(R.where);
	var whereEq = /*#__PURE__*/K.liftRec(R.whereEq);
	var without = /*#__PURE__*/K.liftRec(R.without);
	var xprod = /*#__PURE__*/K.liftRec(R.xprod);
	var zip = /*#__PURE__*/K.liftRec(R.zip);
	var zipObj = /*#__PURE__*/K.liftRec(R.zipObj);
	var zipWith = /*#__PURE__*/K.liftRec(R.zipWith);

	exports.F = F;
	exports.T = T;
	exports.__ = __;
	exports.add = add;
	exports.addIndex = addIndex;
	exports.adjust = adjust;
	exports.all = all;
	exports.allPass = allPass;
	exports.always = always;
	exports.and = and;
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
	exports.head = head;
	exports.identical = identical;
	exports.identity = identity;
	exports.ifElse = ifElse;
	exports.inc = inc;
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
	exports.memoize = memoize;
	exports.memoizeWith = memoizeWith;
	exports.merge = merge;
	exports.mergeAll = mergeAll;
	exports.mergeDeepLeft = mergeDeepLeft;
	exports.mergeDeepRight = mergeDeepRight;
	exports.mergeDeepWith = mergeDeepWith;
	exports.mergeDeepWithKey = mergeDeepWithKey;
	exports.mergeWith = mergeWith;
	exports.mergeWithKey = mergeWithKey;
	exports.min = min;
	exports.minBy = minBy;
	exports.modulo = modulo;
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
	exports.over = over;
	exports.pair = pair;
	exports.partial = partial;
	exports.partialRight = partialRight;
	exports.partition = partition;
	exports.path = path;
	exports.pathEq = pathEq;
	exports.pathOr = pathOr;
	exports.pathSatisfies = pathSatisfies;
	exports.pick = pick;
	exports.pickAll = pickAll;
	exports.pickBy = pickBy;
	exports.pipe = pipe;
	exports.pipeK = pipeK;
	exports.pipeP = pipeP;
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
	exports.xprod = xprod;
	exports.zip = zip;
	exports.zipObj = zipObj;
	exports.zipWith = zipWith;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
