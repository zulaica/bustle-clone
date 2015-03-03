Bustle.HomeController = Ember.Controller.extend({
  currentImage: "images/sleepy-dog-of-dog.jpg",
  currentHeadline: "This dog is taking a nap.",
  imageArray: ["images/sleepy-dog-of-dog.jpg", "images/depressing-beach-of-death.jpg", "images/churchy-church-of-church.jpg", "images/happy-beach-of-life.jpg"],
  headlineArray: ["This dog is taking a nap.", "The dog is taking an eternal nap.", "The dog is praying. Duh.", "The dog is drinking some sort of tropical beverage."],
  actions: {

    nextSlide: function() {
      var idx = this.imageArray.indexOf(this.currentImage);
      if (idx == this.imageArray.length-1) {
        this.set('currentImage', this.imageArray[0]);
        this.set('currentHeadline', this.headlineArray[0]);
      }else {
        this.set('currentImage', this.imageArray[idx+1]);
        this.set('currentHeadline', this.headlineArray[idx+1]);
      }
    },

    previousSlide: function() {
      var idx = this.imageArray.indexOf(this.currentImage);
      if (idx == 0) {
        this.set('currentImage', this.imageArray.slice(-1)[0]); // .slice() returns the item in an array because it hates humanity.
        this.set('currentHeadline', this.headlineArray.slice(-1)[0]);
      }else {
        this.set('currentImage', this.imageArray[idx-1]);
        this.set('currentHeadline', this.headlineArray[idx-1]);
      }
    }

  }
});
