var React = require("react");
var ButtonLoadMore = require("./ButtonLoadMore");
var Mensajes = require("mensajes-lindos");

var Footer = function (props) {
	var canBuildDefaultMessage = props.itemName && props.itemsName && props.shownRows && props.totalRows;
	var messageIsProvided = props.message && props.message.trim().length > 0;

	if (canBuildDefaultMessage || messageIsProvided) {
		var everythingIsShown = canBuildDefaultMessage && props.totalRows > 0 && props.shownRows === props.totalRows;
		var mensajes = canBuildDefaultMessage ? Mensajes(props.itemName, props.itemsName) : null;
		var message = messageIsProvided ? props.message : mensajes.paginado(props.shownRows, props.totalRows);
		var buttonProps = {message: props.buttonText, onClick: props.onLoadMore};
		var button = !everythingIsShown ? React.createElement(ButtonLoadMore, buttonProps) : null;
		var tab = String.fromCharCode(8195);

		return React.createElement("span", null, message, tab, tab, button);
	} else {
		return null;
	}
};

module.exports = Footer;
