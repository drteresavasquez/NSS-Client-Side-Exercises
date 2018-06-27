console.log("HERE!")

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
};
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
};
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
};
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
};
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
};

let uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];
const cookedFood = [];

// This exercise does not require you to alter this function. But read it. See if you can follow what it takes in, executes, and returns.
// Our grill() function:
const grill = currentObject => {
	//return cooked food set to true
	currentObject.cooked = true;
	
	// push the newly cooked object (still represented by 'currentObject') into the empty array cookedFood
	cookedFood.push(currentObject);
};

//********** LOOP ANSWER BEGIN *******************//
// 1. Write a for loop that iterates over the objects in the uncookedFood array. Ensure the loop only iterates to the end of the array.
for(let i = 0; i < uncookedFood.length; i++){
    // 2. Console.log() the results to ensure your loop is returning Food objects.
    // console.log(uncookedFood[i]);

    // 3. Save uncookedFood[i] into a variable named 'currentObject'.
    let currentObject = uncookedFood[i];

    // 4. Now, add a line that calls the grill() function and passes in the current item being iterated over.
    grill(currentObject)

    // DELETE THE ITEMS FROM THE ARRAY AS THEY ARE COOKED...
    // delete uncookedFood[i]

    // STILL WORKING ON THIS...THE ARRAY IS SHIFTING SO THE LENGTH IS BEING UPDATED WITH EACH PASS...
    uncookedFood = uncookedFood.filter(item => !cookedFood.includes(item))
    console.log("UNCOOKED STUFF", uncookedFood);
    console.log("COOKED STUFF", cookedFood);
}
// If the loop successfully iterates over the array and successfully executes the grill() function on each object. This console log should appear as an array that has each object's 'cooked' key now shows true.
//********** LOOP ANSWER END *******************//


//****** SINGLE CODE LINE ANSWER USING FOREACH ********//
// This answer allows the grill funtion to run on every item in the array by passing the function to the higher order function
// uncookedFood.forEach(grill);

console.log('CookedFood array after our loop ran!: ', cookedFood);