const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// Catch-all route for SPA behavior - mandatory for Express 5.x wildcards
app.get('(.*)', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`UI Prototype running at http://localhost:${PORT}`);
});