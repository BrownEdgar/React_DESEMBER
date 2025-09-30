import './index.css'
import 'primeicons/primeicons.css';
import { createRoot } from 'react-dom/client'
import App from './App';
import store from './src/app/store'
import { Provider } from 'react-redux'



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
