(ns daily-coding-problem.problem-4
  (:require [clojure.test :refer [testing is]]))

(defn problem-4
  "This problem was asked by Stripe.

  Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

  For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

  You can modify the input array in-place."
  ([ints]
   (let [positive-set (into #{} (filter pos-int? ints))]
     (->> (range)
          (filter pos-int?)
          (filter #(not (contains? positive-set %)))
          (first)))))

(testing "Given solutions"
  (is (= (problem-4 [3 4 -1 1]) 2))
  (is (= (problem-4 [1 2 0]) 3)))
(testing "Extra"
  (is (= (problem-4 [-1 -2 -3]) 1))
  (is (= (problem-4 [0 0 0]) 1))
  (is (= (problem-4 []) 1)))
