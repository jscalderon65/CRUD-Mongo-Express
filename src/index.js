import "@babel/polyfill";
import app from "./server";
//https://www.youtube.com/watch?v=OtYoK0RV7oY&t=717s
const main = async () => {
    await app.listen(app.get("port"));
    console.log("server on port", app.get("port"));
};

main();
