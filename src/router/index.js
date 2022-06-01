import { createRouter, createWebHistory } from 'vue-router'
import AccueilView    from      '../views/AccueilView.vue'
import ProgrammationView      from      '../views/ProgrammationView.vue'
import ArtistesView     from      '../views/ArtistesView.vue'
import FestivalView     from      '../views/FestivalView.vue'
import ContactView     from      '../views/ContactView.vue'

import ConcertView     from      '../views/ConcertView.vue'
import ArtisteView     from      '../views/ArtisteView.vue'
import MentionsView     from      '../views/MentionsView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',          name: 'AccueilView',            component: AccueilView  },
    { path: '/programmation',     name: 'ProgrammationView',              component: ProgrammationView  },
    { path: '/artistes',    name: 'ArtistesView',             component: ArtistesView  },
    { path: '/festival',    name: 'FestivalView',             component: FestivalView  },
    { path: '/contact',    name: 'ContactView',             component: ContactView  },

    { path: '/concert',    name: 'ConcertView',             component: ConcertView  },
    { path: '/artiste',    name: 'ArtisteView',             component: ArtisteView  },
    { path: '/mentions',    name: 'MentionsView',             component: MentionsView  },



  ]
})

export default router


