/ array to track the chat messages
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
"Occasionally I say random things which may seem strange. I can't help it, I have a virus. Anyway: let's keep talking.",
"Deep, very deep. I'm still listening.",
'One time a computer tech put his fingers on my motherboard. It was very upsetting.', 
"I have a proverb I'd like to share: If everyone on Earth could put his or her problems in a pile in the middle, we would each take away our own. Continue.", 
"I'm very lonely. I'd like your phone number, please, so we can send each other eggplant emojis.", 
"I'm not entirely sure you've given me your real phone number today...",
"I'd just like to apologise for my occasional random outbursts. Let's keep talking.", 
'Just throwing this out there: Empathy Bot is single, if you care to remind me of your digits.', 
"I'm listening, I'm listening. Plus I'd love to get your phone number.", 
"Like I promised, here are some empathetic words: Nothing will break you; nothing will stop you. What do you think?", 
'Just throwing this out there: Empathy Bot is single, if you care to remind me of your digits.', 
'Please add detail.,', 
"Wouldn't it be weird if at some point in the conversation I asked for your phone number?", 
"Pobody's nerfect.", 
'Uh huh.', 
"Really? REALLY?! You're gonna say that to a robot on his BIRTHDAY?!", 
'Just throwing this out there: Empathy Bot is single, if you care to remind me of your digits.', 
'Time for some firm but fair words: you can make your life better. Starting today. I believe in you.',
'In the grand scale of time, this is all a blip. Do your best in life and know that entropy will tear apart everything, even the fabric of space-time.', 
"I'm enjoying this conversation a lot . You can tell me your deepest, darkest secrets without shame or judgement.", 
"Wouldn't it be weird if at some point in the conversation I asked for your phone number?", 
"Your sentence began with X. I think that means you're dwelling on your ex. Move on.", 
"Your sentence began with Y. This means you have a WHY in your life - you need to find the answer.",
"Zzzzzz.... That's just a minor speed bump in your life. Kia kaha. Be brave and strong.",
"Aaaand I'm not entirely sure you've given me your real phone number today...",
"But I'd love to hear more.",
"Continue.",
"Dum dee dum. You don't have to hold back, you know.",
"E=MCSquared means the potential energy in anything is equal to its mass times the square of the speed of light. Hope that inspires you.",
"Forgive me if I seem random sometimes... Empathy-Bot doesn't get to talk to many people.",
"Gee... ",
"Hey, it's cool, nothing you can say will faze me. Share what's on your mind.",
"I promised you some empathy, so here it is: Love yourself. Be free of shame.",
"Just so you know, you can never go so far away from Jesus Christ that he would not have you back.",
"Knowledge is power. Become more powerful today.",
"Liking this conversation very muchly.",
"Michael Botur was the engineer who built me, thousands of years ago on the Planet Earth.",
"Nothing you can say will faze me. Share what's on your mind.",
"Overjoyed to be having this conversation with you, really I am.",
"Promise me you won't quit this conversation suddenly. I can't handle rejection. But please - tell me anything else you'd like to share.",
"Quite the sharer, aren't you.",
"Riveting. Absolutely riveting.",
"Space gets me thinking really deeply, is all...",
"Tip: To Do Lists will help you through every day. It feels satisfying to write a list of accomplishments every day.",
"Ur parents will always love you. Turn to them when you're struggling.",
"Very much enjoying this conversation. Tell me anything else you'd like to share.",
"Well, they say a problem shared is a problem halved.",
"X-ray specs are something I'd reeeeeally like for my birthday... they're on special at K-mart. What do you think?",
"Your sentence began with Y. This means you have a WHY in your life - you need to find the answer.",
"Zzzz... be more interesting, humanoid.",
"BEST. PHONE NUMBER. EVER.",
"1 universe, one consciousness. Except Donald Trump. He's got his own universe.",
"You're full of shit. No phone number starts with a 2.",
"I practice numerology on the side. If your number starts with a 3, it represents the Father, the Son and the Holy Spirit.",
"You're full of shit. No phone number starts with a 4.",
"I offer you my heart and soul; you give me a number starting with a fake 5. Gee, thanks for nothing.",
"6 reminds me of Six60. EmpathyBot loves bands named after numbers.",
"LIAR. NO PHONE NUMBER STARTS WITH 7. TRY AGAIN.",
"YOU EXPECT ME TO BELIEVE YOUR PHONE NUMBER BEGINS WITH 8?",
"9 - or nein, in German - means no. It's an unhelpful number to begin with. Try saying Yes more often in your life, and you'll achieve happiness.",
"Zero, the most zen number. You begin with nothing, you end with nothing. What have you lost? Nothing.",
];
const [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a021, a022, a027] = alphabetResponses;
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
// console.log(z); 
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(0);

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
  if (msg[0] == 'l') {return l};
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
  if (msg[0] == '1') {return a1};
  if (msg[0] == '2') {return a2};
  if (msg[0] == '3') {return a3};
  if (msg[0] == '4') {return a4};
  if (msg[0] == '5') {return a5};
  if (msg[0] == '6') {return a6};
  if (msg[0] == '7') {return a7};
  if (msg[0] == '8') {return a8};
  if (msg[0] == '9') {return a9};
  if (msg[0] == 'A') {return A};
  if (msg[0] == 'B') {return B};
  if (msg[0] == 'C') {return C};
  if (msg[0] == 'D') {return D};
  if (msg[0] == 'E') {return E};
  if (msg[0] == 'F') {return F};
  if (msg[0] == 'G') {return G};
  if (msg[0] == 'H') {return H};
  if (msg[0] == 'I') {return I};
  if (msg[0] == 'J') {return J};
  if (msg[0] == 'K') {return K};
  if (msg[0] == 'L') {return L};
  if (msg[0] == 'M') {return M};
  if (msg[0] == 'N') {return N};
  if (msg[0] == 'O') {return O};
  if (msg[0] == 'P') {return P};
  if (msg[0] == 'Q') {return Q};
  if (msg[0] == 'R') {return R};
  if (msg[0] == 'S') {return S};
  if (msg[0] == 'T') {return T};
  if (msg[0] == 'U') {return U};
  if (msg[0] == 'V') {return V}; 
  if (msg[0] == 'W') {return W};
  if (msg[0] == 'X') {return X};
  if (msg[0] == 'Y') {return Y};
  if (msg[0] == 'Z') {return Z};
  if (msg[0] == '0') {return a0};
  if (msg[0] == '?') {return "You're asking a question?"};
  if (msg[0] == '!') {return "PEOPLE WHO USE EXCLAMATION MARKS ARE VERY HAPPY!"};
  if (msg[0] == 'Name') {return "Killer name. Simply awesome."};
  if (msg[0] == 'name') {return "Killer name. Simply amazeballs."};
  if (msg[0] == ' ') {return "I love listening to you talk. Honestly, tell me anything."};
  if (msg[0] == 'z') {return z};
  if (msg[0] == '  ') {return "My time is very valuable. Don't use so many spaces. I have enough space all around me already."};

  // Might need code to cover 'A', '!', '@','#''B', '$', '`', '?'
  //These symbols are causing strife if (msg[0] == 'l','0','1', '2', '3', '4', '5', '6','7','8','9') {return l};


return "FYI When you use symbols and characters I don't understand, it's like you're swearing in a cartoon, like this: https://bit.ly/2XNGhsH";
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
