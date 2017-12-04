# Material UI Workshop

## What/Why Material UI?

### What is Material Design?
"Material Design is a unified system combining theory, resources, and tools that help you and your team get to the heart of the solution, together."

When we talk about Material Design from Google, we are talking about Google's initiative to combine resources and tools to help developers make functional, and appealing components.
It is the over-arching set of principles and tools Google is creating to give access to these tools in each framework.
Some of these tools include:
- Google Fonts
- Material UI
- Firebase
- Angular Material
- Polymer (And Polymer Paper Elements)

### What is Material UI Specifically?

Material UI is the translation Google has made to implement this goal into the React framework. It allows us as web developers to have an almost drag-and-drop experience when bring in components from this library.

## Basic Setup & Initialization

Material UI is a node module that we can bring into our project using `npm install material-ui`.
Once we have it imported, it's time to start looking into what components we want to use.

## Importing Individual Components

### Color Themes

The first thing you're going to need to bring into your application is a theme provider:
`import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'`
^ This is required for v0.15.0 and later.

Next, you'll wrap your App with the `<MuiThemeProvider></MuiThemeProvider>` tags. This can be done in your index.js file, wrapping your `<App />` there.

You can add an option color theme if you'd like. This would be done with the following statements:

```
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
```

You'll then pass these into your `<MuiThemeProvider></MuiThemeProvider>` tags, changing them to be:
`<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}></MuiThemeProvider>`
Inside the function you could bring in your own color theme, if you have one.

* That's it! You're all done with the basic setup. Now it's time to move onto the actual usages of the simple, user-friendly components!

### Components Available

While there are a lot of different components we can use, there are a few we're going to go over this example:
- Drawer (And Menu Items)
First, we need to import our Drawer with `import Drawer from 'material-ui/Drawer'`.

The `<Drawer></Drawer>` component should have your `<MenuItem></MenuItem>` tags inside it. The MenuItems can have an onClick, or whatever you'd like. The Drawer will have an `open={}` toggle on it. This can be controlled however you'd like. I used state in this example. By default, the 
- Dropdown Menu
- Dialog
- Date Picker
- AppBar

## Resources

https://material.io/ -> What is Material Design?
https://design.google/resources/ -> Official Resources for Material Design
https://www.npmjs.com/package/material-ui -> NPM Package for Material UI
http://www.material-ui.com/#/get-started/required-knowledge -> Official Material UI Docs






Chip
Date Picker
* Dropdown Menu
* Dialog
Loading Circle (Axios) - Progress
Switches (Toggle, Radio, Check)
Snackbar
Stepper
* Tabs
* Drawer/Menu Items
* Text Field (Floating Label)
