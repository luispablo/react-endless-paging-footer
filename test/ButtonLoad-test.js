var React = require("react");
var TestUtils = require("react-addons-test-utils");
var test = require("tape");
var ButtonLoad = require("../lib/ButtonLoad");

var shallowRenderer = TestUtils.createRenderer();
var MESSAGE = "Load more results";
var onClick = function () { };

test("ButtonLoad - renders", function (assert) {
	shallowRenderer.render(<ButtonLoad message={MESSAGE} onClick={onClick} />);
	const button = shallowRenderer.getRenderOutput();

	assert.equal(button.type, "button", "The main HMTL object is a button");
	assert.equal(button.props.children, MESSAGE, "The message shown");
	assert.end();
});
