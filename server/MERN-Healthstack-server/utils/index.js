
import { createClient } from 'redis';

const client = createClient({
    password: 'oXzAuXZ5ff4S0MsxJOkKlwTYqYuTqQ6g',
    socket: {
        host: 'redis-14242.c212.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 14242
    }
});

client.connect()
.then(() => {
    console.log('Redis connected')
})
.catch((err) => {
    console.log(err.message)
})


// client.disconnect()
