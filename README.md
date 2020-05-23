# Multi Page React / Express Application - Treehouse Clone

## Starting the app

- Make sure you open two seaparate terminal tabs

### Client Tab

- `cd client`
- `yarn`
- `yarn start`
- Make sure you see "Hello World" with a green background

### Server tab

- `cd server`
- `yarn`
- `yarn start`
- Make sure you see "It worked!" outputted in the termianl

#### NOTE

- You will need to make sure you install nodemon globally for the server script to work
- To do this run `npm install nodemon -g`

## Useful links for syntax / conventions that may be unfamiliar

### Square bracket property accessor for objects

```
const topic = "html"
const courses = {
  html: [...ArrayOfHTMLCourses],
  css: [...ArrayOfCSSCourses],
  javascript: [...ArrayOfJavascriptCourses]
}[topic]
// courses === [...ArrayOfHTMLCourses]
```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
- https://codeburst.io/javascript-quickie-dot-notation-vs-bracket-notation-333641c0f781

### Curried functions / Currying

```
const handleInputChange = field => event => {
  setState({ [field]: event.target.value })
}
```

- https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983
- https://blog.benestudio.co/currying-in-javascript-es6-540d2ad09400

### classNames

```
const foo = "truthyString"
const isActive = true
<div className={classNames('regular-class1', 'regular-class2', 'regular-class3')} />
<div className={classNames(foo ? "truthy-ternary-class" : "falsey-ternary-class" />
<div className={classNames({ applyThisClassIfValueIsTrue: isActive })} >
```

- https://github.com/JedWatson/classnames
- https://jedwatson.github.io/classnames/

### Best practices with react import / exports

```
// src/components/index.js
export { default as Form } from './Form'
export { default as Navbar } from './NavBar'
export { default as Button } from './Button'

// src/App.js
import { Form, NavBar, Button } from './components'
```

- https://alligator.io/react/index-js-public-interfaces/

### Async await vs then()

```
  // then()
  const fetchData = () => {
    axios.get('INSERT_URL_HERE')
    .then(response => setState({ data: response.data }))
  }

  // async await
  const fetchData = async () => {
    const response = await axios.get('INSERT_URL_HERE)
    setState({ data: response.data })
  }
```

- https://javascript.info/async-await
- https://levelup.gitconnected.com/async-await-vs-promises-4fe98d11038f

### Underscore vs parenthesis for arrow fuctions with no parameter

```
const someFunctionWithNoParameter = _ => {
  console.log('hello world')
}
```

https://jaketrent.com/post/javascript-arrow-function-no-params/

### Javascript syntax style guide

- http://airbnb.io/javascript/
