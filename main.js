const readline = require('readline-sync');

let name = readline.question("What is your name?");
console.log("Hello," +name+ "!");

   
let questions = readline.question[
       "1. How can you check the data type of a value?",
       "2. What are the main data types?",
       "3. What is the difference between null and undefined?",
       "4. What will be the output of console.log(5+'5')?",
       "5. What is === used for?"
];

for (let i = 0; i < questions.length; i++); {
        let userResponse = readline.question(questions[i] + " ");
              console.log(`Q ${i +1}: {questions [i]}`);
              console.log(`Your response ${userResponse}\n`);

};