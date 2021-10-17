# 💪 Workout Tracker

This full stack application uses a [Mongo](https://www.mongodb.com/) database with [Mongoose](https://mongoosejs.com/) object modeling and an [Express](https://expressjs.com/) API to allow users to track daily workouts.

<!-- [See the deployed application here](TODO: Add link to the deployed application after deployment) -->

---

## Table of Contents
* [Technologies](#technologies)
* [Functionality](#functionality)
* [Challenges](#challenges)
* [Future Development](#future-development)
* [Contact](#contact)
* [License](#license)


## Technologies

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)&nbsp;
![Mongoose](https://img.shields.io/badge/mongoose-800E00?style=for-the-badge&logo=mongoose&logoColor=white)&nbsp;
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)&nbsp;
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)&nbsp;
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)&nbsp;
![Robo 3T](https://img.shields.io/badge/Robo%203T-4DAE51?style=for-the-badge&logo=robo3T&logoColor=white)&nbsp;


## Functionality

### Application Landing Page

<img src="./assets/images/landing-page.png" alt="App landing page" width="600px"><br></br>

### Add Resistance Exercise

<img src="./assets/images/add-resistance.png" alt="Add resistance exercise" width="600px"><br></br>

### Add Cardio Exercise

<img src="./assets/images/add-cardio.png" alt="Add cardio exercise" width="600px"><br></br>


### Application Stats Page

<img src="./assets/images/stats-page.png" alt="App stats page" width="600px"><br></br>


## Challenges

* The biggest challenge with this application was that at first, the process of seeding the database wasn't working. After some experimentation, I realized it was that the Workout model should be exported from `models/index.js` as an object, even though in this project it is the only model. After making that change, it worked as intended.


## Future Development



## Contact
Email me any time with questions, comments, or cat/dog photos! - ctbarrett.tech@gmail.com


## License
&copy; 2021 Charles Tucker Barrett

[MIT License](https://opensource.org/licenses/MIT)