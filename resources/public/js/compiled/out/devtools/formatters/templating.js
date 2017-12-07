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
var x41922_41923 = value;
x41922_41923.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


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
var x41925_41926 = value;
x41925_41926.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


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
var x41928_41929 = value;
x41928_41929.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


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
var and__30084__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__30084__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__30084__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__31382__auto__ = [];
var len__31375__auto___41936 = arguments.length;
var i__31376__auto___41937 = (0);
while(true){
if((i__31376__auto___41937 < len__31375__auto___41936)){
args__31382__auto__.push((arguments[i__31376__auto___41937]));

var G__41938 = (i__31376__auto___41937 + (1));
i__31376__auto___41937 = G__41938;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__41932_41939 = cljs.core.seq.call(null,items);
var chunk__41933_41940 = null;
var count__41934_41941 = (0);
var i__41935_41942 = (0);
while(true){
if((i__41935_41942 < count__41934_41941)){
var item_41943 = cljs.core._nth.call(null,chunk__41933_41940,i__41935_41942);
if(!((item_41943 == null))){
if(cljs.core.coll_QMARK_.call(null,item_41943)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_41943)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_41943));
}
} else {
}

var G__41944 = seq__41932_41939;
var G__41945 = chunk__41933_41940;
var G__41946 = count__41934_41941;
var G__41947 = (i__41935_41942 + (1));
seq__41932_41939 = G__41944;
chunk__41933_41940 = G__41945;
count__41934_41941 = G__41946;
i__41935_41942 = G__41947;
continue;
} else {
var temp__5457__auto___41948 = cljs.core.seq.call(null,seq__41932_41939);
if(temp__5457__auto___41948){
var seq__41932_41949__$1 = temp__5457__auto___41948;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41932_41949__$1)){
var c__31027__auto___41950 = cljs.core.chunk_first.call(null,seq__41932_41949__$1);
var G__41951 = cljs.core.chunk_rest.call(null,seq__41932_41949__$1);
var G__41952 = c__31027__auto___41950;
var G__41953 = cljs.core.count.call(null,c__31027__auto___41950);
var G__41954 = (0);
seq__41932_41939 = G__41951;
chunk__41933_41940 = G__41952;
count__41934_41941 = G__41953;
i__41935_41942 = G__41954;
continue;
} else {
var item_41955 = cljs.core.first.call(null,seq__41932_41949__$1);
if(!((item_41955 == null))){
if(cljs.core.coll_QMARK_.call(null,item_41955)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_41955)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_41955));
}
} else {
}

var G__41956 = cljs.core.next.call(null,seq__41932_41949__$1);
var G__41957 = null;
var G__41958 = (0);
var G__41959 = (0);
seq__41932_41939 = G__41956;
chunk__41933_41940 = G__41957;
count__41934_41941 = G__41958;
i__41935_41942 = G__41959;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq41931){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41931));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__31382__auto__ = [];
var len__31375__auto___41967 = arguments.length;
var i__31376__auto___41968 = (0);
while(true){
if((i__31376__auto___41968 < len__31375__auto___41967)){
args__31382__auto__.push((arguments[i__31376__auto___41968]));

var G__41969 = (i__31376__auto___41968 + (1));
i__31376__auto___41968 = G__41969;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((2) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31383__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__41963_41970 = cljs.core.seq.call(null,children);
var chunk__41964_41971 = null;
var count__41965_41972 = (0);
var i__41966_41973 = (0);
while(true){
if((i__41966_41973 < count__41965_41972)){
var child_41974 = cljs.core._nth.call(null,chunk__41964_41971,i__41966_41973);
if(!((child_41974 == null))){
if(cljs.core.coll_QMARK_.call(null,child_41974)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_41974))));
} else {
var temp__5455__auto___41975 = devtools.formatters.helpers.pref.call(null,child_41974);
if(cljs.core.truth_(temp__5455__auto___41975)){
var child_value_41976 = temp__5455__auto___41975;
template.push(child_value_41976);
} else {
}
}
} else {
}

var G__41977 = seq__41963_41970;
var G__41978 = chunk__41964_41971;
var G__41979 = count__41965_41972;
var G__41980 = (i__41966_41973 + (1));
seq__41963_41970 = G__41977;
chunk__41964_41971 = G__41978;
count__41965_41972 = G__41979;
i__41966_41973 = G__41980;
continue;
} else {
var temp__5457__auto___41981 = cljs.core.seq.call(null,seq__41963_41970);
if(temp__5457__auto___41981){
var seq__41963_41982__$1 = temp__5457__auto___41981;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41963_41982__$1)){
var c__31027__auto___41983 = cljs.core.chunk_first.call(null,seq__41963_41982__$1);
var G__41984 = cljs.core.chunk_rest.call(null,seq__41963_41982__$1);
var G__41985 = c__31027__auto___41983;
var G__41986 = cljs.core.count.call(null,c__31027__auto___41983);
var G__41987 = (0);
seq__41963_41970 = G__41984;
chunk__41964_41971 = G__41985;
count__41965_41972 = G__41986;
i__41966_41973 = G__41987;
continue;
} else {
var child_41988 = cljs.core.first.call(null,seq__41963_41982__$1);
if(!((child_41988 == null))){
if(cljs.core.coll_QMARK_.call(null,child_41988)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_41988))));
} else {
var temp__5455__auto___41989 = devtools.formatters.helpers.pref.call(null,child_41988);
if(cljs.core.truth_(temp__5455__auto___41989)){
var child_value_41990 = temp__5455__auto___41989;
template.push(child_value_41990);
} else {
}
}
} else {
}

var G__41991 = cljs.core.next.call(null,seq__41963_41982__$1);
var G__41992 = null;
var G__41993 = (0);
var G__41994 = (0);
seq__41963_41970 = G__41991;
chunk__41964_41971 = G__41992;
count__41965_41972 = G__41993;
i__41966_41973 = G__41994;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq41960){
var G__41961 = cljs.core.first.call(null,seq41960);
var seq41960__$1 = cljs.core.next.call(null,seq41960);
var G__41962 = cljs.core.first.call(null,seq41960__$1);
var seq41960__$2 = cljs.core.next.call(null,seq41960__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__41961,G__41962,seq41960__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__31382__auto__ = [];
var len__31375__auto___41997 = arguments.length;
var i__31376__auto___41998 = (0);
while(true){
if((i__31376__auto___41998 < len__31375__auto___41997)){
args__31382__auto__.push((arguments[i__31376__auto___41998]));

var G__41999 = (i__31376__auto___41998 + (1));
i__31376__auto___41998 = G__41999;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((1) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31383__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq41995){
var G__41996 = cljs.core.first.call(null,seq41995);
var seq41995__$1 = cljs.core.next.call(null,seq41995);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41996,seq41995__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__31382__auto__ = [];
var len__31375__auto___42002 = arguments.length;
var i__31376__auto___42003 = (0);
while(true){
if((i__31376__auto___42003 < len__31375__auto___42002)){
args__31382__auto__.push((arguments[i__31376__auto___42003]));

var G__42004 = (i__31376__auto___42003 + (1));
i__31376__auto___42003 = G__42004;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((1) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31383__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq42000){
var G__42001 = cljs.core.first.call(null,seq42000);
var seq42000__$1 = cljs.core.next.call(null,seq42000);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42001,seq42000__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__42006 = arguments.length;
switch (G__42006) {
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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj42008 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__30096__auto__ = start_index;
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return (0);
}
})()};
return obj42008;
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
var args__31382__auto__ = [];
var len__31375__auto___42016 = arguments.length;
var i__31376__auto___42017 = (0);
while(true){
if((i__31376__auto___42017 < len__31375__auto___42016)){
args__31382__auto__.push((arguments[i__31376__auto___42017]));

var G__42018 = (i__31376__auto___42017 + (1));
i__31376__auto___42017 = G__42018;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((1) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31383__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__42012){
var vec__42013 = p__42012;
var state_override_fn = cljs.core.nth.call(null,vec__42013,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq42010){
var G__42011 = cljs.core.first.call(null,seq42010);
var seq42010__$1 = cljs.core.next.call(null,seq42010);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__42011,seq42010__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_42019 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_42019;
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
var G__42020 = name;
switch (G__42020) {
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
var vec__42022 = tag;
var html_tag = cljs.core.nth.call(null,vec__42022,(0),null);
var style = cljs.core.nth.call(null,vec__42022,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_42025 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_42025;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_42026 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_42027 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_42027;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_42026;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__42028 = initial_value;
var G__42029 = value.call(null);
initial_value = G__42028;
value = G__42029;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__42030 = initial_value;
var G__42031 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__42030;
value = G__42031;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__42032 = initial_value;
var G__42033 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__42032;
value = G__42033;
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

//# sourceMappingURL=templating.js.map?rel=1512625081557
