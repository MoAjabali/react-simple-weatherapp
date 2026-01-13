import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { IntlayerProvider } from "react-intlayer";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IntlayerProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </IntlayerProvider>
  </StrictMode>,
)
