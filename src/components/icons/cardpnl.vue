
<template>
<div v-for="concert in listeConcert" :key="concert.id"
  class="flex flex-col m-[60px] w-[75%] max-w-[400px]  h-auto relative overflow-hidden rounded-xl bg-white"
  style="box-shadow: 0px 2px 4px 0 rgba(28,5,77,0.1), 0px 12px 32px 0 rgba(0,0,0,0.05);"
>

  <div
    class="flex flex-col self-stretch flex-grow-0 flex-shrink-0 relative gap-1 px-6 py-4 bg-white"
  >
    <div class="flex self-stretch flex-grow-0 flex-shrink-0 relative">
      <p class="flex-grow w-[141px] text-[22px] font-bebas text-left text-black">PNL CONCERT</p>

    </div>
        <p
      class="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm font-semibold text-left text-[#F6C139]"
    >
      20h
    </p>
    <p
      class="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm font-semibold text-left text-[#6B7280]"
    >
      l’Accor Arena
    </p>
  </div>
</div>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
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
      listeConcert: [],
      nom: null,
      horaire: null,
    };
  },
  mounted() {
    this.getConcert();
  },
  methods: {
    async getConcert() {
      const firestore = getFirestore();
      const dbConcert = collection(firestore, "concert");
      const q = query(dbConcert, orderBy("nom"));

      await onSnapshot(q, (snapshot) => {
        this.listeConcert = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      });
      console.log(this.listeConcert);
    },
    async createConcert() {
      const firestore = getFirestore();
      const dbconcert = collection(firestore, "concert");
      const docRef = await addDoc(dbconcert, {
        nom: this.nom,
        horaire: this.horaire,
      });
      console.log("document créé avec le id : ", docRef.id);
    },

    async updateConcert(concert) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "concert", concert.id);
      await updateDoc(docRef, {
        nom: concert.nom,
        horaire: concert.horaire,
      });
    },

    async deleteConcert(concert) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "concert", concert.id);
      await deleteDoc(docRef);
    },
  },
};
</script>



