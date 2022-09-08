const supertest = require("supertest");

const createApp = require('./app');

const app = createApp;

const request = supertest(app);

test("GET /", async () => {
  const response = await request
    .get("/")
    .expect(200)
  /* .expect("Content-Type", "application/json"); */


  /* expect(response.body).toEqual({ location: "Earth" }); */
  expect(response.text).toEqual('<html><body><h1>Welcome to the World Wide Web!</h1></body></html>');
});

//Per effettuare il test con jest ho utilizzato uno scaffolding con jest, supertest e altri pacchetti gia installati
//cosi da evitare di installare di nuovo tutto quanto per lo svolgimento dell'esercizio
//In allegato all'esercizio lo screenshot del risultato del test.