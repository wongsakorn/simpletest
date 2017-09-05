$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber/Exercise.feature");
formatter.feature({
  "line": 1,
  "name": "Exercise - Login",
  "description": "As an admin\nI want to login\nSo that I manage users",
  "id": "exercise---login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Admin login",
  "description": "",
  "id": "exercise---login;admin-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I login with user name admin and password 1234",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should see user list table with 1 user",
  "keyword": "Then "
});
formatter.match({
  "location": "ExerciseSteps.navigateTologinPage()"
});
formatter.result({
  "duration": 6174635355,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    },
    {
      "val": "1234",
      "offset": 42
    }
  ],
  "location": "ExerciseSteps.loginWithUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 701198068,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    }
  ],
  "location": "ExerciseSteps.verifyUserListTableWithUsers(int)"
});
formatter.result({
  "duration": 156054772,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Admin login and add new user",
  "description": "",
  "id": "exercise---login;admin-login-and-add-new-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I login with user name admin and password 1234",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I add new user name win with password 1234",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see user list table with 2 user",
  "keyword": "Then "
});
formatter.match({
  "location": "ExerciseSteps.navigateTologinPage()"
});
formatter.result({
  "duration": 3382952294,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    },
    {
      "val": "1234",
      "offset": 42
    }
  ],
  "location": "ExerciseSteps.loginWithUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 573144727,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "win",
      "offset": 20
    },
    {
      "val": "1234",
      "offset": 38
    }
  ],
  "location": "ExerciseSteps.addNewUserAndPass(String,String)"
});
formatter.result({
  "duration": 346579574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 34
    }
  ],
  "location": "ExerciseSteps.verifyUserListTableWithUsers(int)"
});
formatter.result({
  "duration": 40393021,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Admin login and remove user",
  "description": "",
  "id": "exercise---login;admin-login-and-remove-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I login with user name admin and password 1234",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click remove user icon by user name user1",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should see user list table with 0 user",
  "keyword": "Then "
});
formatter.match({
  "location": "ExerciseSteps.navigateTologinPage()"
});
formatter.result({
  "duration": 3211599405,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    },
    {
      "val": "1234",
      "offset": 42
    }
  ],
  "location": "ExerciseSteps.loginWithUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 604499727,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 38
    }
  ],
  "location": "ExerciseSteps.clickRemoveUserIconByUserName(String)"
});
formatter.result({
  "duration": 144893761,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 34
    }
  ],
  "location": "ExerciseSteps.verifyUserListTableWithUsers(int)"
});
formatter.result({
  "duration": 32831304,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Admin login and remove user",
  "description": "",
  "id": "exercise---login;admin-login-and-remove-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I login with user name admin and password 1234",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I click remove user icon by user name user2",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see user list table with 0 user",
  "keyword": "Then "
});
formatter.match({
  "location": "ExerciseSteps.navigateTologinPage()"
});
formatter.result({
  "duration": 3232135227,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    },
    {
      "val": "1234",
      "offset": 42
    }
  ],
  "location": "ExerciseSteps.loginWithUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 672217855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 38
    }
  ],
  "location": "ExerciseSteps.clickRemoveUserIconByUserName(String)"
});
formatter.result({
  "duration": 52793231,
  "error_message": "java.lang.AssertionError: There should be \u0027user2\u0027 in table.\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertFalse(Assert.java:64)\n\tat com.exercise.bdd.steps.ExerciseSteps.clickRemoveUserIconByUserName(ExerciseSteps.java:62)\n\tat ✽.And I click remove user icon by user name user2(cucumber/Exercise.feature:26)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 34
    }
  ],
  "location": "ExerciseSteps.verifyUserListTableWithUsers(int)"
});
formatter.result({
  "status": "skipped"
});
});