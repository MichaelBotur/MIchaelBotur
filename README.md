# WDD01 Challenge 21

Diving into ES6 syntax and features.

## Getting Started

Same as the other daily challenges. Git `fork` and `clone` this repository.

## Part A

For this part, put your code in the `es6.js` file. Use the `Code Runner` to execute the code in VS Code.

1. Declare a `const` variable named `foo` and assign it a value of 'Hello, World!';
2. Under the `foo` variable, try to assign a new value to `foo`. You can try to change it to anything.
    * If you save and try to run the code you should get an error complaining about assigning a new value to a constant variable.

Now to try out the new Fat Arrow Functions, or "arrow function" for short.

3. Declare a new variable called `welcomeMessage` and assign it an arrow function which takes a single parameter. Name the parameter `msgObj`.
    * The `msgObj` parameter will be a Javascript object.
4. Now let's grab the properties from the `msgObj` parameter to use later in the function. Use the object destructuring syntax to pull a `name` and `msg` property from the `msgObj` parameter.
    * The syntax should be: `const { name, msg } = msgObj;`
5. Under the object destructuring statement, declare another `const` variable called `message`.
6. Assign the `message` variable an empty string template.
    * Use the backtick (`) character for string templates.
7. In the string template, add a new line in the string template and use the dollar sign curly braces notation to add the `name` and `msg` variables to the string template.
    * The string template should now be a multi-line string.
    * It should look like this:

```javascript
const message = `
  👋 ${msg} ${name} 👋
`;
```

8. Finally, in the `welcomeMessage` function, `console.log` the `message`.
9. Call the `welcomeMessage` function in the script and pass in an object with a `name` property and `msg` property.
    * You can use your name for the message property.
    * Add a message for the message property.
    * E.g. `{ name: 'Captain America', msg: 'Avengers Assemble!!! 🛡️' }`

Now let's try out a `for/of` loop. You should have seen the `avengers` array. Let's iterate over the array and print out a nicely formatted message.

10. Declare a new `for/of` loop. 
    * `for (let avenger of avengers) { ... }`.
11. In the `for` loop, use the object destructuring syntax again to "pull" the object properties from the `avenger` object.
    * `const { name, alias } = avenger;`.
12. Now let's check for the imposter Avenger in the list. Add a conditional `if` statement to check if the `alias` variable equals `Batman`.
13. In the `if` code block, `throw` a `TypeError` with an appropriate error message.
14. Outside of the `if` block, but still in the `for` loop, `console.log` a string template message that includes the avenger `name` and `alias` property.
15. Run the code and make sure it runs.
    * Fix the array by removing the not-Avenger.

## Part B

In Part B you'll be writing some logic for a chatbot to reply to user input.

For this challenge section, you will need to use the boilerplate website that's been set up in the `/Submission` folder.

Your code will need to go in the `static/js/chatbot.js` file.

16. In `chatbot.js` there are functions already written to handle the form submit and render the chat to the page. You need to write the code to attach the form submit handler to the form element.
    * Add the code for this at the bottom of the page.
    * Check the form `id` in the `index.html` file. There should be only one form in the document.
    * First you'll need to get a reference to the form element, then use the `.addEventListener` method to set the 'submit' event.

If you've attached the submit handler correctly, you should be able to chat with the bot!

You should also notice that the bot doesn't reply properly. You will need to implement the chat logic in the `botReply` function.

17. Find the `botReply` function in `chatbot.js`. You'll see it takes in a single parameter `msg`. That value will be the last input the user typed in. In the `botReply` function add an empty variable named `reply`.
18. Currently `botReply` always returns the string 'Error unknown ...' regardless of the user input. Update the `return` statement to return the `reply` variable.
19. Write the `botReply` logic to take the `msg` parameter and set the value of the `reply` variable based on something the user entered. It's up to you how to implement it, and what text to use for the replies.
    * You could use if/else or switch statements or a combination of the two.
    * You could just return a random string every time.
    * The function should be able to return at least three different replies.
    * You will need to use your `string-method-fu` here!

You can update the rest of the page and CSS as you see fit. Just make sure to keep any existing elements and element attributes (for testing purposes ...).

# Submit the Challenge

Same workflow as the other challenges.

Git `add`, `commit`, `push`, then create a `pull request`.

# Git CLI Refresher

Remember to `fork` the repository first!!!

Then you can follow the shell commands below:

```shell
# example git clone command - replace this URL with your repo's URL
git clone git@github.com:YOU_REPO/WDD01-Challenge-21.git

# make sure to change directory into the cloned directory
cd WDD01-Challenge-21

# open VS Code
code .

# start coding ...

# when ready to commit and push
git add .

git commit -m "Challenge 21 ..."

git push origin pilot
```

Don't forget to open a `pull request` on the GitHub web app after you've pushed your code.
