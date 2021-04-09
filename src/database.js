import mongoClient from "mongodb";

export const connect = async () => {
    try {
        const client = await mongoClient.connect("mongodb://AdminUser:0599@myfirstcluster-shard-00-00.dep1l.mongodb.net:27017,myfirstcluster-shard-00-01.dep1l.mongodb.net:27017,myfirstcluster-shard-00-02.dep1l.mongodb.net:27017/test?authSource=admin&replicaSet=atlas-8r8g26-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",{ useUnifiedTopology: true });
        const db = client.db("node-rest-api");
        console.log("DB is connected");
        return db;
    } catch (error) {
        console.log(error);
    }
};
