const { nanoid } = require("nanoid");
const notes = require('./note') 

const addNote = (request , h) => {
    //take data
    const {title , tags , body} = request.payload

    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNote = {
        title , tags , body , id , createdAt , updatedAt
    }
    //data push
    notes.push(newNote)

    //check data in data.js
    const isSuccess = notes.filter((item) => item.id === id).length > 0

    //check data and give response to client
    if (isSuccess) {
        const response = h.response({
            status : 'success',
            message : 'Catatan berhasil ditambahkan',
            data : {
                noteId : id
            }
        })
        response.code(201)
        return response
    }

    const response = h.response({
        status : 'failed',
        message : 'Catatan gagal ditambahkan'
    })
    response.code(500)
    return response
}

//Get All Data from data storage
const getAllNotesHandler = () => ({
    status: 'success',
    data: {
      notes,
    },
});

const getNote = (request , h) => {
    //get id from url
    const { id } = request.params
    // search data in data storage
    const note = notes.filter((item) =>  item.id === id)[0]
    // check data 
    if(note !== undefined){
        return ({
            status:'success',
            data: {
                note,
            }
        })

    }
    const response = h.response({
        status:'failed',
        message:'Catatan tidak ditemukan'
    });

    response.code(404)
    return response
}

const updateNote = (request , h) => {
    // take id from url
    const { id } = request.params

    //take data from page edit
    const { title , tags , body } = request.payload
    
    //update date
    const updatedAt = new Date().toISOString()

    //take index on  data storage from id url
    const index = notes.findIndex((item) => item.id === id)

    if(index !== -1){
        notes[index] = {
            ...notes[index],
            title,
            tags,
            body,
            updatedAt
        }
        const response = h.response({
            status : 'success',
            message : 'data berhasil diubah',
        })

        response.code(200);
        return response;
    }

    const response = h.response({
        status:'fail',
        message:'data tidak berhasil di update'
    })
    response.code(404)
    return response

}

const deleteNote = (request , h) => {
    const { id } = request.params

    const index = notes.findIndex((item) => item.id === id);

    if(index !== -1){
        notes.splice(index ,1)
        const response = h.response({
            status : 'success',
            message: 'Berhasil menghapus data'
        })
        response.code(200)
        return response;
    }

    const response = h.response({
        status:'fail',
        message : 'gagal untuk menghapus data'
    })
    response.code(404)
    return response
}

module.exports = { addNote ,getAllNotesHandler , getNote , updateNote , deleteNote}