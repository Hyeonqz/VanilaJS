
public class Max {
    public static int sequence(int[] arr) {
        if(arr==null || arr.length==0) {
            return 0;
        }

        int maxSum = 0;
        int currentSum = 0;

        for (int i = 0; i < arr.length; i++) {
            // 현재 요소를 포함하는 경우와 포함하지 않는 경우 중 최대값 선택
            currentSum = Math.max(0, currentSum + arr[i]);

            maxSum = Math.max(maxSum, currentSum);
        }

        return maxSum;
    }
}
