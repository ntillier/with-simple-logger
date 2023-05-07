const createLogger = require('./index.js');

const logger = createLogger('{{ user.name }} has {{ user.friends.length }} friends. His best friend is {{ user.friends.0.name }}.');

console.log(
    logger({
        user: {
            name: 'Bob',
            friends: [
                {
                    name: 'John Doe'
                },
                {
                    name: 'Johnny Doe'
                }
            ]
        }
    })
);