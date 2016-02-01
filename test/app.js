const assert = require('assert');

var tpl = require("./template.ejs");
assert.equal(tpl({noun: "World"}), 'Hello, World!');

var tpl2 = require("!!../?delimiter=?!./template2.ejs");
assert.equal(tpl2({hobbies: ["food", "code"]}).trimRight(), "  I like food.\n  I like code.");

var tpl3 = require("./subdir/parent.ejs");
assert.equal(tpl3({foo: "foo"}), "parent: child: foo\n\n");
