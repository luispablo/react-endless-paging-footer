var React = require("react");

var ButtonLoadMore = function (props) {
	var buttonProps = {
		className: "btn btn-sm btn-primary", onClick: props.onClick
	};
	return React.createElement("button", buttonProps, props.message);
};

ButtonLoadMore.propTypes = {
	message: React.PropTypes.string,
	onClick: React.PropTypes.func
};

module.exports = ButtonLoadMore;
