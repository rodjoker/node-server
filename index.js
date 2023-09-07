const http = require("http");

const host = "localhost"; //esto es el Anfitrion
const port = 3001;        //esto es el puerto

const listaTareas = [
    {
        id: 0,
        tarea: "Construir mi primer servidor",
        descriocion: "Usando NODE JS",
        estado: true
    },
    {
        id: 1,
        tarea: "Crear una lista de tareas",
        descriocion: "En mi servidor",
        estado: true
    },
    {
        id: 2,
        tarea: "Exponer en clase mi trabajo",
        descriocion: "En meet",
        estado: false
    },
    {
        id: 3,
        tarea: "Implementar los consejos del profesor",
        descriocion: "En mi archivo de VS",
        estado: true
    }
]

const servidor = http.createServer ((req, res) => {
    console.log("mi propio servidor")

   

    res.write(JSON.stringify(listaTareas));
    res.end();
})

//vamso a prender el servidor

servidor.listen(port, host, () => {
    console.log(`Esta es la ruta del servidor http://${host}${port} `);
})
