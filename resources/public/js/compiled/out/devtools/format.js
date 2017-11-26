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
var x__31522__auto__ = (((value == null))?null:value);
var m__31523__auto__ = (devtools.format._header[goog.typeOf(x__31522__auto__)]);
if(!((m__31523__auto__ == null))){
return m__31523__auto__.call(null,value);
} else {
var m__31523__auto____$1 = (devtools.format._header["_"]);
if(!((m__31523__auto____$1 == null))){
return m__31523__auto____$1.call(null,value);
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
var x__31522__auto__ = (((value == null))?null:value);
var m__31523__auto__ = (devtools.format._has_body[goog.typeOf(x__31522__auto__)]);
if(!((m__31523__auto__ == null))){
return m__31523__auto__.call(null,value);
} else {
var m__31523__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__31523__auto____$1 == null))){
return m__31523__auto____$1.call(null,value);
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
var x__31522__auto__ = (((value == null))?null:value);
var m__31523__auto__ = (devtools.format._body[goog.typeOf(x__31522__auto__)]);
if(!((m__31523__auto__ == null))){
return m__31523__auto__.call(null,value);
} else {
var m__31523__auto____$1 = (devtools.format._body["_"]);
if(!((m__31523__auto____$1 == null))){
return m__31523__auto____$1.call(null,value);
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
var o37746 = temp__5455__auto__;
var temp__5455__auto____$1 = (o37746["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o37747 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o37747["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o37748 = temp__5455__auto____$2;
return (o37748["make_template"]);
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
var o37749 = temp__5455__auto__;
var temp__5455__auto____$1 = (o37749["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o37750 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o37750["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o37751 = temp__5455__auto____$2;
return (o37751["make_group"]);
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
var o37752 = temp__5455__auto__;
var temp__5455__auto____$1 = (o37752["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o37753 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o37753["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o37754 = temp__5455__auto____$2;
return (o37754["make_reference"]);
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
var o37755 = temp__5455__auto__;
var temp__5455__auto____$1 = (o37755["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o37756 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o37756["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o37757 = temp__5455__auto____$2;
return (o37757["make_surrogate"]);
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
var o37758 = temp__5455__auto__;
var temp__5455__auto____$1 = (o37758["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o37759 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o37759["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o37760 = temp__5455__auto____$2;
return (o37760["render_markup"]);
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
var o37761 = temp__5455__auto__;
var temp__5455__auto____$1 = (o37761["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o37762 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o37762["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o37763 = temp__5455__auto____$2;
return (o37763["_LT_header_GT_"]);
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
var o37764 = temp__5455__auto__;
var temp__5455__auto____$1 = (o37764["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o37765 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o37765["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o37766 = temp__5455__auto____$2;
return (o37766["_LT_standard_body_GT_"]);
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
var args__32075__auto__ = [];
var len__32068__auto___37768 = arguments.length;
var i__32069__auto___37769 = (0);
while(true){
if((i__32069__auto___37769 < len__32068__auto___37768)){
args__32075__auto__.push((arguments[i__32069__auto___37769]));

var G__37770 = (i__32069__auto___37769 + (1));
i__32069__auto___37769 = G__37770;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((0) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__32076__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq37767){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37767));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__32075__auto__ = [];
var len__32068__auto___37772 = arguments.length;
var i__32069__auto___37773 = (0);
while(true){
if((i__32069__auto___37773 < len__32068__auto___37772)){
args__32075__auto__.push((arguments[i__32069__auto___37773]));

var G__37774 = (i__32069__auto___37773 + (1));
i__32069__auto___37773 = G__37774;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((0) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__32076__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq37771){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37771));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__32075__auto__ = [];
var len__32068__auto___37776 = arguments.length;
var i__32069__auto___37777 = (0);
while(true){
if((i__32069__auto___37777 < len__32068__auto___37776)){
args__32075__auto__.push((arguments[i__32069__auto___37777]));

var G__37778 = (i__32069__auto___37777 + (1));
i__32069__auto___37777 = G__37778;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((0) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__32076__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq37775){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37775));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__32075__auto__ = [];
var len__32068__auto___37780 = arguments.length;
var i__32069__auto___37781 = (0);
while(true){
if((i__32069__auto___37781 < len__32068__auto___37780)){
args__32075__auto__.push((arguments[i__32069__auto___37781]));

var G__37782 = (i__32069__auto___37781 + (1));
i__32069__auto___37781 = G__37782;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((0) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__32076__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq37779){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37779));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__32075__auto__ = [];
var len__32068__auto___37784 = arguments.length;
var i__32069__auto___37785 = (0);
while(true){
if((i__32069__auto___37785 < len__32068__auto___37784)){
args__32075__auto__.push((arguments[i__32069__auto___37785]));

var G__37786 = (i__32069__auto___37785 + (1));
i__32069__auto___37785 = G__37786;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((0) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__32076__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq37783){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37783));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__32075__auto__ = [];
var len__32068__auto___37788 = arguments.length;
var i__32069__auto___37789 = (0);
while(true){
if((i__32069__auto___37789 < len__32068__auto___37788)){
args__32075__auto__.push((arguments[i__32069__auto___37789]));

var G__37790 = (i__32069__auto___37789 + (1));
i__32069__auto___37789 = G__37790;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((0) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__32076__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq37787){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37787));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__32075__auto__ = [];
var len__32068__auto___37792 = arguments.length;
var i__32069__auto___37793 = (0);
while(true){
if((i__32069__auto___37793 < len__32068__auto___37792)){
args__32075__auto__.push((arguments[i__32069__auto___37793]));

var G__37794 = (i__32069__auto___37793 + (1));
i__32069__auto___37793 = G__37794;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((0) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__32076__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq37791){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37791));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__32075__auto__ = [];
var len__32068__auto___37802 = arguments.length;
var i__32069__auto___37803 = (0);
while(true){
if((i__32069__auto___37803 < len__32068__auto___37802)){
args__32075__auto__.push((arguments[i__32069__auto___37803]));

var G__37804 = (i__32069__auto___37803 + (1));
i__32069__auto___37803 = G__37804;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((1) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32076__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__37798){
var vec__37799 = p__37798;
var state_override = cljs.core.nth.call(null,vec__37799,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__37799,state_override){
return (function (p1__37795_SHARP_){
return cljs.core.merge.call(null,p1__37795_SHARP_,state_override);
});})(vec__37799,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq37796){
var G__37797 = cljs.core.first.call(null,seq37796);
var seq37796__$1 = cljs.core.next.call(null,seq37796);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__37797,seq37796__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__32075__auto__ = [];
var len__32068__auto___37806 = arguments.length;
var i__32069__auto___37807 = (0);
while(true){
if((i__32069__auto___37807 < len__32068__auto___37806)){
args__32075__auto__.push((arguments[i__32069__auto___37807]));

var G__37808 = (i__32069__auto___37807 + (1));
i__32069__auto___37807 = G__37808;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((0) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__32076__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq37805){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37805));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__32075__auto__ = [];
var len__32068__auto___37811 = arguments.length;
var i__32069__auto___37812 = (0);
while(true){
if((i__32069__auto___37812 < len__32068__auto___37811)){
args__32075__auto__.push((arguments[i__32069__auto___37812]));

var G__37813 = (i__32069__auto___37812 + (1));
i__32069__auto___37812 = G__37813;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((1) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32076__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq37809){
var G__37810 = cljs.core.first.call(null,seq37809);
var seq37809__$1 = cljs.core.next.call(null,seq37809);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__37810,seq37809__$1);
});


//# sourceMappingURL=format.js.map?rel=1511666494035
