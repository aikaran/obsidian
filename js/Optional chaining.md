https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining

 [nullish](https://developer.mozilla.org/ko/docs/Glossary/Nullish) ([`null`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/null) 또는 [`undefined`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/undefined))한 객체에 안전하고 간결하게 접근이 가능하다.
```js
const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined
```

할당할 때는 사용할 수 없다.
```js
let object = {};
object?.property = 1; // Uncaught SyntaxError: Invalid left-hand side in assignment
```

기본값을 지정할 수 있다.
```js
let customer = {
  name: "Carl",
  details: { age: 82 },
};
const customerCity = customer?.city ?? "Unknown city";
console.log(customerCity); // Unknown city
```