const path = require('path');
var fs = require('fs')
const nReadlines = require('n-readlines');
//joining path of directory 
const directoryPath = path.join(__dirname, 'db');
var html_loop = "";

function linesearch(line,find,prevalue) {
    //console.log("linefind: "+line.lastIndexOf(find+" "));
    //console.log("truefalst: "+(line.lastIndexOf(find+" ") >= 0));
    if (line.lastIndexOf(find+" ") >= 0){
        //console.log(line.toString().split(find+" ")[1]);
        return line.toString().split(find+" ")[1];
      }else{
        return prevalue;
      }
  }

//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
          const broadbandLines = new nReadlines('db/'+file);
          let line;
          let lineNumber = 1;
          while (line = broadbandLines.next()) {
              //console.log(`Line ${lineNumber} has: ${line.toString('ascii')}`);
              var profile_title = linesearch(line,'title',profile_title);
              //console.log("profile_title: "+profile_title);
              var profile_copy_link = linesearch(line,'author',profile_copy_link);
              if (typeof profile_copy_link !== 'undefined' && profile_copy_link !== null){
                profile_copy_link = profile_copy_link.split(" ")[0];
                var profile_copy_name = linesearch(line,profile_copy_link,profile_copy_name);
                //console.log("profile_copy_name: "+profile_copy_name);
              }
              var profile_image = linesearch(line,'image',profile_image);
              var profile_description = linesearch(line,'profile_description',profile_description);
              lineNumber++;
          }
          
 //         console.log("profile_title: "+profile_title);
 //         console.log("profile_copy_link: "+profile_copy_link);
 //         console.log("profile_copy_name: "+profile_copy_name);
 //         console.log("profile_image: "+profile_image);
 //         console.log("profile_description: "+profile_description);
 //         console.log('end of file.');
 //         const used = process.memoryUsage().heapUsed / 1024 / 1024;
 //         console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
        fs.readFile("index_loop.scroll", 'utf8', function (err,data) {
            if (err) {
              return console.log(err);
            }
           
            var result = data.replace(/<profile_title>/g, profile_title);
            var result = result.replace(/<profile_copy_link>/g, profile_copy_link);
            var result = result.replace(/<profile_copy_name>/g, profile_copy_name);
            var result = result.replace(/<profile_image>/g, profile_image);
            var result = result.replace(/<profile_link>/g, 'pages/'+file.split(".")[0]+'.html');
            console.log(file.split(".")[0])
            html_loop = html_loop + result;  
            //console.log(html_loop);
          });
    });
    fs.readFile("index.scroll", 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
    
       var finalresult = data.replace(/<profile_loop>/g, html_loop);

        fs.writeFile('index.html', finalresult, 'utf8', function (err) {
           if (err) return console.log(err);
        });
      });
});

