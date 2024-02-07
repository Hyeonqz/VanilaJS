package codewar;

/*
* 1) 작은 도시 인구는 p0=1000 이다
* 2) 인구는 규칙적으로 2%씩 매년 증가하고
* 3) 매년 인구는 50명 이상 거주해야한다.
* 4) 이 도시에 1200명이 살려면 몇년 걸릴까?
* */
//p=매년 증가하는 인구수
//aug= 현재 인구수1000
//percent = 1년에 증가하는 인구 퍼센트
//p0 = 1000        //p = 5000
public class Arge {
    public static int nbYear(int p0, double percent, int aug, int p) {

        int year = 0; //총 몇년 걸리는지

        while(p0 <p) { //p = 원하는 인구수
            p0 += p0*percent/100 + aug;
            year++;
        }
        return year;
        }
    }


