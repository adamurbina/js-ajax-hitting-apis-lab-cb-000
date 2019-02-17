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
      '<a href=' + repo.html_url +'>'+ repo.name +'</a>'
      + ': <a href="#" data-repo_name="' + repo.name + '" onclick="getCommits(this)">Commits</a>'
      + '</br>'
  ).join('')}`;
  document.getElementById("repositories").innerHTML = repoList;
}

function getCommits(repo) {
    const name = repo.dataset.repo_name;
    const req = new XMLHttpRequest();
    req.addEventListener('load', showCommits);
    req.open('GET', 'https://api.github.com/repos/'+ name + '/commits');
    req.send();
}
