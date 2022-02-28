const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });

function displayProphets(prophet) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let image = document.createElement('img');
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');

  // Change the textContent property of the h2, p1 and p2 elements
  h2.textContent = `${prophet.name} ${prophet.lastname}`;
  p1.textContent = `Date of birth: ${prophet.birthdate}`
  p2.textContent = `Place of birth: ${prophet.birthplace}`

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
  image.setAttribute('src', prophet.imageurl);

  // Get the ending of the prophet order
  let prophetOrder = prophet.order;
  let orderEnding = ''
  if (prophetOrder == 1) {
    orderEnding = 'st'
  } else if (prophetOrder == 2) {
    orderEnding = 'nd'
  } else if (prophetOrder == 3) {
    orderEnding = 'rd'
  } else {
    orderEnding = 'th'
  }

  image.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} ${prophet.order}${orderEnding} Latter-day President`);
  image.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2, p1, p2 and image elements
  card.appendChild(h2);
  card.appendChild(p1);
  card.appendChild(p2);
  card.appendChild(image);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('div.cards').appendChild(card);
}