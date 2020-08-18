const express = require("express")
const exphbs = require("express-handlebars")
const app = express()


app.use(express.static("public"))
app.use(express.json())

require("./routes/htmlRoutes")(app)

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}))

app.set("view engine", "handlebars")

app.set("trust proxy", true)


app.listen(8080)