const { Router }=require('express');
const controller=require('./controller');

const router=Router();
router.get('/',controller.getUser);
//router.post('/add',controller.add);
router.delete('/delete/:email',controller.del);
//router.put('/update/:id',controller.update);
module.exports=router;