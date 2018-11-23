// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__28906__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__28906 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28907__i = 0, G__28907__a = new Array(arguments.length -  0);
while (G__28907__i < G__28907__a.length) {G__28907__a[G__28907__i] = arguments[G__28907__i + 0]; ++G__28907__i;}
  args = new cljs.core.IndexedSeq(G__28907__a,0,null);
} 
return G__28906__delegate.call(this,args);};
G__28906.cljs$lang$maxFixedArity = 0;
G__28906.cljs$lang$applyTo = (function (arglist__28908){
var args = cljs.core.seq(arglist__28908);
return G__28906__delegate(args);
});
G__28906.cljs$core$IFn$_invoke$arity$variadic = G__28906__delegate;
return G__28906;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__28909__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__28909 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28910__i = 0, G__28910__a = new Array(arguments.length -  0);
while (G__28910__i < G__28910__a.length) {G__28910__a[G__28910__i] = arguments[G__28910__i + 0]; ++G__28910__i;}
  args = new cljs.core.IndexedSeq(G__28910__a,0,null);
} 
return G__28909__delegate.call(this,args);};
G__28909.cljs$lang$maxFixedArity = 0;
G__28909.cljs$lang$applyTo = (function (arglist__28911){
var args = cljs.core.seq(arglist__28911);
return G__28909__delegate(args);
});
G__28909.cljs$core$IFn$_invoke$arity$variadic = G__28909__delegate;
return G__28909;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
