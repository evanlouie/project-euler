(ns euler.problem-7)

(defn- isPrime?
  "Determine if `n` is prime or not"
  ([n] (isPrime? n 2))
  ([n start] (cond
               (> start (Math/sqrt n)) (> n 1)
               (< (mod n start) 1) false
               :else (recur n (inc start)))))

(defn- primes
  "Generates a lazy sequence of prime numbers"
  ([]
   (lazy-seq (cons 2 (primes 3 [2]))))
  ([potential prev-primes]
   (let [divisors (take-while #(<= % (Math/sqrt potential)) prev-primes)]
     (if (some #(zero? (mod potential %)) divisors)
       (lazy-seq (primes (inc potential) prev-primes))
       (lazy-seq (cons potential
                       (primes (inc potential) (conj prev-primes potential))))))))

(defn problem-7
  "By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

  What is the 10 001st prime number?  "
  []
  ; Slower
  #_(->> (range)
         (filter isPrime?)
         (take 10001)
         (last))
  (nth (primes) 10001))

(defn -main []
  (time (println (problem-7))))
