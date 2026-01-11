# Image

```jsx
import { Image } from '@reglyph/chats';
```

## Description

`Image` is a reusable React component, similar to default `<img>` tag, but with styling and more convenient height/width
attributes.

## Properties

`Image` equivalent to `HTMLAttributes<HTMLImageElement>` and accept all `<img>` attributes

| Name      | Description                     |       Type        | Default |
| :-------- | :------------------------------ | :---------------: | :-----: |
| src       | Path to the file                |     `string`      |         |
| alt       | Required `alt` attribute        |     `string`      |         |
| loading   |                                 |  `eager` `lazy`   | `lazy`  |
| height    | Optional height value           | `number` `string` | `100px` |
| width     | Optional width value            | `number` `string` | `100px` |
| className | Optional HTML `class` attribute |     `string`      |         |
