const fs = require('fs');
const path = require('path');

const cssContent = `/* ==========================================================================
   VerifEye Design System — Ultra-Premium Luminous White Theme (AIDF 2026)
   Fully Responsive for Desktop, Tablet, and Mobile (iOS / Android)
   ========================================================================== */

:root {
    /* Color Tokens - Luminous Light Palette */
    --bg-primary: #FFFFFF;
    --bg-secondary: #F8FAFC;
    --bg-tertiary: #F1F5F9;
    --bg-card: #FFFFFF;
    --bg-card-hover: #F8FAFC;
    --bg-input: #FFFFFF;
    
    /* Brand Accent - Royal Electric Sapphire to Vivid Sky */
    --accent-blue-deep: #1E40AF;
    --accent-blue: #2563EB;
    --accent-cyan: #0284C7;
    --accent-gradient: linear-gradient(135deg, #1E40AF 0%, #2563EB 50%, #0284C7 100%);
    --accent-gradient-hover: linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%);
    --accent-glow: rgba(37, 99, 235, 0.16);
    --accent-subtle: rgba(37, 99, 235, 0.08);

    /* Semantic Verdict Colors (High-Contrast Light Mode) */
    --color-verified: #059669;
    --color-verified-text: #065F46;
    --color-verified-bg: #ECFDF5;
    --color-verified-border: #A7F3D0;
    --color-verified-glow: rgba(16, 185, 129, 0.15);

    --color-false: #DC2626;
    --color-false-text: #991B1B;
    --color-false-bg: #FEF2F2;
    --color-false-border: #FECACA;
    --color-false-glow: rgba(239, 68, 68, 0.15);

    --color-scam: #E11D48;
    --color-scam-text: #9F1239;
    --color-scam-bg: #FFF1F2;
    --color-scam-border: #FECDD3;

    --color-warning: #D97706;
    --color-warning-text: #92400E;
    --color-warning-bg: #FFFBEB;
    --color-warning-border: #FDE68A;

    /* Typography & Neutral Colors */
    --text-primary: #0F172A;     /* Slate 900 */
    --text-secondary: #334155;   /* Slate 700 */
    --text-muted: #64748B;       /* Slate 500 */
    --text-light: #94A3B8;       /* Slate 400 */
    --text-accent: #2563EB;

    /* Borders & Dividers */
    --border-subtle: #F1F5F9;
    --border-light: #E2E8F0;
    --border-medium: #CBD5E1;
    --border-accent: rgba(37, 99, 235, 0.3);

    /* Typography Families */
    --font-heading: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --font-body: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

    /* Shadows & Radii */
    --radius-sm: 8px;
    --radius-md: 14px;
    --radius-lg: 20px;
    --radius-xl: 28px;
    --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.04);
    --shadow-sm: 0 2px 4px 0 rgba(15, 23, 42, 0.05);
    --shadow-md: 0 4px 12px -2px rgba(15, 23, 42, 0.07), 0 2px 4px -1px rgba(15, 23, 42, 0.04);
    --shadow-lg: 0 12px 30px -4px rgba(15, 23, 42, 0.08), 0 4px 8px -2px rgba(15, 23, 42, 0.04);
    --shadow-xl: 0 20px 40px -6px rgba(15, 23, 42, 0.1), 0 1px 2px 0 rgba(15, 23, 42, 0.05);
    --shadow-glow: 0 0 35px -5px rgba(37, 99, 235, 0.18);
}

/* ==========================================================================
   Base & Reset
   ========================================================================== */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
    text-size-adjust: 100%;
}

body {
    background-color: var(--bg-secondary);
    background-image: 
        radial-gradient(at 10% 10%, rgba(238, 242, 255, 0.7) 0px, transparent 50%),
        radial-gradient(at 90% 15%, rgba(236, 253, 245, 0.6) 0px, transparent 50%),
        radial-gradient(at 50% 50%, #FFFFFF 0px, transparent 80%),
        radial-gradient(at 80% 85%, rgba(245, 243, 255, 0.6) 0px, transparent 50%);
    background-attachment: fixed;
    color: var(--text-primary);
    font-family: var(--font-body);
    line-height: 1.6;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
}

/* Subtle architectural dot grid */
body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(rgba(148, 163, 184, 0.15) 1px, transparent 1px);
    background-size: 24px 24px;
    pointer-events: none;
    z-index: 0;
}

/* Ambient Soft Luminous Glows */
.ambient-glow {
    position: fixed;
    border-radius: 50%;
    filter: blur(120px);
    pointer-events: none;
    z-index: 0;
    opacity: 0.45;
}

.glow-1 {
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, #DBEAFE 0%, rgba(191, 219, 254, 0) 70%);
    top: -100px;
    right: -100px;
}

.glow-2 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, #D1FAE5 0%, rgba(167, 243, 208, 0) 70%);
    top: 35%;
    left: -120px;
}

.glow-3 {
    width: 550px;
    height: 550px;
    background: radial-gradient(circle, #EDE9FE 0%, rgba(221, 214, 254, 0) 70%);
    bottom: -80px;
    right: 5%;
}

/* ==========================================================================
   Header Navigation
   ========================================================================== */
.app-header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border-light);
    box-shadow: var(--shadow-xs);
}

.header-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0.85rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}

.brand {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    flex-shrink: 0;
}

.brand-logo {
    width: 42px;
    height: 42px;
    border-radius: 12px;
    object-fit: cover;
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.18);
    border: 1px solid var(--border-light);
}

.brand-text {
    display: flex;
    flex-direction: column;
}

.brand-name {
    font-family: var(--font-heading);
    font-size: 1.45rem;
    font-weight: 800;
    letter-spacing: -0.5px;
    color: var(--text-primary);
    line-height: 1.1;
}

.gradient-text {
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.brand-badge {
    font-size: 0.65rem;
    font-weight: 800;
    letter-spacing: 1.5px;
    color: var(--accent-blue);
    text-transform: uppercase;
}

.header-status {
    display: flex;
    align-items: center;
    gap: 0.85rem;
}

.status-pill {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: #FFFFFF;
    border: 1px solid var(--border-light);
    padding: 0.4rem 0.9rem;
    border-radius: 50px;
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--text-secondary);
    box-shadow: var(--shadow-xs);
    white-space: nowrap;
}

.pulse-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--color-verified);
    box-shadow: 0 0 10px rgba(5, 150, 105, 0.6);
    animation: pulseGlow 2s infinite ease-in-out;
    flex-shrink: 0;
}

@keyframes pulseGlow {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.3); opacity: 0.6; }
}

.whatsapp-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: #25D366;
    color: #FFFFFF;
    text-decoration: none;
    padding: 0.55rem 1.15rem;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 700;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 14px rgba(37, 211, 102, 0.25);
    white-space: nowrap;
    flex-shrink: 0;
}

.whatsapp-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(37, 211, 102, 0.4);
}

/* ==========================================================================
   Main Container & Hero Section
   ========================================================================== */
.main-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 3rem 1.5rem 5rem 1.5rem;
    position: relative;
    z-index: 10;
}

.hero-section {
    text-align: center;
    margin-bottom: 3rem;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.45rem 1.15rem;
    border-radius: 50px;
    background: #FFFFFF;
    border: 1px solid rgba(37, 99, 235, 0.25);
    color: var(--accent-blue);
    font-size: 0.85rem;
    font-weight: 700;
    margin-bottom: 1.35rem;
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.08);
    animation: fadeInDown 0.6s ease-out;
}

.hero-title {
    font-family: var(--font-heading);
    font-size: clamp(2rem, 4.5vw, 3.1rem);
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: -1.2px;
    margin-bottom: 1.15rem;
    color: var(--text-primary);
}

.hero-subtitle {
    max-width: 740px;
    margin: 0 auto 1.5rem auto;
    font-size: clamp(1rem, 2vw, 1.15rem);
    color: var(--text-secondary);
    line-height: 1.65;
}

/* Trust Bar */
.hero-trust-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.25rem 1.75rem;
    margin-top: 1rem;
}

.trust-item {
    display: flex;
    align-items: center;
    gap: 0.45rem;
    font-size: 0.88rem;
    font-weight: 600;
    color: var(--text-muted);
}

.trust-icon {
    font-size: 1rem;
}

/* ==========================================================================
   Verification Studio Card
   ========================================================================== */
.studio-card {
    background: var(--bg-card);
    border: 1px solid var(--border-light);
    border-radius: var(--radius-xl);
    padding: 2.25rem;
    box-shadow: var(--shadow-xl), var(--shadow-glow);
    margin-bottom: 3rem;
    position: relative;
    overflow: hidden;
}

.studio-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--accent-gradient);
}

/* Segmented Tabs */
.studio-tabs {
    display: flex;
    gap: 0.5rem;
    background: var(--bg-secondary);
    padding: 0.4rem;
    border-radius: var(--radius-md);
    margin-bottom: 2rem;
    border: 1px solid var(--border-light);
}

.tab-btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.85rem 1rem;
    border: none;
    background: transparent;
    color: var(--text-muted);
    font-family: var(--font-heading);
    font-size: 0.95rem;
    font-weight: 600;
    border-radius: var(--radius-sm);
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    min-height: 44px;
}

.tab-btn:hover {
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.7);
}

.tab-btn.active {
    background: var(--accent-gradient);
    color: #FFFFFF;
    font-weight: 700;
    box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
}

.tab-panel {
    display: none;
    animation: fadeIn 0.3s ease-in-out;
}

.tab-panel.active {
    display: block;
}

.panel-header {
    margin-bottom: 1rem;
}

.input-meta-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.75rem 1rem;
}

.input-label {
    font-weight: 700;
    font-size: 0.95rem;
    color: var(--text-primary);
}

.lang-selector-wrapper {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    background: var(--bg-secondary);
    border: 1px solid var(--border-medium);
    border-radius: var(--radius-sm);
    padding: 0.4rem 0.85rem;
    box-shadow: var(--shadow-xs);
    min-height: 40px;
}

.lang-icon {
    font-size: 1rem;
}

.lang-select {
    background: transparent;
    border: none;
    color: var(--text-primary);
    font-family: var(--font-body);
    font-size: 0.88rem;
    font-weight: 600;
    outline: none;
    cursor: pointer;
}

.lang-select option {
    background: #FFFFFF;
    color: var(--text-primary);
}

/* Textarea & Controls */
.textarea-wrapper {
    position: relative;
    background: var(--bg-secondary);
    border: 1.5px solid var(--border-medium);
    border-radius: var(--radius-md);
    padding: 1.15rem;
    margin-bottom: 1.5rem;
    transition: all 0.25s ease;
}

.textarea-wrapper:focus-within {
    background: #FFFFFF;
    border-color: var(--accent-blue);
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12), var(--shadow-md);
}

.claim-textarea {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: var(--text-primary);
    font-family: var(--font-body);
    font-size: 16px;
    resize: vertical;
    min-height: 110px;
    line-height: 1.6;
}

.claim-textarea::placeholder {
    color: var(--text-light);
}

.textarea-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.75rem;
    padding-top: 0.65rem;
    border-top: 1px solid var(--border-light);
}

.clear-btn {
    background: none;
    border: none;
    color: var(--text-muted);
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    transition: color 0.2s;
    min-height: 36px;
    display: flex;
    align-items: center;
}

.clear-btn:hover {
    color: var(--text-primary);
}

.char-count {
    font-size: 0.82rem;
    color: var(--text-muted);
}

/* Quick Chips */
.quick-chips-section {
    margin-bottom: 1.75rem;
}

.chips-label {
    display: block;
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--text-muted);
    margin-bottom: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.6px;
}

.chips-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.chip-btn {
    background: var(--bg-secondary);
    border: 1px solid var(--border-medium);
    color: var(--text-secondary);
    padding: 0.5rem 1rem;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    font-family: var(--font-body);
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: left;
    min-height: 40px;
    display: inline-flex;
    align-items: center;
}

.chip-btn:hover {
    background: #FFFFFF;
    border-color: var(--accent-blue);
    color: var(--accent-blue);
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(37, 99, 235, 0.1);
}

/* Action Button */
.action-row {
    display: flex;
    justify-content: flex-end;
}

.btn-verify {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    background: var(--accent-gradient);
    color: #FFFFFF;
    font-family: var(--font-heading);
    font-size: 1.05rem;
    font-weight: 700;
    padding: 0.95rem 2.2rem;
    border-radius: var(--radius-md);
    border: none;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 6px 20px rgba(37, 99, 235, 0.35);
    min-height: 48px;
}

.btn-verify:hover {
    background: var(--accent-gradient-hover);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.45);
}

.btn-verify:active {
    transform: translateY(0);
}

.btn-spinner {
    width: 18px;
    height: 18px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-top-color: #FFFFFF;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

/* ==========================================================================
   Media Samples (Audio / Image)
   ========================================================================== */
.media-samples-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.25rem;
    margin-bottom: 1.75rem;
}

.sample-card {
    display: flex;
    gap: 1rem;
    padding: 1.25rem;
    background: var(--bg-secondary);
    border: 1.5px solid var(--border-light);
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: all 0.25s ease;
}

.sample-card:hover {
    border-color: var(--accent-blue);
    background: #FFFFFF;
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.sample-card.active {
    border-color: var(--accent-blue);
    background: #FFFFFF;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15), var(--shadow-md);
}

.sample-icon {
    font-size: 2.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.sample-info h4 {
    font-size: 1rem;
    font-weight: 700;
    margin: 0.35rem 0;
    color: var(--text-primary);
}

.sample-info p {
    font-size: 0.85rem;
    color: var(--text-secondary);
    line-height: 1.45;
}

.sample-tag {
    font-size: 0.7rem;
    font-weight: 800;
    padding: 0.2rem 0.55rem;
    border-radius: 4px;
    text-transform: uppercase;
}

.sample-tag.danger {
    background: var(--color-false-bg);
    color: var(--color-false-text);
    border: 1px solid var(--color-false-border);
}

.sample-tag.warning {
    background: var(--color-warning-bg);
    color: var(--color-warning-text);
    border: 1px solid var(--color-warning-border);
}

.sample-tag.safe {
    background: var(--color-verified-bg);
    color: var(--color-verified-text);
    border: 1px solid var(--color-verified-border);
}

/* Audio Player Simulator */
.audio-player-sim {
    background: var(--bg-secondary);
    border: 1px solid var(--border-light);
    border-radius: var(--radius-md);
    padding: 1.35rem;
    margin-bottom: 1.75rem;
}

.audio-controls {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
}

.play-btn {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: var(--accent-gradient);
    border: none;
    color: #FFFFFF;
    font-size: 1.1rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
    flex-shrink: 0;
}

.play-btn:hover {
    transform: scale(1.08);
}

.waveform-bars {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 4px;
    height: 38px;
    overflow: hidden;
}

.wave-bar {
    flex: 1;
    background: var(--accent-blue);
    opacity: 0.35;
    border-radius: 4px;
    height: 25%;
    transition: height 0.2s ease, opacity 0.2s;
    min-width: 3px;
}

.audio-player-sim.playing .wave-bar {
    opacity: 0.85;
    animation: waveBounce 1.2s infinite ease-in-out alternate;
}

.audio-player-sim.playing .wave-bar:nth-child(2n) { animation-delay: 0.2s; }
.audio-player-sim.playing .wave-bar:nth-child(3n) { animation-delay: 0.4s; }
.audio-player-sim.playing .wave-bar:nth-child(4n) { animation-delay: 0.1s; }

@keyframes waveBounce {
    0% { height: 15%; }
    100% { height: 95%; }
}

.audio-duration {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-muted);
    white-space: nowrap;
}

.audio-transcript-box {
    font-size: 0.95rem;
    background: #FFFFFF;
    padding: 1rem 1.25rem;
    border-radius: var(--radius-sm);
    border: 1px solid var(--border-light);
    color: var(--text-secondary);
}

.audio-transcript-box strong {
    color: var(--text-primary);
}

/* ==========================================================================
   Scanning Radar Animation
   ========================================================================== */
.scanning-section {
    background: #FFFFFF;
    border: 1.5px solid var(--accent-blue);
    border-radius: var(--radius-xl);
    padding: 2.5rem 1.75rem;
    margin-bottom: 3rem;
    box-shadow: var(--shadow-lg), var(--shadow-glow);
    animation: fadeIn 0.4s ease-out;
}

.radar-box {
    display: flex;
    align-items: center;
    gap: 2rem;
    max-width: 680px;
    margin: 0 auto;
}

.radar-scanner {
    width: 90px;
    height: 90px;
    position: relative;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, rgba(241, 245, 249, 0.8) 70%);
    border: 2px solid var(--accent-blue);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 0 25px rgba(37, 99, 235, 0.2);
}

.radar-circle {
    position: absolute;
    width: 60%;
    height: 60%;
    border-radius: 50%;
    border: 1.5px dashed rgba(37, 99, 235, 0.45);
}

.radar-beam {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background: conic-gradient(from 0deg, transparent 0deg, rgba(37, 99, 235, 0.4) 60deg, transparent 70deg);
    animation: rotateBeam 2s linear infinite;
}

@keyframes rotateBeam {
    to { transform: rotate(360deg); }
}

.radar-center-icon {
    font-size: 1.6rem;
    z-index: 2;
}

.scanning-details {
    flex: 1;
}

.scanning-headline {
    font-family: var(--font-heading);
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.35rem;
}

.scanning-sub {
    font-size: 0.95rem;
    color: var(--text-secondary);
    margin-bottom: 1.15rem;
}

.scan-progress-bar {
    width: 100%;
    height: 7px;
    background: var(--border-light);
    border-radius: 10px;
    overflow: hidden;
}

.scan-progress-fill {
    width: 30%;
    height: 100%;
    background: var(--accent-gradient);
    border-radius: 10px;
    transition: width 0.4s ease;
    animation: progressPulse 1.5s infinite;
}

@keyframes progressPulse {
    0%, 100% { opacity: 0.85; }
    50% { opacity: 1; }
}

/* ==========================================================================
   Verification Results Card
   ========================================================================== */
.result-section {
    margin-bottom: 3.5rem;
    animation: slideUp 0.5s ease-out;
}

.result-card {
    background: #FFFFFF;
    border: 2px solid var(--border-light);
    border-radius: var(--radius-xl);
    padding: 2.25rem;
    box-shadow: var(--shadow-xl);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
}

.result-card.verdict-false {
    border-color: var(--color-false-border);
    box-shadow: 0 16px 40px -8px var(--color-false-glow), var(--shadow-md);
}

.result-card.verdict-verified {
    border-color: var(--color-verified-border);
    box-shadow: 0 16px 40px -8px var(--color-verified-glow), var(--shadow-md);
}

.result-card.verdict-scam {
    border-color: var(--color-scam-border);
    box-shadow: 0 16px 40px -8px rgba(225, 29, 72, 0.2), var(--shadow-md);
}

.result-card.verdict-unverified {
    border-color: var(--color-warning-border);
    box-shadow: 0 16px 40px -8px rgba(217, 119, 6, 0.15), var(--shadow-md);
}

.result-top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.25rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--border-light);
    margin-bottom: 1.5rem;
}

.result-meta-label {
    display: block;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 1.5px;
    color: var(--text-muted);
    margin-bottom: 0.4rem;
}

.verdict-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.65rem 1.35rem;
    border-radius: 50px;
    font-family: var(--font-heading);
    font-size: 1.2rem;
    font-weight: 800;
    border: 1px solid transparent;
}

.verdict-false .verdict-badge {
    background: var(--color-false-bg);
    color: var(--color-false-text);
    border-color: var(--color-false-border);
}

.verdict-verified .verdict-badge {
    background: var(--color-verified-bg);
    color: var(--color-verified-text);
    border-color: var(--color-verified-border);
}

.verdict-scam .verdict-badge {
    background: var(--color-scam-bg);
    color: var(--color-scam-text);
    border-color: var(--color-scam-border);
}

.verdict-unverified .verdict-badge {
    background: var(--color-warning-bg);
    color: var(--color-warning-text);
    border-color: var(--color-warning-border);
}

/* Risk Gauge */
.risk-gauge-wrapper {
    display: flex;
    align-items: center;
    gap: 1.15rem;
    background: var(--bg-secondary);
    padding: 0.65rem 1.25rem;
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-light);
}

.risk-circle-gauge {
    position: relative;
    width: 64px;
    height: 64px;
    flex-shrink: 0;
}

.gauge-svg {
    transform: rotate(-90deg);
    width: 100%;
    height: 100%;
}

.gauge-bg {
    fill: none;
    stroke: var(--border-medium);
    stroke-width: 8;
}

.gauge-meter {
    fill: none;
    stroke: var(--color-false);
    stroke-width: 8;
    stroke-linecap: round;
    stroke-dasharray: 264;
    stroke-dashoffset: 26;
    transition: stroke-dashoffset 1s ease-out, stroke 0.3s;
}

.gauge-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.gauge-number {
    display: block;
    font-family: var(--font-heading);
    font-size: 0.95rem;
    font-weight: 800;
    color: var(--text-primary);
    line-height: 1;
}

.gauge-label {
    font-size: 0.62rem;
    color: var(--text-muted);
    font-weight: 700;
    text-transform: uppercase;
}

.risk-description {
    display: flex;
    flex-direction: column;
}

.risk-level-tag {
    font-family: var(--font-heading);
    font-weight: 800;
    font-size: 1.05rem;
    color: var(--text-primary);
}

.risk-level-sub {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--text-muted);
}

/* Result Rows */
.result-row {
    margin-bottom: 1.5rem;
}

.section-title {
    font-size: 0.85rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: var(--text-muted);
    margin-bottom: 0.45rem;
}

.box-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.55rem;
}

.box-icon {
    font-size: 1.15rem;
}

.analyzed-quote {
    font-size: 1.12rem;
    font-style: italic;
    color: var(--text-primary);
    padding: 0.85rem 1.25rem;
    background: var(--bg-secondary);
    border-left: 4px solid var(--accent-blue);
    border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
    border-top: 1px solid var(--border-light);
    border-right: 1px solid var(--border-light);
    border-bottom: 1px solid var(--border-light);
    word-break: break-word;
}

.analysis-content {
    font-size: 1.05rem;
    line-height: 1.7;
    color: var(--text-secondary);
    background: var(--bg-secondary);
    padding: 1.25rem;
    border-radius: var(--radius-md);
    border: 1px solid var(--border-light);
}

.sources-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
}

.source-tag {
    background: #FFFFFF;
    border: 1px solid var(--border-medium);
    color: var(--accent-blue);
    padding: 0.4rem 0.9rem;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 700;
    box-shadow: var(--shadow-xs);
}

.advice-content {
    font-size: 0.98rem;
    line-height: 1.65;
    color: var(--text-primary);
    background: var(--color-warning-bg);
    border: 1px solid var(--color-warning-border);
    padding: 1.15rem 1.25rem;
    border-radius: var(--radius-md);
    border-left: 4px solid var(--color-warning);
}

/* Result Actions */
.result-footer-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border-light);
}

.btn-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.55rem;
    background: #FFFFFF;
    color: var(--text-primary);
    border: 1px solid var(--border-medium);
    padding: 0.75rem 1.35rem;
    border-radius: var(--radius-md);
    font-family: var(--font-heading);
    font-size: 0.95rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: var(--shadow-xs);
    min-height: 44px;
}

.btn-secondary:hover {
    background: var(--bg-secondary);
    border-color: var(--accent-blue);
    color: var(--accent-blue);
    transform: translateY(-1px);
    box-shadow: var(--shadow-sm);
}

.btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.55rem;
    background: var(--accent-gradient);
    color: #FFFFFF;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: var(--radius-md);
    font-family: var(--font-heading);
    font-size: 0.95rem;
    font-weight: 700;
    cursor: pointer;
    margin-left: auto;
    transition: all 0.2s ease;
    box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
    min-height: 44px;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(37, 99, 235, 0.45);
}

/* ==========================================================================
   Live Misinformation Radar Feed
   ========================================================================== */
.radar-feed-section {
    margin-bottom: 3.5rem;
}

.feed-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.feed-title {
    font-family: var(--font-heading);
    font-size: 1.85rem;
    font-weight: 800;
    color: var(--text-primary);
}

.feed-subtitle {
    font-size: 0.98rem;
    color: var(--text-muted);
}

.feed-category-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.filter-pill {
    background: #FFFFFF;
    border: 1px solid var(--border-medium);
    color: var(--text-muted);
    padding: 0.45rem 0.95rem;
    border-radius: 50px;
    font-size: 0.82rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: var(--shadow-xs);
    min-height: 38px;
    display: inline-flex;
    align-items: center;
}

.filter-pill:hover, .filter-pill.active {
    background: var(--accent-blue);
    border-color: var(--accent-blue);
    color: #FFFFFF;
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
}

.feed-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
    gap: 1.25rem;
}

.feed-card {
    background: #FFFFFF;
    border: 1px solid var(--border-light);
    border-radius: var(--radius-lg);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: var(--shadow-sm);
    cursor: pointer;
}

.feed-card:hover {
    border-color: var(--accent-blue);
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg);
}

.feed-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
}

.feed-category-tag {
    font-size: 0.72rem;
    font-weight: 800;
    text-transform: uppercase;
    color: var(--accent-blue);
    letter-spacing: 0.6px;
}

.feed-date {
    font-size: 0.78rem;
    color: var(--text-light);
    font-weight: 600;
}

.feed-claim-text {
    font-family: var(--font-heading);
    font-size: 1.08rem;
    font-weight: 800;
    color: var(--text-primary);
    line-height: 1.45;
    margin-bottom: 0.65rem;
}

.feed-summary-text {
    font-size: 0.88rem;
    color: var(--text-secondary);
    line-height: 1.55;
    margin-bottom: 1.25rem;
}

.feed-card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.85rem;
    border-top: 1px solid var(--border-light);
}

.feed-verdict {
    font-size: 0.85rem;
    font-weight: 800;
    display: flex;
    align-items: center;
    gap: 0.4rem;
}

.feed-verdict.false { color: var(--color-false); }
.feed-verdict.verified { color: var(--color-verified); }
.feed-verdict.scam { color: var(--color-scam); }

.feed-action-btn {
    background: none;
    border: none;
    color: var(--accent-blue);
    font-size: 0.85rem;
    font-weight: 700;
    cursor: pointer;
}

/* ==========================================================================
   WhatsApp CTA Banner
   ========================================================================== */
.whatsapp-cta-card {
    background: linear-gradient(135deg, #ECFDF5 0%, #FFFFFF 100%);
    border: 1.5px solid #A7F3D0;
    border-radius: var(--radius-xl);
    padding: 2.5rem;
    margin-bottom: 4rem;
    position: relative;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
}

.wa-badge {
    display: inline-block;
    background: #D1FAE5;
    color: #065F46;
    font-size: 0.78rem;
    font-weight: 800;
    padding: 0.35rem 0.9rem;
    border-radius: 50px;
    margin-bottom: 1.15rem;
    border: 1px solid #A7F3D0;
}

.wa-title {
    font-family: var(--font-heading);
    font-size: clamp(1.5rem, 3.5vw, 2rem);
    font-weight: 800;
    color: var(--text-primary);
    margin-bottom: 0.85rem;
    letter-spacing: -0.5px;
}

.wa-desc {
    max-width: 700px;
    color: var(--text-secondary);
    font-size: 1.02rem;
    line-height: 1.65;
    margin-bottom: 1.75rem;
}

.wa-steps {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem 1.75rem;
    margin-bottom: 2rem;
}

.wa-step-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-primary);
}

.step-num {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #10B981;
    color: #FFFFFF;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    flex-shrink: 0;
}

.btn-wa-action {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    background: #25D366;
    color: #FFFFFF;
    font-family: var(--font-heading);
    font-size: 1.05rem;
    font-weight: 800;
    padding: 0.95rem 1.85rem;
    border-radius: var(--radius-md);
    text-decoration: none;
    transition: all 0.25s ease;
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.3);
    min-height: 48px;
}

.btn-wa-action:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(37, 211, 102, 0.45);
}

/* ==========================================================================
   Toast Notification
   ========================================================================== */
.toast-notification {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: #FFFFFF;
    border: 1.5px solid var(--accent-blue);
    box-shadow: var(--shadow-xl);
    padding: 0.95rem 1.5rem;
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    gap: 0.85rem;
    z-index: 1000;
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--text-primary);
    animation: slideInRight 0.3s ease-out;
}

/* ==========================================================================
   Footer
   ========================================================================== */
.app-footer {
    border-top: 1px solid var(--border-light);
    background: #FFFFFF;
    padding: 2.5rem 1.5rem;
    position: relative;
    z-index: 10;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
}

.footer-brand-title {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-family: var(--font-heading);
    font-size: 1.2rem;
    font-weight: 800;
    margin-bottom: 0.35rem;
    color: var(--text-primary);
}

.footer-logo {
    width: 30px;
    height: 30px;
    border-radius: 8px;
}

.footer-brand p {
    font-size: 0.88rem;
    color: var(--text-muted);
    max-width: 520px;
}

.footer-links {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.35rem;
    font-size: 0.88rem;
    color: var(--text-muted);
}

.footer-tech {
    font-weight: 700;
    color: var(--accent-blue);
}

/* Utility Classes & Keyframes */
.hidden {
    display: none !important;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes slideInRight {
    from { opacity: 0; transform: translateX(30px); }
    to { opacity: 1; transform: translateX(0); }
}

/* ==========================================================================
   TABLET RESPONSIVENESS (max-width: 1024px)
   ========================================================================== */
@media (max-width: 1024px) {
    .main-container {
        padding: 2rem 1.25rem 4rem 1.25rem;
    }
    
    .studio-card {
        padding: 1.85rem;
    }

    .feed-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .media-samples-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* ==========================================================================
   MOBILE RESPONSIVENESS (max-width: 768px)
   ========================================================================== */
@media (max-width: 768px) {
    .header-container {
        padding: 0.75rem 1rem;
    }

    /* Clean header on mobile: keep logo & WhatsApp button prominent */
    .status-pill {
        display: none;
    }

    .brand-name {
        font-size: 1.3rem;
    }

    .brand-logo {
        width: 36px;
        height: 36px;
    }

    .whatsapp-btn {
        padding: 0.45rem 0.9rem;
        font-size: 0.82rem;
    }

    .main-container {
        padding: 1.5rem 1rem 3.5rem 1rem;
    }

    .hero-section {
        margin-bottom: 2rem;
    }

    .hero-badge {
        font-size: 0.78rem;
        padding: 0.4rem 0.9rem;
    }

    .hero-trust-bar {
        gap: 0.75rem 1rem;
    }

    .trust-item {
        font-size: 0.8rem;
    }

    /* Studio Card Mobile Optimization */
    .studio-card {
        padding: 1.25rem 1rem;
        border-radius: var(--radius-lg);
        margin-bottom: 2rem;
    }

    /* Responsive Segmented Tabs */
    .studio-tabs {
        flex-direction: column;
        gap: 0.35rem;
        padding: 0.35rem;
        margin-bottom: 1.25rem;
    }

    .tab-btn {
        padding: 0.7rem 0.85rem;
        font-size: 0.9rem;
        justify-content: flex-start;
    }

    .input-meta-controls {
        flex-direction: column;
        align-items: stretch;
        gap: 0.75rem;
    }

    .lang-selector-wrapper {
        justify-content: space-between;
        width: 100%;
    }

    .claim-textarea {
        min-height: 95px;
    }

    .chips-container {
        gap: 0.4rem;
    }

    .chip-btn {
        font-size: 0.82rem;
        padding: 0.5rem 0.85rem;
        width: 100%;
        justify-content: flex-start;
    }

    .action-row {
        width: 100%;
    }

    .btn-verify {
        width: 100%;
        padding: 0.9rem 1.5rem;
        font-size: 1rem;
    }

    /* Radar Scanner on Mobile */
    .scanning-section {
        padding: 1.75rem 1.25rem;
        border-radius: var(--radius-lg);
    }

    .radar-box {
        flex-direction: column;
        text-align: center;
        gap: 1.25rem;
    }

    .radar-scanner {
        width: 75px;
        height: 75px;
    }

    .scanning-headline {
        font-size: 1.15rem;
    }

    .scanning-sub {
        font-size: 0.88rem;
    }

    /* Result Card on Mobile */
    .result-card {
        padding: 1.35rem 1rem;
        border-radius: var(--radius-lg);
    }

    .result-top-bar {
        flex-direction: column;
        align-items: stretch;
        gap: 1.25rem;
    }

    .verdict-wrapper {
        width: 100%;
    }

    .verdict-badge {
        width: 100%;
        justify-content: center;
        font-size: 1.05rem;
        padding: 0.6rem 1rem;
    }

    .risk-gauge-wrapper {
        width: 100%;
        justify-content: center;
        padding: 0.75rem 1rem;
    }

    .analyzed-quote {
        font-size: 1rem;
        padding: 0.75rem 1rem;
    }

    .analysis-content {
        font-size: 0.98rem;
        padding: 1rem;
    }

    .result-footer-actions {
        flex-direction: column;
        gap: 0.65rem;
    }

    .btn-secondary, .btn-primary {
        width: 100%;
        margin-left: 0;
    }

    /* Media Samples Mobile */
    .media-samples-grid {
        grid-template-columns: 1fr;
        gap: 0.85rem;
    }

    .sample-card {
        padding: 1rem;
    }

    /* Feed Grid Mobile */
    .feed-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }

    .feed-title {
        font-size: 1.45rem;
    }

    .feed-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    /* WhatsApp Card Mobile */
    .whatsapp-cta-card {
        padding: 1.5rem 1.25rem;
        border-radius: var(--radius-lg);
    }

    .wa-steps {
        flex-direction: column;
        gap: 0.85rem;
    }

    .btn-wa-action {
        width: 100%;
        font-size: 1rem;
    }

    /* Toast Notification Mobile */
    .toast-notification {
        left: 1rem;
        right: 1rem;
        bottom: 1.25rem;
        justify-content: center;
        text-align: center;
    }

    /* Footer Mobile */
    .app-footer {
        padding: 2rem 1rem;
    }

    .footer-container {
        flex-direction: column;
        align-items: flex-start;
        gap: 1.25rem;
    }

    .footer-links {
        align-items: flex-start;
    }
}

/* ==========================================================================
   SMALL MOBILE SCREENS (max-width: 380px)
   ========================================================================== */
@media (max-width: 380px) {
    .brand-name {
        font-size: 1.15rem;
    }

    .whatsapp-btn span {
        display: none;
    }

    .whatsapp-btn {
        padding: 0.5rem;
        border-radius: 50%;
    }

    .hero-title {
        font-size: 1.75rem;
    }
}
`;

fs.writeFileSync(path.join(__dirname, '../public/style.css'), cssContent, 'utf8');
console.log('Successfully wrote clean, non-duplicate style.css!');
