/*
 * Provide your answers here for the jQuery assignment
 * */

//'should hide all the images from the view'
function hideAllImages() {
    $("img").hide();
}
//'should show all the images again'
function showAllImages() {
    $("img").show();
}
//'should change the heading to "The Best Collection"'
function changeHeadingToTheBestCollection() {
    $(".container").children().first().text("The Best Collection");
}
//'should make the hr (.line) element bolder'
function makeHrLineElementBolder() {
    $("hr.line").css("border-width", "4px");
}
//'should change the background of each product title with a different color'
function changeBackgroundColorOfEachProductTitleWithDifferentColor() {
    let colors = ["yellow", "red", "blue", "grey", "green", "orange", "cyan", "magenta", "skyblue"];
    $("span.thumbnail").find("h4").toArray().forEach((tag, index) => {
        $(tag).css("background-color", colors[index]);
    });
}
//'should remove the "BUY ITEM" buttons'
function removeBuyItemButtons() {
    $("button[class='btn btn-info right']").hide();
}
//'should remove the last three item from the view'
function removeLastThreeItemsFromView() {
    let items = $(".container").children("div").children("div");
    $(items[items.length-1]).remove();
    $(items[items.length-2]).remove();
    $(items[items.length-3]).remove();
}
//'should make 10% reduction on all products'
function makeTenPercentPriceReductionOnAllProducts() {
    $(".price").each(function(){
        let price = $(this).text().substring(1);
        let priceValue = Number.parseFloat(price);
        $(this).text("$" + (priceValue * 0.90).toString());
    })
}

//'should rename the product shirt to "Fish-Shirt"'
function renameTheProductShirtToFishShirt() {
    $("#firstProduct").find("h4").text("Fish-Shirt");
}
//'should rename the first rock item to "Bird-Rock"'
function renameTheFirstRockItemToBirdRock() {
    $("#secondProduct").find("h4").text("Bird-Rock");
}
//'should add 5 stars to the product shirt'
function addFiveStarsToTheProductShirt() {
    let stars = $("#firstProduct").find(".ratings").children("span:last-child");
    stars.removeClass("glyphicon-star-empty");
    stars.addClass("glyphicon-star");
}
//'should change the title name with a random name (use alg. for randomly generating chars)'
function changeTheTitleNameWithARandomName() {
    let title = $(".container").children().first();
    let titleText = title.text();
    let newTitle = "";
    for(let i = 0; i < titleText.length;i++){
        let newChar = String.fromCharCode(Math.min(65 + i + Math.floor(Math.random() * 30),90));
        newTitle += i % 2 === 0? newChar.toLowerCase() : newChar;
    }
    title.text(newTitle);
}
//'should color the stars of the third product with green'
function colorTheStarsOfTheThirdProductWithGreen() {
    $("#secondProduct").next().find(".ratings").children().css("color","green");
}
//'should reset the last two images to the url "http://bit.ly/2xq8ev0"'
function resetLastTwoImagesToUrl() {
    let items = $(".container").children("div").children("div");
    $(items[items.length-1]).find("img").attr("src","http://bit.ly/2xq8ev0");
    $(items[items.length-2]).find("img").attr("src","http://bit.ly/2xq8ev0");
}
//'should constantly change the price (#changingPrice), increment it by one in each 3 secs.'
function constantlyChangeThePriceAndIncrementItByOneInEachThreeSeconds() {
    setInterval(function(){
        let price = $("#changingPrice");
        let priceValue = Number(price.text().substring(1));
        price.text("$" + (priceValue + 1));
    },3000);
}
//'should show the "BUY ITEM" again with a green background, gray border and a thin shadow'
function showTheBuyItemAgainWithAGreenBackgroundGrayBorderAndThinShadow() {
    let buttons = $("button[class='btn btn-info right']");
    buttons.show();
    buttons.css("border-color","grey");
    buttons.css("box-shadow", "1px 1px 3px #222222");
}
// 'should add an event handler to the "BUY ITEM" buttons and after a click it should show an alert'
function addAnEventHandlerToTheBuyItemButtonsAndAfterClickShowAlert() {
    $("button[class='btn btn-info right']").click(function(){
        alert("Hi IT Club!");
    })
}
// 'should bring back the initial image again, instead of "http://bit.ly/2xq8ev0"'
function bringBackTheInitialImageAgainInsteadOfUrl() {
    let items = $(".container").children("div").children("div");
    $(items[items.length-1]).find("img").attr("src","https://s12.postimg.org/dawwajl0d/item_3_180x200.png");
    $(items[items.length-2]).find("img").attr("src","https://s12.postimg.org/dawwajl0d/item_3_180x200.png");
}
// 'should change every product desctiption to any text with at least 50 charakters'
function changeEveryProductDescriptionToAnyTextWithAtLeast50Characters() {
    let descriptions = $(".thumbnail").find(" > p");
    descriptions.each(function(){
        $(this).text("Was isn' los alda, was geht'n hier ab, hier isses doh ni meh juut, ne?");
    })
}
//'should randomly change all of the prices'
function randomlyChangeAllOfThePrices() {
    $(".price").each(function(){
        let price = $(this).text().substring(1);
        let priceValue = Number.parseFloat(price);
        $(this).text("$" + (priceValue * (Math.random()* 1.2) + 0.5).toPrecision(4).toString());
    })
}
//'should mark the background with the color yellow of the two cheapest products'
function markTheBackgroundWithTheColorYellowOfTheTwoCheapestProducts() {
    let prices = $('.price');
    let valuePrices = prices.map((index, tag) => {
        return parseFloat($(tag).text().substring(1));
    });
    valuePrices.sort(function(a,b){return a > b});
    let firstLowPrice = $(".price:contains('" + valuePrices[0] + "')");
    let secondLowPrice = $(".price:contains('" + valuePrices[1] + "')");
    firstLowPrice.css("background-color","yellow");
    secondLowPrice.css("background-color", "yellow");
}
//'should sort all the products ascendantly based on the the new prices'
function sortAllOfTheProductsAscendantlyBasedOnTheNewPrices() {
    let prices = $('.price');
    let valuePrices = prices.map((index, tag) => {
        return parseFloat($(tag).text().substring(1));
    });
    //Beware, without a compare-function, the sorting algorith is instable
    valuePrices.sort(function(a,b){return a > b});
    let parents = [];
    for(let value of valuePrices.toArray()){
        let parent = $(".price:contains('" + value + "')").parents(".thumbnail").parent();
        parents.push(parent);
        parent.remove();
    }
    $(".container > .row").append(parents);
}
//'should add an mouse over event only the highest two products which logs in console the price (place on wrapping div)'
function addAnMouseOverEventOnlyTheHighestTwoProductsWhichLogsInConsoleThePrice() {
    let prices = $('.price');
    let valuePrices = prices.map((index, tag) => {
        return parseFloat($(tag).text().substring(1));
    });
    valuePrices.sort(function(a,b){return a > b});
    let highestPrice = $(".price:contains('" + valuePrices[valuePrices.length-1] + "')");
    let secondHighestPrice = $(".price:contains('" + valuePrices[valuePrices.length-2] + "')");
    highestPrice.parents(".thumbnail").parent().hover(function(){
        console.log(highestPrice.text());
    });
    secondHighestPrice.parents(".thumbnail").parent().hover(function(){
        console.log(secondHighestPrice.text());
    })
}
//'should add three new products to the list like the existing one'
function addThreeNewProductsToTheEndOfTheProductList(){
    let parent = $(".container > .row");
    let prototype = $("#firstProduct").clone();
    prototype.removeAttr("id");
    parent.append(prototype);
    parent.append(prototype.clone());
    parent.append(prototype.clone());
    //if you want your list to be sorted after this point, there is a very simple way
    // sortAllOfTheProductsAscendantlyBasedOnTheNewPrices();
}