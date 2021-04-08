import mongoClient from "mongodb";

export const connect = async () => {
    try {
        const client = await mongoClient.connect("mongodb://localhost:27017",{ useUnifiedTopology: true });
        const db = client.db("node-rest-api");
        console.log("DB is connected");
        return db;
    } catch (error) {
        console.log(error);
    }
};
