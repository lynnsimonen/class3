$(document).ready(function () {
    $("button").on("click", calculate);
});                                      //wait to process anonymous function until all html is read

function calculate()
{
    //gather all input
    //ask user for total miles of trip
    //all input will always be a string so convert input to number type
    let totalMiles = parseFloat( $("#totalMiles").val());


    //ask for car mpg
    //convert to number type
    let carMPG = parseFloat($("#carMPG").val());

    //ask for cost of gas
    //convert to number type
    let dollarsPerGal = parseFloat($("#dollarsPerGallon").val());

    //ask for average speed, MPH
    //convert to number
    let avgSpeed = parseFloat($("#avgSpeed").val());

    //do some math...
    //divide total miles/MPH for Total Hours
    let totalHours = totalMiles / avgSpeed;

    //divide total miles/MPG for Total gallons
    //multiply $ per gal by total gallons to get gas cost
    let gasCost = (totalMiles/ carMPG) * dollarsPerGal;

    //OUTPUT
    //alert the gas cost
    $("span#gasCost").text(gasCost.toFixed(2));   //variable and span are same name is nice and easy

    //alert the hours
    $("span#tripHours").text(totalHours.toFixed(1));

    $(".output").show();
    }

