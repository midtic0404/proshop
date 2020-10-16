import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'ChaCha',
        email: 'chacha@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Yok',
        email: 'yok@example.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users;