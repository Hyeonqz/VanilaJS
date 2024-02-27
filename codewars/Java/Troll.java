public class Troll {

    //vowel = 모음 = a e i o u
    // 즉 내가 결과값을 입력하면 그 String에서 모음을 다 없앤 값을 반환한다.
    public static String disemvowel(String str) {
        char[] ch = str.toCharArray();

        char[] vowel = new char[10];
        vowel[0] = 'a';
        vowel[1] = 'e';
        vowel[2] = 'i';
        vowel[3] = 'o';
        vowel[4] = 'u';
        vowel[5] = 'A';
        vowel[6] = 'E';
        vowel[7] = 'I';
        vowel[8] = 'O';
        vowel[9] = 'U';

        StringBuilder sb = new StringBuilder();

        for (char c : ch) {
            boolean isVowel = false;
            for (char v : vowel) {
                if (c == v) {
                    isVowel = true;
                    break;
                }
            }

            if (!isVowel) {
                sb.append(c);
            }
        }
        return String.valueOf(sb);

    }

    public static void main(String[] args) {
        System.out.println(Troll.disemvowel("This website is for losers LOL!"));
    }
}
