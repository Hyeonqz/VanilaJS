package com.ems.lunchbe;

public class HappyYear {

  static public int nextHappyYear(int year) {
    while (true) {
      year++;
      int thousand = year / 1000;
      int hundred = (year % 1000) / 100;
      int ten = (year % 1000 % 100) / 10;
      int single = year % 1000 % 100 % 10;
      if (thousand != hundred && thousand != ten && thousand != single &&
          hundred != ten && hundred != single && ten != single) {
        break;
      }
    }
    return year;
  }

}

// HappyYear는 고유한 숫자만 있는 연도이다.
// 입력받은 연도 다음으로 고유한 숫자가 있는 연도를 구해야함
