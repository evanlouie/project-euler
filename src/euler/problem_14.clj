(ns euler.problem-14)

(defn- collatz
  "Return the Collatz sequence when started at `n`"
  ([n]
   (collatz n (transient [])))
  ([n t]
   (cond (= 1 n) (do (conj! t 1)
                     (persistent! t))
         (even? n) (recur (/ n 2) (conj! t n))
         (odd? n) (recur (inc (* 3 n)) (conj! t n)))))

(defn problem-14
  "The following iterative sequence is defined for the set of positive integers:

  n → n/2 (n is even)
  n → 3n + 1 (n is odd)

  Using the rule above and starting with 13, we generate the following sequence:

  13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
  It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

  Which starting number, under one million, produces the longest chain?

  NOTE: Once the chain starts the terms are allowed to go above one million."
  []
  (let [running-max (atom {:n 0 :collatz-length 0})]
    (->> (range 1 1000001)
         (map (fn [n] (let [c (collatz n)
                            c-length (count c)
                            c-map {:n n :collatz-length c-length}]
                        (do
                          (when (> c-length (@running-max :collatz-length))
                            (swap! running-max (fn [_] c-map))
                            (println @running-max))
                          c-map))))
         (apply max-key :collatz-length)
         (:n))))

(defn -main []
  (time (println (problem-14)))
  (shutdown-agents))
