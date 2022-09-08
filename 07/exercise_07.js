const figlet = require('figlet');

figlet('NodeJS', function (error, data) {
    if (error) {
        console.log('Something went wrong...');
        console.dir(error);
        return;
    }
    console.log(data);
}) 