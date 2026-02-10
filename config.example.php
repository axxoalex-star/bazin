<?php
/**
 * Configuration Example File
 * Copy this to config.php and update with your actual values
 * DO NOT commit config.php to version control!
 */

// Email Configuration
define('CONTACT_EMAIL', 'contact@bazinbacau.ro');
define('ADMIN_EMAIL', 'admin@bazinbacau.ro');
define('FROM_EMAIL', 'noreply@bazinbacau.ro');
define('FROM_NAME', 'Bazinul de Înot Bacău');

// SMTP Configuration (if using PHPMailer)
define('SMTP_HOST', 'smtp.example.com');
define('SMTP_PORT', 587);
define('SMTP_USERNAME', 'your-smtp-username');
define('SMTP_PASSWORD', 'your-smtp-password');
define('SMTP_ENCRYPTION', 'tls'); // 'tls' or 'ssl'

// Site Configuration
define('SITE_NAME', 'Bazinul de Înot Bacău');
define('SITE_URL', 'https://www.bazinbacau.ro');
define('SITE_PHONE', '+40 234 567 890');
define('SITE_ADDRESS', 'Str. Sportului nr. 10, Bacău, 600123');

// Google Services
define('GOOGLE_ANALYTICS_ID', 'UA-XXXXXXXXX-X');
define('GOOGLE_MAPS_API_KEY', 'your-google-maps-api-key');
define('GOOGLE_RECAPTCHA_SITE_KEY', 'your-recaptcha-site-key');
define('GOOGLE_RECAPTCHA_SECRET_KEY', 'your-recaptcha-secret-key');

// Social Media
define('FACEBOOK_URL', 'https://facebook.com/bazinbacau');
define('INSTAGRAM_URL', 'https://instagram.com/bazinbacau');
define('YOUTUBE_URL', 'https://youtube.com/c/bazinbacau');
define('TIKTOK_URL', 'https://tiktok.com/@bazinbacau');

// Development Mode
define('DEBUG_MODE', false); // Set to false in production

// Timezone
date_default_timezone_set('Europe/Bucharest');

// Error Reporting (for production, set to 0)
if (DEBUG_MODE) {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
} else {
    error_reporting(0);
    ini_set('display_errors', 0);
}
