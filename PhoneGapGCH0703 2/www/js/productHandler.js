var productHandler={
addProduct: function(restaurantName, reporterName, averagePrice, dateVisit, restaurantType, serviceRating,cleanlinessRating, foodQualityRating, note){
    databaseHandler.db.transaction(
        function(tx){
            tx.executeSql(
                "insert into rating4(restaurantName, reporterName, averagePrice, dateVisit, restaurantType, serviceRating,cleanlinessRating, foodQualityRating, note) values(?, ?, ?, ?, ?, ?, ?, ?, ?)",
                [restaurantName, reporterName, averagePrice, dateVisit, restaurantType, serviceRating,cleanlinessRating, foodQualityRating, note],
                function(tx, results){},
                function(tx, error){
                    console.log("add product error: " + error.message);
                }
            );
        },
        function(error){},
        function(){}
    );
},
loadProducts: function(displayProducts){
    databaseHandler.db.readTransaction(
        function(tx){
            tx.executeSql(
                "select * from rating4",
                [],
                function(tx, results){
                    //Do the display
                    displayProducts(results);
                },
                function(tx, error){//TODO: Alert the message to user
                    console.log("Error while selecting the products" + error.message);
                }
            );
        }
    );
},
deleteProduct:function(_id){
    databaseHandler.db.transaction(
        function(tx){
            tx.executeSql(
                "delete from rating4 where _id = ?",
                [_id],
                function(tx, results){},
                function(tx, error){
                    console.log("Error happen when deleting: " + error.message);
                }
            );
        }
    );
},
updateProduct: function(_id, newRestaurantName, newReporterName, newAveragePrice, newDateVisit, newRestaurantType, newServiceRating,newCleanlinessRating, newFoodQualityRating, newNote){
    databaseHandler.db.transaction(
        function(tx){
            tx.executeSql(
                "update rating4 set restaurantName=?, reporterName=?, averagePrice=?, dateVisit=?, restaurantType=?, serviceRating=?, cleanlinessRating=?, foodQualityRating=?, note=? where _id = ?",
                [newRestaurantName, newReporterName, newAveragePrice, newDateVisit, newRestaurantType, newServiceRating,newCleanlinessRating, newFoodQualityRating, newNote, _id],
                function(tx, result){},
                function(tx, error){//TODO: alert/display this message to user
                    console.log("Error updating product" + error.message);
                }
            );
        }
    );
}
};