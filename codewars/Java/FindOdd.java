package codewar;

//홀수 찾기
//배열에서 홀수 번 나타나는 정수
//배열에서 홀수 번 등장하는 정수를 찾아 반환 해야함.


import java.util.ArrayList;
import java.util.List;

public class FindOdd {

    public static int findIt(int[] arr) {
        List<Integer> list = new ArrayList<>();

        for (int i = 0; i <arr.length ; i++) {
            int num = arr[i];
            if(list.contains(num)) {
                list.remove(Integer.valueOf(num));
            } else {
                list.add(num);
            }
        }
        return list.get(0);
    }
}
