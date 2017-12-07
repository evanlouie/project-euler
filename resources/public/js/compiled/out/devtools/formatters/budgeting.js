// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = ((typeof WeakSet !== 'undefined')?(new WeakSet()):cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.conj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__39741__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__39741__auto__["add"]).call(o__39741__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__39741__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__39741__auto__["delete"]).call(o__39741__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__39741__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__39741__auto__["has"]).call(o__39741__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
return true;
} else {
return cljs.core.some.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second.call(null,object_reference);
var _ = ((cljs.core.object_QMARK_.call(null,data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__42246 = data;
var target__39746__auto__ = G__42246;
if(cljs.core.truth_(target__39746__auto__)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["unable to locate object path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(null)," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42246)].join('')),"\n","target__39746__auto__"].join('')));
}

(target__39746__auto__["config"] = devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__42246;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_42251 = (depth_budget - (1));
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_42251);
} else {
var seq__42247_42252 = cljs.core.seq.call(null,json_ml);
var chunk__42248_42253 = null;
var count__42249_42254 = (0);
var i__42250_42255 = (0);
while(true){
if((i__42250_42255 < count__42249_42254)){
var item_42256 = cljs.core._nth.call(null,chunk__42248_42253,i__42250_42255);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_42256,new_depth_budget_42251);

var G__42257 = seq__42247_42252;
var G__42258 = chunk__42248_42253;
var G__42259 = count__42249_42254;
var G__42260 = (i__42250_42255 + (1));
seq__42247_42252 = G__42257;
chunk__42248_42253 = G__42258;
count__42249_42254 = G__42259;
i__42250_42255 = G__42260;
continue;
} else {
var temp__5457__auto___42261 = cljs.core.seq.call(null,seq__42247_42252);
if(temp__5457__auto___42261){
var seq__42247_42262__$1 = temp__5457__auto___42261;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42247_42262__$1)){
var c__31027__auto___42263 = cljs.core.chunk_first.call(null,seq__42247_42262__$1);
var G__42264 = cljs.core.chunk_rest.call(null,seq__42247_42262__$1);
var G__42265 = c__31027__auto___42263;
var G__42266 = cljs.core.count.call(null,c__31027__auto___42263);
var G__42267 = (0);
seq__42247_42252 = G__42264;
chunk__42248_42253 = G__42265;
count__42249_42254 = G__42266;
i__42250_42255 = G__42267;
continue;
} else {
var item_42268 = cljs.core.first.call(null,seq__42247_42262__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_42268,new_depth_budget_42251);

var G__42269 = cljs.core.next.call(null,seq__42247_42262__$1);
var G__42270 = null;
var G__42271 = (0);
var G__42272 = (0);
seq__42247_42252 = G__42269;
chunk__42248_42253 = G__42270;
count__42249_42254 = G__42271;
i__42250_42255 = G__42272;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_.call(null,value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_.call(null,value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5455__auto__ = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5455__auto__)){
var initial_hierarchy_depth_budget = temp__5455__auto__;
var remaining_depth_budget = (function (){var or__30096__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth.call(null,json_ml);
var final_QMARK_ = cljs.core.not.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_.call(null,json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_.call(null,json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_expander_GT_.call(null,value));
devtools.formatters.budgeting.add_over_budget_value_BANG_.call(null,value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=budgeting.js.map?rel=1512625081864
