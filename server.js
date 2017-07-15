const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3333;


app.get('/', (req, res) => {
  console.log("HELLOOO ", req.path);
  res.status(200).sendFile(path.join(__dirname, 'browser/index.html'))
});

app.get('/env', (req, res) => {
  let env = process.argv[2] === 'local' ? `localhost:3000` : 'http://nickpalenserve.herokuap.com';
  res.status(200).json({env});
});

// app.use('/lib', express.static(path.join(__dirname, 'lib')));

app.staticSubDirs = function(...paths){

  paths.forEach(_path => this.use('/' + _path, express.static(path.join(__dirname, _path))))
};


app.staticSubDirs('lib', 'js', 'directives', 'views', 'bower_components', 'node_modules', 'browser', 'assets');

app.use((req, res )=> res.status(307).sendFile(path.join(__dirname, 'browser/index.html')));

// app.use(function(req, res, next, err){
//   // console.log("error????_? ", err)
//   next()
// });

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});