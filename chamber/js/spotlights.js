// Spotlight
// JSON
const requestPath = './data/data.json';
let companies = null;
let company1 = 0;
let company2 = 0;
let company3 = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

do {
    company1 = getRandomInt(11);
} while(company1 === company2 || company1 === company3);

do {
    company2 = getRandomInt(11);
} while(company2 === company1 || company2 === company3);

do {
    company3 = getRandomInt(11);
} while(company3 === company2 || company3 === company1);

fetch(requestPath)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    
    companies = jsonObject['companies'];
    displayCompany(companies[company1]);
    displayCompany(companies[company2]);
    displayCompany(companies[company3]);
  });


function displayCompany(company) {
  // Create the elements
  let name = document.createElement('h2');
  let card = document.createElement('div');
  let image = document.createElement('img');
  let phone = document.createElement('p');
  let url = document.createElement('a');

  // Change the textContent of the name, address, phone and url
  name.textContent = company.name;
  phone.textContent = company.phone;
  url.textContent = company.website;

  // Image
  image.setAttribute('src', company.logo)
  image.setAttribute('alt', `${company.name}'s logo`)
  image.setAttribute('loading', 'lazy');

  // Link
  url.setAttribute('href', '#')

  // Append them to the document
  card.appendChild(name);
  card.appendChild(image);
  card.appendChild(phone);
  card.appendChild(url);

  // Add the card to the document
  document.getElementById('spotlights').appendChild(card);
}