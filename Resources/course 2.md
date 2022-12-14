# Course Section 2

## Testing with Approvals

### Basic ApprovalTests

**Scenario:** In this scenario, we are going to redo last week's exercise,
introducing Approval Tests, to learn the basics of approvals.

**In File:** `test/TrigMathApprovals.test.ts`

* [ ] Demo: Basic approval of Cos()
    * Confirmation:
        1. a diff tool opened
        2. tests are passing
* [ ] Create a function that tests all 12 methods in TrigMath for one value, 1.0 -    
  `verify(runEverything(1.0))`
    * Use an output string
    * Hint: for `Atan2` , use 0.4 as the second parameter
      * Confirmation: A large `.approved.txt` file with 12 values:
        acos
        acot
        acsc
        asin
        asec
        atan
        atan2
        cos
        cot
        csc
        sec
        sin
        tan
* [ ] Better to-strings
    * [ ]show function names
      * Confirmation: You can tell which method was called for each line
    * [ ]show parameter values
      * Confirmation: You can tell which method was called  with which value for each line 
* [ ] Test all methods with input value 3.14
    * Confirmation: Another large `.approved.txt` file
    * 
### Verify List of Inputs

**Scenario:** In this scenario, we are going to redo the exercise again,
to explore more advanced uses of Approval Tests,
to handle **large numbers of inputs**.

* [ ] Make a single test that tests everything for 1.0 and 3.14
    * Confirmation: You should have a call to  `verifyAll()`
* [ ] Add values `-0.1, 0, 0.2, 0.8` to your tests for everything
    * Confirmation: Everything except Atan2 should be covered

### Seeing Failures

**Scenario:** In this scenario, we are going to look at how Approval Tests can help us,
when tests fail, to identify the differences between **changes that we want**, and **changes we don't.**

* [ ] Improve the precision of `TrigMath.PI`
    * Hint: Use `Math.PI`
    * Confirmation: Later digits in the results are different; tests are passing
* [ ] Turn on `IMPROVEMENT_2`
    * Confirmation: You can tell us what this did; You know if you should fix the tests or undo the change

### Finishing Off
* [ ] Explanations and Retrospective


## Improving non-functional code

### Scrubbing

> **Scenario:** In this scenario, we are learning how to use ApprovalTests to deal with methods that produce **inconsistent results**.   
> The most common variants of inconsistent results are because of dates, Guids and Random Numbers. 
**In File:** `test/Inconsistent.test.ts`
* [ ] Guids
  * [ ] Poke-test `Inconsistent.getFamily()` in `Inconsistent`
    * Confirmation: Failing test because the guids
  * [ ] Scrub your results
    * Hint: Use `Options` & `Scrubbers`
    * Confirmation: The test pass when run multiple times
* [ ] Dates
  * [ ] Poke-test `Inconsistent.print()` 
    * Confirmation: Failing tests
  * [ ] Scrub inconsistent results
    * Hint: `Scrubbers.templates` 
    * Confirmation: Passing test with scrubbed date
*  [ ] Regex
    * [ ] Poke-test`Inconsistent.getWordOfTheDay()` 
    * Confirmation: Failing tests
  * [ ] Scrub inconsistent results
      * Hint: `Scrubbers.templates`
      * Confirmation: Passing test with **<word_of_the_day>**
* [ ] **Retro**


### Imperative Shell / Functional Core 

> **Scenario:** We are going to learn how to split up code into 2 parts to make it easy to test. This will all be a version of a `Peel`

**In File:** `test/NonFunctional.test.ts`

* [ ] Separate an input
  * [ ] Split and test `getCategory`
  * Confirmation: You have tested 100% of the method
* [ ] Separate a side effect
  * [ ] Split and test `printName`
  * Confirmation: you a tested method that return the data
* [ ] Separate a loop
  * [ ] Split and test `loop`
      * You have a loop that squares a number and saves it to a file
      * Turn it into two loops - one does the calculation, the other saves it to the file
      * Test the calculation
  * Confirmation: you can test the elements that are being printed to a file

### Wrapping Up
* [ ] **Retro**

