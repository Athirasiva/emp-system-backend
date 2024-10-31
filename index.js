// // import json-server
// const jsonServer = require('json-server')

// // create a server for the application
// const empServer = jsonServer.create()

// // set up the path or route
// const router = jsonServer.router('./db.json')

// // middleware
// const middleware = jsonServer.defaults()

// // set up the port
// const port = 8080 || process.env.port

// // use middlewares and router
// empServer.use(middleware)
// empServer.use(router)


// empServer.listen(port,()=>{
//     console.log(`Emp Server running on port ${port} and waiting for client requests!`);
    
// })

// *********************

// import json server

const jsonServer = require('json-server')

// create new server using json server

const empserver = jsonServer.create()

// set up path and connection to db

const router = jsonServer.router('./db.json')

//middleware 

const middleWares = jsonServer.defaults()

//port setting

const port = 8080 || process.env.port

// use middleware and router

empserver.use(router)
empserver.use(middleWares)

empserver.listen(port, ()=>{
    console.log(`Server running on ${port}`);
    
})