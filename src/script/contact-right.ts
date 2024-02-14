export const container = document.querySelector('.contact-right');

if (container) {
  container
    .querySelector('.contact-right__wa')
    .addEventListener('click', () => {
      gtag('event', 'contact_right', {
        'event_category': 'contact',
        'event_label': 'whatsapp',
        'value': 1
      });
      fbq('track', 'Contact', {
        method: 'whatsapp'
      });
    });

  container
    .querySelector('.contact-right__email')
    .addEventListener('click', () => {
      gtag('event', 'contact_right', {
        'event_category': 'contact',
        'event_label': 'email',
        'value': 1
      });
      fbq('track', 'Contact', {
        method: 'email'
      });
    });

  container
    .querySelector('.contact-right__call')
    .addEventListener('click', () => {
      gtag('event', 'contact_right', {
        'event_category': 'contact',
        'event_label': 'call',
        'value': 1
      });
      fbq('track', 'Contact', {
        method: 'call'
      });
    });
}
