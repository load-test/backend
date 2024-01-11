import {products,productById,dynaminProduct,productBySearch} from "../controller/product.controller"
// ,productById,productBySearch,dynaminProduct
const produceRoute = async function (fastify:any){
    fastify.get("/staticProd",products);
    fastify.get("/dynamicProd",dynaminProduct);
    fastify.get("/:id",productById);
    fastify.get("/search",productBySearch);
}

export default produceRoute;