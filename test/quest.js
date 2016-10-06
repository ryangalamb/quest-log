var test = require('tape');

var quest = require('../src/quest.js');
var counterId = require('../src/counterId.js');

var testDescription = "describing quest";
var testQuest;
var expectedId = 1;

var testDescription1 = "describing quest1";
var testQuest1;
var expectedId1 = 2;

var testDescription2 = "describing quest2";
var testQuest2;
var expectedId2 = 3;

var changedDescription = "newly changed description";

var questWithNoArgs;

var setup = function() {
  testQuest = quest(testDescription);
  testQuest1 = quest(testDescription1);
  testQuest2 = quest(testDescription2);
  questWithNoArgs = quest();
}

var teardown = function() {
  testQuest = undefined;
  testQuest1 = undefined;
  testQuest2 = undefined;

  counterId.resetIds();
}

test('create a new quest', function(t) {
  setup();

  t.equal(testQuest.getDescription(), testDescription, "description is set correctly");
  t.equal(testQuest.id, expectedId, "id is correct");

  teardown();
  t.end();
});

test('create three new quests', function(t) {
  setup();

  t.equal(testQuest.getDescription(), testDescription, "description is set correctly");
  t.equal(testQuest.id, expectedId, "id is correct");

  t.equal(testQuest1.getDescription(), testDescription1, "description 1 is set correctly");
  t.equal(testQuest1.id, expectedId1, "id 1 is correct");

  t.equal(testQuest2.getDescription(), testDescription2, "description 2 is set correctly");
  t.equal(testQuest2.id, expectedId2, "id 2 is correct");

  teardown();
  t.end();
});

test('change quest info', function(t) {
  setup();

  testQuest.setDescription(changedDescription);
  t.equal(testQuest.getDescription(), changedDescription, "description is changed correctly");

  questWithNoArgs.setDescription(changedDescription);
  t.equal(questWithNoArgs.getDescription(), changedDescription, "description is changed correctly after no args");
  teardown();
  t.end();
});

test('add subquest to subquestList', function(t) {
  setup();

  testQuest.addSubquest(testQuest1);
  t.equal(testQuest.getSubquestList().length, 1, "length is right after one addition")
  testQuest.addSubquest(testQuest2);
  t.equal(testQuest.getSubquestList().length, 2, "length is right after two additions")

  t.equal(testQuest.getSubquestList()[0].getDescription(), testDescription1, "description of first subquest is correct");
  t.equal(testQuest.getSubquestList()[1].getDescription(), testDescription2, "description of second subquest is correct");

  teardown();
  t.end();
})
