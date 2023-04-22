# T3A1 Workbook

## 1 - Provide an overview and description of a standard source control process for a large project
<!-- [Provides an extensive overview and description of a standard source control process] 6 points -->

The first choice when creating a source control process for a large step is choosing a version control system for the project. The most popular system by far is Git, however some teams choose to use Mercurial or Subversion. 

After a system is chosen, a repository needs to be made to store the project files, and made accessible by the whole team. Once the repository is set up the team needs to make a choice on its branching strategy. Git provides some examples of branching strategies and makes an easier setup for these, such as "Centralized workflow" or "GitFlow". 

For a large project, a team would find GitFlow more suitable as it's designed as a more complex branching strategy for large teams and/or projects. It works by creating multiple branches for different purposes, e.g. features, hotfixes, development etc., and working on these branches independent of the master branch keeping it stable for production, and reducing the risk of bugs by allowing for extensive testing.

Once the branching strategy is implemented, the team should implement access control using authentication & authorization to limit the changes of code to relevant teams. Then proper Continuous Integration/Continuous Deployment pipelines can be established to automate the processes behind code building, bug testing and deployment making it more efficient and reducing the risk of errors. 

In GitFlow, the CI/CD pipelines are configured to trigger workflows based on the type of branch being update; for example if a new feature branch is created, the pipeline will automatically run tests on the code quality that checks that branch before it's merged into the 'developer' branch. Or, if a hotfix branch is created, it can be set up to automatically deploy the fix to production as soon as it passes its tests instead. Access control can be used to determine which teams are able to deploy to different types of branches to reduce the risk of human error. 


Now code can be pulled for review by the team before it's deployed to make sure it meets project requirements and standards, before it's merged and deployed to production. 

---

## 2 - What are the most important aspects of quality software? 
<!-- [List discuss and demonstrate 6 software quality characteristics] 6 points -->

Different standards explain these characteristics differently using similar language. The ISO/IEC 25010:2011 standard uses Functional Suitability, Performance Efficiency, Compatability, Usability, Reliability, Security, Maintainability and Portability. 

Functional suitability refers to the codes ability to perform all of the required functions as expected. This aspect is split into three sub-characteristics in the standard. Functional completeness - the degree to which software performs all required functions & features, functional correctness - the software behaving as expected under any condition, and functional appropriateness - how appropriate the software is for its intended use. 

Performance Efficiency is the ability of the software to perform its functions within expected conditions (regarding time & resources). The sub-categories are time behaviour - is how fast the software performs its function, usually within a specified time-limit. Resource utalization refers to the optimization of resource usage and ability to work with available resources. Finally, capacity is the softwares ability to handle the expected workload with the available resources. 

Compatability rates the ability for the software to coexist with other software. Co-existance rates the software's ability to not interefere with, or be interered by, the functions of other software and/or systems. Interoperability is the softwares ability to communicate and exchange data with other software or systems. 

Usability is how effective, efficient and satisfying software is to used by the targeet users. Userability has 6 subcategories; Appropriateness recognizability, learnability, operability, user error protection, user interface aesthetics and accessibility. Essentially, the software should be easy to learn (intuitive) to effectively carry out the required task, while protecting the system against user errors, and to provide an interface that is satisfying and accessible for as many people as possible. 

Reliability measures how long the software performs its function over a period of time. The software grows in 'maturity' as it continues to be reliable. Availability measures how long the software is operational and accessible when required. Fault tolerance is it's ability to remain operational despite hardware or software faults, and finally recoverability is how well the software is able to be recovered or re-established after an interruption or failure. 

Security is the degree that the software protects information & data. Confidentiality is restricting this data to only those authorized to have access. Integrity is how well the software prevents unauthorized access to or manipulation of data. Non-repudiation is creating accountability and 'paper trails' proving events to have taken place, and preventing them from being 'repudated'. Authenticity is the ability to prove data to be accurate to what it is claimed. 

Maintainability is how efficiently software can be modified and maintained. 
- Modularity is how well software is segmented into discrete components in order to have unexpected consequences when altering individual functions. 
- Reusability allows an asset to be used in more than one system, or for use elsewhere in the software.
- Analysability is the ability to assess or diagnose the effects of changes to itself for failures or modifications.
- Modifiability allows software to be changed without causing failures or defects. 
- Testability is how effective tests can be created for the software. 

Portability measures the softwares ability for change to other systems, its own environment or for upgrades. 
- Adaptability is how well the software can be changed and still be effective, whether that's changes to hardware, interacting software or other operational changes.
- Installability is how well the product can be installed in its intended environment.
- Replaceability measures the ability for the software to changed or upgraded to other software in the same enviornment.

---

## 3 - Outline a standard high level structure for a MERN stack application and explain the components
<!-- [Shows almost flawless understanding of the high level structure of the app] 6 points -->


---

## 4 - A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?
<!-- [Effectively describes a range of skills and knowledge required by IT workers to complete a quality web development project] 6 points -->

While maybe not recognized as a technical skill for this project, the ability to create an articulate plan of action for this project will set the structure, goals and MVP to prioritize for the team. This time should be used to get the whole team on the same page about where work is delegated to, what requirements, roadblocks and assitance each team member might need and what responsibilities each person has. 
The website design and layout can be planned using a wireframe, which should include thought for the intended functions of the website and how that is displayed visually in an intuitive way. 

The team would need to have proficiency in a few programming languages. 
- HTML for creating the structure of the website and making it accessible for as many possible. 
- CSS to style the page & HTML content. This should be responsive and meet design requirements and goals for the project. 
- Javascript to make the website interactive, and proficiency in optimizing performance, maintainability & compatability. 
- A backend language like Python or Ruby. More explained about backends below. 

The team would need proficiency in at least one front-end framwork such as React, Angular, Boostrap or Vue. These frameworks determine the logic, structure, design and behaviour of the website and allow for the building of complex web applications. 

Backend development needs multiple proficiencies. The team needs to be able to build a database or API and needs knowledge with SQL, MongoDB or Oracle. The backend will handle working with the database, and logic and storing required and most of the function of the website -- and create the API for the frontend to display information of the database. Backend framework examples,  which similarly provide components for making a dynamic website, include Express, Django, Next.js etc. 

Source/Version control. The vast majority of teams use Git for source control, working within a team can create merge conflicts that require unique skills to deal with compared to working on solo projects. Different teams will choose different source control methods as well, so making sure the entire team is on the same page about source control methods and are skilled in it will reduce conflicts. 

The team should be familiar with testing and debugging code, with the best practice to be writing functions with testing in mind (or writing the test before writing the function) to ensure robust and modular coding. 

---

## 5 - With reference to one of your own projects, discuss what knowledge or skills were required to complete your project, and to overcome challenges
<!-- [Effectively describes a range of skills and knowledge used to complete a project] 6 points -->


---

## 6 - With reference to one of your own projects, evaluate how effective your knowledge and skills were for this project, and suggest changes or improvements for future projects of a similar nature
<!-- [Evaluates effectiveness of knowledge and skills accurately, providing examples, and providing an insightful improvement on each skill] 6 points -->


---

## 7 - Explain control flow, using an example from the JavaScript programming language
<!-- [Provides a thorough explanation of control flow in programming] 6 points -->


---

## 8 - Explain type coercion, using examples from the JavaScript programming language
<!-- [Provides a thorough explanation of type coercion in programming] 6 points -->

<!-- Explain == automatically type coerces.  -->

---

## 9 - Explain data types, using examples from the JavaScript programming language
<!-- [Provides a thorough explanation of data types in programming] 6 points -->

---

## 10 - Explain how arrays can be manipulated in JavaScript, using examples from the JavaScript programming language
<!-- [Demonstrates an extensive ability to manipulate arrays] 6 points -->

---

## 11 - Explain how objects can be manipulated in JavaScript, using examples from the JavaScript programming language
<!-- [Demonstrates an extensive ability to manipulate objects] 6 points -->

---

## 12 - Explain how JSON can be manipulated in JavaScript, using examples from the JavaScript programming language
<!-- [Demonstrates an extensive ability to manipulate JSON] 6 points -->

---

## 13 - For the code snippet provided below, write comments for each line of code to explain its functionality. In your comments you must demonstrates your ability to recognise and identify functions, ranges and classes
<!-- [Demonstrates an extensive ability to recognise functions, ranges and classes] 12 points -->

```javascript
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it was made in ' + this.model;
  }
}

let makes = ["Ford", "Holden", "Toyota"]
let models = Array.from(new Array(40), (x,i) => i + 1980)

function randomIntFromInterval(min,max) { // min and max included
    return Math.floor(Math.random()*(max-min+1)+min);
}

for (model of models) {

  make = makes[randomIntFromInterval(0,makes.length-1)]
  model = models[randomIntFromInterval(0,makes.length-1)]

  mycar = new Model(make, model);
  console.log(mycar.show())
}
... (5 lines left)