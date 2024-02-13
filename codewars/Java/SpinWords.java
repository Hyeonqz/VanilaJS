package codewar;

public class SpinWords {

    public String spinWords(String str) {
        String[] words = str.split(" ");
        StringBuilder sb = new StringBuilder();

        for (int i = 0; i <words.length ; i++) {
            if(words[i].length() >= 5) {
                sb.append(reverseString(words[i])).append(" ");
            } else {
                sb.append(words[i]).append(" ");
            }
        }
        return sb.toString().trim();
    }

    private String reverseString(String str) {
        return new StringBuilder(str).reverse().toString();
    }

    public static void main(String[] args) {
        SpinWords spinWords = new SpinWords();
        System.out.println(spinWords.spinWords("hello world"));
    }
}

//5개 이상의 문자열인 경우 반대로 전환해서 출력을 한다.