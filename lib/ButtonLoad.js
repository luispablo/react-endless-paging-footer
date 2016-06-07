var React = require("react");

var ButtonLoad = function (props) {
	var buttonProps = {
		className: "btn btn-sm btn-primary", onClick: props.onClick
	};
	return React.createElement("button", buttonProps, props.message);
};

ButtonLoad.propTypes = {
	message: React.PropTypes.string,
	onClick: React.PropTypes.func
};

module.exports = ButtonLoad;
