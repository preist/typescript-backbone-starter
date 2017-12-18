import * as $ from 'jquery';
import * as _ from 'underscore';
import * as Backbone from 'backbone';

// Test jQuery
$(document).ready(function() {
    console.log("jQuery has loaded correctly!");
});

// Test Underscore.js
var mapResult = _.map([1, 2, 3, 4], (number: number) => number * 2);

console.log("Map result is: ", mapResult);

// Test Backbone.js
class Person extends Backbone.Model {

	defaults() {
		return {
			firstName: 'John',
			lastName: 'Doe'
		}
	}

	initialize() {
		if (!this.get('firstName')) {
			this.set({ 'firstName': this.defaults().firstName });
        }
        
        if (!this.get('lastName')) {
			this.set({ 'lastName': this.defaults().lastName });
		}
	}

	get fullName() {
		return this.get('firstName') + " " + this.get('lastName');
	}

}

var person = new Person({ firstName: "Linus", lastName: "Torvalds" })

console.log(person);
console.log("Person's full name is: ", person.fullName)