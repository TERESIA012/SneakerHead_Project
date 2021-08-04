
//Order

class Order {
    constructor(brand, price,sizeUk) {
        this.brand = brand;
        this.price = price;
        this.sizeUk = sizeUk;

    }
}
class UI {
    static displayOrder() {
        const StoredOrders = [

        ];
        const orders = StoredOrders;

        orders.forEach((order) => UI.addOrderToList(order));
        orders.forEach((order) => UI.addOrderToList(order));
    }
    static addOrderToList(order) {
        const list = document.querySelector('#order-list');
        const checkoutlist = document.querySelector('#checkout-list');

        const row = document.createElement('tr');
        const checkoutrow = document.createElement('tr');

        row.innerHTML = `
        <td>${order.brand}</td>
        <td>${order.price}</td>
        <td>${order.sizeUk}</td>
        `;
        list.appendChild(row);

        checkoutrow.innerHTML = `
        <td>${order.brand}</td>
        <td>${order.price}</td>
        <td>${order.sizeUk}</td>
        `;
        checkoutlist.appendChild(checkoutrow);
    }

}
//display order
document.addEventListener('DOMContentLoaded', UI.displayOrder);


document.querySelector('#orderForm').addEventListener('submit', (e) => {

    e.preventDefault();

    const sizeOneA = document.getElementsByName('sizeOneA');
    const sizeOneB = document.getElementsByName('sizeOneB');
    const sizeOneC = document.getElementsByName('sizeOneC');



    const sizeTwoA = document.getElementsByName('sizeTwoA');
    const sizeTwoB = document.getElementsByName('sizeTwoB');
    const sizeTwoC = document.getElementsByName('sizeTwoC');


    const sizeThreeA = document.getElementsByName('sizeThreeA');
    const sizeThreeB = document.getElementsByName('sizeThreeB');
    const sizeThreeC = document.getElementsByName('sizeThreeC');
    const sizeThreeD = document.getElementsByName('sizeThreeD');
    const sizeThreeE = document.getElementsByName('sizeThreeE');
    const sizeThreeF = document.getElementsByName('sizeThreeF');

    const sizeFourA = document.getElementsByName('sizeFourA');
    const sizeFourB = document.getElementsByName('sizeFourB');
    const sizeFourC = document.getElementsByName('sizeFourC');
    const sizeFourD = document.getElementsByName('sizeFourD');
    const sizeFourE = document.getElementsByName('sizeFourE');
    const sizeFourF = document.getElementsByName('sizeFourF');

    const sizeFiveA = document.getElementsByName('sizeFiveA');
    const sizeFiveB = document.getElementsByName('sizeFiveB');
    const sizeFiveC = document.getElementsByName('sizeFiveC');
    const sizeFiveD = document.getElementsByName('sizeFiveD');
    const sizeFiveE = document.getElementsByName('sizeFiveE');
    const sizeFiveF = document.getElementsByName('sizeFiveF');


    const sizeSixA = document.getElementsByName('sizeSixA');
    const sizeSixB = document.getElementsByName('sizeSixB');
    const sizeSixC = document.getElementsByName('sizeSixC');

    const sizeSevenA = document.getElementsByName('sizeSevenA');
    const sizeSevenB = document.getElementsByName('sizeSevenB');
    const sizeSevenC = document.getElementsByName('sizeSevenC');
    const sizeSevenD = document.getElementsByName('sizeSevenD');
    const sizeSevenE = document.getElementsByName('sizeSevenE');
    const sizeSevenF = document.getElementsByName('sizeSevenF');




    var sizeonea = document.getElementsByName("sizeOneA");
    var size = document.getElementsByName("sizeOneB");
    var size = document.getElementsByName("sizeOneC");

    var size = document.getElementsByName("sizeTwoA");
    var size = document.getElementsByName("sizeTwoB");
    var size = document.getElementsByName("sizeTwoC");

    var size = document.getElementsByName("sizeThreeA");
    var size = document.getElementsByName("sizeThreeB");
    var size = document.getElementsByName("sizeThreeC");
    var size = document.getElementsByName("sizeThreeD");
    var size = document.getElementsByName("sizeThreeE");
    var size = document.getElementsByName("sizeThreeF");

    var size = document.getElementsByName("sizeFourA");
    var size = document.getElementsByName("sizeFourB");
    var size = document.getElementsByName("sizeFourC");
    var size = document.getElementsByName("sizeFourD");
    var size = document.getElementsByName("sizeFourE");
    var size = document.getElementsByName("sizeFourF");

    var size = document.getElementsByName("sizeFiveA");
    var size = document.getElementsByName("sizeFiveB");
    var size = document.getElementsByName("sizeFiveC");
    var size = document.getElementsByName("sizeFiveD");
    var size = document.getElementsByName("sizeFiveE");
    var size = document.getElementsByName("sizeFiveF");
    
    var size = document.getElementsByName("sizeSixA");
    var size = document.getElementsByName("sizeSixB");
    var size = document.getElementsByName("sizeSixB");

    var size = document.getElementsByName("sizeSevenA");
    var size = document.getElementsByName("sizeSevenB");
    var size = document.getElementsByName("sizeSevenC");
    var size = document.getElementsByName("sizeSevenD");
    var size = document.getElementsByName("sizeSevenE");
    var size = document.getElementsByName("sizeSevenF");

    if(sizeonea[0].checked){
        var sizeUk = parseInt(sizeonea[0].value);
    
    }
    else if(sizeonea[1].checked){
        var sizeUk = parseInt(sizeonea[1].value);
    }
    else if(sizeonea[2].checked){
        var sizeUk = parseInt(sizeonea[2].value);
    }
    else if(sizeonea[3].checked){
        var sizeUk = parseInt(sizeonea[3].value);
    }
    


    
    
    

    if(sizeOneA[0].checked){
        var brand = "Puma X Marathon";
        var price = 1000;
        
    
    }
    else if(sizeOneA[1].checked){
        var brand = "Puma X Marathon";
        var price = 1000;
        
    }
    else if(sizeOneA[2].checked){
        var brand = "Puma X Marathon";
        var price = 1000;
        
    }
    else if(sizeOneA[3].checked){
        var brand = "Puma X Marathon";
        var price = 1000;
    }






//add to list
    const order = new Order(brand,price,sizeUk);

    UI.addOrderToList(order);
   


});

















/*TOGGLE DIV */
var newDivOneA = document.getElementById("newDivOneA");
var newDivOneB = document.getElementById("newDivOneB");
var newDivOneC = document.getElementById("newDivOneC");




var newDivTwoA = document.getElementById("newDivTwoA");
var newDivTwoB = document.getElementById("newDivTwoB");
var newDivTwoC = document.getElementById("newDivTwoC");





var newDivThreeA = document.getElementById("newDivThreeA");
var newDivThreeB = document.getElementById("newDivThreeB");
var newDivThreeC = document.getElementById("newDivThreeC");
var newDivThreeD = document.getElementById("newDivThreeD");
var newDivThreeE = document.getElementById("newDivThreeE");
var newDivThreeF = document.getElementById("newDivThreeF");




var newDivFourA = document.getElementById("newDivFourA");
var newDivFourB = document.getElementById("newDivFourB");
var newDivFourC = document.getElementById("newDivFourC");
var newDivFourD = document.getElementById("newDivFourD");
var newDivFourE = document.getElementById("newDivFourE");
var newDivFourF = document.getElementById("newDivFourF");




var newDivFiveA = document.getElementById("newDivFiveA");
var newDivFiveB = document.getElementById("newDivFiveB");
var newDivFiveC = document.getElementById("newDivFiveC");
var newDivFiveD = document.getElementById("newDivFiveD");
var newDivFiveE = document.getElementById("newDivFiveE");
var newDivFiveF = document.getElementById("newDivFiveF");



var newDivSixA = document.getElementById("newDivSixA");
var newDivSixB = document.getElementById("newDivSixB");
var newDivSixC = document.getElementById("newDivSixC");
var newDivSixD = document.getElementById("newDivSixD");
var newDivSixE = document.getElementById("newDivSixE");
var newDivSixF = document.getElementById("newDivSixF");



var newDivSevenA = document.getElementById("newDivSevenA");
var newDivSevenB = document.getElementById("newDivSevenB");
var newDivSevenC = document.getElementById("newDivSevenC");
var newDivSevenD = document.getElementById("newDivSevenD");
var newDivSevenE = document.getElementById("newDivSevenE");
var newDivSevenF = document.getElementById("newDivSevenF");





newDivOneA.style.display = "none";
newDivOneB.style.display = "none";
newDivOneC.style.display = "none";






newDivTwoA.style.display = "none";
newDivTwoB.style.display = "none";
newDivTwoC.style.display = "none";



newDivThreeA.style.display = "none";
newDivThreeB.style.display = "none";
newDivThreeC.style.display = "none";
newDivThreeD.style.display = "none";
newDivThreeE.style.display = "none";
newDivThreeF.style.display = "none";


newDivFourA.style.display = "none";
newDivFourB.style.display = "none";
newDivFourC.style.display = "none";
newDivFourD.style.display = "none";
newDivFourE.style.display = "none";
newDivFourF.style.display = "none";



newDivFiveA.style.display = "none";
newDivFiveB.style.display = "none";
newDivFiveC.style.display = "none";
newDivFiveD.style.display = "none";
newDivFiveE.style.display = "none";
newDivFiveF.style.display = "none";


newDivSixA.style.display = "none";
newDivSixB.style.display = "none";
newDivSixC.style.display = "none";




newDivSevenA.style.display = "none";
newDivSevenB.style.display = "none";
newDivSevenC.style.display = "none";
newDivSevenD.style.display = "none";
newDivSevenE.style.display = "none";
newDivSevenF.style.display = "none";


function myTogglerOneA() {
    var newDivOneA = document.getElementById("newDivOneA");
    if (newDivOneA.style.display === "none") {
        newDivOneA.style.display = "block";

    }
    else {
        newDivOneA.style.display = "none";
    }
}



function myTogglerOneB() {
    var newDivOneB = document.getElementById("newDivOneB");
    if (newDivOneB.style.display === "none") {
        newDivOneB.style.display = "block";

    }
    else {
        newDivOneB.style.display = "none";
    }
}

function myTogglerOneC() {
    var newDivOneC = document.getElementById("newDivOneC");
    if (newDivOneC.style.display === "none") {
        newDivOneC.style.display = "block";

    }
    else {
        newDivOneC.style.display = "none";
    }


}



function myTogglerTwoA() {
    var newDivTwoA = document.getElementById("newDivTwoA");
    if (newDivTwoA.style.display === "none") {
        newDivTwoA.style.display = "block";

    }
    else {
        newDivTwoA.style.display = "none";
    }


}
function myTogglerTwoB() {
    var newDivTwoB = document.getElementById("newDivTwoB");
    if (newDivTwoB.style.display === "none") {
        newDivTwoB.style.display = "block";

    }
    else {
        newDivTwoB.style.display = "none";
    }


}
function myTogglerTwoC() {
    var newDivTwoC = document.getElementById("newDivTwoC");
    if (newDivTwoC.style.display === "none") {
        newDivTwoC.style.display = "block";

    }
    else {
        newDivTwoC.style.display = "none";
    }


}




function myTogglerThreeA() {
    var newDivThreeA = document.getElementById("newDivThreeA");
    if (newDivThreeA.style.display === "none") {
        newDivThreeA.style.display = "block";

    }
    else {
        newDivThreeA.style.display = "none";
    }


}
function myTogglerThreeB() {
    var newDivThreeB = document.getElementById("newDivThreeB");
    if (newDivThreeB.style.display === "none") {
        newDivThreeB.style.display = "block";

    }
    else {
        newDivThreeB.style.display = "none";
    }


}
function myTogglerThreeC() {

    var newDivThreeC = document.getElementById("newDivThreeC");
    if (newDivThreeC.style.display === "none") {
        newDivThreeC.style.display = "block";

    }
    else {
        newDivThreeC.style.display = "none";
    }

}
function myTogglerThreeD() {

    var newDivThreeD = document.getElementById("newDivThreeD");
    if (newDivThreeD.style.display === "none") {
        newDivThreeD.style.display = "block";

    }
    else {
        newDivThreeD.style.display = "none";
    }

}
function myTogglerThreeE() {
    var newDivThreeE = document.getElementById("newDivThreeE");
    if (newDivThreeE.style.display === "none") {
        newDivThreeE.style.display = "block";

    }
    else {
        newDivThreeE.style.display = "none";
    }


} function myTogglerThreeF() {

    var newDivThreeF = document.getElementById("newDivThreeF");
    if (newDivThreeF.style.display === "none") {
        newDivThreeF.style.display = "block";

    }
    else {
        newDivThreeF.style.display = "none";
    }

}




function myTogglerFourA() {
    var newDivFourA = document.getElementById("newDivFourA");
    if (newDivFourA.style.display === "none") {
        newDivFourA.style.display = "block";

    }
    else {
        newDivFourA.style.display = "none";
    }


}
function myTogglerFourB() {
    var newDivFourB = document.getElementById("newDivFourB");
    if (newDivFourB.style.display === "none") {
        newDivFourB.style.display = "block";

    }
    else {
        newDivFourB.style.display = "none";
    }


}
function myTogglerFourC() {

    var newDivFourC = document.getElementById("newDivFourC");
    if (newDivFourC.style.display === "none") {
        newDivFourC.style.display = "block";

    }
    else {
        newDivFourC.style.display = "none";
    }

}
function myTogglerFourD() {
    var newDivFourD = document.getElementById("newDivFourD");
    if (newDivFourD.style.display === "none") {
        newDivFourD.style.display = "block";

    }
    else {
        newDivFourD.style.display = "none";
    }


}
function myTogglerFourE() {

    var newDivFourE = document.getElementById("newDivFourE");
    if (newDivFourE.style.display === "none") {
        newDivFourE.style.display = "block";

    }
    else {
        newDivFourE.style.display = "none";
    }

}
function myTogglerFourF() {
    var newDivFourF = document.getElementById("newDivFourF");
    if (newDivFourF.style.display === "none") {
        newDivFourF.style.display = "block";

    }
    else {
        newDivFourF.style.display = "none";
    }


}



function myTogglerFiveA() {
    var newDivFiveA = document.getElementById("newDivFiveA");
    if (newDivFiveA.style.display === "none") {
        newDivFiveA.style.display = "block";

    }
    else {
        newDivFiveA.style.display = "none";
    }


}
function myTogglerFiveB() {

    var newDivFiveB = document.getElementById("newDivFiveB");
    if (newDivFiveB.style.display === "none") {
        newDivFiveB.style.display = "block";

    }
    else {
        newDivFiveB.style.display = "none";
    }

}
function myTogglerFiveC() {
    var newDivFiveC = document.getElementById("newDivFiveC");
    if (newDivFiveC.style.display === "none") {
        newDivFiveC.style.display = "block";

    }
    else {
        newDivFiveC.style.display = "none";
    }


}
function myTogglerFiveD() {
    var newDivFiveD = document.getElementById("newDivFiveD");
    if (newDivFiveD.style.display === "none") {
        newDivFiveD.style.display = "block";

    }
    else {
        newDivFiveD.style.display = "none";
    }


}
function myTogglerFiveE() {
    var newDivFiveE = document.getElementById("newDivFiveE");
    if (newDivFiveE.style.display === "none") {
        newDivFiveE.style.display = "block";

    }
    else {
        newDivFiveE.style.display = "none";
    }


}
function myTogglerFiveF() {
    var newDivFiveF = document.getElementById("newDivFiveF");
    if (newDivFiveF.style.display === "none") {
        newDivFiveF.style.display = "block";

    }
    else {
        newDivFiveF.style.display = "none";
    }


}



function myTogglerSixA() {

    var newDivSixA = document.getElementById("newDivSixA");
    if (newDivSixA.style.display === "none") {
        newDivSixA.style.display = "block";

    }
    else {
        newDivSixA.style.display = "none";
    }

}
function myTogglerSixB() {
    var newDivSixB = document.getElementById("newDivSixB");
    if (newDivSixB.style.display === "none") {
        newDivSixB.style.display = "block";

    }
    else {
        newDivSixB.style.display = "none";
    }


}
function myTogglerSixC() {

    var newDivSixC = document.getElementById("newDivSixC");
    if (newDivSixC.style.display === "none") {
        newDivSixC.style.display = "block";

    }
    else {
        newDivSixC.style.display = "none";
    }

}




function myTogglerSevenA() {
    var newDivSevenA = document.getElementById("newDivSevenA");
    if (newDivSevenA.style.display === "none") {
        newDivSevenA.style.display = "block";

    }
    else {
        newDivSevenA.style.display = "none";
    }


}
function myTogglerSevenB() {
    var newDivSevenB = document.getElementById("newDivSevenB");
    if (newDivSevenB.style.display === "none") {
        newDivSevenB.style.display = "block";

    }
    else {
        newDivSevenB.style.display = "none";
    }


}
function myTogglerSevenC() {

    var newDivSevenC = document.getElementById("newDivSevenC");
    if (newDivSevenC.style.display === "none") {
        newDivSevenC.style.display = "block";

    }
    else {
        newDivSevenC.style.display = "none";
    }

}
function myTogglerSevenD() {
    var newDivSevenD = document.getElementById("newDivSevenD");
    if (newDivSevenD.style.display === "none") {
        newDivSevenD.style.display = "block";

    }
    else {
        newDivSevenD.style.display = "none";
    }


}
function myTogglerSevenE() {

    var newDivSevenE = document.getElementById("newDivSevenE");
    if (newDivSevenE.style.display === "none") {
        newDivSevenE.style.display = "block";

    }
    else {
        newDivSevenE.style.display = "none";
    }

}
function myTogglerSevenF() {
    var newDivSevenF = document.getElementById("newDivSevenF");
    if (newDivSevenF.style.display === "none") {
        newDivSevenF.style.display = "block";

    }
    else {
        newDivSevenF.style.display = "none";
    }


}





/*shoe WHITE BOX */
//puma marathon
var shoeOneA = document.getElementById("shoeOneA");
var shoeOneB = document.getElementById("shoeOneB");
var shoeOneC = document.getElementById("shoeOneC");
//puma
var shoeTwoA = document.getElementById("shoeTwoA");
var shoeTwoB = document.getElementById("shoeTwoB");
var shoeTwoC = document.getElementById("shoeTwoC");
//adidas
var shoeThreeA = document.getElementById("shoeThreeA");
var shoeThreeB = document.getElementById("shoeThreeB");
var shoeThreeC = document.getElementById("shoeThreeC");
var shoeThreeD = document.getElementById("shoeThreeD");
var shoeThreeE = document.getElementById("shoeThreeE");
var shoeThreeF = document.getElementById("shoeThreeF");
//vans

var shoeFourA = document.getElementById("shoeFourA");
var shoeFourB = document.getElementById("shoeFourB");
var shoeFourC = document.getElementById("shoeFourC");
var shoeFourD = document.getElementById("shoeFourD");
var shoeFourE = document.getElementById("shoeFourE");
var shoeFourF = document.getElementById("shoeFourF");
//converse
var shoeFiveA = document.getElementById("shoeFiveA");
var shoeFiveB = document.getElementById("shoeFiveB");
var shoeFiveC = document.getElementById("shoeFiveC");
var shoeFiveD = document.getElementById("shoeFiveD");
var shoeFiveE = document.getElementById("shoeFiveE");
var shoeFiveF = document.getElementById("shoeFiveF");

//underarmour
var shoeFiveA = document.getElementById("shoeFiveA");
var shoeFiveB = document.getElementById("shoeFiveB");
var shoeFiveC = document.getElementById("shoeFiveC");

//clarks
var shoeSixA = document.getElementById("shoeSixA");
var shoeSixB = document.getElementById("shoeSixB");
var shoeSixC = document.getElementById("shoeSixC");
var shoeSixD = document.getElementById("shoeSixD");
var shoeSixE = document.getElementById("shoeSixE");
var shoeSixF = document.getElementById("shoeSixF");



//puma marathon
shoeOneA.style.display = "none";
shoeOneB.style.display = "none";
shoeOneC.style.display = "none";


//puma
shoeTwoA.style.display = "none";
shoeTwoB.style.display = "none";
shoeTwoC.style.display = "none";



//adidas
shoeThreeA.style.display = "none";
shoeThreeB.style.display = "none";
shoeThreeC.style.display = "none";
shoeThreeD.style.display = "none";
shoeThreeE.style.display = "none";
shoeThreeF.style.display = "none";

//vans
shoeFourA.style.display = "none";
shoeFourB.style.display = "none";
shoeFourC.style.display = "none";
shoeFourD.style.display = "none";
shoeFourE.style.display = "none";
shoeFourF.style.display = "none";



//converse
shoeFiveA.style.display = "none";
shoeFiveB.style.display = "none";
shoeFiveC.style.display = "none";
shoeFiveD.style.display = "none";
shoeFiveE.style.display = "none";
shoeFiveF.style.display = "none";

//underarmour
shoeSixA.style.display = "none";
shoeSixB.style.display = "none";
shoeSixC.style.display = "none";
//clarks
shoeSevenA.style.display = "none";
shoeSevenB.style.display = "none";
shoeSevenC.style.display = "none";
shoeSevenD.style.display = "none";
shoeSevenE.style.display = "none";
shoeSevenF.style.display = "none";








/*pumaMARATHON*/
//A
function shoeOneAIn() {
    if (shoeOneA.style.display = "none") {
        shoeOneA.style.display = "block";
    }
    else {
        shoeOneA.style.display = "none"
    }
}

function shoeOneAOut() {
    if (shoeOneA.style.display = "block") {
        shoeOneA.style.display = "none";
    }
}
//B

function shoeOneBIn() {
    if (shoeOneB.style.display = "none") {
        shoeOneB.style.display = "block";
    }
    else {
        shoeOneB.style.display = "none"
    }
}

function shoeOneBOut() {
    if (shoeOneB.style.display = "block") {
        shoeOneB.style.display = "none";
    }
}

//C
function shoeOneCIn() {
    if (shoeOneC.style.display = "none") {
        shoeOneC.style.display = "block";
    }
    else {
        shoeOneC.style.display = "none"
    }
}

function shoeOneCOut() {
    if (shoeOneC.style.display = "block") {
        shoeOneC.style.display = "none";
    }
}

/*puma*/
//A
function shoeTwoAIn() {
    if (shoeTwoA.style.display = "none") {
        shoeTwoA.style.display = "block";
    }
    else {
        shoeTwoA.style.display = "none"
    }
}

function shoeTwoAOut() {
    if (shoeTwoA.style.display = "block") {
        shoeTwoA.style.display = "none";
    }
}
//B
function shoeTwoBIn() {
    if (shoeTwoB.style.display = "none") {
        shoeTwoB.style.display = "block";
    }
    else {
        shoeTwoB.style.display = "none"
    }
}

function shoeTwoBOut() {
    if (shoeTwoB.style.display = "block") {
        shoeTwoB.style.display = "none";
    }
}

//C
function shoeTwoCIn() {
    if (shoeTwoC.style.display = "none") {
        shoeTwoC.style.display = "block";
    }
    else {
        shoeTwoC.style.display = "none"
    }
}

function shoeTwoCOut() {
    if (shoeTwoC.style.display = "block") {
        shoeTwoC.style.display = "none";
    }
}


/*adidas*/
//A
function shoeThreeAIn() {
    if (shoeThreeA.style.display = "none") {
        shoeThreeA.style.display = "block";
    }
    else {
        shoeThreeA.style.display = "none"
    }
}

function shoeThreeAOut() {
    if (shoeThreeA.style.display = "block") {
        shoeThreeA.style.display = "none";
    }
}
//B
function shoeThreeBIn() {
    if (shoeThreeB.style.display = "none") {
        shoeThreeB.style.display = "block";
    }
    else {
        shoeThreeB.style.display = "none"
    }
}

function shoeThreeBOut() {
    if (shoeThreeB.style.display = "block") {
        shoeThreeB.style.display = "none";
    }
}

//c
function shoeThreeCIn() {
    if (shoeThreeC.style.display = "none") {
        shoeThreeC.style.display = "block";
    }
    else {
        shoeThreeC.style.display = "none"
    }
}

function shoeThreeCOut() {
    if (shoeThreeC.style.display = "block") {
        shoeThreeC.style.display = "none";
    }
}
//d
function shoeThreeDIn() {
    if (shoeThreeD.style.display = "none") {
        shoeThreeD.style.display = "block";
    }
    else {
        shoeThreeD.style.display = "none"
    }
}

function shoeThreeDOut() {
    if (shoeThreeD.style.display = "block") {
        shoeThreeD.style.display = "none";
    }
}
//e
function shoeThreeEIn() {
    if (shoeThreeE.style.display = "none") {
        shoeThreeE.style.display = "block";
    }
    else {
        shoeThreeE.style.display = "none"
    }
}

function shoeThreeEOut() {
    if (shoeThreeE.style.display = "block") {
        shoeThreeE.style.display = "none";
    }
}
//f
function shoeThreeFIn() {
    if (shoeThreeF.style.display = "none") {
        shoeThreeF.style.display = "block";
    }
    else {
        shoeThreeF.style.display = "none"
    }
}

function shoeThreeFOut() {
    if (shoeThreeF.style.display = "block") {
        shoeThreeF.style.display = "none";
    }
}


/*vans*/
//a
function shoeFourAIn() {
    if (shoeFourA.style.display = "none") {
        shoeFourA.style.display = "block";
    }
    else {
        shoeFourA.style.display = "none"
    }
}

function shoeFourAOut() {
    if (shoeFourA.style.display = "block") {
        shoeFourA.style.display = "none";
    }
}
//b
function shoeFourBIn() {
    if (shoeFourB.style.display = "none") {
        shoeFourB.style.display = "block";
    }
    else {
        shoeFourB.style.display = "none"
    }
}

function shoeFourBOut() {
    if (shoeFourB.style.display = "block") {
        shoeFourB.style.display = "none";
    }
}

//C
function shoeFourCIn() {
    if (shoeFourC.style.display = "none") {
        shoeFourC.style.display = "block";
    }
    else {
        shoeFourC.style.display = "none"
    }
}

function shoeFourCOut() {
    if (shoeFourC.style.display = "block") {
        shoeFourC.style.display = "none";
    }
}
//D
function shoeFourDIn() {
    if (shoeFourD.style.display = "none") {
        shoeFourD.style.display = "block";
    }
    else {
        shoeFourD.style.display = "none"
    }
}

function shoeFourDOut() {
    if (shoeFourD.style.display = "block") {
        shoeFourD.style.display = "none";
    }
}
//E
function shoeFourEIn() {
    if (shoeFourE.style.display = "none") {
        shoeFourE.style.display = "block";
    }
    else {
        shoeFourE.style.display = "none"
    }
}

function shoeFourEOut() {
    if (shoeFourE.style.display = "block") {
        shoeFourE.style.display = "none";
    }
}
//F
function shoeFourFIn() {
    if (shoeFourF.style.display = "none") {
        shoeFourF.style.display = "block";
    }
    else {
        shoeFourF.style.display = "none"
    }
}

function shoeFourFOut() {
    if (shoeFourF.style.display = "block") {
        shoeFourF.style.display = "none";
    }
}


/*converse*/
//A
function shoeFiveAIn() {
    if (shoeFiveA.style.display = "none") {
        shoeFiveA.style.display = "block";
    }
    else {
        shoeFiveA.style.display = "none"
    }
}

function shoeFiveAOut() {
    if (shoeFiveA.style.display = "block") {
        shoeFiveA.style.display = "none";
    }
}

//B
function shoeFiveBIn() {
    if (shoeFiveB.style.display = "none") {
        shoeFiveB.style.display = "block";
    }
    else {
        shoeFiveB.style.display = "none"
    }
}

function shoeFiveBOut() {
    if (shoeFiveB.style.display = "block") {
        shoeFiveB.style.display = "none";
    }
}
//C
function shoeFiveCIn() {
    if (shoeFiveC.style.display = "none") {
        shoeFiveC.style.display = "block";
    }
    else {
        shoeFiveC.style.display = "none"
    }
}

function shoeFiveCOut() {
    if (shoeFiveC.style.display = "block") {
        shoeFiveC.style.display = "none";
    }
}
//D
function shoeFiveDIn() {
    if (shoeFiveD.style.display = "none") {
        shoeFiveD.style.display = "block";
    }
    else {
        shoeFiveD.style.display = "none"
    }
}

function shoeFiveDOut() {
    if (shoeFiveD.style.display = "block") {
        shoeFiveD.style.display = "none";
    }
}
//E
function shoeFiveEIn() {
    if (shoeFiveE.style.display = "none") {
        shoeFiveE.style.display = "block";
    }
    else {
        shoeFiveE.style.display = "none"
    }
}

function shoeFiveEOut() {
    if (shoeFiveE.style.display = "block") {
        shoeFiveE.style.display = "none";
    }
}
//F
function shoeFiveFIn() {
    if (shoeFiveF.style.display = "none") {
        shoeFiveF.style.display = "block";
    }
    else {
        shoeFiveF.style.display = "none"
    }
}

function shoeFiveFOut() {
    if (shoeFiveF.style.display = "block") {
        shoeFiveF.style.display = "none";
    }
}

/*underarmour*/
//A
function shoeSixAIn() {
    if (shoeSixA.style.display = "none") {
        shoeSixA.style.display = "block";
    }
    else {
        shoeSixA.style.display = "none"
    }
}

function shoeSixAOut() {
    if (shoeSixA.style.display = "block") {
        shoeSixA.style.display = "none";
    }
}
//B

function shoeSixBIn() {
    if (shoeSixB.style.display = "none") {
        shoeSixB.style.display = "block";
    }
    else {
        shoeSixB.style.display = "none"
    }
}

function shoeSixBOut() {
    if (shoeSixB.style.display = "block") {
        shoeSixB.style.display = "none";
    }
}

//C
function shoeSixCIn() {
    if (shoeSixC.style.display = "none") {
        shoeSixC.style.display = "block";
    }
    else {
        shoeSixC.style.display = "none"
    }
}

function shoeSixCOut() {
    if (shoeSixC.style.display = "block") {
        shoeSixC.style.display = "none";
    }
}

/*clarks*/
//A
function shoeSevenAIn() {
    if (shoeSevenA.style.display = "none") {
        shoeSevenA.style.display = "block";
    }
    else {
        shoeSevenA.style.display = "none"
    }
}

function shoeSevenAOut() {
    if (shoeSevenA.style.display = "block") {
        shoeSevenA.style.display = "none";
    }
}

//B
function shoeSevenBIn() {
    if (shoeSevenB.style.display = "none") {
        shoeSevenB.style.display = "block";
    }
    else {
        shoeSevenB.style.display = "none"
    }
}

function shoeSevenBOut() {
    if (shoeSevenB.style.display = "block") {
        shoeSevenB.style.display = "none";
    }
}
//C
function shoeSevenCIn() {
    if (shoeSevenC.style.display = "none") {
        shoeSevenC.style.display = "block";
    }
    else {
        shoeSevenC.style.display = "none"
    }
}

function shoeSevenCOut() {
    if (shoeSevenC.style.display = "block") {
        shoeSevenC.style.display = "none";
    }
}

//D
function shoeSevenDIn() {
    if (shoeSevenD.style.display = "none") {
        shoeSevenD.style.display = "block";
    }
    else {
        shoeSevenD.style.display = "none"
    }
}

function shoeSevenDOut() {
    if (shoeSevenD.style.display = "block") {
        shoeSevenD.style.display = "none";
    }
}
//E
function shoeSevenEIn() {
    if (shoeSevenE.style.display = "none") {
        shoeSevenE.style.display = "block";
    }
    else {
        shoeSevenE.style.display = "none"
    }
}

function shoeSevenEOut() {
    if (shoeSevenE.style.display = "block") {
        shoeSevenE.style.display = "none";
    }
}

//F
function shoeSevenFIn() {
    if (shoeSevenF.style.display = "none") {
        shoeSevenF.style.display = "block";
    }
    else {
        shoeSevenF.style.display = "none"
    }
}

function shoeSevenFOut() {
    if (shoeSevenF.style.display = "block") {
        shoeSevenF.style.display = "none";
    }
}




//Modal
//checkout popup 
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}


