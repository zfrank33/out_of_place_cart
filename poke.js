functionaddPokeFiledl

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
}





function create

let t