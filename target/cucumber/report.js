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
  "duration": 6773002332,
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
  "duration": 703206481,
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
  "duration": 45995592,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Admin login and remove user",
  "description": "",
  "id": "exercise---login;admin-login-and-remove-user",
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
  "name": "I click remove user icon",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see user list table with 0 user",
  "keyword": "Then "
});
formatter.match({
  "location": "ExerciseSteps.navigateTologinPage()"
});
formatter.result({
  "duration": 3871457565,
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
  "duration": 597671729,
  "status": "passed"
});
formatter.match({
  "location": "ExerciseSteps.clickRemoveUserIcon()"
});
formatter.result({
  "duration": 113371383,
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
  "duration": 40098412,
  "status": "passed"
});
});