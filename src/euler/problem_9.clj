(ns euler.problem-9)

(defn- triplets
  "Return a list of Pythagrean Triplets"
  []
  (for [a (range 1 1000)
        b (range (inc a) 1000)
        :let [c-squared (+ (Math/pow b 2) (Math/pow a 2))
              c-float (Math/sqrt c-squared)
              a-squared (Math/pow a 2)
              b-squared (Math/pow b 2)]
        :when (and
               (= (float (int c-float)) c-float)
               (> c-float b)
               (> b a)
               (= (+ a-squared b-squared) c-squared))]
    (let [triplet [a b (int c-float)]]
      triplet)))

(defn problem-9
  "A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

  a^2 + b^2 = c^2
  For example, 32 + 42 = 9 + 16 = 25 = 52.

  There exists exactly one Pythagorean triplet for which a + b + c = 1000.
  Find the product abc."
  []
  (->> (triplets)
       (map #(do (println %) %))
       (filter (fn [triple] (= 1000 (reduce + triple))))
       (first)
       (reduce *)))

(defn -main []
  (time (println (problem-9))))
