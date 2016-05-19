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

test("Footer - null when no text", function (assert) {
	shallowRenderer.render(<Footer buttonText={BUTTON_TEXT} onLoadMore={onClick} />);
	const footerMessageUndefined = shallowRenderer.getRenderOutput();

	shallowRenderer.render(<Footer message={null} buttonText={BUTTON_TEXT} onLoadMore={onClick} />);
	const footerMessageNull = shallowRenderer.getRenderOutput();

	shallowRenderer.render(<Footer message={""} buttonText={BUTTON_TEXT} onLoadMore={onClick} />);
	const footerEmptyString = shallowRenderer.getRenderOutput();

	shallowRenderer.render(<Footer message={" "} buttonText={BUTTON_TEXT} onLoadMore={onClick} />);
	const footerSpace = shallowRenderer.getRenderOutput();

	assert.ok(footerMessageUndefined === null, "No footer when message undefined");
	assert.ok(footerMessageNull === null, "No footer when message null");
	assert.ok(footerEmptyString === null, "No footer when message empty string");
	assert.ok(footerSpace === null, "No footer when message is a space");
	assert.end();
});
