<template>
  <main class="mx-6 mb-6 sm:mx-32 md:mx-44 md:mt-6 lg:mx-64 lg:grid lg:grid-cols-2 lg:gap-40">
    <img :src="imageActuelle" class="mx-auto mt-6 md:w-full" />
    <form enctype="multipart/form-data"  @submit.prevent="deleteArtiste">
      <h1 class="mb-10 font-barlow text-2xl font-bold uppercase">Suppression d'un artiste</h1>
      <div class="mb-10 flex w-full">
        <div class="bg-[#f6c139] p-3 font-barlow text-xl font-bold uppercase text-gray-100">Nom</div>
        <input
          type="text"
          placeholder="Nom de l'artiste"
          class="w-full border-[1px] border-gray-400 bg-gray-100 p-2.5 font-barlow text-xl font-bold uppercase text-gray-900"
          v-model="artiste.nom"
          disabled
        />
      </div>
      <div class="mb-10 flex w-full">
        <div class="bg-[#f6c139] p-3 font-barlow text-xl font-bold uppercase text-gray-100">Bio</div>
        <input
          type="text"
          placeholder="Biographie"
          class="w-full border-[1px] border-gray-400 bg-gray-100 p-2.5 font-barlow text-xl font-bold uppercase text-gray-900"
          v-model="artiste.bio"
          disabled
        />
      </div>

      <h5 class="mb-10 w-full bg-[#F00200] p-3 text-center font-barlow text-xl font-bold uppercase text-gray-100">
        Attention, vous êtes sur le point de supprimer cet artiste! Validez vous votre choix?
      </h5>

      <div class="flex flex-row justify-between gap-5">
        <button type="submit" class="w-full bg-[#f6c139] p-3 font-barlow text-xl font-bold uppercase text-gray-100">Supprimer</button>

        <router-link to="/listea">
          <div class="w-full bg-[#f6c139] p-3 font-barlow text-xl font-bold uppercase text-gray-100">
            Annuler
          </div>
        </router-link>
      </div>

    </form>
    <div>
    </div>
  </main>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDoc,
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
  deleteObject,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  components: {},
  data() {
    return {
      artiste: {
        img: null,
        nom: null,
        bio: null,
      },
      refArtiste: null,
      imageActuelle: null,
    };
  },
  mounted() {
    console.log("id artiste", this.$route.params.id);
    this.getArtiste(this.$route.params.id);
  },
  methods: {
    async getArtiste(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "artiste", id);
      this.refArtiste = await getDoc(docRef);
      if (this.refArtiste.exists()) {
        this.artiste = this.refArtiste.data();
        this.imageActuelle = this.artiste.img;
      } else {
        this.console.log("artiste inexistant");
      }
      const storage = getStorage();
      const spaceRef = ref(storage, "artiste/" + this.artiste.img);
      getDownloadURL(spaceRef)
        .then((url) => {
          this.imageActuelle = url;
        })
        .catch((error) => {
          console.log("erreur dl", error);
        });
    },
    async deleteArtiste() {
      const firestore = getFirestore();
      await deleteDoc(doc(firestore, "artiste", this.$route.params.id));
      const storage = getStorage();
      let docRef = ref(storage, "artiste/" + this.artiste.img);
      deleteObject(docRef);
      this.$router.push("/listea");
    },
  },
};
</script>