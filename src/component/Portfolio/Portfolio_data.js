
import data_science from "./data_science"
import quantum_computing from "./quantum_computing"
import computer_vision from "./computer_vision"
import robotics from "./robotics"
import startup from "./startup"
import science from "./science"
import one from "./image/one.png"
import physics from "./image/physics.jpg"
import clevercart from "./image/clevercartlogo.png"
import cv from "./image/main_cv.png"
import robots from "./image/robotics.gif"
import ds from "./image/ds.png"
import coding from "./image/coding.jpg"
const Portfolio_data = [
  {
    id: 1,
    category: "DATA SCIENCE AND ANALYTICS",
    totalLike: "600",
    title: "Social Sciences, Sports Analytics, Fake news detection and more",
    content: data_science,
    image: ds,
  },
  {
    id: 2,
    category: "CODING AND COMPUTING",
    totalLike: "750",
    title: "Competitive programming and Quantum computing",
    content: quantum_computing,
    image: coding,
  },
  {
    id: 3,
    category: "COMPUTER VISION",
    totalLike: "630",
    title: "Computer vision",
    content: computer_vision,
    image: cv,
  },
  {
    id: 4,
    category: "ROBOTS",
    totalLike: "360",
    title: "Some of my best Robots",
    content: robotics,
    image: robots,
  },
  {
    id: 5,
    category: "STARTUP",
    totalLike: "280",
    title: "Clever Cart: Grocery price comparision and health",
    content: startup,
    image: clevercart,
  },
  {
    id: 6,
    category: "PHYSICS AND AVIATION",
    totalLike: "690",
    title: "Ultracold Atoms, Radars and ",
    content: science,
    image: physics,
  },
]
export default Portfolio_data
