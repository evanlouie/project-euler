(ns hacker-rank.problem-1)

(use '[clojure.string :only (split triml)])

(let [t_t (read-line)
      t (Integer/parseInt t_t)]

  (loop [a0 t]
    (when (> a0 0)

      (let [n_t (read-line)
            n (Integer/parseInt n_t)
            multiples-of-3-5 (for [x (range)
                                   :when (or (zero? (mod x 3))
                                             (zero? (mod x 5)))]
                               x)]
        (do
          (println (->> multiples-of-3-5
                        (take-while (partial > n))
                        (reduce +)))))

      (recur (- a0 1)))))
