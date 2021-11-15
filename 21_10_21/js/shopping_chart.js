const cart = [];


function myItems() {
    let item = prompt("Add your items:");
    if (item == null || item == " ") {
        alert("Please insert your item!")

    } if (cart.includes(item) == true) {
        alert(item + " is already in your chart!") 
    
    } else {
        alert("Item added: " + item)
        cart.push(item);
    }

    console.log(cart)
}