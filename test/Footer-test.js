var React = require("react");
var TestUtils = require("react-addons-test-utils");
var test = require("tape");
var Footer = require("../lib/Footer");
var ButtonLoad = require("../lib/ButtonLoad");

var shallowRenderer = TestUtils.createRenderer();
var MESSAGE = "Test message";
var ALL_MESSAGE = "Test all message";
var BUTTON_TEXT = "Load more";
var BUTTON_ALL_TEXT = "Load all";
var shownRows = 5;
var totalRows = 10;
var onClick = function () { };
var onClickAll = function () { };
var ITEM_NAME = "item";
var ITEMS_NAME = "items";

test("Footer - renders", function (assert) {
	shallowRenderer.render(<Footer message={MESSAGE} buttonText={BUTTON_TEXT} onLoadMore={onClick} />);
	const footer = shallowRenderer.getRenderOutput();

	assert.equal(footer.type, "span", "The main HMTL object is a span");
	assert.equal(footer.props.children[0], MESSAGE, "The first element is the message");
	assert.equal(footer.props.children[1], String.fromCharCode(8195), "Spacing between text and button");
	assert.equal(footer.props.children[2], String.fromCharCode(8195), "Spacing between text and button");
	assert.equal(footer.props.children[3].type, ButtonLoad, "The load more button");
	assert.end();
});

test("Footer - don't render button", function (assert) {
	shallowRenderer.render(<Footer itemName={ITEM_NAME} itemsName={ITEMS_NAME} shownRows={0} totalRows={0} />);
	const noRowsFooter = shallowRenderer.getRenderOutput();

	shallowRenderer.render(<Footer itemName={ITEM_NAME} itemsName={ITEMS_NAME} shownRows={10} totalRows={10} />);
	const showingAllFooter = shallowRenderer.getRenderOutput();

	assert.ok(noRowsFooter === null, "No footer when totalRows is 0");
	assert.ok(showingAllFooter.props.children[3] === null, "Shouldn't render button when everything is shown");
	assert.end();
});

test("Footer - renders building default messages with shown and total rows", function (assert) {
	shallowRenderer.render(<Footer itemName={ITEM_NAME} itemsName={ITEMS_NAME} shownRows={shownRows} totalRows={totalRows} onLoadMore={onClick} />);
	const numberFooter = shallowRenderer.getRenderOutput();
	assert.equal(numberFooter.type, "span", "Something rendered");
	assert.equal(numberFooter.props.children[0], "Mostrando 5 items de 10", "The default message built");
	assert.equal(numberFooter.props.children[3].type, ButtonLoad, "The button is rendered");
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

test("Footer - load all button", function (assert) {
	shallowRenderer.render(<Footer message={MESSAGE} buttonText={BUTTON_TEXT} onLoadMore={onClick} buttonAllText={BUTTON_ALL_TEXT} onLoadAll={onClickAll} />);
	const footer = shallowRenderer.getRenderOutput();
	shallowRenderer.render(footer.props.children[5]);
	const actualButton = shallowRenderer.getRenderOutput();
	shallowRenderer.render(<ButtonLoad message={BUTTON_ALL_TEXT} onClick={onClickAll} />);
	const expectedButton = shallowRenderer.getRenderOutput();
	assert.deepEqual(actualButton, expectedButton, "Renders load all button");
	assert.end();
});
