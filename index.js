const name = ['Roxie', 'Michelle', 'Ryan'];
    
function writeCards(name) {
for (let i = 0; i < name.length; i++) {
    console.log(`Thank you, ${name[i]}, for the wonderful birthday gift!`);
    debugger;
}
return name
}

writeCards(name);

let countdown = 10;
while (countdown >= 0) {
  console.log(countdown--);
}