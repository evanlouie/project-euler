(ns hacker-rank.problem-2)

(use '[clojure.string :only (split triml)])

(def fib (memoize
          (fn
            ([n] (fib n 0 1))
            ([n x y] (condp = n
                       0 x
                       1 y
                       (recur (- n 1) y (+ x y)))))))

(let [t_t (read-line)
      t (bigint t_t)]

  (loop [a0 t]
    (when (> a0 0)

      (let [n_t (read-line)
            n (bigint n_t)
            fibs (for [x (range)
                       :let [fibn (fib x)]]
                   fibn)]
        (println (->> fibs
                      (take-while (partial > n))
                      (filter even?)
                      (reduce +))))

      (recur (- a0 1)))))
