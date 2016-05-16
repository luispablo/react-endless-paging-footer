var React = require("react");
var ButtonLoadMore = require("./ButtonLoadMore");

var Footer = function (props) {
	var buttonProps = {message: props.buttonText, onClick: props.onLoadMore};
	var button = React.createElement(ButtonLoadMore, buttonProps);
	var tab = String.fromCharCode(8195);

	return React.createElement("span", null, props.message, tab, tab, button);
};

module.exports = Footer;
