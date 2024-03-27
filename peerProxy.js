const { WebSocketServer } = require('ws');
const uuid = require('uuid');

async function send1Message(ws) {
  function sendMessage(message) {
    ws.send(JSON.stringify({message: message}));
  }

  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // months start at 0
  let dd = today.getDate();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let mer = "am"
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  if (hours > 12) mer = "pm";
  hours = hours % 12;
  if (minutes < 10) minutes = '0' + minutes;
  if (seconds < 10) seconds = '0' + seconds;
  const timestamp = '\t\t\t(' + mm + '/' + dd + '/' + yyyy + ' ' + hours + ':' + minutes + ':' + seconds + mer + ')';

      var MAX = 10;
      var rand = Math.floor((Math.random() * MAX) + 1);
      if (rand == 1) {
          sendMessage("You suck!" + timestamp);
      }
      else if (rand == 2) {
          sendMessage("You can't only do emails all day" + timestamp);
      }
      else if (rand == 3) {
          sendMessage("I hate—so much—the person you chose to be." + timestamp);
      }
      else if (rand == 4) {
          sendMessage("You're fired!" + timestamp);
      }
      else if (rand == 5) {
          sendMessage("Great job!" + timestamp);
      }
      else if (rand == 6) {
          sendMessage("You're the best" + timestamp);
      }
      else if (rand == 7) {
          sendMessage("I secretley wish you were my child" + timestamp);
      }
      else if (rand == 8) {
          sendMessage("I like the way you work it" + timestamp);
      }
      else if (rand == 9) {
          sendMessage("You are our best employee" + timestamp);
      }
      else if (rand == 10) {
          sendMessage("Will you marry me?" + timestamp);
      }
}

function peerProxy(httpServer) {
  // Create a websocket object
  const wss = new WebSocketServer({ noServer: true });

  // Handle the protocol upgrade from HTTP to WebSocket
  httpServer.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, function done(ws) {
      wss.emit('connection', ws, request);
    });
  });

  // Keep track of all the connections so we can forward messages
  let connections = [];

  wss.on('connection', (ws) => {
    const connection = { id: uuid.v4(), alive: true, ws: ws };
    connections.push(connection);

    // Forward messages to everyone except the sender
    ws.on('message', function message(data) {
      connections.forEach((c) => {
        if (c.id !== connection.id) {
          c.ws.send(data);
        }
      });
    });

    // Remove the closed connection so we don't try to forward anymore
    ws.on('close', () => {
      const pos = connections.findIndex((o, i) => o.id === connection.id);

      if (pos >= 0) {
        connections.splice(pos, 1);
      }
    });

    // Respond to pong messages by marking the connection alive
    ws.on('pong', () => {
      connection.alive = true;
    });
  });

  // Keep active connections alive
  setInterval(() => {
    connections.forEach((c) => {
      // Kill any connection that didn't respond to the ping last time
      if (!c.alive) {
        c.ws.terminate();
      } else {
        c.alive = false;
        c.ws.ping(); 
      }
    });
  }, 10000);

  setInterval(() => {
    connections.forEach((c) => {
      send1Message(c.ws);
    });
  }, 3000)
}

module.exports = { peerProxy };
