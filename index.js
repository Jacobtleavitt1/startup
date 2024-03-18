const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const cfg = require('./dbConfig.json');

const url = `mongodb+srv://${cfg.username}:${cfg.password}@${cfg.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');

client
 .connect()
 .then(() => db.command({ ping: 1 }))
 .then(() => console.log(`Connected`))
 .catch((ex) => {
   console.log(`Error with ${url} because ${ex.message}`);
   process.exit(1);
 });

const schedulesCollection = db.collection('schedules');
const passwordsCollection = db.collection('passwords');

let passwords = new Map();
let schedules = new Map();

const schedulesCursor = schedulesCollection.find();
const schedulesResult = await schedulesCursor.toArray();
schedules.Result.forEach((i) => schedules[i.username] = i.schedule);

const passwordsCursor = passwordsCollection.find();
const passwordsResult = await passwordsCursor.toArray();
passwordsResult.forEach((i) => passwords[i.username] = i.password);

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Dump info
apiRouter.get('/infodump', (_req, res) => {
    console.log(schedules);
    console.log(passwords);
    res.status(200).send({
        message: schedules + passwords,
    });
});

// Get Schedule
apiRouter.get('/schedule', (_req, res) => {
    let username = _req.get("username");
    let password = _req.get("password");
    console.log(username, password);

    if (passwords[username] === password) {
        try {
            mySchedule = schedules.get(username);
            res.send(mySchedule);
        } catch {
            // username wrong or no schedule
            res.status(512).send({
                message: 'Request not found in database. The requested schedule was not found in the database.'
            });
        }
    }
    else {
        // username or password is incorrect
        res.status(401).send({
            message: 'Unauthorized. Incorect username or password.'
        });
    }
});

apiRouter.post('/user', (_req, res) => {
    let username = _req.get("username");
    let password = _req.get("password");
    console.log(username, password);

    passwords[username] = password;
    passwordsCollection.insertOne({ username: `${username}`, password: `${password}` })
    
    res.status(200).send({
        message: "OK. User added.",
    });
});

// Submit Schedule
apiRouter.post('/schedule', (_req, res) => {
    let username = _req.get("username");
    let password = _req.get("password");

    if (passwords[username] === password) {
        schedules.set(username, _req.get("schedule"));
        schedulesCollection.insertOne({ username: `${username}`, schedule: `${_req.get("schedule")}` });
        res.status(200).send({
            message: 'OK. Database updated.'
        });
    }
    else {
        // username or password is incorrect
        res.status(401).send({
            message: 'Unauthorized. Incorect username or password.'
        });
    }
});

apiRouter.delete('/schedule', (_req, res) => {
    console.log("DELETE /schedule")
    let username = _req.get("username");
    let password = _req.get("password");

    if (passwords[username] === password) {
        schedules.set(username, null);
        schedulesCollection.deleteOne({ username: `${username}` })
        res.status(200).send({
            message: 'OK. Schedule deleted.'
        })
    }
    else {
        // username or password is incorrect
        res.status(401).send({
            message: 'Unauthorized. Incorect username or password.'
        });
    }
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});