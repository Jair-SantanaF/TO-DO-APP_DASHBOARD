import Superagent from 'superagent'

const conexionError = {
    code: 500,
    key: 'appEror',
    message: 'Error de conexión'
}

export default {
    userCreate,
    userLogin
}

async function userCreate(data) {
    return new Promise((resolve, reject) => {

        Superagent
            .post('http://localhost:7777/users')
            .send(data)
            .end((error, resp) => {
                
                if(error)
                    return resolve( resp? resp.body : conexionError )

                resolve(resp.body)
            })
    })
}

async function userLogin(data) {
    return new Promise((resolve, reject) => {

        Superagent
            .post('http://localhost:7777/users/login')
            .send(data)
            .end((error, resp) => {
                
                if(error)
                    return resolve( resp? resp.body : conexionError )

                resolve(resp.body)
            })
    })
}