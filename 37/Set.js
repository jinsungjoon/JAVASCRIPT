//37.1.1 Set 객체의 생성
//Set 객체의 생성
//Set 생성자 함수에 인수를 전달하지 않으면 빈 Set 객체가 생성된다.
const set = new Set();
console.log(set);

//Set 생성자 함수는 이터러블을 인수로 전달받아 Set 객체를 생성한다.
//이때 이터러블의 중복된 값은 Set 객체에 요소로 저장되지 않는다.

const set1 = new Set([1,2,3,3]);
console.log(set1);

const set2 = new Set('hello');
console.log(set2);

//중복을 허용하지 않는 Set 객체의 특성을 활용하여 배열에서 중복된 요소를 제거할 수 있다.
const uniq = array => array.filter((v,i,self) => self.indexOf(v)===i);
console.log(uniq([2,1,2,3,4,3,4]));

//Set을 사용한 배열의 중복 요소 제거
const uniq2 = array => [...new Set(array)];
console.log(uniq([2,1,2,3,4,3,4]));

//37.1.2 요소 개수 확인
//Set 객체의 요소 개수를 확인할 때는 Set.prototype.size 프로퍼티를 사용한다.

const {size} = new Set([1,2,3,3]);
console.log(size);


const size2 = new Set([1,2,3,3]);
console.log(size2.size);

//size 프로퍼티는 setter함수 없이 getter 함수만 존재하는 접근자 프로퍼티다.따라서
//size 프로퍼티에 숫자를 할당히여 Set 객체의 요소 개수를 변경할 수 없다.

const set3 = new Set([1,2,3]);

console.log(Object.getOwnPropertyDescriptor(Set.prototype,'size'));

set3.size = 10;//무시된다.
console.log(set3.size);

//37.1.3요소추가
//Set 객체에 요소를 추가할 때는 Set.prototype.add 메서드를 사용한다.

const set4 = new Set();
console.log(set4);

set4.add(1);
console.log(set4);

//add 메서드는 새로운 요소가 추가된 Set 객체를 반환한다.
//따라서 add 메서드를 호출한 후에 add 메서드를 연속적으로 호출 할수 있다.
 
const set5 = new Set();
set5.add(1).add(2);
console.log(set5);

//일치 비교 연산자 === 을 사용하면 NaN과 NaN을 다르다고 평가한다.
//하지만 Set 객체는 같다고 평가하여 중복 추가를 허용하지 않는다.
//+0과 -0은 일치 비교 연산자 ===와 마찬가지로 같다고 평가하여 중복 추가를 허용하지 않는다.

const set6 = new Set();

console.log(NaN===NaN);
console.log(0 === -0);
set6.add(NaN).add(NaN);

console.log(set6);

set6.add(0).add(-0);
console.log(set6);

//Set 객체는 객체나 배열과 같이 자바스크립트의 모든 값을 요소로 저장할 수 있다.
const set7 = new Set();
set7.add(1).add('a').add(true).add(undefined).add(null)
.add({}).add([]).add(()=>{});
console.log(set7);

//37.1.4 요소 존재 여부 확인
//Set 객체에 특정 요소가 존재하는지 확인하려면 Set.prototype.has 메서드를 사용한다.
//has 메서드는 특정 요소의 존재 여부를 나타내는 불리언 값을 반환한다.