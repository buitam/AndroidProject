var databaseHandler = {
db: null,
createDatabase: function(){
    this.db = window.openDatabase(
        "products.db",
        "1.0",
        "rating database",
        1000000);
    this.db.transaction(
        function(tx){
            //Run sql here using tx
            tx.executeSql(
                "create table if not exists rating4(_id integer primary key, restaurantName text, reporterName text, averagePrice text, dateVisit text, restaurantType text, serviceRating integer, cleanlinessRating integer, foodQualityRating integer, note text)",
                [],
                function(tx, results){},
                function(tx, error){
                    console.log("Error while creating the table: " + error.message);
                }
            );
        },
        function(error){
            console.log("Transaction error: " + error.message);
        },
        function(){
            console.log("Create DB transaction completed successfully");
        }
    );

}
}