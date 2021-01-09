# react-redux-example

Simple example for incorporating redux as state management in a Project using Redux.
1. Async actions 
2. Usage of Redux libraries like thunk or saga
3. XHR request
4. Ways to create or integrate the Redux framework

Here we are going to show list of Users and on click on any of them will be
displaying details below.

The setup for this project is being taken from the previous repos.

<hr/>
Please do below for basic server/code setup:-
<hr/>

(1) Install **basic packages** as below :-

1. > npm install react react-dom --save
2. > npm install webpack webpack-cli webpack-dev-server --save-dev
3. > npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
4. > npm install --save-dev html-loader html-webpack-plugin

(2) Create .babelrc at **root level** as below :-

1. > {
   > "presets": ["@babel/preset-env", "@babel/preset-react"]
   > }

(3) Add the below scripts in the **package json**

1. {"build": "webpack --mode production"}
2. {"dev": "webpack-dev-server --mode development --open "}

<hr/>

(4) Install react-redux packages for introducing the support.

1. npm install --save redux react-redux

Attached is the basic data flow for the redux.

>     |-<--------Store--<-------|
>     |                         ^
>     Provider             CombineReducer
>     |                         ^
>     Container             Reducer(s)
>     |                         ^
>     Component             Action(s)
>     |                         ^
>     |---->-----View--------->-|

Now create the following folders which represent the basic parts of the Redux.

1. actions - represents the event that can happen in the application. These are
   simple functions and Json will be the output of these functions.

2. reducers - represents the data that will be collated as well as individual
   reducers will put during the start of the application on the page load as
   well as when there is an action that happens.

3. store - This is the central data repo for the project will always follow
   unidirectional data-flow.

4. components - These are the JS objects or functions that will use only the
   data, these are controlled components e.g. User

5. containers - This the glue between the store and the components that needed
   the data.

Steps to observe :-

1. You have to create the App, UserList and connect them to see hardcoded
   output. This will clear the concept of showing the data.

2. Next will be creating the reducer and connecting to the store and showing
   that in the UI. Will be integrating the redux to create the store as well.
