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
var G__34131 = arguments.length;
switch (G__34131) {
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
if(typeof cljs.core.async.t_cljs$core$async34132 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34132 = (function (f,blockable,meta34133){
this.f = f;
this.blockable = blockable;
this.meta34133 = meta34133;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34134,meta34133__$1){
var self__ = this;
var _34134__$1 = this;
return (new cljs.core.async.t_cljs$core$async34132(self__.f,self__.blockable,meta34133__$1));
});

cljs.core.async.t_cljs$core$async34132.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34134){
var self__ = this;
var _34134__$1 = this;
return self__.meta34133;
});

cljs.core.async.t_cljs$core$async34132.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34132.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34132.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34132.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34132.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34133","meta34133",-406303940,null)], null);
});

cljs.core.async.t_cljs$core$async34132.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34132.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34132";

cljs.core.async.t_cljs$core$async34132.cljs$lang$ctorPrWriter = (function (this__30767__auto__,writer__30768__auto__,opt__30769__auto__){
return cljs.core._write.call(null,writer__30768__auto__,"cljs.core.async/t_cljs$core$async34132");
});

cljs.core.async.__GT_t_cljs$core$async34132 = (function cljs$core$async$__GT_t_cljs$core$async34132(f__$1,blockable__$1,meta34133){
return (new cljs.core.async.t_cljs$core$async34132(f__$1,blockable__$1,meta34133));
});

}

return (new cljs.core.async.t_cljs$core$async34132(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34138 = arguments.length;
switch (G__34138) {
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
var G__34141 = arguments.length;
switch (G__34141) {
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
var G__34144 = arguments.length;
switch (G__34144) {
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
var val_34146 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34146);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34146,ret){
return (function (){
return fn1.call(null,val_34146);
});})(val_34146,ret))
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
var G__34148 = arguments.length;
switch (G__34148) {
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
var n__31141__auto___34150 = n;
var x_34151 = (0);
while(true){
if((x_34151 < n__31141__auto___34150)){
(a[x_34151] = (0));

var G__34152 = (x_34151 + (1));
x_34151 = G__34152;
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

var G__34153 = (i + (1));
i = G__34153;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async34154 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34154 = (function (flag,meta34155){
this.flag = flag;
this.meta34155 = meta34155;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34156,meta34155__$1){
var self__ = this;
var _34156__$1 = this;
return (new cljs.core.async.t_cljs$core$async34154(self__.flag,meta34155__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34154.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34156){
var self__ = this;
var _34156__$1 = this;
return self__.meta34155;
});})(flag))
;

cljs.core.async.t_cljs$core$async34154.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34154.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34154.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34154.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34154.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34155","meta34155",1535239027,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34154.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34154.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34154";

cljs.core.async.t_cljs$core$async34154.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30767__auto__,writer__30768__auto__,opt__30769__auto__){
return cljs.core._write.call(null,writer__30768__auto__,"cljs.core.async/t_cljs$core$async34154");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async34154 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34154(flag__$1,meta34155){
return (new cljs.core.async.t_cljs$core$async34154(flag__$1,meta34155));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34154(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34157 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34157 = (function (flag,cb,meta34158){
this.flag = flag;
this.cb = cb;
this.meta34158 = meta34158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34159,meta34158__$1){
var self__ = this;
var _34159__$1 = this;
return (new cljs.core.async.t_cljs$core$async34157(self__.flag,self__.cb,meta34158__$1));
});

cljs.core.async.t_cljs$core$async34157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34159){
var self__ = this;
var _34159__$1 = this;
return self__.meta34158;
});

cljs.core.async.t_cljs$core$async34157.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34157.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34157.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34157.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34157.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34158","meta34158",-1460405968,null)], null);
});

cljs.core.async.t_cljs$core$async34157.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34157.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34157";

cljs.core.async.t_cljs$core$async34157.cljs$lang$ctorPrWriter = (function (this__30767__auto__,writer__30768__auto__,opt__30769__auto__){
return cljs.core._write.call(null,writer__30768__auto__,"cljs.core.async/t_cljs$core$async34157");
});

cljs.core.async.__GT_t_cljs$core$async34157 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34157(flag__$1,cb__$1,meta34158){
return (new cljs.core.async.t_cljs$core$async34157(flag__$1,cb__$1,meta34158));
});

}

return (new cljs.core.async.t_cljs$core$async34157(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34160_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34160_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34161_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34161_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30096__auto__ = wport;
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34162 = (i + (1));
i = G__34162;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30096__auto__ = ret;
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__30084__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30084__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30084__auto__;
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
var args__31382__auto__ = [];
var len__31375__auto___34168 = arguments.length;
var i__31376__auto___34169 = (0);
while(true){
if((i__31376__auto___34169 < len__31375__auto___34168)){
args__31382__auto__.push((arguments[i__31376__auto___34169]));

var G__34170 = (i__31376__auto___34169 + (1));
i__31376__auto___34169 = G__34170;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((1) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31383__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34165){
var map__34166 = p__34165;
var map__34166__$1 = ((((!((map__34166 == null)))?((((map__34166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34166.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34166):map__34166);
var opts = map__34166__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34163){
var G__34164 = cljs.core.first.call(null,seq34163);
var seq34163__$1 = cljs.core.next.call(null,seq34163);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34164,seq34163__$1);
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
var G__34172 = arguments.length;
switch (G__34172) {
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
var c__34071__auto___34218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___34218){
return (function (){
var f__34072__auto__ = (function (){var switch__33981__auto__ = ((function (c__34071__auto___34218){
return (function (state_34196){
var state_val_34197 = (state_34196[(1)]);
if((state_val_34197 === (7))){
var inst_34192 = (state_34196[(2)]);
var state_34196__$1 = state_34196;
var statearr_34198_34219 = state_34196__$1;
(statearr_34198_34219[(2)] = inst_34192);

(statearr_34198_34219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (1))){
var state_34196__$1 = state_34196;
var statearr_34199_34220 = state_34196__$1;
(statearr_34199_34220[(2)] = null);

(statearr_34199_34220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (4))){
var inst_34175 = (state_34196[(7)]);
var inst_34175__$1 = (state_34196[(2)]);
var inst_34176 = (inst_34175__$1 == null);
var state_34196__$1 = (function (){var statearr_34200 = state_34196;
(statearr_34200[(7)] = inst_34175__$1);

return statearr_34200;
})();
if(cljs.core.truth_(inst_34176)){
var statearr_34201_34221 = state_34196__$1;
(statearr_34201_34221[(1)] = (5));

} else {
var statearr_34202_34222 = state_34196__$1;
(statearr_34202_34222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (13))){
var state_34196__$1 = state_34196;
var statearr_34203_34223 = state_34196__$1;
(statearr_34203_34223[(2)] = null);

(statearr_34203_34223[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (6))){
var inst_34175 = (state_34196[(7)]);
var state_34196__$1 = state_34196;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34196__$1,(11),to,inst_34175);
} else {
if((state_val_34197 === (3))){
var inst_34194 = (state_34196[(2)]);
var state_34196__$1 = state_34196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34196__$1,inst_34194);
} else {
if((state_val_34197 === (12))){
var state_34196__$1 = state_34196;
var statearr_34204_34224 = state_34196__$1;
(statearr_34204_34224[(2)] = null);

(statearr_34204_34224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (2))){
var state_34196__$1 = state_34196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34196__$1,(4),from);
} else {
if((state_val_34197 === (11))){
var inst_34185 = (state_34196[(2)]);
var state_34196__$1 = state_34196;
if(cljs.core.truth_(inst_34185)){
var statearr_34205_34225 = state_34196__$1;
(statearr_34205_34225[(1)] = (12));

} else {
var statearr_34206_34226 = state_34196__$1;
(statearr_34206_34226[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (9))){
var state_34196__$1 = state_34196;
var statearr_34207_34227 = state_34196__$1;
(statearr_34207_34227[(2)] = null);

(statearr_34207_34227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (5))){
var state_34196__$1 = state_34196;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34208_34228 = state_34196__$1;
(statearr_34208_34228[(1)] = (8));

} else {
var statearr_34209_34229 = state_34196__$1;
(statearr_34209_34229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (14))){
var inst_34190 = (state_34196[(2)]);
var state_34196__$1 = state_34196;
var statearr_34210_34230 = state_34196__$1;
(statearr_34210_34230[(2)] = inst_34190);

(statearr_34210_34230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (10))){
var inst_34182 = (state_34196[(2)]);
var state_34196__$1 = state_34196;
var statearr_34211_34231 = state_34196__$1;
(statearr_34211_34231[(2)] = inst_34182);

(statearr_34211_34231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (8))){
var inst_34179 = cljs.core.async.close_BANG_.call(null,to);
var state_34196__$1 = state_34196;
var statearr_34212_34232 = state_34196__$1;
(statearr_34212_34232[(2)] = inst_34179);

(statearr_34212_34232[(1)] = (10));


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
});})(c__34071__auto___34218))
;
return ((function (switch__33981__auto__,c__34071__auto___34218){
return (function() {
var cljs$core$async$state_machine__33982__auto__ = null;
var cljs$core$async$state_machine__33982__auto____0 = (function (){
var statearr_34213 = [null,null,null,null,null,null,null,null];
(statearr_34213[(0)] = cljs$core$async$state_machine__33982__auto__);

(statearr_34213[(1)] = (1));

return statearr_34213;
});
var cljs$core$async$state_machine__33982__auto____1 = (function (state_34196){
while(true){
var ret_value__33983__auto__ = (function (){try{while(true){
var result__33984__auto__ = switch__33981__auto__.call(null,state_34196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33984__auto__;
}
break;
}
}catch (e34214){if((e34214 instanceof Object)){
var ex__33985__auto__ = e34214;
var statearr_34215_34233 = state_34196;
(statearr_34215_34233[(5)] = ex__33985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34234 = state_34196;
state_34196 = G__34234;
continue;
} else {
return ret_value__33983__auto__;
}
break;
}
});
cljs$core$async$state_machine__33982__auto__ = function(state_34196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33982__auto____1.call(this,state_34196);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33982__auto____0;
cljs$core$async$state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33982__auto____1;
return cljs$core$async$state_machine__33982__auto__;
})()
;})(switch__33981__auto__,c__34071__auto___34218))
})();
var state__34073__auto__ = (function (){var statearr_34216 = f__34072__auto__.call(null);
(statearr_34216[(6)] = c__34071__auto___34218);

return statearr_34216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___34218))
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
return (function (p__34235){
var vec__34236 = p__34235;
var v = cljs.core.nth.call(null,vec__34236,(0),null);
var p = cljs.core.nth.call(null,vec__34236,(1),null);
var job = vec__34236;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34071__auto___34407 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___34407,res,vec__34236,v,p,job,jobs,results){
return (function (){
var f__34072__auto__ = (function (){var switch__33981__auto__ = ((function (c__34071__auto___34407,res,vec__34236,v,p,job,jobs,results){
return (function (state_34243){
var state_val_34244 = (state_34243[(1)]);
if((state_val_34244 === (1))){
var state_34243__$1 = state_34243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34243__$1,(2),res,v);
} else {
if((state_val_34244 === (2))){
var inst_34240 = (state_34243[(2)]);
var inst_34241 = cljs.core.async.close_BANG_.call(null,res);
var state_34243__$1 = (function (){var statearr_34245 = state_34243;
(statearr_34245[(7)] = inst_34240);

return statearr_34245;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34243__$1,inst_34241);
} else {
return null;
}
}
});})(c__34071__auto___34407,res,vec__34236,v,p,job,jobs,results))
;
return ((function (switch__33981__auto__,c__34071__auto___34407,res,vec__34236,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33982__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33982__auto____0 = (function (){
var statearr_34246 = [null,null,null,null,null,null,null,null];
(statearr_34246[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33982__auto__);

(statearr_34246[(1)] = (1));

return statearr_34246;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33982__auto____1 = (function (state_34243){
while(true){
var ret_value__33983__auto__ = (function (){try{while(true){
var result__33984__auto__ = switch__33981__auto__.call(null,state_34243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33984__auto__;
}
break;
}
}catch (e34247){if((e34247 instanceof Object)){
var ex__33985__auto__ = e34247;
var statearr_34248_34408 = state_34243;
(statearr_34248_34408[(5)] = ex__33985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34409 = state_34243;
state_34243 = G__34409;
continue;
} else {
return ret_value__33983__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33982__auto__ = function(state_34243){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33982__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33982__auto____1.call(this,state_34243);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33982__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33982__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33982__auto__;
})()
;})(switch__33981__auto__,c__34071__auto___34407,res,vec__34236,v,p,job,jobs,results))
})();
var state__34073__auto__ = (function (){var statearr_34249 = f__34072__auto__.call(null);
(statearr_34249[(6)] = c__34071__auto___34407);

return statearr_34249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___34407,res,vec__34236,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34250){
var vec__34251 = p__34250;
var v = cljs.core.nth.call(null,vec__34251,(0),null);
var p = cljs.core.nth.call(null,vec__34251,(1),null);
var job = vec__34251;
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
var n__31141__auto___34410 = n;
var __34411 = (0);
while(true){
if((__34411 < n__31141__auto___34410)){
var G__34254_34412 = type;
var G__34254_34413__$1 = (((G__34254_34412 instanceof cljs.core.Keyword))?G__34254_34412.fqn:null);
switch (G__34254_34413__$1) {
case "compute":
var c__34071__auto___34415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34411,c__34071__auto___34415,G__34254_34412,G__34254_34413__$1,n__31141__auto___34410,jobs,results,process,async){
return (function (){
var f__34072__auto__ = (function (){var switch__33981__auto__ = ((function (__34411,c__34071__auto___34415,G__34254_34412,G__34254_34413__$1,n__31141__auto___34410,jobs,results,process,async){
return (function (state_34267){
var state_val_34268 = (state_34267[(1)]);
if((state_val_34268 === (1))){
var state_34267__$1 = state_34267;
var statearr_34269_34416 = state_34267__$1;
(statearr_34269_34416[(2)] = null);

(statearr_34269_34416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (2))){
var state_34267__$1 = state_34267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34267__$1,(4),jobs);
} else {
if((state_val_34268 === (3))){
var inst_34265 = (state_34267[(2)]);
var state_34267__$1 = state_34267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34267__$1,inst_34265);
} else {
if((state_val_34268 === (4))){
var inst_34257 = (state_34267[(2)]);
var inst_34258 = process.call(null,inst_34257);
var state_34267__$1 = state_34267;
if(cljs.core.truth_(inst_34258)){
var statearr_34270_34417 = state_34267__$1;
(statearr_34270_34417[(1)] = (5));

} else {
var statearr_34271_34418 = state_34267__$1;
(statearr_34271_34418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (5))){
var state_34267__$1 = state_34267;
var statearr_34272_34419 = state_34267__$1;
(statearr_34272_34419[(2)] = null);

(statearr_34272_34419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (6))){
var state_34267__$1 = state_34267;
var statearr_34273_34420 = state_34267__$1;
(statearr_34273_34420[(2)] = null);

(statearr_34273_34420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (7))){
var inst_34263 = (state_34267[(2)]);
var state_34267__$1 = state_34267;
var statearr_34274_34421 = state_34267__$1;
(statearr_34274_34421[(2)] = inst_34263);

(statearr_34274_34421[(1)] = (3));


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
});})(__34411,c__34071__auto___34415,G__34254_34412,G__34254_34413__$1,n__31141__auto___34410,jobs,results,process,async))
;
return ((function (__34411,switch__33981__auto__,c__34071__auto___34415,G__34254_34412,G__34254_34413__$1,n__31141__auto___34410,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33982__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33982__auto____0 = (function (){
var statearr_34275 = [null,null,null,null,null,null,null];
(statearr_34275[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33982__auto__);

(statearr_34275[(1)] = (1));

return statearr_34275;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33982__auto____1 = (function (state_34267){
while(true){
var ret_value__33983__auto__ = (function (){try{while(true){
var result__33984__auto__ = switch__33981__auto__.call(null,state_34267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33984__auto__;
}
break;
}
}catch (e34276){if((e34276 instanceof Object)){
var ex__33985__auto__ = e34276;
var statearr_34277_34422 = state_34267;
(statearr_34277_34422[(5)] = ex__33985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34423 = state_34267;
state_34267 = G__34423;
continue;
} else {
return ret_value__33983__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33982__auto__ = function(state_34267){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33982__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33982__auto____1.call(this,state_34267);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33982__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33982__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33982__auto__;
})()
;})(__34411,switch__33981__auto__,c__34071__auto___34415,G__34254_34412,G__34254_34413__$1,n__31141__auto___34410,jobs,results,process,async))
})();
var state__34073__auto__ = (function (){var statearr_34278 = f__34072__auto__.call(null);
(statearr_34278[(6)] = c__34071__auto___34415);

return statearr_34278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(__34411,c__34071__auto___34415,G__34254_34412,G__34254_34413__$1,n__31141__auto___34410,jobs,results,process,async))
);


break;
case "async":
var c__34071__auto___34424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34411,c__34071__auto___34424,G__34254_34412,G__34254_34413__$1,n__31141__auto___34410,jobs,results,process,async){
return (function (){
var f__34072__auto__ = (function (){var switch__33981__auto__ = ((function (__34411,c__34071__auto___34424,G__34254_34412,G__34254_34413__$1,n__31141__auto___34410,jobs,results,process,async){
return (function (state_34291){
var state_val_34292 = (state_34291[(1)]);
if((state_val_34292 === (1))){
var state_34291__$1 = state_34291;
var statearr_34293_34425 = state_34291__$1;
(statearr_34293_34425[(2)] = null);

(statearr_34293_34425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (2))){
var state_34291__$1 = state_34291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34291__$1,(4),jobs);
} else {
if((state_val_34292 === (3))){
var inst_34289 = (state_34291[(2)]);
var state_34291__$1 = state_34291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34291__$1,inst_34289);
} else {
if((state_val_34292 === (4))){
var inst_34281 = (state_34291[(2)]);
var inst_34282 = async.call(null,inst_34281);
var state_34291__$1 = state_34291;
if(cljs.core.truth_(inst_34282)){
var statearr_34294_34426 = state_34291__$1;
(statearr_34294_34426[(1)] = (5));

} else {
var statearr_34295_34427 = state_34291__$1;
(statearr_34295_34427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (5))){
var state_34291__$1 = state_34291;
var statearr_34296_34428 = state_34291__$1;
(statearr_34296_34428[(2)] = null);

(statearr_34296_34428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (6))){
var state_34291__$1 = state_34291;
var statearr_34297_34429 = state_34291__$1;
(statearr_34297_34429[(2)] = null);

(statearr_34297_34429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (7))){
var inst_34287 = (state_34291[(2)]);
var state_34291__$1 = state_34291;
var statearr_34298_34430 = state_34291__$1;
(statearr_34298_34430[(2)] = inst_34287);

(statearr_34298_34430[(1)] = (3));


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
});})(__34411,c__34071__auto___34424,G__34254_34412,G__34254_34413__$1,n__31141__auto___34410,jobs,results,process,async))
;
return ((function (__34411,switch__33981__auto__,c__34071__auto___34424,G__34254_34412,G__34254_34413__$1,n__31141__auto___34410,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33982__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33982__auto____0 = (function (){
var statearr_34299 = [null,null,null,null,null,null,null];
(statearr_34299[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33982__auto__);

(statearr_34299[(1)] = (1));

return statearr_34299;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33982__auto____1 = (function (state_34291){
while(true){
var ret_value__33983__auto__ = (function (){try{while(true){
var result__33984__auto__ = switch__33981__auto__.call(null,state_34291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33984__auto__;
}
break;
}
}catch (e34300){if((e34300 instanceof Object)){
var ex__33985__auto__ = e34300;
var statearr_34301_34431 = state_34291;
(statearr_34301_34431[(5)] = ex__33985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34432 = state_34291;
state_34291 = G__34432;
continue;
} else {
return ret_value__33983__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33982__auto__ = function(state_34291){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33982__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33982__auto____1.call(this,state_34291);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33982__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33982__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33982__auto__;
})()
;})(__34411,switch__33981__auto__,c__34071__auto___34424,G__34254_34412,G__34254_34413__$1,n__31141__auto___34410,jobs,results,process,async))
})();
var state__34073__auto__ = (function (){var statearr_34302 = f__34072__auto__.call(null);
(statearr_34302[(6)] = c__34071__auto___34424);

return statearr_34302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(__34411,c__34071__auto___34424,G__34254_34412,G__34254_34413__$1,n__31141__auto___34410,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34254_34413__$1)].join('')));

}

var G__34433 = (__34411 + (1));
__34411 = G__34433;
continue;
} else {
}
break;
}

var c__34071__auto___34434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___34434,jobs,results,process,async){
return (function (){
var f__34072__auto__ = (function (){var switch__33981__auto__ = ((function (c__34071__auto___34434,jobs,results,process,async){
return (function (state_34324){
var state_val_34325 = (state_34324[(1)]);
if((state_val_34325 === (1))){
var state_34324__$1 = state_34324;
var statearr_34326_34435 = state_34324__$1;
(statearr_34326_34435[(2)] = null);

(statearr_34326_34435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (2))){
var state_34324__$1 = state_34324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34324__$1,(4),from);
} else {
if((state_val_34325 === (3))){
var inst_34322 = (state_34324[(2)]);
var state_34324__$1 = state_34324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34324__$1,inst_34322);
} else {
if((state_val_34325 === (4))){
var inst_34305 = (state_34324[(7)]);
var inst_34305__$1 = (state_34324[(2)]);
var inst_34306 = (inst_34305__$1 == null);
var state_34324__$1 = (function (){var statearr_34327 = state_34324;
(statearr_34327[(7)] = inst_34305__$1);

return statearr_34327;
})();
if(cljs.core.truth_(inst_34306)){
var statearr_34328_34436 = state_34324__$1;
(statearr_34328_34436[(1)] = (5));

} else {
var statearr_34329_34437 = state_34324__$1;
(statearr_34329_34437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (5))){
var inst_34308 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34324__$1 = state_34324;
var statearr_34330_34438 = state_34324__$1;
(statearr_34330_34438[(2)] = inst_34308);

(statearr_34330_34438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (6))){
var inst_34305 = (state_34324[(7)]);
var inst_34310 = (state_34324[(8)]);
var inst_34310__$1 = cljs.core.async.chan.call(null,(1));
var inst_34311 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34312 = [inst_34305,inst_34310__$1];
var inst_34313 = (new cljs.core.PersistentVector(null,2,(5),inst_34311,inst_34312,null));
var state_34324__$1 = (function (){var statearr_34331 = state_34324;
(statearr_34331[(8)] = inst_34310__$1);

return statearr_34331;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34324__$1,(8),jobs,inst_34313);
} else {
if((state_val_34325 === (7))){
var inst_34320 = (state_34324[(2)]);
var state_34324__$1 = state_34324;
var statearr_34332_34439 = state_34324__$1;
(statearr_34332_34439[(2)] = inst_34320);

(statearr_34332_34439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (8))){
var inst_34310 = (state_34324[(8)]);
var inst_34315 = (state_34324[(2)]);
var state_34324__$1 = (function (){var statearr_34333 = state_34324;
(statearr_34333[(9)] = inst_34315);

return statearr_34333;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34324__$1,(9),results,inst_34310);
} else {
if((state_val_34325 === (9))){
var inst_34317 = (state_34324[(2)]);
var state_34324__$1 = (function (){var statearr_34334 = state_34324;
(statearr_34334[(10)] = inst_34317);

return statearr_34334;
})();
var statearr_34335_34440 = state_34324__$1;
(statearr_34335_34440[(2)] = null);

(statearr_34335_34440[(1)] = (2));


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
});})(c__34071__auto___34434,jobs,results,process,async))
;
return ((function (switch__33981__auto__,c__34071__auto___34434,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33982__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33982__auto____0 = (function (){
var statearr_34336 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34336[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33982__auto__);

(statearr_34336[(1)] = (1));

return statearr_34336;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33982__auto____1 = (function (state_34324){
while(true){
var ret_value__33983__auto__ = (function (){try{while(true){
var result__33984__auto__ = switch__33981__auto__.call(null,state_34324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33984__auto__;
}
break;
}
}catch (e34337){if((e34337 instanceof Object)){
var ex__33985__auto__ = e34337;
var statearr_34338_34441 = state_34324;
(statearr_34338_34441[(5)] = ex__33985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34442 = state_34324;
state_34324 = G__34442;
continue;
} else {
return ret_value__33983__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33982__auto__ = function(state_34324){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33982__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33982__auto____1.call(this,state_34324);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33982__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33982__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33982__auto__;
})()
;})(switch__33981__auto__,c__34071__auto___34434,jobs,results,process,async))
})();
var state__34073__auto__ = (function (){var statearr_34339 = f__34072__auto__.call(null);
(statearr_34339[(6)] = c__34071__auto___34434);

return statearr_34339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___34434,jobs,results,process,async))
);


var c__34071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto__,jobs,results,process,async){
return (function (){
var f__34072__auto__ = (function (){var switch__33981__auto__ = ((function (c__34071__auto__,jobs,results,process,async){
return (function (state_34377){
var state_val_34378 = (state_34377[(1)]);
if((state_val_34378 === (7))){
var inst_34373 = (state_34377[(2)]);
var state_34377__$1 = state_34377;
var statearr_34379_34443 = state_34377__$1;
(statearr_34379_34443[(2)] = inst_34373);

(statearr_34379_34443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (20))){
var state_34377__$1 = state_34377;
var statearr_34380_34444 = state_34377__$1;
(statearr_34380_34444[(2)] = null);

(statearr_34380_34444[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (1))){
var state_34377__$1 = state_34377;
var statearr_34381_34445 = state_34377__$1;
(statearr_34381_34445[(2)] = null);

(statearr_34381_34445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (4))){
var inst_34342 = (state_34377[(7)]);
var inst_34342__$1 = (state_34377[(2)]);
var inst_34343 = (inst_34342__$1 == null);
var state_34377__$1 = (function (){var statearr_34382 = state_34377;
(statearr_34382[(7)] = inst_34342__$1);

return statearr_34382;
})();
if(cljs.core.truth_(inst_34343)){
var statearr_34383_34446 = state_34377__$1;
(statearr_34383_34446[(1)] = (5));

} else {
var statearr_34384_34447 = state_34377__$1;
(statearr_34384_34447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (15))){
var inst_34355 = (state_34377[(8)]);
var state_34377__$1 = state_34377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34377__$1,(18),to,inst_34355);
} else {
if((state_val_34378 === (21))){
var inst_34368 = (state_34377[(2)]);
var state_34377__$1 = state_34377;
var statearr_34385_34448 = state_34377__$1;
(statearr_34385_34448[(2)] = inst_34368);

(statearr_34385_34448[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (13))){
var inst_34370 = (state_34377[(2)]);
var state_34377__$1 = (function (){var statearr_34386 = state_34377;
(statearr_34386[(9)] = inst_34370);

return statearr_34386;
})();
var statearr_34387_34449 = state_34377__$1;
(statearr_34387_34449[(2)] = null);

(statearr_34387_34449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (6))){
var inst_34342 = (state_34377[(7)]);
var state_34377__$1 = state_34377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34377__$1,(11),inst_34342);
} else {
if((state_val_34378 === (17))){
var inst_34363 = (state_34377[(2)]);
var state_34377__$1 = state_34377;
if(cljs.core.truth_(inst_34363)){
var statearr_34388_34450 = state_34377__$1;
(statearr_34388_34450[(1)] = (19));

} else {
var statearr_34389_34451 = state_34377__$1;
(statearr_34389_34451[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (3))){
var inst_34375 = (state_34377[(2)]);
var state_34377__$1 = state_34377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34377__$1,inst_34375);
} else {
if((state_val_34378 === (12))){
var inst_34352 = (state_34377[(10)]);
var state_34377__$1 = state_34377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34377__$1,(14),inst_34352);
} else {
if((state_val_34378 === (2))){
var state_34377__$1 = state_34377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34377__$1,(4),results);
} else {
if((state_val_34378 === (19))){
var state_34377__$1 = state_34377;
var statearr_34390_34452 = state_34377__$1;
(statearr_34390_34452[(2)] = null);

(statearr_34390_34452[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (11))){
var inst_34352 = (state_34377[(2)]);
var state_34377__$1 = (function (){var statearr_34391 = state_34377;
(statearr_34391[(10)] = inst_34352);

return statearr_34391;
})();
var statearr_34392_34453 = state_34377__$1;
(statearr_34392_34453[(2)] = null);

(statearr_34392_34453[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (9))){
var state_34377__$1 = state_34377;
var statearr_34393_34454 = state_34377__$1;
(statearr_34393_34454[(2)] = null);

(statearr_34393_34454[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (5))){
var state_34377__$1 = state_34377;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34394_34455 = state_34377__$1;
(statearr_34394_34455[(1)] = (8));

} else {
var statearr_34395_34456 = state_34377__$1;
(statearr_34395_34456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (14))){
var inst_34357 = (state_34377[(11)]);
var inst_34355 = (state_34377[(8)]);
var inst_34355__$1 = (state_34377[(2)]);
var inst_34356 = (inst_34355__$1 == null);
var inst_34357__$1 = cljs.core.not.call(null,inst_34356);
var state_34377__$1 = (function (){var statearr_34396 = state_34377;
(statearr_34396[(11)] = inst_34357__$1);

(statearr_34396[(8)] = inst_34355__$1);

return statearr_34396;
})();
if(inst_34357__$1){
var statearr_34397_34457 = state_34377__$1;
(statearr_34397_34457[(1)] = (15));

} else {
var statearr_34398_34458 = state_34377__$1;
(statearr_34398_34458[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (16))){
var inst_34357 = (state_34377[(11)]);
var state_34377__$1 = state_34377;
var statearr_34399_34459 = state_34377__$1;
(statearr_34399_34459[(2)] = inst_34357);

(statearr_34399_34459[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (10))){
var inst_34349 = (state_34377[(2)]);
var state_34377__$1 = state_34377;
var statearr_34400_34460 = state_34377__$1;
(statearr_34400_34460[(2)] = inst_34349);

(statearr_34400_34460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (18))){
var inst_34360 = (state_34377[(2)]);
var state_34377__$1 = state_34377;
var statearr_34401_34461 = state_34377__$1;
(statearr_34401_34461[(2)] = inst_34360);

(statearr_34401_34461[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (8))){
var inst_34346 = cljs.core.async.close_BANG_.call(null,to);
var state_34377__$1 = state_34377;
var statearr_34402_34462 = state_34377__$1;
(statearr_34402_34462[(2)] = inst_34346);

(statearr_34402_34462[(1)] = (10));


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
});})(c__34071__auto__,jobs,results,process,async))
;
return ((function (switch__33981__auto__,c__34071__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33982__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33982__auto____0 = (function (){
var statearr_34403 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34403[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33982__auto__);

(statearr_34403[(1)] = (1));

return statearr_34403;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33982__auto____1 = (function (state_34377){
while(true){
var ret_value__33983__auto__ = (function (){try{while(true){
var result__33984__auto__ = switch__33981__auto__.call(null,state_34377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33984__auto__;
}
break;
}
}catch (e34404){if((e34404 instanceof Object)){
var ex__33985__auto__ = e34404;
var statearr_34405_34463 = state_34377;
(statearr_34405_34463[(5)] = ex__33985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34464 = state_34377;
state_34377 = G__34464;
continue;
} else {
return ret_value__33983__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33982__auto__ = function(state_34377){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33982__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33982__auto____1.call(this,state_34377);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33982__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33982__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33982__auto__;
})()
;})(switch__33981__auto__,c__34071__auto__,jobs,results,process,async))
})();
var state__34073__auto__ = (function (){var statearr_34406 = f__34072__auto__.call(null);
(statearr_34406[(6)] = c__34071__auto__);

return statearr_34406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto__,jobs,results,process,async))
);

return c__34071__auto__;
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
var G__34466 = arguments.length;
switch (G__34466) {
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
var G__34469 = arguments.length;
switch (G__34469) {
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
var G__34472 = arguments.length;
switch (G__34472) {
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
var c__34071__auto___34521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___34521,tc,fc){
return (function (){
var f__34072__auto__ = (function (){var switch__33981__auto__ = ((function (c__34071__auto___34521,tc,fc){
return (function (state_34498){
var state_val_34499 = (state_34498[(1)]);
if((state_val_34499 === (7))){
var inst_34494 = (state_34498[(2)]);
var state_34498__$1 = state_34498;
var statearr_34500_34522 = state_34498__$1;
(statearr_34500_34522[(2)] = inst_34494);

(statearr_34500_34522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (1))){
var state_34498__$1 = state_34498;
var statearr_34501_34523 = state_34498__$1;
(statearr_34501_34523[(2)] = null);

(statearr_34501_34523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (4))){
var inst_34475 = (state_34498[(7)]);
var inst_34475__$1 = (state_34498[(2)]);
var inst_34476 = (inst_34475__$1 == null);
var state_34498__$1 = (function (){var statearr_34502 = state_34498;
(statearr_34502[(7)] = inst_34475__$1);

return statearr_34502;
})();
if(cljs.core.truth_(inst_34476)){
var statearr_34503_34524 = state_34498__$1;
(statearr_34503_34524[(1)] = (5));

} else {
var statearr_34504_34525 = state_34498__$1;
(statearr_34504_34525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (13))){
var state_34498__$1 = state_34498;
var statearr_34505_34526 = state_34498__$1;
(statearr_34505_34526[(2)] = null);

(statearr_34505_34526[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (6))){
var inst_34475 = (state_34498[(7)]);
var inst_34481 = p.call(null,inst_34475);
var state_34498__$1 = state_34498;
if(cljs.core.truth_(inst_34481)){
var statearr_34506_34527 = state_34498__$1;
(statearr_34506_34527[(1)] = (9));

} else {
var statearr_34507_34528 = state_34498__$1;
(statearr_34507_34528[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (3))){
var inst_34496 = (state_34498[(2)]);
var state_34498__$1 = state_34498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34498__$1,inst_34496);
} else {
if((state_val_34499 === (12))){
var state_34498__$1 = state_34498;
var statearr_34508_34529 = state_34498__$1;
(statearr_34508_34529[(2)] = null);

(statearr_34508_34529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (2))){
var state_34498__$1 = state_34498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34498__$1,(4),ch);
} else {
if((state_val_34499 === (11))){
var inst_34475 = (state_34498[(7)]);
var inst_34485 = (state_34498[(2)]);
var state_34498__$1 = state_34498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34498__$1,(8),inst_34485,inst_34475);
} else {
if((state_val_34499 === (9))){
var state_34498__$1 = state_34498;
var statearr_34509_34530 = state_34498__$1;
(statearr_34509_34530[(2)] = tc);

(statearr_34509_34530[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (5))){
var inst_34478 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34479 = cljs.core.async.close_BANG_.call(null,fc);
var state_34498__$1 = (function (){var statearr_34510 = state_34498;
(statearr_34510[(8)] = inst_34478);

return statearr_34510;
})();
var statearr_34511_34531 = state_34498__$1;
(statearr_34511_34531[(2)] = inst_34479);

(statearr_34511_34531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (14))){
var inst_34492 = (state_34498[(2)]);
var state_34498__$1 = state_34498;
var statearr_34512_34532 = state_34498__$1;
(statearr_34512_34532[(2)] = inst_34492);

(statearr_34512_34532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (10))){
var state_34498__$1 = state_34498;
var statearr_34513_34533 = state_34498__$1;
(statearr_34513_34533[(2)] = fc);

(statearr_34513_34533[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (8))){
var inst_34487 = (state_34498[(2)]);
var state_34498__$1 = state_34498;
if(cljs.core.truth_(inst_34487)){
var statearr_34514_34534 = state_34498__$1;
(statearr_34514_34534[(1)] = (12));

} else {
var statearr_34515_34535 = state_34498__$1;
(statearr_34515_34535[(1)] = (13));

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
});})(c__34071__auto___34521,tc,fc))
;
return ((function (switch__33981__auto__,c__34071__auto___34521,tc,fc){
return (function() {
var cljs$core$async$state_machine__33982__auto__ = null;
var cljs$core$async$state_machine__33982__auto____0 = (function (){
var statearr_34516 = [null,null,null,null,null,null,null,null,null];
(statearr_34516[(0)] = cljs$core$async$state_machine__33982__auto__);

(statearr_34516[(1)] = (1));

return statearr_34516;
});
var cljs$core$async$state_machine__33982__auto____1 = (function (state_34498){
while(true){
var ret_value__33983__auto__ = (function (){try{while(true){
var result__33984__auto__ = switch__33981__auto__.call(null,state_34498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33984__auto__;
}
break;
}
}catch (e34517){if((e34517 instanceof Object)){
var ex__33985__auto__ = e34517;
var statearr_34518_34536 = state_34498;
(statearr_34518_34536[(5)] = ex__33985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34537 = state_34498;
state_34498 = G__34537;
continue;
} else {
return ret_value__33983__auto__;
}
break;
}
});
cljs$core$async$state_machine__33982__auto__ = function(state_34498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33982__auto____1.call(this,state_34498);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33982__auto____0;
cljs$core$async$state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33982__auto____1;
return cljs$core$async$state_machine__33982__auto__;
})()
;})(switch__33981__auto__,c__34071__auto___34521,tc,fc))
})();
var state__34073__auto__ = (function (){var statearr_34519 = f__34072__auto__.call(null);
(statearr_34519[(6)] = c__34071__auto___34521);

return statearr_34519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___34521,tc,fc))
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
var c__34071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto__){
return (function (){
var f__34072__auto__ = (function (){var switch__33981__auto__ = ((function (c__34071__auto__){
return (function (state_34558){
var state_val_34559 = (state_34558[(1)]);
if((state_val_34559 === (7))){
var inst_34554 = (state_34558[(2)]);
var state_34558__$1 = state_34558;
var statearr_34560_34578 = state_34558__$1;
(statearr_34560_34578[(2)] = inst_34554);

(statearr_34560_34578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (1))){
var inst_34538 = init;
var state_34558__$1 = (function (){var statearr_34561 = state_34558;
(statearr_34561[(7)] = inst_34538);

return statearr_34561;
})();
var statearr_34562_34579 = state_34558__$1;
(statearr_34562_34579[(2)] = null);

(statearr_34562_34579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (4))){
var inst_34541 = (state_34558[(8)]);
var inst_34541__$1 = (state_34558[(2)]);
var inst_34542 = (inst_34541__$1 == null);
var state_34558__$1 = (function (){var statearr_34563 = state_34558;
(statearr_34563[(8)] = inst_34541__$1);

return statearr_34563;
})();
if(cljs.core.truth_(inst_34542)){
var statearr_34564_34580 = state_34558__$1;
(statearr_34564_34580[(1)] = (5));

} else {
var statearr_34565_34581 = state_34558__$1;
(statearr_34565_34581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (6))){
var inst_34538 = (state_34558[(7)]);
var inst_34545 = (state_34558[(9)]);
var inst_34541 = (state_34558[(8)]);
var inst_34545__$1 = f.call(null,inst_34538,inst_34541);
var inst_34546 = cljs.core.reduced_QMARK_.call(null,inst_34545__$1);
var state_34558__$1 = (function (){var statearr_34566 = state_34558;
(statearr_34566[(9)] = inst_34545__$1);

return statearr_34566;
})();
if(inst_34546){
var statearr_34567_34582 = state_34558__$1;
(statearr_34567_34582[(1)] = (8));

} else {
var statearr_34568_34583 = state_34558__$1;
(statearr_34568_34583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (3))){
var inst_34556 = (state_34558[(2)]);
var state_34558__$1 = state_34558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34558__$1,inst_34556);
} else {
if((state_val_34559 === (2))){
var state_34558__$1 = state_34558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34558__$1,(4),ch);
} else {
if((state_val_34559 === (9))){
var inst_34545 = (state_34558[(9)]);
var inst_34538 = inst_34545;
var state_34558__$1 = (function (){var statearr_34569 = state_34558;
(statearr_34569[(7)] = inst_34538);

return statearr_34569;
})();
var statearr_34570_34584 = state_34558__$1;
(statearr_34570_34584[(2)] = null);

(statearr_34570_34584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (5))){
var inst_34538 = (state_34558[(7)]);
var state_34558__$1 = state_34558;
var statearr_34571_34585 = state_34558__$1;
(statearr_34571_34585[(2)] = inst_34538);

(statearr_34571_34585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (10))){
var inst_34552 = (state_34558[(2)]);
var state_34558__$1 = state_34558;
var statearr_34572_34586 = state_34558__$1;
(statearr_34572_34586[(2)] = inst_34552);

(statearr_34572_34586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (8))){
var inst_34545 = (state_34558[(9)]);
var inst_34548 = cljs.core.deref.call(null,inst_34545);
var state_34558__$1 = state_34558;
var statearr_34573_34587 = state_34558__$1;
(statearr_34573_34587[(2)] = inst_34548);

(statearr_34573_34587[(1)] = (10));


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
});})(c__34071__auto__))
;
return ((function (switch__33981__auto__,c__34071__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33982__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33982__auto____0 = (function (){
var statearr_34574 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34574[(0)] = cljs$core$async$reduce_$_state_machine__33982__auto__);

(statearr_34574[(1)] = (1));

return statearr_34574;
});
var cljs$core$async$reduce_$_state_machine__33982__auto____1 = (function (state_34558){
while(true){
var ret_value__33983__auto__ = (function (){try{while(true){
var result__33984__auto__ = switch__33981__auto__.call(null,state_34558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33984__auto__;
}
break;
}
}catch (e34575){if((e34575 instanceof Object)){
var ex__33985__auto__ = e34575;
var statearr_34576_34588 = state_34558;
(statearr_34576_34588[(5)] = ex__33985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34589 = state_34558;
state_34558 = G__34589;
continue;
} else {
return ret_value__33983__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33982__auto__ = function(state_34558){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33982__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33982__auto____1.call(this,state_34558);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33982__auto____0;
cljs$core$async$reduce_$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33982__auto____1;
return cljs$core$async$reduce_$_state_machine__33982__auto__;
})()
;})(switch__33981__auto__,c__34071__auto__))
})();
var state__34073__auto__ = (function (){var statearr_34577 = f__34072__auto__.call(null);
(statearr_34577[(6)] = c__34071__auto__);

return statearr_34577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto__))
);

return c__34071__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__34071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto__,f__$1){
return (function (){
var f__34072__auto__ = (function (){var switch__33981__auto__ = ((function (c__34071__auto__,f__$1){
return (function (state_34595){
var state_val_34596 = (state_34595[(1)]);
if((state_val_34596 === (1))){
var inst_34590 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34595__$1 = state_34595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34595__$1,(2),inst_34590);
} else {
if((state_val_34596 === (2))){
var inst_34592 = (state_34595[(2)]);
var inst_34593 = f__$1.call(null,inst_34592);
var state_34595__$1 = state_34595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34595__$1,inst_34593);
} else {
return null;
}
}
});})(c__34071__auto__,f__$1))
;
return ((function (switch__33981__auto__,c__34071__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33982__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33982__auto____0 = (function (){
var statearr_34597 = [null,null,null,null,null,null,null];
(statearr_34597[(0)] = cljs$core$async$transduce_$_state_machine__33982__auto__);

(statearr_34597[(1)] = (1));

return statearr_34597;
});
var cljs$core$async$transduce_$_state_machine__33982__auto____1 = (function (state_34595){
while(true){
var ret_value__33983__auto__ = (function (){try{while(true){
var result__33984__auto__ = switch__33981__auto__.call(null,state_34595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33984__auto__;
}
break;
}
}catch (e34598){if((e34598 instanceof Object)){
var ex__33985__auto__ = e34598;
var statearr_34599_34601 = state_34595;
(statearr_34599_34601[(5)] = ex__33985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34602 = state_34595;
state_34595 = G__34602;
continue;
} else {
return ret_value__33983__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33982__auto__ = function(state_34595){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33982__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33982__auto____1.call(this,state_34595);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33982__auto____0;
cljs$core$async$transduce_$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33982__auto____1;
return cljs$core$async$transduce_$_state_machine__33982__auto__;
})()
;})(switch__33981__auto__,c__34071__auto__,f__$1))
})();
var state__34073__auto__ = (function (){var statearr_34600 = f__34072__auto__.call(null);
(statearr_34600[(6)] = c__34071__auto__);

return statearr_34600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto__,f__$1))
);

return c__34071__auto__;
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
var G__34604 = arguments.length;
switch (G__34604) {
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
var c__34071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto__){
return (function (){
var f__34072__auto__ = (function (){var switch__33981__auto__ = ((function (c__34071__auto__){
return (function (state_34629){
var state_val_34630 = (state_34629[(1)]);
if((state_val_34630 === (7))){
var inst_34611 = (state_34629[(2)]);
var state_34629__$1 = state_34629;
var statearr_34631_34652 = state_34629__$1;
(statearr_34631_34652[(2)] = inst_34611);

(statearr_34631_34652[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (1))){
var inst_34605 = cljs.core.seq.call(null,coll);
var inst_34606 = inst_34605;
var state_34629__$1 = (function (){var statearr_34632 = state_34629;
(statearr_34632[(7)] = inst_34606);

return statearr_34632;
})();
var statearr_34633_34653 = state_34629__$1;
(statearr_34633_34653[(2)] = null);

(statearr_34633_34653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (4))){
var inst_34606 = (state_34629[(7)]);
var inst_34609 = cljs.core.first.call(null,inst_34606);
var state_34629__$1 = state_34629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34629__$1,(7),ch,inst_34609);
} else {
if((state_val_34630 === (13))){
var inst_34623 = (state_34629[(2)]);
var state_34629__$1 = state_34629;
var statearr_34634_34654 = state_34629__$1;
(statearr_34634_34654[(2)] = inst_34623);

(statearr_34634_34654[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (6))){
var inst_34614 = (state_34629[(2)]);
var state_34629__$1 = state_34629;
if(cljs.core.truth_(inst_34614)){
var statearr_34635_34655 = state_34629__$1;
(statearr_34635_34655[(1)] = (8));

} else {
var statearr_34636_34656 = state_34629__$1;
(statearr_34636_34656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (3))){
var inst_34627 = (state_34629[(2)]);
var state_34629__$1 = state_34629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34629__$1,inst_34627);
} else {
if((state_val_34630 === (12))){
var state_34629__$1 = state_34629;
var statearr_34637_34657 = state_34629__$1;
(statearr_34637_34657[(2)] = null);

(statearr_34637_34657[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (2))){
var inst_34606 = (state_34629[(7)]);
var state_34629__$1 = state_34629;
if(cljs.core.truth_(inst_34606)){
var statearr_34638_34658 = state_34629__$1;
(statearr_34638_34658[(1)] = (4));

} else {
var statearr_34639_34659 = state_34629__$1;
(statearr_34639_34659[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (11))){
var inst_34620 = cljs.core.async.close_BANG_.call(null,ch);
var state_34629__$1 = state_34629;
var statearr_34640_34660 = state_34629__$1;
(statearr_34640_34660[(2)] = inst_34620);

(statearr_34640_34660[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (9))){
var state_34629__$1 = state_34629;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34641_34661 = state_34629__$1;
(statearr_34641_34661[(1)] = (11));

} else {
var statearr_34642_34662 = state_34629__$1;
(statearr_34642_34662[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (5))){
var inst_34606 = (state_34629[(7)]);
var state_34629__$1 = state_34629;
var statearr_34643_34663 = state_34629__$1;
(statearr_34643_34663[(2)] = inst_34606);

(statearr_34643_34663[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (10))){
var inst_34625 = (state_34629[(2)]);
var state_34629__$1 = state_34629;
var statearr_34644_34664 = state_34629__$1;
(statearr_34644_34664[(2)] = inst_34625);

(statearr_34644_34664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (8))){
var inst_34606 = (state_34629[(7)]);
var inst_34616 = cljs.core.next.call(null,inst_34606);
var inst_34606__$1 = inst_34616;
var state_34629__$1 = (function (){var statearr_34645 = state_34629;
(statearr_34645[(7)] = inst_34606__$1);

return statearr_34645;
})();
var statearr_34646_34665 = state_34629__$1;
(statearr_34646_34665[(2)] = null);

(statearr_34646_34665[(1)] = (2));


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
});})(c__34071__auto__))
;
return ((function (switch__33981__auto__,c__34071__auto__){
return (function() {
var cljs$core$async$state_machine__33982__auto__ = null;
var cljs$core$async$state_machine__33982__auto____0 = (function (){
var statearr_34647 = [null,null,null,null,null,null,null,null];
(statearr_34647[(0)] = cljs$core$async$state_machine__33982__auto__);

(statearr_34647[(1)] = (1));

return statearr_34647;
});
var cljs$core$async$state_machine__33982__auto____1 = (function (state_34629){
while(true){
var ret_value__33983__auto__ = (function (){try{while(true){
var result__33984__auto__ = switch__33981__auto__.call(null,state_34629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33984__auto__;
}
break;
}
}catch (e34648){if((e34648 instanceof Object)){
var ex__33985__auto__ = e34648;
var statearr_34649_34666 = state_34629;
(statearr_34649_34666[(5)] = ex__33985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34667 = state_34629;
state_34629 = G__34667;
continue;
} else {
return ret_value__33983__auto__;
}
break;
}
});
cljs$core$async$state_machine__33982__auto__ = function(state_34629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33982__auto____1.call(this,state_34629);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33982__auto____0;
cljs$core$async$state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33982__auto____1;
return cljs$core$async$state_machine__33982__auto__;
})()
;})(switch__33981__auto__,c__34071__auto__))
})();
var state__34073__auto__ = (function (){var statearr_34650 = f__34072__auto__.call(null);
(statearr_34650[(6)] = c__34071__auto__);

return statearr_34650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto__))
);

return c__34071__auto__;
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
var x__30829__auto__ = (((_ == null))?null:_);
var m__30830__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,_);
} else {
var m__30830__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,_);
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
var x__30829__auto__ = (((m == null))?null:m);
var m__30830__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30830__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__30829__auto__ = (((m == null))?null:m);
var m__30830__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,m,ch);
} else {
var m__30830__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,m,ch);
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
var x__30829__auto__ = (((m == null))?null:m);
var m__30830__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,m);
} else {
var m__30830__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async34668 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34668 = (function (ch,cs,meta34669){
this.ch = ch;
this.cs = cs;
this.meta34669 = meta34669;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34670,meta34669__$1){
var self__ = this;
var _34670__$1 = this;
return (new cljs.core.async.t_cljs$core$async34668(self__.ch,self__.cs,meta34669__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34668.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34670){
var self__ = this;
var _34670__$1 = this;
return self__.meta34669;
});})(cs))
;

cljs.core.async.t_cljs$core$async34668.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34668.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34668.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34668.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34668.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34668.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34668.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34669","meta34669",-233017615,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34668.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34668.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34668";

cljs.core.async.t_cljs$core$async34668.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30767__auto__,writer__30768__auto__,opt__30769__auto__){
return cljs.core._write.call(null,writer__30768__auto__,"cljs.core.async/t_cljs$core$async34668");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34668 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34668(ch__$1,cs__$1,meta34669){
return (new cljs.core.async.t_cljs$core$async34668(ch__$1,cs__$1,meta34669));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34668(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34071__auto___34890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___34890,cs,m,dchan,dctr,done){
return (function (){
var f__34072__auto__ = (function (){var switch__33981__auto__ = ((function (c__34071__auto___34890,cs,m,dchan,dctr,done){
return (function (state_34805){
var state_val_34806 = (state_34805[(1)]);
if((state_val_34806 === (7))){
var inst_34801 = (state_34805[(2)]);
var state_34805__$1 = state_34805;
var statearr_34807_34891 = state_34805__$1;
(statearr_34807_34891[(2)] = inst_34801);

(statearr_34807_34891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (20))){
var inst_34704 = (state_34805[(7)]);
var inst_34716 = cljs.core.first.call(null,inst_34704);
var inst_34717 = cljs.core.nth.call(null,inst_34716,(0),null);
var inst_34718 = cljs.core.nth.call(null,inst_34716,(1),null);
var state_34805__$1 = (function (){var statearr_34808 = state_34805;
(statearr_34808[(8)] = inst_34717);

return statearr_34808;
})();
if(cljs.core.truth_(inst_34718)){
var statearr_34809_34892 = state_34805__$1;
(statearr_34809_34892[(1)] = (22));

} else {
var statearr_34810_34893 = state_34805__$1;
(statearr_34810_34893[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (27))){
var inst_34748 = (state_34805[(9)]);
var inst_34753 = (state_34805[(10)]);
var inst_34746 = (state_34805[(11)]);
var inst_34673 = (state_34805[(12)]);
var inst_34753__$1 = cljs.core._nth.call(null,inst_34746,inst_34748);
var inst_34754 = cljs.core.async.put_BANG_.call(null,inst_34753__$1,inst_34673,done);
var state_34805__$1 = (function (){var statearr_34811 = state_34805;
(statearr_34811[(10)] = inst_34753__$1);

return statearr_34811;
})();
if(cljs.core.truth_(inst_34754)){
var statearr_34812_34894 = state_34805__$1;
(statearr_34812_34894[(1)] = (30));

} else {
var statearr_34813_34895 = state_34805__$1;
(statearr_34813_34895[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (1))){
var state_34805__$1 = state_34805;
var statearr_34814_34896 = state_34805__$1;
(statearr_34814_34896[(2)] = null);

(statearr_34814_34896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (24))){
var inst_34704 = (state_34805[(7)]);
var inst_34723 = (state_34805[(2)]);
var inst_34724 = cljs.core.next.call(null,inst_34704);
var inst_34682 = inst_34724;
var inst_34683 = null;
var inst_34684 = (0);
var inst_34685 = (0);
var state_34805__$1 = (function (){var statearr_34815 = state_34805;
(statearr_34815[(13)] = inst_34684);

(statearr_34815[(14)] = inst_34683);

(statearr_34815[(15)] = inst_34685);

(statearr_34815[(16)] = inst_34682);

(statearr_34815[(17)] = inst_34723);

return statearr_34815;
})();
var statearr_34816_34897 = state_34805__$1;
(statearr_34816_34897[(2)] = null);

(statearr_34816_34897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (39))){
var state_34805__$1 = state_34805;
var statearr_34820_34898 = state_34805__$1;
(statearr_34820_34898[(2)] = null);

(statearr_34820_34898[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (4))){
var inst_34673 = (state_34805[(12)]);
var inst_34673__$1 = (state_34805[(2)]);
var inst_34674 = (inst_34673__$1 == null);
var state_34805__$1 = (function (){var statearr_34821 = state_34805;
(statearr_34821[(12)] = inst_34673__$1);

return statearr_34821;
})();
if(cljs.core.truth_(inst_34674)){
var statearr_34822_34899 = state_34805__$1;
(statearr_34822_34899[(1)] = (5));

} else {
var statearr_34823_34900 = state_34805__$1;
(statearr_34823_34900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (15))){
var inst_34684 = (state_34805[(13)]);
var inst_34683 = (state_34805[(14)]);
var inst_34685 = (state_34805[(15)]);
var inst_34682 = (state_34805[(16)]);
var inst_34700 = (state_34805[(2)]);
var inst_34701 = (inst_34685 + (1));
var tmp34817 = inst_34684;
var tmp34818 = inst_34683;
var tmp34819 = inst_34682;
var inst_34682__$1 = tmp34819;
var inst_34683__$1 = tmp34818;
var inst_34684__$1 = tmp34817;
var inst_34685__$1 = inst_34701;
var state_34805__$1 = (function (){var statearr_34824 = state_34805;
(statearr_34824[(13)] = inst_34684__$1);

(statearr_34824[(14)] = inst_34683__$1);

(statearr_34824[(18)] = inst_34700);

(statearr_34824[(15)] = inst_34685__$1);

(statearr_34824[(16)] = inst_34682__$1);

return statearr_34824;
})();
var statearr_34825_34901 = state_34805__$1;
(statearr_34825_34901[(2)] = null);

(statearr_34825_34901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (21))){
var inst_34727 = (state_34805[(2)]);
var state_34805__$1 = state_34805;
var statearr_34829_34902 = state_34805__$1;
(statearr_34829_34902[(2)] = inst_34727);

(statearr_34829_34902[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (31))){
var inst_34753 = (state_34805[(10)]);
var inst_34757 = done.call(null,null);
var inst_34758 = cljs.core.async.untap_STAR_.call(null,m,inst_34753);
var state_34805__$1 = (function (){var statearr_34830 = state_34805;
(statearr_34830[(19)] = inst_34757);

return statearr_34830;
})();
var statearr_34831_34903 = state_34805__$1;
(statearr_34831_34903[(2)] = inst_34758);

(statearr_34831_34903[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (32))){
var inst_34748 = (state_34805[(9)]);
var inst_34746 = (state_34805[(11)]);
var inst_34745 = (state_34805[(20)]);
var inst_34747 = (state_34805[(21)]);
var inst_34760 = (state_34805[(2)]);
var inst_34761 = (inst_34748 + (1));
var tmp34826 = inst_34746;
var tmp34827 = inst_34745;
var tmp34828 = inst_34747;
var inst_34745__$1 = tmp34827;
var inst_34746__$1 = tmp34826;
var inst_34747__$1 = tmp34828;
var inst_34748__$1 = inst_34761;
var state_34805__$1 = (function (){var statearr_34832 = state_34805;
(statearr_34832[(22)] = inst_34760);

(statearr_34832[(9)] = inst_34748__$1);

(statearr_34832[(11)] = inst_34746__$1);

(statearr_34832[(20)] = inst_34745__$1);

(statearr_34832[(21)] = inst_34747__$1);

return statearr_34832;
})();
var statearr_34833_34904 = state_34805__$1;
(statearr_34833_34904[(2)] = null);

(statearr_34833_34904[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (40))){
var inst_34773 = (state_34805[(23)]);
var inst_34777 = done.call(null,null);
var inst_34778 = cljs.core.async.untap_STAR_.call(null,m,inst_34773);
var state_34805__$1 = (function (){var statearr_34834 = state_34805;
(statearr_34834[(24)] = inst_34777);

return statearr_34834;
})();
var statearr_34835_34905 = state_34805__$1;
(statearr_34835_34905[(2)] = inst_34778);

(statearr_34835_34905[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (33))){
var inst_34764 = (state_34805[(25)]);
var inst_34766 = cljs.core.chunked_seq_QMARK_.call(null,inst_34764);
var state_34805__$1 = state_34805;
if(inst_34766){
var statearr_34836_34906 = state_34805__$1;
(statearr_34836_34906[(1)] = (36));

} else {
var statearr_34837_34907 = state_34805__$1;
(statearr_34837_34907[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (13))){
var inst_34694 = (state_34805[(26)]);
var inst_34697 = cljs.core.async.close_BANG_.call(null,inst_34694);
var state_34805__$1 = state_34805;
var statearr_34838_34908 = state_34805__$1;
(statearr_34838_34908[(2)] = inst_34697);

(statearr_34838_34908[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (22))){
var inst_34717 = (state_34805[(8)]);
var inst_34720 = cljs.core.async.close_BANG_.call(null,inst_34717);
var state_34805__$1 = state_34805;
var statearr_34839_34909 = state_34805__$1;
(statearr_34839_34909[(2)] = inst_34720);

(statearr_34839_34909[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (36))){
var inst_34764 = (state_34805[(25)]);
var inst_34768 = cljs.core.chunk_first.call(null,inst_34764);
var inst_34769 = cljs.core.chunk_rest.call(null,inst_34764);
var inst_34770 = cljs.core.count.call(null,inst_34768);
var inst_34745 = inst_34769;
var inst_34746 = inst_34768;
var inst_34747 = inst_34770;
var inst_34748 = (0);
var state_34805__$1 = (function (){var statearr_34840 = state_34805;
(statearr_34840[(9)] = inst_34748);

(statearr_34840[(11)] = inst_34746);

(statearr_34840[(20)] = inst_34745);

(statearr_34840[(21)] = inst_34747);

return statearr_34840;
})();
var statearr_34841_34910 = state_34805__$1;
(statearr_34841_34910[(2)] = null);

(statearr_34841_34910[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (41))){
var inst_34764 = (state_34805[(25)]);
var inst_34780 = (state_34805[(2)]);
var inst_34781 = cljs.core.next.call(null,inst_34764);
var inst_34745 = inst_34781;
var inst_34746 = null;
var inst_34747 = (0);
var inst_34748 = (0);
var state_34805__$1 = (function (){var statearr_34842 = state_34805;
(statearr_34842[(27)] = inst_34780);

(statearr_34842[(9)] = inst_34748);

(statearr_34842[(11)] = inst_34746);

(statearr_34842[(20)] = inst_34745);

(statearr_34842[(21)] = inst_34747);

return statearr_34842;
})();
var statearr_34843_34911 = state_34805__$1;
(statearr_34843_34911[(2)] = null);

(statearr_34843_34911[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (43))){
var state_34805__$1 = state_34805;
var statearr_34844_34912 = state_34805__$1;
(statearr_34844_34912[(2)] = null);

(statearr_34844_34912[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (29))){
var inst_34789 = (state_34805[(2)]);
var state_34805__$1 = state_34805;
var statearr_34845_34913 = state_34805__$1;
(statearr_34845_34913[(2)] = inst_34789);

(statearr_34845_34913[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (44))){
var inst_34798 = (state_34805[(2)]);
var state_34805__$1 = (function (){var statearr_34846 = state_34805;
(statearr_34846[(28)] = inst_34798);

return statearr_34846;
})();
var statearr_34847_34914 = state_34805__$1;
(statearr_34847_34914[(2)] = null);

(statearr_34847_34914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (6))){
var inst_34737 = (state_34805[(29)]);
var inst_34736 = cljs.core.deref.call(null,cs);
var inst_34737__$1 = cljs.core.keys.call(null,inst_34736);
var inst_34738 = cljs.core.count.call(null,inst_34737__$1);
var inst_34739 = cljs.core.reset_BANG_.call(null,dctr,inst_34738);
var inst_34744 = cljs.core.seq.call(null,inst_34737__$1);
var inst_34745 = inst_34744;
var inst_34746 = null;
var inst_34747 = (0);
var inst_34748 = (0);
var state_34805__$1 = (function (){var statearr_34848 = state_34805;
(statearr_34848[(29)] = inst_34737__$1);

(statearr_34848[(9)] = inst_34748);

(statearr_34848[(30)] = inst_34739);

(statearr_34848[(11)] = inst_34746);

(statearr_34848[(20)] = inst_34745);

(statearr_34848[(21)] = inst_34747);

return statearr_34848;
})();
var statearr_34849_34915 = state_34805__$1;
(statearr_34849_34915[(2)] = null);

(statearr_34849_34915[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (28))){
var inst_34764 = (state_34805[(25)]);
var inst_34745 = (state_34805[(20)]);
var inst_34764__$1 = cljs.core.seq.call(null,inst_34745);
var state_34805__$1 = (function (){var statearr_34850 = state_34805;
(statearr_34850[(25)] = inst_34764__$1);

return statearr_34850;
})();
if(inst_34764__$1){
var statearr_34851_34916 = state_34805__$1;
(statearr_34851_34916[(1)] = (33));

} else {
var statearr_34852_34917 = state_34805__$1;
(statearr_34852_34917[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (25))){
var inst_34748 = (state_34805[(9)]);
var inst_34747 = (state_34805[(21)]);
var inst_34750 = (inst_34748 < inst_34747);
var inst_34751 = inst_34750;
var state_34805__$1 = state_34805;
if(cljs.core.truth_(inst_34751)){
var statearr_34853_34918 = state_34805__$1;
(statearr_34853_34918[(1)] = (27));

} else {
var statearr_34854_34919 = state_34805__$1;
(statearr_34854_34919[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (34))){
var state_34805__$1 = state_34805;
var statearr_34855_34920 = state_34805__$1;
(statearr_34855_34920[(2)] = null);

(statearr_34855_34920[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (17))){
var state_34805__$1 = state_34805;
var statearr_34856_34921 = state_34805__$1;
(statearr_34856_34921[(2)] = null);

(statearr_34856_34921[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (3))){
var inst_34803 = (state_34805[(2)]);
var state_34805__$1 = state_34805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34805__$1,inst_34803);
} else {
if((state_val_34806 === (12))){
var inst_34732 = (state_34805[(2)]);
var state_34805__$1 = state_34805;
var statearr_34857_34922 = state_34805__$1;
(statearr_34857_34922[(2)] = inst_34732);

(statearr_34857_34922[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (2))){
var state_34805__$1 = state_34805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34805__$1,(4),ch);
} else {
if((state_val_34806 === (23))){
var state_34805__$1 = state_34805;
var statearr_34858_34923 = state_34805__$1;
(statearr_34858_34923[(2)] = null);

(statearr_34858_34923[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (35))){
var inst_34787 = (state_34805[(2)]);
var state_34805__$1 = state_34805;
var statearr_34859_34924 = state_34805__$1;
(statearr_34859_34924[(2)] = inst_34787);

(statearr_34859_34924[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (19))){
var inst_34704 = (state_34805[(7)]);
var inst_34708 = cljs.core.chunk_first.call(null,inst_34704);
var inst_34709 = cljs.core.chunk_rest.call(null,inst_34704);
var inst_34710 = cljs.core.count.call(null,inst_34708);
var inst_34682 = inst_34709;
var inst_34683 = inst_34708;
var inst_34684 = inst_34710;
var inst_34685 = (0);
var state_34805__$1 = (function (){var statearr_34860 = state_34805;
(statearr_34860[(13)] = inst_34684);

(statearr_34860[(14)] = inst_34683);

(statearr_34860[(15)] = inst_34685);

(statearr_34860[(16)] = inst_34682);

return statearr_34860;
})();
var statearr_34861_34925 = state_34805__$1;
(statearr_34861_34925[(2)] = null);

(statearr_34861_34925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (11))){
var inst_34704 = (state_34805[(7)]);
var inst_34682 = (state_34805[(16)]);
var inst_34704__$1 = cljs.core.seq.call(null,inst_34682);
var state_34805__$1 = (function (){var statearr_34862 = state_34805;
(statearr_34862[(7)] = inst_34704__$1);

return statearr_34862;
})();
if(inst_34704__$1){
var statearr_34863_34926 = state_34805__$1;
(statearr_34863_34926[(1)] = (16));

} else {
var statearr_34864_34927 = state_34805__$1;
(statearr_34864_34927[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (9))){
var inst_34734 = (state_34805[(2)]);
var state_34805__$1 = state_34805;
var statearr_34865_34928 = state_34805__$1;
(statearr_34865_34928[(2)] = inst_34734);

(statearr_34865_34928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (5))){
var inst_34680 = cljs.core.deref.call(null,cs);
var inst_34681 = cljs.core.seq.call(null,inst_34680);
var inst_34682 = inst_34681;
var inst_34683 = null;
var inst_34684 = (0);
var inst_34685 = (0);
var state_34805__$1 = (function (){var statearr_34866 = state_34805;
(statearr_34866[(13)] = inst_34684);

(statearr_34866[(14)] = inst_34683);

(statearr_34866[(15)] = inst_34685);

(statearr_34866[(16)] = inst_34682);

return statearr_34866;
})();
var statearr_34867_34929 = state_34805__$1;
(statearr_34867_34929[(2)] = null);

(statearr_34867_34929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (14))){
var state_34805__$1 = state_34805;
var statearr_34868_34930 = state_34805__$1;
(statearr_34868_34930[(2)] = null);

(statearr_34868_34930[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (45))){
var inst_34795 = (state_34805[(2)]);
var state_34805__$1 = state_34805;
var statearr_34869_34931 = state_34805__$1;
(statearr_34869_34931[(2)] = inst_34795);

(statearr_34869_34931[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (26))){
var inst_34737 = (state_34805[(29)]);
var inst_34791 = (state_34805[(2)]);
var inst_34792 = cljs.core.seq.call(null,inst_34737);
var state_34805__$1 = (function (){var statearr_34870 = state_34805;
(statearr_34870[(31)] = inst_34791);

return statearr_34870;
})();
if(inst_34792){
var statearr_34871_34932 = state_34805__$1;
(statearr_34871_34932[(1)] = (42));

} else {
var statearr_34872_34933 = state_34805__$1;
(statearr_34872_34933[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (16))){
var inst_34704 = (state_34805[(7)]);
var inst_34706 = cljs.core.chunked_seq_QMARK_.call(null,inst_34704);
var state_34805__$1 = state_34805;
if(inst_34706){
var statearr_34873_34934 = state_34805__$1;
(statearr_34873_34934[(1)] = (19));

} else {
var statearr_34874_34935 = state_34805__$1;
(statearr_34874_34935[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (38))){
var inst_34784 = (state_34805[(2)]);
var state_34805__$1 = state_34805;
var statearr_34875_34936 = state_34805__$1;
(statearr_34875_34936[(2)] = inst_34784);

(statearr_34875_34936[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (30))){
var state_34805__$1 = state_34805;
var statearr_34876_34937 = state_34805__$1;
(statearr_34876_34937[(2)] = null);

(statearr_34876_34937[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (10))){
var inst_34683 = (state_34805[(14)]);
var inst_34685 = (state_34805[(15)]);
var inst_34693 = cljs.core._nth.call(null,inst_34683,inst_34685);
var inst_34694 = cljs.core.nth.call(null,inst_34693,(0),null);
var inst_34695 = cljs.core.nth.call(null,inst_34693,(1),null);
var state_34805__$1 = (function (){var statearr_34877 = state_34805;
(statearr_34877[(26)] = inst_34694);

return statearr_34877;
})();
if(cljs.core.truth_(inst_34695)){
var statearr_34878_34938 = state_34805__$1;
(statearr_34878_34938[(1)] = (13));

} else {
var statearr_34879_34939 = state_34805__$1;
(statearr_34879_34939[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (18))){
var inst_34730 = (state_34805[(2)]);
var state_34805__$1 = state_34805;
var statearr_34880_34940 = state_34805__$1;
(statearr_34880_34940[(2)] = inst_34730);

(statearr_34880_34940[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (42))){
var state_34805__$1 = state_34805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34805__$1,(45),dchan);
} else {
if((state_val_34806 === (37))){
var inst_34773 = (state_34805[(23)]);
var inst_34764 = (state_34805[(25)]);
var inst_34673 = (state_34805[(12)]);
var inst_34773__$1 = cljs.core.first.call(null,inst_34764);
var inst_34774 = cljs.core.async.put_BANG_.call(null,inst_34773__$1,inst_34673,done);
var state_34805__$1 = (function (){var statearr_34881 = state_34805;
(statearr_34881[(23)] = inst_34773__$1);

return statearr_34881;
})();
if(cljs.core.truth_(inst_34774)){
var statearr_34882_34941 = state_34805__$1;
(statearr_34882_34941[(1)] = (39));

} else {
var statearr_34883_34942 = state_34805__$1;
(statearr_34883_34942[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (8))){
var inst_34684 = (state_34805[(13)]);
var inst_34685 = (state_34805[(15)]);
var inst_34687 = (inst_34685 < inst_34684);
var inst_34688 = inst_34687;
var state_34805__$1 = state_34805;
if(cljs.core.truth_(inst_34688)){
var statearr_34884_34943 = state_34805__$1;
(statearr_34884_34943[(1)] = (10));

} else {
var statearr_34885_34944 = state_34805__$1;
(statearr_34885_34944[(1)] = (11));

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
});})(c__34071__auto___34890,cs,m,dchan,dctr,done))
;
return ((function (switch__33981__auto__,c__34071__auto___34890,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33982__auto__ = null;
var cljs$core$async$mult_$_state_machine__33982__auto____0 = (function (){
var statearr_34886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34886[(0)] = cljs$core$async$mult_$_state_machine__33982__auto__);

(statearr_34886[(1)] = (1));

return statearr_34886;
});
var cljs$core$async$mult_$_state_machine__33982__auto____1 = (function (state_34805){
while(true){
var ret_value__33983__auto__ = (function (){try{while(true){
var result__33984__auto__ = switch__33981__auto__.call(null,state_34805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33984__auto__;
}
break;
}
}catch (e34887){if((e34887 instanceof Object)){
var ex__33985__auto__ = e34887;
var statearr_34888_34945 = state_34805;
(statearr_34888_34945[(5)] = ex__33985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34946 = state_34805;
state_34805 = G__34946;
continue;
} else {
return ret_value__33983__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33982__auto__ = function(state_34805){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33982__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33982__auto____1.call(this,state_34805);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33982__auto____0;
cljs$core$async$mult_$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33982__auto____1;
return cljs$core$async$mult_$_state_machine__33982__auto__;
})()
;})(switch__33981__auto__,c__34071__auto___34890,cs,m,dchan,dctr,done))
})();
var state__34073__auto__ = (function (){var statearr_34889 = f__34072__auto__.call(null);
(statearr_34889[(6)] = c__34071__auto___34890);

return statearr_34889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___34890,cs,m,dchan,dctr,done))
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
var G__34948 = arguments.length;
switch (G__34948) {
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
var x__30829__auto__ = (((m == null))?null:m);
var m__30830__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,m,ch);
} else {
var m__30830__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,m,ch);
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
var x__30829__auto__ = (((m == null))?null:m);
var m__30830__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,m,ch);
} else {
var m__30830__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,m,ch);
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
var x__30829__auto__ = (((m == null))?null:m);
var m__30830__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,m);
} else {
var m__30830__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,m);
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
var x__30829__auto__ = (((m == null))?null:m);
var m__30830__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,m,state_map);
} else {
var m__30830__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,m,state_map);
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
var x__30829__auto__ = (((m == null))?null:m);
var m__30830__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,m,mode);
} else {
var m__30830__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31382__auto__ = [];
var len__31375__auto___34960 = arguments.length;
var i__31376__auto___34961 = (0);
while(true){
if((i__31376__auto___34961 < len__31375__auto___34960)){
args__31382__auto__.push((arguments[i__31376__auto___34961]));

var G__34962 = (i__31376__auto___34961 + (1));
i__31376__auto___34961 = G__34962;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((3) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31383__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34954){
var map__34955 = p__34954;
var map__34955__$1 = ((((!((map__34955 == null)))?((((map__34955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34955):map__34955);
var opts = map__34955__$1;
var statearr_34957_34963 = state;
(statearr_34957_34963[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__34955,map__34955__$1,opts){
return (function (val){
var statearr_34958_34964 = state;
(statearr_34958_34964[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34955,map__34955__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_34959_34965 = state;
(statearr_34959_34965[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34950){
var G__34951 = cljs.core.first.call(null,seq34950);
var seq34950__$1 = cljs.core.next.call(null,seq34950);
var G__34952 = cljs.core.first.call(null,seq34950__$1);
var seq34950__$2 = cljs.core.next.call(null,seq34950__$1);
var G__34953 = cljs.core.first.call(null,seq34950__$2);
var seq34950__$3 = cljs.core.next.call(null,seq34950__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34951,G__34952,G__34953,seq34950__$3);
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
if(typeof cljs.core.async.t_cljs$core$async34966 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34966 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta34967){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta34967 = meta34967;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34968,meta34967__$1){
var self__ = this;
var _34968__$1 = this;
return (new cljs.core.async.t_cljs$core$async34966(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta34967__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34966.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34968){
var self__ = this;
var _34968__$1 = this;
return self__.meta34967;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34966.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34966.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34966.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34966.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34966.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34966.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34966.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34966.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async34966.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta34967","meta34967",-2011343334,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34966.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34966.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34966";

cljs.core.async.t_cljs$core$async34966.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30767__auto__,writer__30768__auto__,opt__30769__auto__){
return cljs.core._write.call(null,writer__30768__auto__,"cljs.core.async/t_cljs$core$async34966");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async34966 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34966(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34967){
return (new cljs.core.async.t_cljs$core$async34966(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34967));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34966(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34071__auto___35130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___35130,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34072__auto__ = (function (){var switch__33981__auto__ = ((function (c__34071__auto___35130,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35070){
var state_val_35071 = (state_35070[(1)]);
if((state_val_35071 === (7))){
var inst_34985 = (state_35070[(2)]);
var state_35070__$1 = state_35070;
var statearr_35072_35131 = state_35070__$1;
(statearr_35072_35131[(2)] = inst_34985);

(statearr_35072_35131[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (20))){
var inst_34997 = (state_35070[(7)]);
var state_35070__$1 = state_35070;
var statearr_35073_35132 = state_35070__$1;
(statearr_35073_35132[(2)] = inst_34997);

(statearr_35073_35132[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (27))){
var state_35070__$1 = state_35070;
var statearr_35074_35133 = state_35070__$1;
(statearr_35074_35133[(2)] = null);

(statearr_35074_35133[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (1))){
var inst_34972 = (state_35070[(8)]);
var inst_34972__$1 = calc_state.call(null);
var inst_34974 = (inst_34972__$1 == null);
var inst_34975 = cljs.core.not.call(null,inst_34974);
var state_35070__$1 = (function (){var statearr_35075 = state_35070;
(statearr_35075[(8)] = inst_34972__$1);

return statearr_35075;
})();
if(inst_34975){
var statearr_35076_35134 = state_35070__$1;
(statearr_35076_35134[(1)] = (2));

} else {
var statearr_35077_35135 = state_35070__$1;
(statearr_35077_35135[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (24))){
var inst_35044 = (state_35070[(9)]);
var inst_35021 = (state_35070[(10)]);
var inst_35030 = (state_35070[(11)]);
var inst_35044__$1 = inst_35021.call(null,inst_35030);
var state_35070__$1 = (function (){var statearr_35078 = state_35070;
(statearr_35078[(9)] = inst_35044__$1);

return statearr_35078;
})();
if(cljs.core.truth_(inst_35044__$1)){
var statearr_35079_35136 = state_35070__$1;
(statearr_35079_35136[(1)] = (29));

} else {
var statearr_35080_35137 = state_35070__$1;
(statearr_35080_35137[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (4))){
var inst_34988 = (state_35070[(2)]);
var state_35070__$1 = state_35070;
if(cljs.core.truth_(inst_34988)){
var statearr_35081_35138 = state_35070__$1;
(statearr_35081_35138[(1)] = (8));

} else {
var statearr_35082_35139 = state_35070__$1;
(statearr_35082_35139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (15))){
var inst_35015 = (state_35070[(2)]);
var state_35070__$1 = state_35070;
if(cljs.core.truth_(inst_35015)){
var statearr_35083_35140 = state_35070__$1;
(statearr_35083_35140[(1)] = (19));

} else {
var statearr_35084_35141 = state_35070__$1;
(statearr_35084_35141[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (21))){
var inst_35020 = (state_35070[(12)]);
var inst_35020__$1 = (state_35070[(2)]);
var inst_35021 = cljs.core.get.call(null,inst_35020__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35022 = cljs.core.get.call(null,inst_35020__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35023 = cljs.core.get.call(null,inst_35020__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35070__$1 = (function (){var statearr_35085 = state_35070;
(statearr_35085[(12)] = inst_35020__$1);

(statearr_35085[(10)] = inst_35021);

(statearr_35085[(13)] = inst_35022);

return statearr_35085;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35070__$1,(22),inst_35023);
} else {
if((state_val_35071 === (31))){
var inst_35052 = (state_35070[(2)]);
var state_35070__$1 = state_35070;
if(cljs.core.truth_(inst_35052)){
var statearr_35086_35142 = state_35070__$1;
(statearr_35086_35142[(1)] = (32));

} else {
var statearr_35087_35143 = state_35070__$1;
(statearr_35087_35143[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (32))){
var inst_35029 = (state_35070[(14)]);
var state_35070__$1 = state_35070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35070__$1,(35),out,inst_35029);
} else {
if((state_val_35071 === (33))){
var inst_35020 = (state_35070[(12)]);
var inst_34997 = inst_35020;
var state_35070__$1 = (function (){var statearr_35088 = state_35070;
(statearr_35088[(7)] = inst_34997);

return statearr_35088;
})();
var statearr_35089_35144 = state_35070__$1;
(statearr_35089_35144[(2)] = null);

(statearr_35089_35144[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (13))){
var inst_34997 = (state_35070[(7)]);
var inst_35004 = inst_34997.cljs$lang$protocol_mask$partition0$;
var inst_35005 = (inst_35004 & (64));
var inst_35006 = inst_34997.cljs$core$ISeq$;
var inst_35007 = (cljs.core.PROTOCOL_SENTINEL === inst_35006);
var inst_35008 = (inst_35005) || (inst_35007);
var state_35070__$1 = state_35070;
if(cljs.core.truth_(inst_35008)){
var statearr_35090_35145 = state_35070__$1;
(statearr_35090_35145[(1)] = (16));

} else {
var statearr_35091_35146 = state_35070__$1;
(statearr_35091_35146[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (22))){
var inst_35029 = (state_35070[(14)]);
var inst_35030 = (state_35070[(11)]);
var inst_35028 = (state_35070[(2)]);
var inst_35029__$1 = cljs.core.nth.call(null,inst_35028,(0),null);
var inst_35030__$1 = cljs.core.nth.call(null,inst_35028,(1),null);
var inst_35031 = (inst_35029__$1 == null);
var inst_35032 = cljs.core._EQ_.call(null,inst_35030__$1,change);
var inst_35033 = (inst_35031) || (inst_35032);
var state_35070__$1 = (function (){var statearr_35092 = state_35070;
(statearr_35092[(14)] = inst_35029__$1);

(statearr_35092[(11)] = inst_35030__$1);

return statearr_35092;
})();
if(cljs.core.truth_(inst_35033)){
var statearr_35093_35147 = state_35070__$1;
(statearr_35093_35147[(1)] = (23));

} else {
var statearr_35094_35148 = state_35070__$1;
(statearr_35094_35148[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (36))){
var inst_35020 = (state_35070[(12)]);
var inst_34997 = inst_35020;
var state_35070__$1 = (function (){var statearr_35095 = state_35070;
(statearr_35095[(7)] = inst_34997);

return statearr_35095;
})();
var statearr_35096_35149 = state_35070__$1;
(statearr_35096_35149[(2)] = null);

(statearr_35096_35149[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (29))){
var inst_35044 = (state_35070[(9)]);
var state_35070__$1 = state_35070;
var statearr_35097_35150 = state_35070__$1;
(statearr_35097_35150[(2)] = inst_35044);

(statearr_35097_35150[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (6))){
var state_35070__$1 = state_35070;
var statearr_35098_35151 = state_35070__$1;
(statearr_35098_35151[(2)] = false);

(statearr_35098_35151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (28))){
var inst_35040 = (state_35070[(2)]);
var inst_35041 = calc_state.call(null);
var inst_34997 = inst_35041;
var state_35070__$1 = (function (){var statearr_35099 = state_35070;
(statearr_35099[(7)] = inst_34997);

(statearr_35099[(15)] = inst_35040);

return statearr_35099;
})();
var statearr_35100_35152 = state_35070__$1;
(statearr_35100_35152[(2)] = null);

(statearr_35100_35152[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (25))){
var inst_35066 = (state_35070[(2)]);
var state_35070__$1 = state_35070;
var statearr_35101_35153 = state_35070__$1;
(statearr_35101_35153[(2)] = inst_35066);

(statearr_35101_35153[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (34))){
var inst_35064 = (state_35070[(2)]);
var state_35070__$1 = state_35070;
var statearr_35102_35154 = state_35070__$1;
(statearr_35102_35154[(2)] = inst_35064);

(statearr_35102_35154[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (17))){
var state_35070__$1 = state_35070;
var statearr_35103_35155 = state_35070__$1;
(statearr_35103_35155[(2)] = false);

(statearr_35103_35155[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (3))){
var state_35070__$1 = state_35070;
var statearr_35104_35156 = state_35070__$1;
(statearr_35104_35156[(2)] = false);

(statearr_35104_35156[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (12))){
var inst_35068 = (state_35070[(2)]);
var state_35070__$1 = state_35070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35070__$1,inst_35068);
} else {
if((state_val_35071 === (2))){
var inst_34972 = (state_35070[(8)]);
var inst_34977 = inst_34972.cljs$lang$protocol_mask$partition0$;
var inst_34978 = (inst_34977 & (64));
var inst_34979 = inst_34972.cljs$core$ISeq$;
var inst_34980 = (cljs.core.PROTOCOL_SENTINEL === inst_34979);
var inst_34981 = (inst_34978) || (inst_34980);
var state_35070__$1 = state_35070;
if(cljs.core.truth_(inst_34981)){
var statearr_35105_35157 = state_35070__$1;
(statearr_35105_35157[(1)] = (5));

} else {
var statearr_35106_35158 = state_35070__$1;
(statearr_35106_35158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (23))){
var inst_35029 = (state_35070[(14)]);
var inst_35035 = (inst_35029 == null);
var state_35070__$1 = state_35070;
if(cljs.core.truth_(inst_35035)){
var statearr_35107_35159 = state_35070__$1;
(statearr_35107_35159[(1)] = (26));

} else {
var statearr_35108_35160 = state_35070__$1;
(statearr_35108_35160[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (35))){
var inst_35055 = (state_35070[(2)]);
var state_35070__$1 = state_35070;
if(cljs.core.truth_(inst_35055)){
var statearr_35109_35161 = state_35070__$1;
(statearr_35109_35161[(1)] = (36));

} else {
var statearr_35110_35162 = state_35070__$1;
(statearr_35110_35162[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (19))){
var inst_34997 = (state_35070[(7)]);
var inst_35017 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34997);
var state_35070__$1 = state_35070;
var statearr_35111_35163 = state_35070__$1;
(statearr_35111_35163[(2)] = inst_35017);

(statearr_35111_35163[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (11))){
var inst_34997 = (state_35070[(7)]);
var inst_35001 = (inst_34997 == null);
var inst_35002 = cljs.core.not.call(null,inst_35001);
var state_35070__$1 = state_35070;
if(inst_35002){
var statearr_35112_35164 = state_35070__$1;
(statearr_35112_35164[(1)] = (13));

} else {
var statearr_35113_35165 = state_35070__$1;
(statearr_35113_35165[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (9))){
var inst_34972 = (state_35070[(8)]);
var state_35070__$1 = state_35070;
var statearr_35114_35166 = state_35070__$1;
(statearr_35114_35166[(2)] = inst_34972);

(statearr_35114_35166[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (5))){
var state_35070__$1 = state_35070;
var statearr_35115_35167 = state_35070__$1;
(statearr_35115_35167[(2)] = true);

(statearr_35115_35167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (14))){
var state_35070__$1 = state_35070;
var statearr_35116_35168 = state_35070__$1;
(statearr_35116_35168[(2)] = false);

(statearr_35116_35168[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (26))){
var inst_35030 = (state_35070[(11)]);
var inst_35037 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35030);
var state_35070__$1 = state_35070;
var statearr_35117_35169 = state_35070__$1;
(statearr_35117_35169[(2)] = inst_35037);

(statearr_35117_35169[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (16))){
var state_35070__$1 = state_35070;
var statearr_35118_35170 = state_35070__$1;
(statearr_35118_35170[(2)] = true);

(statearr_35118_35170[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (38))){
var inst_35060 = (state_35070[(2)]);
var state_35070__$1 = state_35070;
var statearr_35119_35171 = state_35070__$1;
(statearr_35119_35171[(2)] = inst_35060);

(statearr_35119_35171[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (30))){
var inst_35021 = (state_35070[(10)]);
var inst_35030 = (state_35070[(11)]);
var inst_35022 = (state_35070[(13)]);
var inst_35047 = cljs.core.empty_QMARK_.call(null,inst_35021);
var inst_35048 = inst_35022.call(null,inst_35030);
var inst_35049 = cljs.core.not.call(null,inst_35048);
var inst_35050 = (inst_35047) && (inst_35049);
var state_35070__$1 = state_35070;
var statearr_35120_35172 = state_35070__$1;
(statearr_35120_35172[(2)] = inst_35050);

(statearr_35120_35172[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (10))){
var inst_34972 = (state_35070[(8)]);
var inst_34993 = (state_35070[(2)]);
var inst_34994 = cljs.core.get.call(null,inst_34993,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34995 = cljs.core.get.call(null,inst_34993,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34996 = cljs.core.get.call(null,inst_34993,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34997 = inst_34972;
var state_35070__$1 = (function (){var statearr_35121 = state_35070;
(statearr_35121[(7)] = inst_34997);

(statearr_35121[(16)] = inst_34995);

(statearr_35121[(17)] = inst_34996);

(statearr_35121[(18)] = inst_34994);

return statearr_35121;
})();
var statearr_35122_35173 = state_35070__$1;
(statearr_35122_35173[(2)] = null);

(statearr_35122_35173[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (18))){
var inst_35012 = (state_35070[(2)]);
var state_35070__$1 = state_35070;
var statearr_35123_35174 = state_35070__$1;
(statearr_35123_35174[(2)] = inst_35012);

(statearr_35123_35174[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (37))){
var state_35070__$1 = state_35070;
var statearr_35124_35175 = state_35070__$1;
(statearr_35124_35175[(2)] = null);

(statearr_35124_35175[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35071 === (8))){
var inst_34972 = (state_35070[(8)]);
var inst_34990 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34972);
var state_35070__$1 = state_35070;
var statearr_35125_35176 = state_35070__$1;
(statearr_35125_35176[(2)] = inst_34990);

(statearr_35125_35176[(1)] = (10));


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
});})(c__34071__auto___35130,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33981__auto__,c__34071__auto___35130,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33982__auto__ = null;
var cljs$core$async$mix_$_state_machine__33982__auto____0 = (function (){
var statearr_35126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35126[(0)] = cljs$core$async$mix_$_state_machine__33982__auto__);

(statearr_35126[(1)] = (1));

return statearr_35126;
});
var cljs$core$async$mix_$_state_machine__33982__auto____1 = (function (state_35070){
while(true){
var ret_value__33983__auto__ = (function (){try{while(true){
var result__33984__auto__ = switch__33981__auto__.call(null,state_35070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33984__auto__;
}
break;
}
}catch (e35127){if((e35127 instanceof Object)){
var ex__33985__auto__ = e35127;
var statearr_35128_35177 = state_35070;
(statearr_35128_35177[(5)] = ex__33985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35178 = state_35070;
state_35070 = G__35178;
continue;
} else {
return ret_value__33983__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33982__auto__ = function(state_35070){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33982__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33982__auto____1.call(this,state_35070);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33982__auto____0;
cljs$core$async$mix_$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33982__auto____1;
return cljs$core$async$mix_$_state_machine__33982__auto__;
})()
;})(switch__33981__auto__,c__34071__auto___35130,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34073__auto__ = (function (){var statearr_35129 = f__34072__auto__.call(null);
(statearr_35129[(6)] = c__34071__auto___35130);

return statearr_35129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___35130,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__30829__auto__ = (((p == null))?null:p);
var m__30830__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30830__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__30829__auto__ = (((p == null))?null:p);
var m__30830__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,p,v,ch);
} else {
var m__30830__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35180 = arguments.length;
switch (G__35180) {
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
var x__30829__auto__ = (((p == null))?null:p);
var m__30830__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,p);
} else {
var m__30830__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,p);
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
var x__30829__auto__ = (((p == null))?null:p);
var m__30830__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,p,v);
} else {
var m__30830__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,p,v);
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
var G__35184 = arguments.length;
switch (G__35184) {
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
var or__30096__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30096__auto__,mults){
return (function (p1__35182_SHARP_){
if(cljs.core.truth_(p1__35182_SHARP_.call(null,topic))){
return p1__35182_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35182_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30096__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35185 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35185 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35186){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35186 = meta35186;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35187,meta35186__$1){
var self__ = this;
var _35187__$1 = this;
return (new cljs.core.async.t_cljs$core$async35185(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35186__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35185.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35187){
var self__ = this;
var _35187__$1 = this;
return self__.meta35186;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35185.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35185.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35185.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35185.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35185.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async35185.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35185.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35185.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35186","meta35186",-257868298,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35185.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35185.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35185";

cljs.core.async.t_cljs$core$async35185.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30767__auto__,writer__30768__auto__,opt__30769__auto__){
return cljs.core._write.call(null,writer__30768__auto__,"cljs.core.async/t_cljs$core$async35185");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35185 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35185(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35186){
return (new cljs.core.async.t_cljs$core$async35185(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35186));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35185(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34071__auto___35305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___35305,mults,ensure_mult,p){
return (function (){
var f__34072__auto__ = (function (){var switch__33981__auto__ = ((function (c__34071__auto___35305,mults,ensure_mult,p){
return (function (state_35259){
var state_val_35260 = (state_35259[(1)]);
if((state_val_35260 === (7))){
var inst_35255 = (state_35259[(2)]);
var state_35259__$1 = state_35259;
var statearr_35261_35306 = state_35259__$1;
(statearr_35261_35306[(2)] = inst_35255);

(statearr_35261_35306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (20))){
var state_35259__$1 = state_35259;
var statearr_35262_35307 = state_35259__$1;
(statearr_35262_35307[(2)] = null);

(statearr_35262_35307[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (1))){
var state_35259__$1 = state_35259;
var statearr_35263_35308 = state_35259__$1;
(statearr_35263_35308[(2)] = null);

(statearr_35263_35308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (24))){
var inst_35238 = (state_35259[(7)]);
var inst_35247 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35238);
var state_35259__$1 = state_35259;
var statearr_35264_35309 = state_35259__$1;
(statearr_35264_35309[(2)] = inst_35247);

(statearr_35264_35309[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (4))){
var inst_35190 = (state_35259[(8)]);
var inst_35190__$1 = (state_35259[(2)]);
var inst_35191 = (inst_35190__$1 == null);
var state_35259__$1 = (function (){var statearr_35265 = state_35259;
(statearr_35265[(8)] = inst_35190__$1);

return statearr_35265;
})();
if(cljs.core.truth_(inst_35191)){
var statearr_35266_35310 = state_35259__$1;
(statearr_35266_35310[(1)] = (5));

} else {
var statearr_35267_35311 = state_35259__$1;
(statearr_35267_35311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (15))){
var inst_35232 = (state_35259[(2)]);
var state_35259__$1 = state_35259;
var statearr_35268_35312 = state_35259__$1;
(statearr_35268_35312[(2)] = inst_35232);

(statearr_35268_35312[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (21))){
var inst_35252 = (state_35259[(2)]);
var state_35259__$1 = (function (){var statearr_35269 = state_35259;
(statearr_35269[(9)] = inst_35252);

return statearr_35269;
})();
var statearr_35270_35313 = state_35259__$1;
(statearr_35270_35313[(2)] = null);

(statearr_35270_35313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (13))){
var inst_35214 = (state_35259[(10)]);
var inst_35216 = cljs.core.chunked_seq_QMARK_.call(null,inst_35214);
var state_35259__$1 = state_35259;
if(inst_35216){
var statearr_35271_35314 = state_35259__$1;
(statearr_35271_35314[(1)] = (16));

} else {
var statearr_35272_35315 = state_35259__$1;
(statearr_35272_35315[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (22))){
var inst_35244 = (state_35259[(2)]);
var state_35259__$1 = state_35259;
if(cljs.core.truth_(inst_35244)){
var statearr_35273_35316 = state_35259__$1;
(statearr_35273_35316[(1)] = (23));

} else {
var statearr_35274_35317 = state_35259__$1;
(statearr_35274_35317[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (6))){
var inst_35238 = (state_35259[(7)]);
var inst_35190 = (state_35259[(8)]);
var inst_35240 = (state_35259[(11)]);
var inst_35238__$1 = topic_fn.call(null,inst_35190);
var inst_35239 = cljs.core.deref.call(null,mults);
var inst_35240__$1 = cljs.core.get.call(null,inst_35239,inst_35238__$1);
var state_35259__$1 = (function (){var statearr_35275 = state_35259;
(statearr_35275[(7)] = inst_35238__$1);

(statearr_35275[(11)] = inst_35240__$1);

return statearr_35275;
})();
if(cljs.core.truth_(inst_35240__$1)){
var statearr_35276_35318 = state_35259__$1;
(statearr_35276_35318[(1)] = (19));

} else {
var statearr_35277_35319 = state_35259__$1;
(statearr_35277_35319[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (25))){
var inst_35249 = (state_35259[(2)]);
var state_35259__$1 = state_35259;
var statearr_35278_35320 = state_35259__$1;
(statearr_35278_35320[(2)] = inst_35249);

(statearr_35278_35320[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (17))){
var inst_35214 = (state_35259[(10)]);
var inst_35223 = cljs.core.first.call(null,inst_35214);
var inst_35224 = cljs.core.async.muxch_STAR_.call(null,inst_35223);
var inst_35225 = cljs.core.async.close_BANG_.call(null,inst_35224);
var inst_35226 = cljs.core.next.call(null,inst_35214);
var inst_35200 = inst_35226;
var inst_35201 = null;
var inst_35202 = (0);
var inst_35203 = (0);
var state_35259__$1 = (function (){var statearr_35279 = state_35259;
(statearr_35279[(12)] = inst_35202);

(statearr_35279[(13)] = inst_35201);

(statearr_35279[(14)] = inst_35200);

(statearr_35279[(15)] = inst_35225);

(statearr_35279[(16)] = inst_35203);

return statearr_35279;
})();
var statearr_35280_35321 = state_35259__$1;
(statearr_35280_35321[(2)] = null);

(statearr_35280_35321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (3))){
var inst_35257 = (state_35259[(2)]);
var state_35259__$1 = state_35259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35259__$1,inst_35257);
} else {
if((state_val_35260 === (12))){
var inst_35234 = (state_35259[(2)]);
var state_35259__$1 = state_35259;
var statearr_35281_35322 = state_35259__$1;
(statearr_35281_35322[(2)] = inst_35234);

(statearr_35281_35322[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (2))){
var state_35259__$1 = state_35259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35259__$1,(4),ch);
} else {
if((state_val_35260 === (23))){
var state_35259__$1 = state_35259;
var statearr_35282_35323 = state_35259__$1;
(statearr_35282_35323[(2)] = null);

(statearr_35282_35323[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (19))){
var inst_35190 = (state_35259[(8)]);
var inst_35240 = (state_35259[(11)]);
var inst_35242 = cljs.core.async.muxch_STAR_.call(null,inst_35240);
var state_35259__$1 = state_35259;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35259__$1,(22),inst_35242,inst_35190);
} else {
if((state_val_35260 === (11))){
var inst_35200 = (state_35259[(14)]);
var inst_35214 = (state_35259[(10)]);
var inst_35214__$1 = cljs.core.seq.call(null,inst_35200);
var state_35259__$1 = (function (){var statearr_35283 = state_35259;
(statearr_35283[(10)] = inst_35214__$1);

return statearr_35283;
})();
if(inst_35214__$1){
var statearr_35284_35324 = state_35259__$1;
(statearr_35284_35324[(1)] = (13));

} else {
var statearr_35285_35325 = state_35259__$1;
(statearr_35285_35325[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (9))){
var inst_35236 = (state_35259[(2)]);
var state_35259__$1 = state_35259;
var statearr_35286_35326 = state_35259__$1;
(statearr_35286_35326[(2)] = inst_35236);

(statearr_35286_35326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (5))){
var inst_35197 = cljs.core.deref.call(null,mults);
var inst_35198 = cljs.core.vals.call(null,inst_35197);
var inst_35199 = cljs.core.seq.call(null,inst_35198);
var inst_35200 = inst_35199;
var inst_35201 = null;
var inst_35202 = (0);
var inst_35203 = (0);
var state_35259__$1 = (function (){var statearr_35287 = state_35259;
(statearr_35287[(12)] = inst_35202);

(statearr_35287[(13)] = inst_35201);

(statearr_35287[(14)] = inst_35200);

(statearr_35287[(16)] = inst_35203);

return statearr_35287;
})();
var statearr_35288_35327 = state_35259__$1;
(statearr_35288_35327[(2)] = null);

(statearr_35288_35327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (14))){
var state_35259__$1 = state_35259;
var statearr_35292_35328 = state_35259__$1;
(statearr_35292_35328[(2)] = null);

(statearr_35292_35328[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (16))){
var inst_35214 = (state_35259[(10)]);
var inst_35218 = cljs.core.chunk_first.call(null,inst_35214);
var inst_35219 = cljs.core.chunk_rest.call(null,inst_35214);
var inst_35220 = cljs.core.count.call(null,inst_35218);
var inst_35200 = inst_35219;
var inst_35201 = inst_35218;
var inst_35202 = inst_35220;
var inst_35203 = (0);
var state_35259__$1 = (function (){var statearr_35293 = state_35259;
(statearr_35293[(12)] = inst_35202);

(statearr_35293[(13)] = inst_35201);

(statearr_35293[(14)] = inst_35200);

(statearr_35293[(16)] = inst_35203);

return statearr_35293;
})();
var statearr_35294_35329 = state_35259__$1;
(statearr_35294_35329[(2)] = null);

(statearr_35294_35329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (10))){
var inst_35202 = (state_35259[(12)]);
var inst_35201 = (state_35259[(13)]);
var inst_35200 = (state_35259[(14)]);
var inst_35203 = (state_35259[(16)]);
var inst_35208 = cljs.core._nth.call(null,inst_35201,inst_35203);
var inst_35209 = cljs.core.async.muxch_STAR_.call(null,inst_35208);
var inst_35210 = cljs.core.async.close_BANG_.call(null,inst_35209);
var inst_35211 = (inst_35203 + (1));
var tmp35289 = inst_35202;
var tmp35290 = inst_35201;
var tmp35291 = inst_35200;
var inst_35200__$1 = tmp35291;
var inst_35201__$1 = tmp35290;
var inst_35202__$1 = tmp35289;
var inst_35203__$1 = inst_35211;
var state_35259__$1 = (function (){var statearr_35295 = state_35259;
(statearr_35295[(12)] = inst_35202__$1);

(statearr_35295[(17)] = inst_35210);

(statearr_35295[(13)] = inst_35201__$1);

(statearr_35295[(14)] = inst_35200__$1);

(statearr_35295[(16)] = inst_35203__$1);

return statearr_35295;
})();
var statearr_35296_35330 = state_35259__$1;
(statearr_35296_35330[(2)] = null);

(statearr_35296_35330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (18))){
var inst_35229 = (state_35259[(2)]);
var state_35259__$1 = state_35259;
var statearr_35297_35331 = state_35259__$1;
(statearr_35297_35331[(2)] = inst_35229);

(statearr_35297_35331[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (8))){
var inst_35202 = (state_35259[(12)]);
var inst_35203 = (state_35259[(16)]);
var inst_35205 = (inst_35203 < inst_35202);
var inst_35206 = inst_35205;
var state_35259__$1 = state_35259;
if(cljs.core.truth_(inst_35206)){
var statearr_35298_35332 = state_35259__$1;
(statearr_35298_35332[(1)] = (10));

} else {
var statearr_35299_35333 = state_35259__$1;
(statearr_35299_35333[(1)] = (11));

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
});})(c__34071__auto___35305,mults,ensure_mult,p))
;
return ((function (switch__33981__auto__,c__34071__auto___35305,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33982__auto__ = null;
var cljs$core$async$state_machine__33982__auto____0 = (function (){
var statearr_35300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35300[(0)] = cljs$core$async$state_machine__33982__auto__);

(statearr_35300[(1)] = (1));

return statearr_35300;
});
var cljs$core$async$state_machine__33982__auto____1 = (function (state_35259){
while(true){
var ret_value__33983__auto__ = (function (){try{while(true){
var result__33984__auto__ = switch__33981__auto__.call(null,state_35259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33984__auto__;
}
break;
}
}catch (e35301){if((e35301 instanceof Object)){
var ex__33985__auto__ = e35301;
var statearr_35302_35334 = state_35259;
(statearr_35302_35334[(5)] = ex__33985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35335 = state_35259;
state_35259 = G__35335;
continue;
} else {
return ret_value__33983__auto__;
}
break;
}
});
cljs$core$async$state_machine__33982__auto__ = function(state_35259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33982__auto____1.call(this,state_35259);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33982__auto____0;
cljs$core$async$state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33982__auto____1;
return cljs$core$async$state_machine__33982__auto__;
})()
;})(switch__33981__auto__,c__34071__auto___35305,mults,ensure_mult,p))
})();
var state__34073__auto__ = (function (){var statearr_35303 = f__34072__auto__.call(null);
(statearr_35303[(6)] = c__34071__auto___35305);

return statearr_35303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___35305,mults,ensure_mult,p))
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
var G__35337 = arguments.length;
switch (G__35337) {
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
var G__35340 = arguments.length;
switch (G__35340) {
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
var G__35343 = arguments.length;
switch (G__35343) {
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
var c__34071__auto___35410 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___35410,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34072__auto__ = (function (){var switch__33981__auto__ = ((function (c__34071__auto___35410,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35382){
var state_val_35383 = (state_35382[(1)]);
if((state_val_35383 === (7))){
var state_35382__$1 = state_35382;
var statearr_35384_35411 = state_35382__$1;
(statearr_35384_35411[(2)] = null);

(statearr_35384_35411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35383 === (1))){
var state_35382__$1 = state_35382;
var statearr_35385_35412 = state_35382__$1;
(statearr_35385_35412[(2)] = null);

(statearr_35385_35412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35383 === (4))){
var inst_35346 = (state_35382[(7)]);
var inst_35348 = (inst_35346 < cnt);
var state_35382__$1 = state_35382;
if(cljs.core.truth_(inst_35348)){
var statearr_35386_35413 = state_35382__$1;
(statearr_35386_35413[(1)] = (6));

} else {
var statearr_35387_35414 = state_35382__$1;
(statearr_35387_35414[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35383 === (15))){
var inst_35378 = (state_35382[(2)]);
var state_35382__$1 = state_35382;
var statearr_35388_35415 = state_35382__$1;
(statearr_35388_35415[(2)] = inst_35378);

(statearr_35388_35415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35383 === (13))){
var inst_35371 = cljs.core.async.close_BANG_.call(null,out);
var state_35382__$1 = state_35382;
var statearr_35389_35416 = state_35382__$1;
(statearr_35389_35416[(2)] = inst_35371);

(statearr_35389_35416[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35383 === (6))){
var state_35382__$1 = state_35382;
var statearr_35390_35417 = state_35382__$1;
(statearr_35390_35417[(2)] = null);

(statearr_35390_35417[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35383 === (3))){
var inst_35380 = (state_35382[(2)]);
var state_35382__$1 = state_35382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35382__$1,inst_35380);
} else {
if((state_val_35383 === (12))){
var inst_35368 = (state_35382[(8)]);
var inst_35368__$1 = (state_35382[(2)]);
var inst_35369 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35368__$1);
var state_35382__$1 = (function (){var statearr_35391 = state_35382;
(statearr_35391[(8)] = inst_35368__$1);

return statearr_35391;
})();
if(cljs.core.truth_(inst_35369)){
var statearr_35392_35418 = state_35382__$1;
(statearr_35392_35418[(1)] = (13));

} else {
var statearr_35393_35419 = state_35382__$1;
(statearr_35393_35419[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35383 === (2))){
var inst_35345 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35346 = (0);
var state_35382__$1 = (function (){var statearr_35394 = state_35382;
(statearr_35394[(7)] = inst_35346);

(statearr_35394[(9)] = inst_35345);

return statearr_35394;
})();
var statearr_35395_35420 = state_35382__$1;
(statearr_35395_35420[(2)] = null);

(statearr_35395_35420[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35383 === (11))){
var inst_35346 = (state_35382[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35382,(10),Object,null,(9));
var inst_35355 = chs__$1.call(null,inst_35346);
var inst_35356 = done.call(null,inst_35346);
var inst_35357 = cljs.core.async.take_BANG_.call(null,inst_35355,inst_35356);
var state_35382__$1 = state_35382;
var statearr_35396_35421 = state_35382__$1;
(statearr_35396_35421[(2)] = inst_35357);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35382__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35383 === (9))){
var inst_35346 = (state_35382[(7)]);
var inst_35359 = (state_35382[(2)]);
var inst_35360 = (inst_35346 + (1));
var inst_35346__$1 = inst_35360;
var state_35382__$1 = (function (){var statearr_35397 = state_35382;
(statearr_35397[(7)] = inst_35346__$1);

(statearr_35397[(10)] = inst_35359);

return statearr_35397;
})();
var statearr_35398_35422 = state_35382__$1;
(statearr_35398_35422[(2)] = null);

(statearr_35398_35422[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35383 === (5))){
var inst_35366 = (state_35382[(2)]);
var state_35382__$1 = (function (){var statearr_35399 = state_35382;
(statearr_35399[(11)] = inst_35366);

return statearr_35399;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35382__$1,(12),dchan);
} else {
if((state_val_35383 === (14))){
var inst_35368 = (state_35382[(8)]);
var inst_35373 = cljs.core.apply.call(null,f,inst_35368);
var state_35382__$1 = state_35382;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35382__$1,(16),out,inst_35373);
} else {
if((state_val_35383 === (16))){
var inst_35375 = (state_35382[(2)]);
var state_35382__$1 = (function (){var statearr_35400 = state_35382;
(statearr_35400[(12)] = inst_35375);

return statearr_35400;
})();
var statearr_35401_35423 = state_35382__$1;
(statearr_35401_35423[(2)] = null);

(statearr_35401_35423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35383 === (10))){
var inst_35350 = (state_35382[(2)]);
var inst_35351 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35382__$1 = (function (){var statearr_35402 = state_35382;
(statearr_35402[(13)] = inst_35350);

return statearr_35402;
})();
var statearr_35403_35424 = state_35382__$1;
(statearr_35403_35424[(2)] = inst_35351);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35382__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35383 === (8))){
var inst_35364 = (state_35382[(2)]);
var state_35382__$1 = state_35382;
var statearr_35404_35425 = state_35382__$1;
(statearr_35404_35425[(2)] = inst_35364);

(statearr_35404_35425[(1)] = (5));


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
});})(c__34071__auto___35410,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33981__auto__,c__34071__auto___35410,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33982__auto__ = null;
var cljs$core$async$state_machine__33982__auto____0 = (function (){
var statearr_35405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35405[(0)] = cljs$core$async$state_machine__33982__auto__);

(statearr_35405[(1)] = (1));

return statearr_35405;
});
var cljs$core$async$state_machine__33982__auto____1 = (function (state_35382){
while(true){
var ret_value__33983__auto__ = (function (){try{while(true){
var result__33984__auto__ = switch__33981__auto__.call(null,state_35382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33984__auto__;
}
break;
}
}catch (e35406){if((e35406 instanceof Object)){
var ex__33985__auto__ = e35406;
var statearr_35407_35426 = state_35382;
(statearr_35407_35426[(5)] = ex__33985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35427 = state_35382;
state_35382 = G__35427;
continue;
} else {
return ret_value__33983__auto__;
}
break;
}
});
cljs$core$async$state_machine__33982__auto__ = function(state_35382){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33982__auto____1.call(this,state_35382);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33982__auto____0;
cljs$core$async$state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33982__auto____1;
return cljs$core$async$state_machine__33982__auto__;
})()
;})(switch__33981__auto__,c__34071__auto___35410,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34073__auto__ = (function (){var statearr_35408 = f__34072__auto__.call(null);
(statearr_35408[(6)] = c__34071__auto___35410);

return statearr_35408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___35410,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__35430 = arguments.length;
switch (G__35430) {
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
var c__34071__auto___35484 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___35484,out){
return (function (){
var f__34072__auto__ = (function (){var switch__33981__auto__ = ((function (c__34071__auto___35484,out){
return (function (state_35462){
var state_val_35463 = (state_35462[(1)]);
if((state_val_35463 === (7))){
var inst_35442 = (state_35462[(7)]);
var inst_35441 = (state_35462[(8)]);
var inst_35441__$1 = (state_35462[(2)]);
var inst_35442__$1 = cljs.core.nth.call(null,inst_35441__$1,(0),null);
var inst_35443 = cljs.core.nth.call(null,inst_35441__$1,(1),null);
var inst_35444 = (inst_35442__$1 == null);
var state_35462__$1 = (function (){var statearr_35464 = state_35462;
(statearr_35464[(7)] = inst_35442__$1);

(statearr_35464[(8)] = inst_35441__$1);

(statearr_35464[(9)] = inst_35443);

return statearr_35464;
})();
if(cljs.core.truth_(inst_35444)){
var statearr_35465_35485 = state_35462__$1;
(statearr_35465_35485[(1)] = (8));

} else {
var statearr_35466_35486 = state_35462__$1;
(statearr_35466_35486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (1))){
var inst_35431 = cljs.core.vec.call(null,chs);
var inst_35432 = inst_35431;
var state_35462__$1 = (function (){var statearr_35467 = state_35462;
(statearr_35467[(10)] = inst_35432);

return statearr_35467;
})();
var statearr_35468_35487 = state_35462__$1;
(statearr_35468_35487[(2)] = null);

(statearr_35468_35487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (4))){
var inst_35432 = (state_35462[(10)]);
var state_35462__$1 = state_35462;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35462__$1,(7),inst_35432);
} else {
if((state_val_35463 === (6))){
var inst_35458 = (state_35462[(2)]);
var state_35462__$1 = state_35462;
var statearr_35469_35488 = state_35462__$1;
(statearr_35469_35488[(2)] = inst_35458);

(statearr_35469_35488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (3))){
var inst_35460 = (state_35462[(2)]);
var state_35462__$1 = state_35462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35462__$1,inst_35460);
} else {
if((state_val_35463 === (2))){
var inst_35432 = (state_35462[(10)]);
var inst_35434 = cljs.core.count.call(null,inst_35432);
var inst_35435 = (inst_35434 > (0));
var state_35462__$1 = state_35462;
if(cljs.core.truth_(inst_35435)){
var statearr_35471_35489 = state_35462__$1;
(statearr_35471_35489[(1)] = (4));

} else {
var statearr_35472_35490 = state_35462__$1;
(statearr_35472_35490[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (11))){
var inst_35432 = (state_35462[(10)]);
var inst_35451 = (state_35462[(2)]);
var tmp35470 = inst_35432;
var inst_35432__$1 = tmp35470;
var state_35462__$1 = (function (){var statearr_35473 = state_35462;
(statearr_35473[(10)] = inst_35432__$1);

(statearr_35473[(11)] = inst_35451);

return statearr_35473;
})();
var statearr_35474_35491 = state_35462__$1;
(statearr_35474_35491[(2)] = null);

(statearr_35474_35491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (9))){
var inst_35442 = (state_35462[(7)]);
var state_35462__$1 = state_35462;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35462__$1,(11),out,inst_35442);
} else {
if((state_val_35463 === (5))){
var inst_35456 = cljs.core.async.close_BANG_.call(null,out);
var state_35462__$1 = state_35462;
var statearr_35475_35492 = state_35462__$1;
(statearr_35475_35492[(2)] = inst_35456);

(statearr_35475_35492[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (10))){
var inst_35454 = (state_35462[(2)]);
var state_35462__$1 = state_35462;
var statearr_35476_35493 = state_35462__$1;
(statearr_35476_35493[(2)] = inst_35454);

(statearr_35476_35493[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35463 === (8))){
var inst_35442 = (state_35462[(7)]);
var inst_35441 = (state_35462[(8)]);
var inst_35432 = (state_35462[(10)]);
var inst_35443 = (state_35462[(9)]);
var inst_35446 = (function (){var cs = inst_35432;
var vec__35437 = inst_35441;
var v = inst_35442;
var c = inst_35443;
return ((function (cs,vec__35437,v,c,inst_35442,inst_35441,inst_35432,inst_35443,state_val_35463,c__34071__auto___35484,out){
return (function (p1__35428_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35428_SHARP_);
});
;})(cs,vec__35437,v,c,inst_35442,inst_35441,inst_35432,inst_35443,state_val_35463,c__34071__auto___35484,out))
})();
var inst_35447 = cljs.core.filterv.call(null,inst_35446,inst_35432);
var inst_35432__$1 = inst_35447;
var state_35462__$1 = (function (){var statearr_35477 = state_35462;
(statearr_35477[(10)] = inst_35432__$1);

return statearr_35477;
})();
var statearr_35478_35494 = state_35462__$1;
(statearr_35478_35494[(2)] = null);

(statearr_35478_35494[(1)] = (2));


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
});})(c__34071__auto___35484,out))
;
return ((function (switch__33981__auto__,c__34071__auto___35484,out){
return (function() {
var cljs$core$async$state_machine__33982__auto__ = null;
var cljs$core$async$state_machine__33982__auto____0 = (function (){
var statearr_35479 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35479[(0)] = cljs$core$async$state_machine__33982__auto__);

(statearr_35479[(1)] = (1));

return statearr_35479;
});
var cljs$core$async$state_machine__33982__auto____1 = (function (state_35462){
while(true){
var ret_value__33983__auto__ = (function (){try{while(true){
var result__33984__auto__ = switch__33981__auto__.call(null,state_35462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33984__auto__;
}
break;
}
}catch (e35480){if((e35480 instanceof Object)){
var ex__33985__auto__ = e35480;
var statearr_35481_35495 = state_35462;
(statearr_35481_35495[(5)] = ex__33985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35496 = state_35462;
state_35462 = G__35496;
continue;
} else {
return ret_value__33983__auto__;
}
break;
}
});
cljs$core$async$state_machine__33982__auto__ = function(state_35462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33982__auto____1.call(this,state_35462);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33982__auto____0;
cljs$core$async$state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33982__auto____1;
return cljs$core$async$state_machine__33982__auto__;
})()
;})(switch__33981__auto__,c__34071__auto___35484,out))
})();
var state__34073__auto__ = (function (){var statearr_35482 = f__34072__auto__.call(null);
(statearr_35482[(6)] = c__34071__auto___35484);

return statearr_35482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___35484,out))
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
var G__35498 = arguments.length;
switch (G__35498) {
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
var c__34071__auto___35543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___35543,out){
return (function (){
var f__34072__auto__ = (function (){var switch__33981__auto__ = ((function (c__34071__auto___35543,out){
return (function (state_35522){
var state_val_35523 = (state_35522[(1)]);
if((state_val_35523 === (7))){
var inst_35504 = (state_35522[(7)]);
var inst_35504__$1 = (state_35522[(2)]);
var inst_35505 = (inst_35504__$1 == null);
var inst_35506 = cljs.core.not.call(null,inst_35505);
var state_35522__$1 = (function (){var statearr_35524 = state_35522;
(statearr_35524[(7)] = inst_35504__$1);

return statearr_35524;
})();
if(inst_35506){
var statearr_35525_35544 = state_35522__$1;
(statearr_35525_35544[(1)] = (8));

} else {
var statearr_35526_35545 = state_35522__$1;
(statearr_35526_35545[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35523 === (1))){
var inst_35499 = (0);
var state_35522__$1 = (function (){var statearr_35527 = state_35522;
(statearr_35527[(8)] = inst_35499);

return statearr_35527;
})();
var statearr_35528_35546 = state_35522__$1;
(statearr_35528_35546[(2)] = null);

(statearr_35528_35546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35523 === (4))){
var state_35522__$1 = state_35522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35522__$1,(7),ch);
} else {
if((state_val_35523 === (6))){
var inst_35517 = (state_35522[(2)]);
var state_35522__$1 = state_35522;
var statearr_35529_35547 = state_35522__$1;
(statearr_35529_35547[(2)] = inst_35517);

(statearr_35529_35547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35523 === (3))){
var inst_35519 = (state_35522[(2)]);
var inst_35520 = cljs.core.async.close_BANG_.call(null,out);
var state_35522__$1 = (function (){var statearr_35530 = state_35522;
(statearr_35530[(9)] = inst_35519);

return statearr_35530;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35522__$1,inst_35520);
} else {
if((state_val_35523 === (2))){
var inst_35499 = (state_35522[(8)]);
var inst_35501 = (inst_35499 < n);
var state_35522__$1 = state_35522;
if(cljs.core.truth_(inst_35501)){
var statearr_35531_35548 = state_35522__$1;
(statearr_35531_35548[(1)] = (4));

} else {
var statearr_35532_35549 = state_35522__$1;
(statearr_35532_35549[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35523 === (11))){
var inst_35499 = (state_35522[(8)]);
var inst_35509 = (state_35522[(2)]);
var inst_35510 = (inst_35499 + (1));
var inst_35499__$1 = inst_35510;
var state_35522__$1 = (function (){var statearr_35533 = state_35522;
(statearr_35533[(10)] = inst_35509);

(statearr_35533[(8)] = inst_35499__$1);

return statearr_35533;
})();
var statearr_35534_35550 = state_35522__$1;
(statearr_35534_35550[(2)] = null);

(statearr_35534_35550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35523 === (9))){
var state_35522__$1 = state_35522;
var statearr_35535_35551 = state_35522__$1;
(statearr_35535_35551[(2)] = null);

(statearr_35535_35551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35523 === (5))){
var state_35522__$1 = state_35522;
var statearr_35536_35552 = state_35522__$1;
(statearr_35536_35552[(2)] = null);

(statearr_35536_35552[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35523 === (10))){
var inst_35514 = (state_35522[(2)]);
var state_35522__$1 = state_35522;
var statearr_35537_35553 = state_35522__$1;
(statearr_35537_35553[(2)] = inst_35514);

(statearr_35537_35553[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35523 === (8))){
var inst_35504 = (state_35522[(7)]);
var state_35522__$1 = state_35522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35522__$1,(11),out,inst_35504);
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
});})(c__34071__auto___35543,out))
;
return ((function (switch__33981__auto__,c__34071__auto___35543,out){
return (function() {
var cljs$core$async$state_machine__33982__auto__ = null;
var cljs$core$async$state_machine__33982__auto____0 = (function (){
var statearr_35538 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35538[(0)] = cljs$core$async$state_machine__33982__auto__);

(statearr_35538[(1)] = (1));

return statearr_35538;
});
var cljs$core$async$state_machine__33982__auto____1 = (function (state_35522){
while(true){
var ret_value__33983__auto__ = (function (){try{while(true){
var result__33984__auto__ = switch__33981__auto__.call(null,state_35522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33984__auto__;
}
break;
}
}catch (e35539){if((e35539 instanceof Object)){
var ex__33985__auto__ = e35539;
var statearr_35540_35554 = state_35522;
(statearr_35540_35554[(5)] = ex__33985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35555 = state_35522;
state_35522 = G__35555;
continue;
} else {
return ret_value__33983__auto__;
}
break;
}
});
cljs$core$async$state_machine__33982__auto__ = function(state_35522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33982__auto____1.call(this,state_35522);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33982__auto____0;
cljs$core$async$state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33982__auto____1;
return cljs$core$async$state_machine__33982__auto__;
})()
;})(switch__33981__auto__,c__34071__auto___35543,out))
})();
var state__34073__auto__ = (function (){var statearr_35541 = f__34072__auto__.call(null);
(statearr_35541[(6)] = c__34071__auto___35543);

return statearr_35541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___35543,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35557 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35557 = (function (f,ch,meta35558){
this.f = f;
this.ch = ch;
this.meta35558 = meta35558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35559,meta35558__$1){
var self__ = this;
var _35559__$1 = this;
return (new cljs.core.async.t_cljs$core$async35557(self__.f,self__.ch,meta35558__$1));
});

cljs.core.async.t_cljs$core$async35557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35559){
var self__ = this;
var _35559__$1 = this;
return self__.meta35558;
});

cljs.core.async.t_cljs$core$async35557.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35557.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35557.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35557.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35557.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35560 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35560 = (function (f,ch,meta35558,_,fn1,meta35561){
this.f = f;
this.ch = ch;
this.meta35558 = meta35558;
this._ = _;
this.fn1 = fn1;
this.meta35561 = meta35561;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35562,meta35561__$1){
var self__ = this;
var _35562__$1 = this;
return (new cljs.core.async.t_cljs$core$async35560(self__.f,self__.ch,self__.meta35558,self__._,self__.fn1,meta35561__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35560.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35562){
var self__ = this;
var _35562__$1 = this;
return self__.meta35561;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35560.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35560.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35560.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35560.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35556_SHARP_){
return f1.call(null,(((p1__35556_SHARP_ == null))?null:self__.f.call(null,p1__35556_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35560.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35558","meta35558",1982814315,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35557","cljs.core.async/t_cljs$core$async35557",-1696741138,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35561","meta35561",-1060183625,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35560.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35560.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35560";

cljs.core.async.t_cljs$core$async35560.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30767__auto__,writer__30768__auto__,opt__30769__auto__){
return cljs.core._write.call(null,writer__30768__auto__,"cljs.core.async/t_cljs$core$async35560");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async35560 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35560(f__$1,ch__$1,meta35558__$1,___$2,fn1__$1,meta35561){
return (new cljs.core.async.t_cljs$core$async35560(f__$1,ch__$1,meta35558__$1,___$2,fn1__$1,meta35561));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35560(self__.f,self__.ch,self__.meta35558,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30084__auto__ = ret;
if(cljs.core.truth_(and__30084__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30084__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async35557.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35557.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35557.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35558","meta35558",1982814315,null)], null);
});

cljs.core.async.t_cljs$core$async35557.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35557.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35557";

cljs.core.async.t_cljs$core$async35557.cljs$lang$ctorPrWriter = (function (this__30767__auto__,writer__30768__auto__,opt__30769__auto__){
return cljs.core._write.call(null,writer__30768__auto__,"cljs.core.async/t_cljs$core$async35557");
});

cljs.core.async.__GT_t_cljs$core$async35557 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35557(f__$1,ch__$1,meta35558){
return (new cljs.core.async.t_cljs$core$async35557(f__$1,ch__$1,meta35558));
});

}

return (new cljs.core.async.t_cljs$core$async35557(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35563 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35563 = (function (f,ch,meta35564){
this.f = f;
this.ch = ch;
this.meta35564 = meta35564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35565,meta35564__$1){
var self__ = this;
var _35565__$1 = this;
return (new cljs.core.async.t_cljs$core$async35563(self__.f,self__.ch,meta35564__$1));
});

cljs.core.async.t_cljs$core$async35563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35565){
var self__ = this;
var _35565__$1 = this;
return self__.meta35564;
});

cljs.core.async.t_cljs$core$async35563.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35563.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35563.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35563.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35563.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35563.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35563.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35564","meta35564",-1614907702,null)], null);
});

cljs.core.async.t_cljs$core$async35563.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35563.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35563";

cljs.core.async.t_cljs$core$async35563.cljs$lang$ctorPrWriter = (function (this__30767__auto__,writer__30768__auto__,opt__30769__auto__){
return cljs.core._write.call(null,writer__30768__auto__,"cljs.core.async/t_cljs$core$async35563");
});

cljs.core.async.__GT_t_cljs$core$async35563 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35563(f__$1,ch__$1,meta35564){
return (new cljs.core.async.t_cljs$core$async35563(f__$1,ch__$1,meta35564));
});

}

return (new cljs.core.async.t_cljs$core$async35563(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35566 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35566 = (function (p,ch,meta35567){
this.p = p;
this.ch = ch;
this.meta35567 = meta35567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35568,meta35567__$1){
var self__ = this;
var _35568__$1 = this;
return (new cljs.core.async.t_cljs$core$async35566(self__.p,self__.ch,meta35567__$1));
});

cljs.core.async.t_cljs$core$async35566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35568){
var self__ = this;
var _35568__$1 = this;
return self__.meta35567;
});

cljs.core.async.t_cljs$core$async35566.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35566.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35566.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35566.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35566.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35566.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35566.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35566.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35567","meta35567",1259356344,null)], null);
});

cljs.core.async.t_cljs$core$async35566.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35566.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35566";

cljs.core.async.t_cljs$core$async35566.cljs$lang$ctorPrWriter = (function (this__30767__auto__,writer__30768__auto__,opt__30769__auto__){
return cljs.core._write.call(null,writer__30768__auto__,"cljs.core.async/t_cljs$core$async35566");
});

cljs.core.async.__GT_t_cljs$core$async35566 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35566(p__$1,ch__$1,meta35567){
return (new cljs.core.async.t_cljs$core$async35566(p__$1,ch__$1,meta35567));
});

}

return (new cljs.core.async.t_cljs$core$async35566(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35570 = arguments.length;
switch (G__35570) {
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
var c__34071__auto___35610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___35610,out){
return (function (){
var f__34072__auto__ = (function (){var switch__33981__auto__ = ((function (c__34071__auto___35610,out){
return (function (state_35591){
var state_val_35592 = (state_35591[(1)]);
if((state_val_35592 === (7))){
var inst_35587 = (state_35591[(2)]);
var state_35591__$1 = state_35591;
var statearr_35593_35611 = state_35591__$1;
(statearr_35593_35611[(2)] = inst_35587);

(statearr_35593_35611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35592 === (1))){
var state_35591__$1 = state_35591;
var statearr_35594_35612 = state_35591__$1;
(statearr_35594_35612[(2)] = null);

(statearr_35594_35612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35592 === (4))){
var inst_35573 = (state_35591[(7)]);
var inst_35573__$1 = (state_35591[(2)]);
var inst_35574 = (inst_35573__$1 == null);
var state_35591__$1 = (function (){var statearr_35595 = state_35591;
(statearr_35595[(7)] = inst_35573__$1);

return statearr_35595;
})();
if(cljs.core.truth_(inst_35574)){
var statearr_35596_35613 = state_35591__$1;
(statearr_35596_35613[(1)] = (5));

} else {
var statearr_35597_35614 = state_35591__$1;
(statearr_35597_35614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35592 === (6))){
var inst_35573 = (state_35591[(7)]);
var inst_35578 = p.call(null,inst_35573);
var state_35591__$1 = state_35591;
if(cljs.core.truth_(inst_35578)){
var statearr_35598_35615 = state_35591__$1;
(statearr_35598_35615[(1)] = (8));

} else {
var statearr_35599_35616 = state_35591__$1;
(statearr_35599_35616[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35592 === (3))){
var inst_35589 = (state_35591[(2)]);
var state_35591__$1 = state_35591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35591__$1,inst_35589);
} else {
if((state_val_35592 === (2))){
var state_35591__$1 = state_35591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35591__$1,(4),ch);
} else {
if((state_val_35592 === (11))){
var inst_35581 = (state_35591[(2)]);
var state_35591__$1 = state_35591;
var statearr_35600_35617 = state_35591__$1;
(statearr_35600_35617[(2)] = inst_35581);

(statearr_35600_35617[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35592 === (9))){
var state_35591__$1 = state_35591;
var statearr_35601_35618 = state_35591__$1;
(statearr_35601_35618[(2)] = null);

(statearr_35601_35618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35592 === (5))){
var inst_35576 = cljs.core.async.close_BANG_.call(null,out);
var state_35591__$1 = state_35591;
var statearr_35602_35619 = state_35591__$1;
(statearr_35602_35619[(2)] = inst_35576);

(statearr_35602_35619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35592 === (10))){
var inst_35584 = (state_35591[(2)]);
var state_35591__$1 = (function (){var statearr_35603 = state_35591;
(statearr_35603[(8)] = inst_35584);

return statearr_35603;
})();
var statearr_35604_35620 = state_35591__$1;
(statearr_35604_35620[(2)] = null);

(statearr_35604_35620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35592 === (8))){
var inst_35573 = (state_35591[(7)]);
var state_35591__$1 = state_35591;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35591__$1,(11),out,inst_35573);
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
});})(c__34071__auto___35610,out))
;
return ((function (switch__33981__auto__,c__34071__auto___35610,out){
return (function() {
var cljs$core$async$state_machine__33982__auto__ = null;
var cljs$core$async$state_machine__33982__auto____0 = (function (){
var statearr_35605 = [null,null,null,null,null,null,null,null,null];
(statearr_35605[(0)] = cljs$core$async$state_machine__33982__auto__);

(statearr_35605[(1)] = (1));

return statearr_35605;
});
var cljs$core$async$state_machine__33982__auto____1 = (function (state_35591){
while(true){
var ret_value__33983__auto__ = (function (){try{while(true){
var result__33984__auto__ = switch__33981__auto__.call(null,state_35591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33984__auto__;
}
break;
}
}catch (e35606){if((e35606 instanceof Object)){
var ex__33985__auto__ = e35606;
var statearr_35607_35621 = state_35591;
(statearr_35607_35621[(5)] = ex__33985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35622 = state_35591;
state_35591 = G__35622;
continue;
} else {
return ret_value__33983__auto__;
}
break;
}
});
cljs$core$async$state_machine__33982__auto__ = function(state_35591){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33982__auto____1.call(this,state_35591);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33982__auto____0;
cljs$core$async$state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33982__auto____1;
return cljs$core$async$state_machine__33982__auto__;
})()
;})(switch__33981__auto__,c__34071__auto___35610,out))
})();
var state__34073__auto__ = (function (){var statearr_35608 = f__34072__auto__.call(null);
(statearr_35608[(6)] = c__34071__auto___35610);

return statearr_35608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___35610,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35624 = arguments.length;
switch (G__35624) {
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
var c__34071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto__){
return (function (){
var f__34072__auto__ = (function (){var switch__33981__auto__ = ((function (c__34071__auto__){
return (function (state_35687){
var state_val_35688 = (state_35687[(1)]);
if((state_val_35688 === (7))){
var inst_35683 = (state_35687[(2)]);
var state_35687__$1 = state_35687;
var statearr_35689_35727 = state_35687__$1;
(statearr_35689_35727[(2)] = inst_35683);

(statearr_35689_35727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (20))){
var inst_35653 = (state_35687[(7)]);
var inst_35664 = (state_35687[(2)]);
var inst_35665 = cljs.core.next.call(null,inst_35653);
var inst_35639 = inst_35665;
var inst_35640 = null;
var inst_35641 = (0);
var inst_35642 = (0);
var state_35687__$1 = (function (){var statearr_35690 = state_35687;
(statearr_35690[(8)] = inst_35641);

(statearr_35690[(9)] = inst_35639);

(statearr_35690[(10)] = inst_35640);

(statearr_35690[(11)] = inst_35664);

(statearr_35690[(12)] = inst_35642);

return statearr_35690;
})();
var statearr_35691_35728 = state_35687__$1;
(statearr_35691_35728[(2)] = null);

(statearr_35691_35728[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (1))){
var state_35687__$1 = state_35687;
var statearr_35692_35729 = state_35687__$1;
(statearr_35692_35729[(2)] = null);

(statearr_35692_35729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (4))){
var inst_35628 = (state_35687[(13)]);
var inst_35628__$1 = (state_35687[(2)]);
var inst_35629 = (inst_35628__$1 == null);
var state_35687__$1 = (function (){var statearr_35693 = state_35687;
(statearr_35693[(13)] = inst_35628__$1);

return statearr_35693;
})();
if(cljs.core.truth_(inst_35629)){
var statearr_35694_35730 = state_35687__$1;
(statearr_35694_35730[(1)] = (5));

} else {
var statearr_35695_35731 = state_35687__$1;
(statearr_35695_35731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (15))){
var state_35687__$1 = state_35687;
var statearr_35699_35732 = state_35687__$1;
(statearr_35699_35732[(2)] = null);

(statearr_35699_35732[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (21))){
var state_35687__$1 = state_35687;
var statearr_35700_35733 = state_35687__$1;
(statearr_35700_35733[(2)] = null);

(statearr_35700_35733[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (13))){
var inst_35641 = (state_35687[(8)]);
var inst_35639 = (state_35687[(9)]);
var inst_35640 = (state_35687[(10)]);
var inst_35642 = (state_35687[(12)]);
var inst_35649 = (state_35687[(2)]);
var inst_35650 = (inst_35642 + (1));
var tmp35696 = inst_35641;
var tmp35697 = inst_35639;
var tmp35698 = inst_35640;
var inst_35639__$1 = tmp35697;
var inst_35640__$1 = tmp35698;
var inst_35641__$1 = tmp35696;
var inst_35642__$1 = inst_35650;
var state_35687__$1 = (function (){var statearr_35701 = state_35687;
(statearr_35701[(8)] = inst_35641__$1);

(statearr_35701[(14)] = inst_35649);

(statearr_35701[(9)] = inst_35639__$1);

(statearr_35701[(10)] = inst_35640__$1);

(statearr_35701[(12)] = inst_35642__$1);

return statearr_35701;
})();
var statearr_35702_35734 = state_35687__$1;
(statearr_35702_35734[(2)] = null);

(statearr_35702_35734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (22))){
var state_35687__$1 = state_35687;
var statearr_35703_35735 = state_35687__$1;
(statearr_35703_35735[(2)] = null);

(statearr_35703_35735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (6))){
var inst_35628 = (state_35687[(13)]);
var inst_35637 = f.call(null,inst_35628);
var inst_35638 = cljs.core.seq.call(null,inst_35637);
var inst_35639 = inst_35638;
var inst_35640 = null;
var inst_35641 = (0);
var inst_35642 = (0);
var state_35687__$1 = (function (){var statearr_35704 = state_35687;
(statearr_35704[(8)] = inst_35641);

(statearr_35704[(9)] = inst_35639);

(statearr_35704[(10)] = inst_35640);

(statearr_35704[(12)] = inst_35642);

return statearr_35704;
})();
var statearr_35705_35736 = state_35687__$1;
(statearr_35705_35736[(2)] = null);

(statearr_35705_35736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (17))){
var inst_35653 = (state_35687[(7)]);
var inst_35657 = cljs.core.chunk_first.call(null,inst_35653);
var inst_35658 = cljs.core.chunk_rest.call(null,inst_35653);
var inst_35659 = cljs.core.count.call(null,inst_35657);
var inst_35639 = inst_35658;
var inst_35640 = inst_35657;
var inst_35641 = inst_35659;
var inst_35642 = (0);
var state_35687__$1 = (function (){var statearr_35706 = state_35687;
(statearr_35706[(8)] = inst_35641);

(statearr_35706[(9)] = inst_35639);

(statearr_35706[(10)] = inst_35640);

(statearr_35706[(12)] = inst_35642);

return statearr_35706;
})();
var statearr_35707_35737 = state_35687__$1;
(statearr_35707_35737[(2)] = null);

(statearr_35707_35737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (3))){
var inst_35685 = (state_35687[(2)]);
var state_35687__$1 = state_35687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35687__$1,inst_35685);
} else {
if((state_val_35688 === (12))){
var inst_35673 = (state_35687[(2)]);
var state_35687__$1 = state_35687;
var statearr_35708_35738 = state_35687__$1;
(statearr_35708_35738[(2)] = inst_35673);

(statearr_35708_35738[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (2))){
var state_35687__$1 = state_35687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35687__$1,(4),in$);
} else {
if((state_val_35688 === (23))){
var inst_35681 = (state_35687[(2)]);
var state_35687__$1 = state_35687;
var statearr_35709_35739 = state_35687__$1;
(statearr_35709_35739[(2)] = inst_35681);

(statearr_35709_35739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (19))){
var inst_35668 = (state_35687[(2)]);
var state_35687__$1 = state_35687;
var statearr_35710_35740 = state_35687__$1;
(statearr_35710_35740[(2)] = inst_35668);

(statearr_35710_35740[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (11))){
var inst_35639 = (state_35687[(9)]);
var inst_35653 = (state_35687[(7)]);
var inst_35653__$1 = cljs.core.seq.call(null,inst_35639);
var state_35687__$1 = (function (){var statearr_35711 = state_35687;
(statearr_35711[(7)] = inst_35653__$1);

return statearr_35711;
})();
if(inst_35653__$1){
var statearr_35712_35741 = state_35687__$1;
(statearr_35712_35741[(1)] = (14));

} else {
var statearr_35713_35742 = state_35687__$1;
(statearr_35713_35742[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (9))){
var inst_35675 = (state_35687[(2)]);
var inst_35676 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35687__$1 = (function (){var statearr_35714 = state_35687;
(statearr_35714[(15)] = inst_35675);

return statearr_35714;
})();
if(cljs.core.truth_(inst_35676)){
var statearr_35715_35743 = state_35687__$1;
(statearr_35715_35743[(1)] = (21));

} else {
var statearr_35716_35744 = state_35687__$1;
(statearr_35716_35744[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (5))){
var inst_35631 = cljs.core.async.close_BANG_.call(null,out);
var state_35687__$1 = state_35687;
var statearr_35717_35745 = state_35687__$1;
(statearr_35717_35745[(2)] = inst_35631);

(statearr_35717_35745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (14))){
var inst_35653 = (state_35687[(7)]);
var inst_35655 = cljs.core.chunked_seq_QMARK_.call(null,inst_35653);
var state_35687__$1 = state_35687;
if(inst_35655){
var statearr_35718_35746 = state_35687__$1;
(statearr_35718_35746[(1)] = (17));

} else {
var statearr_35719_35747 = state_35687__$1;
(statearr_35719_35747[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (16))){
var inst_35671 = (state_35687[(2)]);
var state_35687__$1 = state_35687;
var statearr_35720_35748 = state_35687__$1;
(statearr_35720_35748[(2)] = inst_35671);

(statearr_35720_35748[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (10))){
var inst_35640 = (state_35687[(10)]);
var inst_35642 = (state_35687[(12)]);
var inst_35647 = cljs.core._nth.call(null,inst_35640,inst_35642);
var state_35687__$1 = state_35687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35687__$1,(13),out,inst_35647);
} else {
if((state_val_35688 === (18))){
var inst_35653 = (state_35687[(7)]);
var inst_35662 = cljs.core.first.call(null,inst_35653);
var state_35687__$1 = state_35687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35687__$1,(20),out,inst_35662);
} else {
if((state_val_35688 === (8))){
var inst_35641 = (state_35687[(8)]);
var inst_35642 = (state_35687[(12)]);
var inst_35644 = (inst_35642 < inst_35641);
var inst_35645 = inst_35644;
var state_35687__$1 = state_35687;
if(cljs.core.truth_(inst_35645)){
var statearr_35721_35749 = state_35687__$1;
(statearr_35721_35749[(1)] = (10));

} else {
var statearr_35722_35750 = state_35687__$1;
(statearr_35722_35750[(1)] = (11));

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
});})(c__34071__auto__))
;
return ((function (switch__33981__auto__,c__34071__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33982__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33982__auto____0 = (function (){
var statearr_35723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35723[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33982__auto__);

(statearr_35723[(1)] = (1));

return statearr_35723;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33982__auto____1 = (function (state_35687){
while(true){
var ret_value__33983__auto__ = (function (){try{while(true){
var result__33984__auto__ = switch__33981__auto__.call(null,state_35687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33984__auto__;
}
break;
}
}catch (e35724){if((e35724 instanceof Object)){
var ex__33985__auto__ = e35724;
var statearr_35725_35751 = state_35687;
(statearr_35725_35751[(5)] = ex__33985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35752 = state_35687;
state_35687 = G__35752;
continue;
} else {
return ret_value__33983__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33982__auto__ = function(state_35687){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33982__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33982__auto____1.call(this,state_35687);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33982__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33982__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33982__auto__;
})()
;})(switch__33981__auto__,c__34071__auto__))
})();
var state__34073__auto__ = (function (){var statearr_35726 = f__34072__auto__.call(null);
(statearr_35726[(6)] = c__34071__auto__);

return statearr_35726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto__))
);

return c__34071__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35754 = arguments.length;
switch (G__35754) {
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
var G__35757 = arguments.length;
switch (G__35757) {
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
var G__35760 = arguments.length;
switch (G__35760) {
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
var c__34071__auto___35807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___35807,out){
return (function (){
var f__34072__auto__ = (function (){var switch__33981__auto__ = ((function (c__34071__auto___35807,out){
return (function (state_35784){
var state_val_35785 = (state_35784[(1)]);
if((state_val_35785 === (7))){
var inst_35779 = (state_35784[(2)]);
var state_35784__$1 = state_35784;
var statearr_35786_35808 = state_35784__$1;
(statearr_35786_35808[(2)] = inst_35779);

(statearr_35786_35808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (1))){
var inst_35761 = null;
var state_35784__$1 = (function (){var statearr_35787 = state_35784;
(statearr_35787[(7)] = inst_35761);

return statearr_35787;
})();
var statearr_35788_35809 = state_35784__$1;
(statearr_35788_35809[(2)] = null);

(statearr_35788_35809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (4))){
var inst_35764 = (state_35784[(8)]);
var inst_35764__$1 = (state_35784[(2)]);
var inst_35765 = (inst_35764__$1 == null);
var inst_35766 = cljs.core.not.call(null,inst_35765);
var state_35784__$1 = (function (){var statearr_35789 = state_35784;
(statearr_35789[(8)] = inst_35764__$1);

return statearr_35789;
})();
if(inst_35766){
var statearr_35790_35810 = state_35784__$1;
(statearr_35790_35810[(1)] = (5));

} else {
var statearr_35791_35811 = state_35784__$1;
(statearr_35791_35811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (6))){
var state_35784__$1 = state_35784;
var statearr_35792_35812 = state_35784__$1;
(statearr_35792_35812[(2)] = null);

(statearr_35792_35812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (3))){
var inst_35781 = (state_35784[(2)]);
var inst_35782 = cljs.core.async.close_BANG_.call(null,out);
var state_35784__$1 = (function (){var statearr_35793 = state_35784;
(statearr_35793[(9)] = inst_35781);

return statearr_35793;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35784__$1,inst_35782);
} else {
if((state_val_35785 === (2))){
var state_35784__$1 = state_35784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35784__$1,(4),ch);
} else {
if((state_val_35785 === (11))){
var inst_35764 = (state_35784[(8)]);
var inst_35773 = (state_35784[(2)]);
var inst_35761 = inst_35764;
var state_35784__$1 = (function (){var statearr_35794 = state_35784;
(statearr_35794[(10)] = inst_35773);

(statearr_35794[(7)] = inst_35761);

return statearr_35794;
})();
var statearr_35795_35813 = state_35784__$1;
(statearr_35795_35813[(2)] = null);

(statearr_35795_35813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (9))){
var inst_35764 = (state_35784[(8)]);
var state_35784__$1 = state_35784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35784__$1,(11),out,inst_35764);
} else {
if((state_val_35785 === (5))){
var inst_35764 = (state_35784[(8)]);
var inst_35761 = (state_35784[(7)]);
var inst_35768 = cljs.core._EQ_.call(null,inst_35764,inst_35761);
var state_35784__$1 = state_35784;
if(inst_35768){
var statearr_35797_35814 = state_35784__$1;
(statearr_35797_35814[(1)] = (8));

} else {
var statearr_35798_35815 = state_35784__$1;
(statearr_35798_35815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (10))){
var inst_35776 = (state_35784[(2)]);
var state_35784__$1 = state_35784;
var statearr_35799_35816 = state_35784__$1;
(statearr_35799_35816[(2)] = inst_35776);

(statearr_35799_35816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (8))){
var inst_35761 = (state_35784[(7)]);
var tmp35796 = inst_35761;
var inst_35761__$1 = tmp35796;
var state_35784__$1 = (function (){var statearr_35800 = state_35784;
(statearr_35800[(7)] = inst_35761__$1);

return statearr_35800;
})();
var statearr_35801_35817 = state_35784__$1;
(statearr_35801_35817[(2)] = null);

(statearr_35801_35817[(1)] = (2));


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
});})(c__34071__auto___35807,out))
;
return ((function (switch__33981__auto__,c__34071__auto___35807,out){
return (function() {
var cljs$core$async$state_machine__33982__auto__ = null;
var cljs$core$async$state_machine__33982__auto____0 = (function (){
var statearr_35802 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35802[(0)] = cljs$core$async$state_machine__33982__auto__);

(statearr_35802[(1)] = (1));

return statearr_35802;
});
var cljs$core$async$state_machine__33982__auto____1 = (function (state_35784){
while(true){
var ret_value__33983__auto__ = (function (){try{while(true){
var result__33984__auto__ = switch__33981__auto__.call(null,state_35784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33984__auto__;
}
break;
}
}catch (e35803){if((e35803 instanceof Object)){
var ex__33985__auto__ = e35803;
var statearr_35804_35818 = state_35784;
(statearr_35804_35818[(5)] = ex__33985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35819 = state_35784;
state_35784 = G__35819;
continue;
} else {
return ret_value__33983__auto__;
}
break;
}
});
cljs$core$async$state_machine__33982__auto__ = function(state_35784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33982__auto____1.call(this,state_35784);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33982__auto____0;
cljs$core$async$state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33982__auto____1;
return cljs$core$async$state_machine__33982__auto__;
})()
;})(switch__33981__auto__,c__34071__auto___35807,out))
})();
var state__34073__auto__ = (function (){var statearr_35805 = f__34072__auto__.call(null);
(statearr_35805[(6)] = c__34071__auto___35807);

return statearr_35805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___35807,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35821 = arguments.length;
switch (G__35821) {
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
var c__34071__auto___35887 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___35887,out){
return (function (){
var f__34072__auto__ = (function (){var switch__33981__auto__ = ((function (c__34071__auto___35887,out){
return (function (state_35859){
var state_val_35860 = (state_35859[(1)]);
if((state_val_35860 === (7))){
var inst_35855 = (state_35859[(2)]);
var state_35859__$1 = state_35859;
var statearr_35861_35888 = state_35859__$1;
(statearr_35861_35888[(2)] = inst_35855);

(statearr_35861_35888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35860 === (1))){
var inst_35822 = (new Array(n));
var inst_35823 = inst_35822;
var inst_35824 = (0);
var state_35859__$1 = (function (){var statearr_35862 = state_35859;
(statearr_35862[(7)] = inst_35823);

(statearr_35862[(8)] = inst_35824);

return statearr_35862;
})();
var statearr_35863_35889 = state_35859__$1;
(statearr_35863_35889[(2)] = null);

(statearr_35863_35889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35860 === (4))){
var inst_35827 = (state_35859[(9)]);
var inst_35827__$1 = (state_35859[(2)]);
var inst_35828 = (inst_35827__$1 == null);
var inst_35829 = cljs.core.not.call(null,inst_35828);
var state_35859__$1 = (function (){var statearr_35864 = state_35859;
(statearr_35864[(9)] = inst_35827__$1);

return statearr_35864;
})();
if(inst_35829){
var statearr_35865_35890 = state_35859__$1;
(statearr_35865_35890[(1)] = (5));

} else {
var statearr_35866_35891 = state_35859__$1;
(statearr_35866_35891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35860 === (15))){
var inst_35849 = (state_35859[(2)]);
var state_35859__$1 = state_35859;
var statearr_35867_35892 = state_35859__$1;
(statearr_35867_35892[(2)] = inst_35849);

(statearr_35867_35892[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35860 === (13))){
var state_35859__$1 = state_35859;
var statearr_35868_35893 = state_35859__$1;
(statearr_35868_35893[(2)] = null);

(statearr_35868_35893[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35860 === (6))){
var inst_35824 = (state_35859[(8)]);
var inst_35845 = (inst_35824 > (0));
var state_35859__$1 = state_35859;
if(cljs.core.truth_(inst_35845)){
var statearr_35869_35894 = state_35859__$1;
(statearr_35869_35894[(1)] = (12));

} else {
var statearr_35870_35895 = state_35859__$1;
(statearr_35870_35895[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35860 === (3))){
var inst_35857 = (state_35859[(2)]);
var state_35859__$1 = state_35859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35859__$1,inst_35857);
} else {
if((state_val_35860 === (12))){
var inst_35823 = (state_35859[(7)]);
var inst_35847 = cljs.core.vec.call(null,inst_35823);
var state_35859__$1 = state_35859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35859__$1,(15),out,inst_35847);
} else {
if((state_val_35860 === (2))){
var state_35859__$1 = state_35859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35859__$1,(4),ch);
} else {
if((state_val_35860 === (11))){
var inst_35839 = (state_35859[(2)]);
var inst_35840 = (new Array(n));
var inst_35823 = inst_35840;
var inst_35824 = (0);
var state_35859__$1 = (function (){var statearr_35871 = state_35859;
(statearr_35871[(7)] = inst_35823);

(statearr_35871[(10)] = inst_35839);

(statearr_35871[(8)] = inst_35824);

return statearr_35871;
})();
var statearr_35872_35896 = state_35859__$1;
(statearr_35872_35896[(2)] = null);

(statearr_35872_35896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35860 === (9))){
var inst_35823 = (state_35859[(7)]);
var inst_35837 = cljs.core.vec.call(null,inst_35823);
var state_35859__$1 = state_35859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35859__$1,(11),out,inst_35837);
} else {
if((state_val_35860 === (5))){
var inst_35823 = (state_35859[(7)]);
var inst_35827 = (state_35859[(9)]);
var inst_35824 = (state_35859[(8)]);
var inst_35832 = (state_35859[(11)]);
var inst_35831 = (inst_35823[inst_35824] = inst_35827);
var inst_35832__$1 = (inst_35824 + (1));
var inst_35833 = (inst_35832__$1 < n);
var state_35859__$1 = (function (){var statearr_35873 = state_35859;
(statearr_35873[(12)] = inst_35831);

(statearr_35873[(11)] = inst_35832__$1);

return statearr_35873;
})();
if(cljs.core.truth_(inst_35833)){
var statearr_35874_35897 = state_35859__$1;
(statearr_35874_35897[(1)] = (8));

} else {
var statearr_35875_35898 = state_35859__$1;
(statearr_35875_35898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35860 === (14))){
var inst_35852 = (state_35859[(2)]);
var inst_35853 = cljs.core.async.close_BANG_.call(null,out);
var state_35859__$1 = (function (){var statearr_35877 = state_35859;
(statearr_35877[(13)] = inst_35852);

return statearr_35877;
})();
var statearr_35878_35899 = state_35859__$1;
(statearr_35878_35899[(2)] = inst_35853);

(statearr_35878_35899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35860 === (10))){
var inst_35843 = (state_35859[(2)]);
var state_35859__$1 = state_35859;
var statearr_35879_35900 = state_35859__$1;
(statearr_35879_35900[(2)] = inst_35843);

(statearr_35879_35900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35860 === (8))){
var inst_35823 = (state_35859[(7)]);
var inst_35832 = (state_35859[(11)]);
var tmp35876 = inst_35823;
var inst_35823__$1 = tmp35876;
var inst_35824 = inst_35832;
var state_35859__$1 = (function (){var statearr_35880 = state_35859;
(statearr_35880[(7)] = inst_35823__$1);

(statearr_35880[(8)] = inst_35824);

return statearr_35880;
})();
var statearr_35881_35901 = state_35859__$1;
(statearr_35881_35901[(2)] = null);

(statearr_35881_35901[(1)] = (2));


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
});})(c__34071__auto___35887,out))
;
return ((function (switch__33981__auto__,c__34071__auto___35887,out){
return (function() {
var cljs$core$async$state_machine__33982__auto__ = null;
var cljs$core$async$state_machine__33982__auto____0 = (function (){
var statearr_35882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35882[(0)] = cljs$core$async$state_machine__33982__auto__);

(statearr_35882[(1)] = (1));

return statearr_35882;
});
var cljs$core$async$state_machine__33982__auto____1 = (function (state_35859){
while(true){
var ret_value__33983__auto__ = (function (){try{while(true){
var result__33984__auto__ = switch__33981__auto__.call(null,state_35859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33984__auto__;
}
break;
}
}catch (e35883){if((e35883 instanceof Object)){
var ex__33985__auto__ = e35883;
var statearr_35884_35902 = state_35859;
(statearr_35884_35902[(5)] = ex__33985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35903 = state_35859;
state_35859 = G__35903;
continue;
} else {
return ret_value__33983__auto__;
}
break;
}
});
cljs$core$async$state_machine__33982__auto__ = function(state_35859){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33982__auto____1.call(this,state_35859);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33982__auto____0;
cljs$core$async$state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33982__auto____1;
return cljs$core$async$state_machine__33982__auto__;
})()
;})(switch__33981__auto__,c__34071__auto___35887,out))
})();
var state__34073__auto__ = (function (){var statearr_35885 = f__34072__auto__.call(null);
(statearr_35885[(6)] = c__34071__auto___35887);

return statearr_35885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___35887,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35905 = arguments.length;
switch (G__35905) {
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
var c__34071__auto___35975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___35975,out){
return (function (){
var f__34072__auto__ = (function (){var switch__33981__auto__ = ((function (c__34071__auto___35975,out){
return (function (state_35947){
var state_val_35948 = (state_35947[(1)]);
if((state_val_35948 === (7))){
var inst_35943 = (state_35947[(2)]);
var state_35947__$1 = state_35947;
var statearr_35949_35976 = state_35947__$1;
(statearr_35949_35976[(2)] = inst_35943);

(statearr_35949_35976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (1))){
var inst_35906 = [];
var inst_35907 = inst_35906;
var inst_35908 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35947__$1 = (function (){var statearr_35950 = state_35947;
(statearr_35950[(7)] = inst_35908);

(statearr_35950[(8)] = inst_35907);

return statearr_35950;
})();
var statearr_35951_35977 = state_35947__$1;
(statearr_35951_35977[(2)] = null);

(statearr_35951_35977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (4))){
var inst_35911 = (state_35947[(9)]);
var inst_35911__$1 = (state_35947[(2)]);
var inst_35912 = (inst_35911__$1 == null);
var inst_35913 = cljs.core.not.call(null,inst_35912);
var state_35947__$1 = (function (){var statearr_35952 = state_35947;
(statearr_35952[(9)] = inst_35911__$1);

return statearr_35952;
})();
if(inst_35913){
var statearr_35953_35978 = state_35947__$1;
(statearr_35953_35978[(1)] = (5));

} else {
var statearr_35954_35979 = state_35947__$1;
(statearr_35954_35979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (15))){
var inst_35937 = (state_35947[(2)]);
var state_35947__$1 = state_35947;
var statearr_35955_35980 = state_35947__$1;
(statearr_35955_35980[(2)] = inst_35937);

(statearr_35955_35980[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (13))){
var state_35947__$1 = state_35947;
var statearr_35956_35981 = state_35947__$1;
(statearr_35956_35981[(2)] = null);

(statearr_35956_35981[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (6))){
var inst_35907 = (state_35947[(8)]);
var inst_35932 = inst_35907.length;
var inst_35933 = (inst_35932 > (0));
var state_35947__$1 = state_35947;
if(cljs.core.truth_(inst_35933)){
var statearr_35957_35982 = state_35947__$1;
(statearr_35957_35982[(1)] = (12));

} else {
var statearr_35958_35983 = state_35947__$1;
(statearr_35958_35983[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (3))){
var inst_35945 = (state_35947[(2)]);
var state_35947__$1 = state_35947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35947__$1,inst_35945);
} else {
if((state_val_35948 === (12))){
var inst_35907 = (state_35947[(8)]);
var inst_35935 = cljs.core.vec.call(null,inst_35907);
var state_35947__$1 = state_35947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35947__$1,(15),out,inst_35935);
} else {
if((state_val_35948 === (2))){
var state_35947__$1 = state_35947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35947__$1,(4),ch);
} else {
if((state_val_35948 === (11))){
var inst_35911 = (state_35947[(9)]);
var inst_35915 = (state_35947[(10)]);
var inst_35925 = (state_35947[(2)]);
var inst_35926 = [];
var inst_35927 = inst_35926.push(inst_35911);
var inst_35907 = inst_35926;
var inst_35908 = inst_35915;
var state_35947__$1 = (function (){var statearr_35959 = state_35947;
(statearr_35959[(7)] = inst_35908);

(statearr_35959[(11)] = inst_35925);

(statearr_35959[(8)] = inst_35907);

(statearr_35959[(12)] = inst_35927);

return statearr_35959;
})();
var statearr_35960_35984 = state_35947__$1;
(statearr_35960_35984[(2)] = null);

(statearr_35960_35984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (9))){
var inst_35907 = (state_35947[(8)]);
var inst_35923 = cljs.core.vec.call(null,inst_35907);
var state_35947__$1 = state_35947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35947__$1,(11),out,inst_35923);
} else {
if((state_val_35948 === (5))){
var inst_35908 = (state_35947[(7)]);
var inst_35911 = (state_35947[(9)]);
var inst_35915 = (state_35947[(10)]);
var inst_35915__$1 = f.call(null,inst_35911);
var inst_35916 = cljs.core._EQ_.call(null,inst_35915__$1,inst_35908);
var inst_35917 = cljs.core.keyword_identical_QMARK_.call(null,inst_35908,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35918 = (inst_35916) || (inst_35917);
var state_35947__$1 = (function (){var statearr_35961 = state_35947;
(statearr_35961[(10)] = inst_35915__$1);

return statearr_35961;
})();
if(cljs.core.truth_(inst_35918)){
var statearr_35962_35985 = state_35947__$1;
(statearr_35962_35985[(1)] = (8));

} else {
var statearr_35963_35986 = state_35947__$1;
(statearr_35963_35986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (14))){
var inst_35940 = (state_35947[(2)]);
var inst_35941 = cljs.core.async.close_BANG_.call(null,out);
var state_35947__$1 = (function (){var statearr_35965 = state_35947;
(statearr_35965[(13)] = inst_35940);

return statearr_35965;
})();
var statearr_35966_35987 = state_35947__$1;
(statearr_35966_35987[(2)] = inst_35941);

(statearr_35966_35987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (10))){
var inst_35930 = (state_35947[(2)]);
var state_35947__$1 = state_35947;
var statearr_35967_35988 = state_35947__$1;
(statearr_35967_35988[(2)] = inst_35930);

(statearr_35967_35988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (8))){
var inst_35907 = (state_35947[(8)]);
var inst_35911 = (state_35947[(9)]);
var inst_35915 = (state_35947[(10)]);
var inst_35920 = inst_35907.push(inst_35911);
var tmp35964 = inst_35907;
var inst_35907__$1 = tmp35964;
var inst_35908 = inst_35915;
var state_35947__$1 = (function (){var statearr_35968 = state_35947;
(statearr_35968[(14)] = inst_35920);

(statearr_35968[(7)] = inst_35908);

(statearr_35968[(8)] = inst_35907__$1);

return statearr_35968;
})();
var statearr_35969_35989 = state_35947__$1;
(statearr_35969_35989[(2)] = null);

(statearr_35969_35989[(1)] = (2));


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
});})(c__34071__auto___35975,out))
;
return ((function (switch__33981__auto__,c__34071__auto___35975,out){
return (function() {
var cljs$core$async$state_machine__33982__auto__ = null;
var cljs$core$async$state_machine__33982__auto____0 = (function (){
var statearr_35970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35970[(0)] = cljs$core$async$state_machine__33982__auto__);

(statearr_35970[(1)] = (1));

return statearr_35970;
});
var cljs$core$async$state_machine__33982__auto____1 = (function (state_35947){
while(true){
var ret_value__33983__auto__ = (function (){try{while(true){
var result__33984__auto__ = switch__33981__auto__.call(null,state_35947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33984__auto__;
}
break;
}
}catch (e35971){if((e35971 instanceof Object)){
var ex__33985__auto__ = e35971;
var statearr_35972_35990 = state_35947;
(statearr_35972_35990[(5)] = ex__33985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35991 = state_35947;
state_35947 = G__35991;
continue;
} else {
return ret_value__33983__auto__;
}
break;
}
});
cljs$core$async$state_machine__33982__auto__ = function(state_35947){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33982__auto____1.call(this,state_35947);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33982__auto____0;
cljs$core$async$state_machine__33982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33982__auto____1;
return cljs$core$async$state_machine__33982__auto__;
})()
;})(switch__33981__auto__,c__34071__auto___35975,out))
})();
var state__34073__auto__ = (function (){var statearr_35973 = f__34072__auto__.call(null);
(statearr_35973[(6)] = c__34071__auto___35975);

return statearr_35973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___35975,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1512625073942
