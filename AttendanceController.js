import { getAccessToken } from "./loginController.js";

export default async function Attendance(req,res){

    const {accessToken,instanceUrl}  = getAccessToken();
    if(!accessToken)
       return;
    const studentId = 'a00NS00001zn6qEYAQ';
    const query = `SELECT Id,Course__r.Name,Total_Present_Days__c,Total_Present_Percent__c,Total_Working_Day__r.Working_Days__c FROM Enrollment__c WHERE Student__c='${studentId}'`;

 
fetch(`${instanceUrl}/services/data/v56.0/query/?q=${encodeURIComponent(query)}`, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => 
  {res.json(data)
    console.log(data)})
.catch(err => console.error(err));


}