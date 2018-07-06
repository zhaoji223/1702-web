import Vue from 'vue'
import Router from 'vue-router'
import DotaRoll from '../components/dota_roll'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'DotaRoll',
            component: DotaRoll
        }
    ]
})
