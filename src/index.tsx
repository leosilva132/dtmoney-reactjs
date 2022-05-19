import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer } from "miragejs"
import { App } from './App';

createServer({
  routes(){
    this.namespace = 'api';

    this.get('/transacations', () => {
      return [{
          id: 1,
          title: 'Transacation 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      
      ]
    })
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

