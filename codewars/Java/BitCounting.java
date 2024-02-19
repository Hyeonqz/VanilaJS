public class BitCounting {
    public static void main(String[] args) {
        System.out.println(countBits(1234));
        System.out.println(countBits(4));
        System.out.println(countBits(7));
        System.out.println(countBits(9));
        System.out.println(countBits(10));
    }

    // 정수를 입력받고, 해당 숫자의
    // 주어진 숫자를, 이진수로 변환한다.
    // 이진수에서 1의 갯수를 구한다.

    public static int countBits(int n) {
        int count = 0;
        String value = Integer.toBinaryString(n);

        for (int i = 0; i <value.length(); i++) {
            char value1 = value.charAt(i);
            if(value1 == '1') {
                count++;
            }
        }
        return count;
    }
}
