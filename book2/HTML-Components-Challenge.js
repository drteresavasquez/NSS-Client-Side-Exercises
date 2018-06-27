console.log("HERE!");

// MAIN CHALLENGE
// document.querySelector('article').innerHTML = `Mission: WORLD DOMINATION!`

// ADVANCED CHALLENGE
// In JavaScript, there is a method that creates a new attribute node for any DOM element. Discover that method and use it to create a custom attribute named congressional-district and its value should be your congressional district number. Then attach that attribute to the <article> container you made for your representative component.
let node = document.querySelector('article');
let attr = document.createAttribute("congressional-district");
// attributes are strings
attr.value = "5";
node.setAttributeNode(attr);

// check elements in the console, your article element should now have the added attribute
/* <article class="main" congressional-district="5">...</article> */

console.log(node.getAttribute("congressional-district")); 