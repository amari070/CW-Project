// Responsive font size adjustment for hero headline
function handleResize() {
  const heroHeadline = document.querySelector('.hero h1');
  if (!heroHeadline) return;

  if (window.innerWidth <= 480) {
    heroHeadline.style.fontSize = '1.5rem';
  } else if (window.innerWidth <= 768) {
    heroHeadline.style.fontSize = '2rem';
  } else {
    heroHeadline.style.fontSize = '2.5rem';
  }
}

// Call on load and resize
window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize);

// CTA button hover effects
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
  // Set initial transition style
  ctaButton.style.transition = 'background-color 0.3s ease, transform 0.2s ease';

  ctaButton.addEventListener('mouseenter', () => {
    ctaButton.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--orange').trim();
    ctaButton.style.transform = 'scale(1.05)';
  });

  ctaButton.addEventListener('mouseleave', () => {
    ctaButton.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--yellow').trim();
    ctaButton.style.transform = 'scale(1)';
  });
}

// Hero image hover effects
const heroImg = document.querySelector('.hero-img');
if (heroImg) {
  heroImg.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';

  heroImg.addEventListener('mouseenter', () => {
    heroImg.style.transform = 'scale(1.03) rotate(1deg)';
    heroImg.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.4)';
  });

  heroImg.addEventListener('mouseleave', () => {
    heroImg.style.transform = 'scale(1) rotate(0deg)';
    heroImg.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
  });
}

// Fade-in animation for hero content on page load
const heroContent = document.querySelector('.hero-content');
if (heroContent) {
  heroContent.style.opacity = 0;
  heroContent.style.transform = 'translateY(20px)';
  heroContent.style.transition = 'opacity 1s ease, transform 1s ease';

  window.addEventListener('load', () => {
    setTimeout(() => {
      heroContent.style.opacity = 1;
      heroContent.style.transform = 'translateY(0)';
    }, 300);
  });
}

