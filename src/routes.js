import Home from './components/Home.vue'
import Portfolio from './components/portfolio/portfolio.vue'
import Stocks from './components/stocks/stocks.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/portfolio', component: Portfolio },
  { path: '/stocks', component: Stocks }
]
