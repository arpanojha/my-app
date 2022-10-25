import blog1 from './image/blog-01.jpg'
import blog2 from './image/blog-02.jpg'
import blog3 from './image/blog-03.jpg'
import blog4 from './image/blog-04.jpg'
import blog5 from "./image/qjc.jpeg"
const BlogApi = [
  {
    id: 1,
    image: blog5,
    date: "27 September, 2022",
    title_one: "Quantum student journal club",
    desc_one: "Quantum Student journal club meeting. We paved a road map for the semester. We plan to design and develop quantum hardware gates using low cost MZI using optics.",
    
  },
  {
    id: 2,
    image: blog1,
    date: "8 April, 2022",
    title_one: "Concilium wins IU startup challenge.",
    desc_one: "Our startup placed first in the IU connect startup pitch challenge. IT was a competition hosted by Indiana university's College of Arts and Sciences, IU Ventures, Walter career development center and  Shoebox. Read more at: https://careers.college.indiana.edu/blog/2022/02/28/announcing-the-2022-connect-challenge-winners/",
    
  },
  {
    id: 3,
    image: blog2,
    date: "8 April, 2022",
    title_one: "Quickest algorithm on Realestate pricing model for minimum loss.",
    desc_one: "Problem1(minimum_loss.py) : in a time series array find the minimum possible \"loss\" that can be incurred. Problem at : https://www.hackerrank.com/challenges/minimum-loss/problem . My solution in N log n time.",
    title_two: "The solution.",
    desc_two: "Use quicksort type implementation. As we move through the array we pick first element as pivot and move the future elements in order into left and right arrays and make recursive calls to these sub arrays.",
    title_three: "",
    desc_three: "Here we just check differences between pivot element and left array as we need the loss. Advantage: no fancy library needed just knowledge of data structures. Code available at : https://github.com/arpanojha/My_algorithms/tree/master/hacker%20rank​",
  },
  {
    id: 4,
    image: blog3,
    date: "20 October, 2018",
    title_one: "ArtSparks Mural painting . Wipro cares initiative.",
    desc_one: "A Wipro cares initiative to paint an underprivileged classroom to make it more interactive and fun for the students . Wipro partnered with Art sparks Foundation to paint the murals . As volunteers we were required to assist in the designing and decorating.",
    title_two: "",
    desc_two: "Idea was to incorporate fun while making the wall(s) as informative as possible. As a first time experience we came up with individual ideas that was combined and depicted all across the classroom . The participation let us explore our creative side and also help the younger minds have a bright view of the classroom rather than the mundane white and yellow they saw usually.",
    
  },
  {
    id: 5,
    image: blog4,
    date: "11 November, 2016",
    title_one: "ATL Tinkering LABS - INTEL.",
    desc_one: "NITI AYOG just reached out to us through the Electronics Club website . They wanted some help regarding the setting up of Atal Tinkering Labs in the schools over North east . This is a co funded project from INTEL and Govt. of India details of which is beside the point.",
    title_two: "Our Role",
    desc_two: "The idea is to set up these labs where schools would be provided with monetary benefits to help innovative students . So anyways , they had already shortlisted 59 schools out of around 500 schools (their words not mine!) in the northeast ,and they needed to narrow down the list to a lesser number . Thats where we come in . A team of Electronics Club Members(8) was sent to assist them from IIT Guwahati.",
    title_three: "",
    desc_three: "Being one of the members in the judging panel was an experience different altogether.​",
  },
]
export default BlogApi
