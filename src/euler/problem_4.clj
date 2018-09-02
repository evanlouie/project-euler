(ns euler.problem-4)

(defn- palindrome?
  "Determine if `n` is a palindrom number"
  [number]
  (= (str number)
     (apply str (reverse (str number)))))

(defn problem-4
  "A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

  Find the largest palindrome made from the product of two 3-digit numbers."
  []
  (let [largest-palindrome (atom 0)]
    (->> (for [x (range 1000)
               y (range 1000)
               :let [product (* x y)]
               :when (palindrome? product)]
           product)
         (map (fn [product]
                (do
                  (when (> product @largest-palindrome)
                    (swap! largest-palindrome (fn [_] product))
                    (println @largest-palindrome))
                  product)))
         (apply max))))

(defn -main []
  (time (println (problem-4))))
