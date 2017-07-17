import Vue from 'vue'
import Router from 'vue-router'
import Mint from 'mint-ui'
import newsclassify from '@/components/newsclassify'
import '../assets/css/tablist.css'

Vue.use(Router)
Vue.use(Mint)

export default new Router({
  routes: [
    {
      path: '/newsclassify',
      name: 'newsclassify',
      component: newsclassify
    },
    {
      path: '/news',
      name: 'news',
      component: require('../page/news.vue')
    },
    {
      path: '/package',
      name: 'package',
      component: require('../page/package.vue')
    },
    {
      path: '/article',
      name: 'article',
      component: require('../page/article.vue')
    },
    {
      path: '/comment',
      name: 'comment',
      component: require('../page/comment.vue')
    },
    {
      path: '/problem',
      name: 'problem',
      component: require('../page/problem.vue')
    }
  ]
})
