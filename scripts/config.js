/*
 * Shared default brand config. A brand overrides this file with its own
 * /scripts/config.js to enable integrations. The default below is empty, so
 * nothing is loaded by head-includes.js until a brand adds an integration key.
 *
 * To turn on Ketch, a brand replaces this file with a config.js that sets a
 * ketch block, for example:
 *
 * window.BRAND_CONFIG = {
 *   ketch: {
 *     propertyId: 'your_property_id',
 *     organizationId: 'your_organization_id',
 *     privacyLinkHash: '#privacy-choices',
 *   },
 * };
 */
window.BRAND_CONFIG = {};
