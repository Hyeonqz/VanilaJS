### 자바스크립트 엔진 동작 방법
1) 브라우저 내(내장엔진)이 스크립트를 읽는다 (파싱)
2) 읽어들인 스크립트를 기계어로 전환한다(컴파일)
3) 기계어로 전환된 코드가 실행외 된다. 기계어로 전환되었기 때문에 실행속도가 빠르다. 

### 자바스크립트 장점
- html/css와 통합 가능
- 간단한 일은 간단하게 처리할 수 있음
- 모든 주요 브라우저에서 지원하고, 기본 언어로 사용됨

#### 자바스크립트 팁
> src 속성이 있으면 태그 내부의 코드는 무시된다
``` javascript
<script src="file.js">
  alert(1); // src 속성이 사용되었으므로 이 코드는 무시됩니다.
</script>
```  

### user strict
엄격 모드<br>
이 지시자가 스크립트 최상단에 오면 스크립트 전체가 "모던한" 방식으로 동작한다<br>


### 변수 
- 변화하지 않는 변수를 선언할 땐 const를 사용한다.
- 상수는 대문자로 선언하여 구분을 잘할 수 있게 한다. 

### 자료형
자료의 타입은 있지만 변수에 저장되는 값으 타입은 언제든지 바꿀수 있는 언어를 '동적타입' 언어<br>

숫자형
``` javascript
let n = 12;
n = 12.345;
```  

typeof 연산자
``` javascript
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)
```  


alert<br>
메시지를 보여줍니다.<br>
prompt<br>
사용자에게 텍스트를 입력하라는 메시지를 띄워줌과 동시에, 입력 필드를 함께 제공합니다. 확인을 누르면 prompt 함수는 사용자가 입력한 문자열을 반환하고, 취소 또는 Esc를 누르면 null을 반환합니다.<br>
confirm<br>
사용자가 확인 또는 취소 버튼을 누를 때까지 메시지가 창에 보여집니다. 사용자가 확인 버튼을 누르면 true를, 취소 버튼이나 Esc를 누르면 false를 반환합니다.<br>