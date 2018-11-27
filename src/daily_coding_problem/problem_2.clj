(ns daily-coding-problem.problem-2
  (:require [clojure.test :refer [testing is]]))

(defn problem-2
  "This problem was asked by Uber.

  Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

  For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

  Follow-up: what if you can't use division?"
  [integers]
  (loop [ints integers
         multiplied []
         curr-index 0]
    (if (>= curr-index (count ints))
      multiplied
      (let [curr-number (get ints curr-index)
            curr-product (->> ints
                              (filter #(not= % curr-number))
                              (reduce *))]
        (recur ints (conj multiplied curr-product) (inc curr-index))))))

(testing "Given solutions"
  (is (= (problem-2 [1 2 3 4 5])
         [120 60 40 30 24]))
  (is (= (problem-2 [3 2 1])
         [2 3 6])))
(testing "Extra"
  (testing "with negatives"
    (is (= (problem-2 [-1 2 3 4])
           [24 -12 -8 -6])))
  (testing "with empty lists"
    (is (= (problem-2 [])
           []))))
