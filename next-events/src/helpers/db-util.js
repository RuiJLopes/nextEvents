import { MongoClient } from "mongodb";
export async function connectDatabase() {
  const client = await new MongoClient(process.env.MONGO_CLIENT_URL).connect();
  console.log("Connected successfully to server");

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const collect = db.collection(collection);

  const result = await collect.insertOne(document);
  console.log("Inserted =>", result);

  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();
  const collect = db.collection(collection);

  const documents = await collect.find().sort(sort).toArray();

  return documents;
}

export async function getDocumentById(client, collection, documentId, sort) {
  const db = client.db();
  const collect = db.collection(collection);

  const documents = await collect.find().sort(sort).toArray();

  return documents;
}
