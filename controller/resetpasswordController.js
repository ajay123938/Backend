import fetch from 'node-fetch'
export default async function resetPassword(req,res){

    fetch('http://login.salesforce.com',           
      {  method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                grant_type: "password",
                client_id: process.env.SALESFORCE_CLIENT_ID,
                client_secret: process.env.SALESFORCE_CLIENT_SECRET,
                username: username,
                password: process.env.PASSWORD + process.env.SECURITY_TOKEN,})
            })
     .then( response => response.json())
     .then(data => {res.json(data)
                   console.log(data)

                   if(data.access_token)
                   {
                    
                    

                   }
     })
     .catch(error =>console.log(error))

}
