/*assign variables to headline and li-elements*/
var ourHeadline = document.getElementById("our-headline")
var listItems = document.getElementById("religions").getElementsByTagName("li");

/*loop to count through li-elements & assign an event-listener to check for user-click, then performs a function*/
for (i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", activateItem);
}

/* upon user-click, assigns clicked-elements-innerHTML to the headline-elements-innerHTML*/
function activateItem() {
    ourHeadline.innerHTML = this.innerHTML;
}