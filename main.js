const send_messageEl = document.getElementById("send_message");
const contactsEl = document.getElementById("contacts");
function messageSent() {
    
}

function sendMessage() {
    contactsEl.classList.remove("contacts")
    console.log("Meddelandet sänds och formuläret töms.")
    alert ("Meddelandet skickat!")
}
send_messageEl.addEventListener('click', sendMessage);