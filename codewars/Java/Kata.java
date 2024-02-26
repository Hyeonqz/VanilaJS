package jpabook;

import java.util.Arrays;

public class Kata {
    public static int multiply(int number) {

        int abs = Math.abs(number);
        int digits = String.valueOf(abs).length();
        int Five = (int)Math.pow(5,digits);
        return number * Five;

    }
}
