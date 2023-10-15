/*
What are Hooks?
	Hooks are a new feature addition in React version 16.8 which allow you to use React features without having to write a class.
	Ex. State of a component.  Hooks don't work inside class
Why Hooks?
	Reason Set 1
		Understand how this keyword works in JavaScript
		Remember to bind event handlers in class components
		Classes don't minify very well and make hot reloading unreliable
	Reason Set 2
		There is no particular way to reuse a statful component logic
		HOC and render props patterns do address this problem
		Makes the code harder to follow
		There is a need to share stateful logic in a better way
	Reason Set 3
		Create components for complex scenarios such as data fetching and subscribing to events
		Related code is not organized in one place
		Ex. Data fetching - In componentDidMount and componentDidUpdate
		Ex. Event listeners - In componentDidMount and componentWillUnmount
		Because of stateful logic - Cannot break components into smaller ones
Summary
	* Hooks are a new feature addition in React version 16.8
	* They allow you to use React features without having to write a class
	* Avoid the whole confusion with 'this' keyword
	* Allow you to reuse stateful logic
	* Organize the logic inside a component into reusable isolated units
*/