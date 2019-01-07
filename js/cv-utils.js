/**
 * @description 
 * @param {String} mainImage URL pointing to an image
 * @param {String} subImage URL pointing to a subset of an image.
 * @return {Array} A list of coordinates for matching image results
 */
function findSubImage(mainImage, subImage) {
    
    prepForCompare(subImage)

    divide(mainImage, subImage)
    // Remove all pieces missing vital color groups
    .forEach( (image) => {
        prepForCompare(image)

        let possibleMatch = false
        subImage.layers.forEach((subLayer) => {
            if (image.layers.contains(subLayer)) {
                possibleMatch = true;
            }
        })
        if (possibleMatch) {
            subImage.possibleMatch = true;
        }
    })

    if (subImage.getTopThree().containedBy(mainImage)) {

    }
}
/**
* @desc Splits main into an array of section images with statistical details
  @param mainImage 

* @unimplemented
* 
*/
function divide(mainImage, subImage) {

}

/**
 * 
 * @param {*} image 
 * @unimplemented
 */
function prepForCompare(image) {
    const POSTERIZE_QTY

    applyGreyscale(image)
    applyPosterize(image, POSTERIZE_QTY)

    /** An array containing a list of color groups */
    let layers = getLayersByColor(image)

    // Sort main layers on posterized colors group descending
    // layers.sort((layer) => {

    //     return 
    // })

    let processedImage = image
    return processedImage
}
/**
 * 
 * @param {*} image 
 * @unimplemented
 */
function applyGreyscale(image) {

    let processedImage = image
    return processedImage
}
/**
 * 
 * @param {*} image 
 * @unimplemented
 */
function applyPosterize(image) {

    let processedImage = image
    return processedImage
}
/**
 * 
 * @param {*} image 
 * @return {Array} An array containing a mapping of color groups 
 * @unimplemented
 */
function getLayersByColor(image) {

    let processedImage = image
    return processedImage
}