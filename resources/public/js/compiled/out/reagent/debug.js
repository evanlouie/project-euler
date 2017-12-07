// Compiled by ClojureScript 1.9.946 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__31909__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__31909 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31910__i = 0, G__31910__a = new Array(arguments.length -  0);
while (G__31910__i < G__31910__a.length) {G__31910__a[G__31910__i] = arguments[G__31910__i + 0]; ++G__31910__i;}
  args = new cljs.core.IndexedSeq(G__31910__a,0,null);
} 
return G__31909__delegate.call(this,args);};
G__31909.cljs$lang$maxFixedArity = 0;
G__31909.cljs$lang$applyTo = (function (arglist__31911){
var args = cljs.core.seq(arglist__31911);
return G__31909__delegate(args);
});
G__31909.cljs$core$IFn$_invoke$arity$variadic = G__31909__delegate;
return G__31909;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__31912__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__31912 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31913__i = 0, G__31913__a = new Array(arguments.length -  0);
while (G__31913__i < G__31913__a.length) {G__31913__a[G__31913__i] = arguments[G__31913__i + 0]; ++G__31913__i;}
  args = new cljs.core.IndexedSeq(G__31913__a,0,null);
} 
return G__31912__delegate.call(this,args);};
G__31912.cljs$lang$maxFixedArity = 0;
G__31912.cljs$lang$applyTo = (function (arglist__31914){
var args = cljs.core.seq(arglist__31914);
return G__31912__delegate(args);
});
G__31912.cljs$core$IFn$_invoke$arity$variadic = G__31912__delegate;
return G__31912;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1512625069456
