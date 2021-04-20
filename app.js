const fs = require('fs');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('.'))

// write split config from template
var template = fs.readFileSync('split_config.js.template', 'utf8');
fs.writeFileSync(
    'split_config.js', 
    template.replace('{{SPLIT_AUTH_KEY}}', process.env.SPLIT_AUTH_KEY)
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})