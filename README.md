# A test-driven modern JS assessment

This repo includes a set of tests that can be used to assess the skills of
a candidate for a JavaScript position, or to evaluate and improve one's own
skills. It is based on the awesome but outdated [js-assessment](https://github.com/rmurphey/js-assessment)
repo by [Rebecca Murphey](https://github.com/rmurphey). 
The aim of this repo is to challenge engineers to solve a challenge using different approaches
and to keep the solutions updated with changes in the javascript language.

## I want to work on the tests; what do I do?

To use the tests, you will need to install [Node](https://nodejs.org/).

You can clone or download this repo. Once you have done so, from the root
directory of the repo, run:

    yarn test

You can then view the tests in your browser at
[http://localhost:51204/__vitest__/](http://localhost:51204/__vitest__/).

When you visit that page, all of the tests should be failing; your job is to
get the tests to pass. To do this, you'll need to refer to the tests in the
files in the `tests` directory, and edit the files in the `code` directory.
Once you update a test, the page in the browser will automatically reload where you can see
whether it worked.

You can also run the tests on the command line:

    yarn test:cli

## I want to contribute tests; what do I do?

Submit a pull request! The tests are currently loosely organized by topic, so
you should do your best to add tests to the appropriate file in the `tests` directory, or
create a new file there if you don't see an appropriate one.

If you're not sure how or where to add a test, please open an issue.

### Data-driven tests

If your tests need data that can be fetched via XHR, stick a `.json` file in
the `data` directory; you can access it at `/data/<filename>.json`.

## I want to see the answers!

First, bear in mind that looking up the answers is going to teach you a whole
lot less than you'll learn by working on the tests, even if you occasionally get
stuck. I'd recommend only looking at the answers once you have the tests
passing, to see if there's another way you could have approached the
problem. When you're ready to look at the answers, you can find them in the `solutions`
branch. I'll do my best to keep them up to date.

## What are the tests using?

This repo uses the [Vitest](https://vitest.dev/) test framework.

# Todos

If you have any suggestiong to improve this repo, check out the
[issues](https://github.com/zeckdude/javascript-skills-test/issues) for details,
pull requests welcome!

# License

Copyright &copy; 2023 Chris Seckler with many thanks to several
[contributors](https://github.com/zeckdude/javascript-skills-test/graphs/contributors).

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a>

This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
