var BobTheDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="bobDancer"></span>');
  this.setPosition(top, left);
};

BobTheDancer.prototype = Object.create(Dancer.prototype);

BobTheDancer.prototype.constructor = BobTheDancer;

BobTheDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);

  this.$node.toggle();

};