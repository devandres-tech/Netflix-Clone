import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import '@babel/polyfill'

<<<<<<< HEAD
import reducers from './store/reducers'
import AppRouter from './AppRouter'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// Import main sass file to apply global styles
import './static/sass/style.scss'
=======
import App from './containers/App';
import 'swiper/swiper-bundle.min.css';
import './static/sass/style.scss';
>>>>>>> 4ee9fd3d7103a246e24a324f01ff488928ad864c

const store = createStore(reducers, applyMiddleware(ReduxThunk))

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(app, document.getElementById('app'))
