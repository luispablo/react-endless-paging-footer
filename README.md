# react-endless-paging-footer
A react component for a footer with a message and a button to load more

# Usage

```
var Footer = require("Footer");

...

function doLoadMore () {
	// do magic here...
}

<Footer message="Showing 5 items of 10" buttonText="Load more" onLoadMore={doLoadMore} />
```
