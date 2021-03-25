// ----------------------------------------------------------

//Get DOM Elements
const counter = document.getElementById("counter");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");



const addTodo = document.getElementById("add-todo")
const todos = document.getElementById("todos")

const initialState = { counter: 0, todos: ['Sleep', 'Eat', 'Work', 'Clean'] }


//Create Store
const reducer = (state = initialState, action) => {
  if (typeof state === "undefined") {
    return 0;
  }

  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter+1 };
      break;
    case "DECREMENT":
      return { ...state, counter: state.counter-1 };
      break;
    case "TODOS":
      return { ...state, todos: [ ...state.todos, action.payload ]   }

    default:
      return state;
  }
};

// Create the store with this reducer.
const store = Redux.createStore(reducer);

// Render Initial Counter:
const render = () => {
    console.log(store.getState());
    counter.innerHTML = store.getState().counter;
};


// Call the function
render();

store.subscribe(render);

increment.addEventListener('click', () => {
    store.dispatch({type: 'INCREMENT'});
});

decrement.addEventListener('click', () => {
    store.dispatch({type: 'DECREMENT'});
});

addTodo.addEventListener('click', () => {
  const newTodo = document.getElementById("new-todo").value;
  store.dispatch({type: 'TODOS', payload: newTodo });
});




// ----------------------------------------------------------


