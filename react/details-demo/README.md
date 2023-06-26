# Notes

## General

### document
`document.location.hash`  
document.location.hash retrieves the hash portion of the current URL. The hash represents a fragment identifier in the URL and starts with a "#" symbol.

For examplem, current page is "www.syh.com/#/java", then `document.location.hash` will be "#/java".

### css
#### overflow
In CSS, the overflow property is used to control how content that overflows the bounds of an element is displayed.

- visible (default): Content is not clipped and may extend beyond the element's box.

- hidden: Content that exceeds the element's dimensions is clipped and not visible. It will be effectively hidden.

- scroll: Content is clipped and scrollbars are added to the element, allowing users to scroll to see the content that exceeds the element's dimensions.

- auto: Behaves similar to scroll, but the scrollbars are only displayed if the content overflows. If the content fits within the element's dimensions, no scrollbars will be shown.

- overlay: Content is clipped, and a scrollbar is added only if scrolling is necessary. However, the scrollbar is displayed on top of the content, overlapping it. This value is less commonly used.

## Code Notes
__Regular expression__ `/#\/?/`
```
const currentPage = document.location.hash.replace(/#\/?/, "");
```
It matches a pound symbol (#) and zero or one forward slash (/), and replace it with empty string.