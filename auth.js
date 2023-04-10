const express = require('express');
const router = express.Router();
const cors = require('cors');

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send('hello from the server router js');
});  

router.use(cors());



router.post('/register', async (req, res) => {
       const { firstname, lastname, email, phone, education, experience } = req.body;
       if(!firstname  || !lastname|| !email|| !phone|| !education|| !experience){
               return res.status(422).json({error:"plz fill the filled properly"})
       }
       User.findOne({ email:email })
       .then((userExist) =>{
        if(userExist){
            return res.status(422).json({ error:"Email already Exist" });
        }

        const user = new User({firstname ,lastname, email, phone, education, experience});

        user.save().then(() => {
            res.status(201).json({ message: "user registered successfully" });
        }).catch((err) => res.status(500).json({error:"Failed to registered"}));

       }).catch(err => { console.log(err); })
  });


router.get('/getUsers',cors(),async (req, res) => {
    // const { firstname, lastname, email, phone, education, experience } = req.body;
    // if(!firstname  || !lastname|| !email|| !phone|| !education|| !experience){
    //         return res.status(422).json({error:"plz fill the filled properly"})
    // }

    User.find({  })
    .then((userExist) =>{
     if(userExist){
         return res.status(200).send({ Message :"data_exists" , data : userExist });
     }
     else{
        return res.status(422).json({ error:"no_data_exists" });
     }

    //  const user = new User({firstname ,lastname, email, phone, education, experience});

    //  user.save().then(() => {
    //      res.status(201).json({ message: "user registered successfully" });
    //  }).catch((err) => res.status(500).json({error:"Failed to registered"}));

    }).catch(err => { console.log(err); })
  
   
 
});


router.delete("/register/:id", async (req,res) => {
    try{
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send();
        }
        res.status(200).send(deleteUser);
    }catch(e){
        res.status(500).send(e);
    }
})
 


router.put("/register/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const updatedUser = await User.findByIdAndUpdate(_id, req.body, {
        new: true,
      });
      res.send(updatedUser);
    } catch (e) {
      res.status(400).send(e);
    }
  });



   module.exports = router;



