const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

 // MongoDB connection string
 const client = new MongoClient(process.env.MONGODB_URI);

module.exports.getItems = async(req, res) => {

    try{

        // const uri = process.env.MONGODB_URI;
        await client.connect();
        console.log("Connected to MongoDB method get all items"); 
        
        // Select the database and collection
        const database = client.db("items"); // Replace with your database name
        const collection = database.collection("vehicles"); // Replace with your collection name

        //to find one document
        // const singleResult = await collection.findOne({ type: "motorbike" });
        // get all documents
        const result = await collection.find().toArray();

        if (result === null) {
            res.status(404).json({ error: 'No results found' });
            return;
        }
        res.status(200).json(result);
        await client.close();
        console.log(result);
        return;

    } 
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }

};


module.exports.getItemsById = async(req, res) => {
    
    try{

        const { id } = req.body;
        // const uri = process.env.MONGODB_URI;
        await client.connect();
        console.log("Connected to MongoDB method get all items"); 
        
        // Select the database and collection
        const database = client.db("items"); // Replace with your database name
        const collection = database.collection("vehicles"); // Replace with your collection name

        //to find one document
        const singleResult = await collection.findOne({ _id: new ObjectId(id) });
        // get all documents
        // const result = await collection.find().toArray();

        if (singleResult === null) {
            res.status(404).json({ error: 'No results found' });
            return;
        }
        res.status(200).json(singleResult);
        await client.close();
        console.log(singleResult);
        return;

    } 
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }

};