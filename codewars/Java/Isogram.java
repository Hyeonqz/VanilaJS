package com.ems.lunchbe;

import java.util.HashSet;
import java.util.Set;

public class Isogram {
    public static boolean isIsogram(String str) {

        if (str.equals("")) {
            return true;
        }

        str = str.toLowerCase();
        char[] arr = str.toCharArray();

        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < i; j++) {
                if (arr[i] == arr[j]) {
                    return false;
                }
            }
        }
        return true;
    }
}

class isogramEx1 {
    public static boolean isIsogram(String str) {
        return str.toLowerCase()
                .chars()
                .distinct()
                .count() == str.length();
    }
}

