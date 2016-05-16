var React = require("react");
var ButtonLoadMore = require("./ButtonLoadMore");

var Footer = function (props) {
	var buttonProps = {message: props.buttonText, onClick: props.onLoadMore};
	var button = React.createElement(ButtonLoadMore, buttonProps);

	return React.createElement("span", props.message, "&emsp;&emsp;", button);
};

module.exports = Footer;
