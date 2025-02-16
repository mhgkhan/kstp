
const EnvObjs = Object.freeze({
    DBURI: process.env.MONGODB_URI,
    CANDIDATESECRETKEY: process.env.CANDIDATE_SECRET_KEY,
    apiDOMAIN: process.env.NODE_ENV == "production"?process.env.apiDOMAIN : "http://localhost:3000/"
})

export default EnvObjs;
