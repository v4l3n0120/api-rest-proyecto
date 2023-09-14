import express from "express"
import compradoresRoutes from "./routes/compradores.routes.js"
import facturaRoutes from "./routes/factura.routes.js"
import productosRoutes from "./routes/productos.routes.js"
import vendedoresRoutes from "./routes/vendedores.routes.js"

const app = express()

app.use(express.json())


app.use("/api",compradoresRoutes)
app.use("/api",facturaRoutes)
app.use("/api",productosRoutes)
app.use("/api",vendedoresRoutes)



app.use((req, res, next)=>{
    res.status(404).json({
        message:"endpoint no encontrado"
    })
})
export default app