const store = createStore(states);
const unSubscribe = store.subscribe(() => {
    console.log(store.getState());
});

setTimeout(() => {
    addTodo({ item: 'Your Message' });
}, 10000);