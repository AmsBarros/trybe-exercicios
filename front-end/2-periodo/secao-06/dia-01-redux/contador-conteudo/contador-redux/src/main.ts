import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

type ActionType = {
  type: string
}

// 1. Criando o Reducer com Estado Inicial
const INITIAL_STATE = {
  count: 0
}

const reducer = (state = INITIAL_STATE, action: ActionType) => {
  if(action.type === 'INCREMENT_COUNTER') {
    return {
      count: state.count + 1
    }
  }
  return state;
};

// 2. Criando a Store já com Redux Devtools
const store = createStore(reducer, composeWithDevTools());

// 3. Criando a Action
const action = { type: 'INCREMENT_COUNTER'};

// 4. Disparando a Action
const button = document.querySelector('button') as HTMLButtonElement;
button.addEventListener('click', () => {
  store.dispatch(action);
});

// 5. Lendo do Estado global
store.subscribe(() => {
  const globalState = store.getState();

  const countElement = document.querySelector('h2') as HTMLHeadingElement;
  countElement.innerHTML = globalState.count.toString();

  console.log(globalState);
  console.log('Estado atualizado!!');
})