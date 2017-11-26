// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34515 = arguments.length;
switch (G__34515) {
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
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async34516 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34516 = (function (f,blockable,meta34517){
this.f = f;
this.blockable = blockable;
this.meta34517 = meta34517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34518,meta34517__$1){
var self__ = this;
var _34518__$1 = this;
return (new cljs.core.async.t_cljs$core$async34516(self__.f,self__.blockable,meta34517__$1));
});

cljs.core.async.t_cljs$core$async34516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34518){
var self__ = this;
var _34518__$1 = this;
return self__.meta34517;
});

cljs.core.async.t_cljs$core$async34516.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34516.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34516.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34516.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34516.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34517","meta34517",-1525761406,null)], null);
});

cljs.core.async.t_cljs$core$async34516.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34516.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34516";

cljs.core.async.t_cljs$core$async34516.cljs$lang$ctorPrWriter = (function (this__31460__auto__,writer__31461__auto__,opt__31462__auto__){
return cljs.core._write.call(null,writer__31461__auto__,"cljs.core.async/t_cljs$core$async34516");
});

cljs.core.async.__GT_t_cljs$core$async34516 = (function cljs$core$async$__GT_t_cljs$core$async34516(f__$1,blockable__$1,meta34517){
return (new cljs.core.async.t_cljs$core$async34516(f__$1,blockable__$1,meta34517));
});

}

return (new cljs.core.async.t_cljs$core$async34516(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__34522 = arguments.length;
switch (G__34522) {
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
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__34525 = arguments.length;
switch (G__34525) {
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
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__34528 = arguments.length;
switch (G__34528) {
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
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_34530 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34530);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34530,ret){
return (function (){
return fn1.call(null,val_34530);
});})(val_34530,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var G__34532 = arguments.length;
switch (G__34532) {
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
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__31834__auto___34534 = n;
var x_34535 = (0);
while(true){
if((x_34535 < n__31834__auto___34534)){
(a[x_34535] = (0));

var G__34536 = (x_34535 + (1));
x_34535 = G__34536;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__34537 = (i + (1));
i = G__34537;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async34538 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34538 = (function (flag,meta34539){
this.flag = flag;
this.meta34539 = meta34539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34540,meta34539__$1){
var self__ = this;
var _34540__$1 = this;
return (new cljs.core.async.t_cljs$core$async34538(self__.flag,meta34539__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34538.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34540){
var self__ = this;
var _34540__$1 = this;
return self__.meta34539;
});})(flag))
;

cljs.core.async.t_cljs$core$async34538.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34538.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34538.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34538.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34538.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34539","meta34539",-1770110104,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34538.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34538";

cljs.core.async.t_cljs$core$async34538.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__31460__auto__,writer__31461__auto__,opt__31462__auto__){
return cljs.core._write.call(null,writer__31461__auto__,"cljs.core.async/t_cljs$core$async34538");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async34538 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34538(flag__$1,meta34539){
return (new cljs.core.async.t_cljs$core$async34538(flag__$1,meta34539));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34538(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34541 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34541 = (function (flag,cb,meta34542){
this.flag = flag;
this.cb = cb;
this.meta34542 = meta34542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34543,meta34542__$1){
var self__ = this;
var _34543__$1 = this;
return (new cljs.core.async.t_cljs$core$async34541(self__.flag,self__.cb,meta34542__$1));
});

cljs.core.async.t_cljs$core$async34541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34543){
var self__ = this;
var _34543__$1 = this;
return self__.meta34542;
});

cljs.core.async.t_cljs$core$async34541.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34541.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34541.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34541.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34541.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34542","meta34542",-1555924157,null)], null);
});

cljs.core.async.t_cljs$core$async34541.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34541.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34541";

cljs.core.async.t_cljs$core$async34541.cljs$lang$ctorPrWriter = (function (this__31460__auto__,writer__31461__auto__,opt__31462__auto__){
return cljs.core._write.call(null,writer__31461__auto__,"cljs.core.async/t_cljs$core$async34541");
});

cljs.core.async.__GT_t_cljs$core$async34541 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34541(flag__$1,cb__$1,meta34542){
return (new cljs.core.async.t_cljs$core$async34541(flag__$1,cb__$1,meta34542));
});

}

return (new cljs.core.async.t_cljs$core$async34541(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34544_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34544_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34545_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34545_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30789__auto__ = wport;
if(cljs.core.truth_(or__30789__auto__)){
return or__30789__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34546 = (i + (1));
i = G__34546;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30789__auto__ = ret;
if(cljs.core.truth_(or__30789__auto__)){
return or__30789__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__30777__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30777__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30777__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__32075__auto__ = [];
var len__32068__auto___34552 = arguments.length;
var i__32069__auto___34553 = (0);
while(true){
if((i__32069__auto___34553 < len__32068__auto___34552)){
args__32075__auto__.push((arguments[i__32069__auto___34553]));

var G__34554 = (i__32069__auto___34553 + (1));
i__32069__auto___34553 = G__34554;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((1) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32076__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34549){
var map__34550 = p__34549;
var map__34550__$1 = ((((!((map__34550 == null)))?((((map__34550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34550.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34550):map__34550);
var opts = map__34550__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34547){
var G__34548 = cljs.core.first.call(null,seq34547);
var seq34547__$1 = cljs.core.next.call(null,seq34547);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34548,seq34547__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__34556 = arguments.length;
switch (G__34556) {
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
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34455__auto___34602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34455__auto___34602){
return (function (){
var f__34456__auto__ = (function (){var switch__34365__auto__ = ((function (c__34455__auto___34602){
return (function (state_34580){
var state_val_34581 = (state_34580[(1)]);
if((state_val_34581 === (7))){
var inst_34576 = (state_34580[(2)]);
var state_34580__$1 = state_34580;
var statearr_34582_34603 = state_34580__$1;
(statearr_34582_34603[(2)] = inst_34576);

(statearr_34582_34603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (1))){
var state_34580__$1 = state_34580;
var statearr_34583_34604 = state_34580__$1;
(statearr_34583_34604[(2)] = null);

(statearr_34583_34604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (4))){
var inst_34559 = (state_34580[(7)]);
var inst_34559__$1 = (state_34580[(2)]);
var inst_34560 = (inst_34559__$1 == null);
var state_34580__$1 = (function (){var statearr_34584 = state_34580;
(statearr_34584[(7)] = inst_34559__$1);

return statearr_34584;
})();
if(cljs.core.truth_(inst_34560)){
var statearr_34585_34605 = state_34580__$1;
(statearr_34585_34605[(1)] = (5));

} else {
var statearr_34586_34606 = state_34580__$1;
(statearr_34586_34606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (13))){
var state_34580__$1 = state_34580;
var statearr_34587_34607 = state_34580__$1;
(statearr_34587_34607[(2)] = null);

(statearr_34587_34607[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (6))){
var inst_34559 = (state_34580[(7)]);
var state_34580__$1 = state_34580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34580__$1,(11),to,inst_34559);
} else {
if((state_val_34581 === (3))){
var inst_34578 = (state_34580[(2)]);
var state_34580__$1 = state_34580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34580__$1,inst_34578);
} else {
if((state_val_34581 === (12))){
var state_34580__$1 = state_34580;
var statearr_34588_34608 = state_34580__$1;
(statearr_34588_34608[(2)] = null);

(statearr_34588_34608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (2))){
var state_34580__$1 = state_34580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34580__$1,(4),from);
} else {
if((state_val_34581 === (11))){
var inst_34569 = (state_34580[(2)]);
var state_34580__$1 = state_34580;
if(cljs.core.truth_(inst_34569)){
var statearr_34589_34609 = state_34580__$1;
(statearr_34589_34609[(1)] = (12));

} else {
var statearr_34590_34610 = state_34580__$1;
(statearr_34590_34610[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (9))){
var state_34580__$1 = state_34580;
var statearr_34591_34611 = state_34580__$1;
(statearr_34591_34611[(2)] = null);

(statearr_34591_34611[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (5))){
var state_34580__$1 = state_34580;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34592_34612 = state_34580__$1;
(statearr_34592_34612[(1)] = (8));

} else {
var statearr_34593_34613 = state_34580__$1;
(statearr_34593_34613[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (14))){
var inst_34574 = (state_34580[(2)]);
var state_34580__$1 = state_34580;
var statearr_34594_34614 = state_34580__$1;
(statearr_34594_34614[(2)] = inst_34574);

(statearr_34594_34614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (10))){
var inst_34566 = (state_34580[(2)]);
var state_34580__$1 = state_34580;
var statearr_34595_34615 = state_34580__$1;
(statearr_34595_34615[(2)] = inst_34566);

(statearr_34595_34615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (8))){
var inst_34563 = cljs.core.async.close_BANG_.call(null,to);
var state_34580__$1 = state_34580;
var statearr_34596_34616 = state_34580__$1;
(statearr_34596_34616[(2)] = inst_34563);

(statearr_34596_34616[(1)] = (10));


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
});})(c__34455__auto___34602))
;
return ((function (switch__34365__auto__,c__34455__auto___34602){
return (function() {
var cljs$core$async$state_machine__34366__auto__ = null;
var cljs$core$async$state_machine__34366__auto____0 = (function (){
var statearr_34597 = [null,null,null,null,null,null,null,null];
(statearr_34597[(0)] = cljs$core$async$state_machine__34366__auto__);

(statearr_34597[(1)] = (1));

return statearr_34597;
});
var cljs$core$async$state_machine__34366__auto____1 = (function (state_34580){
while(true){
var ret_value__34367__auto__ = (function (){try{while(true){
var result__34368__auto__ = switch__34365__auto__.call(null,state_34580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34368__auto__;
}
break;
}
}catch (e34598){if((e34598 instanceof Object)){
var ex__34369__auto__ = e34598;
var statearr_34599_34617 = state_34580;
(statearr_34599_34617[(5)] = ex__34369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34618 = state_34580;
state_34580 = G__34618;
continue;
} else {
return ret_value__34367__auto__;
}
break;
}
});
cljs$core$async$state_machine__34366__auto__ = function(state_34580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34366__auto____1.call(this,state_34580);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34366__auto____0;
cljs$core$async$state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34366__auto____1;
return cljs$core$async$state_machine__34366__auto__;
})()
;})(switch__34365__auto__,c__34455__auto___34602))
})();
var state__34457__auto__ = (function (){var statearr_34600 = f__34456__auto__.call(null);
(statearr_34600[(6)] = c__34455__auto___34602);

return statearr_34600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34457__auto__);
});})(c__34455__auto___34602))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__34619){
var vec__34620 = p__34619;
var v = cljs.core.nth.call(null,vec__34620,(0),null);
var p = cljs.core.nth.call(null,vec__34620,(1),null);
var job = vec__34620;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34455__auto___34791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34455__auto___34791,res,vec__34620,v,p,job,jobs,results){
return (function (){
var f__34456__auto__ = (function (){var switch__34365__auto__ = ((function (c__34455__auto___34791,res,vec__34620,v,p,job,jobs,results){
return (function (state_34627){
var state_val_34628 = (state_34627[(1)]);
if((state_val_34628 === (1))){
var state_34627__$1 = state_34627;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34627__$1,(2),res,v);
} else {
if((state_val_34628 === (2))){
var inst_34624 = (state_34627[(2)]);
var inst_34625 = cljs.core.async.close_BANG_.call(null,res);
var state_34627__$1 = (function (){var statearr_34629 = state_34627;
(statearr_34629[(7)] = inst_34624);

return statearr_34629;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34627__$1,inst_34625);
} else {
return null;
}
}
});})(c__34455__auto___34791,res,vec__34620,v,p,job,jobs,results))
;
return ((function (switch__34365__auto__,c__34455__auto___34791,res,vec__34620,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34366__auto____0 = (function (){
var statearr_34630 = [null,null,null,null,null,null,null,null];
(statearr_34630[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34366__auto__);

(statearr_34630[(1)] = (1));

return statearr_34630;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34366__auto____1 = (function (state_34627){
while(true){
var ret_value__34367__auto__ = (function (){try{while(true){
var result__34368__auto__ = switch__34365__auto__.call(null,state_34627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34368__auto__;
}
break;
}
}catch (e34631){if((e34631 instanceof Object)){
var ex__34369__auto__ = e34631;
var statearr_34632_34792 = state_34627;
(statearr_34632_34792[(5)] = ex__34369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34793 = state_34627;
state_34627 = G__34793;
continue;
} else {
return ret_value__34367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34366__auto__ = function(state_34627){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34366__auto____1.call(this,state_34627);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34366__auto__;
})()
;})(switch__34365__auto__,c__34455__auto___34791,res,vec__34620,v,p,job,jobs,results))
})();
var state__34457__auto__ = (function (){var statearr_34633 = f__34456__auto__.call(null);
(statearr_34633[(6)] = c__34455__auto___34791);

return statearr_34633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34457__auto__);
});})(c__34455__auto___34791,res,vec__34620,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34634){
var vec__34635 = p__34634;
var v = cljs.core.nth.call(null,vec__34635,(0),null);
var p = cljs.core.nth.call(null,vec__34635,(1),null);
var job = vec__34635;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__31834__auto___34794 = n;
var __34795 = (0);
while(true){
if((__34795 < n__31834__auto___34794)){
var G__34638_34796 = type;
var G__34638_34797__$1 = (((G__34638_34796 instanceof cljs.core.Keyword))?G__34638_34796.fqn:null);
switch (G__34638_34797__$1) {
case "compute":
var c__34455__auto___34799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34795,c__34455__auto___34799,G__34638_34796,G__34638_34797__$1,n__31834__auto___34794,jobs,results,process,async){
return (function (){
var f__34456__auto__ = (function (){var switch__34365__auto__ = ((function (__34795,c__34455__auto___34799,G__34638_34796,G__34638_34797__$1,n__31834__auto___34794,jobs,results,process,async){
return (function (state_34651){
var state_val_34652 = (state_34651[(1)]);
if((state_val_34652 === (1))){
var state_34651__$1 = state_34651;
var statearr_34653_34800 = state_34651__$1;
(statearr_34653_34800[(2)] = null);

(statearr_34653_34800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (2))){
var state_34651__$1 = state_34651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34651__$1,(4),jobs);
} else {
if((state_val_34652 === (3))){
var inst_34649 = (state_34651[(2)]);
var state_34651__$1 = state_34651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34651__$1,inst_34649);
} else {
if((state_val_34652 === (4))){
var inst_34641 = (state_34651[(2)]);
var inst_34642 = process.call(null,inst_34641);
var state_34651__$1 = state_34651;
if(cljs.core.truth_(inst_34642)){
var statearr_34654_34801 = state_34651__$1;
(statearr_34654_34801[(1)] = (5));

} else {
var statearr_34655_34802 = state_34651__$1;
(statearr_34655_34802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (5))){
var state_34651__$1 = state_34651;
var statearr_34656_34803 = state_34651__$1;
(statearr_34656_34803[(2)] = null);

(statearr_34656_34803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (6))){
var state_34651__$1 = state_34651;
var statearr_34657_34804 = state_34651__$1;
(statearr_34657_34804[(2)] = null);

(statearr_34657_34804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (7))){
var inst_34647 = (state_34651[(2)]);
var state_34651__$1 = state_34651;
var statearr_34658_34805 = state_34651__$1;
(statearr_34658_34805[(2)] = inst_34647);

(statearr_34658_34805[(1)] = (3));


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
});})(__34795,c__34455__auto___34799,G__34638_34796,G__34638_34797__$1,n__31834__auto___34794,jobs,results,process,async))
;
return ((function (__34795,switch__34365__auto__,c__34455__auto___34799,G__34638_34796,G__34638_34797__$1,n__31834__auto___34794,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34366__auto____0 = (function (){
var statearr_34659 = [null,null,null,null,null,null,null];
(statearr_34659[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34366__auto__);

(statearr_34659[(1)] = (1));

return statearr_34659;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34366__auto____1 = (function (state_34651){
while(true){
var ret_value__34367__auto__ = (function (){try{while(true){
var result__34368__auto__ = switch__34365__auto__.call(null,state_34651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34368__auto__;
}
break;
}
}catch (e34660){if((e34660 instanceof Object)){
var ex__34369__auto__ = e34660;
var statearr_34661_34806 = state_34651;
(statearr_34661_34806[(5)] = ex__34369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34807 = state_34651;
state_34651 = G__34807;
continue;
} else {
return ret_value__34367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34366__auto__ = function(state_34651){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34366__auto____1.call(this,state_34651);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34366__auto__;
})()
;})(__34795,switch__34365__auto__,c__34455__auto___34799,G__34638_34796,G__34638_34797__$1,n__31834__auto___34794,jobs,results,process,async))
})();
var state__34457__auto__ = (function (){var statearr_34662 = f__34456__auto__.call(null);
(statearr_34662[(6)] = c__34455__auto___34799);

return statearr_34662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34457__auto__);
});})(__34795,c__34455__auto___34799,G__34638_34796,G__34638_34797__$1,n__31834__auto___34794,jobs,results,process,async))
);


break;
case "async":
var c__34455__auto___34808 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34795,c__34455__auto___34808,G__34638_34796,G__34638_34797__$1,n__31834__auto___34794,jobs,results,process,async){
return (function (){
var f__34456__auto__ = (function (){var switch__34365__auto__ = ((function (__34795,c__34455__auto___34808,G__34638_34796,G__34638_34797__$1,n__31834__auto___34794,jobs,results,process,async){
return (function (state_34675){
var state_val_34676 = (state_34675[(1)]);
if((state_val_34676 === (1))){
var state_34675__$1 = state_34675;
var statearr_34677_34809 = state_34675__$1;
(statearr_34677_34809[(2)] = null);

(statearr_34677_34809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (2))){
var state_34675__$1 = state_34675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34675__$1,(4),jobs);
} else {
if((state_val_34676 === (3))){
var inst_34673 = (state_34675[(2)]);
var state_34675__$1 = state_34675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34675__$1,inst_34673);
} else {
if((state_val_34676 === (4))){
var inst_34665 = (state_34675[(2)]);
var inst_34666 = async.call(null,inst_34665);
var state_34675__$1 = state_34675;
if(cljs.core.truth_(inst_34666)){
var statearr_34678_34810 = state_34675__$1;
(statearr_34678_34810[(1)] = (5));

} else {
var statearr_34679_34811 = state_34675__$1;
(statearr_34679_34811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (5))){
var state_34675__$1 = state_34675;
var statearr_34680_34812 = state_34675__$1;
(statearr_34680_34812[(2)] = null);

(statearr_34680_34812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (6))){
var state_34675__$1 = state_34675;
var statearr_34681_34813 = state_34675__$1;
(statearr_34681_34813[(2)] = null);

(statearr_34681_34813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (7))){
var inst_34671 = (state_34675[(2)]);
var state_34675__$1 = state_34675;
var statearr_34682_34814 = state_34675__$1;
(statearr_34682_34814[(2)] = inst_34671);

(statearr_34682_34814[(1)] = (3));


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
});})(__34795,c__34455__auto___34808,G__34638_34796,G__34638_34797__$1,n__31834__auto___34794,jobs,results,process,async))
;
return ((function (__34795,switch__34365__auto__,c__34455__auto___34808,G__34638_34796,G__34638_34797__$1,n__31834__auto___34794,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34366__auto____0 = (function (){
var statearr_34683 = [null,null,null,null,null,null,null];
(statearr_34683[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34366__auto__);

(statearr_34683[(1)] = (1));

return statearr_34683;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34366__auto____1 = (function (state_34675){
while(true){
var ret_value__34367__auto__ = (function (){try{while(true){
var result__34368__auto__ = switch__34365__auto__.call(null,state_34675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34368__auto__;
}
break;
}
}catch (e34684){if((e34684 instanceof Object)){
var ex__34369__auto__ = e34684;
var statearr_34685_34815 = state_34675;
(statearr_34685_34815[(5)] = ex__34369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34816 = state_34675;
state_34675 = G__34816;
continue;
} else {
return ret_value__34367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34366__auto__ = function(state_34675){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34366__auto____1.call(this,state_34675);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34366__auto__;
})()
;})(__34795,switch__34365__auto__,c__34455__auto___34808,G__34638_34796,G__34638_34797__$1,n__31834__auto___34794,jobs,results,process,async))
})();
var state__34457__auto__ = (function (){var statearr_34686 = f__34456__auto__.call(null);
(statearr_34686[(6)] = c__34455__auto___34808);

return statearr_34686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34457__auto__);
});})(__34795,c__34455__auto___34808,G__34638_34796,G__34638_34797__$1,n__31834__auto___34794,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34638_34797__$1)].join('')));

}

var G__34817 = (__34795 + (1));
__34795 = G__34817;
continue;
} else {
}
break;
}

var c__34455__auto___34818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34455__auto___34818,jobs,results,process,async){
return (function (){
var f__34456__auto__ = (function (){var switch__34365__auto__ = ((function (c__34455__auto___34818,jobs,results,process,async){
return (function (state_34708){
var state_val_34709 = (state_34708[(1)]);
if((state_val_34709 === (1))){
var state_34708__$1 = state_34708;
var statearr_34710_34819 = state_34708__$1;
(statearr_34710_34819[(2)] = null);

(statearr_34710_34819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (2))){
var state_34708__$1 = state_34708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34708__$1,(4),from);
} else {
if((state_val_34709 === (3))){
var inst_34706 = (state_34708[(2)]);
var state_34708__$1 = state_34708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34708__$1,inst_34706);
} else {
if((state_val_34709 === (4))){
var inst_34689 = (state_34708[(7)]);
var inst_34689__$1 = (state_34708[(2)]);
var inst_34690 = (inst_34689__$1 == null);
var state_34708__$1 = (function (){var statearr_34711 = state_34708;
(statearr_34711[(7)] = inst_34689__$1);

return statearr_34711;
})();
if(cljs.core.truth_(inst_34690)){
var statearr_34712_34820 = state_34708__$1;
(statearr_34712_34820[(1)] = (5));

} else {
var statearr_34713_34821 = state_34708__$1;
(statearr_34713_34821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (5))){
var inst_34692 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34708__$1 = state_34708;
var statearr_34714_34822 = state_34708__$1;
(statearr_34714_34822[(2)] = inst_34692);

(statearr_34714_34822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (6))){
var inst_34689 = (state_34708[(7)]);
var inst_34694 = (state_34708[(8)]);
var inst_34694__$1 = cljs.core.async.chan.call(null,(1));
var inst_34695 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34696 = [inst_34689,inst_34694__$1];
var inst_34697 = (new cljs.core.PersistentVector(null,2,(5),inst_34695,inst_34696,null));
var state_34708__$1 = (function (){var statearr_34715 = state_34708;
(statearr_34715[(8)] = inst_34694__$1);

return statearr_34715;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34708__$1,(8),jobs,inst_34697);
} else {
if((state_val_34709 === (7))){
var inst_34704 = (state_34708[(2)]);
var state_34708__$1 = state_34708;
var statearr_34716_34823 = state_34708__$1;
(statearr_34716_34823[(2)] = inst_34704);

(statearr_34716_34823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (8))){
var inst_34694 = (state_34708[(8)]);
var inst_34699 = (state_34708[(2)]);
var state_34708__$1 = (function (){var statearr_34717 = state_34708;
(statearr_34717[(9)] = inst_34699);

return statearr_34717;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34708__$1,(9),results,inst_34694);
} else {
if((state_val_34709 === (9))){
var inst_34701 = (state_34708[(2)]);
var state_34708__$1 = (function (){var statearr_34718 = state_34708;
(statearr_34718[(10)] = inst_34701);

return statearr_34718;
})();
var statearr_34719_34824 = state_34708__$1;
(statearr_34719_34824[(2)] = null);

(statearr_34719_34824[(1)] = (2));


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
});})(c__34455__auto___34818,jobs,results,process,async))
;
return ((function (switch__34365__auto__,c__34455__auto___34818,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34366__auto____0 = (function (){
var statearr_34720 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34720[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34366__auto__);

(statearr_34720[(1)] = (1));

return statearr_34720;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34366__auto____1 = (function (state_34708){
while(true){
var ret_value__34367__auto__ = (function (){try{while(true){
var result__34368__auto__ = switch__34365__auto__.call(null,state_34708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34368__auto__;
}
break;
}
}catch (e34721){if((e34721 instanceof Object)){
var ex__34369__auto__ = e34721;
var statearr_34722_34825 = state_34708;
(statearr_34722_34825[(5)] = ex__34369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34826 = state_34708;
state_34708 = G__34826;
continue;
} else {
return ret_value__34367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34366__auto__ = function(state_34708){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34366__auto____1.call(this,state_34708);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34366__auto__;
})()
;})(switch__34365__auto__,c__34455__auto___34818,jobs,results,process,async))
})();
var state__34457__auto__ = (function (){var statearr_34723 = f__34456__auto__.call(null);
(statearr_34723[(6)] = c__34455__auto___34818);

return statearr_34723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34457__auto__);
});})(c__34455__auto___34818,jobs,results,process,async))
);


var c__34455__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34455__auto__,jobs,results,process,async){
return (function (){
var f__34456__auto__ = (function (){var switch__34365__auto__ = ((function (c__34455__auto__,jobs,results,process,async){
return (function (state_34761){
var state_val_34762 = (state_34761[(1)]);
if((state_val_34762 === (7))){
var inst_34757 = (state_34761[(2)]);
var state_34761__$1 = state_34761;
var statearr_34763_34827 = state_34761__$1;
(statearr_34763_34827[(2)] = inst_34757);

(statearr_34763_34827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (20))){
var state_34761__$1 = state_34761;
var statearr_34764_34828 = state_34761__$1;
(statearr_34764_34828[(2)] = null);

(statearr_34764_34828[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (1))){
var state_34761__$1 = state_34761;
var statearr_34765_34829 = state_34761__$1;
(statearr_34765_34829[(2)] = null);

(statearr_34765_34829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (4))){
var inst_34726 = (state_34761[(7)]);
var inst_34726__$1 = (state_34761[(2)]);
var inst_34727 = (inst_34726__$1 == null);
var state_34761__$1 = (function (){var statearr_34766 = state_34761;
(statearr_34766[(7)] = inst_34726__$1);

return statearr_34766;
})();
if(cljs.core.truth_(inst_34727)){
var statearr_34767_34830 = state_34761__$1;
(statearr_34767_34830[(1)] = (5));

} else {
var statearr_34768_34831 = state_34761__$1;
(statearr_34768_34831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (15))){
var inst_34739 = (state_34761[(8)]);
var state_34761__$1 = state_34761;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34761__$1,(18),to,inst_34739);
} else {
if((state_val_34762 === (21))){
var inst_34752 = (state_34761[(2)]);
var state_34761__$1 = state_34761;
var statearr_34769_34832 = state_34761__$1;
(statearr_34769_34832[(2)] = inst_34752);

(statearr_34769_34832[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (13))){
var inst_34754 = (state_34761[(2)]);
var state_34761__$1 = (function (){var statearr_34770 = state_34761;
(statearr_34770[(9)] = inst_34754);

return statearr_34770;
})();
var statearr_34771_34833 = state_34761__$1;
(statearr_34771_34833[(2)] = null);

(statearr_34771_34833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (6))){
var inst_34726 = (state_34761[(7)]);
var state_34761__$1 = state_34761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34761__$1,(11),inst_34726);
} else {
if((state_val_34762 === (17))){
var inst_34747 = (state_34761[(2)]);
var state_34761__$1 = state_34761;
if(cljs.core.truth_(inst_34747)){
var statearr_34772_34834 = state_34761__$1;
(statearr_34772_34834[(1)] = (19));

} else {
var statearr_34773_34835 = state_34761__$1;
(statearr_34773_34835[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (3))){
var inst_34759 = (state_34761[(2)]);
var state_34761__$1 = state_34761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34761__$1,inst_34759);
} else {
if((state_val_34762 === (12))){
var inst_34736 = (state_34761[(10)]);
var state_34761__$1 = state_34761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34761__$1,(14),inst_34736);
} else {
if((state_val_34762 === (2))){
var state_34761__$1 = state_34761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34761__$1,(4),results);
} else {
if((state_val_34762 === (19))){
var state_34761__$1 = state_34761;
var statearr_34774_34836 = state_34761__$1;
(statearr_34774_34836[(2)] = null);

(statearr_34774_34836[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (11))){
var inst_34736 = (state_34761[(2)]);
var state_34761__$1 = (function (){var statearr_34775 = state_34761;
(statearr_34775[(10)] = inst_34736);

return statearr_34775;
})();
var statearr_34776_34837 = state_34761__$1;
(statearr_34776_34837[(2)] = null);

(statearr_34776_34837[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (9))){
var state_34761__$1 = state_34761;
var statearr_34777_34838 = state_34761__$1;
(statearr_34777_34838[(2)] = null);

(statearr_34777_34838[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (5))){
var state_34761__$1 = state_34761;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34778_34839 = state_34761__$1;
(statearr_34778_34839[(1)] = (8));

} else {
var statearr_34779_34840 = state_34761__$1;
(statearr_34779_34840[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (14))){
var inst_34741 = (state_34761[(11)]);
var inst_34739 = (state_34761[(8)]);
var inst_34739__$1 = (state_34761[(2)]);
var inst_34740 = (inst_34739__$1 == null);
var inst_34741__$1 = cljs.core.not.call(null,inst_34740);
var state_34761__$1 = (function (){var statearr_34780 = state_34761;
(statearr_34780[(11)] = inst_34741__$1);

(statearr_34780[(8)] = inst_34739__$1);

return statearr_34780;
})();
if(inst_34741__$1){
var statearr_34781_34841 = state_34761__$1;
(statearr_34781_34841[(1)] = (15));

} else {
var statearr_34782_34842 = state_34761__$1;
(statearr_34782_34842[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (16))){
var inst_34741 = (state_34761[(11)]);
var state_34761__$1 = state_34761;
var statearr_34783_34843 = state_34761__$1;
(statearr_34783_34843[(2)] = inst_34741);

(statearr_34783_34843[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (10))){
var inst_34733 = (state_34761[(2)]);
var state_34761__$1 = state_34761;
var statearr_34784_34844 = state_34761__$1;
(statearr_34784_34844[(2)] = inst_34733);

(statearr_34784_34844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (18))){
var inst_34744 = (state_34761[(2)]);
var state_34761__$1 = state_34761;
var statearr_34785_34845 = state_34761__$1;
(statearr_34785_34845[(2)] = inst_34744);

(statearr_34785_34845[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (8))){
var inst_34730 = cljs.core.async.close_BANG_.call(null,to);
var state_34761__$1 = state_34761;
var statearr_34786_34846 = state_34761__$1;
(statearr_34786_34846[(2)] = inst_34730);

(statearr_34786_34846[(1)] = (10));


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
});})(c__34455__auto__,jobs,results,process,async))
;
return ((function (switch__34365__auto__,c__34455__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34366__auto____0 = (function (){
var statearr_34787 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34787[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34366__auto__);

(statearr_34787[(1)] = (1));

return statearr_34787;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34366__auto____1 = (function (state_34761){
while(true){
var ret_value__34367__auto__ = (function (){try{while(true){
var result__34368__auto__ = switch__34365__auto__.call(null,state_34761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34368__auto__;
}
break;
}
}catch (e34788){if((e34788 instanceof Object)){
var ex__34369__auto__ = e34788;
var statearr_34789_34847 = state_34761;
(statearr_34789_34847[(5)] = ex__34369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34848 = state_34761;
state_34761 = G__34848;
continue;
} else {
return ret_value__34367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34366__auto__ = function(state_34761){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34366__auto____1.call(this,state_34761);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34366__auto__;
})()
;})(switch__34365__auto__,c__34455__auto__,jobs,results,process,async))
})();
var state__34457__auto__ = (function (){var statearr_34790 = f__34456__auto__.call(null);
(statearr_34790[(6)] = c__34455__auto__);

return statearr_34790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34457__auto__);
});})(c__34455__auto__,jobs,results,process,async))
);

return c__34455__auto__;
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
var G__34850 = arguments.length;
switch (G__34850) {
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
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__34853 = arguments.length;
switch (G__34853) {
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
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__34856 = arguments.length;
switch (G__34856) {
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
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__34455__auto___34905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34455__auto___34905,tc,fc){
return (function (){
var f__34456__auto__ = (function (){var switch__34365__auto__ = ((function (c__34455__auto___34905,tc,fc){
return (function (state_34882){
var state_val_34883 = (state_34882[(1)]);
if((state_val_34883 === (7))){
var inst_34878 = (state_34882[(2)]);
var state_34882__$1 = state_34882;
var statearr_34884_34906 = state_34882__$1;
(statearr_34884_34906[(2)] = inst_34878);

(statearr_34884_34906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34883 === (1))){
var state_34882__$1 = state_34882;
var statearr_34885_34907 = state_34882__$1;
(statearr_34885_34907[(2)] = null);

(statearr_34885_34907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34883 === (4))){
var inst_34859 = (state_34882[(7)]);
var inst_34859__$1 = (state_34882[(2)]);
var inst_34860 = (inst_34859__$1 == null);
var state_34882__$1 = (function (){var statearr_34886 = state_34882;
(statearr_34886[(7)] = inst_34859__$1);

return statearr_34886;
})();
if(cljs.core.truth_(inst_34860)){
var statearr_34887_34908 = state_34882__$1;
(statearr_34887_34908[(1)] = (5));

} else {
var statearr_34888_34909 = state_34882__$1;
(statearr_34888_34909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34883 === (13))){
var state_34882__$1 = state_34882;
var statearr_34889_34910 = state_34882__$1;
(statearr_34889_34910[(2)] = null);

(statearr_34889_34910[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34883 === (6))){
var inst_34859 = (state_34882[(7)]);
var inst_34865 = p.call(null,inst_34859);
var state_34882__$1 = state_34882;
if(cljs.core.truth_(inst_34865)){
var statearr_34890_34911 = state_34882__$1;
(statearr_34890_34911[(1)] = (9));

} else {
var statearr_34891_34912 = state_34882__$1;
(statearr_34891_34912[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34883 === (3))){
var inst_34880 = (state_34882[(2)]);
var state_34882__$1 = state_34882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34882__$1,inst_34880);
} else {
if((state_val_34883 === (12))){
var state_34882__$1 = state_34882;
var statearr_34892_34913 = state_34882__$1;
(statearr_34892_34913[(2)] = null);

(statearr_34892_34913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34883 === (2))){
var state_34882__$1 = state_34882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34882__$1,(4),ch);
} else {
if((state_val_34883 === (11))){
var inst_34859 = (state_34882[(7)]);
var inst_34869 = (state_34882[(2)]);
var state_34882__$1 = state_34882;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34882__$1,(8),inst_34869,inst_34859);
} else {
if((state_val_34883 === (9))){
var state_34882__$1 = state_34882;
var statearr_34893_34914 = state_34882__$1;
(statearr_34893_34914[(2)] = tc);

(statearr_34893_34914[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34883 === (5))){
var inst_34862 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34863 = cljs.core.async.close_BANG_.call(null,fc);
var state_34882__$1 = (function (){var statearr_34894 = state_34882;
(statearr_34894[(8)] = inst_34862);

return statearr_34894;
})();
var statearr_34895_34915 = state_34882__$1;
(statearr_34895_34915[(2)] = inst_34863);

(statearr_34895_34915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34883 === (14))){
var inst_34876 = (state_34882[(2)]);
var state_34882__$1 = state_34882;
var statearr_34896_34916 = state_34882__$1;
(statearr_34896_34916[(2)] = inst_34876);

(statearr_34896_34916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34883 === (10))){
var state_34882__$1 = state_34882;
var statearr_34897_34917 = state_34882__$1;
(statearr_34897_34917[(2)] = fc);

(statearr_34897_34917[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34883 === (8))){
var inst_34871 = (state_34882[(2)]);
var state_34882__$1 = state_34882;
if(cljs.core.truth_(inst_34871)){
var statearr_34898_34918 = state_34882__$1;
(statearr_34898_34918[(1)] = (12));

} else {
var statearr_34899_34919 = state_34882__$1;
(statearr_34899_34919[(1)] = (13));

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
});})(c__34455__auto___34905,tc,fc))
;
return ((function (switch__34365__auto__,c__34455__auto___34905,tc,fc){
return (function() {
var cljs$core$async$state_machine__34366__auto__ = null;
var cljs$core$async$state_machine__34366__auto____0 = (function (){
var statearr_34900 = [null,null,null,null,null,null,null,null,null];
(statearr_34900[(0)] = cljs$core$async$state_machine__34366__auto__);

(statearr_34900[(1)] = (1));

return statearr_34900;
});
var cljs$core$async$state_machine__34366__auto____1 = (function (state_34882){
while(true){
var ret_value__34367__auto__ = (function (){try{while(true){
var result__34368__auto__ = switch__34365__auto__.call(null,state_34882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34368__auto__;
}
break;
}
}catch (e34901){if((e34901 instanceof Object)){
var ex__34369__auto__ = e34901;
var statearr_34902_34920 = state_34882;
(statearr_34902_34920[(5)] = ex__34369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34921 = state_34882;
state_34882 = G__34921;
continue;
} else {
return ret_value__34367__auto__;
}
break;
}
});
cljs$core$async$state_machine__34366__auto__ = function(state_34882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34366__auto____1.call(this,state_34882);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34366__auto____0;
cljs$core$async$state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34366__auto____1;
return cljs$core$async$state_machine__34366__auto__;
})()
;})(switch__34365__auto__,c__34455__auto___34905,tc,fc))
})();
var state__34457__auto__ = (function (){var statearr_34903 = f__34456__auto__.call(null);
(statearr_34903[(6)] = c__34455__auto___34905);

return statearr_34903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34457__auto__);
});})(c__34455__auto___34905,tc,fc))
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
var c__34455__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34455__auto__){
return (function (){
var f__34456__auto__ = (function (){var switch__34365__auto__ = ((function (c__34455__auto__){
return (function (state_34942){
var state_val_34943 = (state_34942[(1)]);
if((state_val_34943 === (7))){
var inst_34938 = (state_34942[(2)]);
var state_34942__$1 = state_34942;
var statearr_34944_34962 = state_34942__$1;
(statearr_34944_34962[(2)] = inst_34938);

(statearr_34944_34962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (1))){
var inst_34922 = init;
var state_34942__$1 = (function (){var statearr_34945 = state_34942;
(statearr_34945[(7)] = inst_34922);

return statearr_34945;
})();
var statearr_34946_34963 = state_34942__$1;
(statearr_34946_34963[(2)] = null);

(statearr_34946_34963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (4))){
var inst_34925 = (state_34942[(8)]);
var inst_34925__$1 = (state_34942[(2)]);
var inst_34926 = (inst_34925__$1 == null);
var state_34942__$1 = (function (){var statearr_34947 = state_34942;
(statearr_34947[(8)] = inst_34925__$1);

return statearr_34947;
})();
if(cljs.core.truth_(inst_34926)){
var statearr_34948_34964 = state_34942__$1;
(statearr_34948_34964[(1)] = (5));

} else {
var statearr_34949_34965 = state_34942__$1;
(statearr_34949_34965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (6))){
var inst_34929 = (state_34942[(9)]);
var inst_34925 = (state_34942[(8)]);
var inst_34922 = (state_34942[(7)]);
var inst_34929__$1 = f.call(null,inst_34922,inst_34925);
var inst_34930 = cljs.core.reduced_QMARK_.call(null,inst_34929__$1);
var state_34942__$1 = (function (){var statearr_34950 = state_34942;
(statearr_34950[(9)] = inst_34929__$1);

return statearr_34950;
})();
if(inst_34930){
var statearr_34951_34966 = state_34942__$1;
(statearr_34951_34966[(1)] = (8));

} else {
var statearr_34952_34967 = state_34942__$1;
(statearr_34952_34967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (3))){
var inst_34940 = (state_34942[(2)]);
var state_34942__$1 = state_34942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34942__$1,inst_34940);
} else {
if((state_val_34943 === (2))){
var state_34942__$1 = state_34942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34942__$1,(4),ch);
} else {
if((state_val_34943 === (9))){
var inst_34929 = (state_34942[(9)]);
var inst_34922 = inst_34929;
var state_34942__$1 = (function (){var statearr_34953 = state_34942;
(statearr_34953[(7)] = inst_34922);

return statearr_34953;
})();
var statearr_34954_34968 = state_34942__$1;
(statearr_34954_34968[(2)] = null);

(statearr_34954_34968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (5))){
var inst_34922 = (state_34942[(7)]);
var state_34942__$1 = state_34942;
var statearr_34955_34969 = state_34942__$1;
(statearr_34955_34969[(2)] = inst_34922);

(statearr_34955_34969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (10))){
var inst_34936 = (state_34942[(2)]);
var state_34942__$1 = state_34942;
var statearr_34956_34970 = state_34942__$1;
(statearr_34956_34970[(2)] = inst_34936);

(statearr_34956_34970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (8))){
var inst_34929 = (state_34942[(9)]);
var inst_34932 = cljs.core.deref.call(null,inst_34929);
var state_34942__$1 = state_34942;
var statearr_34957_34971 = state_34942__$1;
(statearr_34957_34971[(2)] = inst_34932);

(statearr_34957_34971[(1)] = (10));


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
});})(c__34455__auto__))
;
return ((function (switch__34365__auto__,c__34455__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__34366__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34366__auto____0 = (function (){
var statearr_34958 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34958[(0)] = cljs$core$async$reduce_$_state_machine__34366__auto__);

(statearr_34958[(1)] = (1));

return statearr_34958;
});
var cljs$core$async$reduce_$_state_machine__34366__auto____1 = (function (state_34942){
while(true){
var ret_value__34367__auto__ = (function (){try{while(true){
var result__34368__auto__ = switch__34365__auto__.call(null,state_34942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34368__auto__;
}
break;
}
}catch (e34959){if((e34959 instanceof Object)){
var ex__34369__auto__ = e34959;
var statearr_34960_34972 = state_34942;
(statearr_34960_34972[(5)] = ex__34369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34973 = state_34942;
state_34942 = G__34973;
continue;
} else {
return ret_value__34367__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34366__auto__ = function(state_34942){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34366__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34366__auto____1.call(this,state_34942);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34366__auto____0;
cljs$core$async$reduce_$_state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34366__auto____1;
return cljs$core$async$reduce_$_state_machine__34366__auto__;
})()
;})(switch__34365__auto__,c__34455__auto__))
})();
var state__34457__auto__ = (function (){var statearr_34961 = f__34456__auto__.call(null);
(statearr_34961[(6)] = c__34455__auto__);

return statearr_34961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34457__auto__);
});})(c__34455__auto__))
);

return c__34455__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__34455__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34455__auto__,f__$1){
return (function (){
var f__34456__auto__ = (function (){var switch__34365__auto__ = ((function (c__34455__auto__,f__$1){
return (function (state_34979){
var state_val_34980 = (state_34979[(1)]);
if((state_val_34980 === (1))){
var inst_34974 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34979__$1 = state_34979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34979__$1,(2),inst_34974);
} else {
if((state_val_34980 === (2))){
var inst_34976 = (state_34979[(2)]);
var inst_34977 = f__$1.call(null,inst_34976);
var state_34979__$1 = state_34979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34979__$1,inst_34977);
} else {
return null;
}
}
});})(c__34455__auto__,f__$1))
;
return ((function (switch__34365__auto__,c__34455__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__34366__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34366__auto____0 = (function (){
var statearr_34981 = [null,null,null,null,null,null,null];
(statearr_34981[(0)] = cljs$core$async$transduce_$_state_machine__34366__auto__);

(statearr_34981[(1)] = (1));

return statearr_34981;
});
var cljs$core$async$transduce_$_state_machine__34366__auto____1 = (function (state_34979){
while(true){
var ret_value__34367__auto__ = (function (){try{while(true){
var result__34368__auto__ = switch__34365__auto__.call(null,state_34979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34368__auto__;
}
break;
}
}catch (e34982){if((e34982 instanceof Object)){
var ex__34369__auto__ = e34982;
var statearr_34983_34985 = state_34979;
(statearr_34983_34985[(5)] = ex__34369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34986 = state_34979;
state_34979 = G__34986;
continue;
} else {
return ret_value__34367__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34366__auto__ = function(state_34979){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34366__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34366__auto____1.call(this,state_34979);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34366__auto____0;
cljs$core$async$transduce_$_state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34366__auto____1;
return cljs$core$async$transduce_$_state_machine__34366__auto__;
})()
;})(switch__34365__auto__,c__34455__auto__,f__$1))
})();
var state__34457__auto__ = (function (){var statearr_34984 = f__34456__auto__.call(null);
(statearr_34984[(6)] = c__34455__auto__);

return statearr_34984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34457__auto__);
});})(c__34455__auto__,f__$1))
);

return c__34455__auto__;
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
var G__34988 = arguments.length;
switch (G__34988) {
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
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34455__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34455__auto__){
return (function (){
var f__34456__auto__ = (function (){var switch__34365__auto__ = ((function (c__34455__auto__){
return (function (state_35013){
var state_val_35014 = (state_35013[(1)]);
if((state_val_35014 === (7))){
var inst_34995 = (state_35013[(2)]);
var state_35013__$1 = state_35013;
var statearr_35015_35036 = state_35013__$1;
(statearr_35015_35036[(2)] = inst_34995);

(statearr_35015_35036[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35014 === (1))){
var inst_34989 = cljs.core.seq.call(null,coll);
var inst_34990 = inst_34989;
var state_35013__$1 = (function (){var statearr_35016 = state_35013;
(statearr_35016[(7)] = inst_34990);

return statearr_35016;
})();
var statearr_35017_35037 = state_35013__$1;
(statearr_35017_35037[(2)] = null);

(statearr_35017_35037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35014 === (4))){
var inst_34990 = (state_35013[(7)]);
var inst_34993 = cljs.core.first.call(null,inst_34990);
var state_35013__$1 = state_35013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35013__$1,(7),ch,inst_34993);
} else {
if((state_val_35014 === (13))){
var inst_35007 = (state_35013[(2)]);
var state_35013__$1 = state_35013;
var statearr_35018_35038 = state_35013__$1;
(statearr_35018_35038[(2)] = inst_35007);

(statearr_35018_35038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35014 === (6))){
var inst_34998 = (state_35013[(2)]);
var state_35013__$1 = state_35013;
if(cljs.core.truth_(inst_34998)){
var statearr_35019_35039 = state_35013__$1;
(statearr_35019_35039[(1)] = (8));

} else {
var statearr_35020_35040 = state_35013__$1;
(statearr_35020_35040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35014 === (3))){
var inst_35011 = (state_35013[(2)]);
var state_35013__$1 = state_35013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35013__$1,inst_35011);
} else {
if((state_val_35014 === (12))){
var state_35013__$1 = state_35013;
var statearr_35021_35041 = state_35013__$1;
(statearr_35021_35041[(2)] = null);

(statearr_35021_35041[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35014 === (2))){
var inst_34990 = (state_35013[(7)]);
var state_35013__$1 = state_35013;
if(cljs.core.truth_(inst_34990)){
var statearr_35022_35042 = state_35013__$1;
(statearr_35022_35042[(1)] = (4));

} else {
var statearr_35023_35043 = state_35013__$1;
(statearr_35023_35043[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35014 === (11))){
var inst_35004 = cljs.core.async.close_BANG_.call(null,ch);
var state_35013__$1 = state_35013;
var statearr_35024_35044 = state_35013__$1;
(statearr_35024_35044[(2)] = inst_35004);

(statearr_35024_35044[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35014 === (9))){
var state_35013__$1 = state_35013;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35025_35045 = state_35013__$1;
(statearr_35025_35045[(1)] = (11));

} else {
var statearr_35026_35046 = state_35013__$1;
(statearr_35026_35046[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35014 === (5))){
var inst_34990 = (state_35013[(7)]);
var state_35013__$1 = state_35013;
var statearr_35027_35047 = state_35013__$1;
(statearr_35027_35047[(2)] = inst_34990);

(statearr_35027_35047[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35014 === (10))){
var inst_35009 = (state_35013[(2)]);
var state_35013__$1 = state_35013;
var statearr_35028_35048 = state_35013__$1;
(statearr_35028_35048[(2)] = inst_35009);

(statearr_35028_35048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35014 === (8))){
var inst_34990 = (state_35013[(7)]);
var inst_35000 = cljs.core.next.call(null,inst_34990);
var inst_34990__$1 = inst_35000;
var state_35013__$1 = (function (){var statearr_35029 = state_35013;
(statearr_35029[(7)] = inst_34990__$1);

return statearr_35029;
})();
var statearr_35030_35049 = state_35013__$1;
(statearr_35030_35049[(2)] = null);

(statearr_35030_35049[(1)] = (2));


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
});})(c__34455__auto__))
;
return ((function (switch__34365__auto__,c__34455__auto__){
return (function() {
var cljs$core$async$state_machine__34366__auto__ = null;
var cljs$core$async$state_machine__34366__auto____0 = (function (){
var statearr_35031 = [null,null,null,null,null,null,null,null];
(statearr_35031[(0)] = cljs$core$async$state_machine__34366__auto__);

(statearr_35031[(1)] = (1));

return statearr_35031;
});
var cljs$core$async$state_machine__34366__auto____1 = (function (state_35013){
while(true){
var ret_value__34367__auto__ = (function (){try{while(true){
var result__34368__auto__ = switch__34365__auto__.call(null,state_35013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34368__auto__;
}
break;
}
}catch (e35032){if((e35032 instanceof Object)){
var ex__34369__auto__ = e35032;
var statearr_35033_35050 = state_35013;
(statearr_35033_35050[(5)] = ex__34369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35051 = state_35013;
state_35013 = G__35051;
continue;
} else {
return ret_value__34367__auto__;
}
break;
}
});
cljs$core$async$state_machine__34366__auto__ = function(state_35013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34366__auto____1.call(this,state_35013);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34366__auto____0;
cljs$core$async$state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34366__auto____1;
return cljs$core$async$state_machine__34366__auto__;
})()
;})(switch__34365__auto__,c__34455__auto__))
})();
var state__34457__auto__ = (function (){var statearr_35034 = f__34456__auto__.call(null);
(statearr_35034[(6)] = c__34455__auto__);

return statearr_35034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34457__auto__);
});})(c__34455__auto__))
);

return c__34455__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__31522__auto__ = (((_ == null))?null:_);
var m__31523__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__31522__auto__)]);
if(!((m__31523__auto__ == null))){
return m__31523__auto__.call(null,_);
} else {
var m__31523__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__31523__auto____$1 == null))){
return m__31523__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__31522__auto__ = (((m == null))?null:m);
var m__31523__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__31522__auto__)]);
if(!((m__31523__auto__ == null))){
return m__31523__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__31523__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__31523__auto____$1 == null))){
return m__31523__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__31522__auto__ = (((m == null))?null:m);
var m__31523__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__31522__auto__)]);
if(!((m__31523__auto__ == null))){
return m__31523__auto__.call(null,m,ch);
} else {
var m__31523__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__31523__auto____$1 == null))){
return m__31523__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__31522__auto__ = (((m == null))?null:m);
var m__31523__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__31522__auto__)]);
if(!((m__31523__auto__ == null))){
return m__31523__auto__.call(null,m);
} else {
var m__31523__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__31523__auto____$1 == null))){
return m__31523__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async35052 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35052 = (function (ch,cs,meta35053){
this.ch = ch;
this.cs = cs;
this.meta35053 = meta35053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35054,meta35053__$1){
var self__ = this;
var _35054__$1 = this;
return (new cljs.core.async.t_cljs$core$async35052(self__.ch,self__.cs,meta35053__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async35052.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35054){
var self__ = this;
var _35054__$1 = this;
return self__.meta35053;
});})(cs))
;

cljs.core.async.t_cljs$core$async35052.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35052.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async35052.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35052.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35052.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35052.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35052.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35053","meta35053",1028203628,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async35052.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35052.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35052";

cljs.core.async.t_cljs$core$async35052.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__31460__auto__,writer__31461__auto__,opt__31462__auto__){
return cljs.core._write.call(null,writer__31461__auto__,"cljs.core.async/t_cljs$core$async35052");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async35052 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async35052(ch__$1,cs__$1,meta35053){
return (new cljs.core.async.t_cljs$core$async35052(ch__$1,cs__$1,meta35053));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async35052(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__34455__auto___35274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34455__auto___35274,cs,m,dchan,dctr,done){
return (function (){
var f__34456__auto__ = (function (){var switch__34365__auto__ = ((function (c__34455__auto___35274,cs,m,dchan,dctr,done){
return (function (state_35189){
var state_val_35190 = (state_35189[(1)]);
if((state_val_35190 === (7))){
var inst_35185 = (state_35189[(2)]);
var state_35189__$1 = state_35189;
var statearr_35191_35275 = state_35189__$1;
(statearr_35191_35275[(2)] = inst_35185);

(statearr_35191_35275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (20))){
var inst_35088 = (state_35189[(7)]);
var inst_35100 = cljs.core.first.call(null,inst_35088);
var inst_35101 = cljs.core.nth.call(null,inst_35100,(0),null);
var inst_35102 = cljs.core.nth.call(null,inst_35100,(1),null);
var state_35189__$1 = (function (){var statearr_35192 = state_35189;
(statearr_35192[(8)] = inst_35101);

return statearr_35192;
})();
if(cljs.core.truth_(inst_35102)){
var statearr_35193_35276 = state_35189__$1;
(statearr_35193_35276[(1)] = (22));

} else {
var statearr_35194_35277 = state_35189__$1;
(statearr_35194_35277[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (27))){
var inst_35130 = (state_35189[(9)]);
var inst_35057 = (state_35189[(10)]);
var inst_35132 = (state_35189[(11)]);
var inst_35137 = (state_35189[(12)]);
var inst_35137__$1 = cljs.core._nth.call(null,inst_35130,inst_35132);
var inst_35138 = cljs.core.async.put_BANG_.call(null,inst_35137__$1,inst_35057,done);
var state_35189__$1 = (function (){var statearr_35195 = state_35189;
(statearr_35195[(12)] = inst_35137__$1);

return statearr_35195;
})();
if(cljs.core.truth_(inst_35138)){
var statearr_35196_35278 = state_35189__$1;
(statearr_35196_35278[(1)] = (30));

} else {
var statearr_35197_35279 = state_35189__$1;
(statearr_35197_35279[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (1))){
var state_35189__$1 = state_35189;
var statearr_35198_35280 = state_35189__$1;
(statearr_35198_35280[(2)] = null);

(statearr_35198_35280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (24))){
var inst_35088 = (state_35189[(7)]);
var inst_35107 = (state_35189[(2)]);
var inst_35108 = cljs.core.next.call(null,inst_35088);
var inst_35066 = inst_35108;
var inst_35067 = null;
var inst_35068 = (0);
var inst_35069 = (0);
var state_35189__$1 = (function (){var statearr_35199 = state_35189;
(statearr_35199[(13)] = inst_35107);

(statearr_35199[(14)] = inst_35067);

(statearr_35199[(15)] = inst_35068);

(statearr_35199[(16)] = inst_35069);

(statearr_35199[(17)] = inst_35066);

return statearr_35199;
})();
var statearr_35200_35281 = state_35189__$1;
(statearr_35200_35281[(2)] = null);

(statearr_35200_35281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (39))){
var state_35189__$1 = state_35189;
var statearr_35204_35282 = state_35189__$1;
(statearr_35204_35282[(2)] = null);

(statearr_35204_35282[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (4))){
var inst_35057 = (state_35189[(10)]);
var inst_35057__$1 = (state_35189[(2)]);
var inst_35058 = (inst_35057__$1 == null);
var state_35189__$1 = (function (){var statearr_35205 = state_35189;
(statearr_35205[(10)] = inst_35057__$1);

return statearr_35205;
})();
if(cljs.core.truth_(inst_35058)){
var statearr_35206_35283 = state_35189__$1;
(statearr_35206_35283[(1)] = (5));

} else {
var statearr_35207_35284 = state_35189__$1;
(statearr_35207_35284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (15))){
var inst_35067 = (state_35189[(14)]);
var inst_35068 = (state_35189[(15)]);
var inst_35069 = (state_35189[(16)]);
var inst_35066 = (state_35189[(17)]);
var inst_35084 = (state_35189[(2)]);
var inst_35085 = (inst_35069 + (1));
var tmp35201 = inst_35067;
var tmp35202 = inst_35068;
var tmp35203 = inst_35066;
var inst_35066__$1 = tmp35203;
var inst_35067__$1 = tmp35201;
var inst_35068__$1 = tmp35202;
var inst_35069__$1 = inst_35085;
var state_35189__$1 = (function (){var statearr_35208 = state_35189;
(statearr_35208[(14)] = inst_35067__$1);

(statearr_35208[(18)] = inst_35084);

(statearr_35208[(15)] = inst_35068__$1);

(statearr_35208[(16)] = inst_35069__$1);

(statearr_35208[(17)] = inst_35066__$1);

return statearr_35208;
})();
var statearr_35209_35285 = state_35189__$1;
(statearr_35209_35285[(2)] = null);

(statearr_35209_35285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (21))){
var inst_35111 = (state_35189[(2)]);
var state_35189__$1 = state_35189;
var statearr_35213_35286 = state_35189__$1;
(statearr_35213_35286[(2)] = inst_35111);

(statearr_35213_35286[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (31))){
var inst_35137 = (state_35189[(12)]);
var inst_35141 = done.call(null,null);
var inst_35142 = cljs.core.async.untap_STAR_.call(null,m,inst_35137);
var state_35189__$1 = (function (){var statearr_35214 = state_35189;
(statearr_35214[(19)] = inst_35141);

return statearr_35214;
})();
var statearr_35215_35287 = state_35189__$1;
(statearr_35215_35287[(2)] = inst_35142);

(statearr_35215_35287[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (32))){
var inst_35131 = (state_35189[(20)]);
var inst_35130 = (state_35189[(9)]);
var inst_35129 = (state_35189[(21)]);
var inst_35132 = (state_35189[(11)]);
var inst_35144 = (state_35189[(2)]);
var inst_35145 = (inst_35132 + (1));
var tmp35210 = inst_35131;
var tmp35211 = inst_35130;
var tmp35212 = inst_35129;
var inst_35129__$1 = tmp35212;
var inst_35130__$1 = tmp35211;
var inst_35131__$1 = tmp35210;
var inst_35132__$1 = inst_35145;
var state_35189__$1 = (function (){var statearr_35216 = state_35189;
(statearr_35216[(20)] = inst_35131__$1);

(statearr_35216[(9)] = inst_35130__$1);

(statearr_35216[(22)] = inst_35144);

(statearr_35216[(21)] = inst_35129__$1);

(statearr_35216[(11)] = inst_35132__$1);

return statearr_35216;
})();
var statearr_35217_35288 = state_35189__$1;
(statearr_35217_35288[(2)] = null);

(statearr_35217_35288[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (40))){
var inst_35157 = (state_35189[(23)]);
var inst_35161 = done.call(null,null);
var inst_35162 = cljs.core.async.untap_STAR_.call(null,m,inst_35157);
var state_35189__$1 = (function (){var statearr_35218 = state_35189;
(statearr_35218[(24)] = inst_35161);

return statearr_35218;
})();
var statearr_35219_35289 = state_35189__$1;
(statearr_35219_35289[(2)] = inst_35162);

(statearr_35219_35289[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (33))){
var inst_35148 = (state_35189[(25)]);
var inst_35150 = cljs.core.chunked_seq_QMARK_.call(null,inst_35148);
var state_35189__$1 = state_35189;
if(inst_35150){
var statearr_35220_35290 = state_35189__$1;
(statearr_35220_35290[(1)] = (36));

} else {
var statearr_35221_35291 = state_35189__$1;
(statearr_35221_35291[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (13))){
var inst_35078 = (state_35189[(26)]);
var inst_35081 = cljs.core.async.close_BANG_.call(null,inst_35078);
var state_35189__$1 = state_35189;
var statearr_35222_35292 = state_35189__$1;
(statearr_35222_35292[(2)] = inst_35081);

(statearr_35222_35292[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (22))){
var inst_35101 = (state_35189[(8)]);
var inst_35104 = cljs.core.async.close_BANG_.call(null,inst_35101);
var state_35189__$1 = state_35189;
var statearr_35223_35293 = state_35189__$1;
(statearr_35223_35293[(2)] = inst_35104);

(statearr_35223_35293[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (36))){
var inst_35148 = (state_35189[(25)]);
var inst_35152 = cljs.core.chunk_first.call(null,inst_35148);
var inst_35153 = cljs.core.chunk_rest.call(null,inst_35148);
var inst_35154 = cljs.core.count.call(null,inst_35152);
var inst_35129 = inst_35153;
var inst_35130 = inst_35152;
var inst_35131 = inst_35154;
var inst_35132 = (0);
var state_35189__$1 = (function (){var statearr_35224 = state_35189;
(statearr_35224[(20)] = inst_35131);

(statearr_35224[(9)] = inst_35130);

(statearr_35224[(21)] = inst_35129);

(statearr_35224[(11)] = inst_35132);

return statearr_35224;
})();
var statearr_35225_35294 = state_35189__$1;
(statearr_35225_35294[(2)] = null);

(statearr_35225_35294[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (41))){
var inst_35148 = (state_35189[(25)]);
var inst_35164 = (state_35189[(2)]);
var inst_35165 = cljs.core.next.call(null,inst_35148);
var inst_35129 = inst_35165;
var inst_35130 = null;
var inst_35131 = (0);
var inst_35132 = (0);
var state_35189__$1 = (function (){var statearr_35226 = state_35189;
(statearr_35226[(20)] = inst_35131);

(statearr_35226[(9)] = inst_35130);

(statearr_35226[(27)] = inst_35164);

(statearr_35226[(21)] = inst_35129);

(statearr_35226[(11)] = inst_35132);

return statearr_35226;
})();
var statearr_35227_35295 = state_35189__$1;
(statearr_35227_35295[(2)] = null);

(statearr_35227_35295[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (43))){
var state_35189__$1 = state_35189;
var statearr_35228_35296 = state_35189__$1;
(statearr_35228_35296[(2)] = null);

(statearr_35228_35296[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (29))){
var inst_35173 = (state_35189[(2)]);
var state_35189__$1 = state_35189;
var statearr_35229_35297 = state_35189__$1;
(statearr_35229_35297[(2)] = inst_35173);

(statearr_35229_35297[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (44))){
var inst_35182 = (state_35189[(2)]);
var state_35189__$1 = (function (){var statearr_35230 = state_35189;
(statearr_35230[(28)] = inst_35182);

return statearr_35230;
})();
var statearr_35231_35298 = state_35189__$1;
(statearr_35231_35298[(2)] = null);

(statearr_35231_35298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (6))){
var inst_35121 = (state_35189[(29)]);
var inst_35120 = cljs.core.deref.call(null,cs);
var inst_35121__$1 = cljs.core.keys.call(null,inst_35120);
var inst_35122 = cljs.core.count.call(null,inst_35121__$1);
var inst_35123 = cljs.core.reset_BANG_.call(null,dctr,inst_35122);
var inst_35128 = cljs.core.seq.call(null,inst_35121__$1);
var inst_35129 = inst_35128;
var inst_35130 = null;
var inst_35131 = (0);
var inst_35132 = (0);
var state_35189__$1 = (function (){var statearr_35232 = state_35189;
(statearr_35232[(20)] = inst_35131);

(statearr_35232[(9)] = inst_35130);

(statearr_35232[(30)] = inst_35123);

(statearr_35232[(29)] = inst_35121__$1);

(statearr_35232[(21)] = inst_35129);

(statearr_35232[(11)] = inst_35132);

return statearr_35232;
})();
var statearr_35233_35299 = state_35189__$1;
(statearr_35233_35299[(2)] = null);

(statearr_35233_35299[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (28))){
var inst_35148 = (state_35189[(25)]);
var inst_35129 = (state_35189[(21)]);
var inst_35148__$1 = cljs.core.seq.call(null,inst_35129);
var state_35189__$1 = (function (){var statearr_35234 = state_35189;
(statearr_35234[(25)] = inst_35148__$1);

return statearr_35234;
})();
if(inst_35148__$1){
var statearr_35235_35300 = state_35189__$1;
(statearr_35235_35300[(1)] = (33));

} else {
var statearr_35236_35301 = state_35189__$1;
(statearr_35236_35301[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (25))){
var inst_35131 = (state_35189[(20)]);
var inst_35132 = (state_35189[(11)]);
var inst_35134 = (inst_35132 < inst_35131);
var inst_35135 = inst_35134;
var state_35189__$1 = state_35189;
if(cljs.core.truth_(inst_35135)){
var statearr_35237_35302 = state_35189__$1;
(statearr_35237_35302[(1)] = (27));

} else {
var statearr_35238_35303 = state_35189__$1;
(statearr_35238_35303[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (34))){
var state_35189__$1 = state_35189;
var statearr_35239_35304 = state_35189__$1;
(statearr_35239_35304[(2)] = null);

(statearr_35239_35304[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (17))){
var state_35189__$1 = state_35189;
var statearr_35240_35305 = state_35189__$1;
(statearr_35240_35305[(2)] = null);

(statearr_35240_35305[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (3))){
var inst_35187 = (state_35189[(2)]);
var state_35189__$1 = state_35189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35189__$1,inst_35187);
} else {
if((state_val_35190 === (12))){
var inst_35116 = (state_35189[(2)]);
var state_35189__$1 = state_35189;
var statearr_35241_35306 = state_35189__$1;
(statearr_35241_35306[(2)] = inst_35116);

(statearr_35241_35306[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (2))){
var state_35189__$1 = state_35189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35189__$1,(4),ch);
} else {
if((state_val_35190 === (23))){
var state_35189__$1 = state_35189;
var statearr_35242_35307 = state_35189__$1;
(statearr_35242_35307[(2)] = null);

(statearr_35242_35307[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (35))){
var inst_35171 = (state_35189[(2)]);
var state_35189__$1 = state_35189;
var statearr_35243_35308 = state_35189__$1;
(statearr_35243_35308[(2)] = inst_35171);

(statearr_35243_35308[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (19))){
var inst_35088 = (state_35189[(7)]);
var inst_35092 = cljs.core.chunk_first.call(null,inst_35088);
var inst_35093 = cljs.core.chunk_rest.call(null,inst_35088);
var inst_35094 = cljs.core.count.call(null,inst_35092);
var inst_35066 = inst_35093;
var inst_35067 = inst_35092;
var inst_35068 = inst_35094;
var inst_35069 = (0);
var state_35189__$1 = (function (){var statearr_35244 = state_35189;
(statearr_35244[(14)] = inst_35067);

(statearr_35244[(15)] = inst_35068);

(statearr_35244[(16)] = inst_35069);

(statearr_35244[(17)] = inst_35066);

return statearr_35244;
})();
var statearr_35245_35309 = state_35189__$1;
(statearr_35245_35309[(2)] = null);

(statearr_35245_35309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (11))){
var inst_35088 = (state_35189[(7)]);
var inst_35066 = (state_35189[(17)]);
var inst_35088__$1 = cljs.core.seq.call(null,inst_35066);
var state_35189__$1 = (function (){var statearr_35246 = state_35189;
(statearr_35246[(7)] = inst_35088__$1);

return statearr_35246;
})();
if(inst_35088__$1){
var statearr_35247_35310 = state_35189__$1;
(statearr_35247_35310[(1)] = (16));

} else {
var statearr_35248_35311 = state_35189__$1;
(statearr_35248_35311[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (9))){
var inst_35118 = (state_35189[(2)]);
var state_35189__$1 = state_35189;
var statearr_35249_35312 = state_35189__$1;
(statearr_35249_35312[(2)] = inst_35118);

(statearr_35249_35312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (5))){
var inst_35064 = cljs.core.deref.call(null,cs);
var inst_35065 = cljs.core.seq.call(null,inst_35064);
var inst_35066 = inst_35065;
var inst_35067 = null;
var inst_35068 = (0);
var inst_35069 = (0);
var state_35189__$1 = (function (){var statearr_35250 = state_35189;
(statearr_35250[(14)] = inst_35067);

(statearr_35250[(15)] = inst_35068);

(statearr_35250[(16)] = inst_35069);

(statearr_35250[(17)] = inst_35066);

return statearr_35250;
})();
var statearr_35251_35313 = state_35189__$1;
(statearr_35251_35313[(2)] = null);

(statearr_35251_35313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (14))){
var state_35189__$1 = state_35189;
var statearr_35252_35314 = state_35189__$1;
(statearr_35252_35314[(2)] = null);

(statearr_35252_35314[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (45))){
var inst_35179 = (state_35189[(2)]);
var state_35189__$1 = state_35189;
var statearr_35253_35315 = state_35189__$1;
(statearr_35253_35315[(2)] = inst_35179);

(statearr_35253_35315[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (26))){
var inst_35121 = (state_35189[(29)]);
var inst_35175 = (state_35189[(2)]);
var inst_35176 = cljs.core.seq.call(null,inst_35121);
var state_35189__$1 = (function (){var statearr_35254 = state_35189;
(statearr_35254[(31)] = inst_35175);

return statearr_35254;
})();
if(inst_35176){
var statearr_35255_35316 = state_35189__$1;
(statearr_35255_35316[(1)] = (42));

} else {
var statearr_35256_35317 = state_35189__$1;
(statearr_35256_35317[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (16))){
var inst_35088 = (state_35189[(7)]);
var inst_35090 = cljs.core.chunked_seq_QMARK_.call(null,inst_35088);
var state_35189__$1 = state_35189;
if(inst_35090){
var statearr_35257_35318 = state_35189__$1;
(statearr_35257_35318[(1)] = (19));

} else {
var statearr_35258_35319 = state_35189__$1;
(statearr_35258_35319[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (38))){
var inst_35168 = (state_35189[(2)]);
var state_35189__$1 = state_35189;
var statearr_35259_35320 = state_35189__$1;
(statearr_35259_35320[(2)] = inst_35168);

(statearr_35259_35320[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (30))){
var state_35189__$1 = state_35189;
var statearr_35260_35321 = state_35189__$1;
(statearr_35260_35321[(2)] = null);

(statearr_35260_35321[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (10))){
var inst_35067 = (state_35189[(14)]);
var inst_35069 = (state_35189[(16)]);
var inst_35077 = cljs.core._nth.call(null,inst_35067,inst_35069);
var inst_35078 = cljs.core.nth.call(null,inst_35077,(0),null);
var inst_35079 = cljs.core.nth.call(null,inst_35077,(1),null);
var state_35189__$1 = (function (){var statearr_35261 = state_35189;
(statearr_35261[(26)] = inst_35078);

return statearr_35261;
})();
if(cljs.core.truth_(inst_35079)){
var statearr_35262_35322 = state_35189__$1;
(statearr_35262_35322[(1)] = (13));

} else {
var statearr_35263_35323 = state_35189__$1;
(statearr_35263_35323[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (18))){
var inst_35114 = (state_35189[(2)]);
var state_35189__$1 = state_35189;
var statearr_35264_35324 = state_35189__$1;
(statearr_35264_35324[(2)] = inst_35114);

(statearr_35264_35324[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (42))){
var state_35189__$1 = state_35189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35189__$1,(45),dchan);
} else {
if((state_val_35190 === (37))){
var inst_35157 = (state_35189[(23)]);
var inst_35057 = (state_35189[(10)]);
var inst_35148 = (state_35189[(25)]);
var inst_35157__$1 = cljs.core.first.call(null,inst_35148);
var inst_35158 = cljs.core.async.put_BANG_.call(null,inst_35157__$1,inst_35057,done);
var state_35189__$1 = (function (){var statearr_35265 = state_35189;
(statearr_35265[(23)] = inst_35157__$1);

return statearr_35265;
})();
if(cljs.core.truth_(inst_35158)){
var statearr_35266_35325 = state_35189__$1;
(statearr_35266_35325[(1)] = (39));

} else {
var statearr_35267_35326 = state_35189__$1;
(statearr_35267_35326[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (8))){
var inst_35068 = (state_35189[(15)]);
var inst_35069 = (state_35189[(16)]);
var inst_35071 = (inst_35069 < inst_35068);
var inst_35072 = inst_35071;
var state_35189__$1 = state_35189;
if(cljs.core.truth_(inst_35072)){
var statearr_35268_35327 = state_35189__$1;
(statearr_35268_35327[(1)] = (10));

} else {
var statearr_35269_35328 = state_35189__$1;
(statearr_35269_35328[(1)] = (11));

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
});})(c__34455__auto___35274,cs,m,dchan,dctr,done))
;
return ((function (switch__34365__auto__,c__34455__auto___35274,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__34366__auto__ = null;
var cljs$core$async$mult_$_state_machine__34366__auto____0 = (function (){
var statearr_35270 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35270[(0)] = cljs$core$async$mult_$_state_machine__34366__auto__);

(statearr_35270[(1)] = (1));

return statearr_35270;
});
var cljs$core$async$mult_$_state_machine__34366__auto____1 = (function (state_35189){
while(true){
var ret_value__34367__auto__ = (function (){try{while(true){
var result__34368__auto__ = switch__34365__auto__.call(null,state_35189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34368__auto__;
}
break;
}
}catch (e35271){if((e35271 instanceof Object)){
var ex__34369__auto__ = e35271;
var statearr_35272_35329 = state_35189;
(statearr_35272_35329[(5)] = ex__34369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35330 = state_35189;
state_35189 = G__35330;
continue;
} else {
return ret_value__34367__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34366__auto__ = function(state_35189){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34366__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34366__auto____1.call(this,state_35189);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34366__auto____0;
cljs$core$async$mult_$_state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34366__auto____1;
return cljs$core$async$mult_$_state_machine__34366__auto__;
})()
;})(switch__34365__auto__,c__34455__auto___35274,cs,m,dchan,dctr,done))
})();
var state__34457__auto__ = (function (){var statearr_35273 = f__34456__auto__.call(null);
(statearr_35273[(6)] = c__34455__auto___35274);

return statearr_35273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34457__auto__);
});})(c__34455__auto___35274,cs,m,dchan,dctr,done))
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
var G__35332 = arguments.length;
switch (G__35332) {
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
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__31522__auto__ = (((m == null))?null:m);
var m__31523__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__31522__auto__)]);
if(!((m__31523__auto__ == null))){
return m__31523__auto__.call(null,m,ch);
} else {
var m__31523__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__31523__auto____$1 == null))){
return m__31523__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__31522__auto__ = (((m == null))?null:m);
var m__31523__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__31522__auto__)]);
if(!((m__31523__auto__ == null))){
return m__31523__auto__.call(null,m,ch);
} else {
var m__31523__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__31523__auto____$1 == null))){
return m__31523__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__31522__auto__ = (((m == null))?null:m);
var m__31523__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__31522__auto__)]);
if(!((m__31523__auto__ == null))){
return m__31523__auto__.call(null,m);
} else {
var m__31523__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__31523__auto____$1 == null))){
return m__31523__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__31522__auto__ = (((m == null))?null:m);
var m__31523__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__31522__auto__)]);
if(!((m__31523__auto__ == null))){
return m__31523__auto__.call(null,m,state_map);
} else {
var m__31523__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__31523__auto____$1 == null))){
return m__31523__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__31522__auto__ = (((m == null))?null:m);
var m__31523__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__31522__auto__)]);
if(!((m__31523__auto__ == null))){
return m__31523__auto__.call(null,m,mode);
} else {
var m__31523__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__31523__auto____$1 == null))){
return m__31523__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__32075__auto__ = [];
var len__32068__auto___35344 = arguments.length;
var i__32069__auto___35345 = (0);
while(true){
if((i__32069__auto___35345 < len__32068__auto___35344)){
args__32075__auto__.push((arguments[i__32069__auto___35345]));

var G__35346 = (i__32069__auto___35345 + (1));
i__32069__auto___35345 = G__35346;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((3) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__32076__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35338){
var map__35339 = p__35338;
var map__35339__$1 = ((((!((map__35339 == null)))?((((map__35339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35339):map__35339);
var opts = map__35339__$1;
var statearr_35341_35347 = state;
(statearr_35341_35347[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__35339,map__35339__$1,opts){
return (function (val){
var statearr_35342_35348 = state;
(statearr_35342_35348[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35339,map__35339__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_35343_35349 = state;
(statearr_35343_35349[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35334){
var G__35335 = cljs.core.first.call(null,seq35334);
var seq35334__$1 = cljs.core.next.call(null,seq35334);
var G__35336 = cljs.core.first.call(null,seq35334__$1);
var seq35334__$2 = cljs.core.next.call(null,seq35334__$1);
var G__35337 = cljs.core.first.call(null,seq35334__$2);
var seq35334__$3 = cljs.core.next.call(null,seq35334__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35335,G__35336,G__35337,seq35334__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async35350 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35350 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta35351){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta35351 = meta35351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35352,meta35351__$1){
var self__ = this;
var _35352__$1 = this;
return (new cljs.core.async.t_cljs$core$async35350(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta35351__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35350.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35352){
var self__ = this;
var _35352__$1 = this;
return self__.meta35351;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35350.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35350.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35350.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35350.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35350.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35350.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35350.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35350.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35350.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta35351","meta35351",681314370,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35350.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35350";

cljs.core.async.t_cljs$core$async35350.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__31460__auto__,writer__31461__auto__,opt__31462__auto__){
return cljs.core._write.call(null,writer__31461__auto__,"cljs.core.async/t_cljs$core$async35350");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async35350 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35350(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35351){
return (new cljs.core.async.t_cljs$core$async35350(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35351));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35350(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34455__auto___35514 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34455__auto___35514,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34456__auto__ = (function (){var switch__34365__auto__ = ((function (c__34455__auto___35514,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35454){
var state_val_35455 = (state_35454[(1)]);
if((state_val_35455 === (7))){
var inst_35369 = (state_35454[(2)]);
var state_35454__$1 = state_35454;
var statearr_35456_35515 = state_35454__$1;
(statearr_35456_35515[(2)] = inst_35369);

(statearr_35456_35515[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (20))){
var inst_35381 = (state_35454[(7)]);
var state_35454__$1 = state_35454;
var statearr_35457_35516 = state_35454__$1;
(statearr_35457_35516[(2)] = inst_35381);

(statearr_35457_35516[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (27))){
var state_35454__$1 = state_35454;
var statearr_35458_35517 = state_35454__$1;
(statearr_35458_35517[(2)] = null);

(statearr_35458_35517[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (1))){
var inst_35356 = (state_35454[(8)]);
var inst_35356__$1 = calc_state.call(null);
var inst_35358 = (inst_35356__$1 == null);
var inst_35359 = cljs.core.not.call(null,inst_35358);
var state_35454__$1 = (function (){var statearr_35459 = state_35454;
(statearr_35459[(8)] = inst_35356__$1);

return statearr_35459;
})();
if(inst_35359){
var statearr_35460_35518 = state_35454__$1;
(statearr_35460_35518[(1)] = (2));

} else {
var statearr_35461_35519 = state_35454__$1;
(statearr_35461_35519[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (24))){
var inst_35428 = (state_35454[(9)]);
var inst_35405 = (state_35454[(10)]);
var inst_35414 = (state_35454[(11)]);
var inst_35428__$1 = inst_35405.call(null,inst_35414);
var state_35454__$1 = (function (){var statearr_35462 = state_35454;
(statearr_35462[(9)] = inst_35428__$1);

return statearr_35462;
})();
if(cljs.core.truth_(inst_35428__$1)){
var statearr_35463_35520 = state_35454__$1;
(statearr_35463_35520[(1)] = (29));

} else {
var statearr_35464_35521 = state_35454__$1;
(statearr_35464_35521[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (4))){
var inst_35372 = (state_35454[(2)]);
var state_35454__$1 = state_35454;
if(cljs.core.truth_(inst_35372)){
var statearr_35465_35522 = state_35454__$1;
(statearr_35465_35522[(1)] = (8));

} else {
var statearr_35466_35523 = state_35454__$1;
(statearr_35466_35523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (15))){
var inst_35399 = (state_35454[(2)]);
var state_35454__$1 = state_35454;
if(cljs.core.truth_(inst_35399)){
var statearr_35467_35524 = state_35454__$1;
(statearr_35467_35524[(1)] = (19));

} else {
var statearr_35468_35525 = state_35454__$1;
(statearr_35468_35525[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (21))){
var inst_35404 = (state_35454[(12)]);
var inst_35404__$1 = (state_35454[(2)]);
var inst_35405 = cljs.core.get.call(null,inst_35404__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35406 = cljs.core.get.call(null,inst_35404__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35407 = cljs.core.get.call(null,inst_35404__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35454__$1 = (function (){var statearr_35469 = state_35454;
(statearr_35469[(12)] = inst_35404__$1);

(statearr_35469[(10)] = inst_35405);

(statearr_35469[(13)] = inst_35406);

return statearr_35469;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35454__$1,(22),inst_35407);
} else {
if((state_val_35455 === (31))){
var inst_35436 = (state_35454[(2)]);
var state_35454__$1 = state_35454;
if(cljs.core.truth_(inst_35436)){
var statearr_35470_35526 = state_35454__$1;
(statearr_35470_35526[(1)] = (32));

} else {
var statearr_35471_35527 = state_35454__$1;
(statearr_35471_35527[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (32))){
var inst_35413 = (state_35454[(14)]);
var state_35454__$1 = state_35454;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35454__$1,(35),out,inst_35413);
} else {
if((state_val_35455 === (33))){
var inst_35404 = (state_35454[(12)]);
var inst_35381 = inst_35404;
var state_35454__$1 = (function (){var statearr_35472 = state_35454;
(statearr_35472[(7)] = inst_35381);

return statearr_35472;
})();
var statearr_35473_35528 = state_35454__$1;
(statearr_35473_35528[(2)] = null);

(statearr_35473_35528[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (13))){
var inst_35381 = (state_35454[(7)]);
var inst_35388 = inst_35381.cljs$lang$protocol_mask$partition0$;
var inst_35389 = (inst_35388 & (64));
var inst_35390 = inst_35381.cljs$core$ISeq$;
var inst_35391 = (cljs.core.PROTOCOL_SENTINEL === inst_35390);
var inst_35392 = (inst_35389) || (inst_35391);
var state_35454__$1 = state_35454;
if(cljs.core.truth_(inst_35392)){
var statearr_35474_35529 = state_35454__$1;
(statearr_35474_35529[(1)] = (16));

} else {
var statearr_35475_35530 = state_35454__$1;
(statearr_35475_35530[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (22))){
var inst_35413 = (state_35454[(14)]);
var inst_35414 = (state_35454[(11)]);
var inst_35412 = (state_35454[(2)]);
var inst_35413__$1 = cljs.core.nth.call(null,inst_35412,(0),null);
var inst_35414__$1 = cljs.core.nth.call(null,inst_35412,(1),null);
var inst_35415 = (inst_35413__$1 == null);
var inst_35416 = cljs.core._EQ_.call(null,inst_35414__$1,change);
var inst_35417 = (inst_35415) || (inst_35416);
var state_35454__$1 = (function (){var statearr_35476 = state_35454;
(statearr_35476[(14)] = inst_35413__$1);

(statearr_35476[(11)] = inst_35414__$1);

return statearr_35476;
})();
if(cljs.core.truth_(inst_35417)){
var statearr_35477_35531 = state_35454__$1;
(statearr_35477_35531[(1)] = (23));

} else {
var statearr_35478_35532 = state_35454__$1;
(statearr_35478_35532[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (36))){
var inst_35404 = (state_35454[(12)]);
var inst_35381 = inst_35404;
var state_35454__$1 = (function (){var statearr_35479 = state_35454;
(statearr_35479[(7)] = inst_35381);

return statearr_35479;
})();
var statearr_35480_35533 = state_35454__$1;
(statearr_35480_35533[(2)] = null);

(statearr_35480_35533[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (29))){
var inst_35428 = (state_35454[(9)]);
var state_35454__$1 = state_35454;
var statearr_35481_35534 = state_35454__$1;
(statearr_35481_35534[(2)] = inst_35428);

(statearr_35481_35534[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (6))){
var state_35454__$1 = state_35454;
var statearr_35482_35535 = state_35454__$1;
(statearr_35482_35535[(2)] = false);

(statearr_35482_35535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (28))){
var inst_35424 = (state_35454[(2)]);
var inst_35425 = calc_state.call(null);
var inst_35381 = inst_35425;
var state_35454__$1 = (function (){var statearr_35483 = state_35454;
(statearr_35483[(15)] = inst_35424);

(statearr_35483[(7)] = inst_35381);

return statearr_35483;
})();
var statearr_35484_35536 = state_35454__$1;
(statearr_35484_35536[(2)] = null);

(statearr_35484_35536[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (25))){
var inst_35450 = (state_35454[(2)]);
var state_35454__$1 = state_35454;
var statearr_35485_35537 = state_35454__$1;
(statearr_35485_35537[(2)] = inst_35450);

(statearr_35485_35537[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (34))){
var inst_35448 = (state_35454[(2)]);
var state_35454__$1 = state_35454;
var statearr_35486_35538 = state_35454__$1;
(statearr_35486_35538[(2)] = inst_35448);

(statearr_35486_35538[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (17))){
var state_35454__$1 = state_35454;
var statearr_35487_35539 = state_35454__$1;
(statearr_35487_35539[(2)] = false);

(statearr_35487_35539[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (3))){
var state_35454__$1 = state_35454;
var statearr_35488_35540 = state_35454__$1;
(statearr_35488_35540[(2)] = false);

(statearr_35488_35540[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (12))){
var inst_35452 = (state_35454[(2)]);
var state_35454__$1 = state_35454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35454__$1,inst_35452);
} else {
if((state_val_35455 === (2))){
var inst_35356 = (state_35454[(8)]);
var inst_35361 = inst_35356.cljs$lang$protocol_mask$partition0$;
var inst_35362 = (inst_35361 & (64));
var inst_35363 = inst_35356.cljs$core$ISeq$;
var inst_35364 = (cljs.core.PROTOCOL_SENTINEL === inst_35363);
var inst_35365 = (inst_35362) || (inst_35364);
var state_35454__$1 = state_35454;
if(cljs.core.truth_(inst_35365)){
var statearr_35489_35541 = state_35454__$1;
(statearr_35489_35541[(1)] = (5));

} else {
var statearr_35490_35542 = state_35454__$1;
(statearr_35490_35542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (23))){
var inst_35413 = (state_35454[(14)]);
var inst_35419 = (inst_35413 == null);
var state_35454__$1 = state_35454;
if(cljs.core.truth_(inst_35419)){
var statearr_35491_35543 = state_35454__$1;
(statearr_35491_35543[(1)] = (26));

} else {
var statearr_35492_35544 = state_35454__$1;
(statearr_35492_35544[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (35))){
var inst_35439 = (state_35454[(2)]);
var state_35454__$1 = state_35454;
if(cljs.core.truth_(inst_35439)){
var statearr_35493_35545 = state_35454__$1;
(statearr_35493_35545[(1)] = (36));

} else {
var statearr_35494_35546 = state_35454__$1;
(statearr_35494_35546[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (19))){
var inst_35381 = (state_35454[(7)]);
var inst_35401 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35381);
var state_35454__$1 = state_35454;
var statearr_35495_35547 = state_35454__$1;
(statearr_35495_35547[(2)] = inst_35401);

(statearr_35495_35547[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (11))){
var inst_35381 = (state_35454[(7)]);
var inst_35385 = (inst_35381 == null);
var inst_35386 = cljs.core.not.call(null,inst_35385);
var state_35454__$1 = state_35454;
if(inst_35386){
var statearr_35496_35548 = state_35454__$1;
(statearr_35496_35548[(1)] = (13));

} else {
var statearr_35497_35549 = state_35454__$1;
(statearr_35497_35549[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (9))){
var inst_35356 = (state_35454[(8)]);
var state_35454__$1 = state_35454;
var statearr_35498_35550 = state_35454__$1;
(statearr_35498_35550[(2)] = inst_35356);

(statearr_35498_35550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (5))){
var state_35454__$1 = state_35454;
var statearr_35499_35551 = state_35454__$1;
(statearr_35499_35551[(2)] = true);

(statearr_35499_35551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (14))){
var state_35454__$1 = state_35454;
var statearr_35500_35552 = state_35454__$1;
(statearr_35500_35552[(2)] = false);

(statearr_35500_35552[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (26))){
var inst_35414 = (state_35454[(11)]);
var inst_35421 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35414);
var state_35454__$1 = state_35454;
var statearr_35501_35553 = state_35454__$1;
(statearr_35501_35553[(2)] = inst_35421);

(statearr_35501_35553[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (16))){
var state_35454__$1 = state_35454;
var statearr_35502_35554 = state_35454__$1;
(statearr_35502_35554[(2)] = true);

(statearr_35502_35554[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (38))){
var inst_35444 = (state_35454[(2)]);
var state_35454__$1 = state_35454;
var statearr_35503_35555 = state_35454__$1;
(statearr_35503_35555[(2)] = inst_35444);

(statearr_35503_35555[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (30))){
var inst_35405 = (state_35454[(10)]);
var inst_35414 = (state_35454[(11)]);
var inst_35406 = (state_35454[(13)]);
var inst_35431 = cljs.core.empty_QMARK_.call(null,inst_35405);
var inst_35432 = inst_35406.call(null,inst_35414);
var inst_35433 = cljs.core.not.call(null,inst_35432);
var inst_35434 = (inst_35431) && (inst_35433);
var state_35454__$1 = state_35454;
var statearr_35504_35556 = state_35454__$1;
(statearr_35504_35556[(2)] = inst_35434);

(statearr_35504_35556[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (10))){
var inst_35356 = (state_35454[(8)]);
var inst_35377 = (state_35454[(2)]);
var inst_35378 = cljs.core.get.call(null,inst_35377,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35379 = cljs.core.get.call(null,inst_35377,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35380 = cljs.core.get.call(null,inst_35377,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35381 = inst_35356;
var state_35454__$1 = (function (){var statearr_35505 = state_35454;
(statearr_35505[(16)] = inst_35379);

(statearr_35505[(17)] = inst_35378);

(statearr_35505[(7)] = inst_35381);

(statearr_35505[(18)] = inst_35380);

return statearr_35505;
})();
var statearr_35506_35557 = state_35454__$1;
(statearr_35506_35557[(2)] = null);

(statearr_35506_35557[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (18))){
var inst_35396 = (state_35454[(2)]);
var state_35454__$1 = state_35454;
var statearr_35507_35558 = state_35454__$1;
(statearr_35507_35558[(2)] = inst_35396);

(statearr_35507_35558[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (37))){
var state_35454__$1 = state_35454;
var statearr_35508_35559 = state_35454__$1;
(statearr_35508_35559[(2)] = null);

(statearr_35508_35559[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (8))){
var inst_35356 = (state_35454[(8)]);
var inst_35374 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35356);
var state_35454__$1 = state_35454;
var statearr_35509_35560 = state_35454__$1;
(statearr_35509_35560[(2)] = inst_35374);

(statearr_35509_35560[(1)] = (10));


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
});})(c__34455__auto___35514,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__34365__auto__,c__34455__auto___35514,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__34366__auto__ = null;
var cljs$core$async$mix_$_state_machine__34366__auto____0 = (function (){
var statearr_35510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35510[(0)] = cljs$core$async$mix_$_state_machine__34366__auto__);

(statearr_35510[(1)] = (1));

return statearr_35510;
});
var cljs$core$async$mix_$_state_machine__34366__auto____1 = (function (state_35454){
while(true){
var ret_value__34367__auto__ = (function (){try{while(true){
var result__34368__auto__ = switch__34365__auto__.call(null,state_35454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34368__auto__;
}
break;
}
}catch (e35511){if((e35511 instanceof Object)){
var ex__34369__auto__ = e35511;
var statearr_35512_35561 = state_35454;
(statearr_35512_35561[(5)] = ex__34369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35562 = state_35454;
state_35454 = G__35562;
continue;
} else {
return ret_value__34367__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34366__auto__ = function(state_35454){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34366__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34366__auto____1.call(this,state_35454);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34366__auto____0;
cljs$core$async$mix_$_state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34366__auto____1;
return cljs$core$async$mix_$_state_machine__34366__auto__;
})()
;})(switch__34365__auto__,c__34455__auto___35514,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34457__auto__ = (function (){var statearr_35513 = f__34456__auto__.call(null);
(statearr_35513[(6)] = c__34455__auto___35514);

return statearr_35513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34457__auto__);
});})(c__34455__auto___35514,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__31522__auto__ = (((p == null))?null:p);
var m__31523__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__31522__auto__)]);
if(!((m__31523__auto__ == null))){
return m__31523__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__31523__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__31523__auto____$1 == null))){
return m__31523__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__31522__auto__ = (((p == null))?null:p);
var m__31523__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__31522__auto__)]);
if(!((m__31523__auto__ == null))){
return m__31523__auto__.call(null,p,v,ch);
} else {
var m__31523__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__31523__auto____$1 == null))){
return m__31523__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35564 = arguments.length;
switch (G__35564) {
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__31522__auto__ = (((p == null))?null:p);
var m__31523__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__31522__auto__)]);
if(!((m__31523__auto__ == null))){
return m__31523__auto__.call(null,p);
} else {
var m__31523__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__31523__auto____$1 == null))){
return m__31523__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__31522__auto__ = (((p == null))?null:p);
var m__31523__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__31522__auto__)]);
if(!((m__31523__auto__ == null))){
return m__31523__auto__.call(null,p,v);
} else {
var m__31523__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__31523__auto____$1 == null))){
return m__31523__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var G__35568 = arguments.length;
switch (G__35568) {
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
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30789__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30789__auto__)){
return or__30789__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30789__auto__,mults){
return (function (p1__35566_SHARP_){
if(cljs.core.truth_(p1__35566_SHARP_.call(null,topic))){
return p1__35566_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35566_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30789__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35569 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35569 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35570){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35570 = meta35570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35571,meta35570__$1){
var self__ = this;
var _35571__$1 = this;
return (new cljs.core.async.t_cljs$core$async35569(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35570__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35569.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35571){
var self__ = this;
var _35571__$1 = this;
return self__.meta35570;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35569.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35569.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35569.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35569.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35569.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35569.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35569.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35569.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35570","meta35570",-1301930384,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35569.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35569.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35569";

cljs.core.async.t_cljs$core$async35569.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__31460__auto__,writer__31461__auto__,opt__31462__auto__){
return cljs.core._write.call(null,writer__31461__auto__,"cljs.core.async/t_cljs$core$async35569");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35569 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35569(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35570){
return (new cljs.core.async.t_cljs$core$async35569(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35570));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35569(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34455__auto___35689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34455__auto___35689,mults,ensure_mult,p){
return (function (){
var f__34456__auto__ = (function (){var switch__34365__auto__ = ((function (c__34455__auto___35689,mults,ensure_mult,p){
return (function (state_35643){
var state_val_35644 = (state_35643[(1)]);
if((state_val_35644 === (7))){
var inst_35639 = (state_35643[(2)]);
var state_35643__$1 = state_35643;
var statearr_35645_35690 = state_35643__$1;
(statearr_35645_35690[(2)] = inst_35639);

(statearr_35645_35690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (20))){
var state_35643__$1 = state_35643;
var statearr_35646_35691 = state_35643__$1;
(statearr_35646_35691[(2)] = null);

(statearr_35646_35691[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (1))){
var state_35643__$1 = state_35643;
var statearr_35647_35692 = state_35643__$1;
(statearr_35647_35692[(2)] = null);

(statearr_35647_35692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (24))){
var inst_35622 = (state_35643[(7)]);
var inst_35631 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35622);
var state_35643__$1 = state_35643;
var statearr_35648_35693 = state_35643__$1;
(statearr_35648_35693[(2)] = inst_35631);

(statearr_35648_35693[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (4))){
var inst_35574 = (state_35643[(8)]);
var inst_35574__$1 = (state_35643[(2)]);
var inst_35575 = (inst_35574__$1 == null);
var state_35643__$1 = (function (){var statearr_35649 = state_35643;
(statearr_35649[(8)] = inst_35574__$1);

return statearr_35649;
})();
if(cljs.core.truth_(inst_35575)){
var statearr_35650_35694 = state_35643__$1;
(statearr_35650_35694[(1)] = (5));

} else {
var statearr_35651_35695 = state_35643__$1;
(statearr_35651_35695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (15))){
var inst_35616 = (state_35643[(2)]);
var state_35643__$1 = state_35643;
var statearr_35652_35696 = state_35643__$1;
(statearr_35652_35696[(2)] = inst_35616);

(statearr_35652_35696[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (21))){
var inst_35636 = (state_35643[(2)]);
var state_35643__$1 = (function (){var statearr_35653 = state_35643;
(statearr_35653[(9)] = inst_35636);

return statearr_35653;
})();
var statearr_35654_35697 = state_35643__$1;
(statearr_35654_35697[(2)] = null);

(statearr_35654_35697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (13))){
var inst_35598 = (state_35643[(10)]);
var inst_35600 = cljs.core.chunked_seq_QMARK_.call(null,inst_35598);
var state_35643__$1 = state_35643;
if(inst_35600){
var statearr_35655_35698 = state_35643__$1;
(statearr_35655_35698[(1)] = (16));

} else {
var statearr_35656_35699 = state_35643__$1;
(statearr_35656_35699[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (22))){
var inst_35628 = (state_35643[(2)]);
var state_35643__$1 = state_35643;
if(cljs.core.truth_(inst_35628)){
var statearr_35657_35700 = state_35643__$1;
(statearr_35657_35700[(1)] = (23));

} else {
var statearr_35658_35701 = state_35643__$1;
(statearr_35658_35701[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (6))){
var inst_35574 = (state_35643[(8)]);
var inst_35624 = (state_35643[(11)]);
var inst_35622 = (state_35643[(7)]);
var inst_35622__$1 = topic_fn.call(null,inst_35574);
var inst_35623 = cljs.core.deref.call(null,mults);
var inst_35624__$1 = cljs.core.get.call(null,inst_35623,inst_35622__$1);
var state_35643__$1 = (function (){var statearr_35659 = state_35643;
(statearr_35659[(11)] = inst_35624__$1);

(statearr_35659[(7)] = inst_35622__$1);

return statearr_35659;
})();
if(cljs.core.truth_(inst_35624__$1)){
var statearr_35660_35702 = state_35643__$1;
(statearr_35660_35702[(1)] = (19));

} else {
var statearr_35661_35703 = state_35643__$1;
(statearr_35661_35703[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (25))){
var inst_35633 = (state_35643[(2)]);
var state_35643__$1 = state_35643;
var statearr_35662_35704 = state_35643__$1;
(statearr_35662_35704[(2)] = inst_35633);

(statearr_35662_35704[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (17))){
var inst_35598 = (state_35643[(10)]);
var inst_35607 = cljs.core.first.call(null,inst_35598);
var inst_35608 = cljs.core.async.muxch_STAR_.call(null,inst_35607);
var inst_35609 = cljs.core.async.close_BANG_.call(null,inst_35608);
var inst_35610 = cljs.core.next.call(null,inst_35598);
var inst_35584 = inst_35610;
var inst_35585 = null;
var inst_35586 = (0);
var inst_35587 = (0);
var state_35643__$1 = (function (){var statearr_35663 = state_35643;
(statearr_35663[(12)] = inst_35586);

(statearr_35663[(13)] = inst_35585);

(statearr_35663[(14)] = inst_35584);

(statearr_35663[(15)] = inst_35609);

(statearr_35663[(16)] = inst_35587);

return statearr_35663;
})();
var statearr_35664_35705 = state_35643__$1;
(statearr_35664_35705[(2)] = null);

(statearr_35664_35705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (3))){
var inst_35641 = (state_35643[(2)]);
var state_35643__$1 = state_35643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35643__$1,inst_35641);
} else {
if((state_val_35644 === (12))){
var inst_35618 = (state_35643[(2)]);
var state_35643__$1 = state_35643;
var statearr_35665_35706 = state_35643__$1;
(statearr_35665_35706[(2)] = inst_35618);

(statearr_35665_35706[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (2))){
var state_35643__$1 = state_35643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35643__$1,(4),ch);
} else {
if((state_val_35644 === (23))){
var state_35643__$1 = state_35643;
var statearr_35666_35707 = state_35643__$1;
(statearr_35666_35707[(2)] = null);

(statearr_35666_35707[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (19))){
var inst_35574 = (state_35643[(8)]);
var inst_35624 = (state_35643[(11)]);
var inst_35626 = cljs.core.async.muxch_STAR_.call(null,inst_35624);
var state_35643__$1 = state_35643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35643__$1,(22),inst_35626,inst_35574);
} else {
if((state_val_35644 === (11))){
var inst_35598 = (state_35643[(10)]);
var inst_35584 = (state_35643[(14)]);
var inst_35598__$1 = cljs.core.seq.call(null,inst_35584);
var state_35643__$1 = (function (){var statearr_35667 = state_35643;
(statearr_35667[(10)] = inst_35598__$1);

return statearr_35667;
})();
if(inst_35598__$1){
var statearr_35668_35708 = state_35643__$1;
(statearr_35668_35708[(1)] = (13));

} else {
var statearr_35669_35709 = state_35643__$1;
(statearr_35669_35709[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (9))){
var inst_35620 = (state_35643[(2)]);
var state_35643__$1 = state_35643;
var statearr_35670_35710 = state_35643__$1;
(statearr_35670_35710[(2)] = inst_35620);

(statearr_35670_35710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (5))){
var inst_35581 = cljs.core.deref.call(null,mults);
var inst_35582 = cljs.core.vals.call(null,inst_35581);
var inst_35583 = cljs.core.seq.call(null,inst_35582);
var inst_35584 = inst_35583;
var inst_35585 = null;
var inst_35586 = (0);
var inst_35587 = (0);
var state_35643__$1 = (function (){var statearr_35671 = state_35643;
(statearr_35671[(12)] = inst_35586);

(statearr_35671[(13)] = inst_35585);

(statearr_35671[(14)] = inst_35584);

(statearr_35671[(16)] = inst_35587);

return statearr_35671;
})();
var statearr_35672_35711 = state_35643__$1;
(statearr_35672_35711[(2)] = null);

(statearr_35672_35711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (14))){
var state_35643__$1 = state_35643;
var statearr_35676_35712 = state_35643__$1;
(statearr_35676_35712[(2)] = null);

(statearr_35676_35712[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (16))){
var inst_35598 = (state_35643[(10)]);
var inst_35602 = cljs.core.chunk_first.call(null,inst_35598);
var inst_35603 = cljs.core.chunk_rest.call(null,inst_35598);
var inst_35604 = cljs.core.count.call(null,inst_35602);
var inst_35584 = inst_35603;
var inst_35585 = inst_35602;
var inst_35586 = inst_35604;
var inst_35587 = (0);
var state_35643__$1 = (function (){var statearr_35677 = state_35643;
(statearr_35677[(12)] = inst_35586);

(statearr_35677[(13)] = inst_35585);

(statearr_35677[(14)] = inst_35584);

(statearr_35677[(16)] = inst_35587);

return statearr_35677;
})();
var statearr_35678_35713 = state_35643__$1;
(statearr_35678_35713[(2)] = null);

(statearr_35678_35713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (10))){
var inst_35586 = (state_35643[(12)]);
var inst_35585 = (state_35643[(13)]);
var inst_35584 = (state_35643[(14)]);
var inst_35587 = (state_35643[(16)]);
var inst_35592 = cljs.core._nth.call(null,inst_35585,inst_35587);
var inst_35593 = cljs.core.async.muxch_STAR_.call(null,inst_35592);
var inst_35594 = cljs.core.async.close_BANG_.call(null,inst_35593);
var inst_35595 = (inst_35587 + (1));
var tmp35673 = inst_35586;
var tmp35674 = inst_35585;
var tmp35675 = inst_35584;
var inst_35584__$1 = tmp35675;
var inst_35585__$1 = tmp35674;
var inst_35586__$1 = tmp35673;
var inst_35587__$1 = inst_35595;
var state_35643__$1 = (function (){var statearr_35679 = state_35643;
(statearr_35679[(12)] = inst_35586__$1);

(statearr_35679[(13)] = inst_35585__$1);

(statearr_35679[(14)] = inst_35584__$1);

(statearr_35679[(17)] = inst_35594);

(statearr_35679[(16)] = inst_35587__$1);

return statearr_35679;
})();
var statearr_35680_35714 = state_35643__$1;
(statearr_35680_35714[(2)] = null);

(statearr_35680_35714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (18))){
var inst_35613 = (state_35643[(2)]);
var state_35643__$1 = state_35643;
var statearr_35681_35715 = state_35643__$1;
(statearr_35681_35715[(2)] = inst_35613);

(statearr_35681_35715[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (8))){
var inst_35586 = (state_35643[(12)]);
var inst_35587 = (state_35643[(16)]);
var inst_35589 = (inst_35587 < inst_35586);
var inst_35590 = inst_35589;
var state_35643__$1 = state_35643;
if(cljs.core.truth_(inst_35590)){
var statearr_35682_35716 = state_35643__$1;
(statearr_35682_35716[(1)] = (10));

} else {
var statearr_35683_35717 = state_35643__$1;
(statearr_35683_35717[(1)] = (11));

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
});})(c__34455__auto___35689,mults,ensure_mult,p))
;
return ((function (switch__34365__auto__,c__34455__auto___35689,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__34366__auto__ = null;
var cljs$core$async$state_machine__34366__auto____0 = (function (){
var statearr_35684 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35684[(0)] = cljs$core$async$state_machine__34366__auto__);

(statearr_35684[(1)] = (1));

return statearr_35684;
});
var cljs$core$async$state_machine__34366__auto____1 = (function (state_35643){
while(true){
var ret_value__34367__auto__ = (function (){try{while(true){
var result__34368__auto__ = switch__34365__auto__.call(null,state_35643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34368__auto__;
}
break;
}
}catch (e35685){if((e35685 instanceof Object)){
var ex__34369__auto__ = e35685;
var statearr_35686_35718 = state_35643;
(statearr_35686_35718[(5)] = ex__34369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35719 = state_35643;
state_35643 = G__35719;
continue;
} else {
return ret_value__34367__auto__;
}
break;
}
});
cljs$core$async$state_machine__34366__auto__ = function(state_35643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34366__auto____1.call(this,state_35643);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34366__auto____0;
cljs$core$async$state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34366__auto____1;
return cljs$core$async$state_machine__34366__auto__;
})()
;})(switch__34365__auto__,c__34455__auto___35689,mults,ensure_mult,p))
})();
var state__34457__auto__ = (function (){var statearr_35687 = f__34456__auto__.call(null);
(statearr_35687[(6)] = c__34455__auto___35689);

return statearr_35687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34457__auto__);
});})(c__34455__auto___35689,mults,ensure_mult,p))
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
var G__35721 = arguments.length;
switch (G__35721) {
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
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35724 = arguments.length;
switch (G__35724) {
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
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var G__35727 = arguments.length;
switch (G__35727) {
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
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__34455__auto___35794 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34455__auto___35794,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34456__auto__ = (function (){var switch__34365__auto__ = ((function (c__34455__auto___35794,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35766){
var state_val_35767 = (state_35766[(1)]);
if((state_val_35767 === (7))){
var state_35766__$1 = state_35766;
var statearr_35768_35795 = state_35766__$1;
(statearr_35768_35795[(2)] = null);

(statearr_35768_35795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (1))){
var state_35766__$1 = state_35766;
var statearr_35769_35796 = state_35766__$1;
(statearr_35769_35796[(2)] = null);

(statearr_35769_35796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (4))){
var inst_35730 = (state_35766[(7)]);
var inst_35732 = (inst_35730 < cnt);
var state_35766__$1 = state_35766;
if(cljs.core.truth_(inst_35732)){
var statearr_35770_35797 = state_35766__$1;
(statearr_35770_35797[(1)] = (6));

} else {
var statearr_35771_35798 = state_35766__$1;
(statearr_35771_35798[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (15))){
var inst_35762 = (state_35766[(2)]);
var state_35766__$1 = state_35766;
var statearr_35772_35799 = state_35766__$1;
(statearr_35772_35799[(2)] = inst_35762);

(statearr_35772_35799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (13))){
var inst_35755 = cljs.core.async.close_BANG_.call(null,out);
var state_35766__$1 = state_35766;
var statearr_35773_35800 = state_35766__$1;
(statearr_35773_35800[(2)] = inst_35755);

(statearr_35773_35800[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (6))){
var state_35766__$1 = state_35766;
var statearr_35774_35801 = state_35766__$1;
(statearr_35774_35801[(2)] = null);

(statearr_35774_35801[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (3))){
var inst_35764 = (state_35766[(2)]);
var state_35766__$1 = state_35766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35766__$1,inst_35764);
} else {
if((state_val_35767 === (12))){
var inst_35752 = (state_35766[(8)]);
var inst_35752__$1 = (state_35766[(2)]);
var inst_35753 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35752__$1);
var state_35766__$1 = (function (){var statearr_35775 = state_35766;
(statearr_35775[(8)] = inst_35752__$1);

return statearr_35775;
})();
if(cljs.core.truth_(inst_35753)){
var statearr_35776_35802 = state_35766__$1;
(statearr_35776_35802[(1)] = (13));

} else {
var statearr_35777_35803 = state_35766__$1;
(statearr_35777_35803[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (2))){
var inst_35729 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35730 = (0);
var state_35766__$1 = (function (){var statearr_35778 = state_35766;
(statearr_35778[(7)] = inst_35730);

(statearr_35778[(9)] = inst_35729);

return statearr_35778;
})();
var statearr_35779_35804 = state_35766__$1;
(statearr_35779_35804[(2)] = null);

(statearr_35779_35804[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (11))){
var inst_35730 = (state_35766[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35766,(10),Object,null,(9));
var inst_35739 = chs__$1.call(null,inst_35730);
var inst_35740 = done.call(null,inst_35730);
var inst_35741 = cljs.core.async.take_BANG_.call(null,inst_35739,inst_35740);
var state_35766__$1 = state_35766;
var statearr_35780_35805 = state_35766__$1;
(statearr_35780_35805[(2)] = inst_35741);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35766__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (9))){
var inst_35730 = (state_35766[(7)]);
var inst_35743 = (state_35766[(2)]);
var inst_35744 = (inst_35730 + (1));
var inst_35730__$1 = inst_35744;
var state_35766__$1 = (function (){var statearr_35781 = state_35766;
(statearr_35781[(7)] = inst_35730__$1);

(statearr_35781[(10)] = inst_35743);

return statearr_35781;
})();
var statearr_35782_35806 = state_35766__$1;
(statearr_35782_35806[(2)] = null);

(statearr_35782_35806[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (5))){
var inst_35750 = (state_35766[(2)]);
var state_35766__$1 = (function (){var statearr_35783 = state_35766;
(statearr_35783[(11)] = inst_35750);

return statearr_35783;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35766__$1,(12),dchan);
} else {
if((state_val_35767 === (14))){
var inst_35752 = (state_35766[(8)]);
var inst_35757 = cljs.core.apply.call(null,f,inst_35752);
var state_35766__$1 = state_35766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35766__$1,(16),out,inst_35757);
} else {
if((state_val_35767 === (16))){
var inst_35759 = (state_35766[(2)]);
var state_35766__$1 = (function (){var statearr_35784 = state_35766;
(statearr_35784[(12)] = inst_35759);

return statearr_35784;
})();
var statearr_35785_35807 = state_35766__$1;
(statearr_35785_35807[(2)] = null);

(statearr_35785_35807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (10))){
var inst_35734 = (state_35766[(2)]);
var inst_35735 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35766__$1 = (function (){var statearr_35786 = state_35766;
(statearr_35786[(13)] = inst_35734);

return statearr_35786;
})();
var statearr_35787_35808 = state_35766__$1;
(statearr_35787_35808[(2)] = inst_35735);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35766__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (8))){
var inst_35748 = (state_35766[(2)]);
var state_35766__$1 = state_35766;
var statearr_35788_35809 = state_35766__$1;
(statearr_35788_35809[(2)] = inst_35748);

(statearr_35788_35809[(1)] = (5));


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
});})(c__34455__auto___35794,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__34365__auto__,c__34455__auto___35794,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__34366__auto__ = null;
var cljs$core$async$state_machine__34366__auto____0 = (function (){
var statearr_35789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35789[(0)] = cljs$core$async$state_machine__34366__auto__);

(statearr_35789[(1)] = (1));

return statearr_35789;
});
var cljs$core$async$state_machine__34366__auto____1 = (function (state_35766){
while(true){
var ret_value__34367__auto__ = (function (){try{while(true){
var result__34368__auto__ = switch__34365__auto__.call(null,state_35766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34368__auto__;
}
break;
}
}catch (e35790){if((e35790 instanceof Object)){
var ex__34369__auto__ = e35790;
var statearr_35791_35810 = state_35766;
(statearr_35791_35810[(5)] = ex__34369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35811 = state_35766;
state_35766 = G__35811;
continue;
} else {
return ret_value__34367__auto__;
}
break;
}
});
cljs$core$async$state_machine__34366__auto__ = function(state_35766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34366__auto____1.call(this,state_35766);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34366__auto____0;
cljs$core$async$state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34366__auto____1;
return cljs$core$async$state_machine__34366__auto__;
})()
;})(switch__34365__auto__,c__34455__auto___35794,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34457__auto__ = (function (){var statearr_35792 = f__34456__auto__.call(null);
(statearr_35792[(6)] = c__34455__auto___35794);

return statearr_35792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34457__auto__);
});})(c__34455__auto___35794,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__35814 = arguments.length;
switch (G__35814) {
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
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34455__auto___35868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34455__auto___35868,out){
return (function (){
var f__34456__auto__ = (function (){var switch__34365__auto__ = ((function (c__34455__auto___35868,out){
return (function (state_35846){
var state_val_35847 = (state_35846[(1)]);
if((state_val_35847 === (7))){
var inst_35826 = (state_35846[(7)]);
var inst_35825 = (state_35846[(8)]);
var inst_35825__$1 = (state_35846[(2)]);
var inst_35826__$1 = cljs.core.nth.call(null,inst_35825__$1,(0),null);
var inst_35827 = cljs.core.nth.call(null,inst_35825__$1,(1),null);
var inst_35828 = (inst_35826__$1 == null);
var state_35846__$1 = (function (){var statearr_35848 = state_35846;
(statearr_35848[(7)] = inst_35826__$1);

(statearr_35848[(8)] = inst_35825__$1);

(statearr_35848[(9)] = inst_35827);

return statearr_35848;
})();
if(cljs.core.truth_(inst_35828)){
var statearr_35849_35869 = state_35846__$1;
(statearr_35849_35869[(1)] = (8));

} else {
var statearr_35850_35870 = state_35846__$1;
(statearr_35850_35870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35847 === (1))){
var inst_35815 = cljs.core.vec.call(null,chs);
var inst_35816 = inst_35815;
var state_35846__$1 = (function (){var statearr_35851 = state_35846;
(statearr_35851[(10)] = inst_35816);

return statearr_35851;
})();
var statearr_35852_35871 = state_35846__$1;
(statearr_35852_35871[(2)] = null);

(statearr_35852_35871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35847 === (4))){
var inst_35816 = (state_35846[(10)]);
var state_35846__$1 = state_35846;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35846__$1,(7),inst_35816);
} else {
if((state_val_35847 === (6))){
var inst_35842 = (state_35846[(2)]);
var state_35846__$1 = state_35846;
var statearr_35853_35872 = state_35846__$1;
(statearr_35853_35872[(2)] = inst_35842);

(statearr_35853_35872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35847 === (3))){
var inst_35844 = (state_35846[(2)]);
var state_35846__$1 = state_35846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35846__$1,inst_35844);
} else {
if((state_val_35847 === (2))){
var inst_35816 = (state_35846[(10)]);
var inst_35818 = cljs.core.count.call(null,inst_35816);
var inst_35819 = (inst_35818 > (0));
var state_35846__$1 = state_35846;
if(cljs.core.truth_(inst_35819)){
var statearr_35855_35873 = state_35846__$1;
(statearr_35855_35873[(1)] = (4));

} else {
var statearr_35856_35874 = state_35846__$1;
(statearr_35856_35874[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35847 === (11))){
var inst_35816 = (state_35846[(10)]);
var inst_35835 = (state_35846[(2)]);
var tmp35854 = inst_35816;
var inst_35816__$1 = tmp35854;
var state_35846__$1 = (function (){var statearr_35857 = state_35846;
(statearr_35857[(11)] = inst_35835);

(statearr_35857[(10)] = inst_35816__$1);

return statearr_35857;
})();
var statearr_35858_35875 = state_35846__$1;
(statearr_35858_35875[(2)] = null);

(statearr_35858_35875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35847 === (9))){
var inst_35826 = (state_35846[(7)]);
var state_35846__$1 = state_35846;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35846__$1,(11),out,inst_35826);
} else {
if((state_val_35847 === (5))){
var inst_35840 = cljs.core.async.close_BANG_.call(null,out);
var state_35846__$1 = state_35846;
var statearr_35859_35876 = state_35846__$1;
(statearr_35859_35876[(2)] = inst_35840);

(statearr_35859_35876[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35847 === (10))){
var inst_35838 = (state_35846[(2)]);
var state_35846__$1 = state_35846;
var statearr_35860_35877 = state_35846__$1;
(statearr_35860_35877[(2)] = inst_35838);

(statearr_35860_35877[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35847 === (8))){
var inst_35826 = (state_35846[(7)]);
var inst_35825 = (state_35846[(8)]);
var inst_35827 = (state_35846[(9)]);
var inst_35816 = (state_35846[(10)]);
var inst_35830 = (function (){var cs = inst_35816;
var vec__35821 = inst_35825;
var v = inst_35826;
var c = inst_35827;
return ((function (cs,vec__35821,v,c,inst_35826,inst_35825,inst_35827,inst_35816,state_val_35847,c__34455__auto___35868,out){
return (function (p1__35812_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35812_SHARP_);
});
;})(cs,vec__35821,v,c,inst_35826,inst_35825,inst_35827,inst_35816,state_val_35847,c__34455__auto___35868,out))
})();
var inst_35831 = cljs.core.filterv.call(null,inst_35830,inst_35816);
var inst_35816__$1 = inst_35831;
var state_35846__$1 = (function (){var statearr_35861 = state_35846;
(statearr_35861[(10)] = inst_35816__$1);

return statearr_35861;
})();
var statearr_35862_35878 = state_35846__$1;
(statearr_35862_35878[(2)] = null);

(statearr_35862_35878[(1)] = (2));


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
});})(c__34455__auto___35868,out))
;
return ((function (switch__34365__auto__,c__34455__auto___35868,out){
return (function() {
var cljs$core$async$state_machine__34366__auto__ = null;
var cljs$core$async$state_machine__34366__auto____0 = (function (){
var statearr_35863 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35863[(0)] = cljs$core$async$state_machine__34366__auto__);

(statearr_35863[(1)] = (1));

return statearr_35863;
});
var cljs$core$async$state_machine__34366__auto____1 = (function (state_35846){
while(true){
var ret_value__34367__auto__ = (function (){try{while(true){
var result__34368__auto__ = switch__34365__auto__.call(null,state_35846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34368__auto__;
}
break;
}
}catch (e35864){if((e35864 instanceof Object)){
var ex__34369__auto__ = e35864;
var statearr_35865_35879 = state_35846;
(statearr_35865_35879[(5)] = ex__34369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35880 = state_35846;
state_35846 = G__35880;
continue;
} else {
return ret_value__34367__auto__;
}
break;
}
});
cljs$core$async$state_machine__34366__auto__ = function(state_35846){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34366__auto____1.call(this,state_35846);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34366__auto____0;
cljs$core$async$state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34366__auto____1;
return cljs$core$async$state_machine__34366__auto__;
})()
;})(switch__34365__auto__,c__34455__auto___35868,out))
})();
var state__34457__auto__ = (function (){var statearr_35866 = f__34456__auto__.call(null);
(statearr_35866[(6)] = c__34455__auto___35868);

return statearr_35866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34457__auto__);
});})(c__34455__auto___35868,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35882 = arguments.length;
switch (G__35882) {
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
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34455__auto___35927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34455__auto___35927,out){
return (function (){
var f__34456__auto__ = (function (){var switch__34365__auto__ = ((function (c__34455__auto___35927,out){
return (function (state_35906){
var state_val_35907 = (state_35906[(1)]);
if((state_val_35907 === (7))){
var inst_35888 = (state_35906[(7)]);
var inst_35888__$1 = (state_35906[(2)]);
var inst_35889 = (inst_35888__$1 == null);
var inst_35890 = cljs.core.not.call(null,inst_35889);
var state_35906__$1 = (function (){var statearr_35908 = state_35906;
(statearr_35908[(7)] = inst_35888__$1);

return statearr_35908;
})();
if(inst_35890){
var statearr_35909_35928 = state_35906__$1;
(statearr_35909_35928[(1)] = (8));

} else {
var statearr_35910_35929 = state_35906__$1;
(statearr_35910_35929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35907 === (1))){
var inst_35883 = (0);
var state_35906__$1 = (function (){var statearr_35911 = state_35906;
(statearr_35911[(8)] = inst_35883);

return statearr_35911;
})();
var statearr_35912_35930 = state_35906__$1;
(statearr_35912_35930[(2)] = null);

(statearr_35912_35930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35907 === (4))){
var state_35906__$1 = state_35906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35906__$1,(7),ch);
} else {
if((state_val_35907 === (6))){
var inst_35901 = (state_35906[(2)]);
var state_35906__$1 = state_35906;
var statearr_35913_35931 = state_35906__$1;
(statearr_35913_35931[(2)] = inst_35901);

(statearr_35913_35931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35907 === (3))){
var inst_35903 = (state_35906[(2)]);
var inst_35904 = cljs.core.async.close_BANG_.call(null,out);
var state_35906__$1 = (function (){var statearr_35914 = state_35906;
(statearr_35914[(9)] = inst_35903);

return statearr_35914;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35906__$1,inst_35904);
} else {
if((state_val_35907 === (2))){
var inst_35883 = (state_35906[(8)]);
var inst_35885 = (inst_35883 < n);
var state_35906__$1 = state_35906;
if(cljs.core.truth_(inst_35885)){
var statearr_35915_35932 = state_35906__$1;
(statearr_35915_35932[(1)] = (4));

} else {
var statearr_35916_35933 = state_35906__$1;
(statearr_35916_35933[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35907 === (11))){
var inst_35883 = (state_35906[(8)]);
var inst_35893 = (state_35906[(2)]);
var inst_35894 = (inst_35883 + (1));
var inst_35883__$1 = inst_35894;
var state_35906__$1 = (function (){var statearr_35917 = state_35906;
(statearr_35917[(8)] = inst_35883__$1);

(statearr_35917[(10)] = inst_35893);

return statearr_35917;
})();
var statearr_35918_35934 = state_35906__$1;
(statearr_35918_35934[(2)] = null);

(statearr_35918_35934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35907 === (9))){
var state_35906__$1 = state_35906;
var statearr_35919_35935 = state_35906__$1;
(statearr_35919_35935[(2)] = null);

(statearr_35919_35935[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35907 === (5))){
var state_35906__$1 = state_35906;
var statearr_35920_35936 = state_35906__$1;
(statearr_35920_35936[(2)] = null);

(statearr_35920_35936[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35907 === (10))){
var inst_35898 = (state_35906[(2)]);
var state_35906__$1 = state_35906;
var statearr_35921_35937 = state_35906__$1;
(statearr_35921_35937[(2)] = inst_35898);

(statearr_35921_35937[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35907 === (8))){
var inst_35888 = (state_35906[(7)]);
var state_35906__$1 = state_35906;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35906__$1,(11),out,inst_35888);
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
});})(c__34455__auto___35927,out))
;
return ((function (switch__34365__auto__,c__34455__auto___35927,out){
return (function() {
var cljs$core$async$state_machine__34366__auto__ = null;
var cljs$core$async$state_machine__34366__auto____0 = (function (){
var statearr_35922 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35922[(0)] = cljs$core$async$state_machine__34366__auto__);

(statearr_35922[(1)] = (1));

return statearr_35922;
});
var cljs$core$async$state_machine__34366__auto____1 = (function (state_35906){
while(true){
var ret_value__34367__auto__ = (function (){try{while(true){
var result__34368__auto__ = switch__34365__auto__.call(null,state_35906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34368__auto__;
}
break;
}
}catch (e35923){if((e35923 instanceof Object)){
var ex__34369__auto__ = e35923;
var statearr_35924_35938 = state_35906;
(statearr_35924_35938[(5)] = ex__34369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35939 = state_35906;
state_35906 = G__35939;
continue;
} else {
return ret_value__34367__auto__;
}
break;
}
});
cljs$core$async$state_machine__34366__auto__ = function(state_35906){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34366__auto____1.call(this,state_35906);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34366__auto____0;
cljs$core$async$state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34366__auto____1;
return cljs$core$async$state_machine__34366__auto__;
})()
;})(switch__34365__auto__,c__34455__auto___35927,out))
})();
var state__34457__auto__ = (function (){var statearr_35925 = f__34456__auto__.call(null);
(statearr_35925[(6)] = c__34455__auto___35927);

return statearr_35925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34457__auto__);
});})(c__34455__auto___35927,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35941 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35941 = (function (f,ch,meta35942){
this.f = f;
this.ch = ch;
this.meta35942 = meta35942;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35943,meta35942__$1){
var self__ = this;
var _35943__$1 = this;
return (new cljs.core.async.t_cljs$core$async35941(self__.f,self__.ch,meta35942__$1));
});

cljs.core.async.t_cljs$core$async35941.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35943){
var self__ = this;
var _35943__$1 = this;
return self__.meta35942;
});

cljs.core.async.t_cljs$core$async35941.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35941.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35941.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35941.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35941.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35944 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35944 = (function (f,ch,meta35942,_,fn1,meta35945){
this.f = f;
this.ch = ch;
this.meta35942 = meta35942;
this._ = _;
this.fn1 = fn1;
this.meta35945 = meta35945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35946,meta35945__$1){
var self__ = this;
var _35946__$1 = this;
return (new cljs.core.async.t_cljs$core$async35944(self__.f,self__.ch,self__.meta35942,self__._,self__.fn1,meta35945__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35944.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35946){
var self__ = this;
var _35946__$1 = this;
return self__.meta35945;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35944.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35944.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35944.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35944.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35940_SHARP_){
return f1.call(null,(((p1__35940_SHARP_ == null))?null:self__.f.call(null,p1__35940_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35944.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35942","meta35942",-1218955576,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35941","cljs.core.async/t_cljs$core$async35941",685967218,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35945","meta35945",-349499887,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35944.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35944";

cljs.core.async.t_cljs$core$async35944.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__31460__auto__,writer__31461__auto__,opt__31462__auto__){
return cljs.core._write.call(null,writer__31461__auto__,"cljs.core.async/t_cljs$core$async35944");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async35944 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35944(f__$1,ch__$1,meta35942__$1,___$2,fn1__$1,meta35945){
return (new cljs.core.async.t_cljs$core$async35944(f__$1,ch__$1,meta35942__$1,___$2,fn1__$1,meta35945));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35944(self__.f,self__.ch,self__.meta35942,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30777__auto__ = ret;
if(cljs.core.truth_(and__30777__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30777__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async35941.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35941.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35941.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35942","meta35942",-1218955576,null)], null);
});

cljs.core.async.t_cljs$core$async35941.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35941.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35941";

cljs.core.async.t_cljs$core$async35941.cljs$lang$ctorPrWriter = (function (this__31460__auto__,writer__31461__auto__,opt__31462__auto__){
return cljs.core._write.call(null,writer__31461__auto__,"cljs.core.async/t_cljs$core$async35941");
});

cljs.core.async.__GT_t_cljs$core$async35941 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35941(f__$1,ch__$1,meta35942){
return (new cljs.core.async.t_cljs$core$async35941(f__$1,ch__$1,meta35942));
});

}

return (new cljs.core.async.t_cljs$core$async35941(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35947 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35947 = (function (f,ch,meta35948){
this.f = f;
this.ch = ch;
this.meta35948 = meta35948;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35949,meta35948__$1){
var self__ = this;
var _35949__$1 = this;
return (new cljs.core.async.t_cljs$core$async35947(self__.f,self__.ch,meta35948__$1));
});

cljs.core.async.t_cljs$core$async35947.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35949){
var self__ = this;
var _35949__$1 = this;
return self__.meta35948;
});

cljs.core.async.t_cljs$core$async35947.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35947.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35947.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35947.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35947.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35947.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35947.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35948","meta35948",-1066010703,null)], null);
});

cljs.core.async.t_cljs$core$async35947.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35947.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35947";

cljs.core.async.t_cljs$core$async35947.cljs$lang$ctorPrWriter = (function (this__31460__auto__,writer__31461__auto__,opt__31462__auto__){
return cljs.core._write.call(null,writer__31461__auto__,"cljs.core.async/t_cljs$core$async35947");
});

cljs.core.async.__GT_t_cljs$core$async35947 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35947(f__$1,ch__$1,meta35948){
return (new cljs.core.async.t_cljs$core$async35947(f__$1,ch__$1,meta35948));
});

}

return (new cljs.core.async.t_cljs$core$async35947(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35950 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35950 = (function (p,ch,meta35951){
this.p = p;
this.ch = ch;
this.meta35951 = meta35951;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35952,meta35951__$1){
var self__ = this;
var _35952__$1 = this;
return (new cljs.core.async.t_cljs$core$async35950(self__.p,self__.ch,meta35951__$1));
});

cljs.core.async.t_cljs$core$async35950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35952){
var self__ = this;
var _35952__$1 = this;
return self__.meta35951;
});

cljs.core.async.t_cljs$core$async35950.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35950.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35950.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35950.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35950.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35950.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35950.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35950.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35951","meta35951",906825567,null)], null);
});

cljs.core.async.t_cljs$core$async35950.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35950.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35950";

cljs.core.async.t_cljs$core$async35950.cljs$lang$ctorPrWriter = (function (this__31460__auto__,writer__31461__auto__,opt__31462__auto__){
return cljs.core._write.call(null,writer__31461__auto__,"cljs.core.async/t_cljs$core$async35950");
});

cljs.core.async.__GT_t_cljs$core$async35950 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35950(p__$1,ch__$1,meta35951){
return (new cljs.core.async.t_cljs$core$async35950(p__$1,ch__$1,meta35951));
});

}

return (new cljs.core.async.t_cljs$core$async35950(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__35954 = arguments.length;
switch (G__35954) {
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
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34455__auto___35994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34455__auto___35994,out){
return (function (){
var f__34456__auto__ = (function (){var switch__34365__auto__ = ((function (c__34455__auto___35994,out){
return (function (state_35975){
var state_val_35976 = (state_35975[(1)]);
if((state_val_35976 === (7))){
var inst_35971 = (state_35975[(2)]);
var state_35975__$1 = state_35975;
var statearr_35977_35995 = state_35975__$1;
(statearr_35977_35995[(2)] = inst_35971);

(statearr_35977_35995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35976 === (1))){
var state_35975__$1 = state_35975;
var statearr_35978_35996 = state_35975__$1;
(statearr_35978_35996[(2)] = null);

(statearr_35978_35996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35976 === (4))){
var inst_35957 = (state_35975[(7)]);
var inst_35957__$1 = (state_35975[(2)]);
var inst_35958 = (inst_35957__$1 == null);
var state_35975__$1 = (function (){var statearr_35979 = state_35975;
(statearr_35979[(7)] = inst_35957__$1);

return statearr_35979;
})();
if(cljs.core.truth_(inst_35958)){
var statearr_35980_35997 = state_35975__$1;
(statearr_35980_35997[(1)] = (5));

} else {
var statearr_35981_35998 = state_35975__$1;
(statearr_35981_35998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35976 === (6))){
var inst_35957 = (state_35975[(7)]);
var inst_35962 = p.call(null,inst_35957);
var state_35975__$1 = state_35975;
if(cljs.core.truth_(inst_35962)){
var statearr_35982_35999 = state_35975__$1;
(statearr_35982_35999[(1)] = (8));

} else {
var statearr_35983_36000 = state_35975__$1;
(statearr_35983_36000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35976 === (3))){
var inst_35973 = (state_35975[(2)]);
var state_35975__$1 = state_35975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35975__$1,inst_35973);
} else {
if((state_val_35976 === (2))){
var state_35975__$1 = state_35975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35975__$1,(4),ch);
} else {
if((state_val_35976 === (11))){
var inst_35965 = (state_35975[(2)]);
var state_35975__$1 = state_35975;
var statearr_35984_36001 = state_35975__$1;
(statearr_35984_36001[(2)] = inst_35965);

(statearr_35984_36001[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35976 === (9))){
var state_35975__$1 = state_35975;
var statearr_35985_36002 = state_35975__$1;
(statearr_35985_36002[(2)] = null);

(statearr_35985_36002[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35976 === (5))){
var inst_35960 = cljs.core.async.close_BANG_.call(null,out);
var state_35975__$1 = state_35975;
var statearr_35986_36003 = state_35975__$1;
(statearr_35986_36003[(2)] = inst_35960);

(statearr_35986_36003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35976 === (10))){
var inst_35968 = (state_35975[(2)]);
var state_35975__$1 = (function (){var statearr_35987 = state_35975;
(statearr_35987[(8)] = inst_35968);

return statearr_35987;
})();
var statearr_35988_36004 = state_35975__$1;
(statearr_35988_36004[(2)] = null);

(statearr_35988_36004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35976 === (8))){
var inst_35957 = (state_35975[(7)]);
var state_35975__$1 = state_35975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35975__$1,(11),out,inst_35957);
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
});})(c__34455__auto___35994,out))
;
return ((function (switch__34365__auto__,c__34455__auto___35994,out){
return (function() {
var cljs$core$async$state_machine__34366__auto__ = null;
var cljs$core$async$state_machine__34366__auto____0 = (function (){
var statearr_35989 = [null,null,null,null,null,null,null,null,null];
(statearr_35989[(0)] = cljs$core$async$state_machine__34366__auto__);

(statearr_35989[(1)] = (1));

return statearr_35989;
});
var cljs$core$async$state_machine__34366__auto____1 = (function (state_35975){
while(true){
var ret_value__34367__auto__ = (function (){try{while(true){
var result__34368__auto__ = switch__34365__auto__.call(null,state_35975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34368__auto__;
}
break;
}
}catch (e35990){if((e35990 instanceof Object)){
var ex__34369__auto__ = e35990;
var statearr_35991_36005 = state_35975;
(statearr_35991_36005[(5)] = ex__34369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36006 = state_35975;
state_35975 = G__36006;
continue;
} else {
return ret_value__34367__auto__;
}
break;
}
});
cljs$core$async$state_machine__34366__auto__ = function(state_35975){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34366__auto____1.call(this,state_35975);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34366__auto____0;
cljs$core$async$state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34366__auto____1;
return cljs$core$async$state_machine__34366__auto__;
})()
;})(switch__34365__auto__,c__34455__auto___35994,out))
})();
var state__34457__auto__ = (function (){var statearr_35992 = f__34456__auto__.call(null);
(statearr_35992[(6)] = c__34455__auto___35994);

return statearr_35992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34457__auto__);
});})(c__34455__auto___35994,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36008 = arguments.length;
switch (G__36008) {
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
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34455__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34455__auto__){
return (function (){
var f__34456__auto__ = (function (){var switch__34365__auto__ = ((function (c__34455__auto__){
return (function (state_36071){
var state_val_36072 = (state_36071[(1)]);
if((state_val_36072 === (7))){
var inst_36067 = (state_36071[(2)]);
var state_36071__$1 = state_36071;
var statearr_36073_36111 = state_36071__$1;
(statearr_36073_36111[(2)] = inst_36067);

(statearr_36073_36111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (20))){
var inst_36037 = (state_36071[(7)]);
var inst_36048 = (state_36071[(2)]);
var inst_36049 = cljs.core.next.call(null,inst_36037);
var inst_36023 = inst_36049;
var inst_36024 = null;
var inst_36025 = (0);
var inst_36026 = (0);
var state_36071__$1 = (function (){var statearr_36074 = state_36071;
(statearr_36074[(8)] = inst_36025);

(statearr_36074[(9)] = inst_36048);

(statearr_36074[(10)] = inst_36024);

(statearr_36074[(11)] = inst_36023);

(statearr_36074[(12)] = inst_36026);

return statearr_36074;
})();
var statearr_36075_36112 = state_36071__$1;
(statearr_36075_36112[(2)] = null);

(statearr_36075_36112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (1))){
var state_36071__$1 = state_36071;
var statearr_36076_36113 = state_36071__$1;
(statearr_36076_36113[(2)] = null);

(statearr_36076_36113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (4))){
var inst_36012 = (state_36071[(13)]);
var inst_36012__$1 = (state_36071[(2)]);
var inst_36013 = (inst_36012__$1 == null);
var state_36071__$1 = (function (){var statearr_36077 = state_36071;
(statearr_36077[(13)] = inst_36012__$1);

return statearr_36077;
})();
if(cljs.core.truth_(inst_36013)){
var statearr_36078_36114 = state_36071__$1;
(statearr_36078_36114[(1)] = (5));

} else {
var statearr_36079_36115 = state_36071__$1;
(statearr_36079_36115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (15))){
var state_36071__$1 = state_36071;
var statearr_36083_36116 = state_36071__$1;
(statearr_36083_36116[(2)] = null);

(statearr_36083_36116[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (21))){
var state_36071__$1 = state_36071;
var statearr_36084_36117 = state_36071__$1;
(statearr_36084_36117[(2)] = null);

(statearr_36084_36117[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (13))){
var inst_36025 = (state_36071[(8)]);
var inst_36024 = (state_36071[(10)]);
var inst_36023 = (state_36071[(11)]);
var inst_36026 = (state_36071[(12)]);
var inst_36033 = (state_36071[(2)]);
var inst_36034 = (inst_36026 + (1));
var tmp36080 = inst_36025;
var tmp36081 = inst_36024;
var tmp36082 = inst_36023;
var inst_36023__$1 = tmp36082;
var inst_36024__$1 = tmp36081;
var inst_36025__$1 = tmp36080;
var inst_36026__$1 = inst_36034;
var state_36071__$1 = (function (){var statearr_36085 = state_36071;
(statearr_36085[(8)] = inst_36025__$1);

(statearr_36085[(10)] = inst_36024__$1);

(statearr_36085[(14)] = inst_36033);

(statearr_36085[(11)] = inst_36023__$1);

(statearr_36085[(12)] = inst_36026__$1);

return statearr_36085;
})();
var statearr_36086_36118 = state_36071__$1;
(statearr_36086_36118[(2)] = null);

(statearr_36086_36118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (22))){
var state_36071__$1 = state_36071;
var statearr_36087_36119 = state_36071__$1;
(statearr_36087_36119[(2)] = null);

(statearr_36087_36119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (6))){
var inst_36012 = (state_36071[(13)]);
var inst_36021 = f.call(null,inst_36012);
var inst_36022 = cljs.core.seq.call(null,inst_36021);
var inst_36023 = inst_36022;
var inst_36024 = null;
var inst_36025 = (0);
var inst_36026 = (0);
var state_36071__$1 = (function (){var statearr_36088 = state_36071;
(statearr_36088[(8)] = inst_36025);

(statearr_36088[(10)] = inst_36024);

(statearr_36088[(11)] = inst_36023);

(statearr_36088[(12)] = inst_36026);

return statearr_36088;
})();
var statearr_36089_36120 = state_36071__$1;
(statearr_36089_36120[(2)] = null);

(statearr_36089_36120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (17))){
var inst_36037 = (state_36071[(7)]);
var inst_36041 = cljs.core.chunk_first.call(null,inst_36037);
var inst_36042 = cljs.core.chunk_rest.call(null,inst_36037);
var inst_36043 = cljs.core.count.call(null,inst_36041);
var inst_36023 = inst_36042;
var inst_36024 = inst_36041;
var inst_36025 = inst_36043;
var inst_36026 = (0);
var state_36071__$1 = (function (){var statearr_36090 = state_36071;
(statearr_36090[(8)] = inst_36025);

(statearr_36090[(10)] = inst_36024);

(statearr_36090[(11)] = inst_36023);

(statearr_36090[(12)] = inst_36026);

return statearr_36090;
})();
var statearr_36091_36121 = state_36071__$1;
(statearr_36091_36121[(2)] = null);

(statearr_36091_36121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (3))){
var inst_36069 = (state_36071[(2)]);
var state_36071__$1 = state_36071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36071__$1,inst_36069);
} else {
if((state_val_36072 === (12))){
var inst_36057 = (state_36071[(2)]);
var state_36071__$1 = state_36071;
var statearr_36092_36122 = state_36071__$1;
(statearr_36092_36122[(2)] = inst_36057);

(statearr_36092_36122[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (2))){
var state_36071__$1 = state_36071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36071__$1,(4),in$);
} else {
if((state_val_36072 === (23))){
var inst_36065 = (state_36071[(2)]);
var state_36071__$1 = state_36071;
var statearr_36093_36123 = state_36071__$1;
(statearr_36093_36123[(2)] = inst_36065);

(statearr_36093_36123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (19))){
var inst_36052 = (state_36071[(2)]);
var state_36071__$1 = state_36071;
var statearr_36094_36124 = state_36071__$1;
(statearr_36094_36124[(2)] = inst_36052);

(statearr_36094_36124[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (11))){
var inst_36037 = (state_36071[(7)]);
var inst_36023 = (state_36071[(11)]);
var inst_36037__$1 = cljs.core.seq.call(null,inst_36023);
var state_36071__$1 = (function (){var statearr_36095 = state_36071;
(statearr_36095[(7)] = inst_36037__$1);

return statearr_36095;
})();
if(inst_36037__$1){
var statearr_36096_36125 = state_36071__$1;
(statearr_36096_36125[(1)] = (14));

} else {
var statearr_36097_36126 = state_36071__$1;
(statearr_36097_36126[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (9))){
var inst_36059 = (state_36071[(2)]);
var inst_36060 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36071__$1 = (function (){var statearr_36098 = state_36071;
(statearr_36098[(15)] = inst_36059);

return statearr_36098;
})();
if(cljs.core.truth_(inst_36060)){
var statearr_36099_36127 = state_36071__$1;
(statearr_36099_36127[(1)] = (21));

} else {
var statearr_36100_36128 = state_36071__$1;
(statearr_36100_36128[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (5))){
var inst_36015 = cljs.core.async.close_BANG_.call(null,out);
var state_36071__$1 = state_36071;
var statearr_36101_36129 = state_36071__$1;
(statearr_36101_36129[(2)] = inst_36015);

(statearr_36101_36129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (14))){
var inst_36037 = (state_36071[(7)]);
var inst_36039 = cljs.core.chunked_seq_QMARK_.call(null,inst_36037);
var state_36071__$1 = state_36071;
if(inst_36039){
var statearr_36102_36130 = state_36071__$1;
(statearr_36102_36130[(1)] = (17));

} else {
var statearr_36103_36131 = state_36071__$1;
(statearr_36103_36131[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (16))){
var inst_36055 = (state_36071[(2)]);
var state_36071__$1 = state_36071;
var statearr_36104_36132 = state_36071__$1;
(statearr_36104_36132[(2)] = inst_36055);

(statearr_36104_36132[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (10))){
var inst_36024 = (state_36071[(10)]);
var inst_36026 = (state_36071[(12)]);
var inst_36031 = cljs.core._nth.call(null,inst_36024,inst_36026);
var state_36071__$1 = state_36071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36071__$1,(13),out,inst_36031);
} else {
if((state_val_36072 === (18))){
var inst_36037 = (state_36071[(7)]);
var inst_36046 = cljs.core.first.call(null,inst_36037);
var state_36071__$1 = state_36071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36071__$1,(20),out,inst_36046);
} else {
if((state_val_36072 === (8))){
var inst_36025 = (state_36071[(8)]);
var inst_36026 = (state_36071[(12)]);
var inst_36028 = (inst_36026 < inst_36025);
var inst_36029 = inst_36028;
var state_36071__$1 = state_36071;
if(cljs.core.truth_(inst_36029)){
var statearr_36105_36133 = state_36071__$1;
(statearr_36105_36133[(1)] = (10));

} else {
var statearr_36106_36134 = state_36071__$1;
(statearr_36106_36134[(1)] = (11));

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
});})(c__34455__auto__))
;
return ((function (switch__34365__auto__,c__34455__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34366__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34366__auto____0 = (function (){
var statearr_36107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36107[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34366__auto__);

(statearr_36107[(1)] = (1));

return statearr_36107;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34366__auto____1 = (function (state_36071){
while(true){
var ret_value__34367__auto__ = (function (){try{while(true){
var result__34368__auto__ = switch__34365__auto__.call(null,state_36071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34368__auto__;
}
break;
}
}catch (e36108){if((e36108 instanceof Object)){
var ex__34369__auto__ = e36108;
var statearr_36109_36135 = state_36071;
(statearr_36109_36135[(5)] = ex__34369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36136 = state_36071;
state_36071 = G__36136;
continue;
} else {
return ret_value__34367__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34366__auto__ = function(state_36071){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34366__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34366__auto____1.call(this,state_36071);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34366__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34366__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34366__auto__;
})()
;})(switch__34365__auto__,c__34455__auto__))
})();
var state__34457__auto__ = (function (){var statearr_36110 = f__34456__auto__.call(null);
(statearr_36110[(6)] = c__34455__auto__);

return statearr_36110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34457__auto__);
});})(c__34455__auto__))
);

return c__34455__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36138 = arguments.length;
switch (G__36138) {
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
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__36141 = arguments.length;
switch (G__36141) {
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
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__36144 = arguments.length;
switch (G__36144) {
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
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34455__auto___36191 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34455__auto___36191,out){
return (function (){
var f__34456__auto__ = (function (){var switch__34365__auto__ = ((function (c__34455__auto___36191,out){
return (function (state_36168){
var state_val_36169 = (state_36168[(1)]);
if((state_val_36169 === (7))){
var inst_36163 = (state_36168[(2)]);
var state_36168__$1 = state_36168;
var statearr_36170_36192 = state_36168__$1;
(statearr_36170_36192[(2)] = inst_36163);

(statearr_36170_36192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36169 === (1))){
var inst_36145 = null;
var state_36168__$1 = (function (){var statearr_36171 = state_36168;
(statearr_36171[(7)] = inst_36145);

return statearr_36171;
})();
var statearr_36172_36193 = state_36168__$1;
(statearr_36172_36193[(2)] = null);

(statearr_36172_36193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36169 === (4))){
var inst_36148 = (state_36168[(8)]);
var inst_36148__$1 = (state_36168[(2)]);
var inst_36149 = (inst_36148__$1 == null);
var inst_36150 = cljs.core.not.call(null,inst_36149);
var state_36168__$1 = (function (){var statearr_36173 = state_36168;
(statearr_36173[(8)] = inst_36148__$1);

return statearr_36173;
})();
if(inst_36150){
var statearr_36174_36194 = state_36168__$1;
(statearr_36174_36194[(1)] = (5));

} else {
var statearr_36175_36195 = state_36168__$1;
(statearr_36175_36195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36169 === (6))){
var state_36168__$1 = state_36168;
var statearr_36176_36196 = state_36168__$1;
(statearr_36176_36196[(2)] = null);

(statearr_36176_36196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36169 === (3))){
var inst_36165 = (state_36168[(2)]);
var inst_36166 = cljs.core.async.close_BANG_.call(null,out);
var state_36168__$1 = (function (){var statearr_36177 = state_36168;
(statearr_36177[(9)] = inst_36165);

return statearr_36177;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36168__$1,inst_36166);
} else {
if((state_val_36169 === (2))){
var state_36168__$1 = state_36168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36168__$1,(4),ch);
} else {
if((state_val_36169 === (11))){
var inst_36148 = (state_36168[(8)]);
var inst_36157 = (state_36168[(2)]);
var inst_36145 = inst_36148;
var state_36168__$1 = (function (){var statearr_36178 = state_36168;
(statearr_36178[(7)] = inst_36145);

(statearr_36178[(10)] = inst_36157);

return statearr_36178;
})();
var statearr_36179_36197 = state_36168__$1;
(statearr_36179_36197[(2)] = null);

(statearr_36179_36197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36169 === (9))){
var inst_36148 = (state_36168[(8)]);
var state_36168__$1 = state_36168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36168__$1,(11),out,inst_36148);
} else {
if((state_val_36169 === (5))){
var inst_36148 = (state_36168[(8)]);
var inst_36145 = (state_36168[(7)]);
var inst_36152 = cljs.core._EQ_.call(null,inst_36148,inst_36145);
var state_36168__$1 = state_36168;
if(inst_36152){
var statearr_36181_36198 = state_36168__$1;
(statearr_36181_36198[(1)] = (8));

} else {
var statearr_36182_36199 = state_36168__$1;
(statearr_36182_36199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36169 === (10))){
var inst_36160 = (state_36168[(2)]);
var state_36168__$1 = state_36168;
var statearr_36183_36200 = state_36168__$1;
(statearr_36183_36200[(2)] = inst_36160);

(statearr_36183_36200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36169 === (8))){
var inst_36145 = (state_36168[(7)]);
var tmp36180 = inst_36145;
var inst_36145__$1 = tmp36180;
var state_36168__$1 = (function (){var statearr_36184 = state_36168;
(statearr_36184[(7)] = inst_36145__$1);

return statearr_36184;
})();
var statearr_36185_36201 = state_36168__$1;
(statearr_36185_36201[(2)] = null);

(statearr_36185_36201[(1)] = (2));


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
});})(c__34455__auto___36191,out))
;
return ((function (switch__34365__auto__,c__34455__auto___36191,out){
return (function() {
var cljs$core$async$state_machine__34366__auto__ = null;
var cljs$core$async$state_machine__34366__auto____0 = (function (){
var statearr_36186 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36186[(0)] = cljs$core$async$state_machine__34366__auto__);

(statearr_36186[(1)] = (1));

return statearr_36186;
});
var cljs$core$async$state_machine__34366__auto____1 = (function (state_36168){
while(true){
var ret_value__34367__auto__ = (function (){try{while(true){
var result__34368__auto__ = switch__34365__auto__.call(null,state_36168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34368__auto__;
}
break;
}
}catch (e36187){if((e36187 instanceof Object)){
var ex__34369__auto__ = e36187;
var statearr_36188_36202 = state_36168;
(statearr_36188_36202[(5)] = ex__34369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36203 = state_36168;
state_36168 = G__36203;
continue;
} else {
return ret_value__34367__auto__;
}
break;
}
});
cljs$core$async$state_machine__34366__auto__ = function(state_36168){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34366__auto____1.call(this,state_36168);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34366__auto____0;
cljs$core$async$state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34366__auto____1;
return cljs$core$async$state_machine__34366__auto__;
})()
;})(switch__34365__auto__,c__34455__auto___36191,out))
})();
var state__34457__auto__ = (function (){var statearr_36189 = f__34456__auto__.call(null);
(statearr_36189[(6)] = c__34455__auto___36191);

return statearr_36189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34457__auto__);
});})(c__34455__auto___36191,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36205 = arguments.length;
switch (G__36205) {
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
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34455__auto___36271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34455__auto___36271,out){
return (function (){
var f__34456__auto__ = (function (){var switch__34365__auto__ = ((function (c__34455__auto___36271,out){
return (function (state_36243){
var state_val_36244 = (state_36243[(1)]);
if((state_val_36244 === (7))){
var inst_36239 = (state_36243[(2)]);
var state_36243__$1 = state_36243;
var statearr_36245_36272 = state_36243__$1;
(statearr_36245_36272[(2)] = inst_36239);

(statearr_36245_36272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (1))){
var inst_36206 = (new Array(n));
var inst_36207 = inst_36206;
var inst_36208 = (0);
var state_36243__$1 = (function (){var statearr_36246 = state_36243;
(statearr_36246[(7)] = inst_36207);

(statearr_36246[(8)] = inst_36208);

return statearr_36246;
})();
var statearr_36247_36273 = state_36243__$1;
(statearr_36247_36273[(2)] = null);

(statearr_36247_36273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (4))){
var inst_36211 = (state_36243[(9)]);
var inst_36211__$1 = (state_36243[(2)]);
var inst_36212 = (inst_36211__$1 == null);
var inst_36213 = cljs.core.not.call(null,inst_36212);
var state_36243__$1 = (function (){var statearr_36248 = state_36243;
(statearr_36248[(9)] = inst_36211__$1);

return statearr_36248;
})();
if(inst_36213){
var statearr_36249_36274 = state_36243__$1;
(statearr_36249_36274[(1)] = (5));

} else {
var statearr_36250_36275 = state_36243__$1;
(statearr_36250_36275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (15))){
var inst_36233 = (state_36243[(2)]);
var state_36243__$1 = state_36243;
var statearr_36251_36276 = state_36243__$1;
(statearr_36251_36276[(2)] = inst_36233);

(statearr_36251_36276[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (13))){
var state_36243__$1 = state_36243;
var statearr_36252_36277 = state_36243__$1;
(statearr_36252_36277[(2)] = null);

(statearr_36252_36277[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (6))){
var inst_36208 = (state_36243[(8)]);
var inst_36229 = (inst_36208 > (0));
var state_36243__$1 = state_36243;
if(cljs.core.truth_(inst_36229)){
var statearr_36253_36278 = state_36243__$1;
(statearr_36253_36278[(1)] = (12));

} else {
var statearr_36254_36279 = state_36243__$1;
(statearr_36254_36279[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (3))){
var inst_36241 = (state_36243[(2)]);
var state_36243__$1 = state_36243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36243__$1,inst_36241);
} else {
if((state_val_36244 === (12))){
var inst_36207 = (state_36243[(7)]);
var inst_36231 = cljs.core.vec.call(null,inst_36207);
var state_36243__$1 = state_36243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36243__$1,(15),out,inst_36231);
} else {
if((state_val_36244 === (2))){
var state_36243__$1 = state_36243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36243__$1,(4),ch);
} else {
if((state_val_36244 === (11))){
var inst_36223 = (state_36243[(2)]);
var inst_36224 = (new Array(n));
var inst_36207 = inst_36224;
var inst_36208 = (0);
var state_36243__$1 = (function (){var statearr_36255 = state_36243;
(statearr_36255[(7)] = inst_36207);

(statearr_36255[(8)] = inst_36208);

(statearr_36255[(10)] = inst_36223);

return statearr_36255;
})();
var statearr_36256_36280 = state_36243__$1;
(statearr_36256_36280[(2)] = null);

(statearr_36256_36280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (9))){
var inst_36207 = (state_36243[(7)]);
var inst_36221 = cljs.core.vec.call(null,inst_36207);
var state_36243__$1 = state_36243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36243__$1,(11),out,inst_36221);
} else {
if((state_val_36244 === (5))){
var inst_36216 = (state_36243[(11)]);
var inst_36207 = (state_36243[(7)]);
var inst_36211 = (state_36243[(9)]);
var inst_36208 = (state_36243[(8)]);
var inst_36215 = (inst_36207[inst_36208] = inst_36211);
var inst_36216__$1 = (inst_36208 + (1));
var inst_36217 = (inst_36216__$1 < n);
var state_36243__$1 = (function (){var statearr_36257 = state_36243;
(statearr_36257[(12)] = inst_36215);

(statearr_36257[(11)] = inst_36216__$1);

return statearr_36257;
})();
if(cljs.core.truth_(inst_36217)){
var statearr_36258_36281 = state_36243__$1;
(statearr_36258_36281[(1)] = (8));

} else {
var statearr_36259_36282 = state_36243__$1;
(statearr_36259_36282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (14))){
var inst_36236 = (state_36243[(2)]);
var inst_36237 = cljs.core.async.close_BANG_.call(null,out);
var state_36243__$1 = (function (){var statearr_36261 = state_36243;
(statearr_36261[(13)] = inst_36236);

return statearr_36261;
})();
var statearr_36262_36283 = state_36243__$1;
(statearr_36262_36283[(2)] = inst_36237);

(statearr_36262_36283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (10))){
var inst_36227 = (state_36243[(2)]);
var state_36243__$1 = state_36243;
var statearr_36263_36284 = state_36243__$1;
(statearr_36263_36284[(2)] = inst_36227);

(statearr_36263_36284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (8))){
var inst_36216 = (state_36243[(11)]);
var inst_36207 = (state_36243[(7)]);
var tmp36260 = inst_36207;
var inst_36207__$1 = tmp36260;
var inst_36208 = inst_36216;
var state_36243__$1 = (function (){var statearr_36264 = state_36243;
(statearr_36264[(7)] = inst_36207__$1);

(statearr_36264[(8)] = inst_36208);

return statearr_36264;
})();
var statearr_36265_36285 = state_36243__$1;
(statearr_36265_36285[(2)] = null);

(statearr_36265_36285[(1)] = (2));


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
});})(c__34455__auto___36271,out))
;
return ((function (switch__34365__auto__,c__34455__auto___36271,out){
return (function() {
var cljs$core$async$state_machine__34366__auto__ = null;
var cljs$core$async$state_machine__34366__auto____0 = (function (){
var statearr_36266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36266[(0)] = cljs$core$async$state_machine__34366__auto__);

(statearr_36266[(1)] = (1));

return statearr_36266;
});
var cljs$core$async$state_machine__34366__auto____1 = (function (state_36243){
while(true){
var ret_value__34367__auto__ = (function (){try{while(true){
var result__34368__auto__ = switch__34365__auto__.call(null,state_36243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34368__auto__;
}
break;
}
}catch (e36267){if((e36267 instanceof Object)){
var ex__34369__auto__ = e36267;
var statearr_36268_36286 = state_36243;
(statearr_36268_36286[(5)] = ex__34369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36287 = state_36243;
state_36243 = G__36287;
continue;
} else {
return ret_value__34367__auto__;
}
break;
}
});
cljs$core$async$state_machine__34366__auto__ = function(state_36243){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34366__auto____1.call(this,state_36243);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34366__auto____0;
cljs$core$async$state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34366__auto____1;
return cljs$core$async$state_machine__34366__auto__;
})()
;})(switch__34365__auto__,c__34455__auto___36271,out))
})();
var state__34457__auto__ = (function (){var statearr_36269 = f__34456__auto__.call(null);
(statearr_36269[(6)] = c__34455__auto___36271);

return statearr_36269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34457__auto__);
});})(c__34455__auto___36271,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36289 = arguments.length;
switch (G__36289) {
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
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34455__auto___36359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34455__auto___36359,out){
return (function (){
var f__34456__auto__ = (function (){var switch__34365__auto__ = ((function (c__34455__auto___36359,out){
return (function (state_36331){
var state_val_36332 = (state_36331[(1)]);
if((state_val_36332 === (7))){
var inst_36327 = (state_36331[(2)]);
var state_36331__$1 = state_36331;
var statearr_36333_36360 = state_36331__$1;
(statearr_36333_36360[(2)] = inst_36327);

(statearr_36333_36360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36332 === (1))){
var inst_36290 = [];
var inst_36291 = inst_36290;
var inst_36292 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36331__$1 = (function (){var statearr_36334 = state_36331;
(statearr_36334[(7)] = inst_36291);

(statearr_36334[(8)] = inst_36292);

return statearr_36334;
})();
var statearr_36335_36361 = state_36331__$1;
(statearr_36335_36361[(2)] = null);

(statearr_36335_36361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36332 === (4))){
var inst_36295 = (state_36331[(9)]);
var inst_36295__$1 = (state_36331[(2)]);
var inst_36296 = (inst_36295__$1 == null);
var inst_36297 = cljs.core.not.call(null,inst_36296);
var state_36331__$1 = (function (){var statearr_36336 = state_36331;
(statearr_36336[(9)] = inst_36295__$1);

return statearr_36336;
})();
if(inst_36297){
var statearr_36337_36362 = state_36331__$1;
(statearr_36337_36362[(1)] = (5));

} else {
var statearr_36338_36363 = state_36331__$1;
(statearr_36338_36363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36332 === (15))){
var inst_36321 = (state_36331[(2)]);
var state_36331__$1 = state_36331;
var statearr_36339_36364 = state_36331__$1;
(statearr_36339_36364[(2)] = inst_36321);

(statearr_36339_36364[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36332 === (13))){
var state_36331__$1 = state_36331;
var statearr_36340_36365 = state_36331__$1;
(statearr_36340_36365[(2)] = null);

(statearr_36340_36365[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36332 === (6))){
var inst_36291 = (state_36331[(7)]);
var inst_36316 = inst_36291.length;
var inst_36317 = (inst_36316 > (0));
var state_36331__$1 = state_36331;
if(cljs.core.truth_(inst_36317)){
var statearr_36341_36366 = state_36331__$1;
(statearr_36341_36366[(1)] = (12));

} else {
var statearr_36342_36367 = state_36331__$1;
(statearr_36342_36367[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36332 === (3))){
var inst_36329 = (state_36331[(2)]);
var state_36331__$1 = state_36331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36331__$1,inst_36329);
} else {
if((state_val_36332 === (12))){
var inst_36291 = (state_36331[(7)]);
var inst_36319 = cljs.core.vec.call(null,inst_36291);
var state_36331__$1 = state_36331;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36331__$1,(15),out,inst_36319);
} else {
if((state_val_36332 === (2))){
var state_36331__$1 = state_36331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36331__$1,(4),ch);
} else {
if((state_val_36332 === (11))){
var inst_36295 = (state_36331[(9)]);
var inst_36299 = (state_36331[(10)]);
var inst_36309 = (state_36331[(2)]);
var inst_36310 = [];
var inst_36311 = inst_36310.push(inst_36295);
var inst_36291 = inst_36310;
var inst_36292 = inst_36299;
var state_36331__$1 = (function (){var statearr_36343 = state_36331;
(statearr_36343[(7)] = inst_36291);

(statearr_36343[(11)] = inst_36309);

(statearr_36343[(8)] = inst_36292);

(statearr_36343[(12)] = inst_36311);

return statearr_36343;
})();
var statearr_36344_36368 = state_36331__$1;
(statearr_36344_36368[(2)] = null);

(statearr_36344_36368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36332 === (9))){
var inst_36291 = (state_36331[(7)]);
var inst_36307 = cljs.core.vec.call(null,inst_36291);
var state_36331__$1 = state_36331;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36331__$1,(11),out,inst_36307);
} else {
if((state_val_36332 === (5))){
var inst_36295 = (state_36331[(9)]);
var inst_36292 = (state_36331[(8)]);
var inst_36299 = (state_36331[(10)]);
var inst_36299__$1 = f.call(null,inst_36295);
var inst_36300 = cljs.core._EQ_.call(null,inst_36299__$1,inst_36292);
var inst_36301 = cljs.core.keyword_identical_QMARK_.call(null,inst_36292,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36302 = (inst_36300) || (inst_36301);
var state_36331__$1 = (function (){var statearr_36345 = state_36331;
(statearr_36345[(10)] = inst_36299__$1);

return statearr_36345;
})();
if(cljs.core.truth_(inst_36302)){
var statearr_36346_36369 = state_36331__$1;
(statearr_36346_36369[(1)] = (8));

} else {
var statearr_36347_36370 = state_36331__$1;
(statearr_36347_36370[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36332 === (14))){
var inst_36324 = (state_36331[(2)]);
var inst_36325 = cljs.core.async.close_BANG_.call(null,out);
var state_36331__$1 = (function (){var statearr_36349 = state_36331;
(statearr_36349[(13)] = inst_36324);

return statearr_36349;
})();
var statearr_36350_36371 = state_36331__$1;
(statearr_36350_36371[(2)] = inst_36325);

(statearr_36350_36371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36332 === (10))){
var inst_36314 = (state_36331[(2)]);
var state_36331__$1 = state_36331;
var statearr_36351_36372 = state_36331__$1;
(statearr_36351_36372[(2)] = inst_36314);

(statearr_36351_36372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36332 === (8))){
var inst_36291 = (state_36331[(7)]);
var inst_36295 = (state_36331[(9)]);
var inst_36299 = (state_36331[(10)]);
var inst_36304 = inst_36291.push(inst_36295);
var tmp36348 = inst_36291;
var inst_36291__$1 = tmp36348;
var inst_36292 = inst_36299;
var state_36331__$1 = (function (){var statearr_36352 = state_36331;
(statearr_36352[(7)] = inst_36291__$1);

(statearr_36352[(14)] = inst_36304);

(statearr_36352[(8)] = inst_36292);

return statearr_36352;
})();
var statearr_36353_36373 = state_36331__$1;
(statearr_36353_36373[(2)] = null);

(statearr_36353_36373[(1)] = (2));


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
});})(c__34455__auto___36359,out))
;
return ((function (switch__34365__auto__,c__34455__auto___36359,out){
return (function() {
var cljs$core$async$state_machine__34366__auto__ = null;
var cljs$core$async$state_machine__34366__auto____0 = (function (){
var statearr_36354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36354[(0)] = cljs$core$async$state_machine__34366__auto__);

(statearr_36354[(1)] = (1));

return statearr_36354;
});
var cljs$core$async$state_machine__34366__auto____1 = (function (state_36331){
while(true){
var ret_value__34367__auto__ = (function (){try{while(true){
var result__34368__auto__ = switch__34365__auto__.call(null,state_36331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34368__auto__;
}
break;
}
}catch (e36355){if((e36355 instanceof Object)){
var ex__34369__auto__ = e36355;
var statearr_36356_36374 = state_36331;
(statearr_36356_36374[(5)] = ex__34369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36375 = state_36331;
state_36331 = G__36375;
continue;
} else {
return ret_value__34367__auto__;
}
break;
}
});
cljs$core$async$state_machine__34366__auto__ = function(state_36331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34366__auto____1.call(this,state_36331);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34366__auto____0;
cljs$core$async$state_machine__34366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34366__auto____1;
return cljs$core$async$state_machine__34366__auto__;
})()
;})(switch__34365__auto__,c__34455__auto___36359,out))
})();
var state__34457__auto__ = (function (){var statearr_36357 = f__34456__auto__.call(null);
(statearr_36357[(6)] = c__34455__auto___36359);

return statearr_36357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34457__auto__);
});})(c__34455__auto___36359,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1511666491656
