// translate.js - GTranslate Widget for Automatic Translation
// Add this script to your HTML files via <script src="translate.js"></script>
// Also add <div class="gtranslate_wrapper"></div> in your <body>


window.gtranslateSettings = {
    "default_language": "en",  // Default to English; change if needed
    "languages": ["en", "fr", "es", "de", "it", "ja", "zh-CN", "ar", "sw"],  // Included Swahili ("sw"); add more as needed
    "wrapper_selector": ".gtranslate_wrapper",  // Targets the div in your HTML
    "switcher_horizontal_position": "right",  // Position of the language selector
    "switcher_vertical_position": "top",
    "native_language_names": true,
    "detect_browser_language": true,
    "flag_style": "3d",
    "horizontal_position": "inline",   // 👈 KEY
    "vertical_position": "inline"      // 👈 KEY
};

// Load the GTranslate widget script
var script = document.createElement('script');
script.src ='https://cdn.gtranslate.net/widgets/latest/dropdown.js';

script.defer = true;
document.body.appendChild(script);