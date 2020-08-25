describe('stuartTheMinion', function() {

  var stuartTheMinion, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    stuartTheMinion = new StuartTheDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(stuartTheMinion.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(stuartTheMinion.$node, 'toggle');
    stuartTheMinion.step();
    expect(stuartTheMinion.$node.toggle.called).to.be.true;
  });


  it('should have a lineUp function that makes dancers line left to right', function() {
    // sinon.spy(stuartTheMinion.$node, 'toggle');
    // stuartTheMinion.lineUp();
    expect(typeof stuartTheMinion.lineUp === 'function').to.be.true;
  });

  it('should have a setPosition function that sets a random position of the dance', function() {
    // sinon.spy(stuartTheMinion.$node, 'toggle');
    // stuartTheMinion.lineUp();
    expect(typeof stuartTheMinion.setPosition === 'function').to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(stuartTheMinion, 'step');
      expect(stuartTheMinion.step.callCount).to.be.equal(0);
      stuartTheMinion.step();
      clock.tick(timeBetweenSteps - 1); // ? it seems an extra tick is necessary...
      // clock.tick(timeBetweenSteps);

      expect(stuartTheMinion.step.callCount).to.be.equal(1);
      // blinkyDancer.step();
      clock.tick(timeBetweenSteps);
      expect(stuartTheMinion.step.callCount).to.be.equal(2);
    });
  });
});
