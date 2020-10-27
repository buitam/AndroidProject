package com.example.i_rate_test.ui.model;


import java.util.List;

public class Restaurant {
    private int image;
    private String name;
    private String averageRating;

    public Restaurant(int image, String name, String averageRating) {
        this.image = image;
        this.name = name;
        this.averageRating = averageRating;
    }

    public int getImage() {
        return image;
    }

    public void setImage(int image) {
        this.image = image;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAverageRating() {
        return averageRating;
    }

    public void setAverageRating(String averageRating) {
        this.averageRating = averageRating;
    }
}


class RatingModel {
    private String restaurantName;
    private String reporterName;
    private String averagePrice;
    private String dateVisit;
    private String restaurantType;
    private String serviceRating;
    private String cleanlinessRating;
    private String foodQualityRating;
    private String note;

    public RatingModel(String restaurantName, String reporterName, String averagePrice, String dateVisit, String restaurantType, String serviceRating, String cleanlinessRating, String foodQualityRating, String note) {
        this.restaurantName = restaurantName;
        this.reporterName = reporterName;
        this.averagePrice = averagePrice;
        this.dateVisit = dateVisit;
        this.restaurantType = restaurantType;
        this.serviceRating = serviceRating;
        this.cleanlinessRating = cleanlinessRating;
        this.foodQualityRating = foodQualityRating;
        this.note = note;
    }

    public String getRestaurantName() {
        return restaurantName;
    }

    public void setRestaurantName(String restaurantName) {
        this.restaurantName = restaurantName;
    }

    public String getReporterName() {
        return reporterName;
    }

    public void setReporterName(String reporterName) {
        this.reporterName = reporterName;
    }

    public String getAveragePrice() {
        return averagePrice;
    }

    public void setAveragePrice(String averagePrice) {
        this.averagePrice = averagePrice;
    }

    public String getDateVisit() {
        return dateVisit;
    }

    public void setDateVisit(String dateVisit) {
        this.dateVisit = dateVisit;
    }

    public String getRestaurantType() {
        return restaurantType;
    }

    public void setRestaurantType(String restaurantType) {
        this.restaurantType = restaurantType;
    }

    public String getServiceRating() {
        return serviceRating;
    }

    public void setServiceRating(String serviceRating) {
        this.serviceRating = serviceRating;
    }

    public String getCleanlinessRating() {
        return cleanlinessRating;
    }

    public void setCleanlinessRating(String cleanlinessRating) {
        this.cleanlinessRating = cleanlinessRating;
    }

    public String getFoodQualityRating() {
        return foodQualityRating;
    }

    public void setFoodQualityRating(String foodQualityRating) {
        this.foodQualityRating = foodQualityRating;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }
}
