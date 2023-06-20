Welcome to FishWG!

Before running the application, please follow the following steps:

1. Open MongoDB Compass and navigate to 'New connection'
2. Enter 'mongodb://localhost:27017' into URI field and click 'Connect'
3. Click the '+' symbol next to 'Databases' to create a new DB called 'FishWG_DB' with a collection name 'Fish' and another one 
   called "Tank" 
4. In the 'Fish'-collection click on 'Add Data' and insert the 'FishWG_DB.fishForTest.json'
5. In IntelliJ under 'Edit Configuration' create an Environmental Variable MONGO_DB_URI=mongodb://localhost:27017/FishWG_DB
 