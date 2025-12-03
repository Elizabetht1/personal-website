
const net = require('net');
const url = require('url');
const http = require('http');
const { resolve } = require('path');

const server_host = '127.0.0.1'; // Or the IP address of your Netcat server
const server_port = 23333;      // The port your Netcat server is listening on

const client_url = 'http://172.26.63.194:3000';

const client = new net.Socket();

client.connect(server_port, server_host, () => {
    console.log(`Connected to Netcat server at ${server_host}:${server_port}`);
    // Send data to the Netcat server
    // client.write('Hello from Node.js client!\n');
});

// client.write("SELECT * FROM __mock_table_1;");


let global_data = []
let pushed = false;

const host = 'localhost';
const port = 3000;


client.on('data', (data) => {
  data = data.toString();
  global_data.push(data);
  pushed = true;
  console.log(pushed)
});



const server = http.createServer(async (req, res) => {

  let request_query = '';
  req.on('data', (chunk) => {request_query += chunk;});

  // bind callback
  if (req.method === 'POST') {
    const callback = async () => {
      console.log('Raw POST body:', request_query);
      client.write(request_query);
      // console.log(`sending global data: ${global_data}`);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Access-Control-Allow-Origin',client_url);
      const query_res = global_data.join(" ");
      console.log(query_res);
      res.end(query_res);
      global_data = [];
      request_query = '';}
    req.on('end',callback);
  }

  
  
});

server.listen(port, host, () => {
  console.log(`db proxy running on running at http://${host}:${port}/`);
});




// const websocket = new WebSocket(wsUri);

// let counter = 0;

// websocket.addEventListener("open", () => {
//   log("CONNECTED");
//   pingInterval = setInterval(() => {
//     log(`SENT: ping: ${counter}`);
//     websocket.send("ping");
//   }, 1000);
// });

// // const message = {
// //   iteration: counter,
// //   content: "ping",
// // };
// // websocket.send(JSON.stringify(message));

// websocket.addEventListener("message", (e) => {
//   log(`RECEIVED: ${e.data}: ${counter}`);
//   counter++;
// });


// websocket.addEventListener("close", () => {
//   log("DISCONNECTED");
//   clearInterval(pingInterval);
// });



// while (true) {
// }