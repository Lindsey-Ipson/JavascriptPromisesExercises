let favNumber = 11;
let baseURL = "http://numbersapi.com";

//  1). Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. 
$.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
  console.log(data);
});

// 2). Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.
$.getJSON(`${baseURL}/1,2,3,6..8,10?json`).then(data => {
  console.log(data);
});

// 3). Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.
let fourNumberFactPromises = [];

for (let i = 0; i < 4; i++) {
  fourNumberFactPromises.push($.getJSON(`${baseURL}/${favNumber}?json`));
}

Promise.all(fourNumberFactPromises)
  .then(facts => {
    facts.forEach(data => {
      $('body').append(`<p>${data.text}</p>`);
    });
  });