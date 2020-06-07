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
 * 
 * FIX THIS!
 */
const botReply = (msg) => {

  console.log('TODO - botReply:', msg);

  return 'Error unknown ...';
};

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

