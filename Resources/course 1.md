# Course Section 1

## Testing Functional Code

**In File:** `test/Simple.test.ts`

* [ ] Validate environment
  * [ ] Run the test
  * [ ] Fix the test

**In File:** `test/TrigMath.test.ts`

**Scenario:** In this scenario, we are going to look at getting high test coverage over existing, working code.  
We are going to start with code that is simpler to test, so you can figure out what it does by running it, and then preserving its behavior with tests.

* [ ] Run first test
  * Confirmation: See failure message
* [ ] Get the test to pass
  * Confirmation: See green result
* [ ] Test Asin() completely - Via Debug
  * [ ] Write a new test for Asin()
  * [ ] Check coverage of Asin() with break points
    * [ ] Add a breakpoint on every line of Asin()
    * [ ] Remove breakpoint when hit
    * Confirmation: No more breakpoints in Asin()
* [ ] Test completely - Via code coverage
  * [ ] Run test coverage
     * Confirmation: See what areas of TrigMath.cpp are green (covered)
     * Confirmation: See 100% coverage of the Asin() method
* [ ] Test TrigMath completely
  * Confirmation: See 100% coverage of the code
  * Code Coverage reached: ______%
* [ ] Explanations and Retrospective

## Logging Behavior
**In File:** `test/Services.test.ts`

**Scenario:** In this scenario, we are going to look at getting high test coverage over existing,
working code that is non-functional (all effects are side effects) but still deterministic.

* [ ] Run first test
  * Confirmation: See failure message
* [ ] Add Markers to `initialiseServices`
  * Confirmation: See logging for entrance and exit
  * **Hint:** Wrap contents with `SimpleLogger.useMarkers`
* [ ] Add variable logging for `key`
  * Confirmation: See log message
* [ ] Modify logging to show type
  * Confirmation: See type of `key`
* [ ] Capture Logging for tests
  * Confirmation: Test pass with logged output
  * **Hint:** use `verifySimpleLogger`
* [ ] Add event logging for 1st service call
  * Confirmation: Test contain event start
* [ ] add logging for return status
  * Confirmation: Test contain 200
* [ ] add rest of the logging
  * Confirmation: Test are complete
* [ ] add markers to `restCall`
  * Confirmation: Many more entrances and exits
* [ ] add input and exit information to `restCall`
  * Confirmation: => Markers (include: inputs)  & <= Markers: includeReturnCodes

## Homework

* [ ] Print out the [homework sheet](https://github.com/LearnWithLlew/TestingLegacyCodeCourse.slides/raw/master/Homework%20Printouts%20-%20Week%201.pdf) and keep it by your desk, to increase your awareness throughout the week.

