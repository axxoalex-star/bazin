# Bazinul de Înot Bacău - Landing Page

🏊 Premium one-page landing website for a modern swimming pool complex in Bacău, Romania.

## 🌟 Features

### ✨ Premium UI Components
- **Sticky Glassmorphism Header** - Transparent header with blur effect on scroll
- **Hero Section** - Full-screen hero with gradient background, animated patterns, and CTAs
- **Mobile Call Button** - Fixed floating call button with pulse animation
- **Pricing Cards** - Mobile-friendly pricing cards with hover effects
- **Accordion Regulament** - Collapsible regulations section for better UX
- **Smooth Scrolling** - Seamless navigation between sections

### 🎨 Design Features
- **Aquatic Color Palette** - Cyan, turquoise, and blue tones
- **Vector Icons** - Font Awesome 6.5.1 integration
- **Responsive Design** - Mobile-first, fully responsive for all devices
- **Accessibility** - WCAG compliant with ARIA labels and keyboard navigation
- **Animations** - Subtle fade-in effects and hover transitions

### 📋 Sections
1. **Hero** - Main banner with CTAs (Programări Online & Contact Direct)
2. **Despre** - About the swimming pool complex
3. **Facilități** - 9 facility cards with vector icons
4. **Tarife** - 6 pricing cards + detailed pricing table
5. **Regulament** - 7-item accordion with internal regulations
6. **Contact** - PHP contact form with validation + map integration

### 📧 Contact Form
- **PHP Backend** - Server-side validation and mail() function
- **Client Validation** - Real-time JavaScript validation
- **Fields**: Name, Email, Phone, Message
- **Success/Error Messages** - User-friendly feedback
- **Security** - Input sanitization and XSS protection

## 📁 Project Structure

```
bazin/
├── index.php           # Main landing page (PHP with form processing)
├── css/
│   └── style.css      # Premium stylesheet (aquatic theme)
├── js/
│   └── script.js      # Interactive features (accordion, smooth scroll, menu)
├── images/            # (Placeholder - add actual images here)
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## 🚀 Installation & Setup

### Requirements
- PHP 7.4+ (for contact form)
- Web server (Apache/Nginx)
- Modern browser (Chrome, Firefox, Safari, Edge)

### Quick Start

1. **Clone or download** the repository
2. **Configure web server** to serve from project root
3. **Update email address** in `index.php` line 51:
   ```php
   $to = 'your-email@domain.com'; // Change this!
   ```
4. **Configure mail server** (optional, for production):
   - Set up SMTP or use PHP's default mail()
   - For testing, use a mail catcher like Mailhog

5. **Open in browser**: `http://localhost/bazin/`

### Local Development

#### Option 1: PHP Built-in Server
```bash
cd /path/to/project
php -S localhost:8000
```
Open: `http://localhost:8000`

#### Option 2: XAMPP/WAMP
1. Copy project to `htdocs` or `www` folder
2. Access via `http://localhost/bazin/`

#### Option 3: Docker
```bash
docker run -p 8080:80 -v $(pwd):/var/www/html php:8.1-apache
```

## 🎨 Customization Guide

### Colors
Edit CSS variables in `css/style.css` (lines 10-30):
```css
:root {
    --color-primary: #0891b2;      /* Main aquatic blue */
    --color-secondary: #0ea5e9;    /* Secondary blue */
    --color-accent: #22d3ee;       /* Accent cyan */
}
```

### Content
All content is in `index.php` - edit Romanian text directly in HTML sections.

### Images
Replace SVG placeholders with actual images:
1. Add images to `images/` folder
2. Update image sources in `index.php`:
   ```html
   <img src="images/pool-hero.jpg" alt="...">
   ```

### Phone Numbers
Update in multiple places:
- `index.php` (tel: links)
- Contact info cards
- Footer

### Email Configuration
For production, configure proper SMTP:
```php
// Use PHPMailer or similar library
require 'vendor/autoload.php';
$mail = new PHPMailer\PHPMailer\PHPMailer();
// ... configure SMTP
```

### Map Integration
Update Google Maps embed URL in `index.php` (line ~850):
```html
<iframe src="YOUR_GOOGLE_MAPS_EMBED_URL" ...>
```

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | 90+     |
| Firefox | 88+     |
| Safari  | 14+     |
| Edge    | 90+     |
| Opera   | 76+     |

## ♿ Accessibility Features

- ✅ Semantic HTML5 elements
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Focus visible indicators
- ✅ Alt text for images
- ✅ Sufficient color contrast
- ✅ Reduced motion support
- ✅ Screen reader friendly

## 📊 Performance

- Optimized CSS with modern practices
- Minimal JavaScript (vanilla, no frameworks)
- Lazy loading for images
- Throttled scroll events
- Efficient DOM manipulation

## 🔒 Security Features

- Input sanitization (htmlspecialchars)
- Email validation (filter_var)
- Phone validation (regex)
- XSS protection
- CSRF protection (add tokens for production)

## 🌐 SEO Optimized

- Semantic HTML structure
- Meta descriptions
- Open Graph tags ready
- Structured data ready
- Fast loading times
- Mobile-friendly

## 📝 Form Validation

### Client-side (JavaScript)
- Real-time validation on blur
- Visual error indicators
- Scroll to first error

### Server-side (PHP)
- Required field validation
- Email format validation
- Phone format validation
- Message length validation
- Error message array

## 🎯 Next Steps / Enhancements

1. **Backend Integration**
   - Database for storing inquiries
   - Admin panel for managing content
   - Online booking system

2. **Additional Features**
   - Image gallery with lightbox
   - Testimonials slider
   - Blog/news section
   - Multi-language support

3. **Advanced Contact Form**
   - reCAPTCHA integration
   - Email templates
   - Auto-responder
   - CRM integration

4. **Analytics**
   - Google Analytics
   - Facebook Pixel
   - Heat mapping

## 🐛 Troubleshooting

### Contact form not sending emails

**Solution 1:** Check PHP mail configuration
```bash
php -i | grep sendmail
```

**Solution 2:** Use SMTP instead of mail()
- Install PHPMailer: `composer require phpmailer/phpmailer`
- Configure SMTP settings

### Mobile menu not closing

**Solution:** Check JavaScript console for errors
- Ensure `script.js` is loaded
- Check browser compatibility

### Accordion not working

**Solution:** Verify JavaScript is enabled
- Check for JavaScript errors in console
- Ensure proper DOM loading (DOMContentLoaded)

## 📄 License

This project is created for Bazinul de Înot Bacău. All rights reserved.

## 👨‍💻 Development

### Code Style
- HTML: Semantic, indented with 4 spaces
- CSS: BEM-inspired naming, CSS variables
- JavaScript: Vanilla JS, ES6+, IIFE pattern
- PHP: PSR-12 coding standards

### Comments
All code is extensively commented for maintainability.

## 📞 Support

For questions or support:
- Email: contact@bazinbacau.ro
- Phone: +40 234 567 890

---

**Built with ❤️ for Bazinul de Înot Bacău**

*Premium landing page featuring modern design, aquatic color palette, and responsive layout.*
