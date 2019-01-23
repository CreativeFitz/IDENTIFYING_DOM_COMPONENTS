// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
// Obtain a reference the element with a class of dashed and remove it.
// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.

const article_header1 = document.querySelector(".article__header");
console.log(article_header1);
article_header1.innerHTML = "This is the Home Star Runner Blog!"

const all_headers = document.querySelectorAll(".article__header");
console.log(all_headers);

for (i = 0; i < all_headers.length; i++){

    all_headers[i].classList.add("important");
}

document.querySelector(".aside_box--dark").classList.remove("dashed");
document.querySelector(".article__footer").classList.add("goldenrod");