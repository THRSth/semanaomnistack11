/**
 *  Rota / recurso 
 */


/**
 * metodo HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * Post: Criar uma informação no back-end
 * PUT: ALterar uma informação no back-end
 * DELETE: Deletar uma infprmação no back-end
 */

/**
 * Tipos de parametos:
 * 
 * Query params: Paramets nomeados enviados na rota apos "?" (FIltro, paginação)
 * Route params:  Parameto utilizado para indetificar recursos
 * Request Body: Corpo da requesição, utilizado para criar ou atearar recursos
  */

  /**
   * SQL: MySql, SQLite, PostgreSql, Oracle, Microsot SQL Server
   * NoSQL: MondoDB, COuchDB, etc
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: tabela('users').select('*').where()
    */

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);