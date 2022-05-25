import Superagent from 'superagent'

const conexionError = {
    code: 500,
    key: 'appEror',
    message: 'Error de conexión'
}

export default {
    getTasks,
//     createCourse,
//     updateCourse,
//     deleteCourse,
}

function getTasks(query) {
    return new Promise((resolve, reject) => {

        const token = localStorage.getItem('token')

        Superagent
            .get('http://localhost:7777/tasks')
            .set('token', token)
            .query(query)
            .end((error, resp) => {
                
                if(error)
                    return resolve( resp? resp.body : conexionError )

                resolve(resp.body)
            })
    })
}

// function createCourse(data) {
//     return new Promise((resolve, reject) => {

//         const token = localStorage.getItem('token')

//         Superagent
//             .post('http://localhost:7777/courses')
//             .set('token', token)
//             .send(data)
//             .end((error, resp) => {
                
//                 if(error)
//                     return resolve( resp? resp.body : conexionError )

//                 resolve(resp.body)
//             })
//     })
// }

// function updateCourse( courseId, data ) {
//     return new Promise((resolve, reject) => {

//         const token = localStorage.getItem('token')

//         Superagent
//             .put(`http://localhost:7777/courses/${ courseId }`)
//             .set('token', token)
//             .send(data)
//             .end((error, resp) => {
                
//                 if(error)
//                     return resolve( resp? resp.body : conexionError )

//                 resolve(resp.body)
//             })
//     })
// }

// function deleteCourse( courseId ) {
//     return new Promise((resolve, reject) => {

//         const token = localStorage.getItem('token')

//         Superagent
//             .delete(`http://localhost:7777/courses/${ courseId }`)
//             .set('token', token)
//             .end((error, resp) => {
                
//                 if(error)
//                     return resolve( resp? resp.body : conexionError )

//                 resolve(resp.body)
//             })
//     })
// }