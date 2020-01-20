package com.sunbeam.myapplication.model;

public class Product {
   int product_id;
   String product_name;
   int shipment_id;
   float product_price;
   String product_description;
   int category_id;
   int subcategory_id;
   String thumbnail;
public Product()
{

}

    public Product(int product_id, String product_name, int shipment_id, float product_price, String product_description, int category_id, int subcategory_id, String thumbnail) {
        this.product_id = product_id;
        this.product_name = product_name;
        this.shipment_id = shipment_id;
        this.product_price = product_price;
        this.product_description = product_description;
        this.category_id = category_id;
        this.subcategory_id = subcategory_id;
        this.thumbnail = thumbnail;
    }


    public int getProduct_id() {
        return product_id;
    }

    public void setProduct_id(int product_id) {
        this.product_id = product_id;
    }

    public String getProduct_name() {
        return product_name;
    }

    public void setProduct_name(String product_name) {
        this.product_name = product_name;
    }

    public int getShipment_id() {
        return shipment_id;
    }

    public void setShipment_id(int shipment_id) {
        this.shipment_id = shipment_id;
    }

    public float getProduct_price() {
        return product_price;
    }

    public void setProduct_price(float product_price) {
        this.product_price = product_price;
    }

    public String getProduct_description() {
        return product_description;
    }

    public void setProduct_description(String product_description) {
        this.product_description = product_description; }

    public int getCategory_id() {
        return category_id;
    }

    public void setCategory_id(int category_id) {
        this.category_id = category_id;
    }

    public int getSubcategory_id() {
        return subcategory_id;
    }

    public void setSubcategory_id(int subcategory_id) {
        this.subcategory_id = subcategory_id;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }
}
