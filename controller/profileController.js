import {getAccessToken} from './loginController.js'

export default async function fetchProfileData(req,res){
    const { accessToken,instanceUrl } =   getAccessToken();

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
                        console.log(data)
          })
          .catch(error => console.error(error))

}
