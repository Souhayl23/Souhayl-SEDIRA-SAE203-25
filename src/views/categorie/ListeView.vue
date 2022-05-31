<template>
    <div class="container">
        <div class="card-header">
            <h5>Liste des catégories</h5>
        </div>    
        <hr/>


        <form>
          <h6>Nouvelle catégorie</h6>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Libellé</span>
            </div>
            <input type="text" class="form-control" v-model="libelle" required />
            <button class="btn btn-light" type="submit" @click="createCategorie()" title="Création">
              <i class="fa fa-save fa-lg"></i>
            </button>
          </div>
        </form>

        <div class="card-body table-responsive">
            <table class="table text-light">
              <thead>
                    <tr>                      
                        <th scope="col">
                          <div class="float-left">Liste des Catégories actuelles</div>                          
                          <span class="float-right">
                            <div class="input-group" >
                                <div class="input-group-prepend">
                                  <span class="input-group-text" >Filtrage</span>
                                </div>
                                <input type="text" class="form-control" v-model="filter" />
                                <button class="btn btn-light" type="button" title="Filtrage">
                                  <i class="fa fa-search fa-lg"></i>
                                </button>
                              </div>
                          </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="categorie in filterByName" :key="categorie.id">
                        <td>
                          <form>
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span class="input-group-text">Libellé</span>
                              </div>
                              <input type="text" class="form-control" v-model="categorie.libelle" required />
                              <button class="btn btn-light" type="button" @click.prevent="uptadeCategorie(categorie)" title="Modification">
                                <i class="fa fa-save fa-lg"></i>
                              </button>
                              <button class="btn btn-light" type="button" @click.prevent="deleteCategorie(categorie)" title="Suppression">
                                <i class="fa fa-trash fa-lg"></i>
                              </button>
                            </div>
                          </form>


                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

export default {
  name: "ListeView",
  data() {
    return {
      nom: null,
      listeCategorieSynchro: [],
      filter: '',
    };
  },
  computed: {

    orderByName: function(){
      return this.listeCategorieSynchro.sort(function(a, b){

        if(a.libelle < b.libelle) return -1;

        if(a.libelle > b.libelle) return 1;

        return 0
      })
    },

    filterByName: function(){

    if(this.filter.length> 0){
      let filter = this.filter.toLocaleLowerCase();
      return this.orderByName.filter(function(categorie) {
        return categorie.libelle.toLowerCase().includes(filter);
      })
    }else{

    return this.orderByName;

    }
    }

  },

  mounted() {
    // Appel de la liste des pays synchronisée
    this.getCategorieSynchro();
  },

  methods: {
    async getCategorieSynchro() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbCategorie = collection(firestore, "categorie");
      // Liste des pays synchronisée
      const query = await onSnapshot(dbCategorie, (snapshot) => {
        //  Récupération des résultats dans listePaysSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listeCategorieSynchro = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },
    async createCategorie(){
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbCategorie= collection(firestore, "categorie");
      // On passe en paramètre format json
      // Les champs à mettre à jour
      // Sauf le id qui est créé automatiquement
      const docRef = await addDoc(dbCategorie,{
          libelle: this.libelle
      })
      console.log('document créé avec le id : ', docRef.id);

      
    },

    async updateCategorie(categorie){
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      // Reference du pays à modifier
      const docRef = doc(firestore, "categorie", categorie.id);
      // On passe en paramètre format json
      // Les champs à mettre à jour
      await updateDoc(docRef, {
          libelle: categorie.libelle
      }) 
    },

    async deleteCategorie(categorie){
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      // Reference du pays à supprimer
      const docRef = doc(firestore, "categorie", categorie.id);
      // Suppression du pays référencé
      await deleteDoc(docRef);
    },


  },
};
</script>


