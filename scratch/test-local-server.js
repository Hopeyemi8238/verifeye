async function testServer() {
    try {
        const res = await fetch('http://localhost:3000');
        console.log('GET / status:', res.status);
        const text = await res.text();
        console.log('Response preview:', text.substring(0, 200));

        // Test POST /api/verify
        const verifyRes = await fetch('http://localhost:3000/api/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                type: 'text',
                claim: 'Nigeria gained independence in 2005'
            })
        });
        console.log('POST /api/verify status:', verifyRes.status);
        const verifyData = await verifyRes.json();
        console.log('POST /api/verify data:', JSON.stringify(verifyData, null, 2).substring(0, 300));
    } catch (err) {
        console.error('Test server error:', err.message);
    }
}

testServer();
