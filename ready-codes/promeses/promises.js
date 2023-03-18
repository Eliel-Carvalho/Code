const myPromises = new Promise((resolve, reject) => {
    const nome = "eliel"

    if(nome === "eliel") {
        resolve("usuario encontrado")
    } else {
        reject("usuario não encontrado")
    }
});

myPromises.then((data) => {
    console.log(data)
});




//encadeamentos de then

const Promises = new Promise((resolve, reject) => {
    const nome = "elielc"

    if(nome === "elielc") {
        resolve("usuario encontrado")
    } else {
        reject("usuario não encontrado")
    }
});

Promises.then((data) => {
    return data.toUpperCase()
}).then((stringModificada)=>{
    console.log(stringModificada)
})


///catch

const Promises2 = new Promise((resolve, reject) => {
    const nome = "elielc"

    if(nome === "elielc") {
        resolve("usuario encontrado")
    } else {
        reject("usuario não encontrado")
    }
});

Promises2.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})


//RESOLVER VARIAS PORMESSAS

const p1 = new Promise((resolve, reject) => {
 setTimeout(() => {
    resolve("p1 ok")
 },(2000))
})
const p2 = new Promise((resolve, reject) => {
    resolve("p2 Ok")
})
const p3 = new Promise((resolve, reject) => {
    resolve("p3 Ok")
})

const resolvAll = Promise.all([p1, p2, p3]).then((data) => {
    console.table(data)
})




const p5 = new Promise((resolve, reject) => {
 setTimeout(() => {
    resolve("p5 ok")
 },(2000))
})
const p6 = new Promise((resolve, reject) => {
    resolve("p6 Ok")
})
const p7 = new Promise((resolve, reject) => {
    resolve("p7 Ok")
})

const resolvArace = Promise.race([p5, p6, p7]).then((data) => {
    console.table(data)
})