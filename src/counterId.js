/**
 * Stupid simple generation of unique IDs. Will replace with something more
 * sensible when it makes sense todo so
 */
var counterId = (function() {
  var STARTING_COUNTER = 0;
  var counter = STARTING_COUNTER;

  var createNewId = function() {
    counter++;
    return counter;
  }
  var resetIds = function() {
    counter = STARTING_COUNTER;
  }

  return {
    createNewId: createNewId,
    resetIds: resetIds,
  }
})();

module.exports = counterId;
