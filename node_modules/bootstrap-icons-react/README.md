<p align="center">
  <a href="https://getbootstrap.com/">
    <img src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" alt="Bootstrap logo" width="72" height="72">
  </a>
</p>

<h3 align="center">Bootstrap Icons for React</h3>

<p align="center">
  Bootstrap Icons React components using SVG and JS
  <br>
  <a href="https://icons.getbootstrap.com/"><strong>Explore Bootstrap Icons »</strong></a>
</p>

## Installation

Bootstrap Icons are designed to work with Bootstrap components, from form controls to navigation. Bootstrap Icons are SVGs, so they scale quickly and easily and can be styled with CSS. While they're built for Bootstrap, they'll work in any project.

```
npm i bootstrap-icons-react --save
```

## Usage

```javascript
import React from 'react';
import { Star } from 'bootstrap-icons-react';

const App = () => {
  return <Star />
};

export default App;
```

Modify size:
```javascript
<Star height={96} width={96} />
```

Pass props:
```javascript
<Star className="mb-2" />
```

Include the whole icon library:
```javascript
import React from 'react';
import * as Icon from 'bootstrap-icons-react';

const App = () => {
  return <Icon.Star />
};

export default App;
```

## Features

- No dependencies, just React
- SVG Icons
- Simple API
- Compatible with Create React App

## License

MIT
