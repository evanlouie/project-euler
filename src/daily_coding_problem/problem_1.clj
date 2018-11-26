(ns daily-coding-problem.problem-1
  (:require [clojure.test :refer [testing is]]))

(defn problem-1
  "This problem was recently asked by Google.

  Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

  For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

  Bonus: Can you do this in one pass?"
  ([numbers k]
   (loop [numbers numbers
          k k
          difference-lookup {}]
     (cond
       (zero? (count numbers)) false
       (get difference-lookup (first numbers)) true
       :else (recur (rest numbers) k (assoc difference-lookup
                                            (- k (first numbers))
                                            (first numbers)))))))

(testing "Given solutions"
  (is (true? (problem-1 [10 15 3 7] 17))))
(testing "Extra"
  (testing "should be true"
    (is (true? (problem-1 [10 0] 10)))
    (is (true? (problem-1 [1 -1] 0))))
  (testing "should be false"
    (is (false? (problem-1 [10] 10)))
    (is (false? (problem-1 [10 15 3] 17)))
    (is (false? (problem-1 [] 0)))))

