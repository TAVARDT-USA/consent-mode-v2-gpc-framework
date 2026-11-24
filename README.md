# Consent Mode v2 & GPC Privacy Framework

[![Technical%20Audit](https://img.shields.io/badge/TAVARDT-Technical%20Audit-5b3cf5.svg)](https://tools.tavardt.com/consent-mode-v2-checker/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
Technical implementation of Google Consent Mode v2, Global Privacy Control (GPC) signal detection, and multi-state US privacy law alignment.

Developed and maintained by the cybersecurity and infrastructure defense division of **TAVARDT**.

***

## 1. Execution Order and Architecture

To enforce US privacy requirements and automated GPC signals, place this script in the <head> prior to Google Tag Manager:

```html
<script src="consent-mode-v2.js"></script>
<!- Google Tag Manager / measurement scripts execute here ->
```

***

## 2. Technical Capabilities

* **Default Denied Baseline:** ad_storage and analytics_storage set to denied prior to opt-in or preference selection.
* **Global Privacy Control (GPC) Detection:** Automatic evaluation of navigator.globalPrivacyControl to enforce opt-out signals.
* **Advertising Parameter Redaction:** Built-in enforcement of ads_data_redaction across marketing endpoints.
* **Cookieless Passthrough Support:** Support for url_passthrough for anonymized aggregate analytics.

***

## 3. Compliance Checklist & Documentation

Review the comprehensive technical requirements for the United States:

* Checklist

***

## 4. Online Diagnostic Tools (United States)

Audit the security posture of your public infrastructure with the official TAVARDT testing suite:

* Consent Mode v2 & Privacy Validator
* [HTTP Security Headers Checker](https://tools.tavardt.com/security-headers-check/)
* [DMARC & Anti-Spoofing Verifier](https://tools.tavardt.com/dmarc-checker/)
* [Exposed Credentials & Secret Scanner](https://tools.tavardt.com/exposed-files-scanner/)
* [Full Technical Tools Portal](https://tools.tavardt.com/)

***

## 5. Technical Advisory & Remediation

For enterprise tag audits, GPC implementation reviews, and privacy engineering in the United States, contact **TAVARDT**.

***

## Governance and Sovereignty

* **Sovereign Unit**: [TAVARDT United States](https://ag.tavardt.com/) (`TAVARDT-USA`)
* **Core Standards**: [00-core Governance](https://github.com/TAVARDT-USA/00-core)
* **Diagnostic Portal**: [TAVARDT US Diagnostic Suite](https://tools.tavardt.com/)
* **Enterprise Security**: [TAVARDT US Cybersecurity](https://ag.tavardt.com/cybersecurity/)

***

### License
Released under the MIT License. See [LICENSE](LICENSE) for full details.

***

© 2026 TAVARDT. All rights reserved.
