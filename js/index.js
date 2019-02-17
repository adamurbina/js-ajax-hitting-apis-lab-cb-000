// your code here
function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories);
  var username = document.getElementById("username");
  req.open('GET', 'https://api.github.com/users/' + username.value + '/repos');
  req.send();
}