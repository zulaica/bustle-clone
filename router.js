Bustle.Router.map(function() {
  this.resource('home', {path: "/"});
  this.resource('articles', function (){
      this.resource('article01');
      this.resource('article02');
      this.resource('article03');
      this.resource('article04');
  });
});
