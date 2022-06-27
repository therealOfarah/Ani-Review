import { Profile } from "../models/profile.js";

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles,
      title: "Profile"
    })
  })
}

function show (req,res){
  Profile.findById(req.params.id)
  .then(profile =>{
    res.render('profiles/show',{
      profile,
      title:"profile"
    })
  })
}

function edit(req, res){
  Profile.findById(req.params.id)
  .then(profile => {
    res.render('profiles/edit',{
      profile,
      title:"Edit Bio"
    })
  })
}

function update(req, res) {
  Profile.findById(req.params.id)
  
  .then(profile => {
    if (profile.equals(req.user.profile._id)) {
      profile(req.body)
      profile.updateOne(req.body, {new: true})
      profile.save()
      .then(()=> {
        res.redirect(`/profiles/${profile._id}`)
      })
    } else {
      throw new Error ('NOT AUTHORIZED')
    }
    console.log(profile)
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/`)
  })
}

export{
  show,
  edit,
  update,
  index
}