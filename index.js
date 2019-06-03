///   Importation du module post
///import { Client } from 'pg';
var pg = require('pg');

///   Connexion à la base
///var cnx =new Client("postgres://user4:webdev2019_user4@151.80.45.43:5432/db4");
///cnx.connect();

///   Execution de la query
///   Gestion du port
const Pool = require('pg').Pool;
///   Création du Pool
var pool = new Pool({
   host: '151.80.45.43',
   database: 'db4',
   user: 'user4',
   password: 'webdev2019_user4'
});

pool.on('connect', () => {
   console.log("Connecté à la base de donnée");
});

///   Récupération des données de la base
pool.query('select * from "latable_RL" ', (err, results) => {

   if (err) {
      console.log(err);
      return;
   }
   console.log(results.rows);

});