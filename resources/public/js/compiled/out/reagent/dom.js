// Compiled by ClojureScript 1.9.946 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(!((reagent.dom.imported == null))){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__30096__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_32637 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_32637){
return (function (){
var _STAR_always_update_STAR_32638 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_32638;
}});})(_STAR_always_update_STAR_32637))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_32637;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__32640 = arguments.length;
switch (G__32640) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__32642_32646 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__32643_32647 = null;
var count__32644_32648 = (0);
var i__32645_32649 = (0);
while(true){
if((i__32645_32649 < count__32644_32648)){
var v_32650 = cljs.core._nth.call(null,chunk__32643_32647,i__32645_32649);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_32650);

var G__32651 = seq__32642_32646;
var G__32652 = chunk__32643_32647;
var G__32653 = count__32644_32648;
var G__32654 = (i__32645_32649 + (1));
seq__32642_32646 = G__32651;
chunk__32643_32647 = G__32652;
count__32644_32648 = G__32653;
i__32645_32649 = G__32654;
continue;
} else {
var temp__5457__auto___32655 = cljs.core.seq.call(null,seq__32642_32646);
if(temp__5457__auto___32655){
var seq__32642_32656__$1 = temp__5457__auto___32655;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32642_32656__$1)){
var c__31027__auto___32657 = cljs.core.chunk_first.call(null,seq__32642_32656__$1);
var G__32658 = cljs.core.chunk_rest.call(null,seq__32642_32656__$1);
var G__32659 = c__31027__auto___32657;
var G__32660 = cljs.core.count.call(null,c__31027__auto___32657);
var G__32661 = (0);
seq__32642_32646 = G__32658;
chunk__32643_32647 = G__32659;
count__32644_32648 = G__32660;
i__32645_32649 = G__32661;
continue;
} else {
var v_32662 = cljs.core.first.call(null,seq__32642_32656__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_32662);

var G__32663 = cljs.core.next.call(null,seq__32642_32656__$1);
var G__32664 = null;
var G__32665 = (0);
var G__32666 = (0);
seq__32642_32646 = G__32663;
chunk__32643_32647 = G__32664;
count__32644_32648 = G__32665;
i__32645_32649 = G__32666;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1512625071897
