# use-window-scroll-hook

> React Hook to monitor window scroll event.

[![NPM](https://img.shields.io/npm/v/use-window-scroll-hook.svg)](https://www.npmjs.com/package/use-window-scroll-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-window-scroll-hook
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from 'use-window-scroll-hook'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [pedro-lb](https://github.com/pedro-lb)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
