// your solution should go here
// for demo purposes use the console for any out you will need.

var recipe = {
    title: "Mole Serves",
    servings: 2,
    ingredients: ["cinnamon", "cumin", "cocoa"]
};
console.log(recipe.title);
console.log(recipe.servings);
console.log("Ingredients: ");
for (var i = 0; i < 3; i++) {
    console.log(recipe.ingredients[i]);
}

var books = [{
    title: "Fullstack React",
    author: "Anthony et al",
    alreadyRead: true
},
{
    title: "Hence Forth",
    author: "Chishimba",
    alreadyRead: false
},
{
    title: "Be Irrestible",
    author: "DNK",
    alreadyRead: false
}
];
for (var i = 0; i < books.length; i++) {
    console.log(books[i].title + " by " + books[i].author);

    if (books[i].alreadyRead == true) {
        console.log("You already read" + books[i].title + " by " + books[i].author);
    } else {
        console.log("You need to read" + books[i].title + " by " + books[i].author);
    }
}




