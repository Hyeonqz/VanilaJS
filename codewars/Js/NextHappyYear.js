function nextHappyYear(year) {

  while(true) {
    year++;
    let thousand = Math.floor(year / 1000);
    let hundred = Math.floor((year % 1000) / 100);
    let ten = Math.floor((year % 100 ) / 10);
    let one = year % 10;

    if (thousand != hundred && thousand != ten && thousand != one &&
        hundred != ten && hundred != one && ten != one) {
      break;
    }
  }
  return year;

}