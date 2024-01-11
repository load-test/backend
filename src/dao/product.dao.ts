import { prisma } from "../../utils/prisma";

async function productsDao() {
  try {
    const allProduct = await prisma.product.findMany();
    if (allProduct) {
      return allProduct;
    }
    return allProduct;
  } catch (error: any) {
    console.log("error occured in getUserhistory dto", error);
    throw new Error(error);
  }
}

async function productByIdDao(id: string) {
  try {
    const productById = await prisma.product.findFirst({
      where: {
        id,
      },
    });
    if (productById) {
      return productById;
    }
    return productById;
  } catch (error: any) {
    console.log("error occured in getUserhistory dto", error);
    throw new Error(error);
  }
}

async function productBySearchDao(productName:string) {
    try {
        const products = await prisma.product.findMany({
            where:{
                productName: {
                    contains: productName,
                  },
            }
        });
        
        return products
      } catch (error: any) {
        console.log("error occured in getUserhistory dto", error);
        throw new Error(error);
      }
}

async function dynaminProductDao() {
    try {
        const products = await prisma.product.findMany();
        let lastFiveData = []
        if (products) {
            for (let i = 5; i < products.length; i++) {
                lastFiveData.push(products[i]);
            }
        }
        return lastFiveData
      } catch (error: any) {
        console.log("error occured in getUserhistory dto", error);
        throw new Error(error);
      }
}

export { productsDao, productByIdDao, productBySearchDao, dynaminProductDao };
