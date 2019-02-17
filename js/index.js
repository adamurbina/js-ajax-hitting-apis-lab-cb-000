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
      + ': <a href="#" data-repo_name="' + repo.name + '" data-username="' + repo.owner.login + '" onclick="getCommits(this)">Commits</a>'
      + '</br>'
  ).join('')}`;
  document.getElementById("repositories").innerHTML = repoList;
}

function getCommits(repo) {
    const repo_name = repo.dataset.repo_name;
    const username = repo.dataset.username;
    const req = new XMLHttpRequest();
    req.addEventListener('load', displayCommits);
    req.open('GET', 'https://api.github.com/repos/' + username +'/' + repo_name + '/commits');
    req.send();
}


function displayCommits() {
  const commits = JSON.parse(this.responseText);
  const commitsList = `${commits.map(
    commit =>
    '/' + commit.commit.login + '/'+ commit.commit.author['name'] +'/'+ commit.commit.message + '<br>'
  ).join('')}`;
  document.getElementById("details").innerHTML = commitsList;
}
