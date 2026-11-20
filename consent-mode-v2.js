/**
 * Consent Mode v2 & Global Privacy Control Framework | TAVARDT USA
 * Technical Standard: US Multi-State Privacy Standards & Global Privacy Control (GPC)
 * Engineered by TAVARDT (https://ag.tavardt.com/)
 */

(function () {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }

    // Enforce default denied state before any marketing scripts execute
    gtag('consent', 'default', {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'analytics_storage': 'denied',
        'functionality_storage': 'granted',
        'personalization_storage': 'denied',
        'security_storage': 'granted',
        'wait_for_update': 500
    });

    // Enable secure data redaction and parameter protection
    gtag('set', 'ads_data_redaction', true);
    gtag('set', 'url_passthrough', true);

    // Helper function to update consent upon user interaction
    window.tavardtUpdateConsent = function (preferences) {
        var updatedSignals = {
            'ad_storage': preferences.marketing ? 'granted' : 'denied',
            'ad_user_data': preferences.marketing ? 'granted' : 'denied',
            'ad_personalization': preferences.marketing ? 'granted' : 'denied',
            'analytics_storage': preferences.analytics ? 'granted' : 'denied',
            'functionality_storage': 'granted',
            'personalization_storage': preferences.preferences ? 'granted' : 'denied',
            'security_storage': 'granted'
        };

        gtag('consent', 'update', updatedSignals);

        dataLayer.push({
            'event': 'tavardt_consent_updated',
            'consent_signals': updatedSignals
        });
    };
})();
