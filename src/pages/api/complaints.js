import { MongoClient } from 'mongodb';
import xlsToJson from 'xls-to-json';

export default async (req, res) => {
    console.log('hello')
  if (req.method === 'POST') {
    const { mongoUrl, dbName, collectionName } = process.env; // You can set these in your environment variables

    // Convert Excel to JSON
    xlsToJson(
      {
        input: req.body.file, // Assuming you're sending the XLS file in the request body
        output: null, // Use null to return the JSON data as an array
      },
      async (err, result) => {
        if (err) {
          console.error('Error converting Excel to JSON:', err);
          return res.status(500).json({ error: 'Error converting Excel to JSON' });
        }

        // Connect to MongoDB and insert data
        const client = new MongoClient(mongoUrl, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });

        try {
          await client.connect();
          const db = client.db(dbName);
          const collection = db.collection(collectionName);
          const insertResult = await collection.insertMany(result);
          res.status(200).json({ message: 'Data inserted successfully into MongoDB', insertResult });
        } catch (err) {
          console.error('Error inserting data into MongoDB:', err);
          res.status(500).json({ error: 'Error inserting data into MongoDB' });
        } finally {
          client.close();
        }
      }
    );
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
