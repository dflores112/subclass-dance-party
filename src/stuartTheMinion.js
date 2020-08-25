var StuartTheDancer = function(top, left, timeBetweenSteps) {


  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="stuartDancer"></span>');
  this.setPosition(top, left);


};

StuartTheDancer.prototype = Object.create(Dancer.prototype);

StuartTheDancer.prototype.constructor = StuartTheDancer;

StuartTheDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);

  this.$node.toggle();

};