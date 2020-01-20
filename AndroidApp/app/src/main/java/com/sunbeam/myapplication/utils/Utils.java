package com.sunbeam.myapplication.utils;

public class Utils {
    public static String createUrl(String route) {
        return Constants.httpUrl + "/" + route;
    }
}
