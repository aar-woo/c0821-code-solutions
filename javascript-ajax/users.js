var $userList = document.querySelector('#user-list');

var reqObj = new XMLHttpRequest();
reqObj.open('GET', 'https://jsonplaceholder.typicode.com/users');
reqObj.responseType = 'json';

reqObj.addEventListener('load', function () {
  console.log('status', reqObj.status);
  console.log('response', reqObj.response);
  for (var i = 0; i < reqObj.response.length; i++) {
    var user = document.createElement('li');
    user.textContent = reqObj.response[i].name;
    $userList.appendChild(user);
  }
});

reqObj.send();
