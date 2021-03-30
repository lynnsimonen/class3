function calculate()
{
    //gather all input
    //ask user for Total number of days late
    //convert input to number type
    let numDays = parseFloat( prompt("How many days late are your library items?"));


    //ask for number of books
    //convert to number type
    let numBooks = parseFloat((prompt("How many books?")));

    //ask for number of dvds
    //convert to number type
    let numDVDs = parseFloat((prompt("How many DVDs?")));

    //do some math...
    //((numBooks * daily fee) + (numDVDs * daily fee)) * numDays
    let totalFee = ((numBooks * .25) + (numDVDs * .5)) * numDays;


    //OUTPUT
    //alert the libary overdue fee
    alert(`You owe the Waukesha Public Library $${totalFee.toFixed(2)} in late fees.`);

}
