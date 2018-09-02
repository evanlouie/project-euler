(ns euler.problem-3)

(defn- multiple?
  "Determine if `n` is a multiple of divisor"
  [n divisor]
  (zero? (mod n divisor)))

(defn- prime-factors
  "Return an unordered vector of the prime factors of `n`"
  ([n]
   (prime-factors n 2 (transient [])))
  ([n candidate acc]
   (cond (<= n 1) (reverse (persistent! acc))
         (multiple? n candidate) (recur (/ n candidate) candidate (conj! acc candidate))
         :else (recur n (inc candidate) acc))))

(defn problem-3
  "The prime factors of 13195 are 5, 7, 13 and 29.

  What is the largest prime factor of the number 600851475143 ?"
  []
  (apply max (prime-factors 600851475143)))

(defn -main []
  (time (println (problem-3))))
