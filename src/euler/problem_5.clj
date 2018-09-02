(ns euler.problem-5)

(defn problem-5
  "2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

  What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?"
  []
  (let [divisors (range 20 10 -1)]
    (->> (for [n (iterate (partial + 20) 20)
               :when (do (when (zero? (rem n 10000000)) (println n))
                         (every? zero? (map (fn [divisor] (rem n divisor)) divisors)))]
           n)
         (first))))

(defn -main []
  (time (println (problem-5))))
