// MongoDB Commands
// - Show Databases:

 {
    show dbs
  }
  
  // - Switch to a Database:
  
  {
    use database_name
  }
  
  // - Show Collections:
  
  {
    show collections
  }
  
  // CRUD Operations
  
  // Create (Insert)
  
  // Insert a Single Document:
  
  {
    db.collection.insertOne({document})
  }
  
  // Example:
  
  {
    db.users.insertOne({name: "John Doe", age: 28, occupation: "Engineer"})
  }
  
  // Insert Multiple Documents:
  
  {
    db.collection.insertMany([{document1}, {document2}, ...])
  }
  
  // Example:
  
  {
    db.users.insertMany([    {name: "Alice", age: 30, occupation: "Teacher"},    {name: "Bob", age: 25, occupation: "Designer"}  ])
  }
  
  // Read (Query)
  // Find All Documents:
  
  {
    db.collection.find()
  }
  
  // Example:
  
  {
    db.users.find()
  }
  
  // Find Documents with Query Filters:
  
  {
    db.collection.find({field: value})
  }
  
  // Example:
  
  {
    db.users.find({age: 28})
  }
  
  // Find a Single Document:
  
  {
    db.collection.findOne({field: value})
  }
  
  // Example:
  
  {
    db.users.findOne({name: "John Doe"})
  }
  
  // Projection (Select Specific Fields):
  
  {
    db.collection.find({query}, {field1: 1, field2: 1})
  }
  
  // Example:
  
  {
    db.users.find({age: 28}, {name: 1, occupation: 1})
  }
  
  // Update
  // Update a Single Document:
  
  {
    db.collection.updateOne({filter}, {$set: {field1: value1, field2: value2}})
  }
  
  // Example:
  
 // Example:

{
    db.users.updateOne({name: "John Doe"}, {$set: {age: 29}})
  }
  
  // Update Multiple Documents:
  
  {
    db.collection.updateMany({filter}, {$set: {field1: value1}})
  }
  
  // Example:
  
  {
    db.users.updateMany({occupation: "Engineer"}, {$set: {age: 30}})
  }
  
  // Replace a Document:
  
  {
    db.collection.replaceOne({filter}, {new_document})
  }
  
  // Example:
  
  {
    db.users.replaceOne({name: "John Doe"}, {name: "John Doe", age: 29, occupation: "Manager"})
  }
  
  // Delete
  // Delete a Single Document:
  
  {
    db.collection.deleteOne({filter})
  }
  
  // Example:
  
  {
    db.users.deleteOne({name: "John Doe"})
  }
  
  // Delete Multiple Documents:
  
  {
    db.collection.deleteMany({filter})
  }
  
  // Example:
  
  {
    db.users.deleteMany({occupation: "Engineer"})
  }
  
  // Drop a Collection:
  
  {
    db.collection.drop()
  }
  
  // Example:
  
  {
    db.users.drop()
  }
  