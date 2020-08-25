describe('bobTheMinion', function() {

  var bobTheDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bobTheDancer = new BobTheDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bobTheDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(bobTheDancer.$node, 'toggle');
    bobTheDancer.step();
    expect(bobTheDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(bobTheDancer, 'step');
      expect(bobTheDancer.step.callCount).to.be.equal(0);
      bobTheDancer.step();
      clock.tick(timeBetweenSteps - 1); // ? it seems an extra tick is necessary...
      // clock.tick(timeBetweenSteps);

      expect(bobTheDancer.step.callCount).to.be.equal(1);
      // bobTheDancer.step();
      clock.tick(timeBetweenSteps);
      expect(bobTheDancer.step.callCount).to.be.equal(2);
    });
  });
});
