//FOOD CHOICE
function myFoodOptions() {
    var food = {
    "pizza": 100.00,
    "chickenBurger": 80.00,
    "beefBurger": 90.00,
    "salad": 80.00,
    "spaghetti": 70.00    
};
    var food = parseInt(prompt("Enter the price of the meal you choose:", "100, 80, 90"));
    if (food == null || food == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "R " +food;
    }
    document.getElementById("foodtotal").innerHTML = food;
    //alert(food);
    console.log( food)
   // return food;
}

//DRINK CHOICE
function myDrinkOptions() {
    var drink = {
    "water": 12.00,
    "beer": 18.00,
    "wine": 25.00,
    "juice": 20.00,
    "soda": 15.00    
};
        
    var drink = parseInt(prompt("Enter the price of the drink you choose:", "100, 80, 90"));
 if (drink == null || drink == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "R " +drink;
    }
    document.getElementById("drinktotal").innerHTML = drink;
    //alert(drink);
    console.log(typeof drink)

}

//TIPCHOICE
function myTipOptions() {
    var txt;
    var tip = parseInt(prompt("Enter the value of the tip - R10, R20 or R30", "Enter your tip amount"));
 if (tip == null || tip == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "R " +tip;
    }
    document.getElementById("tiptotal").innerHTML = tip;
    //alert(tip);
    console.log(typeof tip)
}

//TOTAL PRICE
function myTotalOptions() {
    // you needed to retrieve the values using the innerHTML properties of the headings instead of the 'value' property. The 'value' is used when you're using forms.
    // var food = parseInt(document.getElementById("foodtotal").value);
    var food = parseInt(document.getElementById("foodtotal").innerHTML);
    console.log(food);
    var drink = parseInt(document.getElementById("drinktotal").innerHTML);
    console.log(drink);

    var tip = parseInt(document.getElementById("tiptotal").innerHTML);
    console.log(tip);

    var result = food + drink + tip;
    alert("Your total bill is R" + result);
    console.log(result);
}
