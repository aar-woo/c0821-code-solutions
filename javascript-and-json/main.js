var library = [
  {
    title: 'Ready Player One',
    author: 'James Bond',
    isbn: '94501'
  },
  {
    title: 'And Then There Were None',
    author: 'Agatha Christie',
    isbn: '73618'
  },
  {
    title: 'The Ranger',
    author: 'John Flanagon',
    isbn: '61832'
  }
];

console.log('library:', library);
console.log('typeof library:', typeof library);

var JSONString = JSON.stringify(library);
console.log('JSONString:', JSONString);
console.log('typeof JSONString:', typeof JSONString);

var manualJSONString = '[{"title":"Ready Player One","author":"James Bond","isbn":"94501"},{"title":"And Then There Were None","author":"Agatha Christie","isbn":"73618"},{"title":"The Ranger","author":"John Flanagon","isbn":"61832"}]';
console.log('manualJSONString:', manualJSONString);
console.log('typeof of manualJSONString:', typeof manualJSONString);

var parsedObj = JSON.parse(manualJSONString);
console.log('parsedObj:', parsedObj);
console.log('typeof parsedObj:', typeof parsedObj);
