// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30902 = arguments.length;
switch (G__30902) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30903 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30903 = (function (f,blockable,meta30904){
this.f = f;
this.blockable = blockable;
this.meta30904 = meta30904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30905,meta30904__$1){
var self__ = this;
var _30905__$1 = this;
return (new cljs.core.async.t_cljs$core$async30903(self__.f,self__.blockable,meta30904__$1));
});

cljs.core.async.t_cljs$core$async30903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30905){
var self__ = this;
var _30905__$1 = this;
return self__.meta30904;
});

cljs.core.async.t_cljs$core$async30903.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30903.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30903.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30903.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30903.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta30904], null);
});

cljs.core.async.t_cljs$core$async30903.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30903.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30903";

cljs.core.async.t_cljs$core$async30903.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async30903");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30903.
 */
cljs.core.async.__GT_t_cljs$core$async30903 = (function cljs$core$async$__GT_t_cljs$core$async30903(f__$1,blockable__$1,meta30904){
return (new cljs.core.async.t_cljs$core$async30903(f__$1,blockable__$1,meta30904));
});

}

return (new cljs.core.async.t_cljs$core$async30903(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30909 = arguments.length;
switch (G__30909) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30912 = arguments.length;
switch (G__30912) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30915 = arguments.length;
switch (G__30915) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_30917 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_30917) : fn1.call(null,val_30917));
} else {
cljs.core.async.impl.dispatch.run(((function (val_30917,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_30917) : fn1.call(null,val_30917));
});})(val_30917,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30919 = arguments.length;
switch (G__30919) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___30921 = n;
var x_30922 = (0);
while(true){
if((x_30922 < n__4376__auto___30921)){
(a[x_30922] = (0));

var G__30923 = (x_30922 + (1));
x_30922 = G__30923;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__30924 = (i + (1));
i = G__30924;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async30925 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30925 = (function (flag,meta30926){
this.flag = flag;
this.meta30926 = meta30926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30927,meta30926__$1){
var self__ = this;
var _30927__$1 = this;
return (new cljs.core.async.t_cljs$core$async30925(self__.flag,meta30926__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30925.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30927){
var self__ = this;
var _30927__$1 = this;
return self__.meta30926;
});})(flag))
;

cljs.core.async.t_cljs$core$async30925.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30925.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30925.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30925.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30925.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta30926], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30925.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30925.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30925";

cljs.core.async.t_cljs$core$async30925.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async30925");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30925.
 */
cljs.core.async.__GT_t_cljs$core$async30925 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30925(flag__$1,meta30926){
return (new cljs.core.async.t_cljs$core$async30925(flag__$1,meta30926));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30925(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30928 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30928 = (function (flag,cb,meta30929){
this.flag = flag;
this.cb = cb;
this.meta30929 = meta30929;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30930,meta30929__$1){
var self__ = this;
var _30930__$1 = this;
return (new cljs.core.async.t_cljs$core$async30928(self__.flag,self__.cb,meta30929__$1));
});

cljs.core.async.t_cljs$core$async30928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30930){
var self__ = this;
var _30930__$1 = this;
return self__.meta30929;
});

cljs.core.async.t_cljs$core$async30928.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30928.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async30928.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30928.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30928.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta30929], null);
});

cljs.core.async.t_cljs$core$async30928.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30928.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30928";

cljs.core.async.t_cljs$core$async30928.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async30928");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30928.
 */
cljs.core.async.__GT_t_cljs$core$async30928 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30928(flag__$1,cb__$1,meta30929){
return (new cljs.core.async.t_cljs$core$async30928(flag__$1,cb__$1,meta30929));
});

}

return (new cljs.core.async.t_cljs$core$async30928(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30931_SHARP_){
var G__30933 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30931_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30933) : fret.call(null,G__30933));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30932_SHARP_){
var G__30934 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30932_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30934) : fret.call(null,G__30934));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30935 = (i + (1));
i = G__30935;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30941 = arguments.length;
var i__4500__auto___30942 = (0);
while(true){
if((i__4500__auto___30942 < len__4499__auto___30941)){
args__4502__auto__.push((arguments[i__4500__auto___30942]));

var G__30943 = (i__4500__auto___30942 + (1));
i__4500__auto___30942 = G__30943;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30938){
var map__30939 = p__30938;
var map__30939__$1 = ((((!((map__30939 == null)))?(((((map__30939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30939):map__30939);
var opts = map__30939__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30936){
var G__30937 = cljs.core.first(seq30936);
var seq30936__$1 = cljs.core.next(seq30936);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30937,seq30936__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30945 = arguments.length;
switch (G__30945) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30842__auto___30991 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30842__auto___30991){
return (function (){
var f__30843__auto__ = (function (){var switch__30740__auto__ = ((function (c__30842__auto___30991){
return (function (state_30969){
var state_val_30970 = (state_30969[(1)]);
if((state_val_30970 === (7))){
var inst_30965 = (state_30969[(2)]);
var state_30969__$1 = state_30969;
var statearr_30971_30992 = state_30969__$1;
(statearr_30971_30992[(2)] = inst_30965);

(statearr_30971_30992[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30970 === (1))){
var state_30969__$1 = state_30969;
var statearr_30972_30993 = state_30969__$1;
(statearr_30972_30993[(2)] = null);

(statearr_30972_30993[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30970 === (4))){
var inst_30948 = (state_30969[(7)]);
var inst_30948__$1 = (state_30969[(2)]);
var inst_30949 = (inst_30948__$1 == null);
var state_30969__$1 = (function (){var statearr_30973 = state_30969;
(statearr_30973[(7)] = inst_30948__$1);

return statearr_30973;
})();
if(cljs.core.truth_(inst_30949)){
var statearr_30974_30994 = state_30969__$1;
(statearr_30974_30994[(1)] = (5));

} else {
var statearr_30975_30995 = state_30969__$1;
(statearr_30975_30995[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30970 === (13))){
var state_30969__$1 = state_30969;
var statearr_30976_30996 = state_30969__$1;
(statearr_30976_30996[(2)] = null);

(statearr_30976_30996[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30970 === (6))){
var inst_30948 = (state_30969[(7)]);
var state_30969__$1 = state_30969;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30969__$1,(11),to,inst_30948);
} else {
if((state_val_30970 === (3))){
var inst_30967 = (state_30969[(2)]);
var state_30969__$1 = state_30969;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30969__$1,inst_30967);
} else {
if((state_val_30970 === (12))){
var state_30969__$1 = state_30969;
var statearr_30977_30997 = state_30969__$1;
(statearr_30977_30997[(2)] = null);

(statearr_30977_30997[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30970 === (2))){
var state_30969__$1 = state_30969;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30969__$1,(4),from);
} else {
if((state_val_30970 === (11))){
var inst_30958 = (state_30969[(2)]);
var state_30969__$1 = state_30969;
if(cljs.core.truth_(inst_30958)){
var statearr_30978_30998 = state_30969__$1;
(statearr_30978_30998[(1)] = (12));

} else {
var statearr_30979_30999 = state_30969__$1;
(statearr_30979_30999[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30970 === (9))){
var state_30969__$1 = state_30969;
var statearr_30980_31000 = state_30969__$1;
(statearr_30980_31000[(2)] = null);

(statearr_30980_31000[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30970 === (5))){
var state_30969__$1 = state_30969;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30981_31001 = state_30969__$1;
(statearr_30981_31001[(1)] = (8));

} else {
var statearr_30982_31002 = state_30969__$1;
(statearr_30982_31002[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30970 === (14))){
var inst_30963 = (state_30969[(2)]);
var state_30969__$1 = state_30969;
var statearr_30983_31003 = state_30969__$1;
(statearr_30983_31003[(2)] = inst_30963);

(statearr_30983_31003[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30970 === (10))){
var inst_30955 = (state_30969[(2)]);
var state_30969__$1 = state_30969;
var statearr_30984_31004 = state_30969__$1;
(statearr_30984_31004[(2)] = inst_30955);

(statearr_30984_31004[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30970 === (8))){
var inst_30952 = cljs.core.async.close_BANG_(to);
var state_30969__$1 = state_30969;
var statearr_30985_31005 = state_30969__$1;
(statearr_30985_31005[(2)] = inst_30952);

(statearr_30985_31005[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__30842__auto___30991))
;
return ((function (switch__30740__auto__,c__30842__auto___30991){
return (function() {
var cljs$core$async$state_machine__30741__auto__ = null;
var cljs$core$async$state_machine__30741__auto____0 = (function (){
var statearr_30986 = [null,null,null,null,null,null,null,null];
(statearr_30986[(0)] = cljs$core$async$state_machine__30741__auto__);

(statearr_30986[(1)] = (1));

return statearr_30986;
});
var cljs$core$async$state_machine__30741__auto____1 = (function (state_30969){
while(true){
var ret_value__30742__auto__ = (function (){try{while(true){
var result__30743__auto__ = switch__30740__auto__(state_30969);
if(cljs.core.keyword_identical_QMARK_(result__30743__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30743__auto__;
}
break;
}
}catch (e30987){if((e30987 instanceof Object)){
var ex__30744__auto__ = e30987;
var statearr_30988_31006 = state_30969;
(statearr_30988_31006[(5)] = ex__30744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30969);

return cljs.core.cst$kw$recur;
} else {
throw e30987;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30742__auto__,cljs.core.cst$kw$recur)){
var G__31007 = state_30969;
state_30969 = G__31007;
continue;
} else {
return ret_value__30742__auto__;
}
break;
}
});
cljs$core$async$state_machine__30741__auto__ = function(state_30969){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30741__auto____1.call(this,state_30969);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30741__auto____0;
cljs$core$async$state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30741__auto____1;
return cljs$core$async$state_machine__30741__auto__;
})()
;})(switch__30740__auto__,c__30842__auto___30991))
})();
var state__30844__auto__ = (function (){var statearr_30989 = (f__30843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30843__auto__.cljs$core$IFn$_invoke$arity$0() : f__30843__auto__.call(null));
(statearr_30989[(6)] = c__30842__auto___30991);

return statearr_30989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30844__auto__);
});})(c__30842__auto___30991))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__31008){
var vec__31009 = p__31008;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31009,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31009,(1),null);
var job = vec__31009;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30842__auto___31180 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30842__auto___31180,res,vec__31009,v,p,job,jobs,results){
return (function (){
var f__30843__auto__ = (function (){var switch__30740__auto__ = ((function (c__30842__auto___31180,res,vec__31009,v,p,job,jobs,results){
return (function (state_31016){
var state_val_31017 = (state_31016[(1)]);
if((state_val_31017 === (1))){
var state_31016__$1 = state_31016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31016__$1,(2),res,v);
} else {
if((state_val_31017 === (2))){
var inst_31013 = (state_31016[(2)]);
var inst_31014 = cljs.core.async.close_BANG_(res);
var state_31016__$1 = (function (){var statearr_31018 = state_31016;
(statearr_31018[(7)] = inst_31013);

return statearr_31018;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31016__$1,inst_31014);
} else {
return null;
}
}
});})(c__30842__auto___31180,res,vec__31009,v,p,job,jobs,results))
;
return ((function (switch__30740__auto__,c__30842__auto___31180,res,vec__31009,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30741__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30741__auto____0 = (function (){
var statearr_31019 = [null,null,null,null,null,null,null,null];
(statearr_31019[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30741__auto__);

(statearr_31019[(1)] = (1));

return statearr_31019;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30741__auto____1 = (function (state_31016){
while(true){
var ret_value__30742__auto__ = (function (){try{while(true){
var result__30743__auto__ = switch__30740__auto__(state_31016);
if(cljs.core.keyword_identical_QMARK_(result__30743__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30743__auto__;
}
break;
}
}catch (e31020){if((e31020 instanceof Object)){
var ex__30744__auto__ = e31020;
var statearr_31021_31181 = state_31016;
(statearr_31021_31181[(5)] = ex__30744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31016);

return cljs.core.cst$kw$recur;
} else {
throw e31020;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30742__auto__,cljs.core.cst$kw$recur)){
var G__31182 = state_31016;
state_31016 = G__31182;
continue;
} else {
return ret_value__30742__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30741__auto__ = function(state_31016){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30741__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30741__auto____1.call(this,state_31016);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30741__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30741__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30741__auto__;
})()
;})(switch__30740__auto__,c__30842__auto___31180,res,vec__31009,v,p,job,jobs,results))
})();
var state__30844__auto__ = (function (){var statearr_31022 = (f__30843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30843__auto__.cljs$core$IFn$_invoke$arity$0() : f__30843__auto__.call(null));
(statearr_31022[(6)] = c__30842__auto___31180);

return statearr_31022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30844__auto__);
});})(c__30842__auto___31180,res,vec__31009,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31023){
var vec__31024 = p__31023;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31024,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31024,(1),null);
var job = vec__31024;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___31183 = n;
var __31184 = (0);
while(true){
if((__31184 < n__4376__auto___31183)){
var G__31027_31185 = type;
var G__31027_31186__$1 = (((G__31027_31185 instanceof cljs.core.Keyword))?G__31027_31185.fqn:null);
switch (G__31027_31186__$1) {
case "compute":
var c__30842__auto___31188 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31184,c__30842__auto___31188,G__31027_31185,G__31027_31186__$1,n__4376__auto___31183,jobs,results,process,async){
return (function (){
var f__30843__auto__ = (function (){var switch__30740__auto__ = ((function (__31184,c__30842__auto___31188,G__31027_31185,G__31027_31186__$1,n__4376__auto___31183,jobs,results,process,async){
return (function (state_31040){
var state_val_31041 = (state_31040[(1)]);
if((state_val_31041 === (1))){
var state_31040__$1 = state_31040;
var statearr_31042_31189 = state_31040__$1;
(statearr_31042_31189[(2)] = null);

(statearr_31042_31189[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31041 === (2))){
var state_31040__$1 = state_31040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31040__$1,(4),jobs);
} else {
if((state_val_31041 === (3))){
var inst_31038 = (state_31040[(2)]);
var state_31040__$1 = state_31040;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31040__$1,inst_31038);
} else {
if((state_val_31041 === (4))){
var inst_31030 = (state_31040[(2)]);
var inst_31031 = process(inst_31030);
var state_31040__$1 = state_31040;
if(cljs.core.truth_(inst_31031)){
var statearr_31043_31190 = state_31040__$1;
(statearr_31043_31190[(1)] = (5));

} else {
var statearr_31044_31191 = state_31040__$1;
(statearr_31044_31191[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31041 === (5))){
var state_31040__$1 = state_31040;
var statearr_31045_31192 = state_31040__$1;
(statearr_31045_31192[(2)] = null);

(statearr_31045_31192[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31041 === (6))){
var state_31040__$1 = state_31040;
var statearr_31046_31193 = state_31040__$1;
(statearr_31046_31193[(2)] = null);

(statearr_31046_31193[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31041 === (7))){
var inst_31036 = (state_31040[(2)]);
var state_31040__$1 = state_31040;
var statearr_31047_31194 = state_31040__$1;
(statearr_31047_31194[(2)] = inst_31036);

(statearr_31047_31194[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__31184,c__30842__auto___31188,G__31027_31185,G__31027_31186__$1,n__4376__auto___31183,jobs,results,process,async))
;
return ((function (__31184,switch__30740__auto__,c__30842__auto___31188,G__31027_31185,G__31027_31186__$1,n__4376__auto___31183,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30741__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30741__auto____0 = (function (){
var statearr_31048 = [null,null,null,null,null,null,null];
(statearr_31048[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30741__auto__);

(statearr_31048[(1)] = (1));

return statearr_31048;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30741__auto____1 = (function (state_31040){
while(true){
var ret_value__30742__auto__ = (function (){try{while(true){
var result__30743__auto__ = switch__30740__auto__(state_31040);
if(cljs.core.keyword_identical_QMARK_(result__30743__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30743__auto__;
}
break;
}
}catch (e31049){if((e31049 instanceof Object)){
var ex__30744__auto__ = e31049;
var statearr_31050_31195 = state_31040;
(statearr_31050_31195[(5)] = ex__30744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31040);

return cljs.core.cst$kw$recur;
} else {
throw e31049;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30742__auto__,cljs.core.cst$kw$recur)){
var G__31196 = state_31040;
state_31040 = G__31196;
continue;
} else {
return ret_value__30742__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30741__auto__ = function(state_31040){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30741__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30741__auto____1.call(this,state_31040);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30741__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30741__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30741__auto__;
})()
;})(__31184,switch__30740__auto__,c__30842__auto___31188,G__31027_31185,G__31027_31186__$1,n__4376__auto___31183,jobs,results,process,async))
})();
var state__30844__auto__ = (function (){var statearr_31051 = (f__30843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30843__auto__.cljs$core$IFn$_invoke$arity$0() : f__30843__auto__.call(null));
(statearr_31051[(6)] = c__30842__auto___31188);

return statearr_31051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30844__auto__);
});})(__31184,c__30842__auto___31188,G__31027_31185,G__31027_31186__$1,n__4376__auto___31183,jobs,results,process,async))
);


break;
case "async":
var c__30842__auto___31197 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31184,c__30842__auto___31197,G__31027_31185,G__31027_31186__$1,n__4376__auto___31183,jobs,results,process,async){
return (function (){
var f__30843__auto__ = (function (){var switch__30740__auto__ = ((function (__31184,c__30842__auto___31197,G__31027_31185,G__31027_31186__$1,n__4376__auto___31183,jobs,results,process,async){
return (function (state_31064){
var state_val_31065 = (state_31064[(1)]);
if((state_val_31065 === (1))){
var state_31064__$1 = state_31064;
var statearr_31066_31198 = state_31064__$1;
(statearr_31066_31198[(2)] = null);

(statearr_31066_31198[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31065 === (2))){
var state_31064__$1 = state_31064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31064__$1,(4),jobs);
} else {
if((state_val_31065 === (3))){
var inst_31062 = (state_31064[(2)]);
var state_31064__$1 = state_31064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31064__$1,inst_31062);
} else {
if((state_val_31065 === (4))){
var inst_31054 = (state_31064[(2)]);
var inst_31055 = async(inst_31054);
var state_31064__$1 = state_31064;
if(cljs.core.truth_(inst_31055)){
var statearr_31067_31199 = state_31064__$1;
(statearr_31067_31199[(1)] = (5));

} else {
var statearr_31068_31200 = state_31064__$1;
(statearr_31068_31200[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31065 === (5))){
var state_31064__$1 = state_31064;
var statearr_31069_31201 = state_31064__$1;
(statearr_31069_31201[(2)] = null);

(statearr_31069_31201[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31065 === (6))){
var state_31064__$1 = state_31064;
var statearr_31070_31202 = state_31064__$1;
(statearr_31070_31202[(2)] = null);

(statearr_31070_31202[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31065 === (7))){
var inst_31060 = (state_31064[(2)]);
var state_31064__$1 = state_31064;
var statearr_31071_31203 = state_31064__$1;
(statearr_31071_31203[(2)] = inst_31060);

(statearr_31071_31203[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__31184,c__30842__auto___31197,G__31027_31185,G__31027_31186__$1,n__4376__auto___31183,jobs,results,process,async))
;
return ((function (__31184,switch__30740__auto__,c__30842__auto___31197,G__31027_31185,G__31027_31186__$1,n__4376__auto___31183,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30741__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30741__auto____0 = (function (){
var statearr_31072 = [null,null,null,null,null,null,null];
(statearr_31072[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30741__auto__);

(statearr_31072[(1)] = (1));

return statearr_31072;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30741__auto____1 = (function (state_31064){
while(true){
var ret_value__30742__auto__ = (function (){try{while(true){
var result__30743__auto__ = switch__30740__auto__(state_31064);
if(cljs.core.keyword_identical_QMARK_(result__30743__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30743__auto__;
}
break;
}
}catch (e31073){if((e31073 instanceof Object)){
var ex__30744__auto__ = e31073;
var statearr_31074_31204 = state_31064;
(statearr_31074_31204[(5)] = ex__30744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31064);

return cljs.core.cst$kw$recur;
} else {
throw e31073;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30742__auto__,cljs.core.cst$kw$recur)){
var G__31205 = state_31064;
state_31064 = G__31205;
continue;
} else {
return ret_value__30742__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30741__auto__ = function(state_31064){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30741__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30741__auto____1.call(this,state_31064);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30741__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30741__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30741__auto__;
})()
;})(__31184,switch__30740__auto__,c__30842__auto___31197,G__31027_31185,G__31027_31186__$1,n__4376__auto___31183,jobs,results,process,async))
})();
var state__30844__auto__ = (function (){var statearr_31075 = (f__30843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30843__auto__.cljs$core$IFn$_invoke$arity$0() : f__30843__auto__.call(null));
(statearr_31075[(6)] = c__30842__auto___31197);

return statearr_31075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30844__auto__);
});})(__31184,c__30842__auto___31197,G__31027_31185,G__31027_31186__$1,n__4376__auto___31183,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31027_31186__$1)].join('')));

}

var G__31206 = (__31184 + (1));
__31184 = G__31206;
continue;
} else {
}
break;
}

var c__30842__auto___31207 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30842__auto___31207,jobs,results,process,async){
return (function (){
var f__30843__auto__ = (function (){var switch__30740__auto__ = ((function (c__30842__auto___31207,jobs,results,process,async){
return (function (state_31097){
var state_val_31098 = (state_31097[(1)]);
if((state_val_31098 === (1))){
var state_31097__$1 = state_31097;
var statearr_31099_31208 = state_31097__$1;
(statearr_31099_31208[(2)] = null);

(statearr_31099_31208[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31098 === (2))){
var state_31097__$1 = state_31097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31097__$1,(4),from);
} else {
if((state_val_31098 === (3))){
var inst_31095 = (state_31097[(2)]);
var state_31097__$1 = state_31097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31097__$1,inst_31095);
} else {
if((state_val_31098 === (4))){
var inst_31078 = (state_31097[(7)]);
var inst_31078__$1 = (state_31097[(2)]);
var inst_31079 = (inst_31078__$1 == null);
var state_31097__$1 = (function (){var statearr_31100 = state_31097;
(statearr_31100[(7)] = inst_31078__$1);

return statearr_31100;
})();
if(cljs.core.truth_(inst_31079)){
var statearr_31101_31209 = state_31097__$1;
(statearr_31101_31209[(1)] = (5));

} else {
var statearr_31102_31210 = state_31097__$1;
(statearr_31102_31210[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31098 === (5))){
var inst_31081 = cljs.core.async.close_BANG_(jobs);
var state_31097__$1 = state_31097;
var statearr_31103_31211 = state_31097__$1;
(statearr_31103_31211[(2)] = inst_31081);

(statearr_31103_31211[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31098 === (6))){
var inst_31078 = (state_31097[(7)]);
var inst_31083 = (state_31097[(8)]);
var inst_31083__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31084 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31085 = [inst_31078,inst_31083__$1];
var inst_31086 = (new cljs.core.PersistentVector(null,2,(5),inst_31084,inst_31085,null));
var state_31097__$1 = (function (){var statearr_31104 = state_31097;
(statearr_31104[(8)] = inst_31083__$1);

return statearr_31104;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31097__$1,(8),jobs,inst_31086);
} else {
if((state_val_31098 === (7))){
var inst_31093 = (state_31097[(2)]);
var state_31097__$1 = state_31097;
var statearr_31105_31212 = state_31097__$1;
(statearr_31105_31212[(2)] = inst_31093);

(statearr_31105_31212[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31098 === (8))){
var inst_31083 = (state_31097[(8)]);
var inst_31088 = (state_31097[(2)]);
var state_31097__$1 = (function (){var statearr_31106 = state_31097;
(statearr_31106[(9)] = inst_31088);

return statearr_31106;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31097__$1,(9),results,inst_31083);
} else {
if((state_val_31098 === (9))){
var inst_31090 = (state_31097[(2)]);
var state_31097__$1 = (function (){var statearr_31107 = state_31097;
(statearr_31107[(10)] = inst_31090);

return statearr_31107;
})();
var statearr_31108_31213 = state_31097__$1;
(statearr_31108_31213[(2)] = null);

(statearr_31108_31213[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__30842__auto___31207,jobs,results,process,async))
;
return ((function (switch__30740__auto__,c__30842__auto___31207,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30741__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30741__auto____0 = (function (){
var statearr_31109 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31109[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30741__auto__);

(statearr_31109[(1)] = (1));

return statearr_31109;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30741__auto____1 = (function (state_31097){
while(true){
var ret_value__30742__auto__ = (function (){try{while(true){
var result__30743__auto__ = switch__30740__auto__(state_31097);
if(cljs.core.keyword_identical_QMARK_(result__30743__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30743__auto__;
}
break;
}
}catch (e31110){if((e31110 instanceof Object)){
var ex__30744__auto__ = e31110;
var statearr_31111_31214 = state_31097;
(statearr_31111_31214[(5)] = ex__30744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31097);

return cljs.core.cst$kw$recur;
} else {
throw e31110;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30742__auto__,cljs.core.cst$kw$recur)){
var G__31215 = state_31097;
state_31097 = G__31215;
continue;
} else {
return ret_value__30742__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30741__auto__ = function(state_31097){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30741__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30741__auto____1.call(this,state_31097);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30741__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30741__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30741__auto__;
})()
;})(switch__30740__auto__,c__30842__auto___31207,jobs,results,process,async))
})();
var state__30844__auto__ = (function (){var statearr_31112 = (f__30843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30843__auto__.cljs$core$IFn$_invoke$arity$0() : f__30843__auto__.call(null));
(statearr_31112[(6)] = c__30842__auto___31207);

return statearr_31112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30844__auto__);
});})(c__30842__auto___31207,jobs,results,process,async))
);


var c__30842__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30842__auto__,jobs,results,process,async){
return (function (){
var f__30843__auto__ = (function (){var switch__30740__auto__ = ((function (c__30842__auto__,jobs,results,process,async){
return (function (state_31150){
var state_val_31151 = (state_31150[(1)]);
if((state_val_31151 === (7))){
var inst_31146 = (state_31150[(2)]);
var state_31150__$1 = state_31150;
var statearr_31152_31216 = state_31150__$1;
(statearr_31152_31216[(2)] = inst_31146);

(statearr_31152_31216[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31151 === (20))){
var state_31150__$1 = state_31150;
var statearr_31153_31217 = state_31150__$1;
(statearr_31153_31217[(2)] = null);

(statearr_31153_31217[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31151 === (1))){
var state_31150__$1 = state_31150;
var statearr_31154_31218 = state_31150__$1;
(statearr_31154_31218[(2)] = null);

(statearr_31154_31218[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31151 === (4))){
var inst_31115 = (state_31150[(7)]);
var inst_31115__$1 = (state_31150[(2)]);
var inst_31116 = (inst_31115__$1 == null);
var state_31150__$1 = (function (){var statearr_31155 = state_31150;
(statearr_31155[(7)] = inst_31115__$1);

return statearr_31155;
})();
if(cljs.core.truth_(inst_31116)){
var statearr_31156_31219 = state_31150__$1;
(statearr_31156_31219[(1)] = (5));

} else {
var statearr_31157_31220 = state_31150__$1;
(statearr_31157_31220[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31151 === (15))){
var inst_31128 = (state_31150[(8)]);
var state_31150__$1 = state_31150;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31150__$1,(18),to,inst_31128);
} else {
if((state_val_31151 === (21))){
var inst_31141 = (state_31150[(2)]);
var state_31150__$1 = state_31150;
var statearr_31158_31221 = state_31150__$1;
(statearr_31158_31221[(2)] = inst_31141);

(statearr_31158_31221[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31151 === (13))){
var inst_31143 = (state_31150[(2)]);
var state_31150__$1 = (function (){var statearr_31159 = state_31150;
(statearr_31159[(9)] = inst_31143);

return statearr_31159;
})();
var statearr_31160_31222 = state_31150__$1;
(statearr_31160_31222[(2)] = null);

(statearr_31160_31222[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31151 === (6))){
var inst_31115 = (state_31150[(7)]);
var state_31150__$1 = state_31150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31150__$1,(11),inst_31115);
} else {
if((state_val_31151 === (17))){
var inst_31136 = (state_31150[(2)]);
var state_31150__$1 = state_31150;
if(cljs.core.truth_(inst_31136)){
var statearr_31161_31223 = state_31150__$1;
(statearr_31161_31223[(1)] = (19));

} else {
var statearr_31162_31224 = state_31150__$1;
(statearr_31162_31224[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31151 === (3))){
var inst_31148 = (state_31150[(2)]);
var state_31150__$1 = state_31150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31150__$1,inst_31148);
} else {
if((state_val_31151 === (12))){
var inst_31125 = (state_31150[(10)]);
var state_31150__$1 = state_31150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31150__$1,(14),inst_31125);
} else {
if((state_val_31151 === (2))){
var state_31150__$1 = state_31150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31150__$1,(4),results);
} else {
if((state_val_31151 === (19))){
var state_31150__$1 = state_31150;
var statearr_31163_31225 = state_31150__$1;
(statearr_31163_31225[(2)] = null);

(statearr_31163_31225[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31151 === (11))){
var inst_31125 = (state_31150[(2)]);
var state_31150__$1 = (function (){var statearr_31164 = state_31150;
(statearr_31164[(10)] = inst_31125);

return statearr_31164;
})();
var statearr_31165_31226 = state_31150__$1;
(statearr_31165_31226[(2)] = null);

(statearr_31165_31226[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31151 === (9))){
var state_31150__$1 = state_31150;
var statearr_31166_31227 = state_31150__$1;
(statearr_31166_31227[(2)] = null);

(statearr_31166_31227[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31151 === (5))){
var state_31150__$1 = state_31150;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31167_31228 = state_31150__$1;
(statearr_31167_31228[(1)] = (8));

} else {
var statearr_31168_31229 = state_31150__$1;
(statearr_31168_31229[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31151 === (14))){
var inst_31128 = (state_31150[(8)]);
var inst_31130 = (state_31150[(11)]);
var inst_31128__$1 = (state_31150[(2)]);
var inst_31129 = (inst_31128__$1 == null);
var inst_31130__$1 = cljs.core.not(inst_31129);
var state_31150__$1 = (function (){var statearr_31169 = state_31150;
(statearr_31169[(8)] = inst_31128__$1);

(statearr_31169[(11)] = inst_31130__$1);

return statearr_31169;
})();
if(inst_31130__$1){
var statearr_31170_31230 = state_31150__$1;
(statearr_31170_31230[(1)] = (15));

} else {
var statearr_31171_31231 = state_31150__$1;
(statearr_31171_31231[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31151 === (16))){
var inst_31130 = (state_31150[(11)]);
var state_31150__$1 = state_31150;
var statearr_31172_31232 = state_31150__$1;
(statearr_31172_31232[(2)] = inst_31130);

(statearr_31172_31232[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31151 === (10))){
var inst_31122 = (state_31150[(2)]);
var state_31150__$1 = state_31150;
var statearr_31173_31233 = state_31150__$1;
(statearr_31173_31233[(2)] = inst_31122);

(statearr_31173_31233[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31151 === (18))){
var inst_31133 = (state_31150[(2)]);
var state_31150__$1 = state_31150;
var statearr_31174_31234 = state_31150__$1;
(statearr_31174_31234[(2)] = inst_31133);

(statearr_31174_31234[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31151 === (8))){
var inst_31119 = cljs.core.async.close_BANG_(to);
var state_31150__$1 = state_31150;
var statearr_31175_31235 = state_31150__$1;
(statearr_31175_31235[(2)] = inst_31119);

(statearr_31175_31235[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__30842__auto__,jobs,results,process,async))
;
return ((function (switch__30740__auto__,c__30842__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30741__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30741__auto____0 = (function (){
var statearr_31176 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31176[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30741__auto__);

(statearr_31176[(1)] = (1));

return statearr_31176;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30741__auto____1 = (function (state_31150){
while(true){
var ret_value__30742__auto__ = (function (){try{while(true){
var result__30743__auto__ = switch__30740__auto__(state_31150);
if(cljs.core.keyword_identical_QMARK_(result__30743__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30743__auto__;
}
break;
}
}catch (e31177){if((e31177 instanceof Object)){
var ex__30744__auto__ = e31177;
var statearr_31178_31236 = state_31150;
(statearr_31178_31236[(5)] = ex__30744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31150);

return cljs.core.cst$kw$recur;
} else {
throw e31177;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30742__auto__,cljs.core.cst$kw$recur)){
var G__31237 = state_31150;
state_31150 = G__31237;
continue;
} else {
return ret_value__30742__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30741__auto__ = function(state_31150){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30741__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30741__auto____1.call(this,state_31150);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30741__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30741__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30741__auto__;
})()
;})(switch__30740__auto__,c__30842__auto__,jobs,results,process,async))
})();
var state__30844__auto__ = (function (){var statearr_31179 = (f__30843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30843__auto__.cljs$core$IFn$_invoke$arity$0() : f__30843__auto__.call(null));
(statearr_31179[(6)] = c__30842__auto__);

return statearr_31179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30844__auto__);
});})(c__30842__auto__,jobs,results,process,async))
);

return c__30842__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31239 = arguments.length;
switch (G__31239) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31242 = arguments.length;
switch (G__31242) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31245 = arguments.length;
switch (G__31245) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30842__auto___31294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30842__auto___31294,tc,fc){
return (function (){
var f__30843__auto__ = (function (){var switch__30740__auto__ = ((function (c__30842__auto___31294,tc,fc){
return (function (state_31271){
var state_val_31272 = (state_31271[(1)]);
if((state_val_31272 === (7))){
var inst_31267 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
var statearr_31273_31295 = state_31271__$1;
(statearr_31273_31295[(2)] = inst_31267);

(statearr_31273_31295[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31272 === (1))){
var state_31271__$1 = state_31271;
var statearr_31274_31296 = state_31271__$1;
(statearr_31274_31296[(2)] = null);

(statearr_31274_31296[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31272 === (4))){
var inst_31248 = (state_31271[(7)]);
var inst_31248__$1 = (state_31271[(2)]);
var inst_31249 = (inst_31248__$1 == null);
var state_31271__$1 = (function (){var statearr_31275 = state_31271;
(statearr_31275[(7)] = inst_31248__$1);

return statearr_31275;
})();
if(cljs.core.truth_(inst_31249)){
var statearr_31276_31297 = state_31271__$1;
(statearr_31276_31297[(1)] = (5));

} else {
var statearr_31277_31298 = state_31271__$1;
(statearr_31277_31298[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31272 === (13))){
var state_31271__$1 = state_31271;
var statearr_31278_31299 = state_31271__$1;
(statearr_31278_31299[(2)] = null);

(statearr_31278_31299[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31272 === (6))){
var inst_31248 = (state_31271[(7)]);
var inst_31254 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31248) : p.call(null,inst_31248));
var state_31271__$1 = state_31271;
if(cljs.core.truth_(inst_31254)){
var statearr_31279_31300 = state_31271__$1;
(statearr_31279_31300[(1)] = (9));

} else {
var statearr_31280_31301 = state_31271__$1;
(statearr_31280_31301[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31272 === (3))){
var inst_31269 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31271__$1,inst_31269);
} else {
if((state_val_31272 === (12))){
var state_31271__$1 = state_31271;
var statearr_31281_31302 = state_31271__$1;
(statearr_31281_31302[(2)] = null);

(statearr_31281_31302[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31272 === (2))){
var state_31271__$1 = state_31271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31271__$1,(4),ch);
} else {
if((state_val_31272 === (11))){
var inst_31248 = (state_31271[(7)]);
var inst_31258 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31271__$1,(8),inst_31258,inst_31248);
} else {
if((state_val_31272 === (9))){
var state_31271__$1 = state_31271;
var statearr_31282_31303 = state_31271__$1;
(statearr_31282_31303[(2)] = tc);

(statearr_31282_31303[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31272 === (5))){
var inst_31251 = cljs.core.async.close_BANG_(tc);
var inst_31252 = cljs.core.async.close_BANG_(fc);
var state_31271__$1 = (function (){var statearr_31283 = state_31271;
(statearr_31283[(8)] = inst_31251);

return statearr_31283;
})();
var statearr_31284_31304 = state_31271__$1;
(statearr_31284_31304[(2)] = inst_31252);

(statearr_31284_31304[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31272 === (14))){
var inst_31265 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
var statearr_31285_31305 = state_31271__$1;
(statearr_31285_31305[(2)] = inst_31265);

(statearr_31285_31305[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31272 === (10))){
var state_31271__$1 = state_31271;
var statearr_31286_31306 = state_31271__$1;
(statearr_31286_31306[(2)] = fc);

(statearr_31286_31306[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31272 === (8))){
var inst_31260 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
if(cljs.core.truth_(inst_31260)){
var statearr_31287_31307 = state_31271__$1;
(statearr_31287_31307[(1)] = (12));

} else {
var statearr_31288_31308 = state_31271__$1;
(statearr_31288_31308[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__30842__auto___31294,tc,fc))
;
return ((function (switch__30740__auto__,c__30842__auto___31294,tc,fc){
return (function() {
var cljs$core$async$state_machine__30741__auto__ = null;
var cljs$core$async$state_machine__30741__auto____0 = (function (){
var statearr_31289 = [null,null,null,null,null,null,null,null,null];
(statearr_31289[(0)] = cljs$core$async$state_machine__30741__auto__);

(statearr_31289[(1)] = (1));

return statearr_31289;
});
var cljs$core$async$state_machine__30741__auto____1 = (function (state_31271){
while(true){
var ret_value__30742__auto__ = (function (){try{while(true){
var result__30743__auto__ = switch__30740__auto__(state_31271);
if(cljs.core.keyword_identical_QMARK_(result__30743__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30743__auto__;
}
break;
}
}catch (e31290){if((e31290 instanceof Object)){
var ex__30744__auto__ = e31290;
var statearr_31291_31309 = state_31271;
(statearr_31291_31309[(5)] = ex__30744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31271);

return cljs.core.cst$kw$recur;
} else {
throw e31290;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30742__auto__,cljs.core.cst$kw$recur)){
var G__31310 = state_31271;
state_31271 = G__31310;
continue;
} else {
return ret_value__30742__auto__;
}
break;
}
});
cljs$core$async$state_machine__30741__auto__ = function(state_31271){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30741__auto____1.call(this,state_31271);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30741__auto____0;
cljs$core$async$state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30741__auto____1;
return cljs$core$async$state_machine__30741__auto__;
})()
;})(switch__30740__auto__,c__30842__auto___31294,tc,fc))
})();
var state__30844__auto__ = (function (){var statearr_31292 = (f__30843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30843__auto__.cljs$core$IFn$_invoke$arity$0() : f__30843__auto__.call(null));
(statearr_31292[(6)] = c__30842__auto___31294);

return statearr_31292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30844__auto__);
});})(c__30842__auto___31294,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30842__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30842__auto__){
return (function (){
var f__30843__auto__ = (function (){var switch__30740__auto__ = ((function (c__30842__auto__){
return (function (state_31331){
var state_val_31332 = (state_31331[(1)]);
if((state_val_31332 === (7))){
var inst_31327 = (state_31331[(2)]);
var state_31331__$1 = state_31331;
var statearr_31333_31351 = state_31331__$1;
(statearr_31333_31351[(2)] = inst_31327);

(statearr_31333_31351[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31332 === (1))){
var inst_31311 = init;
var state_31331__$1 = (function (){var statearr_31334 = state_31331;
(statearr_31334[(7)] = inst_31311);

return statearr_31334;
})();
var statearr_31335_31352 = state_31331__$1;
(statearr_31335_31352[(2)] = null);

(statearr_31335_31352[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31332 === (4))){
var inst_31314 = (state_31331[(8)]);
var inst_31314__$1 = (state_31331[(2)]);
var inst_31315 = (inst_31314__$1 == null);
var state_31331__$1 = (function (){var statearr_31336 = state_31331;
(statearr_31336[(8)] = inst_31314__$1);

return statearr_31336;
})();
if(cljs.core.truth_(inst_31315)){
var statearr_31337_31353 = state_31331__$1;
(statearr_31337_31353[(1)] = (5));

} else {
var statearr_31338_31354 = state_31331__$1;
(statearr_31338_31354[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31332 === (6))){
var inst_31318 = (state_31331[(9)]);
var inst_31311 = (state_31331[(7)]);
var inst_31314 = (state_31331[(8)]);
var inst_31318__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31311,inst_31314) : f.call(null,inst_31311,inst_31314));
var inst_31319 = cljs.core.reduced_QMARK_(inst_31318__$1);
var state_31331__$1 = (function (){var statearr_31339 = state_31331;
(statearr_31339[(9)] = inst_31318__$1);

return statearr_31339;
})();
if(inst_31319){
var statearr_31340_31355 = state_31331__$1;
(statearr_31340_31355[(1)] = (8));

} else {
var statearr_31341_31356 = state_31331__$1;
(statearr_31341_31356[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31332 === (3))){
var inst_31329 = (state_31331[(2)]);
var state_31331__$1 = state_31331;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31331__$1,inst_31329);
} else {
if((state_val_31332 === (2))){
var state_31331__$1 = state_31331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31331__$1,(4),ch);
} else {
if((state_val_31332 === (9))){
var inst_31318 = (state_31331[(9)]);
var inst_31311 = inst_31318;
var state_31331__$1 = (function (){var statearr_31342 = state_31331;
(statearr_31342[(7)] = inst_31311);

return statearr_31342;
})();
var statearr_31343_31357 = state_31331__$1;
(statearr_31343_31357[(2)] = null);

(statearr_31343_31357[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31332 === (5))){
var inst_31311 = (state_31331[(7)]);
var state_31331__$1 = state_31331;
var statearr_31344_31358 = state_31331__$1;
(statearr_31344_31358[(2)] = inst_31311);

(statearr_31344_31358[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31332 === (10))){
var inst_31325 = (state_31331[(2)]);
var state_31331__$1 = state_31331;
var statearr_31345_31359 = state_31331__$1;
(statearr_31345_31359[(2)] = inst_31325);

(statearr_31345_31359[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31332 === (8))){
var inst_31318 = (state_31331[(9)]);
var inst_31321 = cljs.core.deref(inst_31318);
var state_31331__$1 = state_31331;
var statearr_31346_31360 = state_31331__$1;
(statearr_31346_31360[(2)] = inst_31321);

(statearr_31346_31360[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__30842__auto__))
;
return ((function (switch__30740__auto__,c__30842__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30741__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30741__auto____0 = (function (){
var statearr_31347 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31347[(0)] = cljs$core$async$reduce_$_state_machine__30741__auto__);

(statearr_31347[(1)] = (1));

return statearr_31347;
});
var cljs$core$async$reduce_$_state_machine__30741__auto____1 = (function (state_31331){
while(true){
var ret_value__30742__auto__ = (function (){try{while(true){
var result__30743__auto__ = switch__30740__auto__(state_31331);
if(cljs.core.keyword_identical_QMARK_(result__30743__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30743__auto__;
}
break;
}
}catch (e31348){if((e31348 instanceof Object)){
var ex__30744__auto__ = e31348;
var statearr_31349_31361 = state_31331;
(statearr_31349_31361[(5)] = ex__30744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31331);

return cljs.core.cst$kw$recur;
} else {
throw e31348;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30742__auto__,cljs.core.cst$kw$recur)){
var G__31362 = state_31331;
state_31331 = G__31362;
continue;
} else {
return ret_value__30742__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30741__auto__ = function(state_31331){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30741__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30741__auto____1.call(this,state_31331);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30741__auto____0;
cljs$core$async$reduce_$_state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30741__auto____1;
return cljs$core$async$reduce_$_state_machine__30741__auto__;
})()
;})(switch__30740__auto__,c__30842__auto__))
})();
var state__30844__auto__ = (function (){var statearr_31350 = (f__30843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30843__auto__.cljs$core$IFn$_invoke$arity$0() : f__30843__auto__.call(null));
(statearr_31350[(6)] = c__30842__auto__);

return statearr_31350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30844__auto__);
});})(c__30842__auto__))
);

return c__30842__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30842__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30842__auto__,f__$1){
return (function (){
var f__30843__auto__ = (function (){var switch__30740__auto__ = ((function (c__30842__auto__,f__$1){
return (function (state_31368){
var state_val_31369 = (state_31368[(1)]);
if((state_val_31369 === (1))){
var inst_31363 = cljs.core.async.reduce(f__$1,init,ch);
var state_31368__$1 = state_31368;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31368__$1,(2),inst_31363);
} else {
if((state_val_31369 === (2))){
var inst_31365 = (state_31368[(2)]);
var inst_31366 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31365) : f__$1.call(null,inst_31365));
var state_31368__$1 = state_31368;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31368__$1,inst_31366);
} else {
return null;
}
}
});})(c__30842__auto__,f__$1))
;
return ((function (switch__30740__auto__,c__30842__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30741__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30741__auto____0 = (function (){
var statearr_31370 = [null,null,null,null,null,null,null];
(statearr_31370[(0)] = cljs$core$async$transduce_$_state_machine__30741__auto__);

(statearr_31370[(1)] = (1));

return statearr_31370;
});
var cljs$core$async$transduce_$_state_machine__30741__auto____1 = (function (state_31368){
while(true){
var ret_value__30742__auto__ = (function (){try{while(true){
var result__30743__auto__ = switch__30740__auto__(state_31368);
if(cljs.core.keyword_identical_QMARK_(result__30743__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30743__auto__;
}
break;
}
}catch (e31371){if((e31371 instanceof Object)){
var ex__30744__auto__ = e31371;
var statearr_31372_31374 = state_31368;
(statearr_31372_31374[(5)] = ex__30744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31368);

return cljs.core.cst$kw$recur;
} else {
throw e31371;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30742__auto__,cljs.core.cst$kw$recur)){
var G__31375 = state_31368;
state_31368 = G__31375;
continue;
} else {
return ret_value__30742__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30741__auto__ = function(state_31368){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30741__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30741__auto____1.call(this,state_31368);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30741__auto____0;
cljs$core$async$transduce_$_state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30741__auto____1;
return cljs$core$async$transduce_$_state_machine__30741__auto__;
})()
;})(switch__30740__auto__,c__30842__auto__,f__$1))
})();
var state__30844__auto__ = (function (){var statearr_31373 = (f__30843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30843__auto__.cljs$core$IFn$_invoke$arity$0() : f__30843__auto__.call(null));
(statearr_31373[(6)] = c__30842__auto__);

return statearr_31373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30844__auto__);
});})(c__30842__auto__,f__$1))
);

return c__30842__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31377 = arguments.length;
switch (G__31377) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30842__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30842__auto__){
return (function (){
var f__30843__auto__ = (function (){var switch__30740__auto__ = ((function (c__30842__auto__){
return (function (state_31402){
var state_val_31403 = (state_31402[(1)]);
if((state_val_31403 === (7))){
var inst_31384 = (state_31402[(2)]);
var state_31402__$1 = state_31402;
var statearr_31404_31425 = state_31402__$1;
(statearr_31404_31425[(2)] = inst_31384);

(statearr_31404_31425[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31403 === (1))){
var inst_31378 = cljs.core.seq(coll);
var inst_31379 = inst_31378;
var state_31402__$1 = (function (){var statearr_31405 = state_31402;
(statearr_31405[(7)] = inst_31379);

return statearr_31405;
})();
var statearr_31406_31426 = state_31402__$1;
(statearr_31406_31426[(2)] = null);

(statearr_31406_31426[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31403 === (4))){
var inst_31379 = (state_31402[(7)]);
var inst_31382 = cljs.core.first(inst_31379);
var state_31402__$1 = state_31402;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31402__$1,(7),ch,inst_31382);
} else {
if((state_val_31403 === (13))){
var inst_31396 = (state_31402[(2)]);
var state_31402__$1 = state_31402;
var statearr_31407_31427 = state_31402__$1;
(statearr_31407_31427[(2)] = inst_31396);

(statearr_31407_31427[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31403 === (6))){
var inst_31387 = (state_31402[(2)]);
var state_31402__$1 = state_31402;
if(cljs.core.truth_(inst_31387)){
var statearr_31408_31428 = state_31402__$1;
(statearr_31408_31428[(1)] = (8));

} else {
var statearr_31409_31429 = state_31402__$1;
(statearr_31409_31429[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31403 === (3))){
var inst_31400 = (state_31402[(2)]);
var state_31402__$1 = state_31402;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31402__$1,inst_31400);
} else {
if((state_val_31403 === (12))){
var state_31402__$1 = state_31402;
var statearr_31410_31430 = state_31402__$1;
(statearr_31410_31430[(2)] = null);

(statearr_31410_31430[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31403 === (2))){
var inst_31379 = (state_31402[(7)]);
var state_31402__$1 = state_31402;
if(cljs.core.truth_(inst_31379)){
var statearr_31411_31431 = state_31402__$1;
(statearr_31411_31431[(1)] = (4));

} else {
var statearr_31412_31432 = state_31402__$1;
(statearr_31412_31432[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31403 === (11))){
var inst_31393 = cljs.core.async.close_BANG_(ch);
var state_31402__$1 = state_31402;
var statearr_31413_31433 = state_31402__$1;
(statearr_31413_31433[(2)] = inst_31393);

(statearr_31413_31433[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31403 === (9))){
var state_31402__$1 = state_31402;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31414_31434 = state_31402__$1;
(statearr_31414_31434[(1)] = (11));

} else {
var statearr_31415_31435 = state_31402__$1;
(statearr_31415_31435[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31403 === (5))){
var inst_31379 = (state_31402[(7)]);
var state_31402__$1 = state_31402;
var statearr_31416_31436 = state_31402__$1;
(statearr_31416_31436[(2)] = inst_31379);

(statearr_31416_31436[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31403 === (10))){
var inst_31398 = (state_31402[(2)]);
var state_31402__$1 = state_31402;
var statearr_31417_31437 = state_31402__$1;
(statearr_31417_31437[(2)] = inst_31398);

(statearr_31417_31437[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31403 === (8))){
var inst_31379 = (state_31402[(7)]);
var inst_31389 = cljs.core.next(inst_31379);
var inst_31379__$1 = inst_31389;
var state_31402__$1 = (function (){var statearr_31418 = state_31402;
(statearr_31418[(7)] = inst_31379__$1);

return statearr_31418;
})();
var statearr_31419_31438 = state_31402__$1;
(statearr_31419_31438[(2)] = null);

(statearr_31419_31438[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__30842__auto__))
;
return ((function (switch__30740__auto__,c__30842__auto__){
return (function() {
var cljs$core$async$state_machine__30741__auto__ = null;
var cljs$core$async$state_machine__30741__auto____0 = (function (){
var statearr_31420 = [null,null,null,null,null,null,null,null];
(statearr_31420[(0)] = cljs$core$async$state_machine__30741__auto__);

(statearr_31420[(1)] = (1));

return statearr_31420;
});
var cljs$core$async$state_machine__30741__auto____1 = (function (state_31402){
while(true){
var ret_value__30742__auto__ = (function (){try{while(true){
var result__30743__auto__ = switch__30740__auto__(state_31402);
if(cljs.core.keyword_identical_QMARK_(result__30743__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30743__auto__;
}
break;
}
}catch (e31421){if((e31421 instanceof Object)){
var ex__30744__auto__ = e31421;
var statearr_31422_31439 = state_31402;
(statearr_31422_31439[(5)] = ex__30744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31402);

return cljs.core.cst$kw$recur;
} else {
throw e31421;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30742__auto__,cljs.core.cst$kw$recur)){
var G__31440 = state_31402;
state_31402 = G__31440;
continue;
} else {
return ret_value__30742__auto__;
}
break;
}
});
cljs$core$async$state_machine__30741__auto__ = function(state_31402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30741__auto____1.call(this,state_31402);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30741__auto____0;
cljs$core$async$state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30741__auto____1;
return cljs$core$async$state_machine__30741__auto__;
})()
;})(switch__30740__auto__,c__30842__auto__))
})();
var state__30844__auto__ = (function (){var statearr_31423 = (f__30843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30843__auto__.cljs$core$IFn$_invoke$arity$0() : f__30843__auto__.call(null));
(statearr_31423[(6)] = c__30842__auto__);

return statearr_31423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30844__auto__);
});})(c__30842__auto__))
);

return c__30842__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto__.call(null,_));
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4212__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4212__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto__.call(null,m));
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31441 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31441 = (function (ch,cs,meta31442){
this.ch = ch;
this.cs = cs;
this.meta31442 = meta31442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31443,meta31442__$1){
var self__ = this;
var _31443__$1 = this;
return (new cljs.core.async.t_cljs$core$async31441(self__.ch,self__.cs,meta31442__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31441.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31443){
var self__ = this;
var _31443__$1 = this;
return self__.meta31442;
});})(cs))
;

cljs.core.async.t_cljs$core$async31441.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31441.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31441.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31441.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31441.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31441.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31441.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta31442], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31441.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31441";

cljs.core.async.t_cljs$core$async31441.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async31441");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31441.
 */
cljs.core.async.__GT_t_cljs$core$async31441 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31441(ch__$1,cs__$1,meta31442){
return (new cljs.core.async.t_cljs$core$async31441(ch__$1,cs__$1,meta31442));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31441(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30842__auto___31663 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30842__auto___31663,cs,m,dchan,dctr,done){
return (function (){
var f__30843__auto__ = (function (){var switch__30740__auto__ = ((function (c__30842__auto___31663,cs,m,dchan,dctr,done){
return (function (state_31578){
var state_val_31579 = (state_31578[(1)]);
if((state_val_31579 === (7))){
var inst_31574 = (state_31578[(2)]);
var state_31578__$1 = state_31578;
var statearr_31580_31664 = state_31578__$1;
(statearr_31580_31664[(2)] = inst_31574);

(statearr_31580_31664[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (20))){
var inst_31477 = (state_31578[(7)]);
var inst_31489 = cljs.core.first(inst_31477);
var inst_31490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31489,(0),null);
var inst_31491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31489,(1),null);
var state_31578__$1 = (function (){var statearr_31581 = state_31578;
(statearr_31581[(8)] = inst_31490);

return statearr_31581;
})();
if(cljs.core.truth_(inst_31491)){
var statearr_31582_31665 = state_31578__$1;
(statearr_31582_31665[(1)] = (22));

} else {
var statearr_31583_31666 = state_31578__$1;
(statearr_31583_31666[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (27))){
var inst_31521 = (state_31578[(9)]);
var inst_31446 = (state_31578[(10)]);
var inst_31519 = (state_31578[(11)]);
var inst_31526 = (state_31578[(12)]);
var inst_31526__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31519,inst_31521);
var inst_31527 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31526__$1,inst_31446,done);
var state_31578__$1 = (function (){var statearr_31584 = state_31578;
(statearr_31584[(12)] = inst_31526__$1);

return statearr_31584;
})();
if(cljs.core.truth_(inst_31527)){
var statearr_31585_31667 = state_31578__$1;
(statearr_31585_31667[(1)] = (30));

} else {
var statearr_31586_31668 = state_31578__$1;
(statearr_31586_31668[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (1))){
var state_31578__$1 = state_31578;
var statearr_31587_31669 = state_31578__$1;
(statearr_31587_31669[(2)] = null);

(statearr_31587_31669[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (24))){
var inst_31477 = (state_31578[(7)]);
var inst_31496 = (state_31578[(2)]);
var inst_31497 = cljs.core.next(inst_31477);
var inst_31455 = inst_31497;
var inst_31456 = null;
var inst_31457 = (0);
var inst_31458 = (0);
var state_31578__$1 = (function (){var statearr_31588 = state_31578;
(statearr_31588[(13)] = inst_31456);

(statearr_31588[(14)] = inst_31496);

(statearr_31588[(15)] = inst_31458);

(statearr_31588[(16)] = inst_31457);

(statearr_31588[(17)] = inst_31455);

return statearr_31588;
})();
var statearr_31589_31670 = state_31578__$1;
(statearr_31589_31670[(2)] = null);

(statearr_31589_31670[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (39))){
var state_31578__$1 = state_31578;
var statearr_31593_31671 = state_31578__$1;
(statearr_31593_31671[(2)] = null);

(statearr_31593_31671[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (4))){
var inst_31446 = (state_31578[(10)]);
var inst_31446__$1 = (state_31578[(2)]);
var inst_31447 = (inst_31446__$1 == null);
var state_31578__$1 = (function (){var statearr_31594 = state_31578;
(statearr_31594[(10)] = inst_31446__$1);

return statearr_31594;
})();
if(cljs.core.truth_(inst_31447)){
var statearr_31595_31672 = state_31578__$1;
(statearr_31595_31672[(1)] = (5));

} else {
var statearr_31596_31673 = state_31578__$1;
(statearr_31596_31673[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (15))){
var inst_31456 = (state_31578[(13)]);
var inst_31458 = (state_31578[(15)]);
var inst_31457 = (state_31578[(16)]);
var inst_31455 = (state_31578[(17)]);
var inst_31473 = (state_31578[(2)]);
var inst_31474 = (inst_31458 + (1));
var tmp31590 = inst_31456;
var tmp31591 = inst_31457;
var tmp31592 = inst_31455;
var inst_31455__$1 = tmp31592;
var inst_31456__$1 = tmp31590;
var inst_31457__$1 = tmp31591;
var inst_31458__$1 = inst_31474;
var state_31578__$1 = (function (){var statearr_31597 = state_31578;
(statearr_31597[(13)] = inst_31456__$1);

(statearr_31597[(15)] = inst_31458__$1);

(statearr_31597[(18)] = inst_31473);

(statearr_31597[(16)] = inst_31457__$1);

(statearr_31597[(17)] = inst_31455__$1);

return statearr_31597;
})();
var statearr_31598_31674 = state_31578__$1;
(statearr_31598_31674[(2)] = null);

(statearr_31598_31674[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (21))){
var inst_31500 = (state_31578[(2)]);
var state_31578__$1 = state_31578;
var statearr_31602_31675 = state_31578__$1;
(statearr_31602_31675[(2)] = inst_31500);

(statearr_31602_31675[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (31))){
var inst_31526 = (state_31578[(12)]);
var inst_31530 = done(null);
var inst_31531 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31526);
var state_31578__$1 = (function (){var statearr_31603 = state_31578;
(statearr_31603[(19)] = inst_31530);

return statearr_31603;
})();
var statearr_31604_31676 = state_31578__$1;
(statearr_31604_31676[(2)] = inst_31531);

(statearr_31604_31676[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (32))){
var inst_31520 = (state_31578[(20)]);
var inst_31521 = (state_31578[(9)]);
var inst_31519 = (state_31578[(11)]);
var inst_31518 = (state_31578[(21)]);
var inst_31533 = (state_31578[(2)]);
var inst_31534 = (inst_31521 + (1));
var tmp31599 = inst_31520;
var tmp31600 = inst_31519;
var tmp31601 = inst_31518;
var inst_31518__$1 = tmp31601;
var inst_31519__$1 = tmp31600;
var inst_31520__$1 = tmp31599;
var inst_31521__$1 = inst_31534;
var state_31578__$1 = (function (){var statearr_31605 = state_31578;
(statearr_31605[(22)] = inst_31533);

(statearr_31605[(20)] = inst_31520__$1);

(statearr_31605[(9)] = inst_31521__$1);

(statearr_31605[(11)] = inst_31519__$1);

(statearr_31605[(21)] = inst_31518__$1);

return statearr_31605;
})();
var statearr_31606_31677 = state_31578__$1;
(statearr_31606_31677[(2)] = null);

(statearr_31606_31677[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (40))){
var inst_31546 = (state_31578[(23)]);
var inst_31550 = done(null);
var inst_31551 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31546);
var state_31578__$1 = (function (){var statearr_31607 = state_31578;
(statearr_31607[(24)] = inst_31550);

return statearr_31607;
})();
var statearr_31608_31678 = state_31578__$1;
(statearr_31608_31678[(2)] = inst_31551);

(statearr_31608_31678[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (33))){
var inst_31537 = (state_31578[(25)]);
var inst_31539 = cljs.core.chunked_seq_QMARK_(inst_31537);
var state_31578__$1 = state_31578;
if(inst_31539){
var statearr_31609_31679 = state_31578__$1;
(statearr_31609_31679[(1)] = (36));

} else {
var statearr_31610_31680 = state_31578__$1;
(statearr_31610_31680[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (13))){
var inst_31467 = (state_31578[(26)]);
var inst_31470 = cljs.core.async.close_BANG_(inst_31467);
var state_31578__$1 = state_31578;
var statearr_31611_31681 = state_31578__$1;
(statearr_31611_31681[(2)] = inst_31470);

(statearr_31611_31681[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (22))){
var inst_31490 = (state_31578[(8)]);
var inst_31493 = cljs.core.async.close_BANG_(inst_31490);
var state_31578__$1 = state_31578;
var statearr_31612_31682 = state_31578__$1;
(statearr_31612_31682[(2)] = inst_31493);

(statearr_31612_31682[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (36))){
var inst_31537 = (state_31578[(25)]);
var inst_31541 = cljs.core.chunk_first(inst_31537);
var inst_31542 = cljs.core.chunk_rest(inst_31537);
var inst_31543 = cljs.core.count(inst_31541);
var inst_31518 = inst_31542;
var inst_31519 = inst_31541;
var inst_31520 = inst_31543;
var inst_31521 = (0);
var state_31578__$1 = (function (){var statearr_31613 = state_31578;
(statearr_31613[(20)] = inst_31520);

(statearr_31613[(9)] = inst_31521);

(statearr_31613[(11)] = inst_31519);

(statearr_31613[(21)] = inst_31518);

return statearr_31613;
})();
var statearr_31614_31683 = state_31578__$1;
(statearr_31614_31683[(2)] = null);

(statearr_31614_31683[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (41))){
var inst_31537 = (state_31578[(25)]);
var inst_31553 = (state_31578[(2)]);
var inst_31554 = cljs.core.next(inst_31537);
var inst_31518 = inst_31554;
var inst_31519 = null;
var inst_31520 = (0);
var inst_31521 = (0);
var state_31578__$1 = (function (){var statearr_31615 = state_31578;
(statearr_31615[(27)] = inst_31553);

(statearr_31615[(20)] = inst_31520);

(statearr_31615[(9)] = inst_31521);

(statearr_31615[(11)] = inst_31519);

(statearr_31615[(21)] = inst_31518);

return statearr_31615;
})();
var statearr_31616_31684 = state_31578__$1;
(statearr_31616_31684[(2)] = null);

(statearr_31616_31684[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (43))){
var state_31578__$1 = state_31578;
var statearr_31617_31685 = state_31578__$1;
(statearr_31617_31685[(2)] = null);

(statearr_31617_31685[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (29))){
var inst_31562 = (state_31578[(2)]);
var state_31578__$1 = state_31578;
var statearr_31618_31686 = state_31578__$1;
(statearr_31618_31686[(2)] = inst_31562);

(statearr_31618_31686[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (44))){
var inst_31571 = (state_31578[(2)]);
var state_31578__$1 = (function (){var statearr_31619 = state_31578;
(statearr_31619[(28)] = inst_31571);

return statearr_31619;
})();
var statearr_31620_31687 = state_31578__$1;
(statearr_31620_31687[(2)] = null);

(statearr_31620_31687[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (6))){
var inst_31510 = (state_31578[(29)]);
var inst_31509 = cljs.core.deref(cs);
var inst_31510__$1 = cljs.core.keys(inst_31509);
var inst_31511 = cljs.core.count(inst_31510__$1);
var inst_31512 = cljs.core.reset_BANG_(dctr,inst_31511);
var inst_31517 = cljs.core.seq(inst_31510__$1);
var inst_31518 = inst_31517;
var inst_31519 = null;
var inst_31520 = (0);
var inst_31521 = (0);
var state_31578__$1 = (function (){var statearr_31621 = state_31578;
(statearr_31621[(30)] = inst_31512);

(statearr_31621[(20)] = inst_31520);

(statearr_31621[(9)] = inst_31521);

(statearr_31621[(29)] = inst_31510__$1);

(statearr_31621[(11)] = inst_31519);

(statearr_31621[(21)] = inst_31518);

return statearr_31621;
})();
var statearr_31622_31688 = state_31578__$1;
(statearr_31622_31688[(2)] = null);

(statearr_31622_31688[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (28))){
var inst_31537 = (state_31578[(25)]);
var inst_31518 = (state_31578[(21)]);
var inst_31537__$1 = cljs.core.seq(inst_31518);
var state_31578__$1 = (function (){var statearr_31623 = state_31578;
(statearr_31623[(25)] = inst_31537__$1);

return statearr_31623;
})();
if(inst_31537__$1){
var statearr_31624_31689 = state_31578__$1;
(statearr_31624_31689[(1)] = (33));

} else {
var statearr_31625_31690 = state_31578__$1;
(statearr_31625_31690[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (25))){
var inst_31520 = (state_31578[(20)]);
var inst_31521 = (state_31578[(9)]);
var inst_31523 = (inst_31521 < inst_31520);
var inst_31524 = inst_31523;
var state_31578__$1 = state_31578;
if(cljs.core.truth_(inst_31524)){
var statearr_31626_31691 = state_31578__$1;
(statearr_31626_31691[(1)] = (27));

} else {
var statearr_31627_31692 = state_31578__$1;
(statearr_31627_31692[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (34))){
var state_31578__$1 = state_31578;
var statearr_31628_31693 = state_31578__$1;
(statearr_31628_31693[(2)] = null);

(statearr_31628_31693[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (17))){
var state_31578__$1 = state_31578;
var statearr_31629_31694 = state_31578__$1;
(statearr_31629_31694[(2)] = null);

(statearr_31629_31694[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (3))){
var inst_31576 = (state_31578[(2)]);
var state_31578__$1 = state_31578;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31578__$1,inst_31576);
} else {
if((state_val_31579 === (12))){
var inst_31505 = (state_31578[(2)]);
var state_31578__$1 = state_31578;
var statearr_31630_31695 = state_31578__$1;
(statearr_31630_31695[(2)] = inst_31505);

(statearr_31630_31695[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (2))){
var state_31578__$1 = state_31578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31578__$1,(4),ch);
} else {
if((state_val_31579 === (23))){
var state_31578__$1 = state_31578;
var statearr_31631_31696 = state_31578__$1;
(statearr_31631_31696[(2)] = null);

(statearr_31631_31696[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (35))){
var inst_31560 = (state_31578[(2)]);
var state_31578__$1 = state_31578;
var statearr_31632_31697 = state_31578__$1;
(statearr_31632_31697[(2)] = inst_31560);

(statearr_31632_31697[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (19))){
var inst_31477 = (state_31578[(7)]);
var inst_31481 = cljs.core.chunk_first(inst_31477);
var inst_31482 = cljs.core.chunk_rest(inst_31477);
var inst_31483 = cljs.core.count(inst_31481);
var inst_31455 = inst_31482;
var inst_31456 = inst_31481;
var inst_31457 = inst_31483;
var inst_31458 = (0);
var state_31578__$1 = (function (){var statearr_31633 = state_31578;
(statearr_31633[(13)] = inst_31456);

(statearr_31633[(15)] = inst_31458);

(statearr_31633[(16)] = inst_31457);

(statearr_31633[(17)] = inst_31455);

return statearr_31633;
})();
var statearr_31634_31698 = state_31578__$1;
(statearr_31634_31698[(2)] = null);

(statearr_31634_31698[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (11))){
var inst_31477 = (state_31578[(7)]);
var inst_31455 = (state_31578[(17)]);
var inst_31477__$1 = cljs.core.seq(inst_31455);
var state_31578__$1 = (function (){var statearr_31635 = state_31578;
(statearr_31635[(7)] = inst_31477__$1);

return statearr_31635;
})();
if(inst_31477__$1){
var statearr_31636_31699 = state_31578__$1;
(statearr_31636_31699[(1)] = (16));

} else {
var statearr_31637_31700 = state_31578__$1;
(statearr_31637_31700[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (9))){
var inst_31507 = (state_31578[(2)]);
var state_31578__$1 = state_31578;
var statearr_31638_31701 = state_31578__$1;
(statearr_31638_31701[(2)] = inst_31507);

(statearr_31638_31701[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (5))){
var inst_31453 = cljs.core.deref(cs);
var inst_31454 = cljs.core.seq(inst_31453);
var inst_31455 = inst_31454;
var inst_31456 = null;
var inst_31457 = (0);
var inst_31458 = (0);
var state_31578__$1 = (function (){var statearr_31639 = state_31578;
(statearr_31639[(13)] = inst_31456);

(statearr_31639[(15)] = inst_31458);

(statearr_31639[(16)] = inst_31457);

(statearr_31639[(17)] = inst_31455);

return statearr_31639;
})();
var statearr_31640_31702 = state_31578__$1;
(statearr_31640_31702[(2)] = null);

(statearr_31640_31702[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (14))){
var state_31578__$1 = state_31578;
var statearr_31641_31703 = state_31578__$1;
(statearr_31641_31703[(2)] = null);

(statearr_31641_31703[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (45))){
var inst_31568 = (state_31578[(2)]);
var state_31578__$1 = state_31578;
var statearr_31642_31704 = state_31578__$1;
(statearr_31642_31704[(2)] = inst_31568);

(statearr_31642_31704[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (26))){
var inst_31510 = (state_31578[(29)]);
var inst_31564 = (state_31578[(2)]);
var inst_31565 = cljs.core.seq(inst_31510);
var state_31578__$1 = (function (){var statearr_31643 = state_31578;
(statearr_31643[(31)] = inst_31564);

return statearr_31643;
})();
if(inst_31565){
var statearr_31644_31705 = state_31578__$1;
(statearr_31644_31705[(1)] = (42));

} else {
var statearr_31645_31706 = state_31578__$1;
(statearr_31645_31706[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (16))){
var inst_31477 = (state_31578[(7)]);
var inst_31479 = cljs.core.chunked_seq_QMARK_(inst_31477);
var state_31578__$1 = state_31578;
if(inst_31479){
var statearr_31646_31707 = state_31578__$1;
(statearr_31646_31707[(1)] = (19));

} else {
var statearr_31647_31708 = state_31578__$1;
(statearr_31647_31708[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (38))){
var inst_31557 = (state_31578[(2)]);
var state_31578__$1 = state_31578;
var statearr_31648_31709 = state_31578__$1;
(statearr_31648_31709[(2)] = inst_31557);

(statearr_31648_31709[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (30))){
var state_31578__$1 = state_31578;
var statearr_31649_31710 = state_31578__$1;
(statearr_31649_31710[(2)] = null);

(statearr_31649_31710[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (10))){
var inst_31456 = (state_31578[(13)]);
var inst_31458 = (state_31578[(15)]);
var inst_31466 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31456,inst_31458);
var inst_31467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31466,(0),null);
var inst_31468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31466,(1),null);
var state_31578__$1 = (function (){var statearr_31650 = state_31578;
(statearr_31650[(26)] = inst_31467);

return statearr_31650;
})();
if(cljs.core.truth_(inst_31468)){
var statearr_31651_31711 = state_31578__$1;
(statearr_31651_31711[(1)] = (13));

} else {
var statearr_31652_31712 = state_31578__$1;
(statearr_31652_31712[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (18))){
var inst_31503 = (state_31578[(2)]);
var state_31578__$1 = state_31578;
var statearr_31653_31713 = state_31578__$1;
(statearr_31653_31713[(2)] = inst_31503);

(statearr_31653_31713[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (42))){
var state_31578__$1 = state_31578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31578__$1,(45),dchan);
} else {
if((state_val_31579 === (37))){
var inst_31546 = (state_31578[(23)]);
var inst_31446 = (state_31578[(10)]);
var inst_31537 = (state_31578[(25)]);
var inst_31546__$1 = cljs.core.first(inst_31537);
var inst_31547 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31546__$1,inst_31446,done);
var state_31578__$1 = (function (){var statearr_31654 = state_31578;
(statearr_31654[(23)] = inst_31546__$1);

return statearr_31654;
})();
if(cljs.core.truth_(inst_31547)){
var statearr_31655_31714 = state_31578__$1;
(statearr_31655_31714[(1)] = (39));

} else {
var statearr_31656_31715 = state_31578__$1;
(statearr_31656_31715[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31579 === (8))){
var inst_31458 = (state_31578[(15)]);
var inst_31457 = (state_31578[(16)]);
var inst_31460 = (inst_31458 < inst_31457);
var inst_31461 = inst_31460;
var state_31578__$1 = state_31578;
if(cljs.core.truth_(inst_31461)){
var statearr_31657_31716 = state_31578__$1;
(statearr_31657_31716[(1)] = (10));

} else {
var statearr_31658_31717 = state_31578__$1;
(statearr_31658_31717[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__30842__auto___31663,cs,m,dchan,dctr,done))
;
return ((function (switch__30740__auto__,c__30842__auto___31663,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30741__auto__ = null;
var cljs$core$async$mult_$_state_machine__30741__auto____0 = (function (){
var statearr_31659 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31659[(0)] = cljs$core$async$mult_$_state_machine__30741__auto__);

(statearr_31659[(1)] = (1));

return statearr_31659;
});
var cljs$core$async$mult_$_state_machine__30741__auto____1 = (function (state_31578){
while(true){
var ret_value__30742__auto__ = (function (){try{while(true){
var result__30743__auto__ = switch__30740__auto__(state_31578);
if(cljs.core.keyword_identical_QMARK_(result__30743__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30743__auto__;
}
break;
}
}catch (e31660){if((e31660 instanceof Object)){
var ex__30744__auto__ = e31660;
var statearr_31661_31718 = state_31578;
(statearr_31661_31718[(5)] = ex__30744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31578);

return cljs.core.cst$kw$recur;
} else {
throw e31660;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30742__auto__,cljs.core.cst$kw$recur)){
var G__31719 = state_31578;
state_31578 = G__31719;
continue;
} else {
return ret_value__30742__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30741__auto__ = function(state_31578){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30741__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30741__auto____1.call(this,state_31578);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30741__auto____0;
cljs$core$async$mult_$_state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30741__auto____1;
return cljs$core$async$mult_$_state_machine__30741__auto__;
})()
;})(switch__30740__auto__,c__30842__auto___31663,cs,m,dchan,dctr,done))
})();
var state__30844__auto__ = (function (){var statearr_31662 = (f__30843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30843__auto__.cljs$core$IFn$_invoke$arity$0() : f__30843__auto__.call(null));
(statearr_31662[(6)] = c__30842__auto___31663);

return statearr_31662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30844__auto__);
});})(c__30842__auto___31663,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31721 = arguments.length;
switch (G__31721) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto__.call(null,m));
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4212__auto__.call(null,m,state_map));
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4212__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4212__auto__.call(null,m,mode));
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4212__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31733 = arguments.length;
var i__4500__auto___31734 = (0);
while(true){
if((i__4500__auto___31734 < len__4499__auto___31733)){
args__4502__auto__.push((arguments[i__4500__auto___31734]));

var G__31735 = (i__4500__auto___31734 + (1));
i__4500__auto___31734 = G__31735;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31727){
var map__31728 = p__31727;
var map__31728__$1 = ((((!((map__31728 == null)))?(((((map__31728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31728):map__31728);
var opts = map__31728__$1;
var statearr_31730_31736 = state;
(statearr_31730_31736[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__31728,map__31728__$1,opts){
return (function (val){
var statearr_31731_31737 = state;
(statearr_31731_31737[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__31728,map__31728__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_31732_31738 = state;
(statearr_31732_31738[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31723){
var G__31724 = cljs.core.first(seq31723);
var seq31723__$1 = cljs.core.next(seq31723);
var G__31725 = cljs.core.first(seq31723__$1);
var seq31723__$2 = cljs.core.next(seq31723__$1);
var G__31726 = cljs.core.first(seq31723__$2);
var seq31723__$3 = cljs.core.next(seq31723__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31724,G__31725,G__31726,seq31723__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31739 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31739 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta31740){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta31740 = meta31740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31741,meta31740__$1){
var self__ = this;
var _31741__$1 = this;
return (new cljs.core.async.t_cljs$core$async31739(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta31740__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31739.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31741){
var self__ = this;
var _31741__$1 = this;
return self__.meta31740;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31739.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31739.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31739.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31739.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31739.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31739.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31739.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31739.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31739.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta31740], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31739.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31739.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31739";

cljs.core.async.t_cljs$core$async31739.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async31739");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31739.
 */
cljs.core.async.__GT_t_cljs$core$async31739 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31739(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31740){
return (new cljs.core.async.t_cljs$core$async31739(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31740));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31739(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30842__auto___31903 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30842__auto___31903,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30843__auto__ = (function (){var switch__30740__auto__ = ((function (c__30842__auto___31903,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31843){
var state_val_31844 = (state_31843[(1)]);
if((state_val_31844 === (7))){
var inst_31758 = (state_31843[(2)]);
var state_31843__$1 = state_31843;
var statearr_31845_31904 = state_31843__$1;
(statearr_31845_31904[(2)] = inst_31758);

(statearr_31845_31904[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (20))){
var inst_31770 = (state_31843[(7)]);
var state_31843__$1 = state_31843;
var statearr_31846_31905 = state_31843__$1;
(statearr_31846_31905[(2)] = inst_31770);

(statearr_31846_31905[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (27))){
var state_31843__$1 = state_31843;
var statearr_31847_31906 = state_31843__$1;
(statearr_31847_31906[(2)] = null);

(statearr_31847_31906[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (1))){
var inst_31745 = (state_31843[(8)]);
var inst_31745__$1 = calc_state();
var inst_31747 = (inst_31745__$1 == null);
var inst_31748 = cljs.core.not(inst_31747);
var state_31843__$1 = (function (){var statearr_31848 = state_31843;
(statearr_31848[(8)] = inst_31745__$1);

return statearr_31848;
})();
if(inst_31748){
var statearr_31849_31907 = state_31843__$1;
(statearr_31849_31907[(1)] = (2));

} else {
var statearr_31850_31908 = state_31843__$1;
(statearr_31850_31908[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (24))){
var inst_31794 = (state_31843[(9)]);
var inst_31817 = (state_31843[(10)]);
var inst_31803 = (state_31843[(11)]);
var inst_31817__$1 = (inst_31794.cljs$core$IFn$_invoke$arity$1 ? inst_31794.cljs$core$IFn$_invoke$arity$1(inst_31803) : inst_31794.call(null,inst_31803));
var state_31843__$1 = (function (){var statearr_31851 = state_31843;
(statearr_31851[(10)] = inst_31817__$1);

return statearr_31851;
})();
if(cljs.core.truth_(inst_31817__$1)){
var statearr_31852_31909 = state_31843__$1;
(statearr_31852_31909[(1)] = (29));

} else {
var statearr_31853_31910 = state_31843__$1;
(statearr_31853_31910[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (4))){
var inst_31761 = (state_31843[(2)]);
var state_31843__$1 = state_31843;
if(cljs.core.truth_(inst_31761)){
var statearr_31854_31911 = state_31843__$1;
(statearr_31854_31911[(1)] = (8));

} else {
var statearr_31855_31912 = state_31843__$1;
(statearr_31855_31912[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (15))){
var inst_31788 = (state_31843[(2)]);
var state_31843__$1 = state_31843;
if(cljs.core.truth_(inst_31788)){
var statearr_31856_31913 = state_31843__$1;
(statearr_31856_31913[(1)] = (19));

} else {
var statearr_31857_31914 = state_31843__$1;
(statearr_31857_31914[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (21))){
var inst_31793 = (state_31843[(12)]);
var inst_31793__$1 = (state_31843[(2)]);
var inst_31794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31793__$1,cljs.core.cst$kw$solos);
var inst_31795 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31793__$1,cljs.core.cst$kw$mutes);
var inst_31796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31793__$1,cljs.core.cst$kw$reads);
var state_31843__$1 = (function (){var statearr_31858 = state_31843;
(statearr_31858[(9)] = inst_31794);

(statearr_31858[(13)] = inst_31795);

(statearr_31858[(12)] = inst_31793__$1);

return statearr_31858;
})();
return cljs.core.async.ioc_alts_BANG_(state_31843__$1,(22),inst_31796);
} else {
if((state_val_31844 === (31))){
var inst_31825 = (state_31843[(2)]);
var state_31843__$1 = state_31843;
if(cljs.core.truth_(inst_31825)){
var statearr_31859_31915 = state_31843__$1;
(statearr_31859_31915[(1)] = (32));

} else {
var statearr_31860_31916 = state_31843__$1;
(statearr_31860_31916[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (32))){
var inst_31802 = (state_31843[(14)]);
var state_31843__$1 = state_31843;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31843__$1,(35),out,inst_31802);
} else {
if((state_val_31844 === (33))){
var inst_31793 = (state_31843[(12)]);
var inst_31770 = inst_31793;
var state_31843__$1 = (function (){var statearr_31861 = state_31843;
(statearr_31861[(7)] = inst_31770);

return statearr_31861;
})();
var statearr_31862_31917 = state_31843__$1;
(statearr_31862_31917[(2)] = null);

(statearr_31862_31917[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (13))){
var inst_31770 = (state_31843[(7)]);
var inst_31777 = inst_31770.cljs$lang$protocol_mask$partition0$;
var inst_31778 = (inst_31777 & (64));
var inst_31779 = inst_31770.cljs$core$ISeq$;
var inst_31780 = (cljs.core.PROTOCOL_SENTINEL === inst_31779);
var inst_31781 = ((inst_31778) || (inst_31780));
var state_31843__$1 = state_31843;
if(cljs.core.truth_(inst_31781)){
var statearr_31863_31918 = state_31843__$1;
(statearr_31863_31918[(1)] = (16));

} else {
var statearr_31864_31919 = state_31843__$1;
(statearr_31864_31919[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (22))){
var inst_31802 = (state_31843[(14)]);
var inst_31803 = (state_31843[(11)]);
var inst_31801 = (state_31843[(2)]);
var inst_31802__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31801,(0),null);
var inst_31803__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31801,(1),null);
var inst_31804 = (inst_31802__$1 == null);
var inst_31805 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31803__$1,change);
var inst_31806 = ((inst_31804) || (inst_31805));
var state_31843__$1 = (function (){var statearr_31865 = state_31843;
(statearr_31865[(14)] = inst_31802__$1);

(statearr_31865[(11)] = inst_31803__$1);

return statearr_31865;
})();
if(cljs.core.truth_(inst_31806)){
var statearr_31866_31920 = state_31843__$1;
(statearr_31866_31920[(1)] = (23));

} else {
var statearr_31867_31921 = state_31843__$1;
(statearr_31867_31921[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (36))){
var inst_31793 = (state_31843[(12)]);
var inst_31770 = inst_31793;
var state_31843__$1 = (function (){var statearr_31868 = state_31843;
(statearr_31868[(7)] = inst_31770);

return statearr_31868;
})();
var statearr_31869_31922 = state_31843__$1;
(statearr_31869_31922[(2)] = null);

(statearr_31869_31922[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (29))){
var inst_31817 = (state_31843[(10)]);
var state_31843__$1 = state_31843;
var statearr_31870_31923 = state_31843__$1;
(statearr_31870_31923[(2)] = inst_31817);

(statearr_31870_31923[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (6))){
var state_31843__$1 = state_31843;
var statearr_31871_31924 = state_31843__$1;
(statearr_31871_31924[(2)] = false);

(statearr_31871_31924[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (28))){
var inst_31813 = (state_31843[(2)]);
var inst_31814 = calc_state();
var inst_31770 = inst_31814;
var state_31843__$1 = (function (){var statearr_31872 = state_31843;
(statearr_31872[(15)] = inst_31813);

(statearr_31872[(7)] = inst_31770);

return statearr_31872;
})();
var statearr_31873_31925 = state_31843__$1;
(statearr_31873_31925[(2)] = null);

(statearr_31873_31925[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (25))){
var inst_31839 = (state_31843[(2)]);
var state_31843__$1 = state_31843;
var statearr_31874_31926 = state_31843__$1;
(statearr_31874_31926[(2)] = inst_31839);

(statearr_31874_31926[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (34))){
var inst_31837 = (state_31843[(2)]);
var state_31843__$1 = state_31843;
var statearr_31875_31927 = state_31843__$1;
(statearr_31875_31927[(2)] = inst_31837);

(statearr_31875_31927[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (17))){
var state_31843__$1 = state_31843;
var statearr_31876_31928 = state_31843__$1;
(statearr_31876_31928[(2)] = false);

(statearr_31876_31928[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (3))){
var state_31843__$1 = state_31843;
var statearr_31877_31929 = state_31843__$1;
(statearr_31877_31929[(2)] = false);

(statearr_31877_31929[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (12))){
var inst_31841 = (state_31843[(2)]);
var state_31843__$1 = state_31843;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31843__$1,inst_31841);
} else {
if((state_val_31844 === (2))){
var inst_31745 = (state_31843[(8)]);
var inst_31750 = inst_31745.cljs$lang$protocol_mask$partition0$;
var inst_31751 = (inst_31750 & (64));
var inst_31752 = inst_31745.cljs$core$ISeq$;
var inst_31753 = (cljs.core.PROTOCOL_SENTINEL === inst_31752);
var inst_31754 = ((inst_31751) || (inst_31753));
var state_31843__$1 = state_31843;
if(cljs.core.truth_(inst_31754)){
var statearr_31878_31930 = state_31843__$1;
(statearr_31878_31930[(1)] = (5));

} else {
var statearr_31879_31931 = state_31843__$1;
(statearr_31879_31931[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (23))){
var inst_31802 = (state_31843[(14)]);
var inst_31808 = (inst_31802 == null);
var state_31843__$1 = state_31843;
if(cljs.core.truth_(inst_31808)){
var statearr_31880_31932 = state_31843__$1;
(statearr_31880_31932[(1)] = (26));

} else {
var statearr_31881_31933 = state_31843__$1;
(statearr_31881_31933[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (35))){
var inst_31828 = (state_31843[(2)]);
var state_31843__$1 = state_31843;
if(cljs.core.truth_(inst_31828)){
var statearr_31882_31934 = state_31843__$1;
(statearr_31882_31934[(1)] = (36));

} else {
var statearr_31883_31935 = state_31843__$1;
(statearr_31883_31935[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (19))){
var inst_31770 = (state_31843[(7)]);
var inst_31790 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31770);
var state_31843__$1 = state_31843;
var statearr_31884_31936 = state_31843__$1;
(statearr_31884_31936[(2)] = inst_31790);

(statearr_31884_31936[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (11))){
var inst_31770 = (state_31843[(7)]);
var inst_31774 = (inst_31770 == null);
var inst_31775 = cljs.core.not(inst_31774);
var state_31843__$1 = state_31843;
if(inst_31775){
var statearr_31885_31937 = state_31843__$1;
(statearr_31885_31937[(1)] = (13));

} else {
var statearr_31886_31938 = state_31843__$1;
(statearr_31886_31938[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (9))){
var inst_31745 = (state_31843[(8)]);
var state_31843__$1 = state_31843;
var statearr_31887_31939 = state_31843__$1;
(statearr_31887_31939[(2)] = inst_31745);

(statearr_31887_31939[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (5))){
var state_31843__$1 = state_31843;
var statearr_31888_31940 = state_31843__$1;
(statearr_31888_31940[(2)] = true);

(statearr_31888_31940[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (14))){
var state_31843__$1 = state_31843;
var statearr_31889_31941 = state_31843__$1;
(statearr_31889_31941[(2)] = false);

(statearr_31889_31941[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (26))){
var inst_31803 = (state_31843[(11)]);
var inst_31810 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31803);
var state_31843__$1 = state_31843;
var statearr_31890_31942 = state_31843__$1;
(statearr_31890_31942[(2)] = inst_31810);

(statearr_31890_31942[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (16))){
var state_31843__$1 = state_31843;
var statearr_31891_31943 = state_31843__$1;
(statearr_31891_31943[(2)] = true);

(statearr_31891_31943[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (38))){
var inst_31833 = (state_31843[(2)]);
var state_31843__$1 = state_31843;
var statearr_31892_31944 = state_31843__$1;
(statearr_31892_31944[(2)] = inst_31833);

(statearr_31892_31944[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (30))){
var inst_31794 = (state_31843[(9)]);
var inst_31803 = (state_31843[(11)]);
var inst_31795 = (state_31843[(13)]);
var inst_31820 = cljs.core.empty_QMARK_(inst_31794);
var inst_31821 = (inst_31795.cljs$core$IFn$_invoke$arity$1 ? inst_31795.cljs$core$IFn$_invoke$arity$1(inst_31803) : inst_31795.call(null,inst_31803));
var inst_31822 = cljs.core.not(inst_31821);
var inst_31823 = ((inst_31820) && (inst_31822));
var state_31843__$1 = state_31843;
var statearr_31893_31945 = state_31843__$1;
(statearr_31893_31945[(2)] = inst_31823);

(statearr_31893_31945[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (10))){
var inst_31745 = (state_31843[(8)]);
var inst_31766 = (state_31843[(2)]);
var inst_31767 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31766,cljs.core.cst$kw$solos);
var inst_31768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31766,cljs.core.cst$kw$mutes);
var inst_31769 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31766,cljs.core.cst$kw$reads);
var inst_31770 = inst_31745;
var state_31843__$1 = (function (){var statearr_31894 = state_31843;
(statearr_31894[(7)] = inst_31770);

(statearr_31894[(16)] = inst_31768);

(statearr_31894[(17)] = inst_31767);

(statearr_31894[(18)] = inst_31769);

return statearr_31894;
})();
var statearr_31895_31946 = state_31843__$1;
(statearr_31895_31946[(2)] = null);

(statearr_31895_31946[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (18))){
var inst_31785 = (state_31843[(2)]);
var state_31843__$1 = state_31843;
var statearr_31896_31947 = state_31843__$1;
(statearr_31896_31947[(2)] = inst_31785);

(statearr_31896_31947[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (37))){
var state_31843__$1 = state_31843;
var statearr_31897_31948 = state_31843__$1;
(statearr_31897_31948[(2)] = null);

(statearr_31897_31948[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31844 === (8))){
var inst_31745 = (state_31843[(8)]);
var inst_31763 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31745);
var state_31843__$1 = state_31843;
var statearr_31898_31949 = state_31843__$1;
(statearr_31898_31949[(2)] = inst_31763);

(statearr_31898_31949[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__30842__auto___31903,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30740__auto__,c__30842__auto___31903,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30741__auto__ = null;
var cljs$core$async$mix_$_state_machine__30741__auto____0 = (function (){
var statearr_31899 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31899[(0)] = cljs$core$async$mix_$_state_machine__30741__auto__);

(statearr_31899[(1)] = (1));

return statearr_31899;
});
var cljs$core$async$mix_$_state_machine__30741__auto____1 = (function (state_31843){
while(true){
var ret_value__30742__auto__ = (function (){try{while(true){
var result__30743__auto__ = switch__30740__auto__(state_31843);
if(cljs.core.keyword_identical_QMARK_(result__30743__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30743__auto__;
}
break;
}
}catch (e31900){if((e31900 instanceof Object)){
var ex__30744__auto__ = e31900;
var statearr_31901_31950 = state_31843;
(statearr_31901_31950[(5)] = ex__30744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31843);

return cljs.core.cst$kw$recur;
} else {
throw e31900;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30742__auto__,cljs.core.cst$kw$recur)){
var G__31951 = state_31843;
state_31843 = G__31951;
continue;
} else {
return ret_value__30742__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30741__auto__ = function(state_31843){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30741__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30741__auto____1.call(this,state_31843);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30741__auto____0;
cljs$core$async$mix_$_state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30741__auto____1;
return cljs$core$async$mix_$_state_machine__30741__auto__;
})()
;})(switch__30740__auto__,c__30842__auto___31903,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30844__auto__ = (function (){var statearr_31902 = (f__30843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30843__auto__.cljs$core$IFn$_invoke$arity$0() : f__30843__auto__.call(null));
(statearr_31902[(6)] = c__30842__auto___31903);

return statearr_31902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30844__auto__);
});})(c__30842__auto___31903,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4212__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4212__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4212__auto__.call(null,p,v,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4212__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31953 = arguments.length;
switch (G__31953) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4212__auto__.call(null,p));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4212__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4212__auto__.call(null,p,v));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4212__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31957 = arguments.length;
switch (G__31957) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3922__auto__,mults){
return (function (p1__31955_SHARP_){
if(cljs.core.truth_((p1__31955_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31955_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31955_SHARP_.call(null,topic)))){
return p1__31955_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31955_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31958 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31958 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31959){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31959 = meta31959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31960,meta31959__$1){
var self__ = this;
var _31960__$1 = this;
return (new cljs.core.async.t_cljs$core$async31958(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31959__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31958.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31960){
var self__ = this;
var _31960__$1 = this;
return self__.meta31959;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31958.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31958.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31958.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31958.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31958.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31958.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31958.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31958.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta31959], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31958.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31958.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31958";

cljs.core.async.t_cljs$core$async31958.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async31958");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31958.
 */
cljs.core.async.__GT_t_cljs$core$async31958 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31958(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31959){
return (new cljs.core.async.t_cljs$core$async31958(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31959));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31958(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30842__auto___32078 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30842__auto___32078,mults,ensure_mult,p){
return (function (){
var f__30843__auto__ = (function (){var switch__30740__auto__ = ((function (c__30842__auto___32078,mults,ensure_mult,p){
return (function (state_32032){
var state_val_32033 = (state_32032[(1)]);
if((state_val_32033 === (7))){
var inst_32028 = (state_32032[(2)]);
var state_32032__$1 = state_32032;
var statearr_32034_32079 = state_32032__$1;
(statearr_32034_32079[(2)] = inst_32028);

(statearr_32034_32079[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32033 === (20))){
var state_32032__$1 = state_32032;
var statearr_32035_32080 = state_32032__$1;
(statearr_32035_32080[(2)] = null);

(statearr_32035_32080[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32033 === (1))){
var state_32032__$1 = state_32032;
var statearr_32036_32081 = state_32032__$1;
(statearr_32036_32081[(2)] = null);

(statearr_32036_32081[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32033 === (24))){
var inst_32011 = (state_32032[(7)]);
var inst_32020 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32011);
var state_32032__$1 = state_32032;
var statearr_32037_32082 = state_32032__$1;
(statearr_32037_32082[(2)] = inst_32020);

(statearr_32037_32082[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32033 === (4))){
var inst_31963 = (state_32032[(8)]);
var inst_31963__$1 = (state_32032[(2)]);
var inst_31964 = (inst_31963__$1 == null);
var state_32032__$1 = (function (){var statearr_32038 = state_32032;
(statearr_32038[(8)] = inst_31963__$1);

return statearr_32038;
})();
if(cljs.core.truth_(inst_31964)){
var statearr_32039_32083 = state_32032__$1;
(statearr_32039_32083[(1)] = (5));

} else {
var statearr_32040_32084 = state_32032__$1;
(statearr_32040_32084[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32033 === (15))){
var inst_32005 = (state_32032[(2)]);
var state_32032__$1 = state_32032;
var statearr_32041_32085 = state_32032__$1;
(statearr_32041_32085[(2)] = inst_32005);

(statearr_32041_32085[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32033 === (21))){
var inst_32025 = (state_32032[(2)]);
var state_32032__$1 = (function (){var statearr_32042 = state_32032;
(statearr_32042[(9)] = inst_32025);

return statearr_32042;
})();
var statearr_32043_32086 = state_32032__$1;
(statearr_32043_32086[(2)] = null);

(statearr_32043_32086[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32033 === (13))){
var inst_31987 = (state_32032[(10)]);
var inst_31989 = cljs.core.chunked_seq_QMARK_(inst_31987);
var state_32032__$1 = state_32032;
if(inst_31989){
var statearr_32044_32087 = state_32032__$1;
(statearr_32044_32087[(1)] = (16));

} else {
var statearr_32045_32088 = state_32032__$1;
(statearr_32045_32088[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32033 === (22))){
var inst_32017 = (state_32032[(2)]);
var state_32032__$1 = state_32032;
if(cljs.core.truth_(inst_32017)){
var statearr_32046_32089 = state_32032__$1;
(statearr_32046_32089[(1)] = (23));

} else {
var statearr_32047_32090 = state_32032__$1;
(statearr_32047_32090[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32033 === (6))){
var inst_31963 = (state_32032[(8)]);
var inst_32011 = (state_32032[(7)]);
var inst_32013 = (state_32032[(11)]);
var inst_32011__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31963) : topic_fn.call(null,inst_31963));
var inst_32012 = cljs.core.deref(mults);
var inst_32013__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32012,inst_32011__$1);
var state_32032__$1 = (function (){var statearr_32048 = state_32032;
(statearr_32048[(7)] = inst_32011__$1);

(statearr_32048[(11)] = inst_32013__$1);

return statearr_32048;
})();
if(cljs.core.truth_(inst_32013__$1)){
var statearr_32049_32091 = state_32032__$1;
(statearr_32049_32091[(1)] = (19));

} else {
var statearr_32050_32092 = state_32032__$1;
(statearr_32050_32092[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32033 === (25))){
var inst_32022 = (state_32032[(2)]);
var state_32032__$1 = state_32032;
var statearr_32051_32093 = state_32032__$1;
(statearr_32051_32093[(2)] = inst_32022);

(statearr_32051_32093[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32033 === (17))){
var inst_31987 = (state_32032[(10)]);
var inst_31996 = cljs.core.first(inst_31987);
var inst_31997 = cljs.core.async.muxch_STAR_(inst_31996);
var inst_31998 = cljs.core.async.close_BANG_(inst_31997);
var inst_31999 = cljs.core.next(inst_31987);
var inst_31973 = inst_31999;
var inst_31974 = null;
var inst_31975 = (0);
var inst_31976 = (0);
var state_32032__$1 = (function (){var statearr_32052 = state_32032;
(statearr_32052[(12)] = inst_31975);

(statearr_32052[(13)] = inst_31976);

(statearr_32052[(14)] = inst_31974);

(statearr_32052[(15)] = inst_31998);

(statearr_32052[(16)] = inst_31973);

return statearr_32052;
})();
var statearr_32053_32094 = state_32032__$1;
(statearr_32053_32094[(2)] = null);

(statearr_32053_32094[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32033 === (3))){
var inst_32030 = (state_32032[(2)]);
var state_32032__$1 = state_32032;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32032__$1,inst_32030);
} else {
if((state_val_32033 === (12))){
var inst_32007 = (state_32032[(2)]);
var state_32032__$1 = state_32032;
var statearr_32054_32095 = state_32032__$1;
(statearr_32054_32095[(2)] = inst_32007);

(statearr_32054_32095[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32033 === (2))){
var state_32032__$1 = state_32032;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32032__$1,(4),ch);
} else {
if((state_val_32033 === (23))){
var state_32032__$1 = state_32032;
var statearr_32055_32096 = state_32032__$1;
(statearr_32055_32096[(2)] = null);

(statearr_32055_32096[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32033 === (19))){
var inst_31963 = (state_32032[(8)]);
var inst_32013 = (state_32032[(11)]);
var inst_32015 = cljs.core.async.muxch_STAR_(inst_32013);
var state_32032__$1 = state_32032;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32032__$1,(22),inst_32015,inst_31963);
} else {
if((state_val_32033 === (11))){
var inst_31987 = (state_32032[(10)]);
var inst_31973 = (state_32032[(16)]);
var inst_31987__$1 = cljs.core.seq(inst_31973);
var state_32032__$1 = (function (){var statearr_32056 = state_32032;
(statearr_32056[(10)] = inst_31987__$1);

return statearr_32056;
})();
if(inst_31987__$1){
var statearr_32057_32097 = state_32032__$1;
(statearr_32057_32097[(1)] = (13));

} else {
var statearr_32058_32098 = state_32032__$1;
(statearr_32058_32098[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32033 === (9))){
var inst_32009 = (state_32032[(2)]);
var state_32032__$1 = state_32032;
var statearr_32059_32099 = state_32032__$1;
(statearr_32059_32099[(2)] = inst_32009);

(statearr_32059_32099[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32033 === (5))){
var inst_31970 = cljs.core.deref(mults);
var inst_31971 = cljs.core.vals(inst_31970);
var inst_31972 = cljs.core.seq(inst_31971);
var inst_31973 = inst_31972;
var inst_31974 = null;
var inst_31975 = (0);
var inst_31976 = (0);
var state_32032__$1 = (function (){var statearr_32060 = state_32032;
(statearr_32060[(12)] = inst_31975);

(statearr_32060[(13)] = inst_31976);

(statearr_32060[(14)] = inst_31974);

(statearr_32060[(16)] = inst_31973);

return statearr_32060;
})();
var statearr_32061_32100 = state_32032__$1;
(statearr_32061_32100[(2)] = null);

(statearr_32061_32100[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32033 === (14))){
var state_32032__$1 = state_32032;
var statearr_32065_32101 = state_32032__$1;
(statearr_32065_32101[(2)] = null);

(statearr_32065_32101[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32033 === (16))){
var inst_31987 = (state_32032[(10)]);
var inst_31991 = cljs.core.chunk_first(inst_31987);
var inst_31992 = cljs.core.chunk_rest(inst_31987);
var inst_31993 = cljs.core.count(inst_31991);
var inst_31973 = inst_31992;
var inst_31974 = inst_31991;
var inst_31975 = inst_31993;
var inst_31976 = (0);
var state_32032__$1 = (function (){var statearr_32066 = state_32032;
(statearr_32066[(12)] = inst_31975);

(statearr_32066[(13)] = inst_31976);

(statearr_32066[(14)] = inst_31974);

(statearr_32066[(16)] = inst_31973);

return statearr_32066;
})();
var statearr_32067_32102 = state_32032__$1;
(statearr_32067_32102[(2)] = null);

(statearr_32067_32102[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32033 === (10))){
var inst_31975 = (state_32032[(12)]);
var inst_31976 = (state_32032[(13)]);
var inst_31974 = (state_32032[(14)]);
var inst_31973 = (state_32032[(16)]);
var inst_31981 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31974,inst_31976);
var inst_31982 = cljs.core.async.muxch_STAR_(inst_31981);
var inst_31983 = cljs.core.async.close_BANG_(inst_31982);
var inst_31984 = (inst_31976 + (1));
var tmp32062 = inst_31975;
var tmp32063 = inst_31974;
var tmp32064 = inst_31973;
var inst_31973__$1 = tmp32064;
var inst_31974__$1 = tmp32063;
var inst_31975__$1 = tmp32062;
var inst_31976__$1 = inst_31984;
var state_32032__$1 = (function (){var statearr_32068 = state_32032;
(statearr_32068[(12)] = inst_31975__$1);

(statearr_32068[(13)] = inst_31976__$1);

(statearr_32068[(14)] = inst_31974__$1);

(statearr_32068[(17)] = inst_31983);

(statearr_32068[(16)] = inst_31973__$1);

return statearr_32068;
})();
var statearr_32069_32103 = state_32032__$1;
(statearr_32069_32103[(2)] = null);

(statearr_32069_32103[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32033 === (18))){
var inst_32002 = (state_32032[(2)]);
var state_32032__$1 = state_32032;
var statearr_32070_32104 = state_32032__$1;
(statearr_32070_32104[(2)] = inst_32002);

(statearr_32070_32104[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32033 === (8))){
var inst_31975 = (state_32032[(12)]);
var inst_31976 = (state_32032[(13)]);
var inst_31978 = (inst_31976 < inst_31975);
var inst_31979 = inst_31978;
var state_32032__$1 = state_32032;
if(cljs.core.truth_(inst_31979)){
var statearr_32071_32105 = state_32032__$1;
(statearr_32071_32105[(1)] = (10));

} else {
var statearr_32072_32106 = state_32032__$1;
(statearr_32072_32106[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__30842__auto___32078,mults,ensure_mult,p))
;
return ((function (switch__30740__auto__,c__30842__auto___32078,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30741__auto__ = null;
var cljs$core$async$state_machine__30741__auto____0 = (function (){
var statearr_32073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32073[(0)] = cljs$core$async$state_machine__30741__auto__);

(statearr_32073[(1)] = (1));

return statearr_32073;
});
var cljs$core$async$state_machine__30741__auto____1 = (function (state_32032){
while(true){
var ret_value__30742__auto__ = (function (){try{while(true){
var result__30743__auto__ = switch__30740__auto__(state_32032);
if(cljs.core.keyword_identical_QMARK_(result__30743__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30743__auto__;
}
break;
}
}catch (e32074){if((e32074 instanceof Object)){
var ex__30744__auto__ = e32074;
var statearr_32075_32107 = state_32032;
(statearr_32075_32107[(5)] = ex__30744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32032);

return cljs.core.cst$kw$recur;
} else {
throw e32074;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30742__auto__,cljs.core.cst$kw$recur)){
var G__32108 = state_32032;
state_32032 = G__32108;
continue;
} else {
return ret_value__30742__auto__;
}
break;
}
});
cljs$core$async$state_machine__30741__auto__ = function(state_32032){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30741__auto____1.call(this,state_32032);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30741__auto____0;
cljs$core$async$state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30741__auto____1;
return cljs$core$async$state_machine__30741__auto__;
})()
;})(switch__30740__auto__,c__30842__auto___32078,mults,ensure_mult,p))
})();
var state__30844__auto__ = (function (){var statearr_32076 = (f__30843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30843__auto__.cljs$core$IFn$_invoke$arity$0() : f__30843__auto__.call(null));
(statearr_32076[(6)] = c__30842__auto___32078);

return statearr_32076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30844__auto__);
});})(c__30842__auto___32078,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32110 = arguments.length;
switch (G__32110) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32113 = arguments.length;
switch (G__32113) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32116 = arguments.length;
switch (G__32116) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30842__auto___32183 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30842__auto___32183,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30843__auto__ = (function (){var switch__30740__auto__ = ((function (c__30842__auto___32183,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32155){
var state_val_32156 = (state_32155[(1)]);
if((state_val_32156 === (7))){
var state_32155__$1 = state_32155;
var statearr_32157_32184 = state_32155__$1;
(statearr_32157_32184[(2)] = null);

(statearr_32157_32184[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32156 === (1))){
var state_32155__$1 = state_32155;
var statearr_32158_32185 = state_32155__$1;
(statearr_32158_32185[(2)] = null);

(statearr_32158_32185[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32156 === (4))){
var inst_32119 = (state_32155[(7)]);
var inst_32121 = (inst_32119 < cnt);
var state_32155__$1 = state_32155;
if(cljs.core.truth_(inst_32121)){
var statearr_32159_32186 = state_32155__$1;
(statearr_32159_32186[(1)] = (6));

} else {
var statearr_32160_32187 = state_32155__$1;
(statearr_32160_32187[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32156 === (15))){
var inst_32151 = (state_32155[(2)]);
var state_32155__$1 = state_32155;
var statearr_32161_32188 = state_32155__$1;
(statearr_32161_32188[(2)] = inst_32151);

(statearr_32161_32188[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32156 === (13))){
var inst_32144 = cljs.core.async.close_BANG_(out);
var state_32155__$1 = state_32155;
var statearr_32162_32189 = state_32155__$1;
(statearr_32162_32189[(2)] = inst_32144);

(statearr_32162_32189[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32156 === (6))){
var state_32155__$1 = state_32155;
var statearr_32163_32190 = state_32155__$1;
(statearr_32163_32190[(2)] = null);

(statearr_32163_32190[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32156 === (3))){
var inst_32153 = (state_32155[(2)]);
var state_32155__$1 = state_32155;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32155__$1,inst_32153);
} else {
if((state_val_32156 === (12))){
var inst_32141 = (state_32155[(8)]);
var inst_32141__$1 = (state_32155[(2)]);
var inst_32142 = cljs.core.some(cljs.core.nil_QMARK_,inst_32141__$1);
var state_32155__$1 = (function (){var statearr_32164 = state_32155;
(statearr_32164[(8)] = inst_32141__$1);

return statearr_32164;
})();
if(cljs.core.truth_(inst_32142)){
var statearr_32165_32191 = state_32155__$1;
(statearr_32165_32191[(1)] = (13));

} else {
var statearr_32166_32192 = state_32155__$1;
(statearr_32166_32192[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32156 === (2))){
var inst_32118 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32119 = (0);
var state_32155__$1 = (function (){var statearr_32167 = state_32155;
(statearr_32167[(7)] = inst_32119);

(statearr_32167[(9)] = inst_32118);

return statearr_32167;
})();
var statearr_32168_32193 = state_32155__$1;
(statearr_32168_32193[(2)] = null);

(statearr_32168_32193[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32156 === (11))){
var inst_32119 = (state_32155[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32155,(10),Object,null,(9));
var inst_32128 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32119) : chs__$1.call(null,inst_32119));
var inst_32129 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32119) : done.call(null,inst_32119));
var inst_32130 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32128,inst_32129);
var state_32155__$1 = state_32155;
var statearr_32169_32194 = state_32155__$1;
(statearr_32169_32194[(2)] = inst_32130);


cljs.core.async.impl.ioc_helpers.process_exception(state_32155__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_32156 === (9))){
var inst_32119 = (state_32155[(7)]);
var inst_32132 = (state_32155[(2)]);
var inst_32133 = (inst_32119 + (1));
var inst_32119__$1 = inst_32133;
var state_32155__$1 = (function (){var statearr_32170 = state_32155;
(statearr_32170[(10)] = inst_32132);

(statearr_32170[(7)] = inst_32119__$1);

return statearr_32170;
})();
var statearr_32171_32195 = state_32155__$1;
(statearr_32171_32195[(2)] = null);

(statearr_32171_32195[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32156 === (5))){
var inst_32139 = (state_32155[(2)]);
var state_32155__$1 = (function (){var statearr_32172 = state_32155;
(statearr_32172[(11)] = inst_32139);

return statearr_32172;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32155__$1,(12),dchan);
} else {
if((state_val_32156 === (14))){
var inst_32141 = (state_32155[(8)]);
var inst_32146 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32141);
var state_32155__$1 = state_32155;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32155__$1,(16),out,inst_32146);
} else {
if((state_val_32156 === (16))){
var inst_32148 = (state_32155[(2)]);
var state_32155__$1 = (function (){var statearr_32173 = state_32155;
(statearr_32173[(12)] = inst_32148);

return statearr_32173;
})();
var statearr_32174_32196 = state_32155__$1;
(statearr_32174_32196[(2)] = null);

(statearr_32174_32196[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32156 === (10))){
var inst_32123 = (state_32155[(2)]);
var inst_32124 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32155__$1 = (function (){var statearr_32175 = state_32155;
(statearr_32175[(13)] = inst_32123);

return statearr_32175;
})();
var statearr_32176_32197 = state_32155__$1;
(statearr_32176_32197[(2)] = inst_32124);


cljs.core.async.impl.ioc_helpers.process_exception(state_32155__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_32156 === (8))){
var inst_32137 = (state_32155[(2)]);
var state_32155__$1 = state_32155;
var statearr_32177_32198 = state_32155__$1;
(statearr_32177_32198[(2)] = inst_32137);

(statearr_32177_32198[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__30842__auto___32183,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30740__auto__,c__30842__auto___32183,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30741__auto__ = null;
var cljs$core$async$state_machine__30741__auto____0 = (function (){
var statearr_32178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32178[(0)] = cljs$core$async$state_machine__30741__auto__);

(statearr_32178[(1)] = (1));

return statearr_32178;
});
var cljs$core$async$state_machine__30741__auto____1 = (function (state_32155){
while(true){
var ret_value__30742__auto__ = (function (){try{while(true){
var result__30743__auto__ = switch__30740__auto__(state_32155);
if(cljs.core.keyword_identical_QMARK_(result__30743__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30743__auto__;
}
break;
}
}catch (e32179){if((e32179 instanceof Object)){
var ex__30744__auto__ = e32179;
var statearr_32180_32199 = state_32155;
(statearr_32180_32199[(5)] = ex__30744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32155);

return cljs.core.cst$kw$recur;
} else {
throw e32179;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30742__auto__,cljs.core.cst$kw$recur)){
var G__32200 = state_32155;
state_32155 = G__32200;
continue;
} else {
return ret_value__30742__auto__;
}
break;
}
});
cljs$core$async$state_machine__30741__auto__ = function(state_32155){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30741__auto____1.call(this,state_32155);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30741__auto____0;
cljs$core$async$state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30741__auto____1;
return cljs$core$async$state_machine__30741__auto__;
})()
;})(switch__30740__auto__,c__30842__auto___32183,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30844__auto__ = (function (){var statearr_32181 = (f__30843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30843__auto__.cljs$core$IFn$_invoke$arity$0() : f__30843__auto__.call(null));
(statearr_32181[(6)] = c__30842__auto___32183);

return statearr_32181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30844__auto__);
});})(c__30842__auto___32183,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32203 = arguments.length;
switch (G__32203) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30842__auto___32257 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30842__auto___32257,out){
return (function (){
var f__30843__auto__ = (function (){var switch__30740__auto__ = ((function (c__30842__auto___32257,out){
return (function (state_32235){
var state_val_32236 = (state_32235[(1)]);
if((state_val_32236 === (7))){
var inst_32214 = (state_32235[(7)]);
var inst_32215 = (state_32235[(8)]);
var inst_32214__$1 = (state_32235[(2)]);
var inst_32215__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32214__$1,(0),null);
var inst_32216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32214__$1,(1),null);
var inst_32217 = (inst_32215__$1 == null);
var state_32235__$1 = (function (){var statearr_32237 = state_32235;
(statearr_32237[(7)] = inst_32214__$1);

(statearr_32237[(9)] = inst_32216);

(statearr_32237[(8)] = inst_32215__$1);

return statearr_32237;
})();
if(cljs.core.truth_(inst_32217)){
var statearr_32238_32258 = state_32235__$1;
(statearr_32238_32258[(1)] = (8));

} else {
var statearr_32239_32259 = state_32235__$1;
(statearr_32239_32259[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32236 === (1))){
var inst_32204 = cljs.core.vec(chs);
var inst_32205 = inst_32204;
var state_32235__$1 = (function (){var statearr_32240 = state_32235;
(statearr_32240[(10)] = inst_32205);

return statearr_32240;
})();
var statearr_32241_32260 = state_32235__$1;
(statearr_32241_32260[(2)] = null);

(statearr_32241_32260[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32236 === (4))){
var inst_32205 = (state_32235[(10)]);
var state_32235__$1 = state_32235;
return cljs.core.async.ioc_alts_BANG_(state_32235__$1,(7),inst_32205);
} else {
if((state_val_32236 === (6))){
var inst_32231 = (state_32235[(2)]);
var state_32235__$1 = state_32235;
var statearr_32242_32261 = state_32235__$1;
(statearr_32242_32261[(2)] = inst_32231);

(statearr_32242_32261[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32236 === (3))){
var inst_32233 = (state_32235[(2)]);
var state_32235__$1 = state_32235;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32235__$1,inst_32233);
} else {
if((state_val_32236 === (2))){
var inst_32205 = (state_32235[(10)]);
var inst_32207 = cljs.core.count(inst_32205);
var inst_32208 = (inst_32207 > (0));
var state_32235__$1 = state_32235;
if(cljs.core.truth_(inst_32208)){
var statearr_32244_32262 = state_32235__$1;
(statearr_32244_32262[(1)] = (4));

} else {
var statearr_32245_32263 = state_32235__$1;
(statearr_32245_32263[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32236 === (11))){
var inst_32205 = (state_32235[(10)]);
var inst_32224 = (state_32235[(2)]);
var tmp32243 = inst_32205;
var inst_32205__$1 = tmp32243;
var state_32235__$1 = (function (){var statearr_32246 = state_32235;
(statearr_32246[(11)] = inst_32224);

(statearr_32246[(10)] = inst_32205__$1);

return statearr_32246;
})();
var statearr_32247_32264 = state_32235__$1;
(statearr_32247_32264[(2)] = null);

(statearr_32247_32264[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32236 === (9))){
var inst_32215 = (state_32235[(8)]);
var state_32235__$1 = state_32235;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32235__$1,(11),out,inst_32215);
} else {
if((state_val_32236 === (5))){
var inst_32229 = cljs.core.async.close_BANG_(out);
var state_32235__$1 = state_32235;
var statearr_32248_32265 = state_32235__$1;
(statearr_32248_32265[(2)] = inst_32229);

(statearr_32248_32265[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32236 === (10))){
var inst_32227 = (state_32235[(2)]);
var state_32235__$1 = state_32235;
var statearr_32249_32266 = state_32235__$1;
(statearr_32249_32266[(2)] = inst_32227);

(statearr_32249_32266[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32236 === (8))){
var inst_32214 = (state_32235[(7)]);
var inst_32216 = (state_32235[(9)]);
var inst_32215 = (state_32235[(8)]);
var inst_32205 = (state_32235[(10)]);
var inst_32219 = (function (){var cs = inst_32205;
var vec__32210 = inst_32214;
var v = inst_32215;
var c = inst_32216;
return ((function (cs,vec__32210,v,c,inst_32214,inst_32216,inst_32215,inst_32205,state_val_32236,c__30842__auto___32257,out){
return (function (p1__32201_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32201_SHARP_);
});
;})(cs,vec__32210,v,c,inst_32214,inst_32216,inst_32215,inst_32205,state_val_32236,c__30842__auto___32257,out))
})();
var inst_32220 = cljs.core.filterv(inst_32219,inst_32205);
var inst_32205__$1 = inst_32220;
var state_32235__$1 = (function (){var statearr_32250 = state_32235;
(statearr_32250[(10)] = inst_32205__$1);

return statearr_32250;
})();
var statearr_32251_32267 = state_32235__$1;
(statearr_32251_32267[(2)] = null);

(statearr_32251_32267[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__30842__auto___32257,out))
;
return ((function (switch__30740__auto__,c__30842__auto___32257,out){
return (function() {
var cljs$core$async$state_machine__30741__auto__ = null;
var cljs$core$async$state_machine__30741__auto____0 = (function (){
var statearr_32252 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32252[(0)] = cljs$core$async$state_machine__30741__auto__);

(statearr_32252[(1)] = (1));

return statearr_32252;
});
var cljs$core$async$state_machine__30741__auto____1 = (function (state_32235){
while(true){
var ret_value__30742__auto__ = (function (){try{while(true){
var result__30743__auto__ = switch__30740__auto__(state_32235);
if(cljs.core.keyword_identical_QMARK_(result__30743__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30743__auto__;
}
break;
}
}catch (e32253){if((e32253 instanceof Object)){
var ex__30744__auto__ = e32253;
var statearr_32254_32268 = state_32235;
(statearr_32254_32268[(5)] = ex__30744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32235);

return cljs.core.cst$kw$recur;
} else {
throw e32253;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30742__auto__,cljs.core.cst$kw$recur)){
var G__32269 = state_32235;
state_32235 = G__32269;
continue;
} else {
return ret_value__30742__auto__;
}
break;
}
});
cljs$core$async$state_machine__30741__auto__ = function(state_32235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30741__auto____1.call(this,state_32235);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30741__auto____0;
cljs$core$async$state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30741__auto____1;
return cljs$core$async$state_machine__30741__auto__;
})()
;})(switch__30740__auto__,c__30842__auto___32257,out))
})();
var state__30844__auto__ = (function (){var statearr_32255 = (f__30843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30843__auto__.cljs$core$IFn$_invoke$arity$0() : f__30843__auto__.call(null));
(statearr_32255[(6)] = c__30842__auto___32257);

return statearr_32255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30844__auto__);
});})(c__30842__auto___32257,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32271 = arguments.length;
switch (G__32271) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30842__auto___32316 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30842__auto___32316,out){
return (function (){
var f__30843__auto__ = (function (){var switch__30740__auto__ = ((function (c__30842__auto___32316,out){
return (function (state_32295){
var state_val_32296 = (state_32295[(1)]);
if((state_val_32296 === (7))){
var inst_32277 = (state_32295[(7)]);
var inst_32277__$1 = (state_32295[(2)]);
var inst_32278 = (inst_32277__$1 == null);
var inst_32279 = cljs.core.not(inst_32278);
var state_32295__$1 = (function (){var statearr_32297 = state_32295;
(statearr_32297[(7)] = inst_32277__$1);

return statearr_32297;
})();
if(inst_32279){
var statearr_32298_32317 = state_32295__$1;
(statearr_32298_32317[(1)] = (8));

} else {
var statearr_32299_32318 = state_32295__$1;
(statearr_32299_32318[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32296 === (1))){
var inst_32272 = (0);
var state_32295__$1 = (function (){var statearr_32300 = state_32295;
(statearr_32300[(8)] = inst_32272);

return statearr_32300;
})();
var statearr_32301_32319 = state_32295__$1;
(statearr_32301_32319[(2)] = null);

(statearr_32301_32319[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32296 === (4))){
var state_32295__$1 = state_32295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32295__$1,(7),ch);
} else {
if((state_val_32296 === (6))){
var inst_32290 = (state_32295[(2)]);
var state_32295__$1 = state_32295;
var statearr_32302_32320 = state_32295__$1;
(statearr_32302_32320[(2)] = inst_32290);

(statearr_32302_32320[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32296 === (3))){
var inst_32292 = (state_32295[(2)]);
var inst_32293 = cljs.core.async.close_BANG_(out);
var state_32295__$1 = (function (){var statearr_32303 = state_32295;
(statearr_32303[(9)] = inst_32292);

return statearr_32303;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32295__$1,inst_32293);
} else {
if((state_val_32296 === (2))){
var inst_32272 = (state_32295[(8)]);
var inst_32274 = (inst_32272 < n);
var state_32295__$1 = state_32295;
if(cljs.core.truth_(inst_32274)){
var statearr_32304_32321 = state_32295__$1;
(statearr_32304_32321[(1)] = (4));

} else {
var statearr_32305_32322 = state_32295__$1;
(statearr_32305_32322[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32296 === (11))){
var inst_32272 = (state_32295[(8)]);
var inst_32282 = (state_32295[(2)]);
var inst_32283 = (inst_32272 + (1));
var inst_32272__$1 = inst_32283;
var state_32295__$1 = (function (){var statearr_32306 = state_32295;
(statearr_32306[(8)] = inst_32272__$1);

(statearr_32306[(10)] = inst_32282);

return statearr_32306;
})();
var statearr_32307_32323 = state_32295__$1;
(statearr_32307_32323[(2)] = null);

(statearr_32307_32323[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32296 === (9))){
var state_32295__$1 = state_32295;
var statearr_32308_32324 = state_32295__$1;
(statearr_32308_32324[(2)] = null);

(statearr_32308_32324[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32296 === (5))){
var state_32295__$1 = state_32295;
var statearr_32309_32325 = state_32295__$1;
(statearr_32309_32325[(2)] = null);

(statearr_32309_32325[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32296 === (10))){
var inst_32287 = (state_32295[(2)]);
var state_32295__$1 = state_32295;
var statearr_32310_32326 = state_32295__$1;
(statearr_32310_32326[(2)] = inst_32287);

(statearr_32310_32326[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32296 === (8))){
var inst_32277 = (state_32295[(7)]);
var state_32295__$1 = state_32295;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32295__$1,(11),out,inst_32277);
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
});})(c__30842__auto___32316,out))
;
return ((function (switch__30740__auto__,c__30842__auto___32316,out){
return (function() {
var cljs$core$async$state_machine__30741__auto__ = null;
var cljs$core$async$state_machine__30741__auto____0 = (function (){
var statearr_32311 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32311[(0)] = cljs$core$async$state_machine__30741__auto__);

(statearr_32311[(1)] = (1));

return statearr_32311;
});
var cljs$core$async$state_machine__30741__auto____1 = (function (state_32295){
while(true){
var ret_value__30742__auto__ = (function (){try{while(true){
var result__30743__auto__ = switch__30740__auto__(state_32295);
if(cljs.core.keyword_identical_QMARK_(result__30743__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30743__auto__;
}
break;
}
}catch (e32312){if((e32312 instanceof Object)){
var ex__30744__auto__ = e32312;
var statearr_32313_32327 = state_32295;
(statearr_32313_32327[(5)] = ex__30744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32295);

return cljs.core.cst$kw$recur;
} else {
throw e32312;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30742__auto__,cljs.core.cst$kw$recur)){
var G__32328 = state_32295;
state_32295 = G__32328;
continue;
} else {
return ret_value__30742__auto__;
}
break;
}
});
cljs$core$async$state_machine__30741__auto__ = function(state_32295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30741__auto____1.call(this,state_32295);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30741__auto____0;
cljs$core$async$state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30741__auto____1;
return cljs$core$async$state_machine__30741__auto__;
})()
;})(switch__30740__auto__,c__30842__auto___32316,out))
})();
var state__30844__auto__ = (function (){var statearr_32314 = (f__30843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30843__auto__.cljs$core$IFn$_invoke$arity$0() : f__30843__auto__.call(null));
(statearr_32314[(6)] = c__30842__auto___32316);

return statearr_32314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30844__auto__);
});})(c__30842__auto___32316,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32330 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32330 = (function (f,ch,meta32331){
this.f = f;
this.ch = ch;
this.meta32331 = meta32331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32332,meta32331__$1){
var self__ = this;
var _32332__$1 = this;
return (new cljs.core.async.t_cljs$core$async32330(self__.f,self__.ch,meta32331__$1));
});

cljs.core.async.t_cljs$core$async32330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32332){
var self__ = this;
var _32332__$1 = this;
return self__.meta32331;
});

cljs.core.async.t_cljs$core$async32330.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32330.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32330.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32330.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32330.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32333 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32333 = (function (f,ch,meta32331,_,fn1,meta32334){
this.f = f;
this.ch = ch;
this.meta32331 = meta32331;
this._ = _;
this.fn1 = fn1;
this.meta32334 = meta32334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32335,meta32334__$1){
var self__ = this;
var _32335__$1 = this;
return (new cljs.core.async.t_cljs$core$async32333(self__.f,self__.ch,self__.meta32331,self__._,self__.fn1,meta32334__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32333.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32335){
var self__ = this;
var _32335__$1 = this;
return self__.meta32334;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32333.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32333.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32333.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32333.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32329_SHARP_){
var G__32336 = (((p1__32329_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32329_SHARP_) : self__.f.call(null,p1__32329_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32336) : f1.call(null,G__32336));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32333.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta32331,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async32330], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta32334], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32333.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32333.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32333";

cljs.core.async.t_cljs$core$async32333.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async32333");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32333.
 */
cljs.core.async.__GT_t_cljs$core$async32333 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32333(f__$1,ch__$1,meta32331__$1,___$2,fn1__$1,meta32334){
return (new cljs.core.async.t_cljs$core$async32333(f__$1,ch__$1,meta32331__$1,___$2,fn1__$1,meta32334));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32333(self__.f,self__.ch,self__.meta32331,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32337 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32337) : self__.f.call(null,G__32337));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32330.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32330.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta32331], null);
});

cljs.core.async.t_cljs$core$async32330.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32330";

cljs.core.async.t_cljs$core$async32330.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async32330");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32330.
 */
cljs.core.async.__GT_t_cljs$core$async32330 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32330(f__$1,ch__$1,meta32331){
return (new cljs.core.async.t_cljs$core$async32330(f__$1,ch__$1,meta32331));
});

}

return (new cljs.core.async.t_cljs$core$async32330(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32338 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32338 = (function (f,ch,meta32339){
this.f = f;
this.ch = ch;
this.meta32339 = meta32339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32340,meta32339__$1){
var self__ = this;
var _32340__$1 = this;
return (new cljs.core.async.t_cljs$core$async32338(self__.f,self__.ch,meta32339__$1));
});

cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32340){
var self__ = this;
var _32340__$1 = this;
return self__.meta32339;
});

cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async32338.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta32339], null);
});

cljs.core.async.t_cljs$core$async32338.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32338.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32338";

cljs.core.async.t_cljs$core$async32338.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async32338");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32338.
 */
cljs.core.async.__GT_t_cljs$core$async32338 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32338(f__$1,ch__$1,meta32339){
return (new cljs.core.async.t_cljs$core$async32338(f__$1,ch__$1,meta32339));
});

}

return (new cljs.core.async.t_cljs$core$async32338(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32341 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32341 = (function (p,ch,meta32342){
this.p = p;
this.ch = ch;
this.meta32342 = meta32342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32343,meta32342__$1){
var self__ = this;
var _32343__$1 = this;
return (new cljs.core.async.t_cljs$core$async32341(self__.p,self__.ch,meta32342__$1));
});

cljs.core.async.t_cljs$core$async32341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32343){
var self__ = this;
var _32343__$1 = this;
return self__.meta32342;
});

cljs.core.async.t_cljs$core$async32341.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32341.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32341.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32341.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32341.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32341.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32341.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32341.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta32342], null);
});

cljs.core.async.t_cljs$core$async32341.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32341";

cljs.core.async.t_cljs$core$async32341.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async32341");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32341.
 */
cljs.core.async.__GT_t_cljs$core$async32341 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32341(p__$1,ch__$1,meta32342){
return (new cljs.core.async.t_cljs$core$async32341(p__$1,ch__$1,meta32342));
});

}

return (new cljs.core.async.t_cljs$core$async32341(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32345 = arguments.length;
switch (G__32345) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30842__auto___32385 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30842__auto___32385,out){
return (function (){
var f__30843__auto__ = (function (){var switch__30740__auto__ = ((function (c__30842__auto___32385,out){
return (function (state_32366){
var state_val_32367 = (state_32366[(1)]);
if((state_val_32367 === (7))){
var inst_32362 = (state_32366[(2)]);
var state_32366__$1 = state_32366;
var statearr_32368_32386 = state_32366__$1;
(statearr_32368_32386[(2)] = inst_32362);

(statearr_32368_32386[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32367 === (1))){
var state_32366__$1 = state_32366;
var statearr_32369_32387 = state_32366__$1;
(statearr_32369_32387[(2)] = null);

(statearr_32369_32387[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32367 === (4))){
var inst_32348 = (state_32366[(7)]);
var inst_32348__$1 = (state_32366[(2)]);
var inst_32349 = (inst_32348__$1 == null);
var state_32366__$1 = (function (){var statearr_32370 = state_32366;
(statearr_32370[(7)] = inst_32348__$1);

return statearr_32370;
})();
if(cljs.core.truth_(inst_32349)){
var statearr_32371_32388 = state_32366__$1;
(statearr_32371_32388[(1)] = (5));

} else {
var statearr_32372_32389 = state_32366__$1;
(statearr_32372_32389[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32367 === (6))){
var inst_32348 = (state_32366[(7)]);
var inst_32353 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32348) : p.call(null,inst_32348));
var state_32366__$1 = state_32366;
if(cljs.core.truth_(inst_32353)){
var statearr_32373_32390 = state_32366__$1;
(statearr_32373_32390[(1)] = (8));

} else {
var statearr_32374_32391 = state_32366__$1;
(statearr_32374_32391[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32367 === (3))){
var inst_32364 = (state_32366[(2)]);
var state_32366__$1 = state_32366;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32366__$1,inst_32364);
} else {
if((state_val_32367 === (2))){
var state_32366__$1 = state_32366;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32366__$1,(4),ch);
} else {
if((state_val_32367 === (11))){
var inst_32356 = (state_32366[(2)]);
var state_32366__$1 = state_32366;
var statearr_32375_32392 = state_32366__$1;
(statearr_32375_32392[(2)] = inst_32356);

(statearr_32375_32392[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32367 === (9))){
var state_32366__$1 = state_32366;
var statearr_32376_32393 = state_32366__$1;
(statearr_32376_32393[(2)] = null);

(statearr_32376_32393[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32367 === (5))){
var inst_32351 = cljs.core.async.close_BANG_(out);
var state_32366__$1 = state_32366;
var statearr_32377_32394 = state_32366__$1;
(statearr_32377_32394[(2)] = inst_32351);

(statearr_32377_32394[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32367 === (10))){
var inst_32359 = (state_32366[(2)]);
var state_32366__$1 = (function (){var statearr_32378 = state_32366;
(statearr_32378[(8)] = inst_32359);

return statearr_32378;
})();
var statearr_32379_32395 = state_32366__$1;
(statearr_32379_32395[(2)] = null);

(statearr_32379_32395[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32367 === (8))){
var inst_32348 = (state_32366[(7)]);
var state_32366__$1 = state_32366;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32366__$1,(11),out,inst_32348);
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
});})(c__30842__auto___32385,out))
;
return ((function (switch__30740__auto__,c__30842__auto___32385,out){
return (function() {
var cljs$core$async$state_machine__30741__auto__ = null;
var cljs$core$async$state_machine__30741__auto____0 = (function (){
var statearr_32380 = [null,null,null,null,null,null,null,null,null];
(statearr_32380[(0)] = cljs$core$async$state_machine__30741__auto__);

(statearr_32380[(1)] = (1));

return statearr_32380;
});
var cljs$core$async$state_machine__30741__auto____1 = (function (state_32366){
while(true){
var ret_value__30742__auto__ = (function (){try{while(true){
var result__30743__auto__ = switch__30740__auto__(state_32366);
if(cljs.core.keyword_identical_QMARK_(result__30743__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30743__auto__;
}
break;
}
}catch (e32381){if((e32381 instanceof Object)){
var ex__30744__auto__ = e32381;
var statearr_32382_32396 = state_32366;
(statearr_32382_32396[(5)] = ex__30744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32366);

return cljs.core.cst$kw$recur;
} else {
throw e32381;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30742__auto__,cljs.core.cst$kw$recur)){
var G__32397 = state_32366;
state_32366 = G__32397;
continue;
} else {
return ret_value__30742__auto__;
}
break;
}
});
cljs$core$async$state_machine__30741__auto__ = function(state_32366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30741__auto____1.call(this,state_32366);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30741__auto____0;
cljs$core$async$state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30741__auto____1;
return cljs$core$async$state_machine__30741__auto__;
})()
;})(switch__30740__auto__,c__30842__auto___32385,out))
})();
var state__30844__auto__ = (function (){var statearr_32383 = (f__30843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30843__auto__.cljs$core$IFn$_invoke$arity$0() : f__30843__auto__.call(null));
(statearr_32383[(6)] = c__30842__auto___32385);

return statearr_32383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30844__auto__);
});})(c__30842__auto___32385,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32399 = arguments.length;
switch (G__32399) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30842__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30842__auto__){
return (function (){
var f__30843__auto__ = (function (){var switch__30740__auto__ = ((function (c__30842__auto__){
return (function (state_32462){
var state_val_32463 = (state_32462[(1)]);
if((state_val_32463 === (7))){
var inst_32458 = (state_32462[(2)]);
var state_32462__$1 = state_32462;
var statearr_32464_32502 = state_32462__$1;
(statearr_32464_32502[(2)] = inst_32458);

(statearr_32464_32502[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32463 === (20))){
var inst_32428 = (state_32462[(7)]);
var inst_32439 = (state_32462[(2)]);
var inst_32440 = cljs.core.next(inst_32428);
var inst_32414 = inst_32440;
var inst_32415 = null;
var inst_32416 = (0);
var inst_32417 = (0);
var state_32462__$1 = (function (){var statearr_32465 = state_32462;
(statearr_32465[(8)] = inst_32417);

(statearr_32465[(9)] = inst_32414);

(statearr_32465[(10)] = inst_32416);

(statearr_32465[(11)] = inst_32415);

(statearr_32465[(12)] = inst_32439);

return statearr_32465;
})();
var statearr_32466_32503 = state_32462__$1;
(statearr_32466_32503[(2)] = null);

(statearr_32466_32503[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32463 === (1))){
var state_32462__$1 = state_32462;
var statearr_32467_32504 = state_32462__$1;
(statearr_32467_32504[(2)] = null);

(statearr_32467_32504[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32463 === (4))){
var inst_32403 = (state_32462[(13)]);
var inst_32403__$1 = (state_32462[(2)]);
var inst_32404 = (inst_32403__$1 == null);
var state_32462__$1 = (function (){var statearr_32468 = state_32462;
(statearr_32468[(13)] = inst_32403__$1);

return statearr_32468;
})();
if(cljs.core.truth_(inst_32404)){
var statearr_32469_32505 = state_32462__$1;
(statearr_32469_32505[(1)] = (5));

} else {
var statearr_32470_32506 = state_32462__$1;
(statearr_32470_32506[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32463 === (15))){
var state_32462__$1 = state_32462;
var statearr_32474_32507 = state_32462__$1;
(statearr_32474_32507[(2)] = null);

(statearr_32474_32507[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32463 === (21))){
var state_32462__$1 = state_32462;
var statearr_32475_32508 = state_32462__$1;
(statearr_32475_32508[(2)] = null);

(statearr_32475_32508[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32463 === (13))){
var inst_32417 = (state_32462[(8)]);
var inst_32414 = (state_32462[(9)]);
var inst_32416 = (state_32462[(10)]);
var inst_32415 = (state_32462[(11)]);
var inst_32424 = (state_32462[(2)]);
var inst_32425 = (inst_32417 + (1));
var tmp32471 = inst_32414;
var tmp32472 = inst_32416;
var tmp32473 = inst_32415;
var inst_32414__$1 = tmp32471;
var inst_32415__$1 = tmp32473;
var inst_32416__$1 = tmp32472;
var inst_32417__$1 = inst_32425;
var state_32462__$1 = (function (){var statearr_32476 = state_32462;
(statearr_32476[(14)] = inst_32424);

(statearr_32476[(8)] = inst_32417__$1);

(statearr_32476[(9)] = inst_32414__$1);

(statearr_32476[(10)] = inst_32416__$1);

(statearr_32476[(11)] = inst_32415__$1);

return statearr_32476;
})();
var statearr_32477_32509 = state_32462__$1;
(statearr_32477_32509[(2)] = null);

(statearr_32477_32509[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32463 === (22))){
var state_32462__$1 = state_32462;
var statearr_32478_32510 = state_32462__$1;
(statearr_32478_32510[(2)] = null);

(statearr_32478_32510[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32463 === (6))){
var inst_32403 = (state_32462[(13)]);
var inst_32412 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32403) : f.call(null,inst_32403));
var inst_32413 = cljs.core.seq(inst_32412);
var inst_32414 = inst_32413;
var inst_32415 = null;
var inst_32416 = (0);
var inst_32417 = (0);
var state_32462__$1 = (function (){var statearr_32479 = state_32462;
(statearr_32479[(8)] = inst_32417);

(statearr_32479[(9)] = inst_32414);

(statearr_32479[(10)] = inst_32416);

(statearr_32479[(11)] = inst_32415);

return statearr_32479;
})();
var statearr_32480_32511 = state_32462__$1;
(statearr_32480_32511[(2)] = null);

(statearr_32480_32511[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32463 === (17))){
var inst_32428 = (state_32462[(7)]);
var inst_32432 = cljs.core.chunk_first(inst_32428);
var inst_32433 = cljs.core.chunk_rest(inst_32428);
var inst_32434 = cljs.core.count(inst_32432);
var inst_32414 = inst_32433;
var inst_32415 = inst_32432;
var inst_32416 = inst_32434;
var inst_32417 = (0);
var state_32462__$1 = (function (){var statearr_32481 = state_32462;
(statearr_32481[(8)] = inst_32417);

(statearr_32481[(9)] = inst_32414);

(statearr_32481[(10)] = inst_32416);

(statearr_32481[(11)] = inst_32415);

return statearr_32481;
})();
var statearr_32482_32512 = state_32462__$1;
(statearr_32482_32512[(2)] = null);

(statearr_32482_32512[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32463 === (3))){
var inst_32460 = (state_32462[(2)]);
var state_32462__$1 = state_32462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32462__$1,inst_32460);
} else {
if((state_val_32463 === (12))){
var inst_32448 = (state_32462[(2)]);
var state_32462__$1 = state_32462;
var statearr_32483_32513 = state_32462__$1;
(statearr_32483_32513[(2)] = inst_32448);

(statearr_32483_32513[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32463 === (2))){
var state_32462__$1 = state_32462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32462__$1,(4),in$);
} else {
if((state_val_32463 === (23))){
var inst_32456 = (state_32462[(2)]);
var state_32462__$1 = state_32462;
var statearr_32484_32514 = state_32462__$1;
(statearr_32484_32514[(2)] = inst_32456);

(statearr_32484_32514[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32463 === (19))){
var inst_32443 = (state_32462[(2)]);
var state_32462__$1 = state_32462;
var statearr_32485_32515 = state_32462__$1;
(statearr_32485_32515[(2)] = inst_32443);

(statearr_32485_32515[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32463 === (11))){
var inst_32414 = (state_32462[(9)]);
var inst_32428 = (state_32462[(7)]);
var inst_32428__$1 = cljs.core.seq(inst_32414);
var state_32462__$1 = (function (){var statearr_32486 = state_32462;
(statearr_32486[(7)] = inst_32428__$1);

return statearr_32486;
})();
if(inst_32428__$1){
var statearr_32487_32516 = state_32462__$1;
(statearr_32487_32516[(1)] = (14));

} else {
var statearr_32488_32517 = state_32462__$1;
(statearr_32488_32517[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32463 === (9))){
var inst_32450 = (state_32462[(2)]);
var inst_32451 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32462__$1 = (function (){var statearr_32489 = state_32462;
(statearr_32489[(15)] = inst_32450);

return statearr_32489;
})();
if(cljs.core.truth_(inst_32451)){
var statearr_32490_32518 = state_32462__$1;
(statearr_32490_32518[(1)] = (21));

} else {
var statearr_32491_32519 = state_32462__$1;
(statearr_32491_32519[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32463 === (5))){
var inst_32406 = cljs.core.async.close_BANG_(out);
var state_32462__$1 = state_32462;
var statearr_32492_32520 = state_32462__$1;
(statearr_32492_32520[(2)] = inst_32406);

(statearr_32492_32520[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32463 === (14))){
var inst_32428 = (state_32462[(7)]);
var inst_32430 = cljs.core.chunked_seq_QMARK_(inst_32428);
var state_32462__$1 = state_32462;
if(inst_32430){
var statearr_32493_32521 = state_32462__$1;
(statearr_32493_32521[(1)] = (17));

} else {
var statearr_32494_32522 = state_32462__$1;
(statearr_32494_32522[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32463 === (16))){
var inst_32446 = (state_32462[(2)]);
var state_32462__$1 = state_32462;
var statearr_32495_32523 = state_32462__$1;
(statearr_32495_32523[(2)] = inst_32446);

(statearr_32495_32523[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32463 === (10))){
var inst_32417 = (state_32462[(8)]);
var inst_32415 = (state_32462[(11)]);
var inst_32422 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32415,inst_32417);
var state_32462__$1 = state_32462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32462__$1,(13),out,inst_32422);
} else {
if((state_val_32463 === (18))){
var inst_32428 = (state_32462[(7)]);
var inst_32437 = cljs.core.first(inst_32428);
var state_32462__$1 = state_32462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32462__$1,(20),out,inst_32437);
} else {
if((state_val_32463 === (8))){
var inst_32417 = (state_32462[(8)]);
var inst_32416 = (state_32462[(10)]);
var inst_32419 = (inst_32417 < inst_32416);
var inst_32420 = inst_32419;
var state_32462__$1 = state_32462;
if(cljs.core.truth_(inst_32420)){
var statearr_32496_32524 = state_32462__$1;
(statearr_32496_32524[(1)] = (10));

} else {
var statearr_32497_32525 = state_32462__$1;
(statearr_32497_32525[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__30842__auto__))
;
return ((function (switch__30740__auto__,c__30842__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30741__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30741__auto____0 = (function (){
var statearr_32498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32498[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30741__auto__);

(statearr_32498[(1)] = (1));

return statearr_32498;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30741__auto____1 = (function (state_32462){
while(true){
var ret_value__30742__auto__ = (function (){try{while(true){
var result__30743__auto__ = switch__30740__auto__(state_32462);
if(cljs.core.keyword_identical_QMARK_(result__30743__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30743__auto__;
}
break;
}
}catch (e32499){if((e32499 instanceof Object)){
var ex__30744__auto__ = e32499;
var statearr_32500_32526 = state_32462;
(statearr_32500_32526[(5)] = ex__30744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32462);

return cljs.core.cst$kw$recur;
} else {
throw e32499;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30742__auto__,cljs.core.cst$kw$recur)){
var G__32527 = state_32462;
state_32462 = G__32527;
continue;
} else {
return ret_value__30742__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30741__auto__ = function(state_32462){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30741__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30741__auto____1.call(this,state_32462);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30741__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30741__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30741__auto__;
})()
;})(switch__30740__auto__,c__30842__auto__))
})();
var state__30844__auto__ = (function (){var statearr_32501 = (f__30843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30843__auto__.cljs$core$IFn$_invoke$arity$0() : f__30843__auto__.call(null));
(statearr_32501[(6)] = c__30842__auto__);

return statearr_32501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30844__auto__);
});})(c__30842__auto__))
);

return c__30842__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32529 = arguments.length;
switch (G__32529) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32532 = arguments.length;
switch (G__32532) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32535 = arguments.length;
switch (G__32535) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30842__auto___32582 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30842__auto___32582,out){
return (function (){
var f__30843__auto__ = (function (){var switch__30740__auto__ = ((function (c__30842__auto___32582,out){
return (function (state_32559){
var state_val_32560 = (state_32559[(1)]);
if((state_val_32560 === (7))){
var inst_32554 = (state_32559[(2)]);
var state_32559__$1 = state_32559;
var statearr_32561_32583 = state_32559__$1;
(statearr_32561_32583[(2)] = inst_32554);

(statearr_32561_32583[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32560 === (1))){
var inst_32536 = null;
var state_32559__$1 = (function (){var statearr_32562 = state_32559;
(statearr_32562[(7)] = inst_32536);

return statearr_32562;
})();
var statearr_32563_32584 = state_32559__$1;
(statearr_32563_32584[(2)] = null);

(statearr_32563_32584[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32560 === (4))){
var inst_32539 = (state_32559[(8)]);
var inst_32539__$1 = (state_32559[(2)]);
var inst_32540 = (inst_32539__$1 == null);
var inst_32541 = cljs.core.not(inst_32540);
var state_32559__$1 = (function (){var statearr_32564 = state_32559;
(statearr_32564[(8)] = inst_32539__$1);

return statearr_32564;
})();
if(inst_32541){
var statearr_32565_32585 = state_32559__$1;
(statearr_32565_32585[(1)] = (5));

} else {
var statearr_32566_32586 = state_32559__$1;
(statearr_32566_32586[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32560 === (6))){
var state_32559__$1 = state_32559;
var statearr_32567_32587 = state_32559__$1;
(statearr_32567_32587[(2)] = null);

(statearr_32567_32587[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32560 === (3))){
var inst_32556 = (state_32559[(2)]);
var inst_32557 = cljs.core.async.close_BANG_(out);
var state_32559__$1 = (function (){var statearr_32568 = state_32559;
(statearr_32568[(9)] = inst_32556);

return statearr_32568;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32559__$1,inst_32557);
} else {
if((state_val_32560 === (2))){
var state_32559__$1 = state_32559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32559__$1,(4),ch);
} else {
if((state_val_32560 === (11))){
var inst_32539 = (state_32559[(8)]);
var inst_32548 = (state_32559[(2)]);
var inst_32536 = inst_32539;
var state_32559__$1 = (function (){var statearr_32569 = state_32559;
(statearr_32569[(10)] = inst_32548);

(statearr_32569[(7)] = inst_32536);

return statearr_32569;
})();
var statearr_32570_32588 = state_32559__$1;
(statearr_32570_32588[(2)] = null);

(statearr_32570_32588[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32560 === (9))){
var inst_32539 = (state_32559[(8)]);
var state_32559__$1 = state_32559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32559__$1,(11),out,inst_32539);
} else {
if((state_val_32560 === (5))){
var inst_32539 = (state_32559[(8)]);
var inst_32536 = (state_32559[(7)]);
var inst_32543 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32539,inst_32536);
var state_32559__$1 = state_32559;
if(inst_32543){
var statearr_32572_32589 = state_32559__$1;
(statearr_32572_32589[(1)] = (8));

} else {
var statearr_32573_32590 = state_32559__$1;
(statearr_32573_32590[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32560 === (10))){
var inst_32551 = (state_32559[(2)]);
var state_32559__$1 = state_32559;
var statearr_32574_32591 = state_32559__$1;
(statearr_32574_32591[(2)] = inst_32551);

(statearr_32574_32591[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32560 === (8))){
var inst_32536 = (state_32559[(7)]);
var tmp32571 = inst_32536;
var inst_32536__$1 = tmp32571;
var state_32559__$1 = (function (){var statearr_32575 = state_32559;
(statearr_32575[(7)] = inst_32536__$1);

return statearr_32575;
})();
var statearr_32576_32592 = state_32559__$1;
(statearr_32576_32592[(2)] = null);

(statearr_32576_32592[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__30842__auto___32582,out))
;
return ((function (switch__30740__auto__,c__30842__auto___32582,out){
return (function() {
var cljs$core$async$state_machine__30741__auto__ = null;
var cljs$core$async$state_machine__30741__auto____0 = (function (){
var statearr_32577 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32577[(0)] = cljs$core$async$state_machine__30741__auto__);

(statearr_32577[(1)] = (1));

return statearr_32577;
});
var cljs$core$async$state_machine__30741__auto____1 = (function (state_32559){
while(true){
var ret_value__30742__auto__ = (function (){try{while(true){
var result__30743__auto__ = switch__30740__auto__(state_32559);
if(cljs.core.keyword_identical_QMARK_(result__30743__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30743__auto__;
}
break;
}
}catch (e32578){if((e32578 instanceof Object)){
var ex__30744__auto__ = e32578;
var statearr_32579_32593 = state_32559;
(statearr_32579_32593[(5)] = ex__30744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32559);

return cljs.core.cst$kw$recur;
} else {
throw e32578;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30742__auto__,cljs.core.cst$kw$recur)){
var G__32594 = state_32559;
state_32559 = G__32594;
continue;
} else {
return ret_value__30742__auto__;
}
break;
}
});
cljs$core$async$state_machine__30741__auto__ = function(state_32559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30741__auto____1.call(this,state_32559);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30741__auto____0;
cljs$core$async$state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30741__auto____1;
return cljs$core$async$state_machine__30741__auto__;
})()
;})(switch__30740__auto__,c__30842__auto___32582,out))
})();
var state__30844__auto__ = (function (){var statearr_32580 = (f__30843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30843__auto__.cljs$core$IFn$_invoke$arity$0() : f__30843__auto__.call(null));
(statearr_32580[(6)] = c__30842__auto___32582);

return statearr_32580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30844__auto__);
});})(c__30842__auto___32582,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32596 = arguments.length;
switch (G__32596) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30842__auto___32662 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30842__auto___32662,out){
return (function (){
var f__30843__auto__ = (function (){var switch__30740__auto__ = ((function (c__30842__auto___32662,out){
return (function (state_32634){
var state_val_32635 = (state_32634[(1)]);
if((state_val_32635 === (7))){
var inst_32630 = (state_32634[(2)]);
var state_32634__$1 = state_32634;
var statearr_32636_32663 = state_32634__$1;
(statearr_32636_32663[(2)] = inst_32630);

(statearr_32636_32663[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32635 === (1))){
var inst_32597 = (new Array(n));
var inst_32598 = inst_32597;
var inst_32599 = (0);
var state_32634__$1 = (function (){var statearr_32637 = state_32634;
(statearr_32637[(7)] = inst_32598);

(statearr_32637[(8)] = inst_32599);

return statearr_32637;
})();
var statearr_32638_32664 = state_32634__$1;
(statearr_32638_32664[(2)] = null);

(statearr_32638_32664[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32635 === (4))){
var inst_32602 = (state_32634[(9)]);
var inst_32602__$1 = (state_32634[(2)]);
var inst_32603 = (inst_32602__$1 == null);
var inst_32604 = cljs.core.not(inst_32603);
var state_32634__$1 = (function (){var statearr_32639 = state_32634;
(statearr_32639[(9)] = inst_32602__$1);

return statearr_32639;
})();
if(inst_32604){
var statearr_32640_32665 = state_32634__$1;
(statearr_32640_32665[(1)] = (5));

} else {
var statearr_32641_32666 = state_32634__$1;
(statearr_32641_32666[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32635 === (15))){
var inst_32624 = (state_32634[(2)]);
var state_32634__$1 = state_32634;
var statearr_32642_32667 = state_32634__$1;
(statearr_32642_32667[(2)] = inst_32624);

(statearr_32642_32667[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32635 === (13))){
var state_32634__$1 = state_32634;
var statearr_32643_32668 = state_32634__$1;
(statearr_32643_32668[(2)] = null);

(statearr_32643_32668[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32635 === (6))){
var inst_32599 = (state_32634[(8)]);
var inst_32620 = (inst_32599 > (0));
var state_32634__$1 = state_32634;
if(cljs.core.truth_(inst_32620)){
var statearr_32644_32669 = state_32634__$1;
(statearr_32644_32669[(1)] = (12));

} else {
var statearr_32645_32670 = state_32634__$1;
(statearr_32645_32670[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32635 === (3))){
var inst_32632 = (state_32634[(2)]);
var state_32634__$1 = state_32634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32634__$1,inst_32632);
} else {
if((state_val_32635 === (12))){
var inst_32598 = (state_32634[(7)]);
var inst_32622 = cljs.core.vec(inst_32598);
var state_32634__$1 = state_32634;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32634__$1,(15),out,inst_32622);
} else {
if((state_val_32635 === (2))){
var state_32634__$1 = state_32634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32634__$1,(4),ch);
} else {
if((state_val_32635 === (11))){
var inst_32614 = (state_32634[(2)]);
var inst_32615 = (new Array(n));
var inst_32598 = inst_32615;
var inst_32599 = (0);
var state_32634__$1 = (function (){var statearr_32646 = state_32634;
(statearr_32646[(7)] = inst_32598);

(statearr_32646[(8)] = inst_32599);

(statearr_32646[(10)] = inst_32614);

return statearr_32646;
})();
var statearr_32647_32671 = state_32634__$1;
(statearr_32647_32671[(2)] = null);

(statearr_32647_32671[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32635 === (9))){
var inst_32598 = (state_32634[(7)]);
var inst_32612 = cljs.core.vec(inst_32598);
var state_32634__$1 = state_32634;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32634__$1,(11),out,inst_32612);
} else {
if((state_val_32635 === (5))){
var inst_32598 = (state_32634[(7)]);
var inst_32602 = (state_32634[(9)]);
var inst_32599 = (state_32634[(8)]);
var inst_32607 = (state_32634[(11)]);
var inst_32606 = (inst_32598[inst_32599] = inst_32602);
var inst_32607__$1 = (inst_32599 + (1));
var inst_32608 = (inst_32607__$1 < n);
var state_32634__$1 = (function (){var statearr_32648 = state_32634;
(statearr_32648[(11)] = inst_32607__$1);

(statearr_32648[(12)] = inst_32606);

return statearr_32648;
})();
if(cljs.core.truth_(inst_32608)){
var statearr_32649_32672 = state_32634__$1;
(statearr_32649_32672[(1)] = (8));

} else {
var statearr_32650_32673 = state_32634__$1;
(statearr_32650_32673[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32635 === (14))){
var inst_32627 = (state_32634[(2)]);
var inst_32628 = cljs.core.async.close_BANG_(out);
var state_32634__$1 = (function (){var statearr_32652 = state_32634;
(statearr_32652[(13)] = inst_32627);

return statearr_32652;
})();
var statearr_32653_32674 = state_32634__$1;
(statearr_32653_32674[(2)] = inst_32628);

(statearr_32653_32674[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32635 === (10))){
var inst_32618 = (state_32634[(2)]);
var state_32634__$1 = state_32634;
var statearr_32654_32675 = state_32634__$1;
(statearr_32654_32675[(2)] = inst_32618);

(statearr_32654_32675[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32635 === (8))){
var inst_32598 = (state_32634[(7)]);
var inst_32607 = (state_32634[(11)]);
var tmp32651 = inst_32598;
var inst_32598__$1 = tmp32651;
var inst_32599 = inst_32607;
var state_32634__$1 = (function (){var statearr_32655 = state_32634;
(statearr_32655[(7)] = inst_32598__$1);

(statearr_32655[(8)] = inst_32599);

return statearr_32655;
})();
var statearr_32656_32676 = state_32634__$1;
(statearr_32656_32676[(2)] = null);

(statearr_32656_32676[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__30842__auto___32662,out))
;
return ((function (switch__30740__auto__,c__30842__auto___32662,out){
return (function() {
var cljs$core$async$state_machine__30741__auto__ = null;
var cljs$core$async$state_machine__30741__auto____0 = (function (){
var statearr_32657 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32657[(0)] = cljs$core$async$state_machine__30741__auto__);

(statearr_32657[(1)] = (1));

return statearr_32657;
});
var cljs$core$async$state_machine__30741__auto____1 = (function (state_32634){
while(true){
var ret_value__30742__auto__ = (function (){try{while(true){
var result__30743__auto__ = switch__30740__auto__(state_32634);
if(cljs.core.keyword_identical_QMARK_(result__30743__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30743__auto__;
}
break;
}
}catch (e32658){if((e32658 instanceof Object)){
var ex__30744__auto__ = e32658;
var statearr_32659_32677 = state_32634;
(statearr_32659_32677[(5)] = ex__30744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32634);

return cljs.core.cst$kw$recur;
} else {
throw e32658;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30742__auto__,cljs.core.cst$kw$recur)){
var G__32678 = state_32634;
state_32634 = G__32678;
continue;
} else {
return ret_value__30742__auto__;
}
break;
}
});
cljs$core$async$state_machine__30741__auto__ = function(state_32634){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30741__auto____1.call(this,state_32634);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30741__auto____0;
cljs$core$async$state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30741__auto____1;
return cljs$core$async$state_machine__30741__auto__;
})()
;})(switch__30740__auto__,c__30842__auto___32662,out))
})();
var state__30844__auto__ = (function (){var statearr_32660 = (f__30843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30843__auto__.cljs$core$IFn$_invoke$arity$0() : f__30843__auto__.call(null));
(statearr_32660[(6)] = c__30842__auto___32662);

return statearr_32660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30844__auto__);
});})(c__30842__auto___32662,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32680 = arguments.length;
switch (G__32680) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30842__auto___32750 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30842__auto___32750,out){
return (function (){
var f__30843__auto__ = (function (){var switch__30740__auto__ = ((function (c__30842__auto___32750,out){
return (function (state_32722){
var state_val_32723 = (state_32722[(1)]);
if((state_val_32723 === (7))){
var inst_32718 = (state_32722[(2)]);
var state_32722__$1 = state_32722;
var statearr_32724_32751 = state_32722__$1;
(statearr_32724_32751[(2)] = inst_32718);

(statearr_32724_32751[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32723 === (1))){
var inst_32681 = [];
var inst_32682 = inst_32681;
var inst_32683 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_32722__$1 = (function (){var statearr_32725 = state_32722;
(statearr_32725[(7)] = inst_32683);

(statearr_32725[(8)] = inst_32682);

return statearr_32725;
})();
var statearr_32726_32752 = state_32722__$1;
(statearr_32726_32752[(2)] = null);

(statearr_32726_32752[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32723 === (4))){
var inst_32686 = (state_32722[(9)]);
var inst_32686__$1 = (state_32722[(2)]);
var inst_32687 = (inst_32686__$1 == null);
var inst_32688 = cljs.core.not(inst_32687);
var state_32722__$1 = (function (){var statearr_32727 = state_32722;
(statearr_32727[(9)] = inst_32686__$1);

return statearr_32727;
})();
if(inst_32688){
var statearr_32728_32753 = state_32722__$1;
(statearr_32728_32753[(1)] = (5));

} else {
var statearr_32729_32754 = state_32722__$1;
(statearr_32729_32754[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32723 === (15))){
var inst_32712 = (state_32722[(2)]);
var state_32722__$1 = state_32722;
var statearr_32730_32755 = state_32722__$1;
(statearr_32730_32755[(2)] = inst_32712);

(statearr_32730_32755[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32723 === (13))){
var state_32722__$1 = state_32722;
var statearr_32731_32756 = state_32722__$1;
(statearr_32731_32756[(2)] = null);

(statearr_32731_32756[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32723 === (6))){
var inst_32682 = (state_32722[(8)]);
var inst_32707 = inst_32682.length;
var inst_32708 = (inst_32707 > (0));
var state_32722__$1 = state_32722;
if(cljs.core.truth_(inst_32708)){
var statearr_32732_32757 = state_32722__$1;
(statearr_32732_32757[(1)] = (12));

} else {
var statearr_32733_32758 = state_32722__$1;
(statearr_32733_32758[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32723 === (3))){
var inst_32720 = (state_32722[(2)]);
var state_32722__$1 = state_32722;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32722__$1,inst_32720);
} else {
if((state_val_32723 === (12))){
var inst_32682 = (state_32722[(8)]);
var inst_32710 = cljs.core.vec(inst_32682);
var state_32722__$1 = state_32722;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32722__$1,(15),out,inst_32710);
} else {
if((state_val_32723 === (2))){
var state_32722__$1 = state_32722;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32722__$1,(4),ch);
} else {
if((state_val_32723 === (11))){
var inst_32686 = (state_32722[(9)]);
var inst_32690 = (state_32722[(10)]);
var inst_32700 = (state_32722[(2)]);
var inst_32701 = [];
var inst_32702 = inst_32701.push(inst_32686);
var inst_32682 = inst_32701;
var inst_32683 = inst_32690;
var state_32722__$1 = (function (){var statearr_32734 = state_32722;
(statearr_32734[(11)] = inst_32702);

(statearr_32734[(7)] = inst_32683);

(statearr_32734[(8)] = inst_32682);

(statearr_32734[(12)] = inst_32700);

return statearr_32734;
})();
var statearr_32735_32759 = state_32722__$1;
(statearr_32735_32759[(2)] = null);

(statearr_32735_32759[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32723 === (9))){
var inst_32682 = (state_32722[(8)]);
var inst_32698 = cljs.core.vec(inst_32682);
var state_32722__$1 = state_32722;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32722__$1,(11),out,inst_32698);
} else {
if((state_val_32723 === (5))){
var inst_32683 = (state_32722[(7)]);
var inst_32686 = (state_32722[(9)]);
var inst_32690 = (state_32722[(10)]);
var inst_32690__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32686) : f.call(null,inst_32686));
var inst_32691 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32690__$1,inst_32683);
var inst_32692 = cljs.core.keyword_identical_QMARK_(inst_32683,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_32693 = ((inst_32691) || (inst_32692));
var state_32722__$1 = (function (){var statearr_32736 = state_32722;
(statearr_32736[(10)] = inst_32690__$1);

return statearr_32736;
})();
if(cljs.core.truth_(inst_32693)){
var statearr_32737_32760 = state_32722__$1;
(statearr_32737_32760[(1)] = (8));

} else {
var statearr_32738_32761 = state_32722__$1;
(statearr_32738_32761[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32723 === (14))){
var inst_32715 = (state_32722[(2)]);
var inst_32716 = cljs.core.async.close_BANG_(out);
var state_32722__$1 = (function (){var statearr_32740 = state_32722;
(statearr_32740[(13)] = inst_32715);

return statearr_32740;
})();
var statearr_32741_32762 = state_32722__$1;
(statearr_32741_32762[(2)] = inst_32716);

(statearr_32741_32762[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32723 === (10))){
var inst_32705 = (state_32722[(2)]);
var state_32722__$1 = state_32722;
var statearr_32742_32763 = state_32722__$1;
(statearr_32742_32763[(2)] = inst_32705);

(statearr_32742_32763[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32723 === (8))){
var inst_32682 = (state_32722[(8)]);
var inst_32686 = (state_32722[(9)]);
var inst_32690 = (state_32722[(10)]);
var inst_32695 = inst_32682.push(inst_32686);
var tmp32739 = inst_32682;
var inst_32682__$1 = tmp32739;
var inst_32683 = inst_32690;
var state_32722__$1 = (function (){var statearr_32743 = state_32722;
(statearr_32743[(7)] = inst_32683);

(statearr_32743[(8)] = inst_32682__$1);

(statearr_32743[(14)] = inst_32695);

return statearr_32743;
})();
var statearr_32744_32764 = state_32722__$1;
(statearr_32744_32764[(2)] = null);

(statearr_32744_32764[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__30842__auto___32750,out))
;
return ((function (switch__30740__auto__,c__30842__auto___32750,out){
return (function() {
var cljs$core$async$state_machine__30741__auto__ = null;
var cljs$core$async$state_machine__30741__auto____0 = (function (){
var statearr_32745 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32745[(0)] = cljs$core$async$state_machine__30741__auto__);

(statearr_32745[(1)] = (1));

return statearr_32745;
});
var cljs$core$async$state_machine__30741__auto____1 = (function (state_32722){
while(true){
var ret_value__30742__auto__ = (function (){try{while(true){
var result__30743__auto__ = switch__30740__auto__(state_32722);
if(cljs.core.keyword_identical_QMARK_(result__30743__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30743__auto__;
}
break;
}
}catch (e32746){if((e32746 instanceof Object)){
var ex__30744__auto__ = e32746;
var statearr_32747_32765 = state_32722;
(statearr_32747_32765[(5)] = ex__30744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32722);

return cljs.core.cst$kw$recur;
} else {
throw e32746;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30742__auto__,cljs.core.cst$kw$recur)){
var G__32766 = state_32722;
state_32722 = G__32766;
continue;
} else {
return ret_value__30742__auto__;
}
break;
}
});
cljs$core$async$state_machine__30741__auto__ = function(state_32722){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30741__auto____1.call(this,state_32722);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30741__auto____0;
cljs$core$async$state_machine__30741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30741__auto____1;
return cljs$core$async$state_machine__30741__auto__;
})()
;})(switch__30740__auto__,c__30842__auto___32750,out))
})();
var state__30844__auto__ = (function (){var statearr_32748 = (f__30843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30843__auto__.cljs$core$IFn$_invoke$arity$0() : f__30843__auto__.call(null));
(statearr_32748[(6)] = c__30842__auto___32750);

return statearr_32748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30844__auto__);
});})(c__30842__auto___32750,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

