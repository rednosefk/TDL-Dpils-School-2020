// // console.log('Hello world');

// // // global objects

// // setTimeout(() => {                      // holds log for 5 seconds. 2 parameters
// //     console.log('Stop interval');
// // }, 5000);

// // console.log('I am out of sync');

// // console.log(__dirname);
// // console.log(__filename);
// // console.log(__dirname, __filename);
// // //

// // // const interval = setInterval(() => {        // runs the code in 2 sec interval. ctrl C to stop
// // //     console.log('in the interval')
// // // }, 2000);

// // const humans = require('./people');
// // const {people, ages} = require('./people');

// // console.log(ages.length, people.length);
// // //

// // const os = require('os');       // oper syst info
// // console.log(os);

// const fs = require('fs');

// // reading files

// fs.readFile('./docs/blog1.txt', (err, data) => {    // two arguments 
//     if (err) {
//         console.log(err);
//     } else
//         console.log(data.toString());
// });

// // writing files

// fs.writeFile('./docs/blog1.txt', 'Hello world', () => {     // rewrits content in blog1
//     console.log('File writtwn');
// });

// fs.writeFile('./docs/blog2.txt', 'Hello again', () => {     // creats new text file with text
//     console.log('File written');
// })


// // directories

// // if (!fs.existsSync('./assets')) {                // if doesnt exist we run function, if exists will run 
// //     fs.mkdir('./assets', (error) => {           // creates folder assets; if run again error
// //         if (error) {
// //             console.log(error);
// //         } else {
// //             console.log('folder created');
// //         }
// //     })
// // } else {                                        // else statement that deletes folder if it already exists
// //     fs.rmdir('./assets', (error) => {
// //         if (error) {
// //             console.log(error);
// //         } else {
// //             console.log('folder removed');
// //         }
// //     });
// // }

// // delet files

// if (fs.existsSync('./docs/deleteme.txt')) {         // deletes existing file
//     fs.unlink('./docs/deleteme.txt', (error) => {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('file deleted');
//         }
//     })
// }

// // create file with node tmpPassword.txt write some password
// // after delete 


// if (!fs.existsSync('./docs/tmpPassword.txt')) {
//     fs.writeFile('./docs/tmpPassword.txt', 'password', () => {     
//         console.log('File created');
//     })
// } else {
//     fs.unlink('./docs/tmpPassword.txt', (error) => {
//         if (error) {
//             console.log(error);
//         } 
//     });
// }

// // streams and buffers

// //const fs = require('fs');

// const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});
// const writeStream = fs.createWriteStream('./docs/blog4.txt')

// readStream.on('data', (buffer) => {
//     console.log('------- NEW CHUNK -------');
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(buffer);
// });


module.exports = {
    sayHello() {
        return 'hello';
    },
    addNumbers(value1, value2) {
        return value1 + value2;
    }
}

//add another function addNumbers. Accepts (value1, value2). Return value1+value2. Write test check if you pass 2 and 4 function returns 6.

