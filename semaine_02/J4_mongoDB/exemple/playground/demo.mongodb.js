
// Il se positionne sur la BDD "fsd53"
// Si elle n'existe pas il va créé une BDD "fsd53"
use('fsd53');


// Pour créer une collection
// db.createCollection("articles");

// Pour créer UN document de façon native
// db.articles.insertOne({
//     title: "Tailwind CSS",
//     author: "Seyedpouya",
//     categories:["front", "css", "ui","design"]
// });

// Comment récupérer tous les documents

// db.articles.find({});

// // Comment récupérer UN document

// db.articles.findOne({author: "Armance"})

//  Pour supprimer  UN document
// db.articles.deleteOne({author: "Sam"});

// Pour supprimer tous les documents
// db.articles.deleteMany({});

// Pour supprimer une collection
// db.articles.drop()

// Pour supprimer une BDD
// db.dropDatabase()

