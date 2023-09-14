import express from "express"
import compradoresRoutes from "./routes/compradores.routes.js"
import facturasRoutes from "./routes/facturas.routes.js"
import productosRoutes from "./routes/productos.routes.js"
import vendedoresRoutes from "./routes/vendedores.routes.js"

const app = express()

app.use(express.json())


app.use("/api",compradoresRoutes)
app.use("/api",facturasRoutes)
app.use("/api",productosRoutes)
app.use("/api",vendedoresRoutes)



app.use((req, res, next)=>{
    res.status(404).json({
        message:"endpoint no encontrado"
    })
})
export default app