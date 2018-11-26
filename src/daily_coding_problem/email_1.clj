(ns daily-coding-problem.email-1
  (:require [clojure.test :refer [testing is]]))

(defn email
  "return a new sorted merged list from K sorted lists, each with size N."
  ([list-of-lists]
   (loop [lists list-of-lists
          sorted []]
     (if (every? empty? lists)
       sorted
       (let [firsts (map first lists)
             smallest (apply min firsts)
             times (count (filter #(= smallest %) firsts))
             lists-without-smallest (->> (for [[f & rest :as list] lists]
                                           (if (= f smallest)
                                             rest
                                             list))
                                         (filter #(not (nil? %))))]
         (recur
          lists-without-smallest
          (into sorted (repeat times smallest))))))))

(testing "Given solutions"
  (is (= (email [[10 15 30] [12 15 20] [17 20 32]])
         [10 12 15 15 17 20 20 30 32])))