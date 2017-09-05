package com.exercise.bdd.steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.ChromeDriverManager;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.util.List;

public class ExerciseSteps {

    WebDriver driver ;

    public ExerciseSteps() {

        // To optimize -> use local driver factory + web driver pool
        ChromeDriverManager.getInstance().setup();
        DesiredCapabilities capabilities = DesiredCapabilities.chrome();
        driver = new ChromeDriver(capabilities);
    }

    @Given("^I am on login page$")
    public void navigateTologinPage() throws Throwable {
        driver.get("https://flyingdogz.github.io/");
    }

    @When("^I login with user name (\\S*) and password (\\S*)$")
    public void loginWithUsernameAndPassword(String userName, String password) throws Throwable {

        // To optimize -> use page factory
        WebElement userInputBox = driver.findElement(By.cssSelector("input[name='username']"));
        userInputBox.clear();
        userInputBox.sendKeys(userName);

        WebElement passInputBox = driver.findElement(By.cssSelector("input[name='password']"));
        passInputBox.clear();
        passInputBox.sendKeys(password);
        driver.findElement(By.cssSelector(".btn.btn-primary")).click();

    }

    @Then("^I should see user list table with (\\d+) user$")
    public void verifyUserListTableWithUsers(int user){
        List<WebElement> userRows = driver.findElements(By.cssSelector("tbody tr"));
        Assert.assertEquals("There should be number of user in table equal to " + user , user, userRows.size());
    }

    @When("^I click remove user icon$")
    public void clickRemoveUserIcon() throws Throwable {
        driver.findElement(By.cssSelector(".btn-danger")).click();
    }

    @When("^I click remove user icon by user name (\\S*)$")
    public void clickRemoveUserIconByUserName(String userName) throws Throwable {
        List<WebElement> deleteBtn = driver.findElements(By.xpath(".//tbody/tr/td[text()='" + userName + "']/../td[2]/button"));
        Assert.assertFalse("There should be '" + userName + "' in table.",deleteBtn.size() == 0);
        deleteBtn.get(0).click();
    }

    @When("^I add new user name (\\S*) with password (\\S*)$")
    public void addNewUserAndPass(String userName, String password) throws Throwable {

        WebElement userInputBox = driver.findElement(By.cssSelector("input[name='newUserName']"));
        userInputBox.clear();
        userInputBox.sendKeys(userName);

        WebElement passInputBox = driver.findElement(By.cssSelector("input[name='newUserPassword']"));
        passInputBox.clear();
        passInputBox.sendKeys(password);
        driver.findElement(By.cssSelector(".btn.btn-primary")).click();

    }

}
