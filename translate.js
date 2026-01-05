

window.gtranslateSettings = {
    "default_language": "en",  // Default to English; change if needed
    "languages": ["en", "fr", "es", "de", "it", "ja", "zh-CN", "ar", "sw"], 
    "wrapper_selector": ".gtranslate_wrapper",  
    "switcher_horizontal_position": "right",  
    "switcher_vertical_position": "top",
    "native_language_names": true,
    "detect_browser_language": true,
    "flag_style": "3d",
    "horizontal_position": "inline", 
    "vertical_position": "inline"      
};

// Load the GTranslate widget script
var script = document.createElement('script');
script.src ='https://cdn.gtranslate.net/widgets/latest/dropdown.js';

script.defer = true;
document.body.appendChild(script);