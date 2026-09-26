async function testCss() {
    const res = await fetch('http://localhost:3000/style.css');
    console.log('style.css HTTP status:', res.status);
    const css = await res.text();
    console.log('Contains luminous white theme:', css.includes('Ultra-Premium Luminous White Theme'));
    console.log('Contains --bg-primary: #FFFFFF:', css.includes('--bg-primary: #FFFFFF'));
}

testCss();
