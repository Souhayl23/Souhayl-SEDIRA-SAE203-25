import { createRouter, createWebHistory } from 'vue-router'
import AccueilView    from      '../views/AccueilView.vue'
import ProgrammationView      from      '../views/ProgrammationView.vue'
import ArtistesView     from      '../views/ArtistesView.vue'
import FestivalView     from      '../views/FestivalView.vue'
import ContactView     from      '../views/ContactView.vue'

import ConcertView     from      '../views/ConcertView.vue'

import ListeVideo     from      '../views/video/ListeView.vue'
import CreateVideo     from      '../views/video/CreateView.vue'

import ListeParticipant     from      '../views/participant/ListeView.vue'
import CreateParticipant     from      '../views/participant/CreateView.vue'

import ListeCategorie     from      '../views/categorie/ListeView.vue'

import ListePays     from      '../views/pays/ListeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',          name: 'AccueilView',            component: AccueilView  },
    { path: '/programmation',     name: 'ProgrammationView',              component: ProgrammationView  },
    { path: '/artistes',    name: 'ArtistesView',             component: ArtistesView  },
    { path: '/festival',    name: 'FestivalView',             component: FestivalView  },
    { path: '/contact',    name: 'ContactView',             component: ContactView  },
    { path: '/concert',    name: 'ConcertView',             component: ConcertView  },

    { path: '/videos',    name: 'ListeVideo',             component: ListeVideo  },
    { path: '/createVideo',    name: 'CreateVideo',             component: CreateVideo  },

    { path: '/participants',    name: 'ListeParticipant',             component: ListeParticipant  },
    { path: '/createParticipant',    name: 'CreateParticipant',             component: CreateParticipant  },

    { path: '/categories',    name: 'ListeCategorie',             component: ListeCategorie  },

    { path: '/pays',    name: 'ListePays',             component: ListePays  },


  ]
})

export default router


