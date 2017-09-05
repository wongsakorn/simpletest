package com.exercise.bdd.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        format = { "pretty", "html:target/cucumber" },
        glue = "com.exercise.bdd.steps",
        features = "classpath:cucumber/Exercise.feature"
)
public class RunExerciseTest {
}
