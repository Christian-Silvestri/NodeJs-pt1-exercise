const { createServer } = require('node:http')

const createApp = createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-type', 'text/html');
    response.end('<html><body><h1>Welcome to the World Wide Web!</h1></body></html>')
})

createApp.listen(3000, () => {
    console.log('server running at http://localhost:3000')
})

module.exports = createApp