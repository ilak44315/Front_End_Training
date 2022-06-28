//create a variable to hold the quantity of available plane seats left on a flight
let availablePlaneSeats = 9;
		
//create a variable to hold the cost of groceries at checkout
let costOfGroceries = 25.00;

//create a variable to hold a person's middle initial
let personMiddleName = 'M';

//create a variable to hold true if it's hot outside and false if it's cold outside
let isHotOutside = true;
//create a variable to hold a customer's first name
let personFirstName = 'Kali';

//create a variable to hold a street address
let streetAddress = '123 Street Address';

//print all variables to the console
console.log(availablePlaneSeats);
console.log(costOfGroceries);
console.log(personMiddleName);
console.log(isHotOutside);
console.log(personFirstName);
console.log(streetAddress);

//a customer booked 2 plane seats, remove 2 seats from the available seats variable
availablePlaneSeats = availablePlaneSeats - 2;
console.log (availablePlaneSeats);

//impulse candy bar purchase, add 2.15 to the grocery total
//costOfGroceries = costOfGroceries + 2.15;
console.log(costOfGroceries -2.15);

//birth certificate was printed incorrectly, change the middle initial to something else
console.log(personMiddleName = "L");

//the season has changed, update the hot outside variable to be opposite of what it was
isHotOutside =!(isHotOutside);
console.log(isHotOutside);

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
let personFullName = (personFirstName + ' ' + personMiddleName + ' ' + 'Campbell');
console.log(personFullName);
//print a line to the console that introduces the customer and says they live at the address variable
console.log('Hi, my name is '+ personFirstName + " and I live at "+ streetAddress+ ".");

