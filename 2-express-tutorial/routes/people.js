const express= require('express');
const router = express.Router();

const {    
    getPeople,
    createPerson,
    createPersonPostman,
    deletePerson,
    updatePerson,
} = require("../controllers/people");


//method 1:
// router.get('/', getPeople)
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id',deletePerson)

//method 2:
router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').delete(deletePerson).put(updatePerson);


module.exports = router