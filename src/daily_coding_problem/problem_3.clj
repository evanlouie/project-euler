(ns daily-coding-problem.problem-3
  (:require [clojure.test :refer [testing is]]))

(defrecord Node [val left right])

(defn serialize
  "Serialize `node` to a Clojure readable string."
  ([^Node node]
   (pr-str node)))

(defn deserialize
  "Read `tree-as-string` into a Node."
  ([tree-as-string]
   (read-string tree-as-string)))

(defn problem-3
  "This problem was asked by Google.

  Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

  For example, given the following Node class

  class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

  The following test should pass:

  node = Node('root', Node('left', Node('left.left')), Node('right'))
  assert deserialize(serialize(node)).left.left.val == 'left.left'"
  ([^Node node]
   (= node
      (deserialize (serialize node)))))

(testing
 (let [tree (Node. "root"
                   (Node. "left"
                          (Node. "left.left"
                                 nil
                                 nil)
                          (Node. "right"
                                 nil
                                 nil))
                   nil)]
   (testing "Given solution"
     (is (= (-> tree serialize deserialize :left :left :val)
            "left.left")))
   (testing "General"
     (is (= (-> tree serialize deserialize)
            tree)))))
