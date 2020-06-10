const avengers = [
  {
    name: 'Natasha Romanov',
    alias: 'Black Widow'
  },
  {
    name: 'Tony Stark',
    alias: 'Iron Man'
  },
  {
    name: 'Thor Odinson',
    alias: 'Thor'
  },
  {
    name: 'Captain America',
    alias: 'Steve Rogers'
  },
  {
    name: 'Bruce Wayne',
    alias: 'Batman'
  },
  {
    name: 'Clint Barton',
    alias: 'Hawk Eye'
  }
];
 
let welcomeMessage = (msgObj)=>{
const { name, msg } = msgObj; //THIS WHOLE CODE BLOCK - MIKE UNSURE WHERE WE ARE HEADED//
console.log(name);  //I've attempted to destructure my msjObj here but I doubt it works//
console.log(msg);//I've attempted to destructure my msjObj here but I doubt it works//
const message = `   
  👋 ${msg} ${name} 👋 
`;
console.log(message)}; //Mike unsure how the code is supposed to perform/behave//
welcomeMessage ({name: 'Mickey B', msg: 'Greetings from MB Developer'});

for (let avenger of avengers) { 
const { name, alias } = avenger;
// I am destructuring the avengers array within its own loop and trying to destructure the loop by separating at curly braces {}
if (alias== 'Batman') {
  console.log('TypeError' +alias + 'IS NOT AN AVENGER')
  return 'TypeError BATMAN IS NOT AN AVENGER'
}console.log(avenger)}
