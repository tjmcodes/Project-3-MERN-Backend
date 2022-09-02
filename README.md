<div align="right">
 <h2>General Assembly - Software Engineering Immersive
 <img width=35px src="https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png" />
  </h2>
</div>

# Project 3 - Full-stack MERN-Backend (Frontend link [here](https://github.com/tjmcodes/Project-3-MERN-Frontend))

My Found Sounds is an application that allows registered users to upload and download sounds posted by other users. It utilises the MERN stack (MongoDB, Express, React, Node.js). 

<div align="center">
 <a href="https://ibb.co/RSRjCQD"><img src="https://i.ibb.co/BP0ngTC/My-Found-Sounds-Landing-Page.png" alt="My Found Sounds - Landing Page" border="0"></a>
</div>

### Link to live site: 
https://myfoundsounds.netlify.app/ (Version 1 for presentation deadline) \
https://myfoundsounds-v2.netlify.app/ (Version 4 days pair-programming focus: debugging)
<br/>

### Login credentials
<br/>

Please feel free to use the below credentials to login when viewing the project
<br/>

Email - portfoliouser@myfoundsounds.com
<br/>
Password - Portfolio1!


## Contents 
1. [Project Overview](#projectoverview)
2. [API / CDN](#api)
3. [Instructions to install](#instructions)
4. [Code Installation](#code-installation)
5. [Technologies used](#tech-used)
6. [Project Brief](#project-brief)
7. [Planning](#Planning)
8. [Whiteboarding](#whiteboarding)
9. [Project Management](#project-management)
10. [Creating the Backend](#Creating-the-Backend)
11. [Feature One - Cloud Hosting Widget](#Feature-one)
12. [Feature Two - Categories and Sub Categores](#Feature-two)
13. [Wins](#Wins)
14. [Challenges](#Challenges)
15. [Bugs](#bugs)
16. [Future Improvements](#future-improvements)
17. [What have I learned?](#What-have-i-learned)
18. [Authors](#authors)



<div id='projectoverview'></div>

## The Overview
Third project was completed by 4 people in 50hours over the course of two weeks (part-time schedule.)

<div id='api'></div>

## APIs Used:

Cloudinary
“Cloudinary provides a secure and comprehensive API for easily uploading media files from server-side code, directly from the browser or from a mobile application. You can either upload using Cloudinary's REST API or one of Cloudinary's client libraries (SDKs), which wrap the upload API and simplify integration with web sites and mobile applications. Once uploaded, you can manage your assets using the Admin API and automatically deliver them, applying smart optimizations and transformations.” Cloudinary Docs 2022

<div id='instructions'></div>

## Instructions to install

I recommend that you use the deployed version here but if you do want to run it locally you will need to sign up for an API key from the API provider listed above. I also assume that you have an up to date version of node, MongoDB, and NPM on your machine. Ensure mongo DB is running (start the `database mongod --dbpath ~/data/db`)

<div id='code-installation'></div>

## Code Installation:
Clone or download this repo and the MERN-Frontend (provide link here) repo then in your Terminal, run the following commands:
BACKEND:
Fork and clone this repository
- cd into the project directory.
- npm i to install dependencies.
- create .env file and paste your cloudinary key in
- If you would like three examples of sounds posted:  $ Node db/seed.js to fill the database with example data and users.
- start the back-end server using nodemon npm run develop


FRONTEND:
Link to Frontend Repository https://github.com/tjmcodes/Project-3-MERN-Frontend
- Fork and clone this repository
- cd into the frontend directory
- npm i to install dependencies.
- create .env file and paste your cloudinary key in
- mv example.env .env to rename file.
- cd .. To move back to the backend folder.
- npm run start Navigate to localhost:8000 in your browser (Chrome Recommended).

<div id='tech-used'></div>

## Technologies Used

**Server**: 
+ Node.js
+ Express.js
+ MongoDB
+ Mongoose
+ Chai, Mocha, SuperTest
+ Heroku
+ Insomnia

**Client**:
+ HTML5
+ JavaScript (ES6)
+ React
+ Netlify

**Styling:**
+ SCSS
+ Bulma

**GitHub**
+ GitHub Flow (using feature branches and relating commits to Jira Tickets)

**Productivity**
+ Excalidraw
+ Miro
+ Figma

**Project Management**
+ JIRA

<div id='project-brief'></div>

## Project Brief
- Work in a team, using git to code collaboratively.
- Build a full-stack application by making your own backend and your own frontend
- Use an Express API to serve your data from a Mongo database
- Consume your API with a separate front-end built with React
- Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models
- Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut
- Have a visually impressive design
- Have automated tests for at least one RESTful resource on the back-end.


## APPROACH
<div id='planning'></div>

## Planning
It was the first time working together, so to brainstorm, we discussed themes and personal interests that we liked and contributed ideas onto the Miro app. As a group we were able to agree very quickly on the idea for our app; an instagram/library app but with sounds rather than images. 
 
<div id='whiteboarding'></div>

## Whiteboarding
 
We worked collaboratively to create a wireframe for our project using excalidraw. This allowed us to pitch ideas quickly for the group to decide on what will be implemented for MVP. 
 
<div align="center">
  <a href="https://ibb.co/DG7NmTr"><img src="https://i.ibb.co/TKHZJdW/Project3-wireframe.png" alt="Project3 wireframe" border="0"></a>
</div>
 
 
After ideas were being noted, I found myself not fully understanding what the user experience would be. I was able to propose what the user experience could be by utilising Figma as part of our toolset, in order to start thinking about how we would implement the code. We found this a useful tool to refer to as we well as everybody pitch their ideas for enhancing the user experience. 
 
<div align="center">
  <a href="https://ibb.co/3B8dCPP"><img src="https://i.ibb.co/kQrBSPP/Project-3-figma.png" alt="Project 3 figma" border="0"></a>
</div>
 

The final version of the wireframe that was decided as a group: 
<div align="center">
 <a href="https://ibb.co/NWLv3Tm"><img src="https://i.ibb.co/6D4MZX1/Project-3-final-wireframe.png" alt="Project 3 final wireframe" border="0"></a>
</div>
 
 
<div id='project-management'></div>

## Project management
 
Jira proved to be a powerful tool to use in which we were able to organise Epics and Issues into two sprints. The first sprint was for building the backend and the second for the frontend.

</br>

<div align="center">
  <a href="https://ibb.co/6tNcBQC"><img src="https://i.ibb.co/wQYZstm/Project-3-Jira-overview.png" alt="Project 3 Jira overview" border="0"></a>
</div>

Wins: Everybody could refer to this, with regards to resolving tickets, or updating with comments based on research on debugging issues. 

Challenge: It really needs everybody to use this to be truly effective as often when there are tickets unresolved, where people work on those tickets to meet the deadlines, often it would be the case that the issue has been worked on by another user who didn't resolve the issue in Jira. Once this was flagged in our group, people were utilising the tool and this proved to be particularly powerful when debugging.

</br>
 
<div align="center">
  <a href="https://ibb.co/rkxPD3s"><img src="https://i.ibb.co/qBNGTC5/Project-3-comments-jira.png" alt="Project 3 comments jira" border="0"></a>
</div>
 
</br>
</br> 
 
<div id='creating-the-backend'></div>

## Creating The Backend
As previously mentioned, this was the first time working as a group. So we decided that we would build the backend together using LiveShare on Zoom and each of us would refer to our class notes. 

Wins: This was a really useful exercise to do because I was able to learn how others approached the tasks. For instance, checking the indentation is correct and for consistency as well as reinforcing our learning by discussing what we are doing.

Challenge: Unfortunately, the internet connection was not always stable for all users. As a result people would often be working on components that would be an alias and not the original working file. This often interrupted our workflow and would take longer than all individually working on a component and pushing. 

We started by creating the core routes for the API, one of these being the sound endpoint and controllers. This was the backbone of the project and so we spent time working together to ensure that it was logically structured and that all of the required information was included in the Sound Model. 

</br>

```js
// Main Sound Schema
const soundSchema = new mongoose.Schema({
  fileName: { type: String, required: true },
  caption: { type: String, required: true },
  hashtag: { type: [String], required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: false },
  url: { type: String, required: true }, 
  image: { type: String, required: false }, 
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [commentSchema],
}, { 
  timestamps: true,
})
```

</br>

As a group we decided to look into Cloudinary which was recommended as a hosting site for storing images and sound files. After checking the documentation, we could see that raw, video and image files can be uploaded.  I enrolled onto the 'Introduction to Cloudinary for Node.js Developers' course which is aimed at developers who are relatively new to Cloudinary. This course enabled me to understand the principles behind using hosting sites and how to upload, manage and transform the digital content.

<div align="center">
  <a href="https://ibb.co/7RVd0fS"><img src="https://i.ibb.co/pRZBk71/Cloudinary-Certificate.jpg" alt="Cloudinary Certificate" border="0"></a>
</div>


We also spent time as a group working on the backend for user registration and login. We wanted to ensure that only users who were registered and logged in could perform certain functions therefore we placed these functions such as uploading sounds, deleting sounds and commenting within secure routes. The secure route was authenticated using a bearer token which was assigned to the user at login; this was implemented using the JsonWebToken library.
 
```js

// function for login: 

if (isValidPw) {

      const token = jwt.sign(
        { userId: user._id },
        secret,
        { expiresIn: '24h' }
      )
      res.json({ 
        message: "Login successful!", 
        token, // ! Send back the token with the response. 
      })
    } else {
      res.status(400).json({ message: "Login failed missing field!" } )
```

</br>
</br>
 
<div id='feature-one'></div>

## Feature One - Cloud Hosting Widget
 
After completing the course, I was able to successfully post sounds and images to Cloudinary by working through the documentation and implementing the code and the Cloudinary upload widget which allows users to upload content.
“The Upload widget API reference details all the parameter options that you can use when configuring the Upload widget.” - [Cloudinary Docs 2022](https://cloudinary.com/documentation/upload_widget_reference)

The image uploader fetches the result.info.url which has the transformation preset applied to, which is then used and updates the url for the form data, for the registered user’s avatar.
```js
//any functions that you can get (find option in bucket) --> uploadWidget (check documentation)

  function handleUpload() {
    window.cloudinary.createUploadWidget(
      {
        cloudName: 'tjmcodes', 
        uploadPreset: 'user_sound_preset', 
        folder: 'my_found_sounds',
        clientAllowedFormats: ['mp3', 'ogg', 'wav', 'm4a', 'aac', 'AIFF'],
        maxFileSize: 5242880, 
      },

      (err, result) => {
        if (result.event !== 'success') {
          return
        } 
        const waveformPath = result.info.path.replace('.mp4', '.jpg')
        const waveformImage = (`https://res.cloudinary.com/tjmcodes/video/upload/h_200,w_500,fl_waveform/${waveformPath}`)

        setFormData({
          ...formData,
          url: result.info.url,
          image: waveformImage
        })
      }
      ).open()
    }
```
 
 
One of the issues that I came across was trying to access two of the urls available in the result.info object as the sound files were uploaded. 
One would be the thumbnail (the wavefile of the image) and the second url would be of the audio file that was uploaded. According to the documentation, it is not possible to do.  There is a workaround whereby you could manipulate the string of url and enter the transformation preset provided by the Cloudinary API. However, due to time constraints, a default image url was used.

<div align="center">
 <a href="https://ibb.co/q9k1V7z"><img src="https://i.ibb.co/HYng3B0/Project-3-Wavefile.png" alt="Project-3-Wavefile" border="0"></a>
</div>
 
</br>
</br>

<div id='feature-two'></div>

## Feature Two - Categories and Subcategories
 
Starting with creating a component for the categories and subcategories, this information needed to pass the props to the parent page in order to update the form data. However, the challenge I found was that I was not passing the props from the parent _back_ to the child component. 
In the parent component, I had to set the categories as useState which returns a stateful value, and a function to update it. During the initial render, the returned state is the same as the value passed as the first argument (initialState).
 
```js
/** "selected" here is state variable which will hold the
  * value of currently selected dropdown. This gets passed as props to the child component via const SubCategories = ({ selected, setSelected }) => { etc... in SoundCreate.js
  */
 
  const [selected, setSelected] = React.useState( 
  { subCategory: '', category: '' } );
  
  ```
 
 
These props would be passed to the child component and the function would updated the states in the child component:

```js
const SubCategories = ({ selected, setSelected }) => {
 
/** Function that will set different values to state variable
* based on which dropdown is selected
*/
 
const changeSelectOptionHandler = (event) => {
	setSelected({ category: event.target.value, subCategory: '' });
};
const changeSecondSelectOptionHandler = (event) => {
	setSelected({ ...selected, subCategory: event.target.value });
};

```

Then finally in the parent component, the form data will use the updated state to update form data. 

``` js
<SubCategories 
            selected = {selected} 
            setSelected = {setSelected}
            onChange={(category) => setFormData({ ...formData, category })}
            value={formData.category}
          />
 
 ```
 
</br>
</br>
 
<div id='wins'></div> 

## Wins
Planning
The planning and the preparation of the project was a huge win.  We were able to brainstorm our ideas and use the relevant productivity tools to capture everybody’s ideas. We agreed quite quickly to what we would all be working towards very early on, meaning that we could get on and start wireframing and provide some pseudo codes etc. It was a strong, bold start. 
 
Working as a group to set up the backend and frontend enabled us to consolidate our learning from class notes as well as learning from each other.  It was clear that this way of working provided positive results where everybody felt that they contributed to the project. 
 
Github Flow
Using feature branches and becoming more familiar with resolving merge conflicts. Being able to reference Jira ticket numbers helped to keep track of progress.
 
</br>
</br>
 
<div id='challenges'></div>

## Challenges

**Styling!** Hindsight being 20-20 vision, the styling was rushed and as a result the css / scss was not implemented in the way that we were hoping for or expecting based on our research and understanding of scss. 
Everybody contributed by assigning themselves to roles / assignments and features. This was easy to do using Jira, however, there were still a lot of tickets / issues unresolved / unassigned and as a result felt far behind with meeting goals and deadlines that we had scheduled.  
By the time the group was building the frontend and we started to work independently and fell behind schedule due to debugging issues etc. 
By assigning people to de-bugging tasks whilst the rest of the team continues with other tasks, could have been a more productive and efficient use of time. 
 
</br>
</br> 
 
<div id='bugs'></div>
 
## Bugs
Once the presentation was complete, paired programming was carried out to to fix the unresolved issues: 
 
- Registration > box / text too small
- Circular dependency - feedback in console.log
- Styling - cards not finished
- Comments and console.logs() left in code
- Profile List not completed (list of all users) → to be integrated at the top like instagram of users who have recently posted sounds
- String manipulation to return wave images of posted sounds
- Moment library to display correct time BST not GMT
- Page showing all profile users
- Styling
- Mobile responsiveness
- Expand on users card (how to differentiate between username with same names, add a short description)
 
## Deployed Version 2 - https://myfoundsounds-v2.netlify.app/ 

### Login credentials
<br/>

Please feel free to use the below credentials to login when viewing the project
<br/>

email: jasmin@jasmin.com
<br/>
password: Jasmin!22
 
</br>
</br>

<div id='future-improvements'></div>

## Future Improvements 
We have plenty of wireframing and stretch goals that we can refer to and would like to continue working on as a group to implement these:
- Profile list to appear at the top of the landing page (recent users who have posted sounds)
Further examples notes in Jira: 

<div align="center">
  <a href="https://imgbb.com/"><img src="https://i.ibb.co/Fq4tZ1D/Project-3-Stretch-Goals.png" alt="Project 3 Stretch Goals" border="0"></a>
</div>

</br>
</br>
 
<div id='what-have-i-learned'></div> 
 
## What have I Learned?
 
Despite all of the planning and organisation, we were not able to resolve all the tickets in Jira. 
We were very optimistic and ambitious with setting our MVP within the first week when the actual reality is that the MVP was just about realised for the deployment and presentation date! However, this was the first time we have all worked as a team to develop a MERN stack app, and will now have a Jira board with documented tickets that will enable us to refer to for future projects. I have learned to appreciate the importance of planning and preparing a project and how a lot of the work is really done at this stage before any coding has been applied. 
Moving forward, I will be implementing the project management tools more and UI tools to assist with realising a product. The temptation to just start coding and debug as I go, is an approach I would like to avoid. Or perhaps, I would like to become so experienced that I can do this with minimal debugging! This was something I believed cost us a lot in terms of losing time in this project and in particular, the styling was forgotten about.  


---

<div id='authors'></div>

## Authors

- [Laleh Shahidi](https://github.com/Laleh-S)
- [Luke O'Brien](https://github.com/luke-o-brien)
- [Kazimierz Jankowski](https://github.com/donnysnarko)
- [Teresa Morini](https://github.com/tjmcodes)

---

<!-- Stats -->
<div align='center'>
 <img height="150em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=tjmcodes&theme=vue-dark&custom_title=Languages&layout=compact">
 <img height="150em" src="https://github-readme-stats.vercel.app/api?username=tjmcodes&show_icons&theme=tokyonight">
</div>
