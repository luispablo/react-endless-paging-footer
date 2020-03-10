var React = require("react");

var ButtonLoad = function ({ message, onClick }) {
  var buttonProps = {
    className: "btn btn-sm btn-primary", onClick: onClick
  };
  return React.createElement("button", buttonProps, message);
};

module.exports = ButtonLoad;