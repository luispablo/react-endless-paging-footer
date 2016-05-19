# react-endless-paging-footer
A react component for a footer with a message and a button to load more

# Usage

```
var Footer = require("Footer");

...

function doLoadMore () {
	// do magic here...
}

// Do this if you want your messages built for you (only in spanish by now...)
<Footer itemName={"person"} itemsName={"people"} shownRows={5} totalRows={10} buttonText="Cargar más" onLoadMore={doLoadMore} />

// Or do this to build the messages yourself
<Footer message="Showing 5 items of 10" buttonText="Load more" onLoadMore={doLoadMore} />
```
