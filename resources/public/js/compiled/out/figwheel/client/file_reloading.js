// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__30096__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30096__auto__){
return or__30096__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__30096__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
var or__30096__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__30096__auto____$1)){
return or__30096__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37261_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37261_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__37262 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37263 = null;
var count__37264 = (0);
var i__37265 = (0);
while(true){
if((i__37265 < count__37264)){
var n = cljs.core._nth.call(null,chunk__37263,i__37265);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37266 = seq__37262;
var G__37267 = chunk__37263;
var G__37268 = count__37264;
var G__37269 = (i__37265 + (1));
seq__37262 = G__37266;
chunk__37263 = G__37267;
count__37264 = G__37268;
i__37265 = G__37269;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37262);
if(temp__5457__auto__){
var seq__37262__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37262__$1)){
var c__31027__auto__ = cljs.core.chunk_first.call(null,seq__37262__$1);
var G__37270 = cljs.core.chunk_rest.call(null,seq__37262__$1);
var G__37271 = c__31027__auto__;
var G__37272 = cljs.core.count.call(null,c__31027__auto__);
var G__37273 = (0);
seq__37262 = G__37270;
chunk__37263 = G__37271;
count__37264 = G__37272;
i__37265 = G__37273;
continue;
} else {
var n = cljs.core.first.call(null,seq__37262__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37274 = cljs.core.next.call(null,seq__37262__$1);
var G__37275 = null;
var G__37276 = (0);
var G__37277 = (0);
seq__37262 = G__37274;
chunk__37263 = G__37275;
count__37264 = G__37276;
i__37265 = G__37277;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__37278){
var vec__37279 = p__37278;
var _ = cljs.core.nth.call(null,vec__37279,(0),null);
var v = cljs.core.nth.call(null,vec__37279,(1),null);
var and__30084__auto__ = v;
if(cljs.core.truth_(and__30084__auto__)){
return v.call(null,dep);
} else {
return and__30084__auto__;
}
}),cljs.core.filter.call(null,(function (p__37282){
var vec__37283 = p__37282;
var k = cljs.core.nth.call(null,vec__37283,(0),null);
var v = cljs.core.nth.call(null,vec__37283,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__37295_37303 = cljs.core.seq.call(null,deps);
var chunk__37296_37304 = null;
var count__37297_37305 = (0);
var i__37298_37306 = (0);
while(true){
if((i__37298_37306 < count__37297_37305)){
var dep_37307 = cljs.core._nth.call(null,chunk__37296_37304,i__37298_37306);
if(cljs.core.truth_((function (){var and__30084__auto__ = dep_37307;
if(cljs.core.truth_(and__30084__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37307));
} else {
return and__30084__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37307,(depth + (1)),state);
} else {
}

var G__37308 = seq__37295_37303;
var G__37309 = chunk__37296_37304;
var G__37310 = count__37297_37305;
var G__37311 = (i__37298_37306 + (1));
seq__37295_37303 = G__37308;
chunk__37296_37304 = G__37309;
count__37297_37305 = G__37310;
i__37298_37306 = G__37311;
continue;
} else {
var temp__5457__auto___37312 = cljs.core.seq.call(null,seq__37295_37303);
if(temp__5457__auto___37312){
var seq__37295_37313__$1 = temp__5457__auto___37312;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37295_37313__$1)){
var c__31027__auto___37314 = cljs.core.chunk_first.call(null,seq__37295_37313__$1);
var G__37315 = cljs.core.chunk_rest.call(null,seq__37295_37313__$1);
var G__37316 = c__31027__auto___37314;
var G__37317 = cljs.core.count.call(null,c__31027__auto___37314);
var G__37318 = (0);
seq__37295_37303 = G__37315;
chunk__37296_37304 = G__37316;
count__37297_37305 = G__37317;
i__37298_37306 = G__37318;
continue;
} else {
var dep_37319 = cljs.core.first.call(null,seq__37295_37313__$1);
if(cljs.core.truth_((function (){var and__30084__auto__ = dep_37319;
if(cljs.core.truth_(and__30084__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37319));
} else {
return and__30084__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37319,(depth + (1)),state);
} else {
}

var G__37320 = cljs.core.next.call(null,seq__37295_37313__$1);
var G__37321 = null;
var G__37322 = (0);
var G__37323 = (0);
seq__37295_37303 = G__37320;
chunk__37296_37304 = G__37321;
count__37297_37305 = G__37322;
i__37298_37306 = G__37323;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37299){
var vec__37300 = p__37299;
var seq__37301 = cljs.core.seq.call(null,vec__37300);
var first__37302 = cljs.core.first.call(null,seq__37301);
var seq__37301__$1 = cljs.core.next.call(null,seq__37301);
var x = first__37302;
var xs = seq__37301__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37300,seq__37301,first__37302,seq__37301__$1,x,xs,get_deps__$1){
return (function (p1__37286_SHARP_){
return clojure.set.difference.call(null,p1__37286_SHARP_,x);
});})(vec__37300,seq__37301,first__37302,seq__37301__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__37324 = cljs.core.seq.call(null,provides);
var chunk__37325 = null;
var count__37326 = (0);
var i__37327 = (0);
while(true){
if((i__37327 < count__37326)){
var prov = cljs.core._nth.call(null,chunk__37325,i__37327);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37328_37336 = cljs.core.seq.call(null,requires);
var chunk__37329_37337 = null;
var count__37330_37338 = (0);
var i__37331_37339 = (0);
while(true){
if((i__37331_37339 < count__37330_37338)){
var req_37340 = cljs.core._nth.call(null,chunk__37329_37337,i__37331_37339);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37340,prov);

var G__37341 = seq__37328_37336;
var G__37342 = chunk__37329_37337;
var G__37343 = count__37330_37338;
var G__37344 = (i__37331_37339 + (1));
seq__37328_37336 = G__37341;
chunk__37329_37337 = G__37342;
count__37330_37338 = G__37343;
i__37331_37339 = G__37344;
continue;
} else {
var temp__5457__auto___37345 = cljs.core.seq.call(null,seq__37328_37336);
if(temp__5457__auto___37345){
var seq__37328_37346__$1 = temp__5457__auto___37345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37328_37346__$1)){
var c__31027__auto___37347 = cljs.core.chunk_first.call(null,seq__37328_37346__$1);
var G__37348 = cljs.core.chunk_rest.call(null,seq__37328_37346__$1);
var G__37349 = c__31027__auto___37347;
var G__37350 = cljs.core.count.call(null,c__31027__auto___37347);
var G__37351 = (0);
seq__37328_37336 = G__37348;
chunk__37329_37337 = G__37349;
count__37330_37338 = G__37350;
i__37331_37339 = G__37351;
continue;
} else {
var req_37352 = cljs.core.first.call(null,seq__37328_37346__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37352,prov);

var G__37353 = cljs.core.next.call(null,seq__37328_37346__$1);
var G__37354 = null;
var G__37355 = (0);
var G__37356 = (0);
seq__37328_37336 = G__37353;
chunk__37329_37337 = G__37354;
count__37330_37338 = G__37355;
i__37331_37339 = G__37356;
continue;
}
} else {
}
}
break;
}

var G__37357 = seq__37324;
var G__37358 = chunk__37325;
var G__37359 = count__37326;
var G__37360 = (i__37327 + (1));
seq__37324 = G__37357;
chunk__37325 = G__37358;
count__37326 = G__37359;
i__37327 = G__37360;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37324);
if(temp__5457__auto__){
var seq__37324__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37324__$1)){
var c__31027__auto__ = cljs.core.chunk_first.call(null,seq__37324__$1);
var G__37361 = cljs.core.chunk_rest.call(null,seq__37324__$1);
var G__37362 = c__31027__auto__;
var G__37363 = cljs.core.count.call(null,c__31027__auto__);
var G__37364 = (0);
seq__37324 = G__37361;
chunk__37325 = G__37362;
count__37326 = G__37363;
i__37327 = G__37364;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37324__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37332_37365 = cljs.core.seq.call(null,requires);
var chunk__37333_37366 = null;
var count__37334_37367 = (0);
var i__37335_37368 = (0);
while(true){
if((i__37335_37368 < count__37334_37367)){
var req_37369 = cljs.core._nth.call(null,chunk__37333_37366,i__37335_37368);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37369,prov);

var G__37370 = seq__37332_37365;
var G__37371 = chunk__37333_37366;
var G__37372 = count__37334_37367;
var G__37373 = (i__37335_37368 + (1));
seq__37332_37365 = G__37370;
chunk__37333_37366 = G__37371;
count__37334_37367 = G__37372;
i__37335_37368 = G__37373;
continue;
} else {
var temp__5457__auto___37374__$1 = cljs.core.seq.call(null,seq__37332_37365);
if(temp__5457__auto___37374__$1){
var seq__37332_37375__$1 = temp__5457__auto___37374__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37332_37375__$1)){
var c__31027__auto___37376 = cljs.core.chunk_first.call(null,seq__37332_37375__$1);
var G__37377 = cljs.core.chunk_rest.call(null,seq__37332_37375__$1);
var G__37378 = c__31027__auto___37376;
var G__37379 = cljs.core.count.call(null,c__31027__auto___37376);
var G__37380 = (0);
seq__37332_37365 = G__37377;
chunk__37333_37366 = G__37378;
count__37334_37367 = G__37379;
i__37335_37368 = G__37380;
continue;
} else {
var req_37381 = cljs.core.first.call(null,seq__37332_37375__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37381,prov);

var G__37382 = cljs.core.next.call(null,seq__37332_37375__$1);
var G__37383 = null;
var G__37384 = (0);
var G__37385 = (0);
seq__37332_37365 = G__37382;
chunk__37333_37366 = G__37383;
count__37334_37367 = G__37384;
i__37335_37368 = G__37385;
continue;
}
} else {
}
}
break;
}

var G__37386 = cljs.core.next.call(null,seq__37324__$1);
var G__37387 = null;
var G__37388 = (0);
var G__37389 = (0);
seq__37324 = G__37386;
chunk__37325 = G__37387;
count__37326 = G__37388;
i__37327 = G__37389;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__37390_37394 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37391_37395 = null;
var count__37392_37396 = (0);
var i__37393_37397 = (0);
while(true){
if((i__37393_37397 < count__37392_37396)){
var ns_37398 = cljs.core._nth.call(null,chunk__37391_37395,i__37393_37397);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37398);

var G__37399 = seq__37390_37394;
var G__37400 = chunk__37391_37395;
var G__37401 = count__37392_37396;
var G__37402 = (i__37393_37397 + (1));
seq__37390_37394 = G__37399;
chunk__37391_37395 = G__37400;
count__37392_37396 = G__37401;
i__37393_37397 = G__37402;
continue;
} else {
var temp__5457__auto___37403 = cljs.core.seq.call(null,seq__37390_37394);
if(temp__5457__auto___37403){
var seq__37390_37404__$1 = temp__5457__auto___37403;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37390_37404__$1)){
var c__31027__auto___37405 = cljs.core.chunk_first.call(null,seq__37390_37404__$1);
var G__37406 = cljs.core.chunk_rest.call(null,seq__37390_37404__$1);
var G__37407 = c__31027__auto___37405;
var G__37408 = cljs.core.count.call(null,c__31027__auto___37405);
var G__37409 = (0);
seq__37390_37394 = G__37406;
chunk__37391_37395 = G__37407;
count__37392_37396 = G__37408;
i__37393_37397 = G__37409;
continue;
} else {
var ns_37410 = cljs.core.first.call(null,seq__37390_37404__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37410);

var G__37411 = cljs.core.next.call(null,seq__37390_37404__$1);
var G__37412 = null;
var G__37413 = (0);
var G__37414 = (0);
seq__37390_37394 = G__37411;
chunk__37391_37395 = G__37412;
count__37392_37396 = G__37413;
i__37393_37397 = G__37414;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__30096__auto__ = goog.require__;
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__37415__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37415 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37416__i = 0, G__37416__a = new Array(arguments.length -  0);
while (G__37416__i < G__37416__a.length) {G__37416__a[G__37416__i] = arguments[G__37416__i + 0]; ++G__37416__i;}
  args = new cljs.core.IndexedSeq(G__37416__a,0,null);
} 
return G__37415__delegate.call(this,args);};
G__37415.cljs$lang$maxFixedArity = 0;
G__37415.cljs$lang$applyTo = (function (arglist__37417){
var args = cljs.core.seq(arglist__37417);
return G__37415__delegate(args);
});
G__37415.cljs$core$IFn$_invoke$arity$variadic = G__37415__delegate;
return G__37415;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37418_SHARP_,p2__37419_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37418_SHARP_)].join('')),p2__37419_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37420_SHARP_,p2__37421_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37420_SHARP_)].join(''),p2__37421_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37422 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37422.addCallback(((function (G__37422){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37422))
);

G__37422.addErrback(((function (G__37422){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37422))
);

return G__37422;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37423){if((e37423 instanceof Error)){
var e = e37423;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37423;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37424){if((e37424 instanceof Error)){
var e = e37424;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37424;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37425 = cljs.core._EQ_;
var expr__37426 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37425.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37426))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__37425.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37426))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__37425.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37426))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__37425,expr__37426){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37425,expr__37426))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37428,callback){
var map__37429 = p__37428;
var map__37429__$1 = ((((!((map__37429 == null)))?((((map__37429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37429.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37429):map__37429);
var file_msg = map__37429__$1;
var request_url = cljs.core.get.call(null,map__37429__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__30096__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__37429,map__37429__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37429,map__37429__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__34071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto__){
return (function (){
var f__34072__auto__ = (function (){var switch__33981__auto__ = ((function (c__34071__auto__){
return (function (state_37469){
var state_val_37470 = (state_37469[(1)]);
if((state_val_37470 === (7))){
var inst_37465 = (state_37469[(2)]);
var state_37469__$1 = state_37469;
var statearr_37471_37498 = state_37469__$1;
(statearr_37471_37498[(2)] = inst_37465);

(statearr_37471_37498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37470 === (1))){
var state_37469__$1 = state_37469;
var statearr_37472_37499 = state_37469__$1;
(statearr_37472_37499[(2)] = null);

(statearr_37472_37499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37470 === (4))){
var inst_37433 = (state_37469[(7)]);
var inst_37433__$1 = (state_37469[(2)]);
var state_37469__$1 = (function (){var statearr_37473 = state_37469;
(statearr_37473[(7)] = inst_37433__$1);

return statearr_37473;
})();
if(cljs.core.truth_(inst_37433__$1)){
var statearr_37474_37500 = state_37469__$1;
(statearr_37474_37500[(1)] = (5));

} else {
var statearr_37475_37501 = state_37469__$1;
(statearr_37475_37501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37470 === (15))){
var inst_37450 = (state_37469[(8)]);
var inst_37447 = (state_37469[(9)]);
var inst_37452 = inst_37450.call(null,inst_37447);
var state_37469__$1 = state_37469;
var statearr_37476_37502 = state_37469__$1;
(statearr_37476_37502[(2)] = inst_37452);

(statearr_37476_37502[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37470 === (13))){
var inst_37459 = (state_37469[(2)]);
var state_37469__$1 = state_37469;
var statearr_37477_37503 = state_37469__$1;
(statearr_37477_37503[(2)] = inst_37459);

(statearr_37477_37503[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37470 === (6))){
var state_37469__$1 = state_37469;
var statearr_37478_37504 = state_37469__$1;
(statearr_37478_37504[(2)] = null);

(statearr_37478_37504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37470 === (17))){
var inst_37456 = (state_37469[(2)]);
var state_37469__$1 = state_37469;
var statearr_37479_37505 = state_37469__$1;
(statearr_37479_37505[(2)] = inst_37456);

(statearr_37479_37505[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37470 === (3))){
var inst_37467 = (state_37469[(2)]);
var state_37469__$1 = state_37469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37469__$1,inst_37467);
} else {
if((state_val_37470 === (12))){
var state_37469__$1 = state_37469;
var statearr_37480_37506 = state_37469__$1;
(statearr_37480_37506[(2)] = null);

(statearr_37480_37506[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37470 === (2))){
var state_37469__$1 = state_37469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37469__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37470 === (11))){
var inst_37438 = (state_37469[(10)]);
var inst_37445 = figwheel.client.file_reloading.blocking_load.call(null,inst_37438);
var state_37469__$1 = state_37469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37469__$1,(14),inst_37445);
} else {
if((state_val_37470 === (9))){
var inst_37438 = (state_37469[(10)]);
var state_37469__$1 = state_37469;
if(cljs.core.truth_(inst_37438)){
var statearr_37481_37507 = state_37469__$1;
(statearr_37481_37507[(1)] = (11));

} else {
var statearr_37482_37508 = state_37469__$1;
(statearr_37482_37508[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37470 === (5))){
var inst_37439 = (state_37469[(11)]);
var inst_37433 = (state_37469[(7)]);
var inst_37438 = cljs.core.nth.call(null,inst_37433,(0),null);
var inst_37439__$1 = cljs.core.nth.call(null,inst_37433,(1),null);
var state_37469__$1 = (function (){var statearr_37483 = state_37469;
(statearr_37483[(11)] = inst_37439__$1);

(statearr_37483[(10)] = inst_37438);

return statearr_37483;
})();
if(cljs.core.truth_(inst_37439__$1)){
var statearr_37484_37509 = state_37469__$1;
(statearr_37484_37509[(1)] = (8));

} else {
var statearr_37485_37510 = state_37469__$1;
(statearr_37485_37510[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37470 === (14))){
var inst_37450 = (state_37469[(8)]);
var inst_37438 = (state_37469[(10)]);
var inst_37447 = (state_37469[(2)]);
var inst_37448 = console.log("Loading!",inst_37438);
var inst_37449 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37450__$1 = cljs.core.get.call(null,inst_37449,inst_37438);
var state_37469__$1 = (function (){var statearr_37486 = state_37469;
(statearr_37486[(8)] = inst_37450__$1);

(statearr_37486[(9)] = inst_37447);

(statearr_37486[(12)] = inst_37448);

return statearr_37486;
})();
if(cljs.core.truth_(inst_37450__$1)){
var statearr_37487_37511 = state_37469__$1;
(statearr_37487_37511[(1)] = (15));

} else {
var statearr_37488_37512 = state_37469__$1;
(statearr_37488_37512[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37470 === (16))){
var inst_37447 = (state_37469[(9)]);
var inst_37454 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37447);
var state_37469__$1 = state_37469;
var statearr_37489_37513 = state_37469__$1;
(statearr_37489_37513[(2)] = inst_37454);

(statearr_37489_37513[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37470 === (10))){
var inst_37461 = (state_37469[(2)]);
var state_37469__$1 = (function (){var statearr_37490 = state_37469;
(statearr_37490[(13)] = inst_37461);

return statearr_37490;
})();
var statearr_37491_37514 = state_37469__$1;
(statearr_37491_37514[(2)] = null);

(statearr_37491_37514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37470 === (8))){
var inst_37439 = (state_37469[(11)]);
var inst_37441 = console.log("Evaling!",inst_37439);
var inst_37442 = eval(inst_37439);
var state_37469__$1 = (function (){var statearr_37492 = state_37469;
(statearr_37492[(14)] = inst_37441);

return statearr_37492;
})();
var statearr_37493_37515 = state_37469__$1;
(statearr_37493_37515[(2)] = inst_37442);

(statearr_37493_37515[(1)] = (10));


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
});})(c__34071__auto__))
;
return ((function (switch__33981__auto__,c__34071__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33982__auto__ = null;
var figwheel$client$file_reloading$state_machine__33982__auto____0 = (function (){
var statearr_37494 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37494[(0)] = figwheel$client$file_reloading$state_machine__33982__auto__);

(statearr_37494[(1)] = (1));

return statearr_37494;
});
var figwheel$client$file_reloading$state_machine__33982__auto____1 = (function (state_37469){
while(true){
var ret_value__33983__auto__ = (function (){try{while(true){
var result__33984__auto__ = switch__33981__auto__.call(null,state_37469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33984__auto__;
}
break;
}
}catch (e37495){if((e37495 instanceof Object)){
var ex__33985__auto__ = e37495;
var statearr_37496_37516 = state_37469;
(statearr_37496_37516[(5)] = ex__33985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37517 = state_37469;
state_37469 = G__37517;
continue;
} else {
return ret_value__33983__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33982__auto__ = function(state_37469){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33982__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33982__auto____1.call(this,state_37469);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33982__auto____0;
figwheel$client$file_reloading$state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33982__auto____1;
return figwheel$client$file_reloading$state_machine__33982__auto__;
})()
;})(switch__33981__auto__,c__34071__auto__))
})();
var state__34073__auto__ = (function (){var statearr_37497 = f__34072__auto__.call(null);
(statearr_37497[(6)] = c__34071__auto__);

return statearr_37497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto__))
);

return c__34071__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__37519 = arguments.length;
switch (G__37519) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37521,callback){
var map__37522 = p__37521;
var map__37522__$1 = ((((!((map__37522 == null)))?((((map__37522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37522):map__37522);
var file_msg = map__37522__$1;
var namespace = cljs.core.get.call(null,map__37522__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37522,map__37522__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37522,map__37522__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37524){
var map__37525 = p__37524;
var map__37525__$1 = ((((!((map__37525 == null)))?((((map__37525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37525.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37525):map__37525);
var file_msg = map__37525__$1;
var namespace = cljs.core.get.call(null,map__37525__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37527){
var map__37528 = p__37527;
var map__37528__$1 = ((((!((map__37528 == null)))?((((map__37528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37528.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37528):map__37528);
var file_msg = map__37528__$1;
var namespace = cljs.core.get.call(null,map__37528__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30084__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__30084__auto__){
var or__30096__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
var or__30096__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30096__auto____$1)){
return or__30096__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__30084__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37530,callback){
var map__37531 = p__37530;
var map__37531__$1 = ((((!((map__37531 == null)))?((((map__37531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37531):map__37531);
var file_msg = map__37531__$1;
var request_url = cljs.core.get.call(null,map__37531__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37531__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__34071__auto___37581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___37581,out){
return (function (){
var f__34072__auto__ = (function (){var switch__33981__auto__ = ((function (c__34071__auto___37581,out){
return (function (state_37566){
var state_val_37567 = (state_37566[(1)]);
if((state_val_37567 === (1))){
var inst_37540 = cljs.core.seq.call(null,files);
var inst_37541 = cljs.core.first.call(null,inst_37540);
var inst_37542 = cljs.core.next.call(null,inst_37540);
var inst_37543 = files;
var state_37566__$1 = (function (){var statearr_37568 = state_37566;
(statearr_37568[(7)] = inst_37542);

(statearr_37568[(8)] = inst_37541);

(statearr_37568[(9)] = inst_37543);

return statearr_37568;
})();
var statearr_37569_37582 = state_37566__$1;
(statearr_37569_37582[(2)] = null);

(statearr_37569_37582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37567 === (2))){
var inst_37549 = (state_37566[(10)]);
var inst_37543 = (state_37566[(9)]);
var inst_37548 = cljs.core.seq.call(null,inst_37543);
var inst_37549__$1 = cljs.core.first.call(null,inst_37548);
var inst_37550 = cljs.core.next.call(null,inst_37548);
var inst_37551 = (inst_37549__$1 == null);
var inst_37552 = cljs.core.not.call(null,inst_37551);
var state_37566__$1 = (function (){var statearr_37570 = state_37566;
(statearr_37570[(10)] = inst_37549__$1);

(statearr_37570[(11)] = inst_37550);

return statearr_37570;
})();
if(inst_37552){
var statearr_37571_37583 = state_37566__$1;
(statearr_37571_37583[(1)] = (4));

} else {
var statearr_37572_37584 = state_37566__$1;
(statearr_37572_37584[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37567 === (3))){
var inst_37564 = (state_37566[(2)]);
var state_37566__$1 = state_37566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37566__$1,inst_37564);
} else {
if((state_val_37567 === (4))){
var inst_37549 = (state_37566[(10)]);
var inst_37554 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37549);
var state_37566__$1 = state_37566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37566__$1,(7),inst_37554);
} else {
if((state_val_37567 === (5))){
var inst_37560 = cljs.core.async.close_BANG_.call(null,out);
var state_37566__$1 = state_37566;
var statearr_37573_37585 = state_37566__$1;
(statearr_37573_37585[(2)] = inst_37560);

(statearr_37573_37585[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37567 === (6))){
var inst_37562 = (state_37566[(2)]);
var state_37566__$1 = state_37566;
var statearr_37574_37586 = state_37566__$1;
(statearr_37574_37586[(2)] = inst_37562);

(statearr_37574_37586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37567 === (7))){
var inst_37550 = (state_37566[(11)]);
var inst_37556 = (state_37566[(2)]);
var inst_37557 = cljs.core.async.put_BANG_.call(null,out,inst_37556);
var inst_37543 = inst_37550;
var state_37566__$1 = (function (){var statearr_37575 = state_37566;
(statearr_37575[(12)] = inst_37557);

(statearr_37575[(9)] = inst_37543);

return statearr_37575;
})();
var statearr_37576_37587 = state_37566__$1;
(statearr_37576_37587[(2)] = null);

(statearr_37576_37587[(1)] = (2));


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
});})(c__34071__auto___37581,out))
;
return ((function (switch__33981__auto__,c__34071__auto___37581,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33982__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33982__auto____0 = (function (){
var statearr_37577 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37577[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33982__auto__);

(statearr_37577[(1)] = (1));

return statearr_37577;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33982__auto____1 = (function (state_37566){
while(true){
var ret_value__33983__auto__ = (function (){try{while(true){
var result__33984__auto__ = switch__33981__auto__.call(null,state_37566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33984__auto__;
}
break;
}
}catch (e37578){if((e37578 instanceof Object)){
var ex__33985__auto__ = e37578;
var statearr_37579_37588 = state_37566;
(statearr_37579_37588[(5)] = ex__33985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37589 = state_37566;
state_37566 = G__37589;
continue;
} else {
return ret_value__33983__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33982__auto__ = function(state_37566){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33982__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33982__auto____1.call(this,state_37566);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33982__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33982__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33982__auto__;
})()
;})(switch__33981__auto__,c__34071__auto___37581,out))
})();
var state__34073__auto__ = (function (){var statearr_37580 = f__34072__auto__.call(null);
(statearr_37580[(6)] = c__34071__auto___37581);

return statearr_37580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___37581,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37590,opts){
var map__37591 = p__37590;
var map__37591__$1 = ((((!((map__37591 == null)))?((((map__37591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37591.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37591):map__37591);
var eval_body = cljs.core.get.call(null,map__37591__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37591__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30084__auto__ = eval_body;
if(cljs.core.truth_(and__30084__auto__)){
return typeof eval_body === 'string';
} else {
return and__30084__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37593){var e = e37593;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__37594_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37594_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__37595){
var vec__37596 = p__37595;
var k = cljs.core.nth.call(null,vec__37596,(0),null);
var v = cljs.core.nth.call(null,vec__37596,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37599){
var vec__37600 = p__37599;
var k = cljs.core.nth.call(null,vec__37600,(0),null);
var v = cljs.core.nth.call(null,vec__37600,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37606,p__37607){
var map__37608 = p__37606;
var map__37608__$1 = ((((!((map__37608 == null)))?((((map__37608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37608.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37608):map__37608);
var opts = map__37608__$1;
var before_jsload = cljs.core.get.call(null,map__37608__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37608__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37608__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37609 = p__37607;
var map__37609__$1 = ((((!((map__37609 == null)))?((((map__37609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37609.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37609):map__37609);
var msg = map__37609__$1;
var files = cljs.core.get.call(null,map__37609__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37609__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37609__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto__,map__37608,map__37608__$1,opts,before_jsload,on_jsload,reload_dependents,map__37609,map__37609__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__34072__auto__ = (function (){var switch__33981__auto__ = ((function (c__34071__auto__,map__37608,map__37608__$1,opts,before_jsload,on_jsload,reload_dependents,map__37609,map__37609__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37763){
var state_val_37764 = (state_37763[(1)]);
if((state_val_37764 === (7))){
var inst_37623 = (state_37763[(7)]);
var inst_37625 = (state_37763[(8)]);
var inst_37626 = (state_37763[(9)]);
var inst_37624 = (state_37763[(10)]);
var inst_37631 = cljs.core._nth.call(null,inst_37624,inst_37626);
var inst_37632 = figwheel.client.file_reloading.eval_body.call(null,inst_37631,opts);
var inst_37633 = (inst_37626 + (1));
var tmp37765 = inst_37623;
var tmp37766 = inst_37625;
var tmp37767 = inst_37624;
var inst_37623__$1 = tmp37765;
var inst_37624__$1 = tmp37767;
var inst_37625__$1 = tmp37766;
var inst_37626__$1 = inst_37633;
var state_37763__$1 = (function (){var statearr_37768 = state_37763;
(statearr_37768[(7)] = inst_37623__$1);

(statearr_37768[(8)] = inst_37625__$1);

(statearr_37768[(9)] = inst_37626__$1);

(statearr_37768[(10)] = inst_37624__$1);

(statearr_37768[(11)] = inst_37632);

return statearr_37768;
})();
var statearr_37769_37852 = state_37763__$1;
(statearr_37769_37852[(2)] = null);

(statearr_37769_37852[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (20))){
var inst_37666 = (state_37763[(12)]);
var inst_37674 = figwheel.client.file_reloading.sort_files.call(null,inst_37666);
var state_37763__$1 = state_37763;
var statearr_37770_37853 = state_37763__$1;
(statearr_37770_37853[(2)] = inst_37674);

(statearr_37770_37853[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (27))){
var state_37763__$1 = state_37763;
var statearr_37771_37854 = state_37763__$1;
(statearr_37771_37854[(2)] = null);

(statearr_37771_37854[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (1))){
var inst_37615 = (state_37763[(13)]);
var inst_37612 = before_jsload.call(null,files);
var inst_37613 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37614 = (function (){return ((function (inst_37615,inst_37612,inst_37613,state_val_37764,c__34071__auto__,map__37608,map__37608__$1,opts,before_jsload,on_jsload,reload_dependents,map__37609,map__37609__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37603_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37603_SHARP_);
});
;})(inst_37615,inst_37612,inst_37613,state_val_37764,c__34071__auto__,map__37608,map__37608__$1,opts,before_jsload,on_jsload,reload_dependents,map__37609,map__37609__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37615__$1 = cljs.core.filter.call(null,inst_37614,files);
var inst_37616 = cljs.core.not_empty.call(null,inst_37615__$1);
var state_37763__$1 = (function (){var statearr_37772 = state_37763;
(statearr_37772[(13)] = inst_37615__$1);

(statearr_37772[(14)] = inst_37613);

(statearr_37772[(15)] = inst_37612);

return statearr_37772;
})();
if(cljs.core.truth_(inst_37616)){
var statearr_37773_37855 = state_37763__$1;
(statearr_37773_37855[(1)] = (2));

} else {
var statearr_37774_37856 = state_37763__$1;
(statearr_37774_37856[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (24))){
var state_37763__$1 = state_37763;
var statearr_37775_37857 = state_37763__$1;
(statearr_37775_37857[(2)] = null);

(statearr_37775_37857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (39))){
var inst_37716 = (state_37763[(16)]);
var state_37763__$1 = state_37763;
var statearr_37776_37858 = state_37763__$1;
(statearr_37776_37858[(2)] = inst_37716);

(statearr_37776_37858[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (46))){
var inst_37758 = (state_37763[(2)]);
var state_37763__$1 = state_37763;
var statearr_37777_37859 = state_37763__$1;
(statearr_37777_37859[(2)] = inst_37758);

(statearr_37777_37859[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (4))){
var inst_37660 = (state_37763[(2)]);
var inst_37661 = cljs.core.List.EMPTY;
var inst_37662 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37661);
var inst_37663 = (function (){return ((function (inst_37660,inst_37661,inst_37662,state_val_37764,c__34071__auto__,map__37608,map__37608__$1,opts,before_jsload,on_jsload,reload_dependents,map__37609,map__37609__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37604_SHARP_){
var and__30084__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37604_SHARP_);
if(cljs.core.truth_(and__30084__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37604_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37604_SHARP_)));
} else {
return and__30084__auto__;
}
});
;})(inst_37660,inst_37661,inst_37662,state_val_37764,c__34071__auto__,map__37608,map__37608__$1,opts,before_jsload,on_jsload,reload_dependents,map__37609,map__37609__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37664 = cljs.core.filter.call(null,inst_37663,files);
var inst_37665 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37666 = cljs.core.concat.call(null,inst_37664,inst_37665);
var state_37763__$1 = (function (){var statearr_37778 = state_37763;
(statearr_37778[(17)] = inst_37662);

(statearr_37778[(18)] = inst_37660);

(statearr_37778[(12)] = inst_37666);

return statearr_37778;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37779_37860 = state_37763__$1;
(statearr_37779_37860[(1)] = (16));

} else {
var statearr_37780_37861 = state_37763__$1;
(statearr_37780_37861[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (15))){
var inst_37650 = (state_37763[(2)]);
var state_37763__$1 = state_37763;
var statearr_37781_37862 = state_37763__$1;
(statearr_37781_37862[(2)] = inst_37650);

(statearr_37781_37862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (21))){
var inst_37676 = (state_37763[(19)]);
var inst_37676__$1 = (state_37763[(2)]);
var inst_37677 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37676__$1);
var state_37763__$1 = (function (){var statearr_37782 = state_37763;
(statearr_37782[(19)] = inst_37676__$1);

return statearr_37782;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37763__$1,(22),inst_37677);
} else {
if((state_val_37764 === (31))){
var inst_37761 = (state_37763[(2)]);
var state_37763__$1 = state_37763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37763__$1,inst_37761);
} else {
if((state_val_37764 === (32))){
var inst_37716 = (state_37763[(16)]);
var inst_37721 = inst_37716.cljs$lang$protocol_mask$partition0$;
var inst_37722 = (inst_37721 & (64));
var inst_37723 = inst_37716.cljs$core$ISeq$;
var inst_37724 = (cljs.core.PROTOCOL_SENTINEL === inst_37723);
var inst_37725 = (inst_37722) || (inst_37724);
var state_37763__$1 = state_37763;
if(cljs.core.truth_(inst_37725)){
var statearr_37783_37863 = state_37763__$1;
(statearr_37783_37863[(1)] = (35));

} else {
var statearr_37784_37864 = state_37763__$1;
(statearr_37784_37864[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (40))){
var inst_37738 = (state_37763[(20)]);
var inst_37737 = (state_37763[(2)]);
var inst_37738__$1 = cljs.core.get.call(null,inst_37737,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37739 = cljs.core.get.call(null,inst_37737,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37740 = cljs.core.not_empty.call(null,inst_37738__$1);
var state_37763__$1 = (function (){var statearr_37785 = state_37763;
(statearr_37785[(20)] = inst_37738__$1);

(statearr_37785[(21)] = inst_37739);

return statearr_37785;
})();
if(cljs.core.truth_(inst_37740)){
var statearr_37786_37865 = state_37763__$1;
(statearr_37786_37865[(1)] = (41));

} else {
var statearr_37787_37866 = state_37763__$1;
(statearr_37787_37866[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (33))){
var state_37763__$1 = state_37763;
var statearr_37788_37867 = state_37763__$1;
(statearr_37788_37867[(2)] = false);

(statearr_37788_37867[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (13))){
var inst_37636 = (state_37763[(22)]);
var inst_37640 = cljs.core.chunk_first.call(null,inst_37636);
var inst_37641 = cljs.core.chunk_rest.call(null,inst_37636);
var inst_37642 = cljs.core.count.call(null,inst_37640);
var inst_37623 = inst_37641;
var inst_37624 = inst_37640;
var inst_37625 = inst_37642;
var inst_37626 = (0);
var state_37763__$1 = (function (){var statearr_37789 = state_37763;
(statearr_37789[(7)] = inst_37623);

(statearr_37789[(8)] = inst_37625);

(statearr_37789[(9)] = inst_37626);

(statearr_37789[(10)] = inst_37624);

return statearr_37789;
})();
var statearr_37790_37868 = state_37763__$1;
(statearr_37790_37868[(2)] = null);

(statearr_37790_37868[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (22))){
var inst_37679 = (state_37763[(23)]);
var inst_37684 = (state_37763[(24)]);
var inst_37680 = (state_37763[(25)]);
var inst_37676 = (state_37763[(19)]);
var inst_37679__$1 = (state_37763[(2)]);
var inst_37680__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37679__$1);
var inst_37681 = (function (){var all_files = inst_37676;
var res_SINGLEQUOTE_ = inst_37679__$1;
var res = inst_37680__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37679,inst_37684,inst_37680,inst_37676,inst_37679__$1,inst_37680__$1,state_val_37764,c__34071__auto__,map__37608,map__37608__$1,opts,before_jsload,on_jsload,reload_dependents,map__37609,map__37609__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37605_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37605_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37679,inst_37684,inst_37680,inst_37676,inst_37679__$1,inst_37680__$1,state_val_37764,c__34071__auto__,map__37608,map__37608__$1,opts,before_jsload,on_jsload,reload_dependents,map__37609,map__37609__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37682 = cljs.core.filter.call(null,inst_37681,inst_37679__$1);
var inst_37683 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37684__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37683);
var inst_37685 = cljs.core.not_empty.call(null,inst_37684__$1);
var state_37763__$1 = (function (){var statearr_37791 = state_37763;
(statearr_37791[(26)] = inst_37682);

(statearr_37791[(23)] = inst_37679__$1);

(statearr_37791[(24)] = inst_37684__$1);

(statearr_37791[(25)] = inst_37680__$1);

return statearr_37791;
})();
if(cljs.core.truth_(inst_37685)){
var statearr_37792_37869 = state_37763__$1;
(statearr_37792_37869[(1)] = (23));

} else {
var statearr_37793_37870 = state_37763__$1;
(statearr_37793_37870[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (36))){
var state_37763__$1 = state_37763;
var statearr_37794_37871 = state_37763__$1;
(statearr_37794_37871[(2)] = false);

(statearr_37794_37871[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (41))){
var inst_37738 = (state_37763[(20)]);
var inst_37742 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37743 = cljs.core.map.call(null,inst_37742,inst_37738);
var inst_37744 = cljs.core.pr_str.call(null,inst_37743);
var inst_37745 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37744)].join('');
var inst_37746 = figwheel.client.utils.log.call(null,inst_37745);
var state_37763__$1 = state_37763;
var statearr_37795_37872 = state_37763__$1;
(statearr_37795_37872[(2)] = inst_37746);

(statearr_37795_37872[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (43))){
var inst_37739 = (state_37763[(21)]);
var inst_37749 = (state_37763[(2)]);
var inst_37750 = cljs.core.not_empty.call(null,inst_37739);
var state_37763__$1 = (function (){var statearr_37796 = state_37763;
(statearr_37796[(27)] = inst_37749);

return statearr_37796;
})();
if(cljs.core.truth_(inst_37750)){
var statearr_37797_37873 = state_37763__$1;
(statearr_37797_37873[(1)] = (44));

} else {
var statearr_37798_37874 = state_37763__$1;
(statearr_37798_37874[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (29))){
var inst_37682 = (state_37763[(26)]);
var inst_37716 = (state_37763[(16)]);
var inst_37679 = (state_37763[(23)]);
var inst_37684 = (state_37763[(24)]);
var inst_37680 = (state_37763[(25)]);
var inst_37676 = (state_37763[(19)]);
var inst_37712 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37715 = (function (){var all_files = inst_37676;
var res_SINGLEQUOTE_ = inst_37679;
var res = inst_37680;
var files_not_loaded = inst_37682;
var dependencies_that_loaded = inst_37684;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37682,inst_37716,inst_37679,inst_37684,inst_37680,inst_37676,inst_37712,state_val_37764,c__34071__auto__,map__37608,map__37608__$1,opts,before_jsload,on_jsload,reload_dependents,map__37609,map__37609__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37714){
var map__37799 = p__37714;
var map__37799__$1 = ((((!((map__37799 == null)))?((((map__37799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37799.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37799):map__37799);
var namespace = cljs.core.get.call(null,map__37799__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37682,inst_37716,inst_37679,inst_37684,inst_37680,inst_37676,inst_37712,state_val_37764,c__34071__auto__,map__37608,map__37608__$1,opts,before_jsload,on_jsload,reload_dependents,map__37609,map__37609__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37716__$1 = cljs.core.group_by.call(null,inst_37715,inst_37682);
var inst_37718 = (inst_37716__$1 == null);
var inst_37719 = cljs.core.not.call(null,inst_37718);
var state_37763__$1 = (function (){var statearr_37801 = state_37763;
(statearr_37801[(16)] = inst_37716__$1);

(statearr_37801[(28)] = inst_37712);

return statearr_37801;
})();
if(inst_37719){
var statearr_37802_37875 = state_37763__$1;
(statearr_37802_37875[(1)] = (32));

} else {
var statearr_37803_37876 = state_37763__$1;
(statearr_37803_37876[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (44))){
var inst_37739 = (state_37763[(21)]);
var inst_37752 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37739);
var inst_37753 = cljs.core.pr_str.call(null,inst_37752);
var inst_37754 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37753)].join('');
var inst_37755 = figwheel.client.utils.log.call(null,inst_37754);
var state_37763__$1 = state_37763;
var statearr_37804_37877 = state_37763__$1;
(statearr_37804_37877[(2)] = inst_37755);

(statearr_37804_37877[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (6))){
var inst_37657 = (state_37763[(2)]);
var state_37763__$1 = state_37763;
var statearr_37805_37878 = state_37763__$1;
(statearr_37805_37878[(2)] = inst_37657);

(statearr_37805_37878[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (28))){
var inst_37682 = (state_37763[(26)]);
var inst_37709 = (state_37763[(2)]);
var inst_37710 = cljs.core.not_empty.call(null,inst_37682);
var state_37763__$1 = (function (){var statearr_37806 = state_37763;
(statearr_37806[(29)] = inst_37709);

return statearr_37806;
})();
if(cljs.core.truth_(inst_37710)){
var statearr_37807_37879 = state_37763__$1;
(statearr_37807_37879[(1)] = (29));

} else {
var statearr_37808_37880 = state_37763__$1;
(statearr_37808_37880[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (25))){
var inst_37680 = (state_37763[(25)]);
var inst_37696 = (state_37763[(2)]);
var inst_37697 = cljs.core.not_empty.call(null,inst_37680);
var state_37763__$1 = (function (){var statearr_37809 = state_37763;
(statearr_37809[(30)] = inst_37696);

return statearr_37809;
})();
if(cljs.core.truth_(inst_37697)){
var statearr_37810_37881 = state_37763__$1;
(statearr_37810_37881[(1)] = (26));

} else {
var statearr_37811_37882 = state_37763__$1;
(statearr_37811_37882[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (34))){
var inst_37732 = (state_37763[(2)]);
var state_37763__$1 = state_37763;
if(cljs.core.truth_(inst_37732)){
var statearr_37812_37883 = state_37763__$1;
(statearr_37812_37883[(1)] = (38));

} else {
var statearr_37813_37884 = state_37763__$1;
(statearr_37813_37884[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (17))){
var state_37763__$1 = state_37763;
var statearr_37814_37885 = state_37763__$1;
(statearr_37814_37885[(2)] = recompile_dependents);

(statearr_37814_37885[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (3))){
var state_37763__$1 = state_37763;
var statearr_37815_37886 = state_37763__$1;
(statearr_37815_37886[(2)] = null);

(statearr_37815_37886[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (12))){
var inst_37653 = (state_37763[(2)]);
var state_37763__$1 = state_37763;
var statearr_37816_37887 = state_37763__$1;
(statearr_37816_37887[(2)] = inst_37653);

(statearr_37816_37887[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (2))){
var inst_37615 = (state_37763[(13)]);
var inst_37622 = cljs.core.seq.call(null,inst_37615);
var inst_37623 = inst_37622;
var inst_37624 = null;
var inst_37625 = (0);
var inst_37626 = (0);
var state_37763__$1 = (function (){var statearr_37817 = state_37763;
(statearr_37817[(7)] = inst_37623);

(statearr_37817[(8)] = inst_37625);

(statearr_37817[(9)] = inst_37626);

(statearr_37817[(10)] = inst_37624);

return statearr_37817;
})();
var statearr_37818_37888 = state_37763__$1;
(statearr_37818_37888[(2)] = null);

(statearr_37818_37888[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (23))){
var inst_37682 = (state_37763[(26)]);
var inst_37679 = (state_37763[(23)]);
var inst_37684 = (state_37763[(24)]);
var inst_37680 = (state_37763[(25)]);
var inst_37676 = (state_37763[(19)]);
var inst_37687 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37689 = (function (){var all_files = inst_37676;
var res_SINGLEQUOTE_ = inst_37679;
var res = inst_37680;
var files_not_loaded = inst_37682;
var dependencies_that_loaded = inst_37684;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37682,inst_37679,inst_37684,inst_37680,inst_37676,inst_37687,state_val_37764,c__34071__auto__,map__37608,map__37608__$1,opts,before_jsload,on_jsload,reload_dependents,map__37609,map__37609__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37688){
var map__37819 = p__37688;
var map__37819__$1 = ((((!((map__37819 == null)))?((((map__37819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37819.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37819):map__37819);
var request_url = cljs.core.get.call(null,map__37819__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37682,inst_37679,inst_37684,inst_37680,inst_37676,inst_37687,state_val_37764,c__34071__auto__,map__37608,map__37608__$1,opts,before_jsload,on_jsload,reload_dependents,map__37609,map__37609__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37690 = cljs.core.reverse.call(null,inst_37684);
var inst_37691 = cljs.core.map.call(null,inst_37689,inst_37690);
var inst_37692 = cljs.core.pr_str.call(null,inst_37691);
var inst_37693 = figwheel.client.utils.log.call(null,inst_37692);
var state_37763__$1 = (function (){var statearr_37821 = state_37763;
(statearr_37821[(31)] = inst_37687);

return statearr_37821;
})();
var statearr_37822_37889 = state_37763__$1;
(statearr_37822_37889[(2)] = inst_37693);

(statearr_37822_37889[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (35))){
var state_37763__$1 = state_37763;
var statearr_37823_37890 = state_37763__$1;
(statearr_37823_37890[(2)] = true);

(statearr_37823_37890[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (19))){
var inst_37666 = (state_37763[(12)]);
var inst_37672 = figwheel.client.file_reloading.expand_files.call(null,inst_37666);
var state_37763__$1 = state_37763;
var statearr_37824_37891 = state_37763__$1;
(statearr_37824_37891[(2)] = inst_37672);

(statearr_37824_37891[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (11))){
var state_37763__$1 = state_37763;
var statearr_37825_37892 = state_37763__$1;
(statearr_37825_37892[(2)] = null);

(statearr_37825_37892[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (9))){
var inst_37655 = (state_37763[(2)]);
var state_37763__$1 = state_37763;
var statearr_37826_37893 = state_37763__$1;
(statearr_37826_37893[(2)] = inst_37655);

(statearr_37826_37893[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (5))){
var inst_37625 = (state_37763[(8)]);
var inst_37626 = (state_37763[(9)]);
var inst_37628 = (inst_37626 < inst_37625);
var inst_37629 = inst_37628;
var state_37763__$1 = state_37763;
if(cljs.core.truth_(inst_37629)){
var statearr_37827_37894 = state_37763__$1;
(statearr_37827_37894[(1)] = (7));

} else {
var statearr_37828_37895 = state_37763__$1;
(statearr_37828_37895[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (14))){
var inst_37636 = (state_37763[(22)]);
var inst_37645 = cljs.core.first.call(null,inst_37636);
var inst_37646 = figwheel.client.file_reloading.eval_body.call(null,inst_37645,opts);
var inst_37647 = cljs.core.next.call(null,inst_37636);
var inst_37623 = inst_37647;
var inst_37624 = null;
var inst_37625 = (0);
var inst_37626 = (0);
var state_37763__$1 = (function (){var statearr_37829 = state_37763;
(statearr_37829[(32)] = inst_37646);

(statearr_37829[(7)] = inst_37623);

(statearr_37829[(8)] = inst_37625);

(statearr_37829[(9)] = inst_37626);

(statearr_37829[(10)] = inst_37624);

return statearr_37829;
})();
var statearr_37830_37896 = state_37763__$1;
(statearr_37830_37896[(2)] = null);

(statearr_37830_37896[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (45))){
var state_37763__$1 = state_37763;
var statearr_37831_37897 = state_37763__$1;
(statearr_37831_37897[(2)] = null);

(statearr_37831_37897[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (26))){
var inst_37682 = (state_37763[(26)]);
var inst_37679 = (state_37763[(23)]);
var inst_37684 = (state_37763[(24)]);
var inst_37680 = (state_37763[(25)]);
var inst_37676 = (state_37763[(19)]);
var inst_37699 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37701 = (function (){var all_files = inst_37676;
var res_SINGLEQUOTE_ = inst_37679;
var res = inst_37680;
var files_not_loaded = inst_37682;
var dependencies_that_loaded = inst_37684;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37682,inst_37679,inst_37684,inst_37680,inst_37676,inst_37699,state_val_37764,c__34071__auto__,map__37608,map__37608__$1,opts,before_jsload,on_jsload,reload_dependents,map__37609,map__37609__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37700){
var map__37832 = p__37700;
var map__37832__$1 = ((((!((map__37832 == null)))?((((map__37832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37832.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37832):map__37832);
var namespace = cljs.core.get.call(null,map__37832__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37832__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37682,inst_37679,inst_37684,inst_37680,inst_37676,inst_37699,state_val_37764,c__34071__auto__,map__37608,map__37608__$1,opts,before_jsload,on_jsload,reload_dependents,map__37609,map__37609__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37702 = cljs.core.map.call(null,inst_37701,inst_37680);
var inst_37703 = cljs.core.pr_str.call(null,inst_37702);
var inst_37704 = figwheel.client.utils.log.call(null,inst_37703);
var inst_37705 = (function (){var all_files = inst_37676;
var res_SINGLEQUOTE_ = inst_37679;
var res = inst_37680;
var files_not_loaded = inst_37682;
var dependencies_that_loaded = inst_37684;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37682,inst_37679,inst_37684,inst_37680,inst_37676,inst_37699,inst_37701,inst_37702,inst_37703,inst_37704,state_val_37764,c__34071__auto__,map__37608,map__37608__$1,opts,before_jsload,on_jsload,reload_dependents,map__37609,map__37609__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37682,inst_37679,inst_37684,inst_37680,inst_37676,inst_37699,inst_37701,inst_37702,inst_37703,inst_37704,state_val_37764,c__34071__auto__,map__37608,map__37608__$1,opts,before_jsload,on_jsload,reload_dependents,map__37609,map__37609__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37706 = setTimeout(inst_37705,(10));
var state_37763__$1 = (function (){var statearr_37834 = state_37763;
(statearr_37834[(33)] = inst_37699);

(statearr_37834[(34)] = inst_37704);

return statearr_37834;
})();
var statearr_37835_37898 = state_37763__$1;
(statearr_37835_37898[(2)] = inst_37706);

(statearr_37835_37898[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (16))){
var state_37763__$1 = state_37763;
var statearr_37836_37899 = state_37763__$1;
(statearr_37836_37899[(2)] = reload_dependents);

(statearr_37836_37899[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (38))){
var inst_37716 = (state_37763[(16)]);
var inst_37734 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37716);
var state_37763__$1 = state_37763;
var statearr_37837_37900 = state_37763__$1;
(statearr_37837_37900[(2)] = inst_37734);

(statearr_37837_37900[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (30))){
var state_37763__$1 = state_37763;
var statearr_37838_37901 = state_37763__$1;
(statearr_37838_37901[(2)] = null);

(statearr_37838_37901[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (10))){
var inst_37636 = (state_37763[(22)]);
var inst_37638 = cljs.core.chunked_seq_QMARK_.call(null,inst_37636);
var state_37763__$1 = state_37763;
if(inst_37638){
var statearr_37839_37902 = state_37763__$1;
(statearr_37839_37902[(1)] = (13));

} else {
var statearr_37840_37903 = state_37763__$1;
(statearr_37840_37903[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (18))){
var inst_37670 = (state_37763[(2)]);
var state_37763__$1 = state_37763;
if(cljs.core.truth_(inst_37670)){
var statearr_37841_37904 = state_37763__$1;
(statearr_37841_37904[(1)] = (19));

} else {
var statearr_37842_37905 = state_37763__$1;
(statearr_37842_37905[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (42))){
var state_37763__$1 = state_37763;
var statearr_37843_37906 = state_37763__$1;
(statearr_37843_37906[(2)] = null);

(statearr_37843_37906[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (37))){
var inst_37729 = (state_37763[(2)]);
var state_37763__$1 = state_37763;
var statearr_37844_37907 = state_37763__$1;
(statearr_37844_37907[(2)] = inst_37729);

(statearr_37844_37907[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (8))){
var inst_37623 = (state_37763[(7)]);
var inst_37636 = (state_37763[(22)]);
var inst_37636__$1 = cljs.core.seq.call(null,inst_37623);
var state_37763__$1 = (function (){var statearr_37845 = state_37763;
(statearr_37845[(22)] = inst_37636__$1);

return statearr_37845;
})();
if(inst_37636__$1){
var statearr_37846_37908 = state_37763__$1;
(statearr_37846_37908[(1)] = (10));

} else {
var statearr_37847_37909 = state_37763__$1;
(statearr_37847_37909[(1)] = (11));

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
});})(c__34071__auto__,map__37608,map__37608__$1,opts,before_jsload,on_jsload,reload_dependents,map__37609,map__37609__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33981__auto__,c__34071__auto__,map__37608,map__37608__$1,opts,before_jsload,on_jsload,reload_dependents,map__37609,map__37609__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33982__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33982__auto____0 = (function (){
var statearr_37848 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37848[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33982__auto__);

(statearr_37848[(1)] = (1));

return statearr_37848;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33982__auto____1 = (function (state_37763){
while(true){
var ret_value__33983__auto__ = (function (){try{while(true){
var result__33984__auto__ = switch__33981__auto__.call(null,state_37763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33984__auto__;
}
break;
}
}catch (e37849){if((e37849 instanceof Object)){
var ex__33985__auto__ = e37849;
var statearr_37850_37910 = state_37763;
(statearr_37850_37910[(5)] = ex__33985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37911 = state_37763;
state_37763 = G__37911;
continue;
} else {
return ret_value__33983__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33982__auto__ = function(state_37763){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33982__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33982__auto____1.call(this,state_37763);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33982__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33982__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33982__auto__;
})()
;})(switch__33981__auto__,c__34071__auto__,map__37608,map__37608__$1,opts,before_jsload,on_jsload,reload_dependents,map__37609,map__37609__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__34073__auto__ = (function (){var statearr_37851 = f__34072__auto__.call(null);
(statearr_37851[(6)] = c__34071__auto__);

return statearr_37851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto__,map__37608,map__37608__$1,opts,before_jsload,on_jsload,reload_dependents,map__37609,map__37609__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__34071__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37914,link){
var map__37915 = p__37914;
var map__37915__$1 = ((((!((map__37915 == null)))?((((map__37915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37915.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37915):map__37915);
var file = cljs.core.get.call(null,map__37915__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__37915,map__37915__$1,file){
return (function (p1__37912_SHARP_,p2__37913_SHARP_){
if(cljs.core._EQ_.call(null,p1__37912_SHARP_,p2__37913_SHARP_)){
return p1__37912_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__37915,map__37915__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37918){
var map__37919 = p__37918;
var map__37919__$1 = ((((!((map__37919 == null)))?((((map__37919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37919.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37919):map__37919);
var match_length = cljs.core.get.call(null,map__37919__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37919__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37917_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37917_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37921_SHARP_,p2__37922_SHARP_){
return cljs.core.assoc.call(null,p1__37921_SHARP_,cljs.core.get.call(null,p2__37922_SHARP_,key),p2__37922_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_37923 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37923);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37923);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37924,p__37925){
var map__37926 = p__37924;
var map__37926__$1 = ((((!((map__37926 == null)))?((((map__37926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37926.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37926):map__37926);
var on_cssload = cljs.core.get.call(null,map__37926__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37927 = p__37925;
var map__37927__$1 = ((((!((map__37927 == null)))?((((map__37927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37927.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37927):map__37927);
var files_msg = map__37927__$1;
var files = cljs.core.get.call(null,map__37927__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1512625076359
