(ns euler.problem-1)

(defn problem-1
  "If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

  Find the sum of all the multiples of 3 or 5 below 1000."
  []
  (->> (for [natural (range)
             :when (or (zero? (mod natural 3))
                       (zero? (mod natural 5)))
             :while (<= natural 1000)]
         natural)
       (reduce +)))

(defn -main []
  (time (println (problem-1))))
