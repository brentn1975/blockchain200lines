var initHttpServer = () => {
  var app = express();
  app.use(bodyParser.json());

  app.get('/blocks', (req,res) => res.send(JSON.stringify(blockchain)));
  app.post('/mineblock', (req,res) => {
    var newBLock = generateNextBlock(req.body.data);
    addBlock(newBLock);
    broadcast(responseLatestMessage());
    console.log('block added: ' + JSON.stringify(newBlock));
    res.send();
  });
  app.get('/peers', (req, res)     => {
    res.send(sockets.map(s => s._socket._remoteAddress + ':' + s._socket.remotePort));
  });
  app.post('/addPeer', (req,res) => {
    connectTooPeers([req.body.peer]);
    res.send();
  });
});
app.listen(http_port, () => console.log('Listening http on port: ' + http_port));
};
