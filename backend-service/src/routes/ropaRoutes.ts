import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/ropaController";

const ropaRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: Ropa
 *   description: CRUD relacionado con productos
 */

/**
 * @swagger
 * /api/ropa:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [Ropa]
 *     responses:
 *       200:
 *         description: Lista de productos
 */
ropaRoutes.get("/", getAllProducts);

/**
 * @swagger
 * /api/ropa/{id}:
 *   get:
 *     summary: Obtener un producto por ID
 *     tags: [Ropa]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Detalles del producto
 *       404:
 *         description: Producto no encontrado
 */
ropaRoutes.get("/:id", getProductById);

/**
 * @swagger
 * /api/ropa:
 *   post:
 *     summary: Crear un nuevo producto
 *     tags: [Ropa]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Producto creado
 *       500:
 *         description: Error en el servidor
 */
ropaRoutes.post("/", createProduct);

/**
 * @swagger
 * /api/ropa/{id}:
 *   put:
 *     summary: Actualizar un producto existente
 *     tags: [Ropa]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Producto actualizado
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error en el servidor
 */
ropaRoutes.put("/:id", updateProduct);

/**
 * @swagger
 * /api/ropa/{id}:
 *   delete:
 *     summary: Eliminar un producto
 *     tags: [Ropa]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto eliminado
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error en el servidor
 */
ropaRoutes.delete("/:id", deleteProduct);

export default ropaRoutes;