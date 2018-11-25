(ns daily-coding-problem.problem-1
  (:require [clojure.test :refer [testing is]]))

(defn problem-1
  "Given a list of numbers and a number `k`, return whether any two numbers from the list add up to `k`.

  For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

  Bonus: Can you do this in one pass?"
  ([numbers k]
   (problem-1 numbers k {}))
  ([numbers k difference-lookup]
   (cond
     (zero? (count numbers)) false
     (get difference-lookup (first numbers)) true
     :else (recur (rest numbers) k (assoc difference-lookup
                                          (- k (first numbers))
                                          (first numbers))))))

(testing "Should be true"
  (is (true? (problem-1 [10 15 3 7] 17)))
  (is (true? (problem-1 [10 0] 10)))
  (is (true? (problem-1 [1 -1] 0))))
(testing "Should be false"
  (is (false? (problem-1 [10] 10)))
  (is (false? (problem-1 [10 15 3] 17)))
  (is (false? (problem-1 [] 0))))
