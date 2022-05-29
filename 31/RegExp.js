// 31 RegExp
// 31.1 정규 표현식
// 사용자로부터 입력받은 휴대폰 전화번호
// const tel = '010-1234-567팔';
let tel = '010-1234-5678';

// 정규 표현식 리터럴로 휴대폰 전화번호 패턴을 정의한다.
let regExp = /^\d{3}-\d{4}-\d{4}$/;

// tel이 휴대폰 전화번호 패턴에 매칭하는지 테스트한다.
console.log(regExp.test(tel));

// 31.2 정규 표현식의 생성
// /regexp/i
let target = 'Is this all there is?'

// 패턴:is
// 플래그: i => 대소문자를 구별하지 않고 검색한다.

let regexp = /is/i;

// test 메서드는 target 문자열에 대해 정규 표현식 regexp의 패턴을 검색하여 매칭 결과를
// 불리언 값으로 반환한다.
console.log(regexp.test(target));

// pattern:정규 표현식의 패턴
// flags:정규 표현식의 플래그(g,i,m,u,y)
// d	부분 문자열 일치에 대해 인덱스 생성.	RegExp.prototype.hasIndices (en-US)
// g	전역 탐색.	                          RegExp.prototype.global (en-US)
// i	대소문자를 구분하지 않음.	           RegExp.prototype.ignoreCase (en-US)
// m	여러 줄에 걸쳐 탐색.	               RegExp.prototype.multiline (en-US)
// s	개행 문자가 .과 일치함.	               RegExp.prototype.dotAll (en-US)
// u	"unicode", 패턴을 유니코드 코드 포인트의 시퀀스로 간주함.	RegExp.prototype.unicode (en-US)
// y	"접착" 탐색, 대상 문자열의 현재 위치에서 탐색을 시작함. sticky (en-US)를 참고하세요.
regexp = new RegExp(/is/i);
// regexp = new RegExp(/is/,'i');
// regexp = new RegExp('is','i');

console.log(regexp.test(target));

// RegExp 생성자 함수를 사용하면 변수를 사용해 동적으로 RegExp 객체를 생성할 수 있다.
let count = (str,char) => (str.match(new RegExp(char,'gi')) ?? []).length;

console.log(count('Is this all there is?','is'));
console.log(count('Is this all there is?','xx'));

// 31.3 RegExp 메서드
// RegExp.prototype.exec,RegExp.prototype.test,String.prototype.match
// String.prototype.replace,String.prototype.search,String.prototype.split

// 31.3.1 RegExp.prototype.exec
// exec 메서드는 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를
// 배열로 반환한다.매칭 결과가 없는 경우 null을 반환한다.
//exec 메서드는 문자열 내의 모든 패턴을 검색하는 g플래그를 지정해도 첫 번째 매칭 결과만 
// 반환한다.

console.log('\n$$$ RegExp.prototype.exec $$$');
target = 'Is this all there is?';
regExp = /is/; 
console.log(regExp.exec(target));


const regex1 = RegExp('foo*', 'g');
const str1 = 'table football, foosball';
let array1;
while ((array1 = regex1.exec(str1)) !== null) {
    console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
    // expected output: "Found foo. Next starts at 9."
    // expected output: "Found foo. Next starts at 19."
  }
  
// 31.3.2 RegExp.prototype.test
// test 메서드는 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 
// 결과를 불리언 값으로 변환한다.
console.log('\n$$$ RegExp.prototype.test $$$');
target = 'Is this all there is?';
regExp = /is/; 
console.log(regExp.test(target));

// 31.3.3 String.prototype.match
// String 표준 빌트인 객체가 제공하는 match 메서드는 대상 문자열과 인수로 전달받은 정규
// 표현식과의 매칭 결과를 배열로 반환한다.

console.log('\n$$$ String.prototype.match $$$');

target = 'Is this all there is?';
regExp = /is/; 
console.log(target.match(regExp));

// exec 메서드는 문자열 내의 모든 패턴을 검색하는 g 플래그를 지정해도 첫 번째 미칭 결과만 반환한다.RegExp
// 하지만 String.prototype.match 메서드는 g 플래그가 지정되면 모든 매칭 결과를 배열로 반환한다.
target = 'Is this all there is?';
regExp = /is/g; 
console.log(target.match(regExp));


console.log('\n$$$ 플래그 $$$');
// 31.4 플래그
// 패턴과 함께 정규식을 구성하는 플래그는 정규 표현식의 검색 방식을 설정하기 위해 사용한다.
// 플래그는 총 6개 있다. 그중 중요한 3개의 플래그를 살펴보자.
// i ignore case 대소문자를 구별하지 않고 패턴을 검색한다.
// g Global 대상 문자열 내에서 패턴과 일치하는 문자열을 전역 검색한다.
// m Multi line 문자열의 행이 바뀌더라도 패턴 검색을 계속한다.

//플래그는 옵션이므로 선택적으로 사용가능
// 순서와 상관없이 하나 이상의 플래그를 동시에 설정할수도 있다.

target = 'Is this all there is?';
//target 문자열에서 is 문자열을 대소문자를 구별하여 한 번만 검색한다.
console.log(target.match(/is/));

console.log(target.match(/is/i));

console.log(target.match(/is/g));

console.log(target.match(/is/gi));


console.log('\n$$$ 패턴 $$$');
// 31.5 패턴
// 31.5.1 문자열 검색
target = 'Is this all there is?';

//is 문자열과 매치하는 패턴,플래그가 생략되었으므로 대소문자를 구별한다.
regExp = /is/;

//target과 정규 표현식이 매치하는지 테스트한다.
console.log(regExp.test(target));

//target과 정규 표현식이 매칭 결과를 구한다.
console.log(target.match(regExp));

//대소문자를 구별하지 않고 검색하려면 플래그 i를 사용한다.
regExp = /is/i;
console.log(target.match(regExp));

//검색 대상 문자열 내에서 패턴과 매치하는 모든 문자열을 전역 검색하려면 플래그 g를 사용한다.
regExp = /is/ig;
console.log(target.match(regExp));

// 31.5.2 임의의 문자열 검색
// .은 임의의 문자 한 개를 의미한다. 문자의 내용은 무엇이든 상관없다.
// .을 3개 연속하여 패턴을 생성했으므로 문자의 내용과 상관없이 3자리 문자열과 매치한다.

// 임의의 3자리 문자열을 대소문자를 구별하여 전역 검색한다.
regExp = /.../g;
console.log(target.match(regExp));

// 31.5.3 반복검색
// {m,n}은 앞선 패턴(다음 예제의 경우 A)이 최소 m번,최대 n번 반복되는 문자열을 의미한다.
// 콤마 뒤에 공백이 있으면 정상 동작하지 않으므로 주위하기 바란다.

target = 'A AA B BB Aa Bb AAA';

// 'A'가 최소 1번,최대2번 반복되는 문자열을 전역 검색한다.
regExp = /A{1,2}/g;
console.log(target.match(regExp));

// {n}은 앞선 패턴이 n번 반복되는 문자열을 의미한다.즉{n}은{n,n}과 같다.
regExp = /A{2}/g;
console.log(target.match(regExp));

// {n,}은 앞선 패턴이 최소 n번 이상 반복되는 문자열을 의미한다.
regExp = /A{2,}/g;
console.log(target.match(regExp));

// +는 앞선 패턴이 최소 한번 이상 반복되는 문자열을 의미한다.즉,+는{1,}과 같다. 다음 예제의 경우 A+는
// 앞선 패턴 'A'가 한번 이상 반복되는 문자열,즉 'A'만으로 이루어진 문자열 'A','AA','AAA', ...와 매치 한다.
regExp = /A+/g;
console.log(target.match(regExp));

// ?는 앞선 패턴이 최대 한 번(0번 포함) 이상 반복되는 문자열을 의미한다.
// 즉,?는 {0,1}과 같다. 다음 예제의 
target = 'color colour';
regExp = /colou?r/g;
console.log(target.match(regExp));


// 31.5.4 OR 검색
// |은 or의 의미를 갖는다. 다음예제의 /A|B/g;
target = 'A AA B BB Aa Bb';
// 'A' 또는 'B'를 전역 검색한다.
regExp = /A|B/g;
console.log(target.match(regExp));

// 분해되지 않은 단어 레벨로 검색하기 위해서는 +를 함께 사용한다.
regExp = /A+|B+/g;
console.log(target.match(regExp));

// 위 예제는 패턴을 or로 한 번 이상 반복하는 것인데 이를 간단히 표현하면 다음과 같다.
// []내의 문자는 or로 동작한다.그 뒤에 +를 사용함면 앞선 패턴을 한 번 이상 반복한다.
regExp = /[AB]+/g;
console.log(target.match(regExp));

// 범위를 지정하려면 []내에 -를 사용한다.다음 예제의 경우 대문자 알파벳을 검색한다.
regExp = /[A-Z]+/g;
target = 'A AA BB C CC ZZ Aa Bb';
console.log(target.match(regExp));

regExp = /[A-Z]+/g;
target = 'A AA AAA BB C CC ZZ Aa Bb';
console.log(target.match(regExp));

// 대소문자를 구별하지 않고 알파벳을 검색하는 방법은 다음과 같다
target = 'AA BB Aa Bb 12';
regExp = /[A-Za-z]+/g;
console.log(target.match(regExp));
// 'A' - 'Z' 또는 'a' - 'z'가 한 번 이상 반복되는 문자열을 전역
regExp = /[A-Z]+/gi;
console.log(target.match(regExp));

//숫자를 검색하는 방법은 다음과 같다.
target = 'AA BB 12,345';
regExp = /[0-9]+/g;
console.log(target.match(regExp));

regExp = /[0-9,]+/g;
console.log(target.match(regExp));

// 위 예제를 간단히 표현하면 다음과 같다.\d는 숫자를 의미한다.
// 즉, \d는 [0-9]와 같다.\D는 \d와 반대로 동작한다.
// 즉, \D는 숫자가 아닌 문자를 의미한다. 


// '0' - '9'가 아닌 문자(숫자가 아닌 문자)또는 ','가 한 번 이상 반복되는 문자열을 전역 검색한다.
regExp = /[\D,]+/g;
console.log(target.match(regExp));

// \w는 알파벳, 숫자 ,언더스코어를 의미한다.즉,\w는 [A=Za-z0-9_]와 같다.
// \W는 알파벳, 숫자 ,언더스코어가 아닌 문자를 의미한다.

target = 'AA BB 12,345 _$&&';
regExp = /[\w,]+/g;
console.log(target.match(regExp));


regExp = /[\W,]+/g;
console.log(target.match(regExp));

// 31.5.5 NOT 검색
// [...]내의 ^은 not의 의미를 갖는다. 예를 들어,[^0-9]는 숫자를 제외한 문자를 의미한다.
// 따라서[0-9]와 같은 의미의 \d와 반대로 동작하는 \D는 [^0-9]와 같고,[A-Za-z0-9_]와 같은
// 의미의 \w와 반대로 동작하는 \W는 [^A-Za-z0-9_]와 같다.

target = 'AA BB 12 Aa Bb';
//숫자를 제외한 문자열을 적연 검색한다.
regExp = /[^0-9]+/g;
console.log(target.match(regExp));

// 31.5.6 시작 위치로 검색
target = 'https://poiemaweb.com';
regExp = /^https/;
console.log(regExp.test(target));

// 31.5.7  마지막 위치로 검색
// $는 문자열의 마지막을 의미한다.
regExp = /com$/;
console.log(regExp.test(target));

// 31.6  자주 사용하는 정규표현식
// 31.6.1 특정 단어로 시작하는지 검사
//다음 예제는 검색 대상 문자열이 'http://' 또는 'https://'로 시작하는지 검사한다.
// [...] 바깥의 ^은 문자열의 시작을 의미하고,?은 앞선 패턴(다음 예제의 경우 's')이 최대 한번(0번 포함)
// 이상 반복되는지를 의미한다. 다시말해 검색대상 문자열에 앞선 패턴('s')이 있어도 없어도 매치된다.
console.log(/^https?:\/\//.test(target));

// 31.6.2 특정 단어로 끝나는지 검사
// 다음 예제는 검색 대상이 문자열이 'html'로 끝나는지 검사한다. '$'는 문자열의 마지막을 의미한다.
let filename = 'index.html';
console.log(/html$/.test(filename));


// 31.6.3 숫자로만 이루어진 문자열인지 검사
// 다음 예제는 검색 대상 문자열이 숫자로만 이루어진 문자열인지 검사한다.
// [...] 바깥의 ^은 문자열의 시작을,$는 문자열의 마지막을 의미한다.즉,처음과
// 끝이 숫자이고 최소 한 번 이상 반복되는 문자열과 매치한다.
target = '12345';
console.log(/^\d+$/.test(target));

// 31.6.4 하나 이상의 공백으로 시작하는지 검사
// 다음 예제는 검색 대상 문자열이 하나 이상의 공백으로 시작하는지 검사한다.
// \s는 여러가지 공백 문자(스페이스,탭 등)를 의미한다.즉, \s는 [\t\r\n\v\f]와 같은 의미다.
target = ' Hi!';
console.log(/^[\s]+/.test(target));

// 31.6.5 아이디로 사용 가능한지 검사
// 다음 예제는 검색 대상 문자열이 알파벳 대소문자 또는 숫자로 시작하고 끝나며 4~10자리인지 검사한다.
// {4,10}은 앞선 패턴(알파벳 대소문자 또는 숫자)이 최소4번,최대10번 반복되는 문자열을 의미한다.
// 즉,4~10자리로 이루어진 알파벳 대소문자 또는 숫자를 의미한다.
let id = 'abc123';
console.log(/^[A-Za-z0-9]{4,10}$/.test(id));

// 31.6.7 핸드폰 번호 형식에 맞는지 검사
// 다음 예제는 검색 대상 문자열이 핸드폰 번호 형식에 맞는지 검사한다.
let cellphone = '010-1234-5678';
console.log(/^\d{3}-\d{3,4}-\d{4}$/.test(cellphone));

let float = '1234.3';
console.log(/^\d{0,5}.\d{0,3}$/.test(float));

// 31.6.8 특수 문자 포함 여부 검사
// 다음 예제는 검색 대상 문자열에 특수 문자가 포함되어 있는지 검사한다.
// 특수 문자는 A-Za-z0-9 이외의 문자다.
target = 'abc#123';
console.log(target.replace(/[^A-Za-z0-9]/gi,''));