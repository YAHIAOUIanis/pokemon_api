import Index from './components/Index.vue'
import Profil from './components/Profil.vue'

export default [
    {path: '/', component: Index},
    {path: '/pokemon/:id', component: Profil}
]