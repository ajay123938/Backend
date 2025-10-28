import { getAccessToken } from "./loginController.js";
export default function result(req,res){
 
  const {accessToken,instanceUrl}  = getAccessToken();
    if(!accessToken)
       return;

     const studentId = 'a00NS00001zn6qEYAQ';
    const query = `SELECT Id,Mark__c,Percent__c,Grade__c,Enrollment__r.Course_Name__c,Enrollment__r.Student_Name__c FROM Exam__c WHERE Enrollment__r.Student__c='${studentId}'`;

 
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
