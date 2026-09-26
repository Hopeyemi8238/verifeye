async function verifyAll() {
    try {
        console.log('Testing endpoints...');
        const resHtml = await fetch('http://localhost:3000/');
        console.log('GET / status:', resHtml.status);
        const html = await resHtml.text();
        console.log('HTML size:', html.length);
        console.log('Has view-command-center:', html.includes('view-command-center'));
        console.log('Has view-radar-feed:', html.includes('view-radar-feed'));
        console.log('Has view-moderator-desk:', html.includes('view-moderator-desk'));
        console.log('Has view-admin-analytics:', html.includes('view-admin-analytics'));
        console.log('Has view-design-system:', html.includes('view-design-system'));
        console.log('Has theme toggle:', html.includes('theme-toggle-btn'));

        const resCss = await fetch('http://localhost:3000/style.css');
        console.log('GET /style.css status:', resCss.status);
        const css = await resCss.text();
        console.log('CSS size:', css.length);
        console.log('Has dark theme:', css.includes('[data-theme="dark"]'));

        const resJs = await fetch('http://localhost:3000/app.js');
        console.log('GET /app.js status:', resJs.status);
        const js = await resJs.text();
        console.log('JS size:', js.length);

        // Test API verification
        const apiRes = await fetch('http://localhost:3000/api/verify', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                type: 'text',
                claim: 'Nigeria gained independence in 2005'
            })
        });
        const data = await apiRes.json();
        console.log('POST /api/verify status:', apiRes.status, 'truthStatus:', data.truthStatus);
    } catch(e) {
        console.error('Test error:', e.message);
    }
}
verifyAll();
