import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCTmvGQGw3UDu7vmvYOfH9TB2uirx4iTKE",
  authDomain: "pokemon-game-87ca9.firebaseapp.com",
  databaseURL: "https://pokemon-game-87ca9-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-87ca9",
  storageBucket: "pokemon-game-87ca9.appspot.com",
  messagingSenderId: "654869930714",
  appId: "1:654869930714:web:df02d303404f2999893be3"
};

firebase.initializeApp(firebaseConfig);

export class Firebase {
  constructor() {
    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonSoket = (cb) => {
    this.database.ref('pokemons').on('value', (snapshot) => {
      cb(snapshot.val());
    })
  }
  
  getPokemonsOnce = async () => {
    return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
  }

  postPokemon = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).set(pokemon);
  }

  addPokemon = (data, cb) => {
    const newKey = this.database.ref().child('pokemons').push().key;
    this.database.ref('pokemons/' + newKey).set(data);
  }
}
