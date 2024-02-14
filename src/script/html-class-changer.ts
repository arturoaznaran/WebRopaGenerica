interface HtmlClassChangerOptions {
  baseClass: string,
  list: { selector: string, class: string }[]
}

export class HtmlClassChanger {

  private html: HTMLElement;

  constructor(private readonly config: HtmlClassChangerOptions) {
    this.html = document.querySelector('html');
    this.setUp();
  }

  private setUp() {
    this.config.list.forEach((conf, index: number) => {
      new Waypoint({
        element: document.querySelector(conf.selector),
        offset: 200,
        handler: (dir: string) => {
          if (dir == 'up') {
            this.html.classList.remove(conf.class);

            const prevClass = this.getPreviousClass(index);
            if (prevClass) {
              this.html.classList.add(prevClass);
            }
          } else {
            const prevClass = this.getPreviousClass(index);
            if (prevClass) {
              this.html.classList.remove(prevClass);
            }
            this.html.classList.add(conf.class);
          }
        }
      });
    });
  }

  private getPreviousClass(from: number) {
    if (from == 0) {
      return this.config.baseClass;
    } else {
      return this.config.list[from - 1].class;
    }
  }

}
