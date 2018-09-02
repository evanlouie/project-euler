(ns euler.problem-6)

(defn- sum-of-squares
  "Determine the sum of squares for numbers in range 1 -> `up-to`"
  ([up-to] (->> (range 1 (inc up-to))
                (map (fn [n] (* n n)))
                (reduce +))))
(defn- square-of-sum
  "Determine the square of sum of the numbers in range 1 -> `up-to`"
  ([up-to] (Math/pow
            (->> (range 1 (inc up-to))
                 (reduce +))
            2)))

(defn problem-6
  "The sum of the squares of the first ten natural numbers is,

  1^2 + 2^2 + ... + 10^2 = 385

  The square of the sum of the first ten natural numbers is,

  (1 + 2 + ... + 10)^2 = 552 = 3025

  Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

  Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum."
  []
  (- (square-of-sum 100) (sum-of-squares 100)))

(defn -main []
  (time (println (problem-6))))
