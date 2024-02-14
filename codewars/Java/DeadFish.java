package codewar;


// i 는 값을 증가시킨다
// d 는 값을 감소시킨다.
// s 는 값을 제곱한다
// o 반환 배열에 값을 출력한다.

import java.util.ArrayList;
import java.util.List;

public class DeadFish {

    public static int[] parse(String data) {
        int value=0;
        List<Integer> output = new ArrayList<Integer>();

        for (int i = 0; i <data.length() ; i++) {
            char c = data.charAt(i);
            if( c == 'i') {
                value++;
            }
            if( c == 'd') {
                value--;
            }
            if( c =='s') {
                value*=value;
            }
            if( c == 'o') {
                output.add(value);
            }
        }

        int[] result = new int[output.size()];
        for (int i = 0; i <output.size() ; i++) {
            result[i] = output.get(i);
        }
        return result;
    }
}
