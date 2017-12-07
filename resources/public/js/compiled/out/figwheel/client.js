// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e39016){if((e39016 instanceof Error)){
var e = e39016;
return "Error: Unable to stringify";
} else {
throw e39016;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__39019 = arguments.length;
switch (G__39019) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__39017_SHARP_){
if(typeof p1__39017_SHARP_ === 'string'){
return p1__39017_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__39017_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__31382__auto__ = [];
var len__31375__auto___39022 = arguments.length;
var i__31376__auto___39023 = (0);
while(true){
if((i__31376__auto___39023 < len__31375__auto___39022)){
args__31382__auto__.push((arguments[i__31376__auto___39023]));

var G__39024 = (i__31376__auto___39023 + (1));
i__31376__auto___39023 = G__39024;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq39021){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39021));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31382__auto__ = [];
var len__31375__auto___39026 = arguments.length;
var i__31376__auto___39027 = (0);
while(true){
if((i__31376__auto___39027 < len__31375__auto___39026)){
args__31382__auto__.push((arguments[i__31376__auto___39027]));

var G__39028 = (i__31376__auto___39027 + (1));
i__31376__auto___39027 = G__39028;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq39025){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39025));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39029){
var map__39030 = p__39029;
var map__39030__$1 = ((((!((map__39030 == null)))?((((map__39030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39030.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39030):map__39030);
var message = cljs.core.get.call(null,map__39030__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39030__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30096__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30084__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30084__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30084__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__34071__auto___39109 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___39109,ch){
return (function (){
var f__34072__auto__ = (function (){var switch__33981__auto__ = ((function (c__34071__auto___39109,ch){
return (function (state_39081){
var state_val_39082 = (state_39081[(1)]);
if((state_val_39082 === (7))){
var inst_39077 = (state_39081[(2)]);
var state_39081__$1 = state_39081;
var statearr_39083_39110 = state_39081__$1;
(statearr_39083_39110[(2)] = inst_39077);

(statearr_39083_39110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39082 === (1))){
var state_39081__$1 = state_39081;
var statearr_39084_39111 = state_39081__$1;
(statearr_39084_39111[(2)] = null);

(statearr_39084_39111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39082 === (4))){
var inst_39034 = (state_39081[(7)]);
var inst_39034__$1 = (state_39081[(2)]);
var state_39081__$1 = (function (){var statearr_39085 = state_39081;
(statearr_39085[(7)] = inst_39034__$1);

return statearr_39085;
})();
if(cljs.core.truth_(inst_39034__$1)){
var statearr_39086_39112 = state_39081__$1;
(statearr_39086_39112[(1)] = (5));

} else {
var statearr_39087_39113 = state_39081__$1;
(statearr_39087_39113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39082 === (15))){
var inst_39041 = (state_39081[(8)]);
var inst_39056 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39041);
var inst_39057 = cljs.core.first.call(null,inst_39056);
var inst_39058 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39057);
var inst_39059 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39058)].join('');
var inst_39060 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39059);
var state_39081__$1 = state_39081;
var statearr_39088_39114 = state_39081__$1;
(statearr_39088_39114[(2)] = inst_39060);

(statearr_39088_39114[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39082 === (13))){
var inst_39065 = (state_39081[(2)]);
var state_39081__$1 = state_39081;
var statearr_39089_39115 = state_39081__$1;
(statearr_39089_39115[(2)] = inst_39065);

(statearr_39089_39115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39082 === (6))){
var state_39081__$1 = state_39081;
var statearr_39090_39116 = state_39081__$1;
(statearr_39090_39116[(2)] = null);

(statearr_39090_39116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39082 === (17))){
var inst_39063 = (state_39081[(2)]);
var state_39081__$1 = state_39081;
var statearr_39091_39117 = state_39081__$1;
(statearr_39091_39117[(2)] = inst_39063);

(statearr_39091_39117[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39082 === (3))){
var inst_39079 = (state_39081[(2)]);
var state_39081__$1 = state_39081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39081__$1,inst_39079);
} else {
if((state_val_39082 === (12))){
var inst_39040 = (state_39081[(9)]);
var inst_39054 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39040,opts);
var state_39081__$1 = state_39081;
if(cljs.core.truth_(inst_39054)){
var statearr_39092_39118 = state_39081__$1;
(statearr_39092_39118[(1)] = (15));

} else {
var statearr_39093_39119 = state_39081__$1;
(statearr_39093_39119[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39082 === (2))){
var state_39081__$1 = state_39081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39081__$1,(4),ch);
} else {
if((state_val_39082 === (11))){
var inst_39041 = (state_39081[(8)]);
var inst_39046 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39047 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39041);
var inst_39048 = cljs.core.async.timeout.call(null,(1000));
var inst_39049 = [inst_39047,inst_39048];
var inst_39050 = (new cljs.core.PersistentVector(null,2,(5),inst_39046,inst_39049,null));
var state_39081__$1 = state_39081;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39081__$1,(14),inst_39050);
} else {
if((state_val_39082 === (9))){
var inst_39041 = (state_39081[(8)]);
var inst_39067 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39068 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39041);
var inst_39069 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39068);
var inst_39070 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39069)].join('');
var inst_39071 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39070);
var state_39081__$1 = (function (){var statearr_39094 = state_39081;
(statearr_39094[(10)] = inst_39067);

return statearr_39094;
})();
var statearr_39095_39120 = state_39081__$1;
(statearr_39095_39120[(2)] = inst_39071);

(statearr_39095_39120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39082 === (5))){
var inst_39034 = (state_39081[(7)]);
var inst_39036 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39037 = (new cljs.core.PersistentArrayMap(null,2,inst_39036,null));
var inst_39038 = (new cljs.core.PersistentHashSet(null,inst_39037,null));
var inst_39039 = figwheel.client.focus_msgs.call(null,inst_39038,inst_39034);
var inst_39040 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39039);
var inst_39041 = cljs.core.first.call(null,inst_39039);
var inst_39042 = figwheel.client.autoload_QMARK_.call(null);
var state_39081__$1 = (function (){var statearr_39096 = state_39081;
(statearr_39096[(8)] = inst_39041);

(statearr_39096[(9)] = inst_39040);

return statearr_39096;
})();
if(cljs.core.truth_(inst_39042)){
var statearr_39097_39121 = state_39081__$1;
(statearr_39097_39121[(1)] = (8));

} else {
var statearr_39098_39122 = state_39081__$1;
(statearr_39098_39122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39082 === (14))){
var inst_39052 = (state_39081[(2)]);
var state_39081__$1 = state_39081;
var statearr_39099_39123 = state_39081__$1;
(statearr_39099_39123[(2)] = inst_39052);

(statearr_39099_39123[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39082 === (16))){
var state_39081__$1 = state_39081;
var statearr_39100_39124 = state_39081__$1;
(statearr_39100_39124[(2)] = null);

(statearr_39100_39124[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39082 === (10))){
var inst_39073 = (state_39081[(2)]);
var state_39081__$1 = (function (){var statearr_39101 = state_39081;
(statearr_39101[(11)] = inst_39073);

return statearr_39101;
})();
var statearr_39102_39125 = state_39081__$1;
(statearr_39102_39125[(2)] = null);

(statearr_39102_39125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39082 === (8))){
var inst_39040 = (state_39081[(9)]);
var inst_39044 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39040,opts);
var state_39081__$1 = state_39081;
if(cljs.core.truth_(inst_39044)){
var statearr_39103_39126 = state_39081__$1;
(statearr_39103_39126[(1)] = (11));

} else {
var statearr_39104_39127 = state_39081__$1;
(statearr_39104_39127[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34071__auto___39109,ch))
;
return ((function (switch__33981__auto__,c__34071__auto___39109,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33982__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33982__auto____0 = (function (){
var statearr_39105 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39105[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33982__auto__);

(statearr_39105[(1)] = (1));

return statearr_39105;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33982__auto____1 = (function (state_39081){
while(true){
var ret_value__33983__auto__ = (function (){try{while(true){
var result__33984__auto__ = switch__33981__auto__.call(null,state_39081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33984__auto__;
}
break;
}
}catch (e39106){if((e39106 instanceof Object)){
var ex__33985__auto__ = e39106;
var statearr_39107_39128 = state_39081;
(statearr_39107_39128[(5)] = ex__33985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39129 = state_39081;
state_39081 = G__39129;
continue;
} else {
return ret_value__33983__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33982__auto__ = function(state_39081){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33982__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33982__auto____1.call(this,state_39081);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33982__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33982__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33982__auto__;
})()
;})(switch__33981__auto__,c__34071__auto___39109,ch))
})();
var state__34073__auto__ = (function (){var statearr_39108 = f__34072__auto__.call(null);
(statearr_39108[(6)] = c__34071__auto___39109);

return statearr_39108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___39109,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39130_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39130_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_39132 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39132){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e39131){if((e39131 instanceof Error)){
var e = e39131;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39132], null));
} else {
var e = e39131;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_39132))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39133){
var map__39134 = p__39133;
var map__39134__$1 = ((((!((map__39134 == null)))?((((map__39134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39134.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39134):map__39134);
var opts = map__39134__$1;
var build_id = cljs.core.get.call(null,map__39134__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39134,map__39134__$1,opts,build_id){
return (function (p__39136){
var vec__39137 = p__39136;
var seq__39138 = cljs.core.seq.call(null,vec__39137);
var first__39139 = cljs.core.first.call(null,seq__39138);
var seq__39138__$1 = cljs.core.next.call(null,seq__39138);
var map__39140 = first__39139;
var map__39140__$1 = ((((!((map__39140 == null)))?((((map__39140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39140.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39140):map__39140);
var msg = map__39140__$1;
var msg_name = cljs.core.get.call(null,map__39140__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39138__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39137,seq__39138,first__39139,seq__39138__$1,map__39140,map__39140__$1,msg,msg_name,_,map__39134,map__39134__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39137,seq__39138,first__39139,seq__39138__$1,map__39140,map__39140__$1,msg,msg_name,_,map__39134,map__39134__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39134,map__39134__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39142){
var vec__39143 = p__39142;
var seq__39144 = cljs.core.seq.call(null,vec__39143);
var first__39145 = cljs.core.first.call(null,seq__39144);
var seq__39144__$1 = cljs.core.next.call(null,seq__39144);
var map__39146 = first__39145;
var map__39146__$1 = ((((!((map__39146 == null)))?((((map__39146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39146):map__39146);
var msg = map__39146__$1;
var msg_name = cljs.core.get.call(null,map__39146__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39144__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39148){
var map__39149 = p__39148;
var map__39149__$1 = ((((!((map__39149 == null)))?((((map__39149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39149.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39149):map__39149);
var on_compile_warning = cljs.core.get.call(null,map__39149__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39149__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39149,map__39149__$1,on_compile_warning,on_compile_fail){
return (function (p__39151){
var vec__39152 = p__39151;
var seq__39153 = cljs.core.seq.call(null,vec__39152);
var first__39154 = cljs.core.first.call(null,seq__39153);
var seq__39153__$1 = cljs.core.next.call(null,seq__39153);
var map__39155 = first__39154;
var map__39155__$1 = ((((!((map__39155 == null)))?((((map__39155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39155.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39155):map__39155);
var msg = map__39155__$1;
var msg_name = cljs.core.get.call(null,map__39155__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39153__$1;
var pred__39157 = cljs.core._EQ_;
var expr__39158 = msg_name;
if(cljs.core.truth_(pred__39157.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39158))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39157.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39158))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39149,map__39149__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__34071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto__,msg_hist,msg_names,msg){
return (function (){
var f__34072__auto__ = (function (){var switch__33981__auto__ = ((function (c__34071__auto__,msg_hist,msg_names,msg){
return (function (state_39247){
var state_val_39248 = (state_39247[(1)]);
if((state_val_39248 === (7))){
var inst_39167 = (state_39247[(2)]);
var state_39247__$1 = state_39247;
if(cljs.core.truth_(inst_39167)){
var statearr_39249_39296 = state_39247__$1;
(statearr_39249_39296[(1)] = (8));

} else {
var statearr_39250_39297 = state_39247__$1;
(statearr_39250_39297[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (20))){
var inst_39241 = (state_39247[(2)]);
var state_39247__$1 = state_39247;
var statearr_39251_39298 = state_39247__$1;
(statearr_39251_39298[(2)] = inst_39241);

(statearr_39251_39298[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (27))){
var inst_39237 = (state_39247[(2)]);
var state_39247__$1 = state_39247;
var statearr_39252_39299 = state_39247__$1;
(statearr_39252_39299[(2)] = inst_39237);

(statearr_39252_39299[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (1))){
var inst_39160 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39247__$1 = state_39247;
if(cljs.core.truth_(inst_39160)){
var statearr_39253_39300 = state_39247__$1;
(statearr_39253_39300[(1)] = (2));

} else {
var statearr_39254_39301 = state_39247__$1;
(statearr_39254_39301[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (24))){
var inst_39239 = (state_39247[(2)]);
var state_39247__$1 = state_39247;
var statearr_39255_39302 = state_39247__$1;
(statearr_39255_39302[(2)] = inst_39239);

(statearr_39255_39302[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (4))){
var inst_39245 = (state_39247[(2)]);
var state_39247__$1 = state_39247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39247__$1,inst_39245);
} else {
if((state_val_39248 === (15))){
var inst_39243 = (state_39247[(2)]);
var state_39247__$1 = state_39247;
var statearr_39256_39303 = state_39247__$1;
(statearr_39256_39303[(2)] = inst_39243);

(statearr_39256_39303[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (21))){
var inst_39196 = (state_39247[(2)]);
var inst_39197 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39198 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39197);
var state_39247__$1 = (function (){var statearr_39257 = state_39247;
(statearr_39257[(7)] = inst_39196);

return statearr_39257;
})();
var statearr_39258_39304 = state_39247__$1;
(statearr_39258_39304[(2)] = inst_39198);

(statearr_39258_39304[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (31))){
var inst_39226 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39247__$1 = state_39247;
if(cljs.core.truth_(inst_39226)){
var statearr_39259_39305 = state_39247__$1;
(statearr_39259_39305[(1)] = (34));

} else {
var statearr_39260_39306 = state_39247__$1;
(statearr_39260_39306[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (32))){
var inst_39235 = (state_39247[(2)]);
var state_39247__$1 = state_39247;
var statearr_39261_39307 = state_39247__$1;
(statearr_39261_39307[(2)] = inst_39235);

(statearr_39261_39307[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (33))){
var inst_39222 = (state_39247[(2)]);
var inst_39223 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39224 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39223);
var state_39247__$1 = (function (){var statearr_39262 = state_39247;
(statearr_39262[(8)] = inst_39222);

return statearr_39262;
})();
var statearr_39263_39308 = state_39247__$1;
(statearr_39263_39308[(2)] = inst_39224);

(statearr_39263_39308[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (13))){
var inst_39181 = figwheel.client.heads_up.clear.call(null);
var state_39247__$1 = state_39247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39247__$1,(16),inst_39181);
} else {
if((state_val_39248 === (22))){
var inst_39202 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39203 = figwheel.client.heads_up.append_warning_message.call(null,inst_39202);
var state_39247__$1 = state_39247;
var statearr_39264_39309 = state_39247__$1;
(statearr_39264_39309[(2)] = inst_39203);

(statearr_39264_39309[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (36))){
var inst_39233 = (state_39247[(2)]);
var state_39247__$1 = state_39247;
var statearr_39265_39310 = state_39247__$1;
(statearr_39265_39310[(2)] = inst_39233);

(statearr_39265_39310[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (29))){
var inst_39213 = (state_39247[(2)]);
var inst_39214 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39215 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39214);
var state_39247__$1 = (function (){var statearr_39266 = state_39247;
(statearr_39266[(9)] = inst_39213);

return statearr_39266;
})();
var statearr_39267_39311 = state_39247__$1;
(statearr_39267_39311[(2)] = inst_39215);

(statearr_39267_39311[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (6))){
var inst_39162 = (state_39247[(10)]);
var state_39247__$1 = state_39247;
var statearr_39268_39312 = state_39247__$1;
(statearr_39268_39312[(2)] = inst_39162);

(statearr_39268_39312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (28))){
var inst_39209 = (state_39247[(2)]);
var inst_39210 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39211 = figwheel.client.heads_up.display_warning.call(null,inst_39210);
var state_39247__$1 = (function (){var statearr_39269 = state_39247;
(statearr_39269[(11)] = inst_39209);

return statearr_39269;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39247__$1,(29),inst_39211);
} else {
if((state_val_39248 === (25))){
var inst_39207 = figwheel.client.heads_up.clear.call(null);
var state_39247__$1 = state_39247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39247__$1,(28),inst_39207);
} else {
if((state_val_39248 === (34))){
var inst_39228 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39247__$1 = state_39247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39247__$1,(37),inst_39228);
} else {
if((state_val_39248 === (17))){
var inst_39187 = (state_39247[(2)]);
var inst_39188 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39189 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39188);
var state_39247__$1 = (function (){var statearr_39270 = state_39247;
(statearr_39270[(12)] = inst_39187);

return statearr_39270;
})();
var statearr_39271_39313 = state_39247__$1;
(statearr_39271_39313[(2)] = inst_39189);

(statearr_39271_39313[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (3))){
var inst_39179 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39247__$1 = state_39247;
if(cljs.core.truth_(inst_39179)){
var statearr_39272_39314 = state_39247__$1;
(statearr_39272_39314[(1)] = (13));

} else {
var statearr_39273_39315 = state_39247__$1;
(statearr_39273_39315[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (12))){
var inst_39175 = (state_39247[(2)]);
var state_39247__$1 = state_39247;
var statearr_39274_39316 = state_39247__$1;
(statearr_39274_39316[(2)] = inst_39175);

(statearr_39274_39316[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (2))){
var inst_39162 = (state_39247[(10)]);
var inst_39162__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39247__$1 = (function (){var statearr_39275 = state_39247;
(statearr_39275[(10)] = inst_39162__$1);

return statearr_39275;
})();
if(cljs.core.truth_(inst_39162__$1)){
var statearr_39276_39317 = state_39247__$1;
(statearr_39276_39317[(1)] = (5));

} else {
var statearr_39277_39318 = state_39247__$1;
(statearr_39277_39318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (23))){
var inst_39205 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39247__$1 = state_39247;
if(cljs.core.truth_(inst_39205)){
var statearr_39278_39319 = state_39247__$1;
(statearr_39278_39319[(1)] = (25));

} else {
var statearr_39279_39320 = state_39247__$1;
(statearr_39279_39320[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (35))){
var state_39247__$1 = state_39247;
var statearr_39280_39321 = state_39247__$1;
(statearr_39280_39321[(2)] = null);

(statearr_39280_39321[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (19))){
var inst_39200 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39247__$1 = state_39247;
if(cljs.core.truth_(inst_39200)){
var statearr_39281_39322 = state_39247__$1;
(statearr_39281_39322[(1)] = (22));

} else {
var statearr_39282_39323 = state_39247__$1;
(statearr_39282_39323[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (11))){
var inst_39171 = (state_39247[(2)]);
var state_39247__$1 = state_39247;
var statearr_39283_39324 = state_39247__$1;
(statearr_39283_39324[(2)] = inst_39171);

(statearr_39283_39324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (9))){
var inst_39173 = figwheel.client.heads_up.clear.call(null);
var state_39247__$1 = state_39247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39247__$1,(12),inst_39173);
} else {
if((state_val_39248 === (5))){
var inst_39164 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39247__$1 = state_39247;
var statearr_39284_39325 = state_39247__$1;
(statearr_39284_39325[(2)] = inst_39164);

(statearr_39284_39325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (14))){
var inst_39191 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39247__$1 = state_39247;
if(cljs.core.truth_(inst_39191)){
var statearr_39285_39326 = state_39247__$1;
(statearr_39285_39326[(1)] = (18));

} else {
var statearr_39286_39327 = state_39247__$1;
(statearr_39286_39327[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (26))){
var inst_39217 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39247__$1 = state_39247;
if(cljs.core.truth_(inst_39217)){
var statearr_39287_39328 = state_39247__$1;
(statearr_39287_39328[(1)] = (30));

} else {
var statearr_39288_39329 = state_39247__$1;
(statearr_39288_39329[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (16))){
var inst_39183 = (state_39247[(2)]);
var inst_39184 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39185 = figwheel.client.heads_up.display_exception.call(null,inst_39184);
var state_39247__$1 = (function (){var statearr_39289 = state_39247;
(statearr_39289[(13)] = inst_39183);

return statearr_39289;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39247__$1,(17),inst_39185);
} else {
if((state_val_39248 === (30))){
var inst_39219 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39220 = figwheel.client.heads_up.display_warning.call(null,inst_39219);
var state_39247__$1 = state_39247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39247__$1,(33),inst_39220);
} else {
if((state_val_39248 === (10))){
var inst_39177 = (state_39247[(2)]);
var state_39247__$1 = state_39247;
var statearr_39290_39330 = state_39247__$1;
(statearr_39290_39330[(2)] = inst_39177);

(statearr_39290_39330[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (18))){
var inst_39193 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39194 = figwheel.client.heads_up.display_exception.call(null,inst_39193);
var state_39247__$1 = state_39247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39247__$1,(21),inst_39194);
} else {
if((state_val_39248 === (37))){
var inst_39230 = (state_39247[(2)]);
var state_39247__$1 = state_39247;
var statearr_39291_39331 = state_39247__$1;
(statearr_39291_39331[(2)] = inst_39230);

(statearr_39291_39331[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39248 === (8))){
var inst_39169 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39247__$1 = state_39247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39247__$1,(11),inst_39169);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34071__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33981__auto__,c__34071__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33982__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33982__auto____0 = (function (){
var statearr_39292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39292[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33982__auto__);

(statearr_39292[(1)] = (1));

return statearr_39292;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33982__auto____1 = (function (state_39247){
while(true){
var ret_value__33983__auto__ = (function (){try{while(true){
var result__33984__auto__ = switch__33981__auto__.call(null,state_39247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33984__auto__;
}
break;
}
}catch (e39293){if((e39293 instanceof Object)){
var ex__33985__auto__ = e39293;
var statearr_39294_39332 = state_39247;
(statearr_39294_39332[(5)] = ex__33985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39333 = state_39247;
state_39247 = G__39333;
continue;
} else {
return ret_value__33983__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33982__auto__ = function(state_39247){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33982__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33982__auto____1.call(this,state_39247);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33982__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33982__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33982__auto__;
})()
;})(switch__33981__auto__,c__34071__auto__,msg_hist,msg_names,msg))
})();
var state__34073__auto__ = (function (){var statearr_39295 = f__34072__auto__.call(null);
(statearr_39295[(6)] = c__34071__auto__);

return statearr_39295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto__,msg_hist,msg_names,msg))
);

return c__34071__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34071__auto___39362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___39362,ch){
return (function (){
var f__34072__auto__ = (function (){var switch__33981__auto__ = ((function (c__34071__auto___39362,ch){
return (function (state_39348){
var state_val_39349 = (state_39348[(1)]);
if((state_val_39349 === (1))){
var state_39348__$1 = state_39348;
var statearr_39350_39363 = state_39348__$1;
(statearr_39350_39363[(2)] = null);

(statearr_39350_39363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39349 === (2))){
var state_39348__$1 = state_39348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39348__$1,(4),ch);
} else {
if((state_val_39349 === (3))){
var inst_39346 = (state_39348[(2)]);
var state_39348__$1 = state_39348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39348__$1,inst_39346);
} else {
if((state_val_39349 === (4))){
var inst_39336 = (state_39348[(7)]);
var inst_39336__$1 = (state_39348[(2)]);
var state_39348__$1 = (function (){var statearr_39351 = state_39348;
(statearr_39351[(7)] = inst_39336__$1);

return statearr_39351;
})();
if(cljs.core.truth_(inst_39336__$1)){
var statearr_39352_39364 = state_39348__$1;
(statearr_39352_39364[(1)] = (5));

} else {
var statearr_39353_39365 = state_39348__$1;
(statearr_39353_39365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39349 === (5))){
var inst_39336 = (state_39348[(7)]);
var inst_39338 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39336);
var state_39348__$1 = state_39348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39348__$1,(8),inst_39338);
} else {
if((state_val_39349 === (6))){
var state_39348__$1 = state_39348;
var statearr_39354_39366 = state_39348__$1;
(statearr_39354_39366[(2)] = null);

(statearr_39354_39366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39349 === (7))){
var inst_39344 = (state_39348[(2)]);
var state_39348__$1 = state_39348;
var statearr_39355_39367 = state_39348__$1;
(statearr_39355_39367[(2)] = inst_39344);

(statearr_39355_39367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39349 === (8))){
var inst_39340 = (state_39348[(2)]);
var state_39348__$1 = (function (){var statearr_39356 = state_39348;
(statearr_39356[(8)] = inst_39340);

return statearr_39356;
})();
var statearr_39357_39368 = state_39348__$1;
(statearr_39357_39368[(2)] = null);

(statearr_39357_39368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__34071__auto___39362,ch))
;
return ((function (switch__33981__auto__,c__34071__auto___39362,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33982__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33982__auto____0 = (function (){
var statearr_39358 = [null,null,null,null,null,null,null,null,null];
(statearr_39358[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33982__auto__);

(statearr_39358[(1)] = (1));

return statearr_39358;
});
var figwheel$client$heads_up_plugin_$_state_machine__33982__auto____1 = (function (state_39348){
while(true){
var ret_value__33983__auto__ = (function (){try{while(true){
var result__33984__auto__ = switch__33981__auto__.call(null,state_39348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33984__auto__;
}
break;
}
}catch (e39359){if((e39359 instanceof Object)){
var ex__33985__auto__ = e39359;
var statearr_39360_39369 = state_39348;
(statearr_39360_39369[(5)] = ex__33985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39370 = state_39348;
state_39348 = G__39370;
continue;
} else {
return ret_value__33983__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33982__auto__ = function(state_39348){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33982__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33982__auto____1.call(this,state_39348);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33982__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33982__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33982__auto__;
})()
;})(switch__33981__auto__,c__34071__auto___39362,ch))
})();
var state__34073__auto__ = (function (){var statearr_39361 = f__34072__auto__.call(null);
(statearr_39361[(6)] = c__34071__auto___39362);

return statearr_39361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___39362,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto__){
return (function (){
var f__34072__auto__ = (function (){var switch__33981__auto__ = ((function (c__34071__auto__){
return (function (state_39376){
var state_val_39377 = (state_39376[(1)]);
if((state_val_39377 === (1))){
var inst_39371 = cljs.core.async.timeout.call(null,(3000));
var state_39376__$1 = state_39376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39376__$1,(2),inst_39371);
} else {
if((state_val_39377 === (2))){
var inst_39373 = (state_39376[(2)]);
var inst_39374 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39376__$1 = (function (){var statearr_39378 = state_39376;
(statearr_39378[(7)] = inst_39373);

return statearr_39378;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39376__$1,inst_39374);
} else {
return null;
}
}
});})(c__34071__auto__))
;
return ((function (switch__33981__auto__,c__34071__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33982__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33982__auto____0 = (function (){
var statearr_39379 = [null,null,null,null,null,null,null,null];
(statearr_39379[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33982__auto__);

(statearr_39379[(1)] = (1));

return statearr_39379;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33982__auto____1 = (function (state_39376){
while(true){
var ret_value__33983__auto__ = (function (){try{while(true){
var result__33984__auto__ = switch__33981__auto__.call(null,state_39376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33984__auto__;
}
break;
}
}catch (e39380){if((e39380 instanceof Object)){
var ex__33985__auto__ = e39380;
var statearr_39381_39383 = state_39376;
(statearr_39381_39383[(5)] = ex__33985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39384 = state_39376;
state_39376 = G__39384;
continue;
} else {
return ret_value__33983__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33982__auto__ = function(state_39376){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33982__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33982__auto____1.call(this,state_39376);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33982__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33982__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33982__auto__;
})()
;})(switch__33981__auto__,c__34071__auto__))
})();
var state__34073__auto__ = (function (){var statearr_39382 = f__34072__auto__.call(null);
(statearr_39382[(6)] = c__34071__auto__);

return statearr_39382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto__))
);

return c__34071__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__34072__auto__ = (function (){var switch__33981__auto__ = ((function (c__34071__auto__,figwheel_version,temp__5457__auto__){
return (function (state_39391){
var state_val_39392 = (state_39391[(1)]);
if((state_val_39392 === (1))){
var inst_39385 = cljs.core.async.timeout.call(null,(2000));
var state_39391__$1 = state_39391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39391__$1,(2),inst_39385);
} else {
if((state_val_39392 === (2))){
var inst_39387 = (state_39391[(2)]);
var inst_39388 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_39389 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39388);
var state_39391__$1 = (function (){var statearr_39393 = state_39391;
(statearr_39393[(7)] = inst_39387);

return statearr_39393;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39391__$1,inst_39389);
} else {
return null;
}
}
});})(c__34071__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__33981__auto__,c__34071__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33982__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33982__auto____0 = (function (){
var statearr_39394 = [null,null,null,null,null,null,null,null];
(statearr_39394[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33982__auto__);

(statearr_39394[(1)] = (1));

return statearr_39394;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33982__auto____1 = (function (state_39391){
while(true){
var ret_value__33983__auto__ = (function (){try{while(true){
var result__33984__auto__ = switch__33981__auto__.call(null,state_39391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33984__auto__;
}
break;
}
}catch (e39395){if((e39395 instanceof Object)){
var ex__33985__auto__ = e39395;
var statearr_39396_39398 = state_39391;
(statearr_39396_39398[(5)] = ex__33985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39399 = state_39391;
state_39391 = G__39399;
continue;
} else {
return ret_value__33983__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33982__auto__ = function(state_39391){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33982__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33982__auto____1.call(this,state_39391);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33982__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33982__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33982__auto__;
})()
;})(switch__33981__auto__,c__34071__auto__,figwheel_version,temp__5457__auto__))
})();
var state__34073__auto__ = (function (){var statearr_39397 = f__34072__auto__.call(null);
(statearr_39397[(6)] = c__34071__auto__);

return statearr_39397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto__,figwheel_version,temp__5457__auto__))
);

return c__34071__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39400){
var map__39401 = p__39400;
var map__39401__$1 = ((((!((map__39401 == null)))?((((map__39401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39401.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39401):map__39401);
var file = cljs.core.get.call(null,map__39401__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39401__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39401__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39403 = "";
var G__39403__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39403),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__39403);
var G__39403__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39403__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39403__$1);
if(cljs.core.truth_((function (){var and__30084__auto__ = line;
if(cljs.core.truth_(and__30084__auto__)){
return column;
} else {
return and__30084__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39403__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__39403__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39404){
var map__39405 = p__39404;
var map__39405__$1 = ((((!((map__39405 == null)))?((((map__39405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39405.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39405):map__39405);
var ed = map__39405__$1;
var formatted_exception = cljs.core.get.call(null,map__39405__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39405__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39405__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39407_39411 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39408_39412 = null;
var count__39409_39413 = (0);
var i__39410_39414 = (0);
while(true){
if((i__39410_39414 < count__39409_39413)){
var msg_39415 = cljs.core._nth.call(null,chunk__39408_39412,i__39410_39414);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39415);

var G__39416 = seq__39407_39411;
var G__39417 = chunk__39408_39412;
var G__39418 = count__39409_39413;
var G__39419 = (i__39410_39414 + (1));
seq__39407_39411 = G__39416;
chunk__39408_39412 = G__39417;
count__39409_39413 = G__39418;
i__39410_39414 = G__39419;
continue;
} else {
var temp__5457__auto___39420 = cljs.core.seq.call(null,seq__39407_39411);
if(temp__5457__auto___39420){
var seq__39407_39421__$1 = temp__5457__auto___39420;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39407_39421__$1)){
var c__31027__auto___39422 = cljs.core.chunk_first.call(null,seq__39407_39421__$1);
var G__39423 = cljs.core.chunk_rest.call(null,seq__39407_39421__$1);
var G__39424 = c__31027__auto___39422;
var G__39425 = cljs.core.count.call(null,c__31027__auto___39422);
var G__39426 = (0);
seq__39407_39411 = G__39423;
chunk__39408_39412 = G__39424;
count__39409_39413 = G__39425;
i__39410_39414 = G__39426;
continue;
} else {
var msg_39427 = cljs.core.first.call(null,seq__39407_39421__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39427);

var G__39428 = cljs.core.next.call(null,seq__39407_39421__$1);
var G__39429 = null;
var G__39430 = (0);
var G__39431 = (0);
seq__39407_39411 = G__39428;
chunk__39408_39412 = G__39429;
count__39409_39413 = G__39430;
i__39410_39414 = G__39431;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39432){
var map__39433 = p__39432;
var map__39433__$1 = ((((!((map__39433 == null)))?((((map__39433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39433.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39433):map__39433);
var w = map__39433__$1;
var message = cljs.core.get.call(null,map__39433__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__30084__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30084__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30084__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__39435 = cljs.core.seq.call(null,plugins);
var chunk__39436 = null;
var count__39437 = (0);
var i__39438 = (0);
while(true){
if((i__39438 < count__39437)){
var vec__39439 = cljs.core._nth.call(null,chunk__39436,i__39438);
var k = cljs.core.nth.call(null,vec__39439,(0),null);
var plugin = cljs.core.nth.call(null,vec__39439,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39445 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39435,chunk__39436,count__39437,i__39438,pl_39445,vec__39439,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39445.call(null,msg_hist);
});})(seq__39435,chunk__39436,count__39437,i__39438,pl_39445,vec__39439,k,plugin))
);
} else {
}

var G__39446 = seq__39435;
var G__39447 = chunk__39436;
var G__39448 = count__39437;
var G__39449 = (i__39438 + (1));
seq__39435 = G__39446;
chunk__39436 = G__39447;
count__39437 = G__39448;
i__39438 = G__39449;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__39435);
if(temp__5457__auto__){
var seq__39435__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39435__$1)){
var c__31027__auto__ = cljs.core.chunk_first.call(null,seq__39435__$1);
var G__39450 = cljs.core.chunk_rest.call(null,seq__39435__$1);
var G__39451 = c__31027__auto__;
var G__39452 = cljs.core.count.call(null,c__31027__auto__);
var G__39453 = (0);
seq__39435 = G__39450;
chunk__39436 = G__39451;
count__39437 = G__39452;
i__39438 = G__39453;
continue;
} else {
var vec__39442 = cljs.core.first.call(null,seq__39435__$1);
var k = cljs.core.nth.call(null,vec__39442,(0),null);
var plugin = cljs.core.nth.call(null,vec__39442,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39454 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39435,chunk__39436,count__39437,i__39438,pl_39454,vec__39442,k,plugin,seq__39435__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39454.call(null,msg_hist);
});})(seq__39435,chunk__39436,count__39437,i__39438,pl_39454,vec__39442,k,plugin,seq__39435__$1,temp__5457__auto__))
);
} else {
}

var G__39455 = cljs.core.next.call(null,seq__39435__$1);
var G__39456 = null;
var G__39457 = (0);
var G__39458 = (0);
seq__39435 = G__39455;
chunk__39436 = G__39456;
count__39437 = G__39457;
i__39438 = G__39458;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__39460 = arguments.length;
switch (G__39460) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__39461_39466 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39462_39467 = null;
var count__39463_39468 = (0);
var i__39464_39469 = (0);
while(true){
if((i__39464_39469 < count__39463_39468)){
var msg_39470 = cljs.core._nth.call(null,chunk__39462_39467,i__39464_39469);
figwheel.client.socket.handle_incoming_message.call(null,msg_39470);

var G__39471 = seq__39461_39466;
var G__39472 = chunk__39462_39467;
var G__39473 = count__39463_39468;
var G__39474 = (i__39464_39469 + (1));
seq__39461_39466 = G__39471;
chunk__39462_39467 = G__39472;
count__39463_39468 = G__39473;
i__39464_39469 = G__39474;
continue;
} else {
var temp__5457__auto___39475 = cljs.core.seq.call(null,seq__39461_39466);
if(temp__5457__auto___39475){
var seq__39461_39476__$1 = temp__5457__auto___39475;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39461_39476__$1)){
var c__31027__auto___39477 = cljs.core.chunk_first.call(null,seq__39461_39476__$1);
var G__39478 = cljs.core.chunk_rest.call(null,seq__39461_39476__$1);
var G__39479 = c__31027__auto___39477;
var G__39480 = cljs.core.count.call(null,c__31027__auto___39477);
var G__39481 = (0);
seq__39461_39466 = G__39478;
chunk__39462_39467 = G__39479;
count__39463_39468 = G__39480;
i__39464_39469 = G__39481;
continue;
} else {
var msg_39482 = cljs.core.first.call(null,seq__39461_39476__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39482);

var G__39483 = cljs.core.next.call(null,seq__39461_39476__$1);
var G__39484 = null;
var G__39485 = (0);
var G__39486 = (0);
seq__39461_39466 = G__39483;
chunk__39462_39467 = G__39484;
count__39463_39468 = G__39485;
i__39464_39469 = G__39486;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__31382__auto__ = [];
var len__31375__auto___39491 = arguments.length;
var i__31376__auto___39492 = (0);
while(true){
if((i__31376__auto___39492 < len__31375__auto___39491)){
args__31382__auto__.push((arguments[i__31376__auto___39492]));

var G__39493 = (i__31376__auto___39492 + (1));
i__31376__auto___39492 = G__39493;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39488){
var map__39489 = p__39488;
var map__39489__$1 = ((((!((map__39489 == null)))?((((map__39489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39489.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39489):map__39489);
var opts = map__39489__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39487){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39487));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39494){if((e39494 instanceof Error)){
var e = e39494;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39494;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__39495){
var map__39496 = p__39495;
var map__39496__$1 = ((((!((map__39496 == null)))?((((map__39496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39496.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39496):map__39496);
var msg_name = cljs.core.get.call(null,map__39496__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1512625078312
