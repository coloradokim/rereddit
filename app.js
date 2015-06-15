//pro Tip - ID and pseudo code verbs in directions
//I can add new subreddits to my navigation with the input and submit button.

// built so far: on click of a button, take the value of the input and add it to the HTML
var Orbit = function() {
  this.requests = [];
};

Orbit.prototype.get = function(url, cb) {
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', cb.bind(request));
  request.send();
  return request;
};

var orbit = new Orbit();
var content = document.getElementById('content');
var button = document.getElementById('button');
var input = document.getElementById('input');
var nav = document.getElementById('nav')
var fromStorage = localStorage.getItem('foo')
  nav.innerHTML = fromStorage;

button.addEventListener('click', function(){
  nav.innerHTML = input.value;
  localStorage.setItem('foo', nav.innerHTML)
});

nav.addEventListener('click', function(){
    orbit.get('http://www.reddit.com/r/dogs.json', function(){
    var data = JSON.parse(this.response);
    var title =  data.data.children[0].data.title;
    var url = data.data.children[0].data.URL;
    content.innerHTML = '<a href = "'+url+'">'+ title + '</a>';
  })
});
