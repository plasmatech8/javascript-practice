

// Attributes get/set
if (element.hasAttribute("target")){
    console.log(element.getAttribute("target"))
}

// Create a caption with text set as the image alt text + remove the alt text.
const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = FEATURED.querySelector("img");

var altText = THEIMAGE.getAttribute("alt");
var captionElement = document.createElement("figcaption");
var captionText = document.createTextNode(altText); // Can alternatively use .append, but not all browsers support it.
captionElement.appendChild(captionText)

FEATURED.appendChild(captionElement)
THEIMAGE.setAttribute("alt", "")
