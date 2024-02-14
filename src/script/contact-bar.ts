export const container = document.querySelector('.contact-bar-container');

if (container) {
  container
    .querySelector('.contact-bar__wa')
    .addEventListener('click', () => {
      gtag('event', 'bottom_contact', {
        'event_category': 'contact',
        'event_label': 'whatsapp',
        'value': 1
      });
      fbq('track', 'Contact', {
        method: 'whatsapp'
      });
    });

  container
    .querySelector('.contact-bar__email')
    .addEventListener('click', () => {
      gtag('event', 'bottom_contact', {
        'event_category': 'contact',
        'event_label': 'email',
        'value': 1
      });
      fbq('track', 'Contact', {
        method: 'email'
      });
    });

  container
    .querySelector('.contact-bar__call')
    .addEventListener('click', () => {
      gtag('event', 'bottom_contact', {
        'event_category': 'contact',
        'event_label': 'call',
        'value': 1
      });
      fbq('track', 'Contact', {
        method: 'call'
      });
    });
}
