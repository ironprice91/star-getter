var stars = [],
    getStarsComplete = false,
    user = null,
    resultEl = document.getElementById("result");

/**
 * Recursively called to get all starred repos of a github user and render results

  @pageNum typeof Number :: pages of starred repos
  @repoCount typeof Number :: Number of random repos to display
  @user typeof String :: users' stars to be in request

  return void;

 */
function getStarredRepos(pageNum, repoCount, user){
    var pages,
        starredRepos;

    starredRepos = axios.get(`https://api.github.com/users/${user}/starred?page=${pageNum}`).then(data => {

      pages = data.headers.link.split(",");

      if ( pages[1] && pages[1].indexOf("rel=\"last\"") > -1 ) {

          if ( document.getElementById("loading") === null ) {
            resultEl.innerHTML = "<div id='loading'>" + loadingTemplate + "</div>";
          }

          stars = _.concat(stars, data.data);
          getStarredRepos(pageNum+=1, repoCount, user);
      } else {
        stars = _.concat(stars, data.data);
        getStarsComplete = true;
        renderResults(getRandom(repoCount));
      }


    }).catch(e => {
      resultEl.innerHTML = "";
      resultEl.innerHTML += errorTemplate;
    });



};

function getRandom(count) {

  if ( parseInt(count, 10) === 1 ) { return cleanRepo(stars[Math.floor(Math.random() * stars.length)]); }

  var randoms = [];

  for ( var i = 0; i < count; i++ ) {
    randoms.push(cleanRepo(stars[Math.floor(Math.random() * stars.length)]));
  }

  return randoms;
}

function cleanRepo(repo){
  return _.pick(repo, ["name", "full_name", "description", "git_url", "homepage", "html_url"]);
}

function renderResults(result) {

  while ( resultEl.hasChildNodes() ) {
    resultEl.removeChild(resultEl.lastChild);
    resultEl.innerHTML = "";
  }

  if ( _.isArray(result) ) {

    _.forEach(result, function(repo) {
      resultEl.innerHTML += _.template(template)(repo);
    });
    return;

  }

  resultEl.innerHTML += _.template(template)(result);

}

document.getElementById("get-random-repo").addEventListener("click", function() {
  var repoCount = document.getElementById("repo-count").value || 1;

  user = document.getElementById("github-user").value || "ironprice91";

  if ( stars.length === 0 ) {
    getStarredRepos(1, repoCount, user);
    return;
  }

  renderResults(getRandom(repoCount));

});
