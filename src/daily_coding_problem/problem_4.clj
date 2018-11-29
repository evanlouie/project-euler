(ns daily-coding-problem.problem-4
  (:require [clojure.test :refer [testing is]]))

(defn- abs
  [n] (max n (- n)))

(defn- first-missing-positive
  ([list-of-numbers]
   (let [positives (atom (into [] (filter (fn [n] (pos-int? n)) list-of-numbers)))
         end (count @positives)]
     (doseq [index (range end)
             :let [value (abs (get @positives index))]]
       (when (<= value end)
         (let [target (get @positives (dec value))
               negative-value (if (pos? target)
                                (- target)
                                target)]
           (swap! positives assoc (dec value) negative-value))))
     (inc (if (every? neg? @positives)
            (count @positives)
            (->> @positives
                 (map-indexed (fn [idx i] {:index idx :i i}))
                 (filter (fn [{index :index i :i}] (pos? i)))
                 first
                 :index))))))

(defn problem-4
  "This problem was asked by Stripe.

  Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

  For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

  You can modify the input array in-place."
  ([list-of-numbers]
   (first-missing-positive list-of-numbers)))

(testing "Given solutions"
  (is (= (problem-4 [3 4 -1 1]) 2))
  (is (= (problem-4 [1 2 0]) 3)))
(testing "Extra"
  (is (= (problem-4 [-1 -2 -3]) 1))
  (is (= (problem-4 [0 0 0]) 1))
  (is (= (problem-4 []) 1)))
