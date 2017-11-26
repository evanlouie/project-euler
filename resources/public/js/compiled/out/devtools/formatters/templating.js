// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x39891_39892 = value;
x39891_39892.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x39894_39895 = value;
x39894_39895.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x39897_39898 = value;
x39897_39898.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__30777__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__30777__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__30777__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__32075__auto__ = [];
var len__32068__auto___39905 = arguments.length;
var i__32069__auto___39906 = (0);
while(true){
if((i__32069__auto___39906 < len__32068__auto___39905)){
args__32075__auto__.push((arguments[i__32069__auto___39906]));

var G__39907 = (i__32069__auto___39906 + (1));
i__32069__auto___39906 = G__39907;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((0) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__32076__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__39901_39908 = cljs.core.seq.call(null,items);
var chunk__39902_39909 = null;
var count__39903_39910 = (0);
var i__39904_39911 = (0);
while(true){
if((i__39904_39911 < count__39903_39910)){
var item_39912 = cljs.core._nth.call(null,chunk__39902_39909,i__39904_39911);
if(!((item_39912 == null))){
if(cljs.core.coll_QMARK_.call(null,item_39912)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_39912)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_39912));
}
} else {
}

var G__39913 = seq__39901_39908;
var G__39914 = chunk__39902_39909;
var G__39915 = count__39903_39910;
var G__39916 = (i__39904_39911 + (1));
seq__39901_39908 = G__39913;
chunk__39902_39909 = G__39914;
count__39903_39910 = G__39915;
i__39904_39911 = G__39916;
continue;
} else {
var temp__5457__auto___39917 = cljs.core.seq.call(null,seq__39901_39908);
if(temp__5457__auto___39917){
var seq__39901_39918__$1 = temp__5457__auto___39917;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39901_39918__$1)){
var c__31720__auto___39919 = cljs.core.chunk_first.call(null,seq__39901_39918__$1);
var G__39920 = cljs.core.chunk_rest.call(null,seq__39901_39918__$1);
var G__39921 = c__31720__auto___39919;
var G__39922 = cljs.core.count.call(null,c__31720__auto___39919);
var G__39923 = (0);
seq__39901_39908 = G__39920;
chunk__39902_39909 = G__39921;
count__39903_39910 = G__39922;
i__39904_39911 = G__39923;
continue;
} else {
var item_39924 = cljs.core.first.call(null,seq__39901_39918__$1);
if(!((item_39924 == null))){
if(cljs.core.coll_QMARK_.call(null,item_39924)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_39924)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_39924));
}
} else {
}

var G__39925 = cljs.core.next.call(null,seq__39901_39918__$1);
var G__39926 = null;
var G__39927 = (0);
var G__39928 = (0);
seq__39901_39908 = G__39925;
chunk__39902_39909 = G__39926;
count__39903_39910 = G__39927;
i__39904_39911 = G__39928;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq39900){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39900));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__32075__auto__ = [];
var len__32068__auto___39936 = arguments.length;
var i__32069__auto___39937 = (0);
while(true){
if((i__32069__auto___39937 < len__32068__auto___39936)){
args__32075__auto__.push((arguments[i__32069__auto___39937]));

var G__39938 = (i__32069__auto___39937 + (1));
i__32069__auto___39937 = G__39938;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((2) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32076__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__39932_39939 = cljs.core.seq.call(null,children);
var chunk__39933_39940 = null;
var count__39934_39941 = (0);
var i__39935_39942 = (0);
while(true){
if((i__39935_39942 < count__39934_39941)){
var child_39943 = cljs.core._nth.call(null,chunk__39933_39940,i__39935_39942);
if(!((child_39943 == null))){
if(cljs.core.coll_QMARK_.call(null,child_39943)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_39943))));
} else {
var temp__5455__auto___39944 = devtools.formatters.helpers.pref.call(null,child_39943);
if(cljs.core.truth_(temp__5455__auto___39944)){
var child_value_39945 = temp__5455__auto___39944;
template.push(child_value_39945);
} else {
}
}
} else {
}

var G__39946 = seq__39932_39939;
var G__39947 = chunk__39933_39940;
var G__39948 = count__39934_39941;
var G__39949 = (i__39935_39942 + (1));
seq__39932_39939 = G__39946;
chunk__39933_39940 = G__39947;
count__39934_39941 = G__39948;
i__39935_39942 = G__39949;
continue;
} else {
var temp__5457__auto___39950 = cljs.core.seq.call(null,seq__39932_39939);
if(temp__5457__auto___39950){
var seq__39932_39951__$1 = temp__5457__auto___39950;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39932_39951__$1)){
var c__31720__auto___39952 = cljs.core.chunk_first.call(null,seq__39932_39951__$1);
var G__39953 = cljs.core.chunk_rest.call(null,seq__39932_39951__$1);
var G__39954 = c__31720__auto___39952;
var G__39955 = cljs.core.count.call(null,c__31720__auto___39952);
var G__39956 = (0);
seq__39932_39939 = G__39953;
chunk__39933_39940 = G__39954;
count__39934_39941 = G__39955;
i__39935_39942 = G__39956;
continue;
} else {
var child_39957 = cljs.core.first.call(null,seq__39932_39951__$1);
if(!((child_39957 == null))){
if(cljs.core.coll_QMARK_.call(null,child_39957)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_39957))));
} else {
var temp__5455__auto___39958 = devtools.formatters.helpers.pref.call(null,child_39957);
if(cljs.core.truth_(temp__5455__auto___39958)){
var child_value_39959 = temp__5455__auto___39958;
template.push(child_value_39959);
} else {
}
}
} else {
}

var G__39960 = cljs.core.next.call(null,seq__39932_39951__$1);
var G__39961 = null;
var G__39962 = (0);
var G__39963 = (0);
seq__39932_39939 = G__39960;
chunk__39933_39940 = G__39961;
count__39934_39941 = G__39962;
i__39935_39942 = G__39963;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq39929){
var G__39930 = cljs.core.first.call(null,seq39929);
var seq39929__$1 = cljs.core.next.call(null,seq39929);
var G__39931 = cljs.core.first.call(null,seq39929__$1);
var seq39929__$2 = cljs.core.next.call(null,seq39929__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__39930,G__39931,seq39929__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__32075__auto__ = [];
var len__32068__auto___39966 = arguments.length;
var i__32069__auto___39967 = (0);
while(true){
if((i__32069__auto___39967 < len__32068__auto___39966)){
args__32075__auto__.push((arguments[i__32069__auto___39967]));

var G__39968 = (i__32069__auto___39967 + (1));
i__32069__auto___39967 = G__39968;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((1) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32076__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq39964){
var G__39965 = cljs.core.first.call(null,seq39964);
var seq39964__$1 = cljs.core.next.call(null,seq39964);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39965,seq39964__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__32075__auto__ = [];
var len__32068__auto___39971 = arguments.length;
var i__32069__auto___39972 = (0);
while(true){
if((i__32069__auto___39972 < len__32068__auto___39971)){
args__32075__auto__.push((arguments[i__32069__auto___39972]));

var G__39973 = (i__32069__auto___39972 + (1));
i__32069__auto___39972 = G__39973;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((1) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32076__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq39969){
var G__39970 = cljs.core.first.call(null,seq39969);
var seq39969__$1 = cljs.core.next.call(null,seq39969);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39970,seq39969__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__39975 = arguments.length;
switch (G__39975) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj39977 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__30789__auto__ = start_index;
if(cljs.core.truth_(or__30789__auto__)){
return or__30789__auto__;
} else {
return (0);
}
})()};
return obj39977;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__32075__auto__ = [];
var len__32068__auto___39985 = arguments.length;
var i__32069__auto___39986 = (0);
while(true){
if((i__32069__auto___39986 < len__32068__auto___39985)){
args__32075__auto__.push((arguments[i__32069__auto___39986]));

var G__39987 = (i__32069__auto___39986 + (1));
i__32069__auto___39986 = G__39987;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((1) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32076__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__39981){
var vec__39982 = p__39981;
var state_override_fn = cljs.core.nth.call(null,vec__39982,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq39979){
var G__39980 = cljs.core.first.call(null,seq39979);
var seq39979__$1 = cljs.core.next.call(null,seq39979);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__39980,seq39979__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_39988 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_39988;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__39989 = name;
switch (G__39989) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__39991 = tag;
var html_tag = cljs.core.nth.call(null,vec__39991,(0),null);
var style = cljs.core.nth.call(null,vec__39991,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_39994 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_39994;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_39995 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_39996 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_39996;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_39995;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__39997 = initial_value;
var G__39998 = value.call(null);
initial_value = G__39997;
value = G__39998;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__39999 = initial_value;
var G__40000 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__39999;
value = G__40000;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__40001 = initial_value;
var G__40002 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__40001;
value = G__40002;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1511666496534
