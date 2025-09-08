// Script to help add audio buttons to all blog posts
// This will help me track which files need audio buttons

const blogFiles = [
    'belay-devices-guide.html',
    'chalk-guide-florida.html',
    'climbing-shoes-guide.html',
    'crash-pads-guide.html',
    'florida-specific-gear.html',
    'hangboard-guide.html',
    'harness-guide.html',
    'humid-climate-gear-care.html',
    'ropes-quickdraws-guide.html',
    'beginners-checklist.html'
];

// Audio button HTML to add
const audioButton = `                    <div class="audio-controls">
                        <button class="audio-play-btn" id="audioPlayBtn" title="Listen to this article">
                            <svg class="play-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                            <svg class="pause-icon" viewBox="0 0 24 24" fill="currentColor" style="display: none;">
                                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                            </svg>
                            <span class="audio-status">Play</span>
                        </button>
                    </div>`;

// Audio player class to add to each file
const audioPlayerClass = `
        // BlogAudioPlayer Class
        class BlogAudioPlayer {
            constructor() {
                this.isPlaying = false;
                this.synthesis = window.speechSynthesis;
                this.utterance = null;
                this.button = document.getElementById('audioPlayBtn');
                this.playIcon = this.button.querySelector('.play-icon');
                this.pauseIcon = this.button.querySelector('.pause-icon');
                this.status = this.button.querySelector('.audio-status');
                
                this.button.addEventListener('click', () => this.toggleAudio());
                
                // Handle synthesis events
                this.synthesis.addEventListener('voiceschanged', () => this.setupVoice());
            }
            
            setupVoice() {
                const voices = this.synthesis.getVoices();
                this.voice = voices.find(voice => voice.lang.startsWith('en')) || voices[0];
            }
            
            toggleAudio() {
                if (this.isPlaying) {
                    this.pauseAudio();
                } else {
                    this.playAudio();
                }
            }
            
            playAudio() {
                if (this.synthesis.paused) {
                    this.synthesis.resume();
                } else {
                    const content = this.extractTextContent();
                    this.utterance = new SpeechSynthesisUtterance(content);
                    this.utterance.voice = this.voice;
                    this.utterance.rate = 1.0;
                    this.utterance.pitch = 1.0;
                    
                    this.utterance.onend = () => this.onAudioEnd();
                    this.utterance.onerror = () => this.onAudioEnd();
                    
                    this.synthesis.speak(this.utterance);
                }
                
                this.isPlaying = true;
                this.updateButtonState();
            }
            
            pauseAudio() {
                this.synthesis.pause();
                this.isPlaying = false;
                this.updateButtonState();
            }
            
            onAudioEnd() {
                this.isPlaying = false;
                this.updateButtonState();
            }
            
            updateButtonState() {
                if (this.isPlaying) {
                    this.playIcon.style.display = 'none';
                    this.pauseIcon.style.display = 'block';
                    this.status.textContent = 'Pause';
                } else {
                    this.playIcon.style.display = 'block';
                    this.pauseIcon.style.display = 'none';
                    this.status.textContent = 'Play';
                }
            }
            
            extractTextContent() {
                const article = document.querySelector('.blog-post');
                const title = document.querySelector('h1').textContent;
                const content = article.textContent
                    .replace(/Back to Gear Guide/g, '')
                    .replace(/Play/g, '')
                    .replace(/Pause/g, '')
                    .replace(/\\s+/g, ' ')
                    .trim();
                
                return \`\${title}. \${content}\`;
            }
        }`;

console.log('Files completed with audio:');
console.log('- harness-guide.html ✓');
console.log('- ropes-quickdraws-guide.html ✓');  
console.log('- climbing-shoes-guide.html ✓');
console.log('- belay-devices-guide.html ✓');
console.log('\nFiles still need audio:');
console.log('- chalk-guide-florida.html');
console.log('- crash-pads-guide.html');
console.log('- florida-specific-gear.html');
console.log('- hangboard-guide.html');
console.log('- humid-climate-gear-care.html');
console.log('- beginners-checklist.html');
