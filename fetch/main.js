const fetchResponsePromise = fetch('https://jsonplaceholder.typicode.com/users');
fetchResponsePromise
  .then(response => response.json())
  .then(data => console.log(data));

fetch('https://pokeapi.co/api/v2/pokemon/9')
  .then(response => response.json())
  .then(data => console.log(data));
