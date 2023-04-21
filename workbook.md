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

Compatability rates the ability for the software to coexist with other software 


<!-- 


Compatibility: Compatibility is the degree to which a software product or system can coexist with other software products or systems, and perform its required functions without interference. It consists of two sub-characteristics, which are co-existence and interoperability.
Co-existence refers to the degree to which the software can coexist with other software products or systems without interference. Interoperability refers to the degree to which the software can communicate and exchange data with other software products or systems.

Usability: Usability is the degree to which a software product or system can be used by specified users to achieve specified goals with effectiveness, efficiency, and satisfaction in a specified context of use. It consists of four sub-characteristics, which are appropriateness recognizability, learnability, operability, and user error protection.
Appropriateness recognizability refers to the degree to which the software can be recognized as appropriate for its intended users. Learnability refers to the degree to which the software can be learned by its intended users. Operability refers to the degree to which the software can be operated by its intended users. User error protection refers to the degree to which the software can protect its intended users from making errors.

Reliability: Reliability is the degree to which a software product or system can perform its required functions under specified conditions for a specified period of time. It consists of three sub-characteristics, which are availability, fault tolerance, and recoverability.
Availability refers to the degree to which the software is available for use when required. Fault tolerance refers to the degree to which the software can continue to perform its functions in the presence of faults or errors. Recoverability refers to the degree to which the software can recover from failures and restore its required functions.

Security: Security is the degree to which a software product or system can protect information and data from unauthorized access, disclosure, alteration, destruction, and other malicious actions. It consists of four sub-characteristics, which are confidentiality, integrity, non-repudiation, and authenticity.
Confidentiality refers to the degree to which the software can protect information from unauthorized access or disclosure. Integrity refers to the degree to which the software can protect information from unauthorized alteration or destruction. Non-repudiation refers to the degree to which the software can provide proof of the origin and integrity of information -->





---

## 3 - Outline a standard high level structure for a MERN stack application and explain the components
<!-- [Shows almost flawless understanding of the high level structure of the app] 6 points -->

---

## 4 - A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?
<!-- [Effectively describes a range of skills and knowledge required by IT workers to complete a quality web development project] 6 points -->

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