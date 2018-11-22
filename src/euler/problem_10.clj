(ns euler.problem-10)

(defn- prime?
  "Return boolean of primeness of `n`"
  ([n]
   (prime? n 2))
  ([n divisor]
   (cond
     (> divisor (Math/sqrt n)) (> n 1)
     (< (mod n divisor) 1) false
     :else (recur n (inc divisor)))))

(defn- primes
  "Return a lazy sequence of prime numbers"
  ([]
   (lazy-seq (cons 2 (primes 3 [2]))))
  ([potential prev-primes]
   (let [divisors (take-while #(<= % (Math/sqrt potential)) prev-primes)]
     (if (some #(zero? (mod potential %)) divisors)
       (lazy-seq (primes (inc potential) prev-primes))
       (lazy-seq (cons potential
                       (primes (inc potential) (conj prev-primes potential))))))))

(defn problem-10
  "The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

  Find the sum of all the primes below two million."
  []
  ;; Similar performance for both on Java. Lazy-sequences are MUCH SLOWER in JavaScript
  #_(->> (range)
         (filter prime?)
         (take-while #(<= % 2000000))
         (reduce +))
  (->> (primes)
       (take-while #(<= % 2000000))
       (reduce +)))

(defn -main []
  (time (println (problem-10))))

(defn foo [] (#'problem-10))
