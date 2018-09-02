(ns euler.problem-15)

(defn- factorials
  ([] (factorials 0 1))
  ([n running-product] (let [next (inc n)
                             next-product (*' running-product next)]
                         (lazy-seq (cons next-product (factorials next next-product))))))

(defn- factorial
  ([n] (factorial n 1))
  ([n product] (if (= n 1)
                 product
                 (recur (dec n) (*' product n)))))

(defn- central-binomial-coefficients
  [n]
  (/ (factorial (* n 2))
     (reduce *' (repeat 2 (factorial n)))))

(defn problem-15
  "Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

  __   _    _
    |   |_   |
    |    |   |_

  |__  |_    |
    |    |_  |__

  How many such routes are there through a 20×20 grid?"
  []
  (central-binomial-coefficients 20))

(defn -main []
  (time (println (problem-15))))
