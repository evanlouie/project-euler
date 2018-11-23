(ns project-euler.core
  (:require [reagent.core :as reagent :refer [atom]]
            [cljs.pprint :as pprint]
            [euler.problems :as problems]
            [clojure.core.async :as async :refer [go chan close! >! <! alts!]]))

(enable-console-print!)

(defn fetch
  [url callback]
  (-> (.fetch js/window url)
      (.then #(.text %))
      (.then #(callback %))
      (.catch (fn [err] (js/console.error err)))))

(defn work []
  (let [c (chan)]
    (do
      (fetch "/" #(go (>! c %)))
      c)))

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:text "Hello world!"}))

(defn print-list [list] (map
                         (fn [list-item]
                           (do
                             (print list-item)
                             list-item))
                         list))

(defn euler-problem [problem-number
                     short-name
                     {question :doc namespace :ns name :name export :export :as meta}
                     answer]
  (let [answer-value (reagent/atom nil)
        working? (reagent/atom false)
        code (reagent/atom nil)
        log (reagent/atom [])
        expanded (reagent/atom false)]
    (fn []
      (let [max-question-lines 20
            should-truncate-question (> (count (clojure.string/split-lines question)) max-question-lines)]
        [:article.euler_problem.question
         {:style {:overflow :hidden
                  :flex "1 1 400px"
                  :margin "0 1em"}}
         [:div.meta
          [:h2
           {:style {:margin-bottom 0}}
           short-name]
          [:a
           {:href (str "https://projecteuler.net/problem=" problem-number) :target :_blank}
           [:h4 {:style {:margin-top 0}} (str "Problem " problem-number)]]]
         (when export
           [:figcaption.instructions
            (str "Function: "
                 (clojure.string/replace (str namespace "." name) #"-" "_"))])
         [:pre.question_text
          {:style {:font-family :serif
                   :color :#666
                   :white-space :pre-wrap
                   :word-wrap :break-word
                   :overflow :scroll
                   :max-height (if @expanded "100%" "20em")}}
          (->> (clojure.string/split-lines question)
               (map clojure.string/trim)
               (clojure.string/join "\n"))]
         [:details
          [:summary "Show JS"]
          [:pre
           {:style {:white-space :pre-wrap
                    :word-wrap :break-word
                    :overflow :hidden}}
           (str answer)]]

         [:div.controls
          #_(when should-truncate-question
              [:div
               [:button {:on-click #(do (reset! expanded (not @expanded)))}
                (if @expanded "Collapse" "Expand")]])
          [:div
           [:button {:disabled @working?
                     :on-click #(do
                                  (reset! working? true)
                                  (reset! answer-value (time (answer)))
                                  (reset! working? false))}
            (cond
              (true? @working?) "Working..."
              :else "Answer")]
           (when (not (nil? @answer-value))
             [:code ":" @answer-value])]]]))))

(defn euler []
  [:div
   [:details
    [:summary "README"]
    [:p "These solutions are written in ClojureScript and compiled using the Google Closure Compiler. So understanding the actual JavaScript source is near impossible."]
    [:code "Function: <global_var>"]
    " names the variable which binds to the solution code. Source-Maps are available for all answers, so you can inspect those variables in your inspector to see the uncompiled ClojureScript source."]
   [:div.questions
    {:style {:display :flex :flex-wrap :wrap :justify-content :space-between :margin "0 -1em"}}
    [euler-problem
     1
     "Multiples of 3 and 5"
     (meta #'problems/problem-1)
     problems/problem-1]
    [euler-problem
     2
     "Even Fibonacci numbers"
     (meta #'problems/problem-2)
     problems/problem-2]
    [euler-problem
     3
     "Largest prime factor"
     (meta #'problems/problem-3)
     problems/problem-3]
    [euler-problem
     4
     "Largest palindrome product"
     (meta #'problems/problem-4)
     problems/problem-4]
    [euler-problem
     5
     "Smallest multiple"
     (meta #'problems/problem-5)
     problems/problem-5]
    [euler-problem
     6
     "Sum square difference"
     (meta #'problems/problem-6)
     problems/problem-6]
    [euler-problem
     7
     "10001st prime"
     (meta #'problems/problem-7)
     problems/problem-7]
    [euler-problem
     8
     "Largest product in a series"
     (meta #'problems/problem-8)
     problems/problem-8]
    [euler-problem
     9
     "Special Pythagorean triplet"
     (meta #'problems/problem-9)
     problems/problem-9]
    [euler-problem
     10
     "Summation of primes"
     (meta #'problems/problem-10)
     problems/problem-10]
    [euler-problem
     11
     "Largest product in a grid"
     (meta #'problems/problem-11)
     problems/problem-11]
    [euler-problem
     12
     "Highly divisible triangular number"
     (meta #'problems/problem-12)
     problems/problem-12]
    [euler-problem
     13
     "Large Sum"
     (meta #'problems/problem-13)
     problems/problem-13]
    [euler-problem
     14
     "Longest Collatz sequence"
     (meta #'problems/problem-14)
     problems/problem-14]]])

(reagent/render-component [euler]
                          (. js/document (getElementById "app")))

(defn on-js-reload []

  (.clear js/console)
  (js/console.clear nil)

  (println "Hey there~!"))
