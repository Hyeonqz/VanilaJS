package codewar;

//자연수1-10까지 있다.


public class Multiple {
    public int solution(int number) {
        int sum = 0;

        for ( int i = 1; i < number; i++) {
            if ( (i % 3 == 0) || (i % 5 == 0) ) {
                sum += i;
            }
        }

        return sum;
    }
}


// 10보다 작은 3이나 5의 배수인 자연수를 모두 나열하면 3 5 6 9 이다. -> 이 배수의 합은 23이다.
// 숫자 아래의 3 또는 5의 모든 배수의 합을 반환하도록 해를 완성하세요 .
// 숫자가 3 과 5 의 배수인 경우 한 번만 계산하세요 .

/*
//Ex2
return IntStream.range(0,Number
        .filter(n -> n % 3 == 0 || n % 5 == 0))
        .sum();*/
