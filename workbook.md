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

Functional suitability refers to the codes ability to perform all of the required functions as expected. This aspect is split into three sub-characteristics in the standard. 
- Functional completeness: the degree to which software performs all required functions & features.
- functional correctness: the software behaving as expected under any condition.
- functional appropriateness: how appropriate the software is for its intended use. 

Performance Efficiency is the ability of the software to perform its functions within expected conditions (regarding time & resources). The sub-categories are:
- time behaviour - is how fast the software performs its function, usually within a specified time-limit. 
- Resource utalization refers to the optimization of resource usage and ability to work with available resources. 
- Capacity is the softwares ability to handle the expected workload with the available resources. 

Compatability rates the ability for the software to coexist with other software. 
- Co-existance rates the software's ability to not interefere with, or be interered by, the functions of other software and/or systems. 
- Interoperability is the softwares ability to communicate and exchange data with other software or systems. 

Usability is how effective, efficient and satisfying software is to used by the targeet users. Userability has 6 subcategories; Appropriateness recognizability, learnability, operability, user error protection, user interface aesthetics and accessibility. Essentially, the software should be easy to learn (intuitive) to effectively carry out the required task, while protecting the system against user errors, and to provide an interface that is satisfying and accessible for as many people as possible. 

Reliability measures how long the software performs its function over a period of time. The software grows in 'maturity' as it continues to be reliable. Availability measures how long the software is operational and accessible when required. Fault tolerance is it's ability to remain operational despite hardware or software faults, and finally recoverability is how well the software is able to be recovered or re-established after an interruption or failure. 

Security is the degree that the software protects information & data. 
- Confidentiality is restricting this data to only those authorized to have access. 
- Integrity is how well the software prevents unauthorized access to or manipulation of data. 
- Non-repudiation is creating accountability and 'paper trails' proving events to have taken place, and preventing them from being 'repudated'. 
- Authenticity is the ability to prove data to be accurate to what it is claimed. 

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

A MERN stack is one variation of a MEAN stack using MonogoDB (document database), Express.js (Node.js web framework), React.js (Client-side JavaScript framework) and Node.js (a JavaScript runtime environment for server-side applications). It's made up of three layers, the front end, back end and database.

In a MERN stack web application, React is used to build the front-end layer by providing a JavaScript library for creating the user interface and experience (UI/UX). The reusable components within are designed to be simple to implement to handle rendering and updating the UI with the provided data. 

The backend layer in a MERN stack is made with Node.js and Express.js, which provides a runtime environment for JavaScript code on the server side while express provides developers with tools to simplify the process of building web applications, and handling the HTTP requests and responses along with along with database storage and retrieval requests.

The database layer is designed with MongoDB, which works entirely with JSON to provide easy communication of data throughout the full stack. It integrates simply and effectively with React, Express & Node. 


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

My last project was creating a webserver API. To complete this project, I used my knowledge of programming in Python to handle the backend logic for the webserver. This needed to handle any errors gracefully and follow RESTful design concepts. This was done within a Flask framework which through python was connected to an SQL database. Using PostgreSQL to create, manipulate and query data in a robust schema. 

To ensure the data was secure I used JWT for authentication and authorization requiring users to login to access privlidged information, and were only able to create and manipulate data if they had specific permissions assigned to their tokens, or only able to access their own data instead. 

The biggest challenges I faced where mostly found in stages. Originally, I found it difficult to conceptulize exactly all the steps needed to be undertaken to complete the project and therefore breaking down the work into discrete chunks of progress required me to spend time planning and forward thinking to overcome this challenge. The main issue I faced was getting authentication to work in the way I wanted, where permissions were assigned based on role, so that a group of people could share the same permission. I managed to make this work by assigning a role within the JWT token data, which could be checked and extracted to provide permission to access data (which also worked for ID). Finally, the biggest challenge I faced was trying to query SQL while creating joins in the tables in order to display relevant information to a query from two different tables. This one was particularly difficult and needed to be set aside while I worked on the MVP, and meanwhile was reacing out to peers & educators for assistance with this. Eventually while reading online I was able to find inspiration for an idea to fix this, and with further persistance was able to create this join. 

Finally, creating documentation for my API required concise language and communication in order to clearly explain the purpose, function and usage of my API. 

---

## 6 - With reference to one of your own projects, evaluate how effective your knowledge and skills were for this project, and suggest changes or improvements for future projects of a similar nature
<!-- [Evaluates effectiveness of knowledge and skills accurately, providing examples, and providing an insightful improvement on each skill] 6 points -->

With the mentioned API above, my skills and knoweldge were adequate for a simple project in my opinion. I was able to create the API to work as intended for simple functions, however I do believe there were limitations in my knowledge that restricted me from improving further. 

While I was able to use JWT for assigning roles for authentication/authorization, the method I used was making the role and id additional claims in the JWT token. This was the way I was able to learn within the time-constraint of the assignment, however I recognize that it's not the most secure form of authorization. All of the information needed for authorization is stored within the token meaning if it is compromised it can be manipulated for nefarious purposes, as the JWT tokens aren't encrypted. A future improvement might be researching JWE tokens which do support encryption, or server sided role based authentication to provide a higher level of security. This would teach me alternative approaches to security diversifying my knowledge to be able to apply the appropriate method depending on the situaiton. 

I also realized that my knowledge of API design structure was limited, and I often found myself replicating the Model-View-Controller (MVC) architecture that I had seen in other implementations. However, I believe this would cause some redundant code or unnecessary features without fully understanding what each piece of code was intended to do. To improve my proficiency in API development, I need to gain a deeper understanding of the underlying principles and components of the MVC architecture. By doing so, I hope to make more informed design decisions and be better equipped to identify and debug potential issues in my code, leading to the creation of more effective and efficient software.


The database I had created for this project stored lab results for various products within the company. To ensure valid data was being entered, I made generic constraints to apply to all products so that a mistype couldn't end up with invalid data. However, a more effective database would have individual constraints for each product for their expected ranges. 
To achieve this, I could have created another table that specifically defined the constraints for each product. This would have allowed me to create more precise constraints that were tailored to the specific needs of each product. With this approach, I could have better ensured that the data stored in the database was accurate and met the specific requirements of each product. At the time I did not have the knowledge and time to achieve this, but if I acquire the necessary skills in the future, it'll make my projects more effective as I will have a better understanding of table interactions within databases. 

---

## 7 - Explain control flow, using an example from the JavaScript programming language
<!-- [Provides a thorough explanation of control flow in programming] 6 points -->

Control flow refers to the order that statements are executed in a program based off conditions and input. Javascript uses conditional statements, loops and calls to manipulate the control flow. 

For this I will use a counting example that will iterate through the numbers 1-10 and print (console.log) whether the number is odd, or even. 

```js
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }
```
In this example, the for line defines a loop where a counter starts at 1 (i=1), it will itierate until i is larger than or equal to 10 and every itiration will increase the value of i by 1. '
In each loop, it will first check if i is divisble by two, and if it is will log ([number] is even), then go to the next iteration of the loop. If it is not even, else will inact and it'll print the number is odd instead. It'll do this for every number until 10. 

Another form for loops are "while" loops, which will continue executing as long as a condition is true. 

---

## 8 - Explain type coercion, using examples from the JavaScript programming language
<!-- [Provides a thorough explanation of type coercion in programming] 6 points -->

Type coercion is the conversion of a data type into another one. JavaScript will automatically coerce data in some scenarios. For example, if you add numeric 1 to a string 1, it'll return "11" as it concatenates the two strings. 

```js
console.log(1 + "1"); // "55"
console.log("1" + 1); // "55"
```

The equal operator '==' will automatically coerce values, where the '===' will not. E.g.

```js
console.log(1 == "1"); // true
console.log(1 === "1"); // false
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(0 == false) // true
console.log(0 === false) // false
```

---

## 9 - Explain data types, using examples from the JavaScript programming language
<!-- [Provides a thorough explanation of data types in programming] 6 points -->

Data types the different ways data is stored and how it can be interacted with. In Javascript, there are:
Strings - a collection of numbers, letters and symbols. Strings can be manoipulated with some methods, for example ```toUppserCase()``` will convert the string into capital letters (uppercase), ```concat()``` will concatenate two strings (add them together), or ```slice()``` to get portions of a string. In the example below, since both variables are assigned as strings it will not treat them as numeric values, and instead will concatenate them.  

```js
let num1 = '10';
let num2 = '20';
let result = num1 + num2;
console.log(result); // output: "1020"
```

Numbers - integers, decimals. They can be used for mathematical operations. Numbers can also be incremented and decremented with ++ & --. 

```js
let num1 = 10;
let num2 = 20;
let result = num1 + num2;
console.log(result); // output: "30"
```

Boolean - True or False values. Can be manipulated with && (and), || (or) and ! (not). 

```js
let isTrue = true;
let isFalse = false;
console.log(isTrue && isFalse);  // output: false
console.log(isTrue || isFalse);  // output: true
console.log(!isTrue);  // output: false (since !true is false)
```

Undefined - a variable created, but without a value. It can be assigned a variable to no longer be undefined. 

```js
let x;  // undefined variable
console.log(x);  // output: undefined
x = 1;  // assign a value to x
console.log(x);  // output: 1
```

Null - Nothing. Like undefined, can be assigned a value. 

```js
let x = null;  // variable with null value
console.log(x);  // output: null
```

Objects - Data structures with key-value pairs. They can be manipulated with various methods using dot or bracket notation. 

```js
let person = {
  name: 'Jakeb',
  age: 24,
  isStudent: true
};
console.log(person.name);  // output: "Jakeb"
console.log(person['age']);  // output: 24
person.isStudent = true;
console.log(person.isStudent);  // output: true
```

Arrays - A collection of data, e.g. an array of numbers is a list of numbers. They can be manipulated with some methods like push() to add an element to the end of the array, pop() removes an element at the end of the array. splice() lets you remove an element at a specific position. 



---

## 10 - Explain how arrays can be manipulated in JavaScript, using examples from the JavaScript programming language
<!-- [Demonstrates an extensive ability to manipulate arrays] 6 points -->

To add or remove elements:

* push(): adds one or more elements to the end of an array.
* pop(): removes the last element from an array.
* unshift(): adds one or more elements to the beginning of an array.
* shift(): removes the first element from an array.

```js
let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);  // output: [1, 2, 3, 4]

numbers.pop();
console.log(numbers);  // output: [1, 2, 3]

numbers.shift();
console.log(numbers);  // output: [2, 3]
```

Change a specific element (note this is based off index, starting from 0). 

```js
let fruits = ['apple', 'banana', 'blueberry'];
fruits[1] = 'strawberry';
console.log(arr); // output: ['apple', 'strawberry', 'blueberry']
``` 

* slice(): returns the rest of the array after the indexed number.
* splice(): adds or removes elements from an array.

```js
let numbers = [2, 3]
numbers.splice(1, 0, 4, 5);
console.log(numbers); // output: [ 2, 4, 5, 3]


let slicedArr = numbers.slice(2);
console.log(slicedArr); // output: [5, 3]
```

Iterate through arrays:

* forEach(): executes a provided function once for each array element.
* map(): creates a new array with the results of calling a provided function on every element in the array.
* filter(): creates a new array with all elements that pass the test implemented by the provided function.

```js
let numbers = [1, 2, 3, 4, 5];

numbers.forEach((element) => {
  console.log(element);
}); // ouput: 1 \n 2 \n 3 \n 4 \n 5

let mappedArr = numbers.map((element) => {
  return element * 2;
});

console.log(mappedArr); // output: [2, 4, 6, 8, 10]

let filteredArr = numbers.filter((element) => {
  return element % 2 === 0;
});

console.log(filteredArr); // output: [2, 4]

```

---

## 11 - Explain how objects can be manipulated in JavaScript, using examples from the JavaScript programming language
<!-- [Demonstrates an extensive ability to manipulate objects] 6 points -->

You can access and update proprties of an object using dot or square bracket notation like below. 

```js
let person = { 
  name: 'Jakeb', 
  age: 24, 
  gender: 'male'
};

person.email = 'Jakeb1@gmail.com';
person['age'] = 64;

console.log(person); // output: {name: "Jakeb", age: 64, gender: "male", email: "Jakeb1@gmail.com"}
```

Similarly, you can delete a property with "delete".

```js
delete person.age;
console.log(person); //output: { name: 'Jakeb', gender: 'male', email: 'Jakeb1@gmail.com' }
```

Creating object methods:
You can define methods within an object to perform operations. In this method, "this" refers to the object. 

```js
let person = { 
  name: 'Jakeb', 
  gender: 'male', 
  email: 'Jakeb1@gmail.com',
  greet: function() {
    console.log("Hello, my name is " + this.name)
  } }

person.greet(); //output: Hello, my name is Jakeb
```

You can loop through objects properties using 'for... in' loops. 

```js
let person = { 
  name: 'Jakeb', 
  gender: 'male', 
  email: 'Jakeb1@gmail.com',
}

for (let property in person) {
  console.log(property + ': ' + person[property]);
} // output: name: Jakeb \n gender: male \n email: Jakeb1@gmail.com
```
You can use Object.assign() to copy values to a target object. 

```js
let person = { 
  name: 'Jakeb', 
  gender: 'male', 
  email: 'Jakeb1@gmail.com',
}

let profession = {
  occupation = "web developer",
  skillLevel = "beginner"
}

Object.assign(person, profession);
console.log(person) // output: {name: 'Jakeb', gender: 'male', email: 'Jakeb1@gmail.com', occupation: 'web-developer', skillLevel: 'beginner'}
```

---

## 12 - Explain how JSON can be manipulated in JavaScript, using examples from the JavaScript programming language
<!-- [Demonstrates an extensive ability to manipulate JSON] 6 points -->

JavaScript Object Notation is easily parsed to JavaScript using the build in JSON object. This will convert a JSON string into a JavaScript object. For example:

```js
let jsonStr = '{"name": "Jakeb", "age": 24, "gender": "male"}';
let javaScript = JSON.parse(jsonStr);
console.log(javaScript); // output: { name: 'Jakeb', age: 24, gender: 'male' }
```

Similarly, you can convert a JavaScript object into a JSON string using JSON.stringify().

```js
let javaScript = {
  name: "Jakeb",
  age: 30,
  gender: "male"
};

let jsonStr =  JSON.stringify(javaScript);

```

JSON information can then be manipulated like any other JavaScript object as mentioned in Q11.

---

## 13 - For the code snippet provided below, write comments for each line of code to explain its functionality. In your comments you must demonstrates your ability to recognise and identify functions, ranges and classes
<!-- [Demonstrates an extensive ability to recognise functions, ranges and classes] 12 points -->


```javascript

class Car {
  // creates a class name "Car" with a constructor that takes "brand"
  constructor(brand) {
    // The Car.carname is set to the brand of the car. 
    this.carname = brand;

  }

  present() {
    // Creates a method called "present", concatonating a string saying I have a, then adding the Car.carname, which is the brand. 
    return 'I have a ' + this.carname;

  }
}

  // Define a class "Model" that extends the "car" class. 
class Model extends Car {
  // defines the constructor method to take brand and mod as arguments. 
  constructor(brand, mod) {
    // Calls the "car" class for brand. 
    super(brand);
    // defines model as the mod argument passed in. 
    this.model = mod;

  }
  // defines a method called show to return a string starting with the Car.carname [brand], concatenating "it was made in" then the model.
  show() {

    return this.present() + ', it was made in ' + this.model;

  }
}
// creates an array of car makes.
let makes = ["Ford", "Holden", "Toyota"]

// makes an array of model years. 
let models = Array.from(new Array(40), (x,i) => i + 1980)

// defines a function to create a random integer between a passed minimum and maximum. 
function randomIntFromInterval(min,max) { // min and max included

    return Math.floor(Math.random()*(max-min+1)+min);

}

// Creates a loop to iterate through each model year in 'models' array. 
for (model of models) {

  // choose a random car make from the 'makes' array. 
  make = makes[randomIntFromInterval(0,makes.length-1)]
  // choose a random model from the "models" array. 
  model = models[randomIntFromInterval(0,makes.length-1)]

  // Create a new "Model" object with the random make and model year.
  mycar = new Model(make, model);

  // Print a string with the car make and model year. 
  console.log(mycar.show())

}