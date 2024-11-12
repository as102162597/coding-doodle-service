const config = process.env.CONFIG || "default";

const configurations = {
    default: {
        dbms: {
            dialect:    'mysql',
            host:       'localhost',
            port:       3306,
            username:   'root',
            password:   '0000',
            database:   'coding_doodle'
        },
        server: {
            name: 'coding-doodle-server',
            port: 3000
        }
    }
};

module.exports = configurations[config];
