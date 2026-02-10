# Development Guide - Bazinul de Înot Bacău

## 🛠️ Technical Details

### Technology Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: PHP 7.4+
- **Icons**: Font Awesome 6.5.1
- **Fonts**: Google Fonts (Poppins, Montserrat)
- **No Framework**: Pure vanilla JavaScript for maximum performance

### CSS Architecture

#### BEM-Inspired Naming Convention
```css
.block { }
.block__element { }
.block--modifier { }
```

Examples:
- `.nav` → `.nav__link`, `.nav__menu`, `.nav__toggle`
- `.pricing-card` → `.pricing-card__title`, `.pricing-card__price`, `.pricing-card--featured`
- `.accordion` → `.accordion__item`, `.accordion__header`, `.accordion__content`

#### CSS Variables Structure
All colors, spacing, and design tokens are defined as CSS variables in `:root`:
- Colors: `--color-primary`, `--color-secondary`, etc.
- Spacing: `--spacing-xs` through `--spacing-3xl`
- Transitions: `--transition-fast`, `--transition-base`, `--transition-slow`

#### Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 992px
- Mobile: < 768px
- Small mobile: < 480px

### JavaScript Structure

#### IIFE Pattern
All JavaScript is wrapped in an Immediately Invoked Function Expression to avoid global scope pollution:
```javascript
(function() {
    'use strict';
    // All code here
})();
```

#### Event Delegation
Efficient event handling using event delegation where applicable.

#### Performance Optimizations
- Throttled scroll events
- Intersection Observer for animations
- Debounced resize events
- Lazy loading support

### PHP Form Processing

#### Security Measures
1. **Input Sanitization**: `htmlspecialchars()` on all inputs
2. **Email Validation**: `filter_var()` with `FILTER_VALIDATE_EMAIL`
3. **Phone Validation**: Regular expression pattern matching
4. **XSS Prevention**: All user input escaped before output

#### Form Flow
1. User submits form via POST
2. Server validates all fields
3. If valid: Send email using `mail()` function
4. Display success/error message
5. Scroll to message for user feedback

### Feature Implementation Details

#### 1. Sticky Glassmorphism Header
- Position: `fixed` with `top: 0`
- Transparency: `rgba(255, 255, 255, 0.95)`
- Backdrop filter: `blur(10px)`
- Triggers on scroll > 80px
- Smooth transition between states

#### 2. Mobile Menu
- Off-canvas slide-in menu
- Full-screen overlay
- Body scroll lock when open
- Close on: outside click, close button, nav link click, or ESC key
- Smooth CSS transitions

#### 3. Accordion
- Single-open behavior (can be changed to multiple-open)
- Smooth max-height animation
- ARIA attributes for accessibility
- Keyboard navigation support (Enter/Space)
- Expand all for printing

#### 4. Pricing Cards
- CSS Grid with `auto-fit` and `minmax()`
- Featured card with scale transform
- Hover effects with translateY
- Mobile-responsive (stacks on small screens)

#### 5. Smooth Scrolling
- Native `scroll-behavior: smooth` for modern browsers
- JavaScript fallback with `window.scrollTo()`
- Header height compensation for anchor targets

#### 6. Form Validation
- Client-side: Real-time validation on blur
- Server-side: Comprehensive validation before processing
- Visual feedback with error classes
- Scroll to first error on submit

#### 7. Animation on Scroll
- Intersection Observer API
- Fade-in and slide-up effects
- Elements with `data-aos` attribute
- Opacity and transform transitions

#### 8. Back to Top Button
- Appears after scrolling 500px
- Smooth scroll to top on click
- Fixed position (bottom-left)
- Animated appearance

#### 9. Mobile Call Button
- Fixed position (bottom-right)
- Pulse animation for attention
- Direct `tel:` link for mobile devices
- z-index layering for visibility

### Color Palette Breakdown

#### Aquatic Primary Colors
- **Primary**: `#0891b2` - Cyan-600 (main brand color)
- **Primary Light**: `#06b6d4` - Cyan-500 (lighter variant)
- **Primary Dark**: `#0e7490` - Cyan-700 (darker variant)
- **Secondary**: `#0ea5e9` - Sky-500 (supporting color)
- **Accent**: `#22d3ee` - Cyan-400 (highlights)

#### Neutral Grays
- **Light**: `#f0f9ff` - Sky-50 (backgrounds)
- **Light Blue**: `#e0f2fe` - Sky-100 (subtle backgrounds)
- **Gray Scale**: 100-900 (text, borders, etc.)

#### Semantic Colors
- **Success**: `#10b981` - Emerald-500
- **Warning**: `#f59e0b` - Amber-500
- **Error**: `#ef4444` - Red-500
- **Info**: `#3b82f6` - Blue-500

### Browser-Specific Considerations

#### Safari
- `-webkit-backdrop-filter` for glassmorphism
- `-webkit-` prefixes for certain properties

#### Firefox
- Fallback for backdrop-filter
- Custom scrollbar styling not supported

#### Edge/IE11
- Intersection Observer polyfill needed
- CSS Grid fallback if supporting IE11
- Custom properties not supported in IE11

### Performance Metrics

#### Target Metrics
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Lighthouse Score: 90+
- PageSpeed Insights: 85+

#### Optimization Techniques
- Minify CSS/JS for production
- Lazy load images below the fold
- Use CDN for Font Awesome
- Defer non-critical JavaScript
- Optimize image formats (WebP with fallback)

### Accessibility Checklist

- [x] Semantic HTML5 elements
- [x] ARIA labels on interactive elements
- [x] Keyboard navigation (Tab, Enter, Space, Esc)
- [x] Focus visible indicators
- [x] Color contrast ratio > 4.5:1
- [x] Alt text on all images
- [x] Form labels properly associated
- [x] Error messages announced
- [x] Reduced motion support
- [x] Screen reader tested

### Testing Checklist

#### Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

#### Device Testing
- [ ] Desktop (1920x1080, 1366x768)
- [ ] Tablet (iPad, 768x1024)
- [ ] Mobile (iPhone, 375x667)
- [ ] Large Mobile (414x896)

#### Functionality Testing
- [ ] Navigation menu (mobile & desktop)
- [ ] All anchor links scroll correctly
- [ ] Form validation (client & server)
- [ ] Email sending works
- [ ] Accordion expand/collapse
- [ ] All hover states
- [ ] Back to top button
- [ ] Mobile call button
- [ ] Responsive breakpoints

#### Accessibility Testing
- [ ] Keyboard-only navigation
- [ ] Screen reader (NVDA/JAWS)
- [ ] Color contrast checker
- [ ] Lighthouse accessibility audit
- [ ] WAVE browser extension

### Deployment Checklist

#### Pre-Production
1. [ ] Update email address in `index.php`
2. [ ] Update phone numbers throughout
3. [ ] Add actual images to `images/` folder
4. [ ] Update Google Maps embed
5. [ ] Add Google Analytics ID
6. [ ] Configure mail server/SMTP
7. [ ] Test contact form thoroughly
8. [ ] Set up SSL certificate
9. [ ] Configure `.htaccess` for Apache
10. [ ] Set up 301 redirects if needed

#### Production Settings
1. [ ] Set `DEBUG_MODE` to `false`
2. [ ] Disable PHP error display
3. [ ] Enable error logging
4. [ ] Minify CSS and JavaScript
5. [ ] Enable Gzip compression
6. [ ] Set cache headers
7. [ ] Configure security headers
8. [ ] Add robots.txt
9. [ ] Add sitemap.xml
10. [ ] Test on live server

#### Security Hardening
1. [ ] Add CSRF tokens to form
2. [ ] Implement rate limiting
3. [ ] Add CAPTCHA (reCAPTCHA v3)
4. [ ] Use HTTPS only
5. [ ] Set secure cookie flags
6. [ ] Add Content Security Policy
7. [ ] Disable directory listing
8. [ ] Hide PHP version
9. [ ] Regular security updates
10. [ ] Backup strategy in place

### File Size Targets

- `index.php`: ~55KB (acceptable for full-featured page)
- `style.css`: ~33KB (can be minified to ~25KB)
- `script.js`: ~16KB (can be minified to ~10KB)
- **Total**: ~104KB (excellent for a full landing page)

### Future Enhancements

#### Phase 2 Features
1. Online booking system integration
2. Member login portal
3. Payment gateway integration (Stripe/PayPal)
4. Dynamic pricing based on time
5. Real-time availability calendar

#### Phase 3 Features
1. Admin dashboard
2. CMS for content management
3. Blog/news section
4. Image gallery with upload
5. Email newsletter signup

#### Technical Improvements
1. Convert to PWA (Progressive Web App)
2. Add service worker for offline access
3. Implement push notifications
4. Add structured data (Schema.org)
5. Multi-language support (Romanian/English)

### Common Customization Tasks

#### Change Primary Color
```css
:root {
    --color-primary: #YOUR_COLOR;
}
```

#### Add New Section
1. Add HTML section with class `.section`
2. Add navigation link to header
3. Add smooth scroll functionality (automatic)
4. Style as needed

#### Modify Contact Form Fields
1. Add field HTML in `index.php`
2. Add validation in PHP backend
3. Add validation in JavaScript
4. Update email template

#### Change Fonts
```html
<!-- In <head> -->
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```
```css
:root {
    --font-primary: 'Your Font', sans-serif;
}
```

### Troubleshooting Common Issues

#### Issue: Accordion not working
**Cause**: JavaScript not loaded or DOM not ready
**Fix**: Check console errors, ensure script is at end of body

#### Issue: Form not submitting
**Cause**: PHP mail not configured
**Fix**: Set up SMTP or use PHPMailer library

#### Issue: Mobile menu stuck open
**Cause**: JavaScript error interrupting close function
**Fix**: Check console, ensure all event listeners attached

#### Issue: Glassmorphism not visible
**Cause**: Browser doesn't support backdrop-filter
**Fix**: Add fallback background: `background: rgba(255,255,255,0.95);`

### Git Workflow

#### Branching Strategy
- `main` - Production-ready code
- `develop` - Development branch
- `feature/*` - Feature branches
- `hotfix/*` - Quick fixes

#### Commit Message Format
```
type(scope): subject

body (optional)

footer (optional)
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Example:
```
feat(contact): add reCAPTCHA to contact form

- Integrated Google reCAPTCHA v3
- Added server-side verification
- Updated form validation

Closes #123
```

### Support & Maintenance

#### Regular Tasks
- Weekly: Check error logs
- Monthly: Security updates
- Quarterly: Performance audit
- Yearly: Full code review

#### Monitoring
- Google Analytics: Traffic and behavior
- Search Console: SEO and indexing
- Uptime monitoring: Server availability
- Error tracking: Sentry or similar

---

**Last Updated**: February 2024
**Developer Contact**: development@bazinbacau.ro
