const https = require('https');

const icons = ['react', 'excalidraw', 'lovable', 'postman', 'visualstudiocode', 'postgresql', 'cypress', 'linux'];

async function fetchIcon(name) {
    return new Promise((resolve) => {
        https.get('https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/' + name + '.svg', (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                if (res.statusCode === 200) {
                    const match = data.match(/<path\s+d="([^"]+)"/);
                    resolve({ name, path: match ? match[1] : 'NOT FOUND', full: data });
                } else {
                    resolve({ name, path: 'NOT FOUND (' + res.statusCode + ')' });
                }
            });
        }).on('error', () => resolve({ name, path: 'ERROR' }));
    });
}

Promise.all(icons.map(fetchIcon)).then(results => {
    results.forEach(r => console.log(r.name + '|||' + r.path));
});
