getters에 매개변수 전달하기
Vuex getters는 기본적으로 매개변수를 직접 받을 수 없지만, **다른 함수를 반환하는 방식**으로 해결할 수 있음.
```js
getters: {
  getTodoById: state => id => {
    return state.todos.find(todo => todo.id === id);
  }
}
```

```js
computed: {
  todoItem() {
    return this.$store.getters.getTodoById(2); // id가 2인 할 일 가져오기
  }
}
```