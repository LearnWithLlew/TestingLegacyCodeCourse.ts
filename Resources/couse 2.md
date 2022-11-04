# Course Section 2

## Testing with Approvals
### Basic ApprovalTests

**Scenario:** In this scenario, we are going to redo last week's exercise, introducing Approval Tests, to learn the basics of approvals.

**In File:** `exercises/exercise1/tests/TrigMathApprovalTests.cpp`

* [ ] Demo: Basic approval of Sin() and Cos()
    * Confirmation:
        * a diff tool opened
        * 2 `.approved.txt` files in source control
        * tests are passing
* [ ] Create a function that tests all 13 methods in TrigMath for one value, 1.0 -    
  `Approvals::verify(runEverything(1.0))`
    * Use `std::stringstream`
    * Hint: for `Atan2` , use 0.4 as the second parameter
    * Confirmation: A large `.approved.txt` file with 13 values
* [ ] Better to-strings, to show function names
    * Confirmation: You can tell which method was called, for each line in `.approved.txt`
* [ ] Test all methods with input value 3.14
    * Confirmation: Another large `.approved.txt` file
### Verify List of Inputs

**Scenario:** In this scenario, we are going to redo the exercise again, to explore more advanced uses of Approval Tests, to handle **large numbers of inputs**.

* [ ] Make a single test that tests everything for 1.0 and 3.14
    * Hint: read [the docs](https://approvaltestscpp.readthedocs.io/en/latest/)
    * Confirmation: You should have a call to  `Approvals::verifyAll()`
* [ ] Add values `-0.1, 0, 0.2, 0.8` to your tests for everything
    * Confirmation: Everything except Atan2 should be covered
### Seeing Failures

**Scenario:** In this scenario, we are going to look at how Approval Tests can help us, when tests fail, to identify the differences between **changes that we want**, and **changes we don't.**

* [ ] Improve the precision of `PI`
    * Hint: Use `M_PI`
    * Confirmation: Later digits in the results are different; tests are passing
* [ ] Turn on `IMPROVEMENT_2`
    * Confirmation: You can tell us what this did; You know if you should fix the tests or undo the change
* [ ] Better to-strings, to show function names and input values
    * Confirmation: You can tell which method was called, with which value, for each line in `.approved.txt`
    * If using macros: `#define PRINT(x) #x" = " << x`
### Combinations of Inputs

**Scenario:** In this scenario, we are going to redo the exercise again, to explore **incredibly large numbers of inputs**.

* [ ] Combination approvals - Test `Sin()` for the inputs `{1.0, 3.14, -0.1, 0, 0.2, 0.8}`
    * Confirmation: You should have a `CombinationApprovals::verifyAllCombinations()` call
* [ ] Combination approvals - Test `Atan2` for multiple inputs
    * Confirmation: You have tested `Atan2` with a range of values for both arguments

### Finishing Off
* [ ] Explanations and Retrospective

### Extra Credit:

**Scenario:** In this scenario, we are going to look at a way in C++ to add the methods being tested as one of the parameters.

* [ ] Test Sin() using a method pointer and standard Catch2 `CHECK`
    * Hints:
    ```
    typedef  int (Fred::*FredMemFn)(char x, float y);
    #define CALL_MEMBER_FN(object,ptrToMember)  ((object).*(ptrToMember))
    int ans = CALL_MEMBER_FN(fred,p)('x', 3.14);
    ```
      * from: https://isocpp.org/wiki/faq/pointers-to-members#typedef-for-ptr-to-memfn
* [ ] Combination approvals - for function pointer inputs
    * Confirmation: You are testing without using `runEverything()`
        * One of your arguments is vector of function pointers

## Homework

* [ ] Print out the [homework sheet](https://github.com/LearnWithLlew/TestingLegacyCodeCourse.slides/raw/master/Homework%20Printouts%20-%20Week%202.pdf) and keep it by your desk, to increase your awareness throughout the week.

### Homework details

* [ ] Redo today’s coding exercises on your own computer
    * Start from the code on the [master branch](https://github.com/LearnWithLlew/TestingLegacyCodeCourse.cpp)
    * If you want to see the code we wrote together, check the [other branches](https://github.com/LearnWithLlew/TestingLegacyCodeCourse.cpp/branches)
* [ ] **Take notes** around printing
    * [ ] **Existing**: What did you find to display data as text?
    * [ ] **Classes**: Which objects would benefit from a printer?
    * [ ] **Ideas**: What would the printer output be like?
* 

## Improving non-functional code

### Functional Harness

#### Date and Time

> **Scenario:** In this scenario, we are learning how to use ApprovalTests to deal with methods that produce **inconsistent results**.   
> Because the most common variant of this deals with dates and times, that will be our example.

**In File:** `exercises/exercise2/tests/InconsistentTests.cpp`

* [ ] Scrub Inconsistent::print() for time
    * [ ] Poke-test print() in `Inconsistent.h`
        * Confirmation: Failing test because of date and time
    * [ ] Scrub inconsistent results
    * Hint: `Approvals::verify("text", Options(Scrubbers::createRegexScrubber(R"()", "[replacement]")));`
    * Hint: `\d` matches a digit
    * Hint: `[a-z]` matches lower-case letter
    * Hint: `\d{3}` matches 3 digits
    * Confirmation: Passing test with scrubbed date

* [ ] Peel Inconsistent::print() to pass in time
    * Hint: `ApprovalTests::DateUtils::createUtcDateTime`
* [ ] **Retro**

#### Random

> **Scenario:** In this scenario, we are going to look at inconsistency that is embedded deeper in the code. We are going to look at a range of options to make the code consistent.  
> Because randomness is often a problem for testing, that will be our example.
>
> First we are going to make quick hacks to get getId() under passing tests. Then we will change getId() to make it possible to test without hacks

**In File:** `exercises/exercise2/tests/InconsistentTests.cpp`

* [ ] Poke-test getId() in Inconsistent.h

* [ ] Make consistent seed via #ifdef
    * Confirmation: test work when run 2 times

* [ ] Extract testable function that takes a seed
    * Confirmation: working test without the test seam
* [ ] Extract Testable function that takes a number
    * Confirmation: you can reason out what the result will be before running it.
* [ ] **Retro**

#### Side Effects

> **Scenario:** In this scenario, we are going to look at code that only produces side-effects, that is, it does not return its results.  
> Unlike last time, where we only captured the results with hacks, this time we are going to change the code so hacks are not needed.  
> A common scenario is writing to output. so that will be our example.

**In File:** `exercises/exercise2/tests/SideEffectsTests.cpp`

* [ ] Poke-test SideEffects::printName1()
* [ ] Peel SideEffects::printName1() to return a string
* [ ] Peel/slice SideEffects::printName2() to take a stream

### Missing Inputs

> **Scenario:** This scenario is about splitting up code, so that hard-to-set-up scenarios become easily testable.

**In File:** `exercises/exercise2/tests/MissingInputsTests.cpp`

* [ ] Poke-test MissingInputs::getCategory()
* [ ] Get it to 100% coverage
* [ ] Peel to pass in missing inputs

### Reduce to functional

> **Scenario:** A common problem is how to separate a loop to be functional. We are going to practice doing this.

**In File:** `exercises/exercise2/tests/LoopTests.cpp`

* [ ] Separate a loop
    * Have a loop that squares a number and saves it to a file
    * Turn it into two loops - one does the calculation, the other saves it to the file

### Wrapping Up

* [ ] **Retro**

## Homework

* [ ] Print out the [homework sheet](https://github.com/LearnWithLlew/TestingLegacyCodeCourse.slides/raw/master/Homework%20Printouts%20-%20Week%204.pdf) and keep it by your desk, to increase your awareness throughout the week.

### Homework details

* [ ] Redo today’s coding exercises on your own computer
    * Start from the code on the [master branch](https://github.com/LearnWithLlew/TestingLegacyCodeCourse.cpp)
    * If you want to see the code we wrote together, check the [other branches](https://github.com/LearnWithLlew/TestingLegacyCodeCourse.cpp/branches)
* [ ] **Pay attention** to when you:
    * [ ] **Peel**: When you split a method to create a second method that’s easy to test
    * [ ] **Slice**: When you change a method to use a fake dependency
    * [ ] **Scrub**: When you modify the output to get stable results for testing, pay attention to what you replaced and how
* [ ] **Please complete** the survey - see email.

