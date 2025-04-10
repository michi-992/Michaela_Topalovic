----------------------------------------------
    Part 1: Installing Testing Frameworks
----------------------------------------------

I have decided to use Jest with Typescript as it is the language and the testing framework, which we will utilize in the MediaLab project as well. Even though I have experience with Java, JUnit and Mockito, and it would have certainly been easier to use them, I wanted to take this as an opportunity to learn something new and apply the concepts I was familiar with in a that would guide me during the current project semester.


I have setup the project using this tutorial:
https://dev.to/ghostaram/configuring-jest-for-typescript-unit-tests-4iag

----------------------------------------------------------------------------------------------------------

I decided to split the project into the four parts of the assignment and have one .md file in each of them for written elaboration on my steps or the wanted explanations for the parts according to the assignment. I have included some optional extensions inside folder 'Part 4'.

Project Setup:
- Part_1 (folder)
    - `Explanation_of_Choice_and_Setup.md` (this file)
- Part_2 (folder)
    - `__tests__` (folder for unit testing files)
        - `Customer.test.ts`
        - `Order.test.ts`
        - `Product.test.ts`
    - `classes` (folder for classes)
        - `Customer.ts`
        - `Order.ts`
        - `Product.ts`
    - `Additional_Documentation.md` (extra info for the solution of the task/documentation)
- Part_3 (folder)
    - `__tests__` (folder for unit testing files)
        - `Customer.test.ts`
        - `Order.test.ts`
        - `Product.test.ts`
    - `classes` (folder for classes)
        - `Customer.ts`
        - `Order.ts`
        - `Product.ts`
    - `Additional_Documentation_and_Explanation.md` (extra info for the solution of the task/documentation)
- Part_4 (folder)
    - `__tests__` (folder for unit testing files)
        - `Customer.test.ts`
        - `Order.test.ts`
        - `Product.test.ts`
    - `classes` (folder for classes)
        - `Customer.ts`
        - `Order.ts`
        - `Product.ts`
    - `Additional_Documentation_and_Explanation.md` (extra info for the solution of the task/documentation)
- `jest.config.js`
- `package-lock.json`
- `package.json`
- `tsconfig.json`

----------------------------------------------------------------------------------------------------------

__How to run the tests__
Run `npm install` to install node_modules in root directory (if not present)
Run `npm test` in the terminal in the root directory