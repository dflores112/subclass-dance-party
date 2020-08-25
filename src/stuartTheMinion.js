var StuartTheDancer = function(top, left, timeBetweenSteps) {


  Dancer.call(this, top, left, timeBetweenSteps);

};

StuartTheDancer.prototype = Object.create(Dancer.prototype);

StuartTheDancer.prototype.constructor = StuartTheDancer;

StuartTheDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);

  this.$node.toggle();

};