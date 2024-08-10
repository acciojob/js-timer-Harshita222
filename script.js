// write js code here if required
 const value = document.getElementById('timer')
function CurrentTime() {

let date = new Date();
	
let day =date.getDay();
let month = date.getMonth() +1;
let year = date.getFullYear();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
}
value.textContent = `${day}/${month}/${year},
${hour}:${minutes}:${seconds}`;
}
setInterval(CurrentTime ,1000)