
<template>
<router-link :to="{ name: 'ArtisteView', params: { id: artiste.id } }">
<div v-for="artiste in listeArtistes" :key="artiste.id"
  class="flex flex-col m-[60px] w-[75%] max-w-[400px]  h-auto relative overflow-hidden rounded-xl bg-white"
  style="box-shadow: 0px 2px 4px 0 rgba(28,5,77,0.1), 0px 12px 32px 0 rgba(0,0,0,0.05);"
>

  <img :src="artiste.img" :alt="artiste.nom" class=" h-[195px] self-stretch object-cover" />
  <div
    class="flex flex-col self-stretch flex-grow-0 flex-shrink-0 relative gap-1 px-6 py-4 bg-white"
  >
    <div class="flex self-stretch flex-grow-0 flex-shrink-0 relative">
      <p class="flex-grow w-[141px] font-bebas text-[22px] text-center text-black">{{ artiste.nom }}</p>

    </div>
  </div>
 
</div>
</router-link>
</template>

<script>
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDocs, // Obtenir la liste des documents d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  components: {},
  data() {
    return {
      listeArtistes: [],
    };
  },
  mounted() {
    this.getArtiste();
  },
  methods: {
    async getArtiste() {
      const firestore = getFirestore();
      const dbartiste = collection(firestore, "artiste");
      await onSnapshot(dbartiste, (snapshot) => {
        this.listeArtistes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.listeArtistes.forEach(function (it) {
          const storage = getStorage();
          const dbartisteimg = ref(storage, "artiste/" + it.img);
          getDownloadURL(dbartisteimg)
            .then((url) => {
              it.img = url;
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
      });
    },
  },
};
</script>








