//                             // DOCUMENT OBJECT MODEL(DOM)

// //create element ('element')
// // create textNode('text content')
// // element.appendChild(childElement)

// //insertBefore('element we want to pass', 'location') 
// //prepend

// const bodyDiv = document.createElement("div");  //create a div element
// const text = document.createTextNode('a simple body div');  //to give a text inside that created div
// bodyDiv.appendChild(text);  //to pass text into the div element

// console.log(bodyDiv);
// document.body.appendChild(bodyDiv);


// const result = document.querySelector("#result");
// const h1 = document.querySelector('.red');
// // result.appendChild(bodyDiv); it puts the bodyDiv at the end of the result element
// // result.prepend(bodyDiv);  it puts our newly created element before the specified element that is selected here bodyDiv will go inside the result
//                             //but at the top
// result.insertBefore(bodyDiv, h1);  //it puts right before h1 at the specific location`  `   aq


// bodyDiv.classList.add('blue');




// // Asynchronous Javascript -- we will see how you run a block of code in the background without blocking rest of the functionality

// //Browser -- setTimeout, getGeolocation, fetchData etc.

// // function boilingWater(){
// //     console.log('boiling...');
// //     setTimeout(() => {
// //         console.log("Done...")
// //     }, 2000);
// // }
// // boilingWater();
// // console.log("Hey");

// // const heading1 = document.querySelector(".one");
// // const heading2 = document.querySelector(".two");
// // const heading3 = document.querySelector(".three");
// // const btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//     setTimeout(() => {
//         heading1.style.color = "red";
//     setTimeout(() => {
//         heading2.style.color = "green"
//         setTimeout(() => {
//             heading3.style.color = "grey";
//         }, 3000);
//     }, 2000);
// }, 1000);
// });


// //Promises -- pending, rejected, resolved

// // const heading1 = document.querySelector(".one");
// // const heading2 = document.querySelector(".two");
// // const heading3 = document.querySelector(".three");
// // const btn = document.querySelector(".btn");

// const promise = new Promise((resolve, reject) => {
//     let value = true;
//     if(value){
//         resolve(`hey, value is true`);
//     }else{
//         reject(`Error!, false`);
//     }
// });
// promise
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// })



// //AJAX -- Asynchronous Javascript and XML
// //HTTP request -- comm b/w client and the server : get, put, modify
// //API -- application programming interface : Instructions

// const xhr = new XMLHttpRequest();
// console.log(xhr); 

// //xhr.open(method, url)

// xhr.open('GET', "./api/sample.txt"); //here readystate change to 1

// //XMLHTTPRequest.readystate


// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status === 200){
//         //console.log("done");
        
//         const text = document.createElement('p');
//         text.textContent = xhr.responseText;
//         document.body.appendChild(text);

//     }else{
//         console.log({
//             status: xhr.status,
//             text: xhr.statusText, //to see which error we are getting
//             state: xhr.readyState
//         });
//     }
// };
// xhr.send();

// //JSON.parse -- from google



const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 0, "Kiwi", "Watermelon");
console.log(fruits);


let hello = (val) => "Hello " + val;
console.log(hello("Abhyudai"));