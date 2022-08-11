// Create a JS Cart
// Create a JavaScript Function that takes in an:
//     Action String - string representing what the user wants to i.e. "add_to_cart", "remove_from_cart", 
// "remove_all_from_cart", "empty_cart"
//     a Item JS Object [dictionary] (the contents of which are unimportant, other than they have an id key)
//     a Cart Array which you should Default to an EMPTY ARRAY (because our cart starts empty)
// The function will use a switch statement to preform a different action based on the Action String

// Write the code to add items to the cart, remove a single item 
// from the cart (just 1 item if they have multiple of the same item in the cart),
//  remove all of a single item from the cart (aka if the user bought 3 t-shirts it would remove
//  all 3 of those same tshirts), and the clear the cart (aka give them an empty cart)
// EACH ONE OF THESE ACTIONS SHOULD RETURN a fresh Cart array with the changes
// if the item in not in the cart and the user asked to remove said item then just return the cart unchanged.


// HERE IS THE CATCH:
//      You need each one of these actions to be preformed as an Out-of-Place algorithm not In-Place
// NOTE:
//      Out-of-Place would mean that the cart object that was inputted will never be changed and we 
// will return a brand new copy of cart [array]
// let x = {name: "blood", color: "red"}
let x = ["hhh","lll","kkkkk"]
let [...y] = x
y.push("jjj")
console.log(x) // will return {name: "strawberry", color: "red"}
console.log(y)
function cart(action_string,cart_array,item_obj={'id':""}){
    cart_array=[[]]
    let cart_array_len = cart_array.length;
    
    switch(action_string) {
  case "add_to_cart":
    // code block
    cart_array_len = cart_array.length;
    [...cart_array[cart_array_len]] = cart_array[cart_array_len-1]
    cart_array[cart_array_len].push(1)
    console.log("Remove all from cart")
    console.log(cart_array)
    break;
  case "remove_from_cart":
    // code block
    cart_array_len = cart_array.length;
    [...cart_array[cart_array_len]] = cart_array[cart_array_len-1]
    cart_array[cart_array_len].pop()
    console.log("Remove from cart")
    console.log(cart_array)
    break;
   case "remove_all_from_cart":
    // code block
    cart_array_len = cart_array.length;
    [...cart_array[cart_array_len]] = cart_array[cart_array_len-1]
    cart_array[cart_array_len].length = 0
    console.log("Remove all from cart")
    console.log(cart_array)

    break;
   case "empty_cart":
    // code block
    console.log("Empty cat")
    break;
//   default:
//     pass
//     // code block
}
}console