# Notes

## HTML
```
<textarea className="chat-input-textarea" rows="1" placeholder="Type a message..."></textarea>
```

```
<form onSubmit={submitChat}>
  <input type="text" rows="1" className="chat-input-textarea" placeholder="Type a message..." />
</form>
```

## CSS
### X & Y Position
The position of (X, Y) means the co-ordinate of an element at the top-left point in a document. X represent the horizontal position and Y represent the vertical position.

### background-position
The background-position CSS property sets the __initial__ position for each background image.

It has three different types of values: length values (e.g. 100px 5px), percentages (e.g. 100% 5%), keywords (e.g. top right).

If we use __percentages__ as the values, we should notice it works a little differently. Moving a background image by X% means it will align the X% point in the image to the X% point in the container. For example, 50% means it will align the middle of the image with the middle of the container. 100% means it will align the last pixel of the image with the last pixel of the container, and so on.