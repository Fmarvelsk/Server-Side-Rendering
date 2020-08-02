import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';

const server = express();
server.use(express.static('./dist'));

server.get('/', (req, res) => {
  const initialMarkup = ReactDOMServer.renderToString(<App />);

  res.send(`
    <html>
      <head>
        <title>A&PC</title>
        <link rel="stylesheet" href="./App.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

      </head>
      <body>
        <div id="root">${initialMarkup}</div>
        <script src="./main.js"></script>
       
      </body>
    </html>
  `)
});

server.listen(4000, () => console.log(`Server is running on 4000`));
