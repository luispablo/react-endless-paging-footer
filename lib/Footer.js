var React = require("react");
var ButtonLoad = require("./ButtonLoad");
var Mensajes = require("mensajes-lindos");

var Footer = function ({ buttonAllText, buttonText, itemName, itemsName, message, onLoadAll, onLoadMore, shownRows, totalRows }) {
  var canBuildDefaultMessage = itemName && itemsName && shownRows && totalRows;
  var messageIsProvided = message && message.trim().length > 0;

  if (canBuildDefaultMessage || messageIsProvided) {
    var everythingIsShown = canBuildDefaultMessage && totalRows > 0 && shownRows === totalRows;
    var mensajes = canBuildDefaultMessage ? Mensajes(itemName, itemsName) : null;
    var message = messageIsProvided ? message : mensajes.paginado(shownRows, totalRows);
    var buttonProps = {message: buttonText, onClick: onLoadMore};
    var button = !everythingIsShown ? React.createElement(ButtonLoad, buttonProps) : null;
    var tab = String.fromCharCode(8195);
    var buttonAllProps = { message: buttonAllText, onClick: onLoadAll };
    var buttonAll = buttonAllText && onLoadAll && !everythingIsShown ? React.createElement(ButtonLoad, buttonAllProps) : null;

    return React.createElement("span", null, message, tab, tab, button, tab, buttonAll);
  } else {
    return null;
  }
};

module.exports = Footer;