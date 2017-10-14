//'should hide all the images from the view'
function hideAllImages() {
  $('img').hide();
}
//'should show all the images again'
function showAllImages() {
  $('img').show();
}
//'should change the heading to "The Best Collection"'
function changeHeadingToTheBestCollection() {
  $(".container > h4:first").text("The Best Collection");
}
//'should make the hr (.line) element bolder'
function makeHrLineElementBolder() {
    let currentWidth = parseFloat($('hr.line').first().css('border-width'));
    $('hr.line').css('border-width', `${currentWidth+1}px`);
}
//'should change the background of each product title with a different color'
function changeBackgroundColorOfEachProductTitleWithDifferentColor() {
  $('span.thumbnail > h4').each(function(){
      let hexColor = '#'+Math.floor(Math.random()*16777215).toString(16);
      $(this).css('backgroundColor', hexColor);
  })
}
//'should remove the "BUY ITEM" buttons'
function removeBuyItemButtons() {
    $('span .btn').hide();
}
//'should remove the last three item from the view'
function removeLastThreeItemsFromView() {
    $('.row .col-md-3.col-sm-6:nth-of-type(n+6)').remove();
}
//'should make 10% reduction on all products'
function makeTenPercentPriceReductionOnAllProducts() {
    $('.price').each(function(){
        let price = $(this).text(); // '$29.90'
        price = +price.replace('$', ''); // 29.90, alternative: parseFloat, parseInt, new Number()
        $(this).text(`$${price * 0.9}`);
    })
}
//'should rename the product shirt to "Fish-Shirt"'
function renameTheProductShirtToFishShirt() {
    $('.row .col-md-3.col-sm-6:nth-of-type(4n+1) h4').text('Fish-Shirt');
}
//'should rename the first rock item to "Bird-Rock"'
function renameTheFirstRockItemToBirdRock() {
    $('.row .col-md-3.col-sm-6:nth-child(2) h4').text('Bird-Rock');
}
//'should add 5 stars to the product shirt'
function addFiveStarsToTheProductShirt() {
    $('.row .col-md-3.col-sm-6:nth-of-type(4n+1) .ratings span:last-child')
        .removeClass('glyphicon-star-empty')
        .addClass('glyphicon-star');
}
//'should change the title name with a random name (use alg. for randomly generating chars)'
function changeTheTitleNameWithARandomName() {
    $('.row h4').each(function(){
        let productName = (Math.random()*1232345234523452345).toString(36).replace(/\d/g, "").toUpperCase()
        $(this).text(productName);
    })
}
//'should color the stars of the third product with green'
function colorTheStarsOfTheThirdProductWithGreen() {
    $('.row .col-md-3.col-sm-6:nth-child(3) .ratings span').css('color', 'green')
}
//'should reset the last two images to the url "http://bit.ly/2xq8ev0"'
function resetLastTwoImagesToUrl() {
    $('.row .col-md-3.col-sm-6:nth-of-type(n+4) img').each(function(){
        $(this).data('orgimg', $(this).attr('src'));
        $(this).attr('src', "http://bit.ly/2xq8ev0")
    });
}
//'should constantly change the price (#changingPrice), increment it by one in each 3 secs.'
function constantlyChangeThePriceAndIncrementItByOneInEachThreeSeconds() {
    setInterval(function(){
        let price = $('#changingPrice').text(); // '$29.90'
        price = +price.replace('$', ''); // 29.90, 
        $('#changingPrice').text(`$${price + 1}`);
    }, 1000)
}

/* with all prices
        $('.price').each(function(){
            let price = $(this).text(); // '$29.90'
            price = +price.replace('$', ''); // 29.90, 
            $(this).text(`$${price + 1}`);
        })
*/
//'should show the "BUY ITEM" again with a green background, gray border and a thin shadow'
function showTheBuyItemAgainWithAGreenBackgroundGrayBorderAndThinShadow() {
    $('span .btn')
        .show()
        .addClass('js-newButtonStyle');
}
// 'should add an event handler to the "BUY ITEM" buttons and after a click it should show an alert'
function addAnEventHandlerToTheBuyItemButtonsAndAfterClickShowAlert() {
    $('span .btn').click(function(e){
        alert("merhaba")
        e.preventDefault();
    })
}
// 'should bring back the initial image again, instead of "http://bit.ly/2xq8ev0"'
function bringBackTheInitialImageAgainInsteadOfUrl() {
    $('img').each(function(){
        if($(this).data('orgimg')){
            $(this).attr('src', $(this).data('orgimg'));
        }
    });
}
// 'should change every product desctiption to any text with at least 50 charakters'
function changeEveryProductDescriptionToAnyTextWithAtLeast50Characters() {}
//'should randomly change all of the prices'
function randomlyChangeAllOfThePrices() {}
//'should mark the background with the color yellow of the two cheapest products'
function markTheBackgroundWithTheColorYellowOfTheTwoCheapestProducts() {

}
//'should sort all the products ascendantly based on the the new prices'
function sortAllOfTheProductsAscendantlyBasedOnTheNewPrices() {

}
//'should add an mouse over event only the highest two products which logs in console the price (place on wrapping div)'
function addAnMouseOverEventOnlyTheHighestTwoProductsWhichLogsInConsoleThePrice() {

}
//'should add three new products to the list like the existing one'
function addThreeNewProductsToTheEndOfTheProductList() {

}