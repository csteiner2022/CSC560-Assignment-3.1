import * as mongodb from "mongodb";
import { Employee } from "./employee";

export const collections: {
    employees?: mongodb.Collection<Employee>;
} = {};

export async function connectToDatabase(uri: string) {
    const client = new mongodb.MongoClient(uri);
    await client.connect();
    const db = client.db("meanStackExample");
    collections.employees = db.collection<Employee>("employees");
    console.log(`Successfully connected to database: ${db.databaseName}`);
}
