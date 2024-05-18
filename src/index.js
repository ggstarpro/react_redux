import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from "redux"
import allReducers from './reducers';
// reduxとreactを連携するためのもの
import { Provider } from "react-redux"

const store = createStore(
  allReducers,
  // redux-devtools-extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Appコンポーネント全てのコンポーネントでアクセスできるよう追加 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
