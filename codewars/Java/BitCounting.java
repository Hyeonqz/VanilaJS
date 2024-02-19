public class BitCounting {
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
