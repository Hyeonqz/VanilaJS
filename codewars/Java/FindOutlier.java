public class FindOutlier {

    // odd 홀수 even 짝수
    static int find (int[] integers) {
        int even = 0;
        int odd = 0;
        int result = 0;

        for (int i = 0; i <integers.length ; i++) {
            if(integers[i] % 2 ==0) {
                even++;
            } else {
                odd++;
            }
        }

        if (even == 1) {
            for (int i = 0; i <integers.length ; i++) {
                if(integers[i] % 2 ==0) {
                    result = integers[i];
                    break;
                }
            }
        }

        if (odd==1) {
            for (int i = 0; i <integers.length ; i++) {
                if(integers[i] %2 != 0) {
                    result = integers[i];
                    break;
                }
            }
        }

        return result;
    }

    public static void main(String[] args) {
        System.out.println(FindOutlier.find(new int[] {2,4,0,100,4,11,2602,36}));
        System.out.println(FindOutlier.find(new int[] {Integer.MAX_VALUE,0,1}));
        System.out.println(FindOutlier.find(new int[] {206847684, 1056521, 7, 17, 1901, 21104421, 7, 1, 35521, 1, 7781}));
    }

}
