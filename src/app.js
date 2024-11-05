const express = require('express');
const app = express();
const apiRoutes = require('./routers');
const initializers = require('./initializers');
const sequelize = require('./database');
const config = require('./config/config');
const PORT = process.env.PORT || config.server.port;

async function syncDatabase() {
    await sequelize.sync();
    console.log('Database & tables created!');
}

syncDatabase();

app.use(express.json());

app.use('/', apiRoutes);

app.get('/touch', (req, res) => {
    res.send(`This is ${config.server.name}.`);
});

app.listen(PORT, '0.0.0.0', () => {
    const init = async () => {
        for (const p in initializers)
            await initializers[p].init();
    }
    setTimeout(init, 10000);
    console.log(`Server is running on http://localhost:${PORT}`);
});
