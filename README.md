# FranGen [![npm version](https://badge.fury.io/js/frangen.svg)](https://badge.fury.io/js/frangen)  [![Build Status](https://travis-ci.org/dave2406/FranGen.svg?branch=master)](https://travis-ci.org/dave2406/FranGen)   [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![Awesome Badges](https://img.shields.io/badge/badges-awesome-green.svg)](https://github.com/Naereen/badges) [![Open Source Love png1](https://badges.frapsoft.com/os/v1/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/)
A CLI utility and importable package for the generation of nicknames for Fran, distributed through NPM.

To use, install globally with command `npm i -g frangen` then use command `frangen` to generate a name. 
It is also possible to generate multiple names at once: `frangen 5`, for example, would generate 5 fran names.

Frangen can now be used as an imported package! To use it, import and then call method `getFran`.

Frangen now has [cowsay](https://github.com/piuccio/cowsay) integration!
The command `frangen cowsay` will generate a fran to be read by a cow.

This project uses modified angular commit format:

    name: Edits to the name list (example scopes: Celeb, Animal)
    fran: Edits to the ASCII frans
    ci: Changes to our CI configuration files and scripts (example scopes: Travis, Semantic)
    docs: Documentation only changes
    feat: A new feature
    fix: A bug fix
    refactor: A code change that neither fixes a bug nor adds a feature
    style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
    test: Adding missing tests or correcting existing tests

So for example adding a name could have commit message `name(celeb): Add Scarlet JoFransson`
This allows automatic publishing to npm with any user-facing changes.
