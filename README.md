# use-window-scroll-hook

React Hook to monitor window scroll event.

[![NPM](https://img.shields.io/npm/v/use-window-scroll-hook.svg)](https://www.npmjs.com/package/use-window-scroll-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-window-scroll-hook
```

or

```bash
yarn add use-window-scroll-hook
```

## Usage

### updates only when user stops scrolling

```jsx
import React, { Component } from 'react'

import { useWindowScroll } from 'use-window-scroll-hook'

const App = () => {
  const {
    scrollX,
    scrollY,
  } = useWindowScroll();

  return (
    <>
      <p>
        {`Scroll X: ${scrollX}`}
      </p>
      <p>
        {`Scroll Y: ${scrollY}`}
      </p>
    </>
  )
}
```

### updates continuously, at every scroll event

```jsx
import React, { Component } from 'react'

import { useWindowScroll } from 'use-window-scroll-hook'

const App = () => {
  const {
    scrollX,
    scrollY,
  } = useWindowScroll(false);

  return (
    <>
      <p>
        {`Scroll X: ${scrollX}`}
      </p>
      <p>
        {`Scroll Y: ${scrollY}`}
      </p>
    </>
  )
}
```

## License

MIT © [pedro-lb](https://github.com/pedro-lb)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
