import { F, T, add, addIndex, adjust, all, allPass, always, and, andThen, any, anyPass, ap, aperture, append, apply, applySpec, applyTo, ascend, assoc, assocPath, binary, bind, both, call, chain, clamp, clone, comparator, complement, compose, composeK, composeP, composeWith, concat, cond, construct, constructN, contains, converge, countBy, curry, curryN, dec, defaultTo, descend, difference, differenceWith, dissoc, dissocPath, divide, drop, dropLast, dropLastWhile, dropRepeats, dropRepeatsWith, dropWhile, either, empty, endsWith, eqBy, eqProps, equals, evolve, filter, find, findIndex, findLast, findLastIndex, flatten, flip, forEach, forEachObjIndexed, fromPairs, groupBy, groupWith, gt, gte, has, hasIn, hasPath, head, identical, identity, ifElse, inc, includes, indexBy, indexOf, init, innerJoin, insert, insertAll, intersection, intersperse, into, invert, invertObj, invoker, is, isEmpty, isNil, join, juxt, keys, keysIn, last, lastIndexOf, length, lens, lensIndex, lensPath, lensProp, lift, liftN, lt, lte, map, mapAccum, mapAccumRight, mapObjIndexed, match, mathMod, max, maxBy, mean, median, memoizeWith, merge, mergeAll, mergeDeepLeft, mergeDeepRight, mergeDeepWith, mergeDeepWithKey, mergeLeft, mergeRight, mergeWith, mergeWithKey, min, minBy, modulo, move, multiply, nAry, negate, none, not, nth, nthArg, o, objOf, of, omit, once, or, otherwise, over, pair, partial, partialRight, partition, path, pathEq, pathOr, pathSatisfies, paths, pick, pickAll, pickBy, pipe, pipeK, pipeP, pipeWith, pluck, prepend, product, project, prop, propEq, propIs, propOr, propSatisfies, props, range, reduce, reduceBy, reduceRight, reduceWhile, reduced, reject, remove, repeat, replace, reverse, scan, sequence, set, slice, sort, sortBy, sortWith, split, splitAt, splitEvery, splitWhen, startsWith, subtract, sum, symmetricDifference, symmetricDifferenceWith, tail, take, takeLast, takeLastWhile, takeWhile, tap, test, thunkify, times, toLower, toPairs, toPairsIn, toString, toUpper, transduce, transpose, traverse, trim, tryCatch, type, unapply, unary, uncurryN, unfold, union, unionWith, uniq, uniqBy, uniqWith, unless, unnest, until, update, useWith, values, valuesIn, view, when, where, whereEq, without, xor, xprod, zip, zipObj, zipWith } from 'ramda';
export { __ } from 'ramda';
import { lift as lift$1, liftRec } from 'karet.lift';

// THIS FILE IS GENERATED

var F$1 = /*#__PURE__*/lift$1(F);
var T$1 = /*#__PURE__*/lift$1(T);
var add$1 = /*#__PURE__*/lift$1(add);
var addIndex$1 = /*#__PURE__*/liftRec(addIndex);
var adjust$1 = /*#__PURE__*/lift$1(adjust);
var all$1 = /*#__PURE__*/lift$1(all);
var allPass$1 = /*#__PURE__*/liftRec(allPass);
var always$1 = /*#__PURE__*/liftRec(always);
var and$1 = /*#__PURE__*/lift$1(and);
var andThen$1 = /*#__PURE__*/lift$1(andThen);
var any$1 = /*#__PURE__*/lift$1(any);
var anyPass$1 = /*#__PURE__*/liftRec(anyPass);
var ap$1 = /*#__PURE__*/lift$1(ap);
var aperture$1 = /*#__PURE__*/lift$1(aperture);
var append$1 = /*#__PURE__*/lift$1(append);
var apply$1 = /*#__PURE__*/lift$1(apply);
var applySpec$1 = /*#__PURE__*/liftRec(applySpec);
var applyTo$1 = /*#__PURE__*/lift$1(applyTo);
var ascend$1 = /*#__PURE__*/lift$1(ascend);
var assoc$1 = /*#__PURE__*/lift$1(assoc);
var assocPath$1 = /*#__PURE__*/lift$1(assocPath);
var binary$1 = /*#__PURE__*/liftRec(binary);
var bind$1 = /*#__PURE__*/liftRec(bind);
var both$1 = /*#__PURE__*/liftRec(both);
var call$1 = /*#__PURE__*/liftRec(call);
var chain$1 = /*#__PURE__*/liftRec(chain);
var clamp$1 = /*#__PURE__*/lift$1(clamp);
var clone$1 = /*#__PURE__*/lift$1(clone);
var comparator$1 = /*#__PURE__*/liftRec(comparator);
var complement$1 = /*#__PURE__*/liftRec(complement);
var compose$1 = /*#__PURE__*/liftRec(compose);
var composeK$1 = /*#__PURE__*/liftRec(process.env.NODE_ENV === 'production' ? composeK : function composeK$$1() {
  if (!composeK$$1.warned) {
    composeK$$1.warned = 1;
    console.warn("Warning: `composeK` has been deprecated in favor of `composeWith(chain)`.");
  }
  return composeK.apply(this, arguments);
});
var composeP$1 = /*#__PURE__*/liftRec(process.env.NODE_ENV === 'production' ? composeP : function composeP$$1() {
  if (!composeP$$1.warned) {
    composeP$$1.warned = 1;
    console.warn("Warning: `composeP` has been deprecated in favor of `composeWith(then)`.");
  }
  return composeP.apply(this, arguments);
});
var composeWith$1 = /*#__PURE__*/liftRec(composeWith);
var concat$1 = /*#__PURE__*/lift$1(concat);
var cond$1 = /*#__PURE__*/liftRec(cond);
var construct$1 = /*#__PURE__*/liftRec(construct);
var constructN$1 = /*#__PURE__*/liftRec(constructN);
var contains$1 = /*#__PURE__*/lift$1(process.env.NODE_ENV === 'production' ? contains : function contains$$1(_0, _1) {
  if (!contains$$1.warned) {
    contains$$1.warned = 1;
    console.warn("Warning: `contains` has been renamed to `includes`.");
  }
  return contains.apply(this, arguments);
});
var converge$1 = /*#__PURE__*/liftRec(converge);
var countBy$1 = /*#__PURE__*/lift$1(countBy);
var curry$1 = /*#__PURE__*/liftRec(curry);
var curryN$1 = /*#__PURE__*/liftRec(curryN);
var dec$1 = /*#__PURE__*/lift$1(dec);
var defaultTo$1 = /*#__PURE__*/lift$1(defaultTo);
var descend$1 = /*#__PURE__*/lift$1(descend);
var difference$1 = /*#__PURE__*/lift$1(difference);
var differenceWith$1 = /*#__PURE__*/lift$1(differenceWith);
var dissoc$1 = /*#__PURE__*/lift$1(dissoc);
var dissocPath$1 = /*#__PURE__*/lift$1(dissocPath);
var divide$1 = /*#__PURE__*/lift$1(divide);
var drop$1 = /*#__PURE__*/lift$1(drop);
var dropLast$1 = /*#__PURE__*/lift$1(dropLast);
var dropLastWhile$1 = /*#__PURE__*/lift$1(dropLastWhile);
var dropRepeats$1 = /*#__PURE__*/lift$1(dropRepeats);
var dropRepeatsWith$1 = /*#__PURE__*/lift$1(dropRepeatsWith);
var dropWhile$1 = /*#__PURE__*/lift$1(dropWhile);
var either$1 = /*#__PURE__*/liftRec(either);
var empty$1 = /*#__PURE__*/lift$1(empty);
var endsWith$1 = /*#__PURE__*/lift$1(endsWith);
var eqBy$1 = /*#__PURE__*/lift$1(eqBy);
var eqProps$1 = /*#__PURE__*/lift$1(eqProps);
var equals$1 = /*#__PURE__*/lift$1(equals);
var evolve$1 = /*#__PURE__*/lift$1(evolve);
var filter$1 = /*#__PURE__*/lift$1(filter);
var find$1 = /*#__PURE__*/lift$1(find);
var findIndex$1 = /*#__PURE__*/lift$1(findIndex);
var findLast$1 = /*#__PURE__*/lift$1(findLast);
var findLastIndex$1 = /*#__PURE__*/lift$1(findLastIndex);
var flatten$1 = /*#__PURE__*/lift$1(flatten);
var flip$1 = /*#__PURE__*/liftRec(flip);
var forEach$1 = /*#__PURE__*/lift$1(forEach);
var forEachObjIndexed$1 = /*#__PURE__*/lift$1(forEachObjIndexed);
var fromPairs$1 = /*#__PURE__*/lift$1(fromPairs);
var groupBy$1 = /*#__PURE__*/lift$1(groupBy);
var groupWith$1 = /*#__PURE__*/lift$1(groupWith);
var gt$1 = /*#__PURE__*/lift$1(gt);
var gte$1 = /*#__PURE__*/lift$1(gte);
var has$1 = /*#__PURE__*/lift$1(has);
var hasIn$1 = /*#__PURE__*/lift$1(hasIn);
var hasPath$1 = /*#__PURE__*/lift$1(hasPath);
var head$1 = /*#__PURE__*/lift$1(head);
var identical$1 = /*#__PURE__*/lift$1(identical);
var identity$1 = /*#__PURE__*/lift$1(identity);
var ifElse$1 = /*#__PURE__*/liftRec(ifElse);
var inc$1 = /*#__PURE__*/lift$1(inc);
var includes$1 = /*#__PURE__*/lift$1(includes);
var indexBy$1 = /*#__PURE__*/lift$1(indexBy);
var indexOf$1 = /*#__PURE__*/lift$1(indexOf);
var init$1 = /*#__PURE__*/lift$1(init);
var innerJoin$1 = /*#__PURE__*/lift$1(innerJoin);
var insert$1 = /*#__PURE__*/lift$1(insert);
var insertAll$1 = /*#__PURE__*/lift$1(insertAll);
var intersection$1 = /*#__PURE__*/lift$1(intersection);
var intersperse$1 = /*#__PURE__*/lift$1(intersperse);
var into$1 = /*#__PURE__*/lift$1(into);
var invert$1 = /*#__PURE__*/lift$1(invert);
var invertObj$1 = /*#__PURE__*/lift$1(invertObj);
var invoker$1 = /*#__PURE__*/liftRec(invoker);
var is$1 = /*#__PURE__*/lift$1(is);
var isEmpty$1 = /*#__PURE__*/lift$1(isEmpty);
var isNil$1 = /*#__PURE__*/lift$1(isNil);
var join$1 = /*#__PURE__*/lift$1(join);
var juxt$1 = /*#__PURE__*/liftRec(juxt);
var keys$1 = /*#__PURE__*/lift$1(keys);
var keysIn$1 = /*#__PURE__*/lift$1(keysIn);
var last$1 = /*#__PURE__*/lift$1(last);
var lastIndexOf$1 = /*#__PURE__*/lift$1(lastIndexOf);
var length$1 = /*#__PURE__*/lift$1(length);
var lens$1 = /*#__PURE__*/lift$1(lens);
var lensIndex$1 = /*#__PURE__*/lift$1(lensIndex);
var lensPath$1 = /*#__PURE__*/lift$1(lensPath);
var lensProp$1 = /*#__PURE__*/lift$1(lensProp);
var lift$2 = /*#__PURE__*/liftRec(lift);
var liftN$1 = /*#__PURE__*/liftRec(liftN);
var lt$1 = /*#__PURE__*/lift$1(lt);
var lte$1 = /*#__PURE__*/lift$1(lte);
var map$1 = /*#__PURE__*/lift$1(map);
var mapAccum$1 = /*#__PURE__*/lift$1(mapAccum);
var mapAccumRight$1 = /*#__PURE__*/lift$1(mapAccumRight);
var mapObjIndexed$1 = /*#__PURE__*/lift$1(mapObjIndexed);
var match$1 = /*#__PURE__*/lift$1(match);
var mathMod$1 = /*#__PURE__*/lift$1(mathMod);
var max$1 = /*#__PURE__*/lift$1(max);
var maxBy$1 = /*#__PURE__*/lift$1(maxBy);
var mean$1 = /*#__PURE__*/lift$1(mean);
var median$1 = /*#__PURE__*/lift$1(median);
var memoizeWith$1 = /*#__PURE__*/liftRec(memoizeWith);
var merge$1 = /*#__PURE__*/lift$1(process.env.NODE_ENV === 'production' ? merge : function merge$$1(_0, _1) {
  if (!merge$$1.warned) {
    merge$$1.warned = 1;
    console.warn("Warning: `merge` has been deprecated in favor of new `mergeRight`.");
  }
  return merge.apply(this, arguments);
});
var mergeAll$1 = /*#__PURE__*/lift$1(mergeAll);
var mergeDeepLeft$1 = /*#__PURE__*/lift$1(mergeDeepLeft);
var mergeDeepRight$1 = /*#__PURE__*/lift$1(mergeDeepRight);
var mergeDeepWith$1 = /*#__PURE__*/lift$1(mergeDeepWith);
var mergeDeepWithKey$1 = /*#__PURE__*/lift$1(mergeDeepWithKey);
var mergeLeft$1 = /*#__PURE__*/lift$1(mergeLeft);
var mergeRight$1 = /*#__PURE__*/lift$1(mergeRight);
var mergeWith$1 = /*#__PURE__*/lift$1(mergeWith);
var mergeWithKey$1 = /*#__PURE__*/lift$1(mergeWithKey);
var min$1 = /*#__PURE__*/lift$1(min);
var minBy$1 = /*#__PURE__*/lift$1(minBy);
var modulo$1 = /*#__PURE__*/lift$1(modulo);
var move$1 = /*#__PURE__*/lift$1(move);
var multiply$1 = /*#__PURE__*/lift$1(multiply);
var nAry$1 = /*#__PURE__*/liftRec(nAry);
var negate$1 = /*#__PURE__*/lift$1(negate);
var none$1 = /*#__PURE__*/lift$1(none);
var not$1 = /*#__PURE__*/lift$1(not);
var nth$1 = /*#__PURE__*/lift$1(nth);
var nthArg$1 = /*#__PURE__*/liftRec(nthArg);
var o$1 = /*#__PURE__*/liftRec(o);
var objOf$1 = /*#__PURE__*/lift$1(objOf);
var of$1 = /*#__PURE__*/lift$1(of);
var omit$1 = /*#__PURE__*/lift$1(omit);
var once$1 = /*#__PURE__*/liftRec(once);
var or$1 = /*#__PURE__*/lift$1(or);
var otherwise$1 = /*#__PURE__*/lift$1(otherwise);
var over$1 = /*#__PURE__*/lift$1(over);
var pair$1 = /*#__PURE__*/lift$1(pair);
var partial$1 = /*#__PURE__*/liftRec(partial);
var partialRight$1 = /*#__PURE__*/liftRec(partialRight);
var partition$1 = /*#__PURE__*/lift$1(partition);
var path$1 = /*#__PURE__*/lift$1(path);
var pathEq$1 = /*#__PURE__*/lift$1(pathEq);
var pathOr$1 = /*#__PURE__*/lift$1(pathOr);
var pathSatisfies$1 = /*#__PURE__*/lift$1(pathSatisfies);
var paths$1 = /*#__PURE__*/lift$1(paths);
var pick$1 = /*#__PURE__*/lift$1(pick);
var pickAll$1 = /*#__PURE__*/lift$1(pickAll);
var pickBy$1 = /*#__PURE__*/lift$1(pickBy);
var pipe$1 = /*#__PURE__*/liftRec(pipe);
var pipeK$1 = /*#__PURE__*/liftRec(process.env.NODE_ENV === 'production' ? pipeK : function pipeK$$1() {
  if (!pipeK$$1.warned) {
    pipeK$$1.warned = 1;
    console.warn("Warning: `pipeK` has been deprecated in favor of `pipeWith(chain)`.");
  }
  return pipeK.apply(this, arguments);
});
var pipeP$1 = /*#__PURE__*/liftRec(process.env.NODE_ENV === 'production' ? pipeP : function pipeP$$1() {
  if (!pipeP$$1.warned) {
    pipeP$$1.warned = 1;
    console.warn("Warning: `pipeP` has been deprecated in favor of `pipeWith(then)`.");
  }
  return pipeP.apply(this, arguments);
});
var pipeWith$1 = /*#__PURE__*/liftRec(pipeWith);
var pluck$1 = /*#__PURE__*/lift$1(pluck);
var prepend$1 = /*#__PURE__*/lift$1(prepend);
var product$1 = /*#__PURE__*/lift$1(product);
var project$1 = /*#__PURE__*/lift$1(project);
var prop$1 = /*#__PURE__*/lift$1(prop);
var propEq$1 = /*#__PURE__*/lift$1(propEq);
var propIs$1 = /*#__PURE__*/lift$1(propIs);
var propOr$1 = /*#__PURE__*/lift$1(propOr);
var propSatisfies$1 = /*#__PURE__*/lift$1(propSatisfies);
var props$1 = /*#__PURE__*/lift$1(props);
var range$1 = /*#__PURE__*/lift$1(range);
var reduce$1 = /*#__PURE__*/lift$1(reduce);
var reduceBy$1 = /*#__PURE__*/liftRec(reduceBy);
var reduceRight$1 = /*#__PURE__*/lift$1(reduceRight);
var reduceWhile$1 = /*#__PURE__*/liftRec(reduceWhile);
var reduced$1 = /*#__PURE__*/lift$1(reduced);
var reject$1 = /*#__PURE__*/lift$1(reject);
var remove$1 = /*#__PURE__*/lift$1(remove);
var repeat$1 = /*#__PURE__*/lift$1(repeat);
var replace$1 = /*#__PURE__*/lift$1(replace);
var reverse$1 = /*#__PURE__*/lift$1(reverse);
var scan$1 = /*#__PURE__*/lift$1(scan);
var sequence$1 = /*#__PURE__*/lift$1(sequence);
var set$1 = /*#__PURE__*/lift$1(set);
var slice$1 = /*#__PURE__*/lift$1(slice);
var sort$1 = /*#__PURE__*/lift$1(sort);
var sortBy$1 = /*#__PURE__*/lift$1(sortBy);
var sortWith$1 = /*#__PURE__*/lift$1(sortWith);
var split$1 = /*#__PURE__*/lift$1(split);
var splitAt$1 = /*#__PURE__*/lift$1(splitAt);
var splitEvery$1 = /*#__PURE__*/lift$1(splitEvery);
var splitWhen$1 = /*#__PURE__*/lift$1(splitWhen);
var startsWith$1 = /*#__PURE__*/lift$1(startsWith);
var subtract$1 = /*#__PURE__*/lift$1(subtract);
var sum$1 = /*#__PURE__*/lift$1(sum);
var symmetricDifference$1 = /*#__PURE__*/lift$1(symmetricDifference);
var symmetricDifferenceWith$1 = /*#__PURE__*/lift$1(symmetricDifferenceWith);
var tail$1 = /*#__PURE__*/lift$1(tail);
var take$1 = /*#__PURE__*/lift$1(take);
var takeLast$1 = /*#__PURE__*/lift$1(takeLast);
var takeLastWhile$1 = /*#__PURE__*/lift$1(takeLastWhile);
var takeWhile$1 = /*#__PURE__*/lift$1(takeWhile);
var tap$1 = /*#__PURE__*/lift$1(tap);
var test$1 = /*#__PURE__*/lift$1(test);
var thunkify$1 = /*#__PURE__*/liftRec(thunkify);
var times$1 = /*#__PURE__*/lift$1(times);
var toLower$1 = /*#__PURE__*/lift$1(toLower);
var toPairs$1 = /*#__PURE__*/lift$1(toPairs);
var toPairsIn$1 = /*#__PURE__*/lift$1(toPairsIn);
var toString$1 = /*#__PURE__*/lift$1(toString);
var toUpper$1 = /*#__PURE__*/lift$1(toUpper);
var transduce$1 = /*#__PURE__*/lift$1(transduce);
var transpose$1 = /*#__PURE__*/lift$1(transpose);
var traverse$1 = /*#__PURE__*/lift$1(traverse);
var trim$1 = /*#__PURE__*/lift$1(trim);
var tryCatch$1 = /*#__PURE__*/liftRec(tryCatch);
var type$1 = /*#__PURE__*/lift$1(type);
var unapply$1 = /*#__PURE__*/liftRec(unapply);
var unary$1 = /*#__PURE__*/liftRec(unary);
var uncurryN$1 = /*#__PURE__*/liftRec(uncurryN);
var unfold$1 = /*#__PURE__*/lift$1(unfold);
var union$1 = /*#__PURE__*/lift$1(union);
var unionWith$1 = /*#__PURE__*/lift$1(unionWith);
var uniq$1 = /*#__PURE__*/lift$1(uniq);
var uniqBy$1 = /*#__PURE__*/lift$1(uniqBy);
var uniqWith$1 = /*#__PURE__*/lift$1(uniqWith);
var unless$1 = /*#__PURE__*/lift$1(unless);
var unnest$1 = /*#__PURE__*/lift$1(unnest);
var until$1 = /*#__PURE__*/lift$1(until);
var update$1 = /*#__PURE__*/lift$1(update);
var useWith$1 = /*#__PURE__*/liftRec(useWith);
var values$1 = /*#__PURE__*/lift$1(values);
var valuesIn$1 = /*#__PURE__*/lift$1(valuesIn);
var view$1 = /*#__PURE__*/lift$1(view);
var when$1 = /*#__PURE__*/lift$1(when);
var where$1 = /*#__PURE__*/lift$1(where);
var whereEq$1 = /*#__PURE__*/lift$1(whereEq);
var without$1 = /*#__PURE__*/lift$1(without);
var xor$1 = /*#__PURE__*/lift$1(xor);
var xprod$1 = /*#__PURE__*/lift$1(xprod);
var zip$1 = /*#__PURE__*/lift$1(zip);
var zipObj$1 = /*#__PURE__*/lift$1(zipObj);
var zipWith$1 = /*#__PURE__*/lift$1(zipWith);

export { F$1 as F, T$1 as T, add$1 as add, addIndex$1 as addIndex, adjust$1 as adjust, all$1 as all, allPass$1 as allPass, always$1 as always, and$1 as and, andThen$1 as andThen, any$1 as any, anyPass$1 as anyPass, ap$1 as ap, aperture$1 as aperture, append$1 as append, apply$1 as apply, applySpec$1 as applySpec, applyTo$1 as applyTo, ascend$1 as ascend, assoc$1 as assoc, assocPath$1 as assocPath, binary$1 as binary, bind$1 as bind, both$1 as both, call$1 as call, chain$1 as chain, clamp$1 as clamp, clone$1 as clone, comparator$1 as comparator, complement$1 as complement, compose$1 as compose, composeK$1 as composeK, composeP$1 as composeP, composeWith$1 as composeWith, concat$1 as concat, cond$1 as cond, construct$1 as construct, constructN$1 as constructN, contains$1 as contains, converge$1 as converge, countBy$1 as countBy, curry$1 as curry, curryN$1 as curryN, dec$1 as dec, defaultTo$1 as defaultTo, descend$1 as descend, difference$1 as difference, differenceWith$1 as differenceWith, dissoc$1 as dissoc, dissocPath$1 as dissocPath, divide$1 as divide, drop$1 as drop, dropLast$1 as dropLast, dropLastWhile$1 as dropLastWhile, dropRepeats$1 as dropRepeats, dropRepeatsWith$1 as dropRepeatsWith, dropWhile$1 as dropWhile, either$1 as either, empty$1 as empty, endsWith$1 as endsWith, eqBy$1 as eqBy, eqProps$1 as eqProps, equals$1 as equals, evolve$1 as evolve, filter$1 as filter, find$1 as find, findIndex$1 as findIndex, findLast$1 as findLast, findLastIndex$1 as findLastIndex, flatten$1 as flatten, flip$1 as flip, forEach$1 as forEach, forEachObjIndexed$1 as forEachObjIndexed, fromPairs$1 as fromPairs, groupBy$1 as groupBy, groupWith$1 as groupWith, gt$1 as gt, gte$1 as gte, has$1 as has, hasIn$1 as hasIn, hasPath$1 as hasPath, head$1 as head, identical$1 as identical, identity$1 as identity, ifElse$1 as ifElse, inc$1 as inc, includes$1 as includes, indexBy$1 as indexBy, indexOf$1 as indexOf, init$1 as init, innerJoin$1 as innerJoin, insert$1 as insert, insertAll$1 as insertAll, intersection$1 as intersection, intersperse$1 as intersperse, into$1 as into, invert$1 as invert, invertObj$1 as invertObj, invoker$1 as invoker, is$1 as is, isEmpty$1 as isEmpty, isNil$1 as isNil, join$1 as join, juxt$1 as juxt, keys$1 as keys, keysIn$1 as keysIn, last$1 as last, lastIndexOf$1 as lastIndexOf, length$1 as length, lens$1 as lens, lensIndex$1 as lensIndex, lensPath$1 as lensPath, lensProp$1 as lensProp, lift$2 as lift, liftN$1 as liftN, lt$1 as lt, lte$1 as lte, map$1 as map, mapAccum$1 as mapAccum, mapAccumRight$1 as mapAccumRight, mapObjIndexed$1 as mapObjIndexed, match$1 as match, mathMod$1 as mathMod, max$1 as max, maxBy$1 as maxBy, mean$1 as mean, median$1 as median, memoizeWith$1 as memoizeWith, merge$1 as merge, mergeAll$1 as mergeAll, mergeDeepLeft$1 as mergeDeepLeft, mergeDeepRight$1 as mergeDeepRight, mergeDeepWith$1 as mergeDeepWith, mergeDeepWithKey$1 as mergeDeepWithKey, mergeLeft$1 as mergeLeft, mergeRight$1 as mergeRight, mergeWith$1 as mergeWith, mergeWithKey$1 as mergeWithKey, min$1 as min, minBy$1 as minBy, modulo$1 as modulo, move$1 as move, multiply$1 as multiply, nAry$1 as nAry, negate$1 as negate, none$1 as none, not$1 as not, nth$1 as nth, nthArg$1 as nthArg, o$1 as o, objOf$1 as objOf, of$1 as of, omit$1 as omit, once$1 as once, or$1 as or, otherwise$1 as otherwise, over$1 as over, pair$1 as pair, partial$1 as partial, partialRight$1 as partialRight, partition$1 as partition, path$1 as path, pathEq$1 as pathEq, pathOr$1 as pathOr, pathSatisfies$1 as pathSatisfies, paths$1 as paths, pick$1 as pick, pickAll$1 as pickAll, pickBy$1 as pickBy, pipe$1 as pipe, pipeK$1 as pipeK, pipeP$1 as pipeP, pipeWith$1 as pipeWith, pluck$1 as pluck, prepend$1 as prepend, product$1 as product, project$1 as project, prop$1 as prop, propEq$1 as propEq, propIs$1 as propIs, propOr$1 as propOr, propSatisfies$1 as propSatisfies, props$1 as props, range$1 as range, reduce$1 as reduce, reduceBy$1 as reduceBy, reduceRight$1 as reduceRight, reduceWhile$1 as reduceWhile, reduced$1 as reduced, reject$1 as reject, remove$1 as remove, repeat$1 as repeat, replace$1 as replace, reverse$1 as reverse, scan$1 as scan, sequence$1 as sequence, set$1 as set, slice$1 as slice, sort$1 as sort, sortBy$1 as sortBy, sortWith$1 as sortWith, split$1 as split, splitAt$1 as splitAt, splitEvery$1 as splitEvery, splitWhen$1 as splitWhen, startsWith$1 as startsWith, subtract$1 as subtract, sum$1 as sum, symmetricDifference$1 as symmetricDifference, symmetricDifferenceWith$1 as symmetricDifferenceWith, tail$1 as tail, take$1 as take, takeLast$1 as takeLast, takeLastWhile$1 as takeLastWhile, takeWhile$1 as takeWhile, tap$1 as tap, test$1 as test, thunkify$1 as thunkify, times$1 as times, toLower$1 as toLower, toPairs$1 as toPairs, toPairsIn$1 as toPairsIn, toString$1 as toString, toUpper$1 as toUpper, transduce$1 as transduce, transpose$1 as transpose, traverse$1 as traverse, trim$1 as trim, tryCatch$1 as tryCatch, type$1 as type, unapply$1 as unapply, unary$1 as unary, uncurryN$1 as uncurryN, unfold$1 as unfold, union$1 as union, unionWith$1 as unionWith, uniq$1 as uniq, uniqBy$1 as uniqBy, uniqWith$1 as uniqWith, unless$1 as unless, unnest$1 as unnest, until$1 as until, update$1 as update, useWith$1 as useWith, values$1 as values, valuesIn$1 as valuesIn, view$1 as view, when$1 as when, where$1 as where, whereEq$1 as whereEq, without$1 as without, xor$1 as xor, xprod$1 as xprod, zip$1 as zip, zipObj$1 as zipObj, zipWith$1 as zipWith };
