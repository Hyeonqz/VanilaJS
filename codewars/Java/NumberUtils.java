package Java;

public class NumberUtils {
  public static boolean isNarcissistic(int number) {

    int length = (int)(Math.log10(number)+1);
    char[] digits = Integer.toString(number).toCharArray();

    int sum = 0;

    for (int i = 0; i <length ; i++) {
      sum += Math.pow(Integer.parseInt(Character.toString(digits[i])), length);
    }
    return sum == number ? true : false;
  }

}

// 153 이 주어지면 이 number에 자릿수를 구한다
// 그 자릿수 만큼 제곱을 한다 한자리씩
// 주어진 숫자랑, 제곱해서 자릿수를 곱한 숫자가 같으면 true, 아니면 false