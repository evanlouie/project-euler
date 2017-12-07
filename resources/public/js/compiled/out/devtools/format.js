// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__30829__auto__ = (((value == null))?null:value);
var m__30830__auto__ = (devtools.format._header[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,value);
} else {
var m__30830__auto____$1 = (devtools.format._header["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__30829__auto__ = (((value == null))?null:value);
var m__30830__auto__ = (devtools.format._has_body[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,value);
} else {
var m__30830__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__30829__auto__ = (((value == null))?null:value);
var m__30830__auto__ = (devtools.format._body[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,value);
} else {
var m__30830__auto____$1 = (devtools.format._body["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o39777 = temp__5455__auto__;
var temp__5455__auto____$1 = (o39777["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o39778 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o39778["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o39779 = temp__5455__auto____$2;
return (o39779["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o39780 = temp__5455__auto__;
var temp__5455__auto____$1 = (o39780["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o39781 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o39781["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o39782 = temp__5455__auto____$2;
return (o39782["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o39783 = temp__5455__auto__;
var temp__5455__auto____$1 = (o39783["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o39784 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o39784["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o39785 = temp__5455__auto____$2;
return (o39785["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o39786 = temp__5455__auto__;
var temp__5455__auto____$1 = (o39786["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o39787 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o39787["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o39788 = temp__5455__auto____$2;
return (o39788["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o39789 = temp__5455__auto__;
var temp__5455__auto____$1 = (o39789["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o39790 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o39790["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o39791 = temp__5455__auto____$2;
return (o39791["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o39792 = temp__5455__auto__;
var temp__5455__auto____$1 = (o39792["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o39793 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o39793["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o39794 = temp__5455__auto____$2;
return (o39794["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o39795 = temp__5455__auto__;
var temp__5455__auto____$1 = (o39795["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o39796 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o39796["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o39797 = temp__5455__auto____$2;
return (o39797["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__31382__auto__ = [];
var len__31375__auto___39799 = arguments.length;
var i__31376__auto___39800 = (0);
while(true){
if((i__31376__auto___39800 < len__31375__auto___39799)){
args__31382__auto__.push((arguments[i__31376__auto___39800]));

var G__39801 = (i__31376__auto___39800 + (1));
i__31376__auto___39800 = G__39801;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq39798){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39798));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__31382__auto__ = [];
var len__31375__auto___39803 = arguments.length;
var i__31376__auto___39804 = (0);
while(true){
if((i__31376__auto___39804 < len__31375__auto___39803)){
args__31382__auto__.push((arguments[i__31376__auto___39804]));

var G__39805 = (i__31376__auto___39804 + (1));
i__31376__auto___39804 = G__39805;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq39802){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39802));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__31382__auto__ = [];
var len__31375__auto___39807 = arguments.length;
var i__31376__auto___39808 = (0);
while(true){
if((i__31376__auto___39808 < len__31375__auto___39807)){
args__31382__auto__.push((arguments[i__31376__auto___39808]));

var G__39809 = (i__31376__auto___39808 + (1));
i__31376__auto___39808 = G__39809;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq39806){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39806));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__31382__auto__ = [];
var len__31375__auto___39811 = arguments.length;
var i__31376__auto___39812 = (0);
while(true){
if((i__31376__auto___39812 < len__31375__auto___39811)){
args__31382__auto__.push((arguments[i__31376__auto___39812]));

var G__39813 = (i__31376__auto___39812 + (1));
i__31376__auto___39812 = G__39813;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq39810){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39810));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__31382__auto__ = [];
var len__31375__auto___39815 = arguments.length;
var i__31376__auto___39816 = (0);
while(true){
if((i__31376__auto___39816 < len__31375__auto___39815)){
args__31382__auto__.push((arguments[i__31376__auto___39816]));

var G__39817 = (i__31376__auto___39816 + (1));
i__31376__auto___39816 = G__39817;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq39814){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39814));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__31382__auto__ = [];
var len__31375__auto___39819 = arguments.length;
var i__31376__auto___39820 = (0);
while(true){
if((i__31376__auto___39820 < len__31375__auto___39819)){
args__31382__auto__.push((arguments[i__31376__auto___39820]));

var G__39821 = (i__31376__auto___39820 + (1));
i__31376__auto___39820 = G__39821;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq39818){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39818));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__31382__auto__ = [];
var len__31375__auto___39823 = arguments.length;
var i__31376__auto___39824 = (0);
while(true){
if((i__31376__auto___39824 < len__31375__auto___39823)){
args__31382__auto__.push((arguments[i__31376__auto___39824]));

var G__39825 = (i__31376__auto___39824 + (1));
i__31376__auto___39824 = G__39825;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq39822){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39822));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__31382__auto__ = [];
var len__31375__auto___39833 = arguments.length;
var i__31376__auto___39834 = (0);
while(true){
if((i__31376__auto___39834 < len__31375__auto___39833)){
args__31382__auto__.push((arguments[i__31376__auto___39834]));

var G__39835 = (i__31376__auto___39834 + (1));
i__31376__auto___39834 = G__39835;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((1) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31383__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__39829){
var vec__39830 = p__39829;
var state_override = cljs.core.nth.call(null,vec__39830,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__39830,state_override){
return (function (p1__39826_SHARP_){
return cljs.core.merge.call(null,p1__39826_SHARP_,state_override);
});})(vec__39830,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq39827){
var G__39828 = cljs.core.first.call(null,seq39827);
var seq39827__$1 = cljs.core.next.call(null,seq39827);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__39828,seq39827__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__31382__auto__ = [];
var len__31375__auto___39837 = arguments.length;
var i__31376__auto___39838 = (0);
while(true){
if((i__31376__auto___39838 < len__31375__auto___39837)){
args__31382__auto__.push((arguments[i__31376__auto___39838]));

var G__39839 = (i__31376__auto___39838 + (1));
i__31376__auto___39838 = G__39839;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq39836){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39836));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__31382__auto__ = [];
var len__31375__auto___39842 = arguments.length;
var i__31376__auto___39843 = (0);
while(true){
if((i__31376__auto___39843 < len__31375__auto___39842)){
args__31382__auto__.push((arguments[i__31376__auto___39843]));

var G__39844 = (i__31376__auto___39843 + (1));
i__31376__auto___39843 = G__39844;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((1) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31383__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq39840){
var G__39841 = cljs.core.first.call(null,seq39840);
var seq39840__$1 = cljs.core.next.call(null,seq39840);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__39841,seq39840__$1);
});


//# sourceMappingURL=format.js.map?rel=1512625078914
