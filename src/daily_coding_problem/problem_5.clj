(ns daily-coding-problem.problem-5
  (:require [clojure.test :refer [testing is]]))

(defn- cons
  [a b]
  (fn [f] (f a b)))

(defn- car
  "(a -> b)"
  [pair]
  (pair (fn [a b] a)))

(defn- cdr
  [pair]
  (pair (fn [a b] b)))

(defn problem-5
  "This problem was asked by Jane Street.

  cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

  Given this implementation of cons:

  def cons(a, b):
      def pair(f):
          return f(a, b)
      return pair

  Implement car and cdr."
  ([] {:cons cons :car car :cdr cdr}))

(testing "Given solutions"
  (is (= (car (cons 3 4)) 3))
  (is (= (cdr (cons 3 4)) 4)))
