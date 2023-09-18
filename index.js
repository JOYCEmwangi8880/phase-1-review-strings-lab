// Write your code in this file!
//const currentUser = 'Grace Hopper';
//const welcomeMessage = 'Welcome to Flatbook, ';
//const excitedWelcomeMessage = "WELCOME TO FLATBOOK, ";


const currentUser = 'Grace Hopper';

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

//const excitedWelcomeMessage = 'WELCOME TO FLATBOOK, ' + currentUser.toUpperCase() + '!';

const excitedWelcomeMessage = welcomeMessage.toUpperCase();
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

