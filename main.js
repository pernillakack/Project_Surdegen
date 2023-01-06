const hide_messageEl = document.getElementById("hide_message");
const contactsEl = document.getElementById("contacts");


function hideMessage() {
    
    contactsEl.classList.toggle("hide");
    console.log("Meddelandet sänds och formuläret göms.");
    
}
hide_messageEl.addEventListener('click', hideMessage);
  
//Dölj menyn
const menuButtonEl = document.getElementById("menuButton");
const menuEl = document.getElementById("menu");

function showMenu() {
    menuEl.classList.toggle("displayMenu");
}
menuButtonEl.addEventListener('click', showMenu);
