import Vue from 'vue'
import VueRouter from 'vue-router'
import Topics from './components/Topics/Topics'
import NewTopic from './components/Topics/NewTopic'
import EditTopic from './components/Topics/EditTopic'
import ShowTopic from './components/Topics/ShowTopic'

Vue.use(VueRouter)

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
    { path: '/', component: Topics},
    { path: '/topics', component: Topics},
    { path: '/topics/create', component: NewTopic},
    { 
        path: '/topics/:id/edit', 
        component: EditTopic,
        props: true
    },
    {
        path: '/topics/:id',
        component: ShowTopic,
        props: true
    }
]

const router = new VueRouter({
  routes
})

export default router