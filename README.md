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

^ _This is required for v0.15.0 and later._


Next, you'll wrap your App with the `<MuiThemeProvider></MuiThemeProvider>` tags. This can be done in your index.js file, wrapping your `<App />` there.

You can add an option color theme if you'd like. This would be done with the following statements:

```
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
```

You'll then pass these into your `<MuiThemeProvider></MuiThemeProvider>` tags, changing them to be:
`<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}></MuiThemeProvider>`. 

You can import your own color theme, if you have one.

__That's it! You're all done with the basic setup. Now it's time to move on to the actual usages of the simple, user-friendly components!__

### Components Available

While there are a lot of different components we can use, there are a few we're going to go over this example:

- __AppBar__

To use the AppBar component, let's begin by importing it! `import AppBar from 'material-ui/AppBar`

There are normally going to be a few attributes that we default to. These include:

1. showMenuIconButton
    - This is the hamburger menu on the left of our title. Boolean
2. title
    - This is the actual title. String
3. iconElementLeft
    - This would replace the showMenuIconButton. Here we pass another component.
4. iconElementRight
    - This works like the latter, but it doesn't replace anything.

The AppBar component can be passed into other components, such as a drawer. It's width will be determined by it's parent.


- __Drawer (And Menu Items)__

First, we need to import our Drawer with `import Drawer from 'material-ui/Drawer'`.

The `<Drawer></Drawer>` component should have your `<MenuItem></MenuItem>` tags inside it. The MenuItems can have an onClick, or whatever you'd like. The Drawer will have an `open={}` toggle on it. This can be controlled however you'd like. I used state in this example.

By default, the draw is on the far left of the screen. You can change this by simply adding the `openSecondary` attribute to the opening tag.

You can also add the `docked` and `onRequestChange` options to be able to press escape, or click away from the menu to close it.


- __Dialog__

I really enjoy this component. Mostly because I really don't like that React has removed the default Javascript Confirm popup. This is my hero :D

Again, let's begin by importing the Dialog component:

`import Dialog from 'material-ui/Dialog'`

Now, the basic syntax of a dialog is as follows:
```
<Dialog
    title="CTA Text"
    actions={<button onClick={()=>this.setState({open: false})}>Confirm Dialog</button>}
    open={this.state.open}
/>
```

There are a few extra features we can add to customize our experience.
1. `modal={bool}`
    - This allows us to choose wether or not the user can click away from the modal, or if they are required to click the confirmation button inside the dialog box to continue.
2. `actions={array}`
    - We can pass in an array of action buttons (typically <FlatButton /> elements) that give the user a choice of confirmations.
3. Other MaterialUI elements
    - We can pass other elements as children to this element (for example, a date picker, or a form).

- __Date Picker__

What a great segue into the Date Picker element, no?

`import DatePicker from 'material-ui/DatePicker'`

At it's simplest form, we can just use the `<DatePicker />` tag, and we'll have a functional selector.

If we want to add some more features, we can modify with a few attributes:
1. `autoOk={true}`
    - When true, we just click on a date for it to be selected (no need for a submit button to close the calendar)
2. `shouldDisableDate`
    - This is a callback function that either returns true or false on a date. If true, disable date.
3. `mode='landscape'`
    - This is either landscape or portrait. Pretty self-explanitory.
4. `openToYearSelection={true}`
    - Does the DatePicker open to the year selection first?


- __Text Field__


- __Progress (Loading Circle)__

## Combining Components



## Resources

[What is Material Design?](https://material.io/)
[Official Resources for Material Design](https://design.google/resources/)
[NPM Package for Material UI](https://www.npmjs.com/package/material-ui)
[Official Material UI Docs](http://www.material-ui.com/#/get-started/required-knowledge)






- Chip
- Date Picker
- __Dropdown Menu__
- __Dialog__
- Loading Circle (Axios) - Progress
- Switches (Toggle, Radio, Check)
- Snackbar
- Stepper
- __Tabs__
- __Drawer/Menu Items__
- __Text Field (Floating Label)__
- __AppBar__