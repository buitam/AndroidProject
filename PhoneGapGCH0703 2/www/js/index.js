$(document).on("ready", function(){
    databaseHandler.createDatabase();
});
function addProduct(){
    var restaurantName = $("#txtRestaurantName").val();
    var reporterName = $("#txtReporterName").val();
    var averagePrice = $("#txtAveragePrice").val();
    var dateVisit = $("#txtDateVisit").val();
    var restaurantType = $("#restaurantType").val();
    var serviceRating = $("#serviceRating").val();
    var cleanlinessRating = $("#cleanlinessRating").val();
    var foodQualityRating = $("#foodQualityRating").val();
    var note = $("#txtNote").val();
    if(!restaurantName){
        alert("Restaurant Name is required");
    }else{
        var r = confirm("Restaurant Name: " + restaurantName
            + "\n" + "Reporter Name: " + reporterName
            + "\n" + "Average Price: " + averagePrice
            + "\n" + "Date Visit: " + dateVisit
            + "\n" + "Restaurant Type: " + restaurantType
            + "\n" + "Service Rating: " + serviceRating
            + "\n" + "Cleanliness Rating: " + cleanlinessRating
            + "\n" + "Food Quality Rating: " + foodQualityRating
            + "\n" + "Note: " + note

        );
        if(r==true){
            productHandler.addProduct(restaurantName, reporterName, averagePrice, dateVisit, restaurantType, serviceRating,cleanlinessRating, foodQualityRating, note);
            $("#txtRestaurantName").val("");
            $("#txtReporterName").val("");
            $("#txtAveragePrice").val("");
            $("#txtDateVisit").val("");
            $("#restaurantType").val("");
            $("#serviceRating").val("");
            $("#cleanlinessRating").val("");
            $("#foodQualityRating").val("");
            $("#txtNote").val("");
        }
    }
}

var currentProduct={
    id: -1,
    restaurantName: "",
    reporterName:"",
    averagePrice:"",
    dateVisit: "",
    restaurantType:"",
    serviceRating:"",
    cleanlinessRating:"",
    foodQualityRating:"",
    note:"",
}
function displayProducts(results){
    var length = results.rows.length;
    var lstProducts = $("#lstProducts");
    lstProducts.empty();//Clean the old data before adding.
    for(var i = 0; i< length; i++){
        var item = results.rows.item(i);
        var a = $("<a />");
        var restaurantName = $("<h3 />").text("Restaurant name: ");
        var totalRating = $("<p />").text("Total rating: ");
        var reporterName = $("<p />").text("Reporter Name: ");
        var averagePrice = $("<p />").text("Average Price: ");
        var dateVisit = $("<p />").text("Date Visit: ");
        var restaurantType = $("<p />").text("Restaurant Type: ");
        var serviceRating = $("<p />").text("Service Rating: ");
        var cleanlinessRating = $("<p />").text("Cleanliness Rating: ");
        var foodQualityRating = $("<p />").text("Food Quality Rating: ");
        var note = $("<p />").text("Note: ");
        var id = $("<p />").text("Id: ");


        var spanRestaurantName = $("<span />").text(item.restaurantName).attr("name", "restaurantName");
        var spanReporterName = $("<span />").text(item.reporterName).attr("name", "reporterName");
        var spanAveragePrice = $("<span />").text(item.averagePrice).attr("name", "averagePrice");
        var spanDateVisit = $("<span />").text(item.dateVisit).attr("name", "dateVisit");
        var spanRestaurantType = $("<span />").text(item.restaurantType).attr("name", "restaurantType");
        var spanServiceRating = $("<span />").text(item.serviceRating).attr("name", "serviceRating");
        var spanCleanlinessRating = $("<span />").text(item.cleanlinessRating).attr("name", "cleanlinessRating");
        var spanFoodQualityRating = $("<span />").text(item.foodQualityRating).attr("name", "foodQualityRating");
        var spanNote = $("<span />").text(item.note).attr("name", "note");
        var spanTotalRating = $("<span />").text("totalRating").attr("name", "totalRating");
        var spanId = $("<span />").text(item._id).attr("name", "_id");
        restaurantName.append(spanRestaurantName);
        totalRating.append(spanTotalRating);
        reporterName.append(spanReporterName);
        averagePrice.append(spanAveragePrice);
        dateVisit.append(spanDateVisit);
        restaurantType.append(spanRestaurantType);
        serviceRating.append(spanServiceRating);
        cleanlinessRating.append(spanCleanlinessRating);
        foodQualityRating.append(spanFoodQualityRating);
        note.append(spanNote);
        id.append(spanId);

        a.append(restaurantName);
        a.append(totalRating);
        a.append(reporterName);
        a.append(averagePrice);
        a.append(dateVisit);
        a.append(restaurantType);
        a.append(serviceRating);
        a.append(cleanlinessRating);
        a.append(foodQualityRating);
        a.append(note);
        a.append(id);
        var li = $("<li/>");
        li.attr("data-filtertext", item.name);
        li.append(a);
        lstProducts.append(li);
    }
    lstProducts.listview("refresh");
    lstProducts.on("click", "li", function(){
        currentProduct.id = $(this).find("[name='_id']").text();
        currentProduct.restaurantName = $(this).find("[name='restaurantName']").text();
        currentProduct.reporterName = $(this).find("[name='reporterName']").text();
        currentProduct.averagePrice = $(this).find("[name='averagePrice']").text();
        currentProduct.dateVisit = $(this).find("[name='dateVisit']").text();
        currentProduct.restaurantType = $(this).find("[name='restaurantType']").text();
        currentProduct.serviceRating = $(this).find("[name='serviceRating']").text();
        currentProduct.cleanlinessRating = $(this).find("[name='cleanlinessRating']").text();
        currentProduct.foodQualityRating = $(this).find("[name='foodQualityRating']").text();
        currentProduct.note = $(this).find("[name='note']").text();
        //Set event for the list item
        $("#popupUpdateDelete").popup("open");
    });
}

$(document).on("pagebeforeshow", "#loadpage", function(){
    productHandler.loadProducts(displayProducts);
});

function deleteProduct(){
    var r = confirm("Delete product\n"
        + "Restaurant Name: " + currentProduct.restaurantName
        + "\n" + "Reporter Name: " + currentProduct.reporterName
        + "\n" + "Average Price: " + currentProduct.averagePrice
        + "\n" + "Date Visit: " + currentProduct.dateVisit
        + "\n" + "Restaurant Type: " + currentProduct.restaurantType
        + "\n" + "Service Rating: " + currentProduct.serviceRating
        + "\n" + "Cleanliness Rating: " + currentProduct.cleanlinessRating
        + "\n" + "Food Quality Rating: " + currentProduct.foodQualityRating
        + "\n" + "Note: " + currentProduct.note);
    if(r==true){
        productHandler.deleteProduct(currentProduct.id);
        productHandler.loadProducts(displayProducts);
    }
    $("#popupUpdateDelete").popup("close");
}

$(document).on("pagebeforeshow", "#updatedialog", function(){
    $("#txtNewRestaurantName").val(currentProduct.restaurantName);
    $("#txtNewReporterName").val(currentProduct.reporterName);
    $("#txtNewAveragePrice").val(currentProduct.averagePrice);
    $("#txtNewDateVisit").val(currentProduct.dateVisit);
    $("#newRestaurantType").val(currentProduct.restaurantType);
    $("#newServiceRating").val(currentProduct.serviceRating);
    $("#newCleanlinessRating").val(currentProduct.cleanlinessRating);
    $("#newFoodQualityRating").val(currentProduct.foodQualityRating);
    $("#txtNewNote").val(currentProduct.note);
});

function updateProduct(){
    var newRestaurantName = $("#txtNewRestaurantName").val();
    var newReporterName = $("#txtNewReporterName").val();
    var newAveragePrice = $("#txtNewAveragePrice").val();
    var newDateVisit = $("#txtNewDateVisit").val();
    var newRestaurantType = $("#newRestaurantType").val();
    var newServiceRating = $("#newServiceRating").val();
    var newCleanlinessRating = $("#newCleanlinessRating").val();
    var newFoodQualityRating = $("#newFoodQualityRating").val();
    var newNote = $("#txtNewNote").val();

    productHandler.updateProduct(currentProduct.id,newRestaurantName, newReporterName, newAveragePrice, newDateVisit, newRestaurantType, newServiceRating, newCleanlinessRating, newFoodQualityRating, newNote);
    $("#updatedialog").dialog("close");
}