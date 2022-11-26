import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import '@babel/polyfill'

import { store } from './store'
import AppRouter from './AppRouter'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// Import main sass file to apply global styles
import './static/sass/style.scss'

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.createRoot(document.getElementById('app')).render(app)
