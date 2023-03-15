// const customName = document.getElementById('customname');
// const randomize = document.querySelector('.randomize');
// const story = document.querySelector('.story');

// function randomValueFromArray(array){
//   const random = Math.floor(Math.random()*array.length);
//   return array[random];
// }

// //2nd

// const storyText="It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
// let insertX=['Willy the Goblin','Big Daddy','Father Christmas']
// let insertY=['the soup kitchen','Disneyland','the White House']
// let insertZ=['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away']


// //3rd

// randomize.addEventListener('click', result);

// function result() {
//     let newStory=storyText;

//     const xItem = randomValueFromArray(insertX);
//     const yItem = randomValueFromArray(insertY);
//     const zItem = randomValueFromArray(insertZ);

//     newStory = newStory.replaceAll(':insertx',xItem);
//     newStory = newStory.replaceAll(':inserty:',yItem);
//     newStory = newStory.replaceAll(':insertz:',zItem);


//   if(customName.value !== '') {
//     const name = customName.value;
//     newStory = newStory.replace('Bob',name);
//   }

//   if(document.getElementById("uk").checked) {
//     const weight = `${Math.round(300/14)} stones`;
//     const temperature =  `${Math.round((94-32)*5/9)} centigrade`;
//     newStory = newStory.replace('94 fahrenheit' ,temperature);
//     newStory = newStory.replace('300 pounds',weight);
//   }

//   story.textContent = newStory;
//   story.style.visibility = 'visible';
// }


function add7(value){
  return value+7;
}

function multiply(value1,value2){
  return value1*value2;
}

function capitalize(string){
  return string.charAt(0).toUpperCase()+string.slice(1);
  
}

function lastLetter(string){
  return string.charAt(string.length-1);
}

console.log(lastLetter("chutiya"));

console.log(capitalize("hello"));
console.log(add7(36));
console.log(multiply(5,3));