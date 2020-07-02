const IMAGES = document.querySelectorAll("img");
const SIZES = {
    showcase: "100w",
    reason: "(max-width: 799px) 100vw, 372px",
    feature: "(max-width: 799px) 100vw, 558px",
    story: "(max-width: 799px) 100vw, 670px",
}
/**
 * Returns an array of 'images/testimonials/bluepebble-2000.jpg 400w' for sizes
 * from 400 to 2000.
 */
function makeSrcset(imgSrc){
    let markup = [];
    let width = 400;
    for (let i = 0; i<5; i++){
        markup[i] = imgSrc + "-" + width*(i+1) + ".jpg " + width + "w";
    }
    return markup.join();
}

for (let i = 0; i < IMAGES.length; i++) {
    // Image tag attributes
    let imgSrc = IMAGES[i].getAttribute("src"); // e.g. images/testimonials/bluepebble-800.jpg
    let type = IMAGES[i].getAttribute("data-type"); // e.g. showcasem, reason, feature, story
    imgSrc = imgSrc.slice(0, -8);

    // Expected size for each type of image
    let sizes = SIZES[type];
    let srcset = makeSrcset(imgSrc);

    // Idk what we are doing here.
    IMAGES[i].setAttribute("srcset", srcset);
    IMAGES[i].setAttribute("sizes", sizes);
}