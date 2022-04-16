//1.
const ages = [3, 9, 23, 64, 2, 8, 28, 93];
//a.
console.log( ages[ages.length-1] - ages[0])
//b.
ages.push(25);
console.log( ages[ages.length-1] - ages[0])
//c.
let length = ages.length;
var sum = 0
for (i=0; i<length; i++){
    sum += ages[i];
}
var average = sum / ages.length
console.log(average)


//2.
const names =["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
//a.
var nameLength = names.length;
let total = 0;

for (i=0; i<nameLength; i++){
    total += names[i].length;
}
var average = total/ names.length
console.log(average)
//b.
var allNames = ""
for (i=0; i<nameLength; i++){
    allNames= allNames + names[i] + " ";
}
console.log (allNames);


//3. To access the last element of an array you use the .length
names[names.length-1]

//4. To access the first element of an array, you use [0]
names[0]

//5. 
var namesArray = ["Kelly", "Sam", "Kate", "Lorie", "Christine", "Sophie"];
var nameLengths = []
for (i = 0; i< namesArray.length; i++){
    nameLengths.push(namesArray[i].length);
}
console.log(nameLengths);

//6.
var sum = 0
for (i =0; i< nameLengths.length; i++) {
    sum += 1;
}
console.log(sum);

//7.

function example (word, n){
    var result = ""
    for (i = 0; i< n; i++){
        result = result + word
    }
    return (result)
}

console.log (example ("hello", 3))

//8.
function fullnames (firstName, lastName){
    return fullName = firstName + " " + lastName;
}
console.log(fullnames ("john", "doe"));

//9.
function totalSum (array){
    sum = 0
    for (i = 0; i< array.length; i++){
        sum += array[i]
    }
    if (sum > 100){
        return true;
    } else{ 
        return false;
    }

}
console.log(totalSum([50, 51]))

//10.
function averages (array) {
    let sum = 0
    for (i=0; i < array.length; i++){
        sum += array[i];
    }
    return sum / array.length
}
console.log (averages([10, 20, 30, 40]))

//11.
function greaterThan (array1, array2) {
    let sum1 = 0
    for (i=0; i < array1.length; i++){
        sum1 += array1[i];
    }
    avg1 = sum1/ array1.length

    let sum2 = 0
    for (i=0; i < array2.length; i++){
        sum2 += array2[i];
    }
    avg2 = sum2 / array2.length
    return avg1 > avg2
}
console.log(greaterThan([ 10, 10], [20, 20]))

//12.
function willBuyDrink (isHotOutside, moneyInPocket){
    if (isHotOutside == true && moneyInPocket > 10.50) {
        return true;
    }else {
        return false;
    }
}
console.log (willBuyDrink (true, 11));

//13. I'm creating a function that will tell me if I should buy an item off my wishlist. It takes into account if the item has been on my wishlist for longer than 14 days, how much money I have, and if I have any unpaid bills.
function myWishlist (length, savings, cost, upcomingExpenses){
    if (length >= 14 && savings > cost && upcomingExpenses == false){
        return "Go ahead!"
    }else{
        return "Not right now."
    }
}
console.log(myWishlist(16, 300, 22, true))