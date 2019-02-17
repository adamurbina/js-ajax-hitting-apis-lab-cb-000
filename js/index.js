// your code here
function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories);
  var username = document.getElementById("username");
  req.open('GET', 'https://api.github.com/users/' + username.value + '/repos');
  req.send();
}

function showRepositories(){
  var repos = JSON.parse(this.responseText);
  const repoList = `${repos.map(
    repo =>
      '<a href=' + repo.url +'>'+ repo.name +'</a><br>'
  ).join('')}`;
  document.getElementById("repositories").innerHTML = repoList;
}
