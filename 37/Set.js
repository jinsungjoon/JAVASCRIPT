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

const set8 = new Set([1,2,3]);
console.log(set8.has(2));
console.log(set8.has(4));

//37.1.5 요소식제
//Set 객체의 특정 요소를 삭제하려면 Set.prototype.delete 메서드를 사용한다.
//delete 메서드는 삭제 성공 여부를 나타내는 불리언 값을 변환한다.
//delete 메서드는 인덱스가 아나리 삭제하려는 요소값을 인수로 전달해야 한다.
//Set 객체는 순서에 의미가 없다.다시 말해,배열과 같이 인덱스를 갖지 않는다.

const set9 = new Set([1,2,3]);
//요소 2를 삭제한다.
set9.delete(2);
console.log(set9);
//요소 1을 삭제한다.

set9.delete(1);
console.log(set9);
//만약 존재하지 않는 Set 객체의 요소를 삭제하려 하면 에러 없이 무시된다.
set9.delete(0);
console.log(set9);
//delete 메서드는 삭제 성공 여부를 나타내는 불리언 값을 반환한다.
//따라서 Set.prototype.add 메서드와 달리 연속적으로 호출 할수 없다.

const set10 = new Set([1,2,3]);

//delete는 불리언 값을 반환한다.
// set10.delete(1).delete(2);

//37.1.6 요소 일괄 삭제
//Set 객체의 모든 요소를 일괄 삭제하려면 Set.prototype.clear 메서드를 사용한다.
//clear 메서드는 언제나 undefined를 반환하다.
console.log(set10.clear());
console.log(set10);

// 37.1.7 요소순회
//Set 객체의 요소를 순회하려면 Set.prototype.forEach 메서드를 사용한다.
//Set.prototype.forEach 메서드는 Array.prototype.forEach 메서드와 유사하게 콜백 함수와
//forEach 메서드의 콜백 함수 내부에서 this롤 사용될 객체(옵션)를 인수로 전달한다
//첫번째 인수 : 현재 순회중인 요소값
//두번쨰 인수 : 현재 순회중인 요소값
//세번재 인수 : 현재 순회중인 Set객체자체
const set11 = new Set([1,2,3]);
set11.forEach((v,v2,data)=> console.log(v,v2,data));

//Set 객체는 이터러블이다.따라서 for...of문으로 순회할 수 있으며,스프레드 문법과
//배열 디스트럭처링의 대상이 될 수도 있다.

//Set 객체는 Set.prototype의 Symbol.iterator 메서드를 상속받는 이터러블이다.
const set12 = new Set([1,2,3]);
console.log(Symbol.iterator in set12);

//이터러블인 Set 객체는 for...of 문으로 순회할 수 있다.
for(const value of set12){
    console.log(value);
}

//이터러블인 Set 객체는 스프레드 문법의 대상이 될 수 있다.
console.log([...set12]);

//이터러블인 Set 객체는 배열 디스트럭처링 할당의 대상이 될 수 있다.
const [a,...rest] = set12;
console.log(a,rest);

//Set 객체는 요소의 순서에 의미를 갖지 않지만 Set 객체를 순회하는 순서는 요소가 추가된
//순서를 따른다. 이는 ECMAScript 사양에 규정되어 있지는 않지만 다른 이터러블의 순회와
//호환성을 유지하기 위함이다.

//37.1.8 집합연산
//Set 객체는 수학적 집합을 구현하기 위한 자료구조다.
//따라서 Set 객체를 통해 교집합,합집합,차집합 등을 구현할수 있다.

//교집합
Set.prototype.intersection = function(set){
    const result = new Set();
    for(const value of set){
        //2개의 Set 요소가 공통되는 요소이면 교집합의 대상이 된다.
        if(this.has(value)) result.add(value);
    }
    return result;
}

const setA = new Set([1,2,3,4]);
const setB = new Set([2,4]);
console.log(setA.intersection(setB));
console.log(setB.intersection(setA));


Set.prototype.intersection = function(set){
    return new Set([...this].filter(v => set.has(v)));
};

console.log(setA.intersection(setB));
console.log(setB.intersection(setA));

//합집합
Set.prototype.union = function(set){
    //this(Set 객체)를 복사
    const result = new Set(this);
    for(const value of set){
        result.add(value);
    }
    return result;
}


console.log(setA.union(setB));
console.log(setB.union(setA));

Set.prototype.union = function(set){
    return new Set([...this,...set]);
};


console.log(setA.union(setB));
console.log(setB.union(setA));

//차집합
//차집합 A-B는 집합 A에는 존재하지만 집합 B에는 존재하지 않는 요소로 구성된다.
Set.prototype.difference = function(set){
    //this(Set객체)를 복사
    const result = new Set(this);
    for(const value of set){
        result.delete(value);
    }
    return result;
}


//setA에 대한 setB의 차집합
console.log(setA.difference(setB));

//setB에 대한 setA의 차집합
console.log(setB.difference(setA));

Set.prototype.difference = function(set){
    return new Set([...this].filter(v => !set.has(v)));
}


//setA에 대한 setB의 차집합
console.log(setA.difference(setB));

//setB에 대한 setA의 차집합
console.log(setB.difference(setA));


//부분 집합과 상위 집합
//집합 A가 집합  B에 포함되는 경우 집합 A는 집합 B의 부분 집합이며,집합 B는 집합 A의 상위
// 집합이다
Set.prototype.isSuperset = function(subset){
    for(const value of subset){
        if(!this.has(value))return false;
    }
    return true;
}

console.log(setA.isSuperset(setB));
console.log(setB.isSuperset(setA));

Set.prototype.isSuperset = function(subset){
    const supersetArr = [...this];
    return [...subset].every(v=>supersetArr.includes(v));
}


console.log(setA.isSuperset(setB));
console.log(setB.isSuperset(setA));