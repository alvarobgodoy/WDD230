// Footer
let lastModified = document.lastModified;
    
document.getElementById('lastUpdate').textContent = (`Last modification: ${lastModified}`);
let currentYear = document.querySelector('#currentYear');

year = new Date().getFullYear();

currentYear.textContent = year;

// Menu
function toggleMenu() {
  document.getElementById('primaryNav').classList.toggle('open');
  document.getElementById('hamburgerBtn').classList.toggle('open');
}

const btn = document.getElementById('hamburgerBtn');
btn.onclick = toggleMenu;

// Header date
const now = new Date();
const currentDate = new Intl.DateTimeFormat("en-UK", {
    dateStyle: "full"
}).format(now);

document.getElementById('currentDate').textContent = currentDate;

// JSON
const requestPath = './data/data.json';
let companies = null;

fetch(requestPath)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    companies = jsonObject['companies'];
    companies.forEach(displayCompany);
  });


function displayCompany(company) {
  // Create the elements
  let card = document.createElement('section');
  let name = document.createElement('p');
  let image = document.createElement('img');
  let address = document.createElement('p');
  let phone = document.createElement('p');
  let url = document.createElement('a');

  // Change the textContent of the name, address, phone and url
  name.textContent = company.name;
  address.textContent = company.address;
  phone.textContent = company.phone;
  url.textContent = company.website;

  // Image
  image.setAttribute('src', company.logo)
  image.setAttribute('alt', `${company.name}'s logo`)
  image.setAttribute('loading', 'lazy');

  // Link
  url.setAttribute('href', '#')

  // Append them to the document
  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(url);

  // Add the card to the document
  document.getElementById('directory').appendChild(card);
}

// Toogle View
function toogleView() {
  document.getElementById('viewBtn').classList.toggle('active')
  document.getElementById('directory').classList.toggle('active')
}