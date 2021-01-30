function handleClicks(classes, increment) {
    let olderValue = document.getElementById(classes + "-quantity").value;
    let valueNum = parseInt(olderValue);
    //for increment
    if (increment == true) {
        let newValue = valueNum + 1;
        document.getElementById(classes + "-quantity").setAttribute("value", newValue);
        //price increase by quantity
        let tripType = classes;
        priceCalculator(tripType);
    }
    //for decrement
    else if (increment == false && valueNum > 0) {
        let newValue = valueNum - 1;
        document.getElementById(classes + "-quantity").setAttribute("value", newValue);
        //price decrease by quantity
        let tripType = classes;
        priceCalculator(tripType);
    }
}
//price calculator
function priceCalculator(tripType) {
    let numOfTickets = document.getElementById(tripType + "-quantity").value;
    let quantity = parseInt(numOfTickets);
    if (tripType == "f-class") {
        let total = 150 * quantity;
        document.getElementById(tripType + "-price").innerText = "$" + total;
    }
    else {
        let total = 100 * quantity;
        document.getElementById(tripType + "-price").innerText = "$" + total;
    }
    let numOfTicketF = document.getElementById("f-class-quantity").value;
    let quantityOfFirstClass = parseInt(numOfTicketF);
    let numOfTicketE = document.getElementById("e-class-quantity").value;
    let quantityOfEconomy = parseInt(numOfTicketE);
    //subtotal calculator
    let subTotal = quantityOfFirstClass * 150 + quantityOfEconomy * 100;
    document.getElementById("subtotal").innerText = "$" + subTotal;
    //tax calculator
    let tax = subTotal * (0.1);
    document.getElementById("tax").innerText = "$" + tax;
    //total calculator
    let total = subTotal + tax;
    document.getElementById("total").innerText = "$" + total;
}

//bonus part 
function popup() {
    document.querySelector(".main-content").style.opacity = "0";
    document.querySelector(".popup-section").style.opacity = "1";
    document.getElementById("from-print").innerText = document.getElementById("from").value;
    document.getElementById("to-print").innerText = document.getElementById("to").value;
    document.getElementById("date").innerText = document.getElementById("deprature").value;
    document.getElementById("return-date").innerText = document.getElementById("return").value;
    document.getElementById("f-class-ticket").innerText = document.getElementById("f-class-quantity").value;
    document.getElementById("e-class-ticket").innerText = document.getElementById("e-class-quantity").value;
    document.getElementById("subtotal-print").innerText = document.getElementById("subtotal").innerText;
    document.getElementById("tax-print").innerText = document.getElementById("tax").innerText;
    document.getElementById("total-print").innerText = document.getElementById("total").innerText;
}
