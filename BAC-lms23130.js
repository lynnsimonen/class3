$(document).ready(function () {
    $("button").on("click", calculate);
});                                      //wait to process anonymous function until all html is read

function calculate()
{
    //gather all input
    //ask user for drink info, body wt and hours since first drink
    //all input will always be a string so convert input to number type
    let qtyBeer = parseFloat( $("#qtyBeer").val());

    let qtyWine = parseFloat( $("#qtyWine").val());

    let qtyShots = parseFloat( $("#qtyShots").val());

    //ask for drinkers weight in pounds
    //convert to number
    let drinkersWeight = parseFloat($("#drinkersWeight").val());

    //ask for hours since first drink
    //convert to number
    let firstDrinkHours = parseFloat($("#firstDrinkHours").val());

    //do some math...
    //0.54 oz of alcohol per beer
    let ozAlcoholBeer = qtyBeer*.54;

    //0.6 oz of alcohol per wine
    let ozAlcoholWine = qtyWine*.6;

    //0.6 oz of alcohol per shot
    let ozAlcoholShots = qtyShots*.6;

    //Multiply the oz alcohol by average alcohol absorption rate, 7.5
    //Divide by person's wt in lbs to determine BAC
    //Subtract 0.015 for each hour since their first drink
    //Round result to 3 decimal places
    let bloodAC = (((ozAlcoholBeer + ozAlcoholShots + ozAlcoholWine) * 7.5)/drinkersWeight)-(.015*firstDrinkHours);

    //OUTPUT
    //alert BAC
    $("span#bloodAC").text(bloodAC.toFixed(3));   //variable and span are same name is nice and easy

    $(".output").show();
}

