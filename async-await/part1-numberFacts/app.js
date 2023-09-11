let favNumber = 27;
let baseURL = "http://numbersapi.com";

//  1). Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. 
async function getFavNumberFact() {
  let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
  console.log(data);
}

getFavNumberFact();

// 2). Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.
async function getMultipleNumberFacts() {
  let data = await $.getJSON(`${baseURL}/1,2,3,6..8,10?json`);
  console.log(data);
}

getMultipleNumberFacts();

// 3). Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.
async function getFourNumberFacts() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
  );
  facts.forEach(data => {
    $('body').append(`<p>${data.text}</p>`);
  });
}

getFourNumberFacts();

