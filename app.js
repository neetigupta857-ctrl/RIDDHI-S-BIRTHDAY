/* ==========================================================================
   Riddi's 19th Birthday Website - Interactive Logic & Audio Engine
   Theme: Deep Ocean & Pearl (Classic Elegance)
   ========================================================================== */

function initAll() {
  initFloatingPetalsCanvas();
  initWebAudioEngine();
  initMagneticElements();
  initPasswordGate();
  initHeroVideoControls();
  initScrollAnimations();
  initGalleryFilter();
  initUsSection();
  initCakeSurprise();
  initHeartfeltUnveiling();
  initPageNavigation();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

/* --------------------------------------------------------------------------
   1. Floating White Lily Petals & Ice Blue Sparkle Canvas
   -------------------------------------------------------------------------- */
function initFloatingPetalsCanvas() {
  const canvas = document.getElementById('petals-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const petalsCount = 40;
  const petals = [];

  for (let i = 0; i < petalsCount; i++) {
    petals.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 8 + 5,
      speedY: Math.random() * 0.7 + 0.25,
      speedX: Math.sin(Math.random() * Math.PI) * 0.4,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 1.2,
      opacity: Math.random() * 0.6 + 0.3,
      isSparkle: Math.random() > 0.65, // Ice blue sparkle particles
    });
  }

  let mouseX = -1000;
  let mouseY = -1000;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function drawPetal(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.globalAlpha = p.opacity;

    if (p.isSparkle) {
      // Ice Blue Sparkle Particle
      ctx.beginPath();
      ctx.arc(0, 0, p.size * 0.3, 0, Math.PI * 2);
      ctx.fillStyle = '#BAE6FD';
      ctx.shadowColor = '#BAE6FD';
      ctx.shadowBlur = 12;
      ctx.fill();
    } else {
      // Pearl White Lily Petal
      ctx.beginPath();
      ctx.moveTo(0, -p.size);
      ctx.bezierCurveTo(p.size * 0.8, -p.size * 0.5, p.size * 0.8, p.size * 0.5, 0, p.size);
      ctx.bezierCurveTo(-p.size * 0.8, p.size * 0.5, -p.size * 0.8, -p.size * 0.5, 0, -p.size);

      const grad = ctx.createLinearGradient(0, -p.size, 0, p.size);
      grad.addColorStop(0, '#FFFFFF');
      grad.addColorStop(0.6, '#F8F9FA');
      grad.addColorStop(1, '#BAE6FD');

      ctx.fillStyle = grad;
      ctx.shadowColor = 'rgba(186, 230, 253, 0.6)';
      ctx.shadowBlur = 10;
      ctx.fill();

      // Delicate inner vein accent
      ctx.beginPath();
      ctx.moveTo(0, -p.size * 0.6);
      ctx.lineTo(0, p.size * 0.6);
      ctx.strokeStyle = 'rgba(192, 201, 214, 0.4)';
      ctx.lineWidth = 0.8;
      ctx.stroke();
    }

    ctx.restore();
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    petals.forEach((p) => {
      p.y += p.speedY;
      p.x += Math.sin(p.y * 0.01) * 0.5 + p.speedX;
      p.rotation += p.rotSpeed;

      // Mouse proximity repulsion physics
      const dx = p.x - mouseX;
      const dy = p.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        const angle = Math.atan2(dy, dx);
        const force = (100 - dist) * 0.05;
        p.x += Math.cos(angle) * force;
        p.y += Math.sin(angle) * force;
      }

      // Loop boundaries
      if (p.y > height + 20) {
        p.y = -20;
        p.x = Math.random() * width;
      }
      if (p.x > width + 20) p.x = -20;
      if (p.x < -20) p.x = width + 20;

      drawPetal(p);
    });

    requestAnimationFrame(render);
  }

  render();
}

/* --------------------------------------------------------------------------
   2. Web Audio Synthesizer Engine
   -------------------------------------------------------------------------- */
let audioCtx = null;

function initWebAudioEngine() {
  // Lazy init on first user gesture
}

function ensureAudioStarted() {
  try {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) audioCtx = new AudioContextClass();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  } catch (e) {}
}

function playKeyBeep() {
  try {
    ensureAudioStarted();
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(659.25, audioCtx.currentTime); // E5 tone
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.12);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.12);
  } catch (e) {}
}

function playSuccessChime() {
  try {
    ensureAudioStarted();
    if (!audioCtx) return;
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6 chord
    notes.forEach((freq, index) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime + index * 0.08);
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime + index * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + index * 0.08 + 0.6);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(audioCtx.currentTime + index * 0.08);
      osc.stop(audioCtx.currentTime + index * 0.08 + 0.6);
    });
  } catch (e) {}
}

function playErrorBuzz() {
  try {
    ensureAudioStarted();
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(140, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.35);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.35);
  } catch (e) {}
}

function playBlowSound() {
  if (!audioCtx) return;
  ensureAudioStarted();
  try {
    const bufferSize = audioCtx.sampleRate * 0.4;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 400;
    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);
    noise.start();
  } catch (e) {}
}

/* --------------------------------------------------------------------------
   3. Magnetic Hover Physics Logic
   -------------------------------------------------------------------------- */
function initMagneticElements() {
  const magneticElements = document.querySelectorAll('.key-btn, .btn-magnetic, .audio-toggle-btn');

  magneticElements.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const pullFactor = el.classList.contains('key-btn') ? 0.35 : 0.25;

      el.style.transform = `translate3d(${deltaX * pullFactor}px, ${deltaY * pullFactor}px, 0)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate3d(0px, 0px, 0px)';
    });
  });
}

/* --------------------------------------------------------------------------
   4. Password Gate Logic (Secret Code = "1509")
   -------------------------------------------------------------------------- */
function initPasswordGate() {
  const CORRECT_PASSWORD = '1509';
  let enteredCode = '';

  const dots = document.querySelectorAll('.dot-slot');
  const errorMsg = document.getElementById('error-msg');
  const gateCard = document.querySelector('.gate-card');
  const coverPage = document.getElementById('cover-page');
  const revealOverlay = document.getElementById('reveal-overlay');
  const countdownEl = document.getElementById('countdown-num');

  function updateDots() {
    dots.forEach((dot, index) => {
      if (index < enteredCode.length) {
        dot.classList.add('active', 'pulse-effect');
      } else {
        dot.classList.remove('active', 'pulse-effect');
      }
    });
  }

  function clearError() {
    errorMsg.textContent = '';
    gateCard.classList.remove('error-shake');
  }

  function handleInput(digit) {
    clearError();
    playKeyBeep();

    if (enteredCode.length < 4) {
      enteredCode += digit;
      updateDots();
    }

    if (enteredCode.length === 4) {
      setTimeout(verifyPassword, 250);
    }
  }

  function handleDelete() {
    clearError();
    playKeyBeep();
    if (enteredCode.length > 0) {
      enteredCode = enteredCode.slice(0, -1);
      updateDots();
    }
  }

  function handleClear() {
    clearError();
    playKeyBeep();
    enteredCode = '';
    updateDots();
  }

  function verifyPassword() {
    if (enteredCode === CORRECT_PASSWORD) {
      // SUCCESS FLOW
      playSuccessChime();
      playMusic();

      // 1. Fade out cover gate
      coverPage.classList.add('hidden-gate');

      // 2. Show reveal overlay message
      revealOverlay.classList.add('active');

      // 3. Start 3-second countdown
      let count = 3;
      countdownEl.textContent = count;

      const timer = setInterval(() => {
        count--;
        if (count > 0) {
          countdownEl.textContent = count;
        } else {
          clearInterval(timer);
          // Hide reveal overlay and smooth scroll to hero video section
          revealOverlay.classList.remove('active');
          const heroSection = document.getElementById('hero-section');
          if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 1000);
    } else {
      // INCORRECT FLOW
      playErrorBuzz();
      gateCard.classList.add('error-shake');
      errorMsg.textContent = "Ask Riddi her birthday date and be ready for a good beating! 😜";
      enteredCode = '';
      updateDots();
    }
  }

  // Keypad Event Listeners (pointerdown + click handled with per-button 400ms debounce)
  document.querySelectorAll('.key-btn[data-key]').forEach((btn) => {
    let lastHandled = 0;
    const handlePress = (e) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastHandled < 400) return; // Ignore second event (click following pointerdown)
      lastHandled = now;

      const key = btn.getAttribute('data-key');
      if (key === 'clear') handleClear();
      else if (key === 'delete' || key === 'backspace') handleDelete();
      else handleInput(key);
    };

    btn.addEventListener('pointerdown', handlePress);
    btn.addEventListener('click', handlePress);
  });

  // Physical Keyboard listener support
  window.addEventListener('keydown', (e) => {
    if (coverPage.classList.contains('hidden-gate')) return;
    if (e.key >= '0' && e.key <= '9') handleInput(e.key);
    else if (e.key === 'Backspace') handleDelete();
    else if (e.key === 'Escape') handleClear();
  });
}

/* --------------------------------------------------------------------------
   5. Hero Video & Audio Control (Apna Bana Le)
   -------------------------------------------------------------------------- */
function playMusic() {
  const bgMusic = document.getElementById('bg-music');
  const soundIcon = document.getElementById('sound-icon');
  const soundText = document.getElementById('sound-text');
  const navSoundIcon = document.getElementById('nav-sound-icon');
  if (bgMusic) {
    bgMusic.play().then(() => {
      if (soundIcon) soundIcon.textContent = '🎵';
      if (soundText) soundText.textContent = 'Pause Music';
      if (navSoundIcon) navSoundIcon.textContent = '🎵';
    }).catch((e) => {
      console.log('Autoplay prevented:', e);
    });
  }
}

function pauseMusic() {
  const bgMusic = document.getElementById('bg-music');
  const soundIcon = document.getElementById('sound-icon');
  const soundText = document.getElementById('sound-text');
  const navSoundIcon = document.getElementById('nav-sound-icon');
  if (bgMusic) {
    bgMusic.pause();
    if (soundIcon) soundIcon.textContent = '🔇';
    if (soundText) soundText.textContent = 'Play Music';
    if (navSoundIcon) navSoundIcon.textContent = '🔇';
  }
}

function toggleMusic() {
  ensureAudioStarted();
  const bgMusic = document.getElementById('bg-music');
  if (!bgMusic) return;
  if (bgMusic.paused) {
    playMusic();
  } else {
    pauseMusic();
  }
}

function initHeroVideoControls() {
  const video = document.getElementById('hero-bg-video');
  const toggleBtn = document.getElementById('audio-toggle-btn');
  const navAudioBtn = document.getElementById('nav-audio-btn');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleMusic);
  }
  if (navAudioBtn) {
    navAudioBtn.addEventListener('click', toggleMusic);
  }

  if (video) {
    video.play().catch(() => {
      document.addEventListener('click', () => video.play(), { once: true });
    });
  }
}

/* --------------------------------------------------------------------------
   6. Scroll Reveal Animations
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const memoryCards = document.querySelectorAll('.memory-card');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('bloom-in');
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  memoryCards.forEach((card) => observer.observe(card));
}

/* --------------------------------------------------------------------------
   7. Gallery Category Filter
   -------------------------------------------------------------------------- */
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.memory-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          setTimeout(() => card.classList.add('bloom-in'), 50);
        } else {
          card.style.display = 'none';
          card.classList.remove('bloom-in');
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   8. Us Section Interactivity & Audio Chimes
   -------------------------------------------------------------------------- */
function initUsSection() {
  const cards = document.querySelectorAll('.us-stat-card, .us-timeline-content, .us-photo-card');
  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      playKeyBeep();
    });
  });
}

/* --------------------------------------------------------------------------
   9. Birthday Cake & Candle Blow Interaction
   -------------------------------------------------------------------------- */
function initCakeSurprise() {
  const candlesRow = document.getElementById('candles-row');
  const cakeInstruction = document.getElementById('cake-instruction');
  const totalCandles = 19;

  if (!candlesRow) return;
  candlesRow.innerHTML = '';

  let activeCandleCount = 0;
  let blownOutCount = 0;

  // Position candles along top tier ellipse, skipping the 3 backmost candles directly behind Riddhi topper
  for (let i = 0; i < totalCandles; i++) {
    // Skip 3 candles at top/back (behind Riddhi topper sign)
    if (i === 0 || i === 1 || i === 18) {
      continue;
    }

    activeCandleCount++;

    const candle = document.createElement('div');
    candle.className = 'candle-3d';

    const angle = (i / totalCandles) * Math.PI * 2 - Math.PI / 2;
    const isMobile = window.innerWidth <= 520;
    const rx = isMobile ? 80 : 105;  // horizontal radius
    const ry = isMobile ? 22 : 28;   // vertical radius for 3D perspective
    const cx = isMobile ? 100 : 130; // center X
    const cy = isMobile ? 28 : 34;   // center Y

    const x = cx + rx * Math.cos(angle);
    const y = cy + ry * Math.sin(angle);

    candle.style.left = `${x}px`;
    candle.style.top = `${y}px`;
    
    // Depth layering: candles closer to front (higher Y) get higher z-index & scale boost
    const normalizedY = (y - (cy - ry)) / (ry * 2 || 1);
    const depthZ = Math.floor(normalizedY * 50 + 10);
    const scaleFactor = 0.88 + normalizedY * 0.28;
    candle.style.zIndex = depthZ;
    candle.style.transform = `translate(-50%, -100%) scale(${scaleFactor.toFixed(2)})`;

    const flame = document.createElement('div');
    flame.className = 'flame-3d';
    candle.appendChild(flame);

    candle.addEventListener('click', () => {
      if (!candle.classList.contains('extinguished')) {
        candle.classList.add('extinguished');
        playBlowSound();
        blownOutCount++;

        if (blownOutCount === activeCandleCount) {
          cakeInstruction.innerHTML = '🎉 All Birthday Candles Blown Out! <strong>Happy 19th Birthday Riddhi!</strong> ✨';
          playSuccessChime();
          triggerPartyPopperExplosion();
        } else {
          cakeInstruction.textContent = `Click candles to blow them out! (${blownOutCount}/${activeCandleCount} blown out)`;
        }
      }
    });

    candlesRow.appendChild(candle);
  }
}

/* --------------------------------------------------------------------------
   Center White & Ice Blue Sparkle Explosion Effect
   -------------------------------------------------------------------------- */
function triggerPartyPopperExplosion() {
  const canvas = document.createElement('canvas');
  canvas.id = 'party-popper-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '3000';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const centerX = width / 2;
  const centerY = height / 2 - 20;

  // Pure White & Ice Blue Shimmering Sparkles Burst
  const colors = ['#FFFFFF', '#F8F9FA', '#BAE6FD', '#E2E8F0', '#C0C9D6'];
  const particles = [];
  const particleCount = 200;

  for (let i = 0; i < particleCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 14 + 3;
    particles.push({
      x: centerX,
      y: centerY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - Math.random() * 2,
      size: Math.random() * 7 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10,
      opacity: 1,
      gravity: 0.14,
      drag: 0.96,
      sparkleFrequency: Math.random() * 0.2 + 0.05,
    });
  }

  let startTime = Date.now();
  const duration = 4500; // 4.5 seconds

  function drawStar(ctx, x, y, radius, opacity, color) {
    ctx.save();
    ctx.translate(x, y);
    ctx.globalAlpha = opacity;
    ctx.fillStyle = color;
    ctx.shadowColor = '#BAE6FD';
    ctx.shadowBlur = 12;

    ctx.beginPath();
    for (let i = 0; i < 4; i++) {
      ctx.rotate(Math.PI / 2);
      ctx.lineTo(0, 0 - radius);
      ctx.lineTo(0 + radius * 0.25, 0);
    }
    ctx.fill();
    ctx.restore();
  }

  function animate() {
    const elapsed = Date.now() - startTime;
    if (elapsed > duration) {
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
      return;
    }

    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= p.drag;
      p.vy *= p.drag;
      p.rotation += p.rotSpeed;

      const sparkleOpacity = ((Math.sin(Date.now() * p.sparkleFrequency) + 1) / 2) * 0.4 + 0.6;
      let finalOpacity = p.opacity * sparkleOpacity;

      if (elapsed > duration - 1000) {
        finalOpacity *= Math.max(0, (duration - elapsed) / 1000);
      }

      drawStar(ctx, p.x, p.y, p.size, finalOpacity, p.color);
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* --------------------------------------------------------------------------
   10. "A Heartfelt Unveiling" Interactive Arrow & Letter Experience
   -------------------------------------------------------------------------- */
function initHeartfeltUnveiling() {
  const openBtn = document.getElementById('open-surprise-btn');
  const overlay = document.getElementById('heartfelt-unveiling-overlay');
  const closeBtn = document.getElementById('close-surprise-overlay');
  const targetStage = document.getElementById('unveil-target-stage');
  const heartWrapper = document.getElementById('heart-target-wrapper');
  const heartSvg = document.getElementById('glowing-white-heart');
  const flyingArrow = document.getElementById('flying-arrow');
  const letterCard = document.getElementById('heartfelt-letter-card');
  const canvas = document.getElementById('heart-sparkles-canvas');

  if (!openBtn || !overlay) return;

  let hasFired = false;
  let particles = [];
  let animId = null;

  // Open modal overlay
  openBtn.addEventListener('click', () => {
    overlay.classList.add('active');
    ensureAudioStarted();
    resetUnveilingScene();
  });

  // Close modal overlay
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('active');
    });
  }

  function resetUnveilingScene() {
    hasFired = false;
    targetStage.classList.remove('hidden-stage');
    letterCard.classList.remove('visible-card');
    const envelopeBox = document.getElementById('envelope-3d-box');
    if (envelopeBox) {
      envelopeBox.classList.remove('envelope-opening');
    }
    const paras = letterCard.querySelectorAll('.letter-para');
    paras.forEach((p) => p.classList.remove('revealed-para'));
    if (letterCard) letterCard.scrollTop = 0;
    if (overlay) overlay.scrollTop = 0;
  }

  // Starry Night Sky & Shooting Stars Canvas Engine
  function initSparklesCanvas() {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Generate static/twinkling stars array
    const starCount = 180;
    const stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.8 + 0.6,
        baseAlpha: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 0.04 + 0.01,
        phase: Math.random() * Math.PI * 2,
        color: Math.random() > 0.3 ? '#FFFFFF' : '#BAE6FD'
      });
    }

    // Shooting stars array
    const shootingStars = [];
    let lastShootingStarTime = 0;

    window.addEventListener('resize', () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    });

    function spawnShootingStar() {
      const startX = Math.random() * (canvas.width * 0.8) + canvas.width * 0.1;
      const startY = Math.random() * (canvas.height * 0.4);
      const angle = (Math.PI / 180) * (Math.random() * 20 + 25); // 25-45 degrees diagonal drop
      const length = Math.random() * 110 + 80;
      const speed = Math.random() * 15 + 10;

      shootingStars.push({
        x: startX,
        y: startY,
        angle: angle,
        length: length,
        speed: speed,
        alpha: 1,
        life: 0,
        maxLife: Math.random() * 35 + 25
      });
    }

    function renderStarryNight() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = Date.now();

      // 1. Draw Twinkling Stars
      stars.forEach(star => {
        const alpha = star.baseAlpha + Math.sin(time * star.twinkleSpeed + star.phase) * 0.35;
        const finalAlpha = Math.max(0.1, Math.min(1, alpha));

        ctx.save();
        ctx.globalAlpha = finalAlpha;
        ctx.fillStyle = star.color;
        ctx.shadowColor = '#BAE6FD';
        ctx.shadowBlur = star.radius > 1.4 ? 8 : 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // 2. Spawn and Draw Shooting Stars
      if (time - lastShootingStarTime > (Math.random() * 1800 + 1200)) {
        spawnShootingStar();
        lastShootingStarTime = time;
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.life++;

        const tailX = ss.x - Math.cos(ss.angle) * ss.length;
        const tailY = ss.y - Math.sin(ss.angle) * ss.length;

        const fadeRatio = 1 - ss.life / ss.maxLife;
        if (fadeRatio <= 0) {
          shootingStars.splice(i, 1);
          continue;
        }

        ctx.save();
        const grad = ctx.createLinearGradient(ss.x, ss.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${fadeRatio})`);
        grad.addColorStop(0.3, `rgba(186, 230, 253, ${fadeRatio * 0.8})`);
        grad.addColorStop(1, 'rgba(56, 189, 248, 0)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.shadowColor = '#FFFFFF';
        ctx.shadowBlur = 12;

        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // Bright star head
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(ss.x, ss.y, 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      // 3. Draw On-Click Particle Sparkle Bursts
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05;
        p.alpha -= 0.012;
        p.size *= 0.98;

        if (p.alpha <= 0 || p.size <= 0.2) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(renderStarryNight);
    }

    window.triggerParticleBurst = function (originX, originY) {
      const colors = ['#FFFFFF', '#F8F9FA', '#BAE6FD', '#7DD3FC', '#38BDF8'];
      const count = 90;

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 9 + 3;
        particles.push({
          x: originX,
          y: originY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1,
          size: Math.random() * 5 + 3,
          alpha: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    if (animId) cancelAnimationFrame(animId);
    renderStarryNight();
  }

  initSparklesCanvas();

  // Interactive 3D Theme Envelope Click Interaction
  targetStage.addEventListener('click', (e) => {
    if (hasFired) return;
    hasFired = true;

    const envelopeBox = document.getElementById('envelope-3d-box');
    const stageRect = targetStage.getBoundingClientRect();
    const originX = stageRect.left + stageRect.width / 2;
    const originY = stageRect.top + stageRect.height / 2;

    playSuccessChime();

    // 1. Trigger 3D V-Flap Flip Open & Letter Slide Out
    if (envelopeBox) {
      envelopeBox.classList.add('envelope-opening');
    }

    // 2. Trigger Star Sparkles Burst
    if (window.triggerParticleBurst) {
      window.triggerParticleBurst(originX, originY);
    }

    // 3. Smooth transition to Heartfelt Letter Card
    setTimeout(() => {
      targetStage.classList.add('hidden-stage');
      letterCard.classList.add('visible-card');
      revealLetterGradually();
    }, 700);
  });

  function revealLetterGradually() {
    if (letterCard) letterCard.scrollTop = 0;
    if (overlay) overlay.scrollTop = 0;
    const paras = letterCard.querySelectorAll('.letter-para');
    paras.forEach((p, index) => {
      setTimeout(() => {
        p.classList.add('revealed-para');
      }, index * 250 + 100);
    });
  }
}

/* --------------------------------------------------------------------------
   11. Multi-Page Website Navigation Engine
   -------------------------------------------------------------------------- */
function initPageNavigation() {
  const navLinks = document.querySelectorAll('.nav-link[data-page]');
  const pageViews = document.querySelectorAll('.page-view');
  const navAudioBtn = document.getElementById('nav-audio-btn');
  const audioToggleBtn = document.getElementById('audio-toggle-btn');

  function switchPage(pageId) {
    if (!pageId) pageId = 'home';
    
    // Normalize pageId (strip leading # if present)
    const targetId = pageId.replace('#', '');
    const targetPage = document.getElementById(`page-${targetId}`);
    if (!targetPage) return;

    // Update active page view
    pageViews.forEach((pv) => {
      pv.classList.remove('active');
    });
    targetPage.classList.add('active');

    // Update active nav links
    navLinks.forEach((link) => {
      if (link.getAttribute('data-page') === targetId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Smooth scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Handle click events on data-page links
  document.querySelectorAll('[data-page]').forEach((element) => {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      const page = element.getAttribute('data-page');
      if (!page) return;
      
      try {
        history.pushState(null, '', `#${page}`);
      } catch (err) {}
      
      switchPage(page);
    });
  });

  // Sync nav audio button with hero video controls
  navAudioBtn?.addEventListener('click', () => {
    audioToggleBtn?.click();
  });

  // Listen to popstate for browser back/forward buttons
  window.addEventListener('popstate', () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    switchPage(hash);
  });

  // Initial page view determination
  const initialHash = window.location.hash.replace('#', '') || 'home';
  switchPage(initialHash);
}
