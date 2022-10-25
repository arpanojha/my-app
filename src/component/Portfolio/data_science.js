import ice_rock from "./image/air_ice.png"
import maps from "./image/maps.jpg"
import ucb from "./image/ucb_orig.png"
import cluster from "./image/clustering.jpg"
import mbo from "./image/mbo.png"
import bohp from "./image/bohp.png"
import ttt from "./image/ttt.png"
import hcdr from "./image/hcdr.png"
const data_science = [
    {
      id: 1,
      date:'2022',
      image: bohp,
      content_name: "Data Science and Qualitative Coding Approaches to Data Collection and Analysis",
      desc_one:"Data gathered from interviewing past students of IU from 1940-2018",
    },
    {
      id: 2,
      date:'2022',
      image: hcdr,
      content_name: "Home credit defaulter rate",
      desc_one:"Many people who desire to have their own house are unable to obtain a loan because of inadequate or nonexistent credit histories, despite whether the individual can actually repay the loan.\
       To identify these potential customers, Home Credit companies sought to analyze alternative data to predict their ability to repay. Our team\’s goal is to use this data to build a machine learning model to predict an applicant\’s ability to repay the loan. The data that will be used in this study came from the competition project, \
       Home Credit Default Risk, in Kaggle. It includes basic static data on all applicants, as well as six secondary data items such as applicants\’ previous credit history and credit card balances. In phase 3 of the project, our goal is to build a multi-layer perception (MLP) classification model in Pytorch and use Tensorboard to monitor \
       real-time training results. To achieve this, using the 28 out of the 29 features from phase2, we applied the algorithm nn.Linear() and the activation function nn.ReLu() in the MLP model with 61 initial transformed features and 2 final output features. To visualize the real-time training results, TensorBoard was introduced to monitor \
       the training loss (CrossEntropyLoss) and accuracy of each epoch. The training data was iterated for 5 times, and the last epoch yielded a training loss 0.673 and training accuracy 0.918. The validation and test accuracy are both 0.916. The AUC score, however, was close to 0.5 on our Kaggle submission, which is much lower than previous models.",
       desc_two: "In conclusion, the object of our project is to accurately predict the likelihood of loan repayment for homebuyers. This allows potential buyers that have little to no credit to get approved (if they have the capacity to repay) where previously they would be denied. This is adventagous for both parties as the banks can approve more \
       loans and more buyers can obtain housing. The Kaggle competition was started with the hypothesis that machine learning can be used to mine through the large amount of data and features to accurately predict whether a buyer should be approved or not.\
       With the completion of all the four phases of this project, our team has performed EDA of the data, feature engineering, feature selection and built a machine learning pipeline to employ machine learning algorithms with basic and hyperparamter tuned \
       AdaBoost, and Multiple Layer Perceptron. Our team has shown promising results for all the prediction models at the accuracy around 92%. The best test AUC we have obtained is 0.7457 achieved with the Adaboost model. Therefore, the turned Adaboost model would be a relatively better model than the MLP model."
    },
    
    {
      id: 3,
      date:'2021',
      image: maps,
      desc_one:"In this problem, we have explored A* star search algorithm for exploring shortest distance, time between two cities from a given dataset. The dataset 'road-segments.txt' has details about the segments between two cities, speed limit and highway name. \n\
      \nFor finding the optimal solution, A* star search with priority queue was implements. The fringe has location, segment length, heuristic function, path taken, segment, time taken and delivery time.\nLine \
      For this problem, we explored the routes on map using following 5 parts: Initial state: The start location where the journey starts State space: All the locations from the dataset connected using segments with each other. Successor function: Locations which are connected to other locations using direct path Edge cost: Cost to reach from one location \
      to another location(in terms distance/time/delivery time) Goal state: End location where the journey ends Heuristic function: since we have 4 different cost functions, different heuristic functions were used for each cost function For Distance: shortest distance between two locations was calculated using Euclidean distance For Segments: Each segment \
      with weight equal to 1 was used FOr time: the distance between two points divided by the speed limit was used For Delivery time: The road with more than 50mph was considered with probability and the corresponding time taken was calculated using distance traveled divided by speed limit  \
      Heuristic functions were admissible for segments and distance as for segements edge cost was 1 which was optimal and for distance by using the euclidean distance , the distance calcualted was not overestimated comared against the optimal solution For time and delivery, the heuristic function may not be admissible as it depends on the available paths",
      content_name: "Google maps from scratch(A*)"
    },
    {
      id: 4,
      date:'2021',
      image: ttt,
      desc_one:"Tic tac toe game using alpha beta pruning. This game is scalable to whatever sized tic tac toe you want to play. However for larger than 4 board, time taken to calculate next moves it high\
      code is available at : https://github.com/arpanojha/Artificial_Intelligence/blob/main/misere_tic_tac_toe/misere_ttt.py",
      content_name: "Tic tac toe"
    },
    {
      id: 5,
      date:'2020',
      image: ucb,
      content_name: "Online advertisement click through rate",
      desc_one:"Deep Learning using upper confidence bound algorithm . Project executed in R over a dataset of 10000 clicks(CTR) . ",
    },
    {
      id: 6,
      date:'2020',
      image: cluster,
      content_name: "Retail customer spending pattern",
      desc_one:"Kmeans Clustering applied to a mall customer dataset . Elbow method used to determine within cluster sum of squares",
    },
    {
      id: 7,
      date:'2020',
      image: mbo,
      content_name: "Kroger data copurchases",
      desc_one:"Apriori applied to retail dataset to identify co-purchases. Application: Co purchased items can be placed far apart to maximize spending. ",
    },
  ]
  export default data_science