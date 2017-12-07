// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38728){
var map__38729 = p__38728;
var map__38729__$1 = ((((!((map__38729 == null)))?((((map__38729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38729.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38729):map__38729);
var m = map__38729__$1;
var n = cljs.core.get.call(null,map__38729__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38729__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38731_38753 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38732_38754 = null;
var count__38733_38755 = (0);
var i__38734_38756 = (0);
while(true){
if((i__38734_38756 < count__38733_38755)){
var f_38757 = cljs.core._nth.call(null,chunk__38732_38754,i__38734_38756);
cljs.core.println.call(null,"  ",f_38757);

var G__38758 = seq__38731_38753;
var G__38759 = chunk__38732_38754;
var G__38760 = count__38733_38755;
var G__38761 = (i__38734_38756 + (1));
seq__38731_38753 = G__38758;
chunk__38732_38754 = G__38759;
count__38733_38755 = G__38760;
i__38734_38756 = G__38761;
continue;
} else {
var temp__5457__auto___38762 = cljs.core.seq.call(null,seq__38731_38753);
if(temp__5457__auto___38762){
var seq__38731_38763__$1 = temp__5457__auto___38762;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38731_38763__$1)){
var c__31027__auto___38764 = cljs.core.chunk_first.call(null,seq__38731_38763__$1);
var G__38765 = cljs.core.chunk_rest.call(null,seq__38731_38763__$1);
var G__38766 = c__31027__auto___38764;
var G__38767 = cljs.core.count.call(null,c__31027__auto___38764);
var G__38768 = (0);
seq__38731_38753 = G__38765;
chunk__38732_38754 = G__38766;
count__38733_38755 = G__38767;
i__38734_38756 = G__38768;
continue;
} else {
var f_38769 = cljs.core.first.call(null,seq__38731_38763__$1);
cljs.core.println.call(null,"  ",f_38769);

var G__38770 = cljs.core.next.call(null,seq__38731_38763__$1);
var G__38771 = null;
var G__38772 = (0);
var G__38773 = (0);
seq__38731_38753 = G__38770;
chunk__38732_38754 = G__38771;
count__38733_38755 = G__38772;
i__38734_38756 = G__38773;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38774 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30096__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38774);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38774)))?cljs.core.second.call(null,arglists_38774):arglists_38774));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38735_38775 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38736_38776 = null;
var count__38737_38777 = (0);
var i__38738_38778 = (0);
while(true){
if((i__38738_38778 < count__38737_38777)){
var vec__38739_38779 = cljs.core._nth.call(null,chunk__38736_38776,i__38738_38778);
var name_38780 = cljs.core.nth.call(null,vec__38739_38779,(0),null);
var map__38742_38781 = cljs.core.nth.call(null,vec__38739_38779,(1),null);
var map__38742_38782__$1 = ((((!((map__38742_38781 == null)))?((((map__38742_38781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38742_38781.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38742_38781):map__38742_38781);
var doc_38783 = cljs.core.get.call(null,map__38742_38782__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38784 = cljs.core.get.call(null,map__38742_38782__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38780);

cljs.core.println.call(null," ",arglists_38784);

if(cljs.core.truth_(doc_38783)){
cljs.core.println.call(null," ",doc_38783);
} else {
}

var G__38785 = seq__38735_38775;
var G__38786 = chunk__38736_38776;
var G__38787 = count__38737_38777;
var G__38788 = (i__38738_38778 + (1));
seq__38735_38775 = G__38785;
chunk__38736_38776 = G__38786;
count__38737_38777 = G__38787;
i__38738_38778 = G__38788;
continue;
} else {
var temp__5457__auto___38789 = cljs.core.seq.call(null,seq__38735_38775);
if(temp__5457__auto___38789){
var seq__38735_38790__$1 = temp__5457__auto___38789;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38735_38790__$1)){
var c__31027__auto___38791 = cljs.core.chunk_first.call(null,seq__38735_38790__$1);
var G__38792 = cljs.core.chunk_rest.call(null,seq__38735_38790__$1);
var G__38793 = c__31027__auto___38791;
var G__38794 = cljs.core.count.call(null,c__31027__auto___38791);
var G__38795 = (0);
seq__38735_38775 = G__38792;
chunk__38736_38776 = G__38793;
count__38737_38777 = G__38794;
i__38738_38778 = G__38795;
continue;
} else {
var vec__38744_38796 = cljs.core.first.call(null,seq__38735_38790__$1);
var name_38797 = cljs.core.nth.call(null,vec__38744_38796,(0),null);
var map__38747_38798 = cljs.core.nth.call(null,vec__38744_38796,(1),null);
var map__38747_38799__$1 = ((((!((map__38747_38798 == null)))?((((map__38747_38798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38747_38798.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38747_38798):map__38747_38798);
var doc_38800 = cljs.core.get.call(null,map__38747_38799__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38801 = cljs.core.get.call(null,map__38747_38799__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38797);

cljs.core.println.call(null," ",arglists_38801);

if(cljs.core.truth_(doc_38800)){
cljs.core.println.call(null," ",doc_38800);
} else {
}

var G__38802 = cljs.core.next.call(null,seq__38735_38790__$1);
var G__38803 = null;
var G__38804 = (0);
var G__38805 = (0);
seq__38735_38775 = G__38802;
chunk__38736_38776 = G__38803;
count__38737_38777 = G__38804;
i__38738_38778 = G__38805;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__38749 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38750 = null;
var count__38751 = (0);
var i__38752 = (0);
while(true){
if((i__38752 < count__38751)){
var role = cljs.core._nth.call(null,chunk__38750,i__38752);
var temp__5457__auto___38806__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___38806__$1)){
var spec_38807 = temp__5457__auto___38806__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38807));
} else {
}

var G__38808 = seq__38749;
var G__38809 = chunk__38750;
var G__38810 = count__38751;
var G__38811 = (i__38752 + (1));
seq__38749 = G__38808;
chunk__38750 = G__38809;
count__38751 = G__38810;
i__38752 = G__38811;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__38749);
if(temp__5457__auto____$1){
var seq__38749__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38749__$1)){
var c__31027__auto__ = cljs.core.chunk_first.call(null,seq__38749__$1);
var G__38812 = cljs.core.chunk_rest.call(null,seq__38749__$1);
var G__38813 = c__31027__auto__;
var G__38814 = cljs.core.count.call(null,c__31027__auto__);
var G__38815 = (0);
seq__38749 = G__38812;
chunk__38750 = G__38813;
count__38751 = G__38814;
i__38752 = G__38815;
continue;
} else {
var role = cljs.core.first.call(null,seq__38749__$1);
var temp__5457__auto___38816__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___38816__$2)){
var spec_38817 = temp__5457__auto___38816__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38817));
} else {
}

var G__38818 = cljs.core.next.call(null,seq__38749__$1);
var G__38819 = null;
var G__38820 = (0);
var G__38821 = (0);
seq__38749 = G__38818;
chunk__38750 = G__38819;
count__38751 = G__38820;
i__38752 = G__38821;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1512625077778
