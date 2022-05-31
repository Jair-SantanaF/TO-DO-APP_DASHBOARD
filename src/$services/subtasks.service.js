import Superagent from 'superagent'

const conexionError = {
    code: 500,
    key: 'appEror',
    message: 'Error de conexión'
}

export default {
    getSubTasks,
    createSubTask,
    updateSubTask,
    deleteSubTask,
}

function getSubTasks(query) {
    return new Promise((resolve, reject) => {

        const token = localStorage.getItem('token')

        Superagent
            .get('http://localhost:7777/subtasks')
            .set('token', token)
            .query(query)
            .end((error, resp) => {
                
                if(error)
                    return resolve( resp? resp.body : conexionError )

                resolve(resp.body)
            })
    })
}

function createSubTask(data) {
    return new Promise((resolve, reject) => {

        const token = localStorage.getItem('token')

        Superagent
            .post('http://localhost:7777/subtasks')
            .set('token', token)
            .send(data)
            .end((error, resp) => {
                
                if(error)
                    return resolve( resp? resp.body : conexionError )

                resolve(resp.body)
            })
    })
}

function updateSubTask( subtaskId, data ) {
    return new Promise((resolve, reject) => {

        const token = localStorage.getItem('token')

        Superagent
            .put(`http://localhost:7777/subtasks/${ subtaskId }`)
            .set('token', token)
            .send(data)
            .end((error, resp) => {
                
                if(error)
                    return resolve( resp? resp.body : conexionError )

                resolve(resp.body)
            })
    })
}
function deleteSubTask( subtaskId ) {
    return new Promise((resolve, reject) => {

        const token = localStorage.getItem('token')

        Superagent
            .delete(`http://localhost:7777/subtasks/${ subtaskId }`)
            .set('token', token)
            .end((error, resp) => {
                
                if(error)
                    return resolve( resp? resp.body : conexionError )

                resolve(resp.body)
            })
    })
}