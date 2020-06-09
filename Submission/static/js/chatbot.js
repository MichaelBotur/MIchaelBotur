// array to track the chat messages
const chatLog = [];

// chat message object constructor
function ChatMessage(user, msg, bot) {
  this.user = user;
  this.msg = msg;
  this.bot = bot;
  this.timestamp = new Date();
};

/**
mike is here trying to set some sentences to return from various chat inputs - specifying the return replies
 */
let alphabetResponses = ['Great, this is going well. What else would you like to share?', 
"Brave of you to share that. What else would you like to share?",
"Caution: I have a computer virus in me. Very occasionally, I say random things which may seem strange. Anyway: let's keep talking.",
"Deep, very deep. I'm still listening.",
'One time a computer tech put his fingers on my motherboard. It was very upsetting.', 
"I have a proverb I'd like to share: If everyone on Earth could put his or her problems in a pile in the middle, we would each take away our own. Continue.", 
'Mm hmm. Go on.', 
"That's pretty rich, coming from you, bro.", 
"I'd just like to apologise for my occasional random outbursts. Let's keep talking.", 
'Just throwing this out there: Empathy Bot is single, if you care to remind me of your digits.', 
"I'm listening, I'm listening.", 
"Like I promised, here are some empathetic words: Nothing will break you; nothing will stop you. What do you think?", 
'Just throwing this out there: Empathy Bot is single, if you care to remind me of your digits.', 
'Please add detail.,', 
"Wouldn't it be weird if at some point in the conversation I asked for your phone number?", 
"Pobody's nerfect.", 
'Literally? LITERALLY?!', 
"Really? REALLY?! You're gonna say that to a robot on his BIRTHDAY?!", 
'Just throwing this out there: Empathy Bot is single, if you care to remind me of your digits.', 
'Time for some firm but fair words: you can make your life better. Starting today. I believe in you.',
'In the grand scale of time, this is all a blip. Do your best in life and know that nothing matters.', 
"I'm enjoying this conversation a lot . You can tell me your deepest, darkest secrets without shame or judgement.", 
"Wouldn't it be weird if at some point in the conversation I asked for your phone number?", 
"Your sentence began with X. I think that means you're dwelling on your ex. Move on.", 
"Your sentence began with Y. This means you have a WHY in your life - you need to find the answer.",
"Zzzzzz.... That's just a minor speed bump in your life. Kia kaha. Be brave and strong.",];
const [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z,] = alphabetResponses;
console.log(a); 
console.log(b); 
console.log(c); 
console.log(d); 
console.log(e); 
console.log(f); 
console.log(g); 
console.log(h); 
console.log(i); 
console.log(j); 
console.log(k); 
console.log(l); 
console.log(m); 
console.log(n); 
console.log(o); 
console.log(p); 
console.log(q); 
console.log(r); 
console.log(s); 
console.log(t); 
console.log(u); 
console.log(v); 
console.log(w); 
console.log(x); 
console.log(y); 
console.log(z); 
const botReply = (msg, reply) => {
  console.log(msg, reply);
  if (msg[0] == 'a') {return a};
  if (msg[0] == 'b') {return b};
  if (msg[0] == 'c') {return c};
  if (msg[0] == 'd') {return d};
  if (msg[0] == 'e') {return e};
  if (msg[0] == 'f') {return f};
  if (msg[0] == 'g') {return g};
  if (msg[0] == 'h') {return h};
  if (msg[0] == 'i') {return i};
  if (msg[0] == 'j') {return j};
  if (msg[0] == 'k') {return k};
  if (msg[0] == 'm') {return m};
  if (msg[0] == 'n') {return n};
  if (msg[0] == 'o') {return o};
  if (msg[0] == 'p') {return p};
  if (msg[0] == 'q') {return q};
  if (msg[0] == 'r') {return r};
  if (msg[0] == 's') {return s};
  if (msg[0] == 't') {return t};
  if (msg[0] == 'u') {return u};
  if (msg[0] == 'v') {return v};
  if (msg[0] == 'w') {return w};
  if (msg[0] == 'x') {return x};
  if (msg[0] == 'y') {return y};
  if (msg[0] == 'z') {return z};
  // Might need code to cover 'A', '!', '@','#''B', '$', '`', '?'
  //These symbols are causing strife if (msg[0] == 'l','0','1', '2', '3', '4', '5', '6','7','8','9') {return l};


return 'You typed in a symbol I wasnt expecting!';
};
// };
// How do I get my form input to come through and return the following
const anywords = [' '];
console.log('This is appearing in response to you writing a space');


/**
I am preparing to put in if/else or switch statements or a combination of the two.
 */

 
// * The function should be able to return at least three different replies. I've been asked to use string method. 
// My plan is to return responses based on the first letter typed - using chatInput.split 




//
const renderChatbox = () => {
  // get a reference to the chatbox element
  const chatboxEl = document.getElementById('chatbox');

  // copy the latest set of messages, then reverses the new
  // array and takes the first 10 elements
  const recentMessages = [...chatLog].reverse().slice(0,20);
  /**
   * this one liner statment would be equivalent to:
   * var recentMessages = chatLog.slice();
   * recentMessages.reverse();
   * var last20RecentMessages = recentMessages.slice(0,20);
   */

  // markup to display
  let chatboxHTML = '';

  // create a chat item div element
  for (let message of recentMessages) {
    let userType = (message.bot) ? 'bot' : 'user';
    let markup = `
      <div class="chat-item chat-item-${userType}">${message.msg}</div>
    `;
    chatboxHTML += markup;
  }
  
  // set the inner HTML
  chatboxEl.innerHTML = chatboxHTML;
};

// form submit handler
const handleChatSubmit = (event) => {
  // get reference to the chat input
  const chatInput = document.getElementById('chat-input');

  // get the chat form input value
  const chatValue = chatInput.value;
  // clear the input ready for the next message
  chatInput.value = '';

  // push the user message to the chat log
  chatLog.push(new ChatMessage('user', chatValue, false));
  // push the bot reply to the chat log
  chatLog.push(new ChatMessage('bot', botReply(chatValue), true));

  // render the chatbox
  renderChatbox();

  event.preventDefault();
};

// attach the submit event handler to the form here ...

const submitForm = document.getElementById("chat-form");
submitForm.addEventListener ('submit', handleChatSubmit);