const express= require('express');
const router= express.Router();

//item model
const Item= require('../../models/Items');

//#route GET api/items
//@desc Get All Items
//@ccess Punlic 
router.get('/' , (req, res) => {
Item.find()
.sort({date: -1})
.then(items => res.json(items))
});


//#route post api/items
//@desc create a post
//@ccess Punlic 
router.post('/' , (req, res) => {
   const newItem= new Item({
       name: req.body.name
   });
   newItem.save().then(item => res.json(item));
    });
    

  //#route delete api/items
//@desc delete a item
//@ccess Punlic 
router.delete('/' , (req, res) => {
Item.findById(rep.params.id)
.then(item => item.remove().then (() => res.json({success: true})));
.catch(err => res.status(404).json({success: false}));   
     });

  


module.exports router;