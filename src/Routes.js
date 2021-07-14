import Index from './components/Index.vue'
import Informations from './components/Informations.vue'

export default [
    {path: '/', component: Index},
    {path: '/pokemon/:id', component: Informations}
]