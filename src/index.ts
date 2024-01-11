import fastify from "fastify";
import config from "../config/env.config"
import fastifyCors from "@fastify/cors";
import produceRoute from "./route/productRoute";

const server = fastify();

server.register(fastifyCors,{
    origin:["*"],
    credentials:true,
})

// server.register((fastify, options, done) => {
//     server.register(require("fastify-cors"), {
//       origin: "*",
//       methods: ["GET"]
//     });
//     done();
//   });

server.register(produceRoute);

server.register(produceRoute, { prefix: "/api/v1/product" });

server.listen({port:config.PORT,host:'0.0.0.0'},(err,address) => {
    if(err){
        console.log(err);
        process.exit(1);
    }
    console.log(`server started in ${address}`);
})