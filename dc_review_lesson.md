##Marc HTML/CSS/JS Review Lesson Plan

###Paper review (20-30 min)
- Will have each student choose a review question from Google Docs.

## WE DO - ATM exercise
Today we're gonna review HTML, CSS and Javascript using the ATM exercise. 

- Clone starter code for the [ATM Exercise](https://github.com/ga-dc/atm). Go ahead and comment out the existing lines of code on lines 1, 2, and 5.


What are some things we're gonna need?

- event listener
- add IDs to to buttons and input
	- checkingBalance
	- checkingAmount
	- checkingDeposit 	
	- checkingWithdraw
- make sure we can't go negative or it turns red if we do
- overdraft protection
- maybe a variable that tracks the checking balance and savings balance
- What are some ways that we can access DOM elements?

**Review - WE DO:**
- Goto CNN.com. Using the console, how do we select various elements from the DOM?

###Practice adding an event to an element
Let's add a click event to our checking deposit button. First, let's add an ID to that specific button element:

```js
<input type="button" id="checkingDeposit" value="Deposit" />
```
Next, let's create an event that will fire an alert message when clicked.

```js
document.getElementById('checkingDeposit').addEventListener('click', function(){
  alert("Testing our click event");
});
```
What's another way we could access our elements? We can also use this:

```js
document.querySelector('#checkingDeposit').addEventListener('click', function(){
  alert("Test");
});
```
The `querySelector` may give us more flexibility. This is essentially what the `$` in jQuery is doing. Note that we need the # sign for this one.

## Let's get the checking deposit working!

Let's change our event listener to call the `checkingBalance` function when clicked:

```js
document.querySelector('#checkingDeposit').addEventListener('click', checkingDeposit);
```
###1) Grab user input
We'll need to grab the user input for the amount he/she wants to deposit. We'll also want to create a variable for the balance. Let's add an ID to the input and write the code to capture the value:

```js
//HTML
<input type="text" id="checkingAmount" placeholder="enter an amount" />

//JS
var amount = document.querySelector('#checkingAmount').value;
console.log(amount);
```

That works, but what data type is `amount`? We can check it out using Javascript's `typeof` operator:

```js
console.log(typeof amount);
//returns 'string'
```

Let's make sure our amount is saved as a Number using `parseInt`

```js
var amount = parseInt( document.querySelector('#checkingAmount').value );
//our console.log should now read 'number'
```

How can we empty out our input field after the click event?

```js
document.querySelector('#checkingAmount').value = '';
```

###2) Persist the balance
Cool, so now we're able to capture the user input, but how can we persist the balance? Let's create a variable to track it:

```js
//Why should this go outside of the function?
var checkingBalance = 0;

//inside the function
checkingBalance += amount;
```
###3) Update the DOM
Great, now we need to update the DOM with the new amount. Let's add an ID to our balance <div> and some code to update it:

```js
//HTML
<div class="balance" id="checkingBalance">$0</div>

//JS
document.querySelector('#checkingBalance').innerHTML = "$" + checkingBalance;
```

###4) Let's add some CSS!
So we already have a `.zero` CSS class available to us. Let's add it to our HTML so it will be red by default:

```js
<div class="balance zero" id="checkingBalance">$0</div>
```
> What are some other ways we could accomplish this using Javascript?

Next, let's add some logic to update the class of that element based on the balance:

```js
if (checkingBalance == 0) {
  document.querySelector('#checkingBalance').className = "balance zero"
} else {
  document.querySelector('#checkingBalance').className = "balance"
}
```

###5) Let's DRY up some code
Do you see anyway we could DRY up the code at this point? It looks like we're using `document.querySelector('#checkingBalance')` three times already. Let's assign it to a variable and re-use that code

```js
var checkingBalanceDiv = document.querySelector('#checkingBalance');
```

For funzzies... What about our if/else statement? Any ideas on how we can DRY that up?

```js
checkingBalance == 0 ? checkingBalanceDiv.className = "balance zero" : checkingBalanceDiv.className = "balance"
```
Also, consider DRY-ing up `document.querySelector('#checkingAmount')` because it appears several times.

##You Do
We completed the CSS and Deposit user stories so see how you do with the other stories.






