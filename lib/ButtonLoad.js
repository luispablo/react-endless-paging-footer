var React = require("react");

var ButtonLoad = function (props) {
  var buttonProps = {
    className: "btn btn-sm btn-primary", onClick: props.onClick
  };
  return React.createElement("button", buttonProps, props.message);
};

module.exports = ButtonLoad;