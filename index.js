const express = require("express");
const cors = require("cors");
const { db: destinations } = require("./DB");
const { getRandomId } = require("./HELPS");

const server = express();

server.use(express.json());
server.use(cors());

// CRUD
// CREATE => POST
server.post("/destinations", (req, res) => {
  const _id = getRandomId();
  const { name, location, photo, description } = req.body;

  destinations[_id] = { _id, name, location, photo, description };

  res.send({ status: "success" });
});

// READ => GET
server.get("/destinations", (req, res) => {
  if (req.query._id) {
    const { _id } = req.query;
    res.send(destinations[_id]);
  } else {
    res.send(destinations);
  }
});

// UPDATE => PUT
server.put("/destinations", (req, res) => {
  const { _id } = req.query; //const _id = req.query._id;

  if (_id === undefined) {
    return res.status(400).send({ message: "?_id required" });
  }
  if (destinations[_id] === undefined) {
    return res.status(410).send({ message: "no destination with your id" });
  }
  const dest = destinations[_id];
  const { name, location, photo, description } = req.body;
  if (name) {
    dest.name = name;
    console.log("name");
  }
  if (location) {
    dest.location = location;
    console.log("location");
  }
  if (photo) {
    dest.name = photo;
    console.log("photo");
  }
  if (description) {
    dest.location = description;
    console.log("description");
  }
  res.send(destinations);
});

// update

// DELETE => DELETE

server.delete("/destinations", (req, res) => {
  const { _id } = req.query; //const _id = req.query._id;

  if (_id === undefined) {
    return res.status(400).send({ message: "?_id required" });
  }
  if (destinations[_id] === undefined) {
    return res.status(410).send({ message: "no destination with your id" });
  }
  console.log(destinations[_id]);
  delete destinations[_id];
  res.send(destinations);

  // go find the object with that id and delete from the array
});
const PORT = process.env.PORT || 3000;
//console.log(process.env.PORT);

server.listen(PORT, () => {
  console.log("Server listening");
});

// const express = require('express')
// const cors = require("cors")

// const server = express()
// server.use(cors())
// server.use(express.json()) //tell server to use express json! MUSH Have

// const destinations = [
//         {
//         _id:"1234",
//         name: "Space Needle",
//         location: "Seattle, WA",
//         url: "https://images.unsplash.com/photo-1542223616-740d5dff7f56?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNDU1NTB8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMG5lZWRsZXxlbnwwfHx8fDE2MjYyOTA2MjY&ixlib=rb-1.2.1&q=85",
//         Description: "The needle"
//         },
//         {
//         _id:"2234",
//         name: "Mountain Rainier",
//         location: "WA",
//         url: "https://images.unsplash.com/photo-1513308024566-613b473a5e94?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNDU1NTB8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHJhaW5pZXJ8ZW58MHx8fHwxNjI2MjkwNjc4&ixlib=rb-1.2.1&q=85",
//         Description: "Beautiful"
//         }
//     ]
// //CRUD
// //creat = post
// server.post("/destinations", (req, res) => {
//     destinations.push(req.body);
//     console.log(req.body);

//     res.send({status:"success"});
// });

// //read = get
// server.get("/destinations", (req, res) => {
//     res.send(destinations);
// });

// //update = put
// server.put("/destinations", (req, res) => {
//     const _id = req.query._id;

//     destinations._id.location = req.body.location
// });

// server.delete("/destinations", (req, res) => {
//     const {_id} = req.query;

//     destinations._id.location = req.body.location
// });

// server.listen(3000, () =>{
//     console.log("server listening");
// })
