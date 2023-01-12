// get the connect file from the database folder 
const mongodb = require('../db/connect');

// a function that will return the db 
async function getAll(request, response) {
    // getting the information from the mongo db site 
    const result = await mongodb.getDb().db("cse341").collection("contact").find()

    result.toArray().then(list => {
        response.setHeader("Content-Type", "application/json")
        response.status(200).json(list)
    })

}

// solution from instructor 
// const getAll = async (req, res, next) => {
//     const result = await mongodb.getDb().db().collection('contacts').find();
//     result.toArray().then((lists) => {
//       res.setHeader('Content-Type', 'application/json');
//       res.status(200).json(lists);
//     });
//   };

module.exports = {
    getAll
}