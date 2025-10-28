import dotenv from "dotenv";
dotenv.config();

let accessToken = null;
let instanceUrl = null;

export async function login(req, res)  {
    const { username, password } = req.body;


    try {
        // Step 1: Request Access Token
        const response = await fetch("https://login.salesforce.com/services/oauth2/token", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                grant_type: "password",
                client_id: process.env.SALESFORCE_CLIENT_ID,
                client_secret: process.env.SALESFORCE_CLIENT_SECRET,
                username: username,
                password: password + process.env.SECURITY_TOKEN,
            }),
        });

        const data = await response.json();
        console.log("Access Token:", data.access_token);
        accessToken= data.access_token,
        instanceUrl= data.instance_url,

        res.json({
            message: "Salesforce login successful",
            accessToken: data.access_token,
            instanceUrl: data.instance_url,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export  function getAccessToken() {
    return { accessToken, instanceUrl };
}


