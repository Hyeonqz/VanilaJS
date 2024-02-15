package codewar;

// 공백을 사용하여 함수가 대소문자를 구별하도록 하는 것
// 순회를 하면서 대문자를 찾으면 뛰어쓰기를 시킨다.
public class Solution {
    public static String camelCase(String input) {

        if(input==null || input.isEmpty()) {
            return input;
        }

        StringBuilder result = new StringBuilder();
        for (int i = 0; i < input.length(); i++) {
            char c = input.charAt(i);

            if(Character.isUpperCase(c)) {
                result.append(" "+c);
            } else {
                result.append(c);
            }
        }
        return result.toString();
    }

    public static void main(String[] args) {
        System.out.println(camelCase("camelCasing"));
    }
}
