import { Router } from "express";
import {CategoryController} from "./controller/CategoryController";
import {ProductController} from "./controller/ProductController";
import {UserController} from "./controller/UserController";
import {SaleController} from "./controller/SaleController";
import {AuthenticateUserController} from "./controller/AuthenticateUserController";
import {ensureAuthenticated} from "./middleware/ensureAuthenticated";


const router = Router();

class Routes{
    categoryController = new CategoryController();
    productController = new ProductController();
    userController = new UserController();
    saleController = new SaleController();
    authenticateUserController = new AuthenticateUserController();

    UserRoutes(){
        router.post("/login", this.authenticateUserController.handle);router.use(ensureAuthenticated);
        router.get("/user",this.userController.listUser);
        router.post("/user",this.userController.createUser);
        router.put("/user",this.userController.updateUser);
        router.delete("/user/:id",this.userController.deleteUser);
    }

    ProductRoutes(){
        router.get("/product",this.productController.listProduct);
        router.post("/product",this.productController.createProduct);
        router.put("/product",this.productController.updateProduct);
        router.delete("/product/:id",this.productController.deleteProduct);
    }

    CategoryRoutes(){
        router.get("/category",this.categoryController.listCategory);
        router.post("/category",this.categoryController.createCategory);
        router.put("/category",this.categoryController.updateCategory);
        router.delete("/category/:id",this.categoryController.deleteCategory);
    }

    SaleRoutes(){
        router.get("/sale",this.saleController.listSale);
        router.post("/sale",this.saleController.createSale);
        router.put("/sale",this.saleController.updateSale);
        router.delete("/sale/:id",this.saleController.deleteSale);
    }
}
export {Routes}