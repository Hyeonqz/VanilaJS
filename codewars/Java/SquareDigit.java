package codewar;

public class SquareDigit {
    public int squareDigits(int n) { //9119

        String inputNum = n + "";
        String[] digits = inputNum.split("");
        String output = "";

        for(String str : digits) {
            int num = Integer.parseInt(str);
            output += num*num;
        }

        return Integer.parseInt(output);
    }
}

//


// 자연수 n이 주어진다.
// 각 자연수를 2제곱으로해서 나열해야한다.