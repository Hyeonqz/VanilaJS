function solution(str, ending) {
  if (ending.length > str.length) {
    return false;
  }
  let subs = str.substring(str.length - ending.length);
  return subs === ending;
}


function Ex2(str, ending) {
  return str.endsWith(ending);
}

const Ex3 = (s,t) => {
  return s.endsWith(t);
}