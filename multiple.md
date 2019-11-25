> 아래의 객관식 문제에서 node/js dev console 이용하여 실행시킨 후 풀지 마세요. 직접 머리로, 손으로 계산하여 답 하셔야 합니다.

ASNWER SHEET [LINK](https://docs.google.com/forms/d/e/1FAIpQLSdk43f-mL1YCJuQ-Ghrr-nI1iaAuzQX3aATd0qq_JYBc0JvLg/viewform?usp=sf_link)

# 01

what is the value of x after running the code below?
NOTE! we are asking for x not the reuslt (문제는 x의 값을 묻고 있습니다)

```js
var x = 30;

function get(x) {
  return x;
}
function set(value) {
  x = value;
}

set(10);
var result = get(20);
```

# 02

what is the value of result after running the code below?

```js
var x = 10;

function outer() {
  var x = 20;
  function inner() {
    x = x + 10;
    return x;
  }
  inner();
}

outer();
var result = x;
```

# 03

what is the value of total after running the code below

```js
var add = function(x) {
  var sum = function(y) {
    return x + y;
  };
  return sum;
};

var foo = add(1);
foo(3);
var total = foo(6);
```

# 04

The keyword or the property that you use to refer to an object through which they were invoked is \_\_\_\_?
함수의 현재 실행 문맥이기도 한 이 것은?

1. from
2. to
3. this
4. object

# 05

what is the result after running the code below

```js
var x = 10;
var strangeAdd = function(y) {
  var x = 20;
  return this.x + y;
};

result = strangeAdd(10);
```

# 06

what will be printed in console after running the code below

```js
function foo() {
  console.log(this);
}

foo();
```

# 07

what will be printed in console after running the code below

```js
var obj = {
  foo: function() {
    console.log(this);
  }
};

obj.foo();
```

# 08

what will be printed in console after running the code below

```js
var obj = {
  foo: function() {
    console.log(this);
  }
};

var obj2 = {
  foo: obj.foo
};

obj.foo.call(obj2);
```

# 09

what is the result after running the code below

```js
var obj1 = { x: 10 };
var obj2 = Object.create(obj1);

var obj3 = Object.create(obj2);

obj2.x = 20;

var result = obj3.x + 10;
```

# 10

What is the Big O time complexity for searching for a value in an unsorted array?

1. O(1) Constant
2. O(log n) Logarithmatic
3. O(n) Linear
4. O(n^2)

# 11

What is the Big O time complexity for retrieving the value at a specific index in a linked list?

1. O(1) Constant
2. O(log n) Logarithmatic
3. O(n) Linear
4. O(n^2)

# 12

What is the worst case Big O time complexity of inserting a value into a binary search tree?

1. O(1) Constant
2. O(log n) Logarithmatic
3. O(n) Linear
4. O(n^2)

# 13

What is the best case time complexity of looking up the value of a key in a hash table?

1. O(1) Constant
2. O(log n) Logarithmatic
3. O(n) Linear
4. O(n^2)

# 14

after running the code below what message will be eventually be alerted and after how long?

```js
var name = 'Window';
var alice = {
  name: 'Alice',
  sayHi: function() {
    alert(this.name + ' says hi');
  }
};

var bob = { name: 'Bob' };

setTimeout(alice.sayHi.bind(alice), 1000);
```

# 15

after running the code below what message will be eventually be alerted and after how long?

```js
var name = 'Window';
var alice = {
  name: 'Alice',
  sayHi: function() {
    alert(this.name + ' says hi');
  }
};
var bob = { name: 'Bob' };
setTimeout(alice.sayHi.call(bob), 1000);
```

# 16

after running the code below what message will be eventually be alerted and after how long?

```js
var name = 'Window';
var alice = {
  name: 'Alice',
  sayHi: function() {
    alert(this.name + ' says hi');
  }
};
var bob = { name: 'Bob' };

alice.sayHi.bind(bob);

setTimeout(alice.sayHi(), 1000);
```

# 17

After the following code runs and all setTimeout callbacks run, what will be the value of result?

```js
function foo() {
  var data = 10;

  bar(function(players) {
    data = players;
  });

  return data;
}

function bar(callback) {
  setTimeout(callback, 0);
}

var result = foo();
```

# 18

After the following code runs, what will be the value of x.foo?

```js
var x = { foo: 3 };
var y = x;
y = 2;
```

# 19

After the following code runs, what will be the value of player.score?

```js
var player = { score: 3 };
function doStuff(obj) {
  obj.score = 2;
  obj = undefined;
}
doStuff(player);
```
