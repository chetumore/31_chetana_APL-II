const dns = require('dns');

// Asynchronous DNS lookup
dns.lookup('www.example.com', (err, address, family) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Address:', address);
    console.log('Family:', family);
});

// Resolve a domain name to IP addresses (Promise-based)
dns.promises.resolve('www.example.com')
    .then((addresses) => {
        console.log('Resolved addresses:', addresses);
    })
    .catch((err) => {
        console.error('Error:', err);
    });

// Reverse DNS lookup for known IPs
const ipsToReverse = ['8.8.8.8', '1.1.1.1', '93.184.215.14'];

ipsToReverse.forEach((ip) => {
    dns.reverse(ip, (err, hostnames) => {
        if (err) {
            console.error(`Reverse DNS lookup error for ${ip}:`, err.message);
            return;
        }
        console.log(`Hostnames for ${ip}:`, hostnames);
    });
});
