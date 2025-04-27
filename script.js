// 🔄 Background Image Rotation (Same as Before) 
const images = ['two.webp', 'logo.png', 'imj.jpg', 'imn.jpg'];
let index = 0;
const entryEffects = ["fade-in", "slide-in", "zoom-in"];
const exitEffects = ["fade-out", "slide-out", "zoom-out"];

function changeBackground() {
    const body = document.body;
    const newBg = document.createElement("div");
    newBg.className = "bg-transition";
    newBg.style.backgroundImage = `url('${images[index]}')`;

    const entryEffect = entryEffects[Math.floor(Math.random() * entryEffects.length)];
    const exitEffect = exitEffects[Math.floor(Math.random() * exitEffects.length)];

    newBg.classList.add(entryEffect);
    body.appendChild(newBg);

    setTimeout(() => {
        newBg.classList.remove(entryEffect);
        newBg.classList.add(exitEffect);
        setTimeout(() => { newBg.remove(); }, 1500);
    }, 4000);

    index = (index + 1) % images.length;
}
setInterval(changeBackground, 5000);
changeBackground();

// ✅ Subjects and Their Specific Time Limits
const subjects = {
    "Math101": [
            {
              question: "The cardinality of the set A= {1,1,2,3,3,3,4,4,5,6,7,7}",
              options: ["12", "7", "5", "6"],
              correct: "7"
            },
            {
                question: "Given that X = {x: 3 < x < 6} and Y = {x: 4 ≤ x ≤ 8}, find X ∩ Y",
                options: ["{4,5}", "{5,6}", "{}", "{4,5,6,7,8}"],
                correct: "{4,5}"
              },
            {
              question: "If µ= {1,2,3,…,10}, A= {odd numbers up to 9}, B= {numbers less than 9}, find n(A∪B)",
              options: ["8", "7", "13", "9"],
              correct: "8"
            },
            {
              question: "All inhabitants of a certain country speak either French and English. If 60% speak French and 50% speak English, what percentage of them speak both languages?",
              options: ["70%", "110%", "10%", "30%"],
              correct: "10%"
            },
            {
              question: "If A= {all perfect squares less than 50}, B= {all even numbers from 1-30}, find (A∩B)",
              options: ["{4,6}", "{2,4,16,36}", "{16,36}", "{4,16,25,36}"],
              correct: "{4,6}"
            },
            {
              question: "If Y=2+4i, Z=6-7i, find Y/Z",
              options: ["-(16/85 - 38i/85)", "-(16/85 + 38i/85)", "16/85 + 38i/85", "16/85 – 38i/85"],
              correct: "-(16/85 - 38i/85)"
            },
            {
              question: "Evaluate (2-j)/(2-j)",
              options: ["2-j", "-1", "1", "-2+j"],
              correct: "1"
            },
            {
              question: "Find the real part of (3+2i)/(2-2i)",
              options: ["1/4 + 5i/5", "1/4", "-1/4", "1/4 – 5i/4"],
              correct: "1/4"
            },
            {
              question: "Simplify i^4 (2+i) + i^6 (1-i) + i^8 (3+i)",
              options: ["0", "3i", "1+3i", "4+3i"],
              correct: "0"
            },
            {
              question: "The modulus and argument of 5+10i are",
              options: ["√5,64", "√5,63.43", "5√5,63.43", "5,64.43"],
              correct: "5√5,63.43"
            },
                {
                  question: "Find the Cartesian form of (√3 + i)^4",
                  options: ["-8+8i√3", "-8-8i√3", "8+8i√3", "8-8i√3"],
                  correct: "-8-8i√3"
                },
                {
                  question: "Find the principal argument of -1 – i√3",
                  options: ["π/6", "2π/3", "-π/3", "-2π/3"],
                  correct: "-2π/3"
                },
                {
                  question: "If ω is a cube root of unity, evaluate (1+ω)^2",
                  options: ["ω^2", "2ω", "-ω", "ω"],
                  correct: "-ω"
                },
                {
                  question: "If log3(x+1) – log3(x-1) = log3 2, find x",
                  options: ["3", "2", "4", "5"],
                  correct: "3"
                },
                {
                  question: "Find the value of log10(4x+3) – log10(3x+1) = log10 2",
                  options: ["1", "0", "-1", "2"],
                  correct: "1"
                },
                {
                  question: "Simplify log2 18 - 2log2 3 + log2 4",
                  options: ["log2 6", "log2 4", "log2 2", "log2 8"],
                  correct: "log2 2"
                },
                {
                  question: "Solve for x in 5^(x+1) = 25",
                  options: ["1", "2", "0", "3"],
                  correct: "1"
                },
                {
                  question: "Find the solution to log3 (x-2) + log3 (x+2) = log3 5",
                  options: ["x = ±√5", "x = 2√5", "x = -√5", "x = √5"],
                  correct: "x = ±√5"
                },
                {
                  question: "If log(x^2 – 1) – log(x-1) = log 2, find x",
                  options: ["1", "3", "2", "-1"],
                  correct: "2"
                },
                {
                  question: "Find the solution to the equation 2^(x+2) = 8",
                  options: ["x = 1", "x = 0", "x = -1", "x = 2"],
                  correct: "x = 1"
                },
  {
    question: "Rationalize 12/√24-√6",
    options: ["2√6", "3√6", "√6", "4√2"],
    correct: "2√6"
  },
  {
    question: "Solve (√3 + 1/√3)²",
    options: ["√3", "16/3", "16√3/3", "16√3"],
    correct: "16/3"
  },
  {
    question: "Find A if log A = 1/6 log64",
    options: ["-½", "½", "-2", "2"],
    correct: "2"
  },
  {
    question: "Simplify (0.064)^-1/3",
    options: ["¼", "4", "5/2", "2/5"],
    correct: "4"
  },
  {
    question: "Evaluate √160x^-1/10x^-10",
    options: ["4x^-3", "4x", "4x³", "4x^-1"],
    correct: "4x^-3"
  },
  {
    question: "Evaluate 2log81 base √3 = 3",
    options: ["16", "4", "½", "8"],
    correct: "4"
  },
  {
    question: "Find the value of x in 2^4x+1 / 2^2x-2 = 16^x+2 / 8^x",
    options: ["9", "5", "7", "-9"],
    correct: "9"
  },
  {
    question: "Simplify Log 81 base √3 + Log 64 base 2^1/3 - Log 125 base 5^1/4",
    options: ["13/4", "14", "0", "7/2"],
    correct: "13/4"
  },
  {
    question: "Solve for the value of x in 4^x -6(2^x)+8=0",
    options: ["2 and 4", "-2 and 4", "1 and 2", "1 and -2"],
    correct: "1 and -2"
  },
  {
    question: "Evaluate Log 256 base 4 + Log 729 base 9 /Log 3125 base 25",
    options: ["6", "14/5", "34/25", "6/5"],
    correct: "6"
  },
    {
      question: "Using Pascal's triangle, expand (1 + 0.01)^4",
      options: ["1.004060401", "1.0460401", "10.04060401", "1.04060401"],
      correct: "1.04060401"
    },
    {
      question: "Simplify (2t + 3/t)^4",
      options: [
        "16t^4 + 96t² + 216/t² + 216/t³ + 81/t^4",
        "16t^4 + 96t² + 216t² + 216/t³ + 81/t^4",
        "16t^4 + 96t² + 216 + 216/t² + 81/t^4",
        "16t^4 + 96t² + 216t/t² + 216t²/t³ + 81/t^4"
      ],
      correct: "16t^4 + 96t² + 216/t² + 216/t³ + 81/t^4"
    },
    {
      question: "Find the eighth term of the expansion of the binomial expansion (2 – x/3)^12",
      options: [
        "25344x^7 / 2187",
        "792x^7 / 2187",
        "25344x^8 / 2187",
        "25344x^6 / 2187"
      ],
      correct: "25344x^7 / 2187"
    },
    {
      question: "Find the coefficient of x^6 in (1/x² - x)^18",
      options: ["21600", "2170", "2110", "2160"],
      correct: "2160"
    },
    {
      question: "Expand (10 + 0.001)^5",
      options: ["100501.01", "100050.01", "10050.01", "100050.001"],
      correct: "100050.01"
    },
    {
      question: "Solve the quadratic equation: x²-2x-8=0",
      options: ["-2 or 4", "2 or -4", "2 and 4", "-2 or -4"],
      correct: "-2 or 4"
    },
    {
      question: "Use the general formula to solve 2x²-2x-6=0",
      options: ["1±√-13 / 2", "1±√13 / 2", "1±√3", "1±√-13"],
      correct: "1±√13 / 2"
    },
    {
      question: "Solve the equation 2x²+7x-24=0",
      options: ["-7±√241 / 4", "7±√241 / 4", "-7±√241i / 4", "7±√241i / 4"],
      correct: "7±√241 / 4"
    },
    {
      question: "Solve the equation x^4 -3x² +2=0",
      options: ["1 or 2", "1 or √2", "±1 or ±2", "-1 or √2"],
      correct: "±1 or ±2"
    },
    {
      question: "Solve 5x²-2x-2=0",
      options: ["-1+√11 / 5", "-1±√11 / 5", "1+√11 / 5", "1±√11 / 5"],
      correct: "-1±√11 / 5"
    },
        {
          question: "______ can be referred to as a rule that assigns an element of a set to a unique element of another set",
          options: ["Set", "Domain", "Function", "Mapping"],
          correct: "Function"
        },
        {
          question: "A function is a mapping whose co-domain is a set of ________",
          options: ["Object", "Numbers", "Figure", "Alphabet"],
          correct: "Numbers"
        },
        {
          question: "If f(x) = x² + 2x + 3, find √[f(4) - f(3)]",
          options: ["9", "3", "5", "12"],
          correct: "3"
        },
        {
          question: "If f(x) = 2x + 1 and g(x) = x², find fog",
          options: ["2x² + 1", "(2x + 1)²", "2x + 1", "(2x + 1)³"],
          correct: "2x² + 1"
        },
        {
          question: "If f(x) = 2x + 1, find f(2) and f(4)",
          options: ["6 and 8", "3 and 10", "5 and 9", "2 and 6"],
          correct: "5 and 9"
        },
            {
              question: "Determine AB if A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] and B = [[1, 0], [2, 1], [4, 1]]",
              options: ["[[19, 22], [43, 50]]", "[[23, 26], [53, 60]]", "[[15, 18], [35, 40]]", "[[12, 14], [30, 35]]"],
              correct: "[[19, 22], [43, 50]]"
            },
            {
              question: "Solve the equation x + 2y - 3z = 3, 2x - y - z = 11, 3x + 2y + z = -5",
              options: [
                "x = 2, y = -4, z = -3",
                "x = 2, y = 4, z = 3",
                "x = -2, y = -4, z = -3",
                "x = -2, y = 4, z = 3"
              ],
              correct: "x = 2, y = -4, z = -3"
            },
            {
              question: "If A = [[1, 4, 5], [2, 0, 8]], find the transpose of A",
              options: [
                "[[1, 4, 5], [2, 0, 8],]",
                "[[2, 1,], [0, 4], [8, 9]]",
                "[[1, 2], [4, 3], [5,8]]",
                "[[5, 8], [4, 0], [1, 3]]"
              ],
              correct: "[[1, 2], [4, 3], [5,8]]"
            },
            {
              question: "Find the determinant of A = [[2, -3, -3], [-1, -1, -11],  [2, 2, 5]]",
              options: ["-122", "40", "-60", "60"],
              correct: "60"
            },
            {
              question: "Evaluate 3A - 3B if A = [[1, 4, 2], [3, 4]] and B = [[5, 6], [7, 8]]",
              options: [
                "[[-12, -12], [-18, -18]]",
                "[[-12, -12], [-21, -21]]",
                "[[-15, -15], [-18, -18]]",
                "[[-18, -18], [-21, -21]]"
              ],
              correct: "[[-12, -12], [-18, -18]]"
            }
    ],
    "Phy 101": [
            {
              question: "The derived dimension [ML-1T-2] is a dimension of",
              options: ["Force", "Momentum", "Pressure", "Work", "Power"],
              correct: "Force"
            },
            {
              question: "The derived dimension [ML2T-2] is a dimension of",
              options: ["Force", "Impulse", "Pressure", "Work", "Speed"],
              correct: "Work"
            },
            {
              question: "Which of the following quantities has the same unit as the kilowatt/hour?",
              options: ["Force * acceleration", "Force * velocity", "Force * distance", "Force * time"],
              correct: "Force * velocity"
            },
            {
              question: "Convert the speed 108km/hr to units in m/s.",
              options: ["90m/s", "45m/s", "30m/s", "60m/s"],
              correct: "30m/s"
            },
            {
              question: "Convert the speed 180km/hr to units in m/s.",
              options: ["100m/s", "50m/s", "150m/s", "60m/s"],
              correct: "50m/s"
            },
            {
              question: "Change the speed 0.2 cm/s to units of kilometers per year.",
              options: ["4.2 km/y", "63.2 km/y", "36.4 km/y", "24.5 km/y"],
              correct: "63.2 km/y"
            },
            {
              question: "Which of the following relates the period of vibration (T) with the following radius a, density p and surface tension γ.",
              options: [
                "T = ka3/2p1/2 γ-1/2",
                "T = ka3/2p1/2 γ1/2",
                "T = ka-3/2p1/2 γ-1/2",
                "T = ka3/2p1/2 γ-3/2",
                "T = ka1/2p1/2 γ-1/2"
              ],
              correct: "T = ka3/2p1/2 γ-1/2"
            },
            {
              question: "A girl walks 12m northwards, 5m eastwards and 7m southwards. Her total displacement is",
              options: ["5m, north", "5m, east", "7.07m, S45oW", "7.07m, N45oE"],
              correct: "7.07m, N45oE"
            },
            {
              question: "A boy walks 10m due west and then 10m due south. His displacement is",
              options: ["10m, S30oW", "10m, S60oW", "10√2 m, S45oW", "10√2 m, S60oW"],
              correct: "10√2 m, S45oW"
            },
            {
              question: "A man walks 5km south and then 3km in the direction 60o west of south. His distance from the starting point is",
              options: ["7.00km", "7.50km", "8.00km", "10.72km"],
              correct: "7.00km"
            },
            {
              question: "Two perpendicular forces have a resultant of 13N. If one of the forces is 5N, the other force is",
              options: ["8N", "9N", "12N", "18N"],
              correct: "12N"
            },
            {
              question: "Two forces, 12N and 16N inclined at an angle ∅ to each other, have a resultant which is parallel to the 16N force. The value of cos∅ is",
              options: ["1.0", "¾", "½", "0"],
              correct: "1.0"
            },
            {
              question: "A stone of mass 20kg is thrown vertically upward to attain a maximum height of 20m. Calculate the initial speed with which the stone was thrown",
              options: ["40m/s", "20m/s", "30m/s", "60m/s"],
              correct: "20m/s"
            },
            {
              question: "A car starts from rest and travels 250m in 25s, at constant acceleration. Calculate the final speed of the car.",
              options: ["20 m/s", "40 m/s", "2 m/s", "60 m/s"],
              correct: "20 m/s"
            },
            {
              question: "A ball is thrown vertically upward from the ground with a speed of 20m/s. How long does it take to reach its highest point?",
              options: ["2.4s", "2.0s", "2.5s", "2.4s"],
              correct: "2.4s"
            },
            {
              question: "A man runs a distance of 1.0km in 5 minutes. His average speed is",
              options: ["20.0 m/s", "16.7 m/s", "3.3 m/s", "0.3 m/s"],
              correct: "3.3 m/s"
            },
            {
              question: "A body accelerates uniformly from rest at 3 m/s². Its velocity after travelling a distance of 24m is",
              options: ["144 m/s", "72 m/s", "36 m/s", "12 m/s"],
              correct: "36 m/s"
            },
            {
              question: "The time taken for the body in question 2 to cover a distance of 24m is",
              options: ["4s", "8s", "16s", "32s"],
              correct: "4s"
            },
            {
              question: "The acceleration of a body which slides down freely on a smooth plane inclined at 60° to the horizontal is",
              options: ["5.00 m/s²", "7.50 m/s²", "8.66 m/s²", "10.00 m/s²"],
              correct: "5.00 m/s²"
            },
            {
              question: "A car decelerates with 10m/s² from 50 m/s to 20 m/s. Calculate the distance travelled by the car.",
              options: ["150m", "105m", "10m", "75m"],
              correct: "105m"
            },
            {
              question: "Calculate the time taken and the distance covered by a train moving with a velocity of 15m/s to accelerate uniformly at the rate of 2 m/s² to reach a velocity of 20 m/s",
              options: ["2.5s", "17.5s", "13.5s", "3.5s"],
              correct: "2.5s"
            },
            {
              question: "Calculate the distance covered in the above question",
              options: ["23.75m", "43.75m", "33.75m", "53.75m"],
              correct: "43.75m"
            },
            {
              question: "A ball is thrown vertically upwards from the ground with an initial velocity of 20 m/s. The maximum height reached by the ball is",
              options: ["7.5m", "10.0m", "20.0m", "22.5m"],
              correct: "20.0m"
            },
            {
              question: "The time spent in the air by the ball in the above question is",
              options: ["2s", "4s", "5s", "10s"],
              correct: "4s"
            },
            {
              question: "A fruit is dropped from the top of a tree 20m tall. The time it takes the fruit to reach the ground is",
              options: ["5.0s", "4.0s", "2.5s", "2.0s"],
              correct: "2.0s"
            },
            {
              question: "How much work is done when a bucket of mass 2kg with 20kg of water in it is pulled up from the bottom of a well 10m deep",
              options: ["901.0J", "1121J", "2200J", "2156J"],
              correct: "2156J"
            },
            {
              question: "A force of 56N acts horizontally on a stationary mass of 2kg for 4s. The kinetic energy gained by mass is",
              options: ["12J", "24J", "49J", "144J"],
              correct: "49J"
            }
          ],
          "Mat 113": [
              { question: "Find the distance between the two points (a + b, a – b) and (b – a, a + b)", options: ["2√(a² + b²)", "√(a² + b²)", "2√(a² − b²)", "2(a² + b²)"], correct: "2√(a² + b²)" },
              { question: "Find the distance between the two points (a, b) and (-a, -b)", options: ["2√(a² + b²)", "√(a² + b²)", "2√(a² − b²)", "2(a² + b²)"], correct: "2√(a² + b²)" },
              { question: "What type of triangle is formed by the points X(5, -6), Y(-3, 0) and Z(-1, 2)", options: ["Equilateral", "Right angle", "Scalene", "Isosceles"], correct: "Right angle" },
              { question: "Which of the following gives the correct formula for finding the distance between the two points S(a, b) and T(c, d)?", options: ["I only", "III only", "III and IV only", "I, II, III and IV", "V only", "I, II, III and IV only", "I, III and IV only"], correct: "III only" },
              { question: "A point on the circumference of a circle and its center are of coordinates (-2, -1) and (-1, 3) respectively. What is the length of the diameter of the circle?", options: ["√13", "10", "√5", "2√5"], correct: "2√5" },
              { question: "What type of quadrilateral is formed by the points P(2, -1), Q(-1, 3), R(3, 6) and S(6,2)", options: ["Square", "Rectangle", "Parallelogram", "Circle"], correct: "Parallelogram" },
              { question: "The distance between the points (a, 2a) and (-3a, a) is ____", options: ["a√17", "a√5", "a√13", "5a"], correct: "a√17" },
              { question: "The coordinates of the midpoint of the line joining the points A(5, 6) and B(11, 2) is ___", options: ["(3, 2)", "(8, 4)", "(-3, 2)", "(16, 8)"], correct: "(8, 4)" },
              { question: "If P is the point (3, 4) and the reflections of P in Ox and Oy are A and B respectively. Find the distance AB.", options: ["5", "10", "20", "25"], correct: "10" },
              { question: "If the distance between the points (x, 3) and (-x, 2) is 5. Find x.", options: ["6", "2.5", "√6", "√3"], correct: "√6" },
              { question: "Find the distance between the points (3, 1) and (2, 1)", options: ["√5", "1", "√29", "5"], correct: "1" },
              { question: "Find the distance between (1, -4) and (-4, 3)", options: ["√10", "√26", "√58", "√74"], correct: "√74" },
              { question: "The perpendicular bisector of line PQ cuts line PQ at ___. P(-3, 1/2), Q(4, 5)", options: ["(1/2, 11/2)", "(-7/2, -9/4)", "(1/2, 11/4)", "(7/2, 9/4)"], correct: "(1/2, 11/4)" },
              { question: "If M(4, q) is the midpoint of the line joining L(p, -2) and N(q, p). Find the values of p and q.", options: ["2 and 4", "3 and 1", "5 and 3", "6 and 2"], correct: "2 and 4" },
              { question: "The midpoint of points M(4, -1) and N(x, y) is P(3, -4). Find the coordinates (2x, x + 2y).", options: ["(2, -7)", "(4, -10)", "(4, -12)", "(-12, 4)"], correct: "(4, -12)" },
              { question: "Find the angle of the slope of a line if the gradient is 3/5", options: ["30.90", "30.96", "59.04", "71.57", "78.69"], correct: "59.04" },
              { question: "What is the angle of the slope of line joining points (4, -3) and (6,8)", options: ["120", "110", "83", "85", "79.7"], correct: "79.7" },
              { question: "Which of the following represent the slope if the acute angle between a line and x-axis is Φ.", options: ["sinΦ", "cosΦ", "tanΦ", "cotΦ"], correct: "tanΦ" },
              { question: "If m = (increase in x)/(increase in y), which of the following is equivalent to m [where α is the angle between the line and x-axis].", options: ["sinα", "cosα", "tanα", "cotα"], correct: "cotα" },
              { question: "The point (1, -2) is located on the graph of a linear function. If y increases by 3 units for each unit increase in x, the equation of the function is", options: ["3y – x = 5", "x – 3y = 5", "y – 3x = -5", "y – 3x = 5"], correct: "y – 3x = -5" },
              { question: "The slope of a line perpendicular to the line joining (1, 1) and (2, -3) is", options: ["4", "1", "1/4", "-1/4"], correct: "1/4" },
              { question: "Find the slope of the line perpendicular to the line joining (1, -3) and (-2, 2)", options: ["3/5", "-3/5", "5/3", "-5/3"], correct: "3/5" },
              { question: "Find the slope of a line perpendicular to the line joining A(3, 2) and B(6, -4)", options: ["1/2", "-1/2", "2", "-2"], correct: "-1/2" },
              { question: "Which of the following gives the equation of a straight line when slope and one point are known?", options: ["y = mx", "y = mx + b", "y – y1 = m(x – x1)", "y – mx = c"], correct: "y – y1 = m(x – x1)" },
              { question: "The slope of a line perpendicular to a line of slope m is ___", options: ["m", "-1/m", "-m", "1/m"], correct: "-1/m" },
              { question: "The slope of a line perpendicular to the line joining (4, 2) and (3, 1) is", options: ["-1", "1", "2", "-2"], correct: "-1" },
              { question: "Find the equation of the line passing through (1, -1) and perpendicular to the line y = 2x + 1", options: ["y = -1/2x - 1/2", "y = 1/2x - 3/2", "y = -2x - 1", "y = 2x + 1"], correct: "y = -1/2x - 1/2" },
              { question: "Find the slope of a line that is perpendicular to the line 2x – 5y = 10", options: ["2/5", "-2/5", "5/2", "-5/2"], correct: "2/5" },
              { question: "Find the equation of a line through (3, -2) and perpendicular to the line 2x – y = 5", options: ["y + 2 = -1/2(x – 3)", "y + 2 = 1/2(x – 3)", "y – 2 = -1/2(x – 3)", "y – 2 = 1/2(x – 3)"], correct: "y + 2 = -1/2(x – 3)" },
              { question: "The equation of a line with slope 4 and y-intercept 6 is ___", options: ["y = 4x – 6", "y = 6x + 4", "y = 4x + 6", "y = 6x – 4"], correct: "y = 4x + 6" },
              { question: "The equation of a line passing through the point (3, 4) and slope m is ___", options: ["y – 4 = m(x + 3)", "y – 4 = m(x – 3)", "y + 4 = m(x – 3)", "y + 4 = m(x + 3)"], correct: "y – 4 = m(x – 3)" },
              { question: "The gradient of a line joining the point (-3, 4) and (2, 1) is ___", options: ["3/5", "-3/5", "-5/3", "5/3"], correct: "-3/5" },
              { question: "Find the equation of the line that has slope 3 and passes through the point (4, 2)", options: ["y – 2 = 3(x + 4)", "y – 2 = 3(x – 4)", "y + 2 = 3(x – 4)", "y + 2 = 3(x + 4)"], correct: "y – 2 = 3(x – 4)" }
            ],

              "Phy 111": [
                {
                  question: "The derived dimension [ML⁻¹T⁻²] is a dimension of",
                  options: ["Force", "Momentum", "Pressure", "Work", "Power"],
                  answer: "Force"
                },
                {
                  question: "The derived dimension [ML²T⁻²] is a dimension of",
                  options: ["Force", "Impulse", "Pressure", "Work", "Speed"],
                  answer: "Work"
                },
                {
                  question: "What are the correct dimensions for energy and force?",
                  options: [
                    "MLT⁻¹, MLT",
                    "ML²T⁻², MLT⁻²",
                    "ML⁻³T, MLT²",
                    "ML²T⁻², ML²T²"
                  ],
                  answer: "ML²T⁻², MLT⁻²"
                },
                {
                  question: "What is the dimension of frequency?",
                  options: ["T", "T⁻²", "T²", "T⁻¹", "T⁻³"],
                  answer: "T⁻¹"
                },
                {
                  question: "What is the dimension for surface tension?",
                  options: ["MT⁻²", "MLT⁻³", "ML⁻²T²", "MLT⁻²", "MLT⁻¹"],
                  answer: "MLT⁻²"
                },
                {
                  question: "The unit for tensile stress is the same as ______",
                  options: ["Force", "Tension", "Acceleration", "Strain", "Pressure"],
                  answer: "Pressure"
                },
                {
                  question: "What is the dimension of a, b and c respectively in the equation S = at² + bt + c",
                  options: [
                    "LT⁻¹, LT⁻², LT⁻³",
                    "LT⁻³, LT⁻², LT⁻¹",
                    "LT², LT⁻¹, LT",
                    "LT⁻³, LT⁻¹, L",
                    "LT⁻², LT⁻¹, L"
                  ],
                  answer: "LT⁻², LT⁻¹, L"
                },
                {
                  question: "Identify which of these quantities listed from i to vii are derived quantities: (i) mass (ii) length (iii) electric current (iv) density (v) temperature (vi) velocity (vii) energy",
                  options: [
                    "(i), (ii), (iii) and (v)",
                    "(iv), (v), (vi) and (v)",
                    "(iv), (vi) and (vii)",
                    "All of the above",
                    "None of the above"
                  ],
                  answer: "(iv), (vi) and (vii)"
                },
                {
                  question: "The derived dimension [ML⁻²T⁻²] is a dimension of",
                  options: [
                    "(i) acceleration",
                    "(iii) energy",
                    "(i) and (ii) only",
                    "(ii) and (iii) only",
                    "All of the above"
                  ],
                  answer: "(ii) and (iii) only"
                },
                {
                  question: "Which of the following quantities has the same unit as the kilowatt–hour?",
                  options: [
                    "force × acceleration",
                    "force × velocity",
                    "force × velocity",
                    "force × distance",
                    "force × time"
                  ],
                  answer: "force × distance"
                },
                {
                  question: "1g/cm³ is equivalent to ______",
                  options: ["10kg/m³", "100kg/m³", "1000kg/m³", "10000kg/m³", "0.01kg/m³"],
                  answer: "1000kg/m³"
                },
                {
                  question: "The watt is equivalent to ______",
                  options: ["Nm/s", "Js", "kgm²/s²", "Ns", "J/s"],
                  answer: "J/s"
                },
                {
                  question: "Which of the following is not a unit of power?",
                  options: [
                    "Joule/second",
                    "ampere/volt",
                    "ampere × volt",
                    "volt²/ohms",
                    "ampere² × ohms"
                  ],
                  answer: "ampere/volt"
                },
                {
                  question: "Which of the following is equivalent to kgm/s?",
                  options: ["J/s", "N/s", "Ns", "Nms", "Js"],
                  answer: "Ns"
                },
                {
                  question: "Convert the speed 108km/hr to units in m/s.",
                  options: ["90m/s", "45m/s", "30m/s", "60m/s", "15m/s"],
                  answer: "30m/s"
                },
                {
                  question: "If the force F = kρˣv²ʸaᶻ, find the values of x, y, and z.",
                  options: ["1, 1, ½", "½, ½, ½", "1, -1, 1", "1, 0, 1"],
                  answer: "1, 1, 1"
                },
                {
                  question: "Convert the speed 180km/hr to units in m/s.",
                  options: ["100m/s", "50m/s", "150m/s", "60m/s", "40m/s"],
                  answer: "50m/s"
                },
                {
                  question: "20MPa is equal to ______",
                  options: ["20N/m²", "20N/mm²", "20kN/m²", "20N/cm²", "20N/dm²"],
                  answer: "20N/mm²"
                },
                {
                  question: "A quantity with magnitude but no specified direction is a __________ quantity.",
                  options: ["vector", "scaler", "vectoral", "scalar"],
                  answer: "scalar"
                },
                {
                  question: "Which of the following is a set of vectors?",
                  options: [
                    "weight, displacement and moment",
                    "velocity, volume and upthrust",
                    "density, capacitance and distance",
                    "mass, force and impulse"
                  ],
                  answer: "weight, displacement and moment"
                },
                {
                  question: "Which of the following is not a fundamental S.I. unit?",
                  options: ["meter", "ampere", "mole", "newton", "kilogram"],
                  answer: "newton"
                },
                {
                  question: "A girl walks 12m northwards, 5km eastwards and 7m southwards. Her total displacement is",
                  options: ["5m, north", "5m, East", "7.07m, S45°W", "7.07m, N45°E"],
                  answer: "7.07m, N45°E"
                },
                {
                  question: "Two forces, 12N and 16N inclined at an angle to each other, have a resultant which is parallel to the 16N force. The value of cos is",
                  options: ["1.0", "¾", "½", "0"],
                  answer: "¾"
                },
                {
                  question: "A body of mass M rests on a plane inclined at an angle α to the horizontal. The component of the weight of the body along the normal to the plane is",
                  options: ["Mgsinα", "Mgcosα", "Mgtanα", "Mg/sinα"],
                  answer: "Mgcosα"
                },
                {
                  question: "A car travels 20.0km due north and then 35.0km in a direction 60° west of north. Find the magnitude and direction of the car’s resultant displacement.",
                  options: ["48.2km 39°", "53.3km 39°", "48.2km 51°", "53.3km 51°"],
                  answer: "53.3km 51°"
                },
                {
                  question: "Can the magnitude of Cristiano Ronaldo’s displacement on the pitch be greater than the distance he travelled?",
                  options: ["Yes", "No", "Maybe", "It depends on the ball's position"],
                  answer: "No"
                },
                {
                  question: "Two vectors are given by A = 3i – 2j and B = -i - j, calculate the value of A + B",
                  options: ["4i + 3j", "2i – 3j", "2i - 4j", "2i + 3j"],
                  answer: "2i - 3j"
                },
                {
                  question: "A runner makes one lap around a track of radius 100m in a time of 25s. What is the runner’s displacement?",
                  options: ["200𝜋 m", "200m", "100m", "0m"],
                  answer: "0m"
                },
                {
                  question: "A runner makes one lap around a track of radius 100m in a time of 25s. What is the distance covered by the runner?",
                  options: ["200𝜋 m", "200m", "100m", "0m"],
                  answer: "200𝜋 m"
                },
                {
                  question: "A force 2500N acting at 60° to the vertical is used to pull a lorry, what is the amount of force trying to lift the lorry?",
                  options: ["1250", "2165N", "2165", "2165kN", "1250N"],
                  answer: "1250N"
                },
                {
                  question: "The resultant of two forces is the diagonal of the forces from their point of action, this is the",
                  options: ["Triangular law", "Lami’s theorem", "Polygon law", "Parallelogram law", "Vector law"],
                  answer: "Parallelogram law"
                },
                {
                  question: "Which of the following is not a scalar quantity?",
                  options: ["Electric Potential", "Tensile Stress", "Surface Tension", "Young Modulus", "Pressure"],
                  answer: "Tensile Stress"
                },
                {
                  question: "Two perpendicular forces have a resultant of 13N. If one of the forces is 5N, the other force is",
                  options: ["8N", "9N", "12N", "14N", "18N"],
                  answer: "12N"
                },
                {
                  question: "Two forces will have their resultant to be minimum if the angle between them is",
                  options: ["0°", "45°", "90°", "180°", "360°"],
                  answer: "180°"
                },
                {
                  question: "The velocity v of the wave set up by plucking a stretched string is found to depend on the tension T on the string, its length l and its mass m, and is given by v = kTˣlʸmᶻ where x, y, z are unknown numbers and k is a constant. Find the value of the summation of x, y and z.",
                  options: ["1/2", "1", "3/2", "2", "3"],
                  answer: "1/2"
                },
                {
                  question: "What is the net horizontal force?",
                  options: ["-6.98N", "62.30N", "22.30N", "23.02N", "56.39N"],
                  answer: "22.30N"
                },
                {
                  question: "What is the net vertical force?",
                  options: ["56.42N", "43.57N", "23.57N", "4.75N", "3.57N"],
                  answer: "43.57N"
                },
                {
                  question: "What is the resultant force?",
                  options: ["85.05N", "48.95N", "7.84N", "32.95N", "8.74N"],
                  answer: "48.95N"
                },
                {
                  question: "What is the resultant angle from the positive horizontal?",
                  options: ["27.1°", "44.32°", "42.16°", "152.9°", "34.76°"],
                  answer: "44.32°"
                }
              ],
        

"CPT 111": [
    {
        question: "____ is a raw or unprocessed fact.",
        options: ["computer", "information", "data", "memory"],
        correct: "data"
    },
    {
        question: "____ is processed data.",
        options: ["computer", "information", "data", "memory"],
        correct: "information"
    },
    {
        question: "___ is an electronic device that processes data into information.",
        options: ["computer", "information", "data", "memory"],
        correct: "computer"
    },
    {
        question: "An electronic device that can receive instructions, remember the instructions, and carry out the instructions is called",
        options: ["electronic machine", "radio", "computer system", "calculator"],
        correct: "computer system"
    },
    {
        question: "A computer can perform all the following tasks except",
        options: ["accept data", "process information", "display information", "store information"],
        correct: "process information"
    },
    {
        question: "The part of CPU that performs all mathematical computations is referred to as",
        options: ["arithmetic logic unit", "register", "control unit", "main memory"],
        correct: "arithmetic logic unit"
    },
    {
        question: "Which generation of computer was operated using electronic valve?",
        options: ["first", "second", "third", "fourth"],
        correct: "first"
    },
    {
        question: "Which computer generation is associated with AI?",
        options: ["first", "second", "third", "fourth"],
        correct: "fourth"
    },
    {
        question: "Which computer generation is characterized by the use of ICs technology in the design of its components?",
        options: ["first", "second", "third", "fourth"],
        correct: "third"
    },
    {
        question: "The circuitry of the third-generation computer was made of",
        options: ["vacuum tube", "transistor", "integrated circuit", "Diode"],
        correct: "integrated circuit"
    },
    {
        question: "Computer generation has evolved through how many generations?",
        options: ["1", "2", "3", "4", "5"],
        correct: "5"
    },
    {
        question: "Data → ______ → Information.",
        options: ["processing", "process", "processes", "processor"],
        correct: "process"
    },
    {
        question: "A data that has been processed is called",
        options: ["datum", "instruction", "information", "register"],
        correct: "information"
    },
    {
        question: "A stage by stage description of the development of modern computation is termed",
        options: ["computer generation", "computer migration", "computer innovation", "computer description"],
        correct: "computer generation"
    },
    {
        question: "UNIVAC stands for",
        options: [
            "universal automatic computer",
            "universal automation computer",
            "universe automatic computer",
            "universal autonomous computer"
        ],
        correct: "universal automatic computer"
    },
    {
        question: "The first successful general-purpose computer was",
        options: ["UNIVAC", "Abacus", "System 360", "Laptop"],
        correct: "UNIVAC"
    },
    {
        question: "UNIVAC was delivered in the year",
        options: ["1951", "1950", "1960", "1961"],
        correct: "1951"
    },
    {
        question: "The circuitry of the first-generation computer was made of",
        options: ["vacuum tube", "transistor", "ICs", "Diode"],
        correct: "vacuum tube"
    },
    {
        question: "SSI stands for",
        options: [
            "small scale integration",
            "standard scale integration",
            "sensible scale integration",
            "serious scale integration"
        ],
        correct: "small scale integration"
    },
    {
        question: "Intel 4004 was built by",
        options: ["Dr Ted Hoff", "Dr Tud Hoff", "Dr Tod Heff", "Dr Ted Heff"],
        correct: "Dr Ted Hoff"
    },
    {
        question: "LSI stands for",
        options: [
            "large size integration",
            "large scale integration",
            "long scale integration",
            "little scale integration"
        ],
        correct: "large scale integration"
    },
    {
        question: "Time sharing was an innovation introduced during the ____ generation of computer.",
        options: ["1st", "2nd", "4th", "3rd", "5th"],
        correct: "3rd"
    },
    {
        question: "SSI allows up to __ transistors.",
        options: ["10", "20", "100", "200"],
        correct: "100"
    },
    {
        question: "MSI allows up to __ transistors.",
        options: ["100", "200", "500", "20"],
        correct: "500"
    },
    {
        question: "LSI allows up to __ transistors.",
        options: ["1000", "2000", "500", "5000"],
        correct: "1000"
    },
    {
        question: "VLSI stands for",
        options: [
            "very large scale integration",
            "varying large scale integration",
            "visible large scale integration",
            "volume large scale integration"
        ],
        correct: "very large scale integration"
    },
    {
        question: "VLSI is associated with which generation of computer?",
        options: ["1st", "3rd", "2nd", "4th", "5th"],
        correct: "4th"
    },
    {
        question: "The world's first microprocessor is",
        options: ["Intel 4004", "Intel 8008", "Intel 404C", "Intel 8080"],
        correct: "Intel 4004"
    },
    {
        question: "Intel 4004 consists of how many transistors?",
        options: ["200", "2300", "200", "1300"],
        correct: "2300"
    },
    {
        question: "A single chip that can hold the entire control unit and the arithmetic logic unit of a computer is called",
        options: ["microcomputer", "microprocessor", "micro-CPU", "micro-ALU"],
        correct: "microprocessor"
    },
    {
        question: "In ALU, A stands for",
        options: ["algorithm", "arithmetic", "arithmetical", "all-purpose"],
        correct: "arithmetic"
    },
    {
        question: "GUI stands for",
        options: [
            "Graphics User Interface",
            "Graphical User Interface",
            "Graphic User Interface",
            "Graph User Interface"
        ],
        correct: "Graphical User Interface"
    },
    {
        question: "_____ is described as the brain of the computer.",
        options: ["Monitor", "keyboard", "memory", "CPU"],
        correct: "CPU"
    },
    {
        question: "The part of the computer that can be touched and felt is",
        options: ["software", "hardware", "CPU", "human ware"],
        correct: "hardware"
    },
    {
        question: "Which of the following is not an example of hardware?",
        options: ["spreadsheet", "monitor", "CPU", "mouse"],
        correct: "spreadsheet"
    },
    {
        question: "The part of the computer that executes program instructions and controls the operation of all other parts is",
        options: ["ALU", "CPU", "Application Unit", "Control Unit"],
        correct: "CPU"
    },
    {
        question: "CU stands for",
        options: ["control utility", "common unit", "central unit", "control unit"],
        correct: "control unit"
    },
    {
        question: "_____ are high speed storage locations within the CPU.",
        options: ["Registers", "Cores", "Stacks", "Caches"],
        correct: "Registers"
    },
    {
        question: "The ALU performs how many tasks?",
        options: ["2", "3", "4", "0"],
        correct: "2"
    },
    {
        question: "Which of the following is not a component of hardware?",
        options: ["output device", "input device", "memo device", "storage device"],
        correct: "memo device"
    },
    {
        question: "A machine used to send data and instructions into the CPU is",
        options: ["input device", "register", "hardware", "CPU"],
        correct: "input device"
    },
    {
        question: "Which of the following is not an output device?",
        options: ["microphone", "monitor", "speaker", "printer"],
        correct: "microphone"
    },
    {
        question: "Which of the following is not an input device?",
        options: ["CD ROM", "keyboard", "mouse", "scanner"],
        correct: "CD ROM"
    },
    {
        question: "Which of the following is not an input device?",
        options: ["joystick", "light pen", "printer", "scanner"],
        correct: "printer"
    },
    {
        question: "Which of the following is an input device?",
        options: ["printer", "keyboard", "monitor", "speaker"],
        correct: "keyboard"
    },
    {
        question: "__ is an input device used to capture still or moving images.",
        options: ["plotter", "scanner", "camera", "microphone"],
        correct: "camera"
    },
    {
        question: "The layout of keyboard is",
        options: ["ABCD.LMN", "ABCD:XYZ", "QWERTY", "ASDF;LKJ"],
        correct: "QWERTY"
    },
    {
        question: "A handheld device which has a rolling ball on a surface for controlling pointer on the screen of a computer is",
        options: ["joystick", "mouse", "cursor", "pad"],
        correct: "mouse"
    },
    {
        question: "VDT stands for",
        options: [
            "visual display terminal",
            "video display terminal",
            "visual display technology",
            "video DVD television"
        ],
        correct: "video display terminal"
    },

    ],
    
   
    "STA 117": [
      {
        question: "A curve with one peak is called:",
        options: ["Bimodal", "Unimodal", "Trimodal", "Platykurtic"],
        correct: "Unimodal"
      },
      {
        question: "The middle value in a dataset is the:",
        options: ["Mode", "Mean", "Median", "Range"],
        correct: "Median"
      },
      {
        question: "A histogram is best used for:",
        options: ["Qualitative data", "Grouped data", "Unrelated data", "Binary data"],
        correct: "Grouped data"
      },
      {
        question: "Which of these is a measure of spread?",
        options: ["Mean", "Median", "Variance", "Mode"],
        correct: "Variance"
      },
      {
        question: "Which graph is best for showing parts of a whole?",
        options: ["Histogram", "Pie chart", "Bar chart", "Line graph"],
        correct: "Pie chart"
      },
      {
        question: "Which is not a type of mean?",
        options: ["Arithmetic", "Geometric", "Harmonic", "Cubic"],
        correct: "Cubic"
      },
      {
        question: "The total of all frequencies is called the:",
        options: ["Cumulative frequency", "Relative frequency", "Sample size", "Interval range"],
        correct: "Sample size"
      },
      {
        question: "Which distribution has heavy tails?",
        options: ["Normal", "Platykurtic", "Leptokurtic", "Uniform"],
        correct: "Leptokurtic"
      },
      {
        question: "The difference between the largest and smallest value is the:",
        options: ["Variance", "Standard deviation", "Range", "Mean deviation"],
        correct: "Range"
      },
      {
        question: "A bell-shaped curve is associated with which distribution?",
        options: ["Normal", "Exponential", "Binomial", "Uniform"],
        correct: "Normal"
      },
      {
        question: "Which of the following is a continuous variable?",
        options: ["Number of books", "Height", "Type of car", "Color of eyes"],
        correct: "Height"
      },
        {
          question: "The arithmetic mean of the numbers 8, 3, 5, 12, and 10 is",
          options: ["7.5", "7.6", "7.7", "7.8"],
          correct: "7.6"
        },
        {
          question: "If 5, 8, 6, and 2 occur with frequencies 3, 2, 4, and 1 respectively, the arithmetic mean is",
          options: ["5.5", "5.6", "5.7", "5.8"],
          correct: "5.7"
        },
        {
          question: "The set of numbers 3, 4, 4, 5, 6, 8, 8, 8, and 10 has median",
          options: ["4", "5", "5.5", "6"],
          correct: "6"
        },
        {
          question: "The set 2, 2, 5, 7, 9, 9, 9, 10, 10, 11, 12, and 18 has mode",
          options: ["7", "9", "9.5", "10"],
          correct: "9"
        },
        {
          question: "Find the arithmetic mean of the numbers 3, 5, 6, 6, 7, 10, and 12.",
          options: ["6", "6.43", "7", "7.7"],
          correct: "6.43"
        },
        {
          question: "Find the mean deviation of the set 2, 3, 6, 8, 11.",
          options: ["4", "5", "6", "7"],
          correct: "5"
        },
        {
          question: "Find the harmonic mean H of the numbers 3, 5, 6, 6, 7, 10, and 12.",
          options: ["5.85", "5.86", "5.87", "5.88"],
          correct: "5.87"
        },
        {
          question: "Given the following number, evaluate the average mean of the distribution: 51, 50, 47, 50, 48, 41, 59, 68, 45, 37.",
          options: ["49.6", "49.8", "49.9", "50.1"],
          correct: "49.8"
        },
        {
          question: "A student receives marks of 85, 76, 93, 82 and 96 in five subjects. Obtain the median mark.",
          options: ["96", "85", "76", "it does not exist"],
          correct: "85"
        },
        {
          question: "The arithmetic mean of the numbers 5, 3, 6, 5, 4, 5, 2, 8, 6, 5, 4, 8, 3, 4, 5, 4, 8, 2, 5, 4 is",
          options: ["4.8", "67", "6.7", "6.8"],
          correct: "4.8"
        },
        // 50 general questions
        {
          question: "Which of the following is not a characteristic of statistical data?",
          options: ["Must be in aggregate", "Must be collected systematically", "Must be comparable", "Must be cumbersome"],
          correct: "Must be cumbersome"
        },
        {
          question: "Which of these is a type of sampling method?",
          options: ["Tabular sampling", "Systematic sampling", "Geographical sampling", "Tertiary sampling"],
          correct: "Systematic sampling"
        },
        {
          question: "What kind of chart uses rectangles of equal width?",
          options: ["Pie chart", "Bar chart", "Line graph", "Histogram"],
          correct: "Bar chart"
        },
        {
          question: "Which measure is most affected by extreme values?",
          options: ["Mean", "Median", "Mode", "Range"],
          correct: "Mean"
        },
        {
          question: "Which type of data is 'eye color'?",
          options: ["Quantitative", "Qualitative", "Interval", "Ratio"],
          correct: "Qualitative"
        },
        {
          question: "A frequency distribution is used to:",
          options: ["Compare means", "Summarize data", "Eliminate bias", "Measure error"],
          correct: "Summarize data"
        },
       
        {
          question: "What is the mode of 2, 3, 3, 5, 7?",
          options: ["2", "3", "5", "7"],
          correct: "3"
        },
        {
          question: "Which of these is a non-parametric statistic?",
          options: ["Median", "Mean", "Standard deviation", "Variance"],
          correct: "Median"
        },
        {
          question: "Which is the most frequently occurring value?",
          options: ["Mean", "Median", "Mode", "Mid-range"],
          correct: "Mode"
        },
        {
          question: "What type of scale is used for temperature in Celsius?",
          options: ["Ratio", "Interval", "Ordinal", "Nominal"],
          correct: "Interval"
        },
        {
          question: "What is the class width of a frequency table?",
          options: ["Upper limit - lower limit", "Total frequency", "Midpoint", "Average frequency"],
          correct: "Upper limit - lower limit"
        },
        {
          question: "If the mean of 5, 6, 7, x, and 9 is 7, what is x?",
          options: ["7", "8", "9", "10"],
          correct: "8"
        },
        {
          question: "Which of these best describes inferential statistics?",
          options: ["Describes data", "Draws conclusions", "Predicts scores", "Graphs data"],
          correct: "Draws conclusions"
        },
        {
          question: "Which statistic is best for describing skewed data?",
          options: ["Mean", "Mode", "Median", "Range"],
          correct: "Median"
        },
        {
          question: "A pie chart displays data as:",
          options: ["Circles", "Bars", "Lines", "Sectors"],
          correct: "Sectors"
        },
        {
          question: "The average of the squared differences from the mean is:",
          options: ["Variance", "Range", "Standard deviation", "Mode"],
          correct: "Variance"
        },
        {
          question: "The frequency of a class interval represents:",
          options: ["Number of data points in it", "Its width", "Its mean", "Its median"],
          correct: "Number of data points in it"
        },
        {
          question: "A variable that can be counted is called:",
          options: ["Continuous", "Nominal", "Discrete", "Ordinal"],
          correct: "Discrete"
        },
        {
          question: "In a symmetric distribution:",
          options: ["Mean = median = mode", "Mean > mode", "Mode > mean", "Mean < median"],
          correct: "Mean = median = mode"
        },
        {
          question: "Which central tendency measure is most suitable for categorical data?",
          options: ["Mean", "Median", "Mode", "Range"],
          correct: "Mode"
        },
        {
          question: "A measure that indicates how values are spread is:",
          options: ["Mode", "Mean", "Range", "Mid-range"],
          correct: "Range"
        },
        {
          question: "Which diagram is best for time series data?",
          options: ["Histogram", "Bar chart", "Line graph", "Pie chart"],
          correct: "Line graph"
        },
        {
          question: "If the sum of deviations from the mean is calculated, it is always:",
          options: ["Negative", "Positive", "Zero", "One"],
          correct: "Zero"
        },
        {
          question: "The most central location in data is represented by the:",
          options: ["Range", "Median", "Mean", "Mode"],
          correct: "Mean"
        },
        {
          question: "A bar chart uses:",
          options: ["Circles", "Bars", "Lines", "Dots"],
          correct: "Bars"
        },
        {
          question: "A dataset with no mode is called:",
          options: ["Modal", "Non-modal", "Amodal", "Trimodal"],
          correct: "Amodal"
        }
  ],
    "Chm 101": [

        {
          question: "Which of the following compounds is held together by ionic bonds?",
          options: ["H2O", "CH4", "NaCl", "NH3"],
          correct: "NaCl"
        },
        {
          question: "A covalent bond involves the:",
          options: ["Transfer of protons", "Sharing of electrons", "Loss of neutrons", "Gaining of protons"],
          correct: "Sharing of electrons"
        },
        {
          question: "Which bond type allows free movement of electrons, making it a good conductor?",
          options: ["Covalent", "Ionic", "Metallic", "Hydrogen"],
          correct: "Metallic"
        },
        {
          question: "Which of the following is a Van der Waals force?",
          options: ["Hydrogen bonding", "Ionic bonding", "Dipole-dipole interaction", "Metallic bonding"],
          correct: "Dipole-dipole interaction"
        },
        {
          question: "Hydrogen bonding occurs in:",
          options: ["CH4", "NH3", "CO2", "NaCl"],
          correct: "NH3"
        },
        {
          question: "Which of the following is most likely to form a triple covalent bond?",
          options: ["Hydrogen", "Nitrogen", "Sodium", "Chlorine"],
          correct: "Nitrogen"
        },
        {
          question: "Which of the following molecules has London dispersion forces as the only intermolecular force?",
          options: ["H2O", "NH3", "CH4", "HCl"],
          correct: "CH4"
        },
        {
          question: "What is the relationship between ΔH and ΔU?",
          options: ["ΔH = ΔU + nRT", "ΔH = ΔU + PΔV", "ΔH = ΔU - PΔV", "ΔH = ΔU × T"],
          correct: "ΔH = ΔU + PΔV"
        },
        {
          question: "Standard enthalpy of formation for an element in its standard state is:",
          options: ["Always 1", "Always 100", "Zero", "Depends on temperature"],
          correct: "Zero"
        },
        {
          question: "Hess’s Law is based on the principle of:",
          options: ["Conservation of mass", "Conservation of atoms", "Path independence of enthalpy", "Temperature dependency of reaction"],
          correct: "Path independence of enthalpy"
        },
        {
          question: "What is the enthalpy change for the neutralization of a strong acid and a strong base?",
          options: ["Positive", "Zero", "Negative", "Infinite"],
          correct: "Negative"
        },
        {
          question: "Kirchhoff’s equation is used to:",
          options: ["Measure pH", "Calculate entropy", "Estimate enthalpy at different temperatures", "Determine boiling point"],
          correct: "Estimate enthalpy at different temperatures"
        },
        {
          question: "Which of the following reactions is an example of combustion?",
          options: ["HCl + NaOH → NaCl + H2O", "C + O2 → CO2", "Na + Cl → NaCl", "CH4 + NH3 → CH3NH2"],
          correct: "C + O2 → CO2"
        },
        {
          question: "If a bond requires 412 kJ/mol to break, this value is called:",
          options: ["Bond energy", "Activation energy", "Heat of reaction", "Lattice energy"],
          correct: "Bond energy"
        },
        {
          question: "The enthalpy of solution refers to:",
          options: ["Heat absorbed/released during mixing", "Heat absorbed when burning a compound", "Heat change when forming a product", "Heat change during melting"],
          correct: "Heat absorbed/released during mixing"
        },
        {
          question: "The second law of thermodynamics states:",
          options: ["Energy is created and destroyed", "Heat flows from cold to hot", "Entropy of an isolated system increases", "Energy is conserved"],
          correct: "Entropy of an isolated system increases"
        },
        {
          question: "The Carnot cycle consists of how many processes?",
          options: ["2", "3", "4", "5"],
          correct: "4"
        },
        {
          question: "Entropy is a measure of:",
          options: ["Temperature", "Randomness or disorder", "Energy loss", "Chemical equilibrium"],
          correct: "Randomness or disorder"
        },
        {
          question: "Which process increases entropy the most?",
          options: ["Freezing of water", "Condensation of steam", "Sublimation of dry ice", "Formation of NaCl"],
          correct: "Sublimation of dry ice"
        },
        {
          question: "The formula for Carnot engine efficiency is:",
          options: ["η = W/Q", "η = T_C/T_H", "η = 1 - T_C/T_H", "η = PΔV"],
          correct: "η = 1 - T_C/T_H"
        },
        {
          question: "A reversible process:",
          options: ["Occurs rapidly", "Is ideal and infinitely slow", "Produces more entropy", "Cannot be reversed"],
          correct: "Is ideal and infinitely slow"
        },
        {
          question: "For an irreversible process:",
          options: ["ΔS = 0", "ΔS < 0", "ΔS > 0", "ΔS is undefined"],
          correct: "ΔS > 0"
        },
        {
          question: "In a Carnot engine, if T_H = 500 K and T_C = 300 K, efficiency is:",
          options: ["40%", "60%", "20%", "100%"],
          correct: "40%"
        },
        {
          question: "Which of the following increases the entropy of a system?",
          options: ["Compression of gas", "Freezing of water", "Evaporation of alcohol", "Formation of crystals"],
          correct: "Evaporation of alcohol"
        },
        {
          question: "Entropy change for a reversible process is given by:",
          options: ["ΔS = q/T", "ΔS = T/q", "ΔS = qP/T", "ΔS = ΔH/T"],
          correct: "ΔS = q/T"
        },
        {
          question: "Which bond is present in H2O?",
          options: ["Ionic", "Covalent", "Metallic", "Van der Waals"],
          correct: "Covalent"
        },
        {
          question: "Which of the following has all atoms bonded by metallic bonds?",
          options: ["NaCl", "Mg", "H2O", "CO2"],
          correct: "Mg"
        },
        {
          question: "If ΔH is positive and ΔS is also positive, the reaction is spontaneous at:",
          options: ["Low temperatures", "All temperatures", "High temperatures", "Never"],
          correct: "High temperatures"
        },
        {
          question: "Which process is exothermic?",
          options: ["Vaporization", "Condensation", "Melting", "Sublimation"],
          correct: "Condensation"
        },
        {
          question: "Which of the following does NOT increase entropy?",
          options: ["Boiling", "Dissolving salt", "Freezing water", "Burning fuel"],
          correct: "Freezing water"
        }
    ]
};

// Shuffle function (Fisher-Yates)
function shuffleQuestions(questions) {
  for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
  }
  return questions;
}

// Function to get shuffled questions for a selected subject
function getShuffledQuestions(subject) {
  const subjectQuestions = subjects[subject];
  if (!subjectQuestions) {
      alert("Subject not found!");
      return [];
  }
  return shuffleQuestions([...subjectQuestions]); // spread to avoid changing the original order
}

// Example usage
const selectedSubject = "Phy 111"; // you can set this dynamically
const currentQuestions = getShuffledQuestions(selectedSubject);

console.log(currentQuestions); // Use this for your quiz logic

// ✅ Set custom time limits (20 or 30 minutes)
const subjectTimeLimits = {
    "Math101": 2400,   // 40 minutes
    "Phy 101": 1200,   // 20 minutes
    "Mat 113": 1800,    // 30 minutes
    "Phy 111": 1800,   // 30 minutes
    "STA 117": 2400,   // 40 minutes
    "Chm 101": 1200    // 20 minutes
   
    
};

localStorage.setItem("subjects", JSON.stringify(subjects));

// ✅ Load exam with subject-based timer
if (window.location.pathname.includes("exam.html")) {
    let urlParams = new URLSearchParams(window.location.search);
    let subject = urlParams.get("subject");

    document.getElementById("subjectTitle").innerText = subject;
    let questions = JSON.parse(localStorage.getItem("subjects"))[subject];

    let currentQuestionIndex = 0;
    let answers = {};
    let questionContainer = document.getElementById("questionContainer");
    let nextButton = document.getElementById("nextButton");
    let prevButton = document.getElementById("prevButton");
    let submitButton = document.getElementById("submitButton");

    function showQuestion(index) {
        questionContainer.innerHTML = ""; 
        if (index < questions.length) {
            let q = questions[index];
            let div = document.createElement("div");
            div.innerHTML = `<p>${index + 1}. ${q.question}</p>` +
                q.options.map(option => {
                    const isChecked = answers[index] === option ? "checked" : "";
                    return `<input type="radio" name="q${index}" value="${option}" onclick="selectAnswer(${index}, '${option}')" ${isChecked}> ${option}<br>`;
                }).join("");
            questionContainer.appendChild(div);

            nextButton.style.display = index === questions.length - 1 ? "none" : "block";
            submitButton.style.display = index === questions.length - 1 ? "block" : "none";
            nextButton.disabled = !answers[index];
        }
    }

    window.selectAnswer = function (index, value) {
        answers[index] = value;
        nextButton.disabled = false;
    };

    // Next Button
    nextButton.onclick = function () {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
            updateButtons();
        }
    };

    // Previous Button
    prevButton.onclick = function () {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion(currentQuestionIndex);
            updateButtons();
        }
    };

    // Helper to enable/disable buttons
    function updateButtons() {
        prevButton.disabled = currentQuestionIndex === 0;
        nextButton.disabled = currentQuestionIndex === questions.length - 1 || !answers[currentQuestionIndex];
    }

    // Submit Button
    submitButton.onclick = function () {
        submitExam(); // Define this function separately
    };

    // Load the first question
    showQuestion(currentQuestionIndex);
}

localStorage.setItem("subjects", JSON.stringify(subjects));

// ✅ Load exam with subject-based timer
if (window.location.pathname.includes("exam.html")) {
    let urlParams = new URLSearchParams(window.location.search);
    let subject = urlParams.get("subject");

    document.getElementById("subjectTitle").innerText = subject;
    let questions = JSON.parse(localStorage.getItem("subjects"))[subject];

    let currentQuestionIndex = 0;
    let answers = {};
    let questionContainer = document.getElementById("questionContainer");
    let nextButton = document.getElementById("nextButton");
    let prevButton = document.getElementById("prevButton");
    let submitButton = document.getElementById("submitButton");
    let timerElement = document.getElementById("timer");

    function showQuestion(index) {
        questionContainer.innerHTML = "";
        if (index < questions.length) {
            let q = questions[index];
            let div = document.createElement("div");
            div.innerHTML = `<p>${index + 1}. ${q.question}</p>` +
                q.options.map(option => {
                    const isChecked = answers[index] === option ? "checked" : "";
                    return `<input type="radio" name="q${index}" value="${option}" onclick="selectAnswer(${index}, '${option}')" ${isChecked}> ${option}<br>`;
                }).join("");
            questionContainer.appendChild(div);

            nextButton.style.display = index === questions.length - 1 ? "none" : "block";
            submitButton.style.display = index === questions.length - 1 ? "block" : "none";
            prevButton.style.display = index === 0 ? "none" : "block";
            nextButton.disabled = !answers[index];
        }
    }

    window.selectAnswer = function (index, value) {
        answers[index] = value;
        nextButton.disabled = false;
    };

    nextButton.onclick = function () {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
            updateButtons();
        }
    };

    prevButton.onclick = function () {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion(currentQuestionIndex);
            updateButtons();
        }
    };

    function updateButtons() {
        prevButton.disabled = currentQuestionIndex === 0;
        nextButton.disabled = currentQuestionIndex === questions.length - 1 || !answers[currentQuestionIndex];
    }

    submitButton.onclick = function () {
        submitExam();
    };

    // ✅ Timer setup based on subject
    let subjectTimeLimits = {
        Math: 900,
        English: 1200,
        Biology: 1000
        // Add more subjects and their limits
    };

    let timeLeft = subjectTimeLimits[subject] || 1200; // Default 20 min
    let warningShown = false;

    let timer = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timerElement.innerText = `Time left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

        if (timeLeft === 120 && !warningShown) {
            warningShown = true;
            timerElement.style.color = "red";

            let submitPrompt = document.createElement("div");
            submitPrompt.innerHTML = `
                <p style="color: red; font-weight: bold;">Only 2 minutes left! Do you want to submit now?</p>
                <button id="submitNow">Submit Now</button>
                <button id="continue">Continue</button>
            `;
            submitPrompt.style.border = "2px solid red";
            submitPrompt.style.padding = "10px";
            submitPrompt.style.marginTop = "10px";
            document.body.appendChild(submitPrompt);

            document.getElementById("submitNow").onclick = submitExam;
            document.getElementById("continue").onclick = function () {
                submitPrompt.remove();
            };
        }

        if (timeLeft-- <= 0) {
            clearInterval(timer);
            submitExam();
        }
    }, 1000);

    function submitExam() {
        localStorage.setItem("lastExamSubject", subject);
        let score = 0;

        questions.forEach((q, index) => {
            let selected = answers[index] || null;
            if (selected === q.correct) {
                score++;
            }
        });

        localStorage.setItem("score", score);
        localStorage.setItem("totalQuestions", questions.length);
        window.location.href = "results.html";
    }

    showQuestion(currentQuestionIndex);
}

// ✅ Display results
if (window.location.pathname.includes("results.html")) {
  let score = localStorage.getItem("score") || "0";
  let subject = localStorage.getItem("lastExamSubject");
  let subjects = JSON.parse(localStorage.getItem("subjects")) || {};
  let totalQuestions = subjects[subject] ? subjects[subject].length : "Unknown";

  // Format the result as "score / totalQuestions"
  document.getElementById("resultText").innerText = `Your Score: ${score} / ${totalQuestions}`;
}

// ✅ Homepage login function
function login() {
    let matricNumber = document.getElementById("matricNumber").value.trim();
    if (matricNumber.startsWith("BSFC0")) {
        localStorage.setItem("matricNumber", matricNumber);
        window.location.href = "subjects.html";
    } else {
        alert("Invalid Matric Number! It must start with 'BSFC0'.");
    }
}

// ✅ Show subjects on subject page
if (window.location.pathname.includes("subjects.html")) {
    let subjectList = document.getElementById("subjectList");
    let subjects = JSON.parse(localStorage.getItem("subjects")) || {};
    if (Object.keys(subjects).length === 0) {
        alert("No subjects found! Please check script.js.");
    } else {
        Object.keys(subjects).forEach(subject => {
            let li = document.createElement("li");
            li.innerHTML = `<a href="exam.html?subject=${subject}">${subject}</a>`;
            subjectList.appendChild(li);
        });
    }
}

// ✅ Optional: default timer text (in case it's visible too early)
if (document.getElementById("timer")) {
    document.getElementById("timer").innerText = "Time left: Calculating...";
}
// Restore saved session if available
let savedProgress = JSON.parse(localStorage.getItem("examProgress_" + subject));
if (savedProgress) {
    currentQuestionIndex = savedProgress.currentQuestionIndex || 0;
    answers = savedProgress.answers || {};
    timeLeft = savedProgress.timeLeft || timeLeft;
}
// Save exam progress every second
localStorage.setItem("examProgress_" + subject, JSON.stringify({
  currentQuestionIndex,
  answers,
  timeLeft
}));
localStorage.removeItem("examProgress_" + subject);
let matricNumber = localStorage.getItem("matricNumber");
let studentScores = JSON.parse(localStorage.getItem("studentScores")) || {};

if (!studentScores[matricNumber]) {
    studentScores[matricNumber] = {};
}
studentScores[matricNumber][subject] = {
    score: score,
    total: questions.length,
    date: new Date().toLocaleString()
};

localStorage.setItem("studentScores", JSON.stringify(studentScores));
function viewStudentScores() {
  let scores = JSON.parse(localStorage.getItem("studentScores")) || {};
  console.log(scores); // or display it on screen
}
