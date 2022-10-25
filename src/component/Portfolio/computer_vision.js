import one from "./image/one.png"
import affine from "./image/affine.jpg"
import ice_rock from "./image/air_ice.png"
import ocr from "./image/ocr.png"
import cv from "./image/cv.jpg"
const computer_vision = [
    {
      id: 1,
      date:'2022',
      image: cv,
      desc_one:"This paper proposes a state of the art model for classifying chickens in social media data. We made a systematic\
      study of progressively deeper models and proved, deeper\
      models are needed to recognize important animal features.\
      Using these deeper layers, models can learn discriminative\
      features expressively. By comparing the training time we\
      show the newer architectures leverage the best of both accuracy and quicker training. Image pre-processing is essential\
      in prevention of over-fitting . Transformer models need a\
      lot of image data to make classifications as good as a neural network model. However, testing time is much better\
      for transformer models. A better model can be designed\
      by combining segmentation with deep learning models for\
      animal image classification.\
      Our proposed model can be deployed in a real world environment and help in animal husbandry. This can reduce\
      culling in large scale and help prevent live razing of chickens. This model can also be extended to other animals such\
      as under sea creatures or wildlife. It has the potential to help\
      understand aquatic fauna better.",
      content_name: "Computer vision survey"
    },
    {
      id: 2,
      date:'2022',
      image: ocr,
      desc_one:"Key concepts used from the research paper: We utilized windowing, operations in the hough transform space from the paper.\
      Method 1: Characters A,B,C,D,E and blank have distinctive fourier transforms. We wanted to check if the difference was significant enough. Problems: The box sizes were too small (30* 30) to show any noticeable difference. This method was not as robust to noise as we would have liked.\
      Method 2: Idea: We used kmeans algorithm to isolate the individual columns. We computed the average intensity for each column and used thresholding to get  columns. This was slightly better. Our maximum accuracy was 70%, but our minimum accuracy was 2%, mostly due to our algorithm for detecting a row of answers being so naive.\
      Method 3: Idea: We used the kmeans from the previous approach to narrow down the columns. Using the windowing technique with hough transform as shown in paper https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.59.4239&rep=rep1&type=pdf , we narrowed down individual cells marked in grey as shown below. We used the canny edge detector to feed into the implemented algorithm. \
      Once we had the coordinates of all the boxes, we used K-Means clustering to identify coordinates for each row and column of cells to make the algorithm more robust to small distortions.\
      Then we simply looped over the detected grid to find the contents of each box.We didnt run a character detection algorithm as the shading still revealed the characters underneath quite a bit. This could have confused the grader. Instead we chose mean of pixel intensity values.\
      After this all there was left is to use the structure of the test and determine which boxes are marked and which ones aren't. This was done using simple mean of intensity values.\
      Extraction of handwritten parts was done using the isolated x and y coordinates per cell. We observe a tiny rectangle of image left of every number to see if there are any markings. We first binarized the image cell and then calculated mean. We set a threshold based on this method and marked that question as a x if any anomalies( small mean values) were observed.\
      Problems and solutions:\
      While doing intensity measurements we observed few boxes contain badly inked answers. There incomplete inks were probably produced by paper of by a confused student. This was solved by image binarization. Anything above 210 was marked as 255 or 0. This moved the averages quite cleanly below 100.\
      Time taken for initial run was 3 hours. We increased the stride to 5 which bought down the execution time to roughly 2 mins per image.\
      This process is not extremely robust to rotation. We have a error tolerance of ±3 degrees for the rectangle distortion, an a tolerance of ±5 degrees for rectangle rotation. The limit on rectangle rotation was specifically implemented to reduce the number of possible rectangles explored and thus reduce the run time. This limit is implemented in the hough space\
      ",
      content_name: "Optical Character Recognition"
    },
    {
      id: 3,
      date:'2021',
      image: ice_rock,
      desc_one:"The method: We have edge weights, pixel values and the knowledge that edges do not vary rapidly.\
      We use edge weights and pixel values as emission probabilities. The higher the edge value is higher the chance of it being a boundary. Same holds true for pixel value.\
      We know that the darker and lighter pixel values corespond to nearing an edge in the image.\
      We use the transition probability such that the model is punished when it tries to pick a point too far away from the previous known/calculated edge. Using this emission probabilities we calculate the simple edges . Using the emission probabilties and transition probabilties we calculate viterbi edge. First edge is calculated based on emission probabilities alone.\
      In the viterbi decoding algorithm we move from left to right uniformly/iteratively.\
      In the human feedback part of solution we begin the viterbi decoding from the point specified by the human as an edge.\
      We tried adjusting the formula to find the best possible solution satisfying a flat boundary against highly jagged boundaries. Our solution is a trade off between the two.",
      content_name: "Finding the ice rock boundary(Viterbi)"
    },
      {
        id: 4,
        date:'2022',
        image: affine,
        desc_one:"Data science data",
        content_name: "Image translation and panoramic stitching"
      }
  ]
  export default computer_vision