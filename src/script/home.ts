import { HtmlClassChanger } from './html-class-changer';

new HtmlClassChanger({
  baseClass: '',
  list: [
    {selector: '.s-intro', class: 'pbginto'}
  ]
});

[...document.querySelectorAll('.s-welcome__b')].forEach((e, i) => {
  setTimeout(() => {
    e.classList.remove('s-welcome__b--b')
  }, 200 * (i + 1));
});

$(function(){
  const navMain = $('.navbar-collapse');
  navMain.on('click', 'a', null, function () {
    navMain.collapse('hide');
  });



  // (() => {
  //   const e = document.querySelector('.contact-bar-container');

  //   if (!e) {
  //     return;
  //   }

  //   new Waypoint({
  //     element: e,
  //     // offset,
  //     handler: function(direction: string) {
  //       console.log('dirrrrrrr', direction);
  //       if (direction == 'up') {
  //         console.log('UP!!')
  //         e.classList.remove('contact-fixed-bar--fixed');
  //       } else {
  //         console.log('DOWN!!')
  //         e.classList.add('contact-fixed-bar--fixed');
  //       }
  //     }
  //   });
  // })();

});

(() => {
  const e = document.querySelector('.s-contact');

  if (e) {
    e.querySelector('.s-contact__wa')
      .addEventListener('click', () => {
        gtag('event', 'contact_section', {
          'event_category': 'contact',
          'event_label': 'whatsapp',
          'value': 1
        });
      });

    e.querySelector('.s-contact__email')
      .addEventListener('click', () => {
        gtag('event', 'contact_section', {
          'event_category': 'contact',
          'event_label': 'email',
          'value': 1
        });
      });
  }
})();
