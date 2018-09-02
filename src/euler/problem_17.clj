(ns euler.problem-17
  (:require [clojure.core.match :refer [match]]))

(defn problem-17
  "If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

  If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


  NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of \"and\" when writing out numbers is in compliance with British usage."
  []
  (let [number-to-english-map {0 ""
                               1 "one"
                               2 "two"
                               3 "three"
                               4 "four"
                               5 "five"
                               6 "six"
                               7 "seven"
                               8 "eight"
                               9 "nine"
                               10 "ten"
                               11 "eleven"
                               12 "twelve"
                               13 "thirteen"
                               14 "fourteen"
                               15 "fifteen"
                               16 "sixteen"
                               17 "seventeen"
                               18 "eighteen"
                               19 "nineteen"
                               20 "twenty"
                               30 "thirty"
                               40 "forty"
                               50 "fifty"
                               60 "sixty"
                               70 "seventy"
                               80 "eighty"
                               90 "ninety"
                               100 "hundred"
                               1000 "thousand"}]
    (letfn [(convert-vector-to-english
              ([num-vec]
               (convert-vector-to-english num-vec ""))
              ([num-vec carry]
               (let [next (vec (drop 1 num-vec))]
                 (match [num-vec]
                   [[ones]]
                   (str carry
                        (number-to-english-map ones))
                   [[tens ones]]
                   (str carry
                        (let [sum (+ (* tens 10) ones)]
                          (if (< sum 20)
                            (number-to-english-map sum)
                            (str (number-to-english-map (* tens 10))
                                 (when-not (zero? ones)
                                   (str " " (number-to-english-map ones)))))))
                   [[hundreds tens ones]]
                   (recur next
                          (str carry
                               (when (pos-int? hundreds)
                                 (str (number-to-english-map hundreds) " hundred"))
                               (when (some pos-int? [tens ones])
                                 " and ")))
                   [[thousands hundreds tens ones]]
                   (recur next
                          (str (when (pos-int? thousands)
                                 (str (number-to-english-map thousands) " thousand"))
                               (when (some pos-int? [hundreds tens ones])
                                 " ")))))))
            (number-to-english
             ([n] (let [number-vec (vec (map (comp read-string str) (str n)))]
                    (convert-vector-to-english number-vec))))]
      (->> (range 1 1001)
           (map number-to-english)
           (clojure.string/join " ")
           (map str)
           (filter #(not= " " %))
           (count)))))

(defn -main []
  (time (println (problem-17))))
