const express = require('express')
const cors =  require('cors')
const app = express();
const port = process.env.PORT || 3000;

//middlewear
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Erazone Server is Running') 
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

//ashikurzaman774
//UHDDPuseZ0KrTra3


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ashikurzaman774:UHDDPuseZ0KrTra3@cluster0.q0gttvx.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const erazoneCollection = client.db("ErazoneDb").collection("erazone");

    //POST DATA
    app.post('/erazone', async (req, res) =>{
        const data = req.body;
        const result = await erazoneCollection.insertOne(data);
        res.send(result);
        console.log(result);
    })
    //POST DATA END

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
