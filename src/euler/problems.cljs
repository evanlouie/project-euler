(ns euler.problems
  (:require
   [clojure.string]))

;; (defn log [something] (cljs.pprint/pprint something))
;; (defn log-string [something] (with-out-str (log something)))

(defn problem-1
  "If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
  Find the sum of all the multiples of 3 or 5 below 1000."
  []
  (->> (for [x (range 1000)
             :when (or (zero? (mod x 3))
                       (zero? (mod x 5)))]
         x)
       (reduce +)))

(defn problem-2
  "Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
  1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
  By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms."
  []
  (letfn [(fib
            ([n] (fib n 0 1))
            ([n x y] (condp = n
                       0 x
                       1 y
                       (recur (- n 1) y (+ x y)))))]
    (->> (for [x (range)
               :let [fibn (fib x)]
               :when (even? fibn)
               :while (< fibn 4000000)]
           fibn)
         (reduce +))))

(defn problem-3
  "The prime factors of 13195 are 5, 7, 13 and 29.
  What is the largest prime factor of the number 600851475143 ?"
  []
  (letfn
   [(multiple? [n div]
      (zero? (mod n div)))
    (prime-factors
     ([n] (prime-factors n 2 '()))
     ([n candidate acc] (cond (<= n 1) (reverse acc)
                              (multiple? n candidate) (recur (/ n candidate) candidate (cons candidate acc))
                              :else (recur n (inc candidate) acc))))]
    (apply max (prime-factors 600851475143))))

(defn problem-4
  "A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
  Find the largest palindrome made from the product of two 3-digit numbers."
  []
  (letfn
   [(palindrome? ([num] (= (str num)
                           (apply str (reverse (str num))))))]
    (->> (for [x (range 1000)
               y (range 1000)
               :let [product (* x y)]
               :when (palindrome? product)]
           product)
         (apply max))))

(defn problem-5
  "2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
  What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?"
  []
  (let [factors (fn [n] (into (sorted-set)
                              (reduce concat
                                      (for [x (range 1 (inc (Math/sqrt n)))
                                            :when (zero? (rem n x))]
                                        [x (/ n x)]))))
        prime? (memoize (fn [n] (zero? (count (factors n)))))
        primes (for [x (range)
                     :when (prime?)]
                 x)
        set-upto (memoize (fn [n] (into (sorted-set)
                                        (range 1 (inc n)))))
        divisible_upto? (fn  [divisor n] (do
                                           (every?
                                            (partial contains? (factors n))
                                            (set-upto divisor))))]
    (->> (iterate (partial + 20) 20)
         (map (fn [n] (do (println n) n)))
         (filter (partial divisible_upto? 20))
         (first))))

(defn problem-6
  "The sum of the squares of the first ten natural numbers is,
  12 + 22 + ... + 102 = 385
  The square of the sum of the first ten natural numbers is,
  (1 + 2 + ... + 10)2 = 552 = 3025
  Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
  Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum."
  []
  (letfn [(sum-of-squares ([up-to] (->> (range 1 (inc up-to))
                                        (map (fn [n] (* n n)))
                                        (reduce +))))
          (square-of-sum ([up-to] (Math/pow
                                   (->> (range 1 (inc up-to))
                                        (reduce +))
                                   2)))]
    (- (square-of-sum 100) (sum-of-squares 100))))

(defn problem-7
  "By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
  What is the 10 001st prime number?"
  []
  (letfn [(isPrime?
            ([n] (isPrime? n 2))
            ([n start] (cond
                         (> start (Math/sqrt n)) (> n 1)
                         (< (mod n start) 1) false
                         :else (recur n (inc start)))))]
    (->> (for [x (range)
               :when (isPrime? x)]
           x)
         (take 10001)
         (last))))

(defn problem-8
  "The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.
  73167176531330624919225119674426574742355349194934
  96983520312774506326239578318016984801869478851843
  85861560789112949495459501737958331952853208805511
  12540698747158523863050715693290963295227443043557
  66896648950445244523161731856403098711121722383113
  62229893423380308135336276614282806444486645238749
  30358907296290491560440772390713810515859307960866
  70172427121883998797908792274921901699720888093776
  65727333001053367881220235421809751254540594752243
  52584907711670556013604839586446706324415722155397
  53697817977846174064955149290862569321978468622482
  83972241375657056057490261407972968652414535100474
  82166370484403199890008895243450658541227588666881
  16427171479924442928230863465674813919123162824586
  17866458359124566529476545682848912883142607690042
  24219022671055626321111109370544217506941658960408
  07198403850962455444362981230987879927244284909188
  84580156166097919133875499200524063689912560717606
  05886116467109405077541002256983155200055935729725
  71636269561882670428252483600823257530420752963450
  Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?"
  []
  (let [big-number-string "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450"
        number-list (for [x (seq big-number-string)
                          :let [number (int x)]]
                      number)]
    (->> number-list
         (partition-all 13 1)
         (map (fn [list] (reduce * list)))
         (apply max))))

(defn problem-9
  "A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
  a2 + b2 = c2
  For example, 32 + 42 = 9 + 16 = 25 = 52.
  There exists exactly one Pythagorean triplet for which a + b + c = 1000.
  Find the product abc."
  []
  (let [triplets
        (for [a (range 1 1000)
              b (range (inc a) 1000)
              :let [c-squared (+ (Math/pow b 2) (Math/pow a 2))
                    c (Math/sqrt c-squared)
                    triplet [a b c]
                    sum (reduce + [a b c])
                    a-squared (Math/pow a 2)
                    b-squared (Math/pow b 2)]
              :when (and
                     (and (> c b) (> b a))
                     (= (+ a-squared b-squared)
                        c-squared))]
          (do
            (println triplet)
            triplet))]
    (->> triplets
         (filter (fn [list] (= 1000 (reduce + list))))
         (first)
         (reduce *))))

(defn problem-10
  "The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
  Find the sum of all the primes below two million."
  []
  (letfn [(prime?
            ([n] (prime? n 2))
            ([n start] (cond
                         (> start (Math/sqrt n)) (> n 1)
                         (< (mod n start) 1) false
                         :else (recur n (inc start)))))]
    (->> (for [n (range)
               :when (prime? n)
               :while (< n 2000000)]
           n)
         (reduce +))))

(defn problem-11
  "In the 20×20 grid below, four numbers along a diagonal line have been marked in red.
  08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08
  49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00
  81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65
  52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91
  22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80
  24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50
  32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70
  67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21
  24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72
  21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95
  78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92
  16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57
  86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58
  19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40
  04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66
  88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69
  04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36
  20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16
  20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54
  01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48
  The product of these numbers is 26 × 63 × 78 × 14 = 1788696.
  What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 20×20 grid?"
  []
  (let [matrix-string "08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08\n  49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00\n  81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65\n  52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91\n  22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80\n  24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50\n  32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70\n  67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21\n  24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72\n  21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95\n  78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92\n  16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57\n  86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58\n  19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40\n  04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66\n  88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69\n  04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36\n  20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16\n  20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54\n  01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48"
        number-list (->> (clojure.string/split-lines matrix-string)
                         (map (fn [row] (clojure.string/trim row)))
                         (map (fn [row] (->> (clojure.string/split row #" ")
                                             (map (fn [string] (int string)))
                                             (filter number?))))
                         (flatten))
        number-matrix (partition 20 number-list)
        rows (for [y (range 0 20)
                   :let [row (nth number-matrix y)]]
               row)
        columns (for [x (range 0 20)
                      :let [column (take-nth 20 (drop x number-list))]]
                  column)
        diagonal-lr-4s (->> (for [x (range 0 (reduce inc number-list))
                                  :let [diagonal (take-nth 21 (drop x number-list))]
                                  :when (<= (mod x 20) 16)]
                              (partition 4 1 diagonal))
                            (apply concat))
        diagonal-rl-4s (->> (for [x (range 0 (reduce inc number-list))
                                  :let [diagonal (take-nth 19 (drop x number-list))]
                                  :when (>= (mod x 20) 3)]
                              (partition 4 1 diagonal))
                            (apply concat))
        horizontal-4s (->> (for [row rows
                                 :let [fours (partition 4 1 row)]]
                             fours)
                           (apply concat))
        vertical-4s (->> (for [column columns
                               :let [fours (partition 4 1 column)]]
                           fours)
                         (apply concat))
        all-4s (->> (concat diagonal-lr-4s diagonal-rl-4s horizontal-4s vertical-4s))
        products (->> all-4s
                      (map (fn [four] (reduce * four))))]
    (apply max products)))

(defn problem-12
  "the sequence of triangle numbers is generated by adding the natural numbers. so the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. the first ten terms would be:
  1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
  let us list the factors of the first seven triangle numbers:
  1: 1
  3: 1,3
  6: 1,2,3,6
  10: 1,2,5,10
  15: 1,3,5,15
  21: 1,3,7,21
  28: 1,2,4,7,14,28
  we can see that 28 is the first triangle number to have over five divisors.
  what is the value of the first triangle number to have over five hundred divisors?"
  []
  (let [triangle-numbers (for [n (range)
                               :let [sum (reduce + (range 0 n))]
                               :when (> sum 0)]
                           sum)
        factors (fn [n] (into (sorted-set)
                              (reduce concat
                                      (for [x (range 1 (inc (Math/sqrt n)))
                                            :when (zero? (rem n x))]
                                        [x (/ n x)]))))]
    (->> triangle-numbers
         (filter (fn [triangle-number]
                   (let [factor-list (factors triangle-number)
                         list-length (reduce (fn [count n] (inc count)) 0 factor-list)]
                     (do
                       (println triangle-number ":" list-length)
                       (< 500 list-length)))))
         (first))))

(defn problem-13
  []
  (let [number-string "37107287533902102798797998220837590246510135740250\n46376937677490009712648124896970078050417018260538\n74324986199524741059474233309513058123726617309629\n91942213363574161572522430563301811072406154908250\n23067588207539346171171980310421047513778063246676\n89261670696623633820136378418383684178734361726757\n28112879812849979408065481931592621691275889832738\n44274228917432520321923589422876796487670272189318\n47451445736001306439091167216856844588711603153276\n70386486105843025439939619828917593665686757934951\n62176457141856560629502157223196586755079324193331\n64906352462741904929101432445813822663347944758178\n92575867718337217661963751590579239728245598838407\n58203565325359399008402633568948830189458628227828\n80181199384826282014278194139940567587151170094390\n35398664372827112653829987240784473053190104293586\n86515506006295864861532075273371959191420517255829\n71693888707715466499115593487603532921714970056938\n54370070576826684624621495650076471787294438377604\n53282654108756828443191190634694037855217779295145\n36123272525000296071075082563815656710885258350721\n45876576172410976447339110607218265236877223636045\n17423706905851860660448207621209813287860733969412\n81142660418086830619328460811191061556940512689692\n51934325451728388641918047049293215058642563049483\n62467221648435076201727918039944693004732956340691\n15732444386908125794514089057706229429197107928209\n55037687525678773091862540744969844508330393682126\n18336384825330154686196124348767681297534375946515\n80386287592878490201521685554828717201219257766954\n78182833757993103614740356856449095527097864797581\n16726320100436897842553539920931837441497806860984\n48403098129077791799088218795327364475675590848030\n87086987551392711854517078544161852424320693150332\n59959406895756536782107074926966537676326235447210\n69793950679652694742597709739166693763042633987085\n41052684708299085211399427365734116182760315001271\n65378607361501080857009149939512557028198746004375\n35829035317434717326932123578154982629742552737307\n94953759765105305946966067683156574377167401875275\n88902802571733229619176668713819931811048770190271\n25267680276078003013678680992525463401061632866526\n36270218540497705585629946580636237993140746255962\n24074486908231174977792365466257246923322810917141\n91430288197103288597806669760892938638285025333403\n34413065578016127815921815005561868836468420090470\n23053081172816430487623791969842487255036638784583\n11487696932154902810424020138335124462181441773470\n63783299490636259666498587618221225225512486764533\n67720186971698544312419572409913959008952310058822\n95548255300263520781532296796249481641953868218774\n76085327132285723110424803456124867697064507995236\n37774242535411291684276865538926205024910326572967\n23701913275725675285653248258265463092207058596522\n29798860272258331913126375147341994889534765745501\n18495701454879288984856827726077713721403798879715\n38298203783031473527721580348144513491373226651381\n34829543829199918180278916522431027392251122869539\n40957953066405232632538044100059654939159879593635\n29746152185502371307642255121183693803580388584903\n41698116222072977186158236678424689157993532961922\n62467957194401269043877107275048102390895523597457\n23189706772547915061505504953922979530901129967519\n86188088225875314529584099251203829009407770775672\n11306739708304724483816533873502340845647058077308\n82959174767140363198008187129011875491310547126581\n97623331044818386269515456334926366572897563400500\n42846280183517070527831839425882145521227251250327\n55121603546981200581762165212827652751691296897789\n32238195734329339946437501907836945765883352399886\n75506164965184775180738168837861091527357929701337\n62177842752192623401942399639168044983993173312731\n32924185707147349566916674687634660915035914677504\n99518671430235219628894890102423325116913619626622\n73267460800591547471830798392868535206946944540724\n76841822524674417161514036427982273348055556214818\n97142617910342598647204516893989422179826088076852\n87783646182799346313767754307809363333018982642090\n10848802521674670883215120185883543223812876952786\n71329612474782464538636993009049310363619763878039\n62184073572399794223406235393808339651327408011116\n66627891981488087797941876876144230030984490851411\n60661826293682836764744779239180335110989069790714\n85786944089552990653640447425576083659976645795096\n66024396409905389607120198219976047599490197230297\n64913982680032973156037120041377903785566085089252\n16730939319872750275468906903707539413042652315011\n94809377245048795150954100921645863754710598436791\n78639167021187492431995700641917969777599028300699\n15368713711936614952811305876380278410754449733078\n40789923115535562561142322423255033685442488917353\n44889911501440648020369068063960672322193204149535\n41503128880339536053299340368006977710650566631954\n81234880673210146739058568557934581403627822703280\n82616570773948327592232845941706525094512325230608\n22918802058777319719839450180888072429661980811197\n77158542502016545090413245809786882778948721859617\n72107838435069186155435662884062257473692284509516\n20849603980134001723930671666823555245252804609722\n53503534226472524250874054075591789781264330331690"
        numbers (->> (clojure.string/split-lines number-string)
                     (map clojure.string/trim))
        sum (reduce + numbers)]
    (letfn [(add-list-columns
              ([x y] (add-list-columns x y 0 '()))
              ([x y carry sum] (cond
                                 (and (nil? (first x)) (nil? (first y))) (reverse (if (zero? carry) sum (conj sum carry)))
                                 :else (let [x-curr (if (< 0 (count x)) (first x) 0)
                                             y-curr (if (< 0 (count y)) (first y) 0)
                                             x-rest (rest x)
                                             y-rest (rest y)
                                             curr-sum (mod (+ x-curr y-curr carry) 10)
                                             curr-carry (quot (+ x-curr y-curr carry) 10)]
                                         (recur x-rest
                                                y-rest
                                                curr-carry
                                                (conj sum curr-sum))))))]
      (->> (for [number numbers
                 :let [number-list (map int (clojure.string/split (str number) ""))
                       reversed-number-list (reverse number-list)]]
             number-list)
           (map reverse)
           (reduce add-list-columns)
           (reverse)
           (take 10)))))

(defn problem-14
  []
  (letfn [(collatz
            ([n] (collatz n []))
            ([n sequence] (cond
                            (= 1 n) (conj sequence 1)
                            (even? n) (recur (/ n 2) (conj sequence n))
                            (odd? n) (recur (+ (* 3 n) 1) (conj sequence n)))))]
    (->> (iterate inc 1)
         (map (fn [n] (let [seq (collatz n)]
                        (do
                          (println n ":" (count seq))
                          seq))))
         (sort-by count)
         (last))))
