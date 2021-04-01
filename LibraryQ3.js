$(document).ready(function () {
    $("button").on("click", calculate);
});

function calculate() {
    //gather all input
    //ask user for Total number of days late
    //convert input to number type
    let numDays = parseFloat($("#numDays").val());


    //ask for number of books
    //convert to number type
    let numBooks = parseFloat($("#numBooks").val());

    //ask for number of dvds
    //convert to number type
    let numDVDs = parseFloat($("#numDVDs").val());

    //do some math...
    //((numBooks * daily fee) + (numDVDs * daily fee)) * numDays
    let totalFee = ((numBooks * .25) + (numDVDs * .5)) * numDays;


    //OUTPUT
    //alert the gas cost
    $("span#totalFee").text(totalFee.toFixed(2));
    $(".output").show();
}

