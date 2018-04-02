---
layout: page
title: Parallel ESLint
---


This past week I revisited community modules for parallelizing ESLint runs and I found [esprint](https://github.com/pinterest/esprint) by
the wonderful developers at Pinterest. I last looked into this about a year ago and it wasn't possible to easily get my ESLint configuration
to run.

In my setup, I have custom ESLint rules in a local directory and ESLint only accepted the directory on the command-line through the `--rulesdir` option.
Luckily there have been two changes since I last looked into this:
- ESLint now supports a `.eslintrc.js` file which lets developers write more complex configurations.
- The module [eslint-plugin-rulesdir](https://www.npmjs.com/package/eslint-plugin-rulesdir) lets me easily configure the `--rulesdir` setting in my new
  `.eslintrc.js` file.

After these changes I was easily able to set up `esprint` and go from a run time of 1.5 minutes to 30 seconds.
