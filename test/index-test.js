var test = require("tape");
var Footer = require("../index");
var FooterFromLib = require("../lib/Footer");

test("index - exports the footer", function (assert) {
	assert.equal(Footer, FooterFromLib, "Exports the given component");
	assert.end();
});
