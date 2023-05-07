# with-simple-logger

A lightweight and easy-to-use logger log formatter for node.js

**Install:**
```
npm i with-simple-logger
```

**Use:**
```js
const createLogger = require('with-simple-logger');

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
```