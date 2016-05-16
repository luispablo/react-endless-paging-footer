var React = require("react");
var TestUtils = require("react-addons-test-utils");
var test = require("tape");
var ButtonLoadMore = require("../lib/ButtonLoadMore");

var shallowRenderer = TestUtils.createRenderer();
var MESSAGE = "Load more results";
var onClick = function () { };

test("ButtonLoadMore - renders", function (assert) {
	shallowRenderer.render(<ButtonLoadMore message={MESSAGE} onClick={onClick} />);
	const button = shallowRenderer.getRenderOutput();

	assert.equal(button.type, "button", "The main HMTL object is a button");
	assert.equal(button.props.children, MESSAGE, "The message shown");
	assert.end();
});
