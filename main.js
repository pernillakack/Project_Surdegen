const menuButtonEl = document.getElementById("menuButton");
const menuEl = document.getElementById("menu");

function showMenu() {
    console.log("Hej");
    menuEl.classList.toggle("displayMenu");
    menuButtonEl.classList.add("hide");
    console.log("Öppnar menyn...");
}
menuButtonEl.addEventListener('click', showMenu);


const hide_messageEl = document.getElementById("hide_message");
const contactsEl = document.getElementById("contacts");
const sentEl = document.getElementById("sent")
        
        
        function hideMessage() {
            console.log("Hejjj!");
            contactsEl.classList.add("hide");
            sentEl.classList.add(showMessage);
            console.log("Meddelandet sänds och formuläret göms.");
            
        }
        hide_messageEl.addEventListener('click', hideMessage);