# ReactJS

## Basic Components

> npm create vite@latest .

### Thinking in Components

Components can encompose the entire app, as well as simple html text. We break down bigger components into smaller components.

### JSX basics

- JSX gets converted to plain JS code

  ```html
  <h1 id="main">hello</h1>
  ```

  In React, this JSX is transformed to:

  ```js
  React.createElement('h1', { id: 'main' }, 'hello');
  ```

- Camel case multi word html properties
  ```html
  tab-index changes to tabIndex
  ```
  But this rule is not applicable for data, aria attributes and class, for
  ```html
  <h1
    className="heading1"
    data-id="abc123"
    aria-label="My App"
    tabindex="1"
  ></h1>
  <label htmlFor="id">Label</label>
  ```

* You have to pass style props as objects instead of strings

  ```html
    <label style={{'backgroundColor': 'red'}}>Label</label>
  ```

* Any thing inside {} is considered JS code

  ```html
  <label>{ 2 + 2 }</label> will evaluate to <label>4</label>
  ```

* You need to close of any open tags in JSX. It can be self closed or add a closing tag separately.

## Routing

- When you are working in application build in react, all the action happen in client. No need to reload the whole application again and again. So we will use react router library.

> npm i react-router-dom

- Rules are always followed from top to bottom
- createBrowserRouter: for Web apps running in browsers
- createHashRouter: if you can change the app url, you are in a shared web url
- createMemoryRouter: is used for server-side rendering or testing, here url never changes

**Outlet** tag

- The Outlet component renders the matched child route
- This allows the Navbar to be displayed on all pages
- The Outlet component is a placeholder for the child routes
- It will render the component that matches the current route
