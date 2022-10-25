import one from "./image/one.png"
import strange from "./image/strange.png"
import bracket from "./image/bracket.png"
import qsharp from "./image/qsharp.png"
import qiskit from "./image/qiskit.png"
import euler from "./image/euler.png"
const quantum_computing = [
  {
    id: 1,
    date:'2022',
    image: euler,
    desc_one:"Project Euler: https://github.com/arpanojha/project_euler , Sorting : https://github.com/arpanojha/My_algorithms/tree/master/Sorting",
    desc_two:"Online judge: Erdos numbers, Ones, Paisumonious numbers, Stren Broccot Numbers: https://github.com/arpanojha/My_algorithms/tree/master/online_judge",
    content_name: "Competitive programming"
  },
    {
      id: 2,
      date:'2022',
      image: qiskit,
      desc_one:"Qiskit developed by IBM  C290 Quantum programming course: Taught the topics listed in https://legacy.cs.indiana.edu/classes/c290-quantum-dgerman/sum2022/syllabus.pdf",
      desc_two:"Implemented algorithms: Bernstein Vazirani, Fourier, Quantum teleportation, Deustch Jozsa, Grover and Shor at https://github.com/arpanojha/Quantum",
      content_name: "Qiskit"
    },
    {
      id: 3,
      date:'2022',
      image: qsharp,
      desc_one:"Qsharp developed by Amazon",
      desc_two:"Quantum state preparation an not gate in Qsharp at : https://github.com/arpanojha/Quantum/tree/main/qsharp",
      content_name: "Qsharp"
    },
    {
        id: 4,
        date:'2022',
        image: bracket,
        desc_one:"Bracket developed by Amazon",
        desc_two:"Quantum Random number generator: This code is closer to true randomness than all classical random generators. It relies on the fact that hadamard gate\
        produces superposition of 0 and 1 states. \
        Quantum compuunication: Quantum encoded communication of data transfer between two people sharing one bit. ",
        content_name: "Bracket"
      },
      {
        id: 5,
        date:'2022',
        image: strange,
        desc_one:"Java based quantum circuit cimulator strange and strangefx. Developed by Dr. Johan Vos. This article is aimed at helping students/collaborators or people from diverse backgrounds to quickly setup a simulations circuit and get busy circuiting. One such course that is aimed at empowering undergraduates, especially non STEM, in the field of quantum computing is C290 : Programming quantum computers at Indiana University Bloomington. The course first builds a solid background in basics of quantum, as much is necessary, and then dives deeper into algorithms and circuits. This has been explored by Dr. Terry Rudolph in his Q is for quantum.\
        REad more at : https://medium.com/@ojhaarpan12/quantum-circuit-simulation-in-java-on-command-line-or-linux-625cadf60e34",
        content_name: "Strangefx"
      }
  ]
  export default quantum_computing