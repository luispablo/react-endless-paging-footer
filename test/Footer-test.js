var React = require("react");
var TestUtils = require("react-addons-test-utils");
var test = require("tape");
var Footer = require("../lib/Footer");
var ButtonLoadMore = require("../lib/ButtonLoadMore");

var shallowRenderer = TestUtils.createRenderer();
var MESSAGE = "Test message";
var BUTTON_TEXT = "Load more";
var onClick = function () { };

test("Footer - renders", function (assert) {
	shallowRenderer.render(<Footer message={MESSAGE} buttonText={BUTTON_TEXT} onLoadMore={onClick} />);
	const footer = shallowRenderer.getRenderOutput();

	assert.equal(footer.type, "span", "The main HMTL object is a span");
	assert.equal(footer.props.children[0], MESSAGE, "The first element is the message");
	assert.equal(footer.props.children[1], String.fromCharCode(8195), "Spacing between text and button");
	assert.equal(footer.props.children[2], String.fromCharCode(8195), "Spacing between text and button");
	assert.equal(footer.props.children[3].type, ButtonLoadMore, "The load more button");
	assert.end();
});
