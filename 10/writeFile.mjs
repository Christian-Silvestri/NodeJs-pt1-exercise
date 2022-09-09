import fs from 'fs';

fs.writeFile('./writeFile.txt', 'Hello World!', (error) => {
    return (error) ? console.error(error) : console.log('Generated text file')
})