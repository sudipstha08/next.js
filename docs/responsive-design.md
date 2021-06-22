- Media query:
  CSS3 feature that makes a webpage adapt its layout to different screen sizes and media types.

```css
  @media media type and (condition: breakpoint) {
  // CSS rules
  }
```
  If we don’t apply a media type, the @ media rule selects all types of devices by default. Otherwise, Media types come right after the @ media rule.

- Common breakpoints
```
  320px — 480px: Mobile devices
  481px — 768px: iPads, Tablets
  769px — 1024px: Small screens, laptops
  1025px — 1200px: Desktops, large screens
  1201px and more: Extra large screens, TV
```


- Images
object-fit can be set with one of these five values:

1. fill: this is the default value which stretches the image to fit the content box, regardless of its aspect-ratio.
2. contain: increases or decreases the size of the image to fill the box whilst preserving its aspect-ratio.
3. cover: the image will fill the height and width of its box, once again maintaining its aspect ratio but often cropping the image in the process.
4. none: image will ignore the height and width of the parent and retain its original size.
5. scale-down: the image will compare the difference between none and contain in order to find the smallest concrete object size.

## REFERENCES
1. https://www.freecodecamp.org/news/css-media-queries-breakpoints-media-types-standard-resolutions-and-more/