// product.controller.ts
import {
  productsDao,
  productByIdDao,
  productBySearchDao,
  dynaminProductDao,
} from "../dao/product.dao"; // Fix the import
import { sendError, sendResponse } from "../../utils/responseUtil";
import { FastifyReply } from "fastify";

export const products = async (request: Request, reply: FastifyReply) => {
  try {
    const data = await productsDao();
    sendResponse(reply, 200, "Product-static", data);
  } catch (error: any) {
    console.log("Error : ", error);
    sendError(reply, 404, "Some error when fetch Product-static", error);
  }
};

export const productById = async (request: any, reply: FastifyReply) => {
  try {
    const id: string = request.query.rule_id;
    const data = await productByIdDao(id);
    sendResponse(reply, 200, "Product-static", data);
  } catch (error: any) {
    console.log("Error : ", error);
    sendError(reply, 404, "Some error when fetch Product-By-Id", error);
  }
};

export const dynaminProduct = async (request: any, reply: FastifyReply) => {
  try {
    const data = await dynaminProductDao();
    sendResponse(reply, 200, "Product-Dynamic", data);
  } catch (error: any) {
    console.log("Error : ", error);
    sendError(reply, 404, "Some error when fetch Product-static", error);
  }
};

export const productBySearch = async (request: any, reply: any) => {
  try {
    const { productName } = request.query;
    const data = await productBySearchDao(productName);
    sendResponse(reply, 200, "Product-By-Search", data);
  } catch (error: any) {
    console.log("Error : ", error);
    sendError(reply, 404, "Some error when fetch Product-static", error);
  }
};

// async function dynaminProduct(request:Request,reply:any) {
//     dynaminProductDao
// }

// , productById, productBySearch, dynaminProduct
// export default products,productById ;
