package com.ems.lunchbe;

import java.util.HashSet;
import java.util.Set;

public class CountingDuplicates {

  public static int duplicateCount(String text) {

    Set<Character> set = new HashSet<Character>();
    Set<Character> duplicate = new HashSet<Character>();

    text = text.toLowerCase();

    for (char c : text.toCharArray()) { // a a b b c

      if (set.contains(c)) {
        duplicate.add(c);
      } else {
        set.add(c);
      }
    }

    return duplicate.size();
  }
}
// 대소문자를 구별하지 않는다.
// 알파벳과 숫자로 이루어진 문자열에서 2번 이상씩 나온 글자의 개수 찾기
// abcde = 0
// aabbcde -> 2
// aaBbcde -> 2