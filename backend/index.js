import express from "express"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "#majoriganza5830",
    database:"major"
})

app.use(express.json())

app.get("/", (req, res)=>{
    res.json("hello this is the backend")
})

app.get("/books", (req, res)=>{
    const q = "SELECT * FROM books"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/books", (req, res)=>{
    const q = "INSERT INTO books (`title`,`desc`,`cover`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.desc,
        req.bosy.cover
    ]

    db.query(q, [values], (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.listen(5500, ()=>{
    console.log("Connected to backend!")
})