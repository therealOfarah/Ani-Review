import { Profile } from "../models/profile.js";

function index(req, res) {
  Profile.find({})
    .then(profiles => {
      res.render('profiles/index', {
        profiles,
        title: "Profile"
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/`)
    })
}

function show(req, res) {
  Profile.findById(req.params.id)
    .populate('anime')
    .then(profile => {
      res.render('profiles/show', {
        profile,
        title: "profile"
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/`)
    })
}

function edit(req, res) {
  Profile.findById(req.params.id)
    .then(profile => {
      res.render('profiles/edit', {
        profile,
        title: "Edit Bio"
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/`)
    })
}

function update(req, res) {
  Profile.findById(req.params.id)
    .then(profile => {
      if (profile.equals(req.user.profile._id)) {
        for (const key in req.body) {
          profile[key] = req.body[key]
        }
        profile.save().then(savedProfile => {
          res.redirect(`/profiles/${profile._id}`)
        });
      } else {
        res.redirect('/')
      }
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/`)
    })
}

function deleteReview(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    if 
      (profile.owner.equals(req.user.profile._id)){
        profile.reviews.remove({_id: req.params.reviewId})
        profile.save()
        .then(()=>{
          res.redirect(`/profiles/${profile._id}`)
        })
      } else {
        throw new Error ('NOT AUTHORIZED')
      }
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
}


function create(req, res) {
  Profile.findById(req.params.id)
    .then(profile => {
      profile.reviews.push(req.body)
      profile.save()
        .then(() => {
          res.redirect(`/profiles/${profile._id}`)
        })
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
}

export {
  show,
  edit,
  update,
  index,
  deleteReview as delete,
  create
}