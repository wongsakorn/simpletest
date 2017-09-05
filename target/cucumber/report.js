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
  "duration": 5028359738,
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
  "duration": 578110374,
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
  "duration": 105811275,
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
  "duration": 3358369574,
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
  "duration": 562628421,
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
  "duration": 343168448,
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
  "duration": 36289343,
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
  "name": "I click remove user icon",
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
  "duration": 3267031382,
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
  "duration": 605452393,
  "status": "passed"
});
formatter.match({
  "location": "ExerciseSteps.clickRemoveUserIcon()"
});
formatter.result({
  "duration": 141404095,
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
  "duration": 48754082,
  "status": "passed"
});
});