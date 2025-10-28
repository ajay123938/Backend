import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from 'cors'
import loginTosalesforce from './routes/loginTosalesforce.js'
import profile from './routes/profile.js'
import attendance from './routes/Attendance.js'
import result from './routes/ExamRoutes.js'
dotenv.config();


const app = express();
app.use(express.json());
app.use(cors());
app.use("",loginTosalesforce);
app.use("",profile);
app.use("",attendance);
app.use("",result )




app.get('/Student__c', (req, res) => {
     if(!accessToken || !instanceUrl){
        res.status(401).json({error: "Unauthorized"})
        return
     }
      fetch(`${instanceUrl}/services/data/v60.0/sobjects/Student__c/a00NS00002CkW8DYAV`,{
      method: "GET",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Accept": "application/json"
      }
      })

      .then(response => response.json())
      .then(data => {res.json(data)
                    conosle.log(data)
      })
      .catch(error => console.error(error))
})



app.listen(5000, () => console.log("Server running on port 5000"));
