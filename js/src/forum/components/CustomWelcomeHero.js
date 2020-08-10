import Component from "flarum/Component";
import Button from "flarum/components/Button";

export default class CustomWelcomeHero extends Component {
  init() {
    this.hidden = localStorage.getItem("customwelcomehero_welcomeHidden");
  }

  view() {
    if (this.hidden) return <div />;

    const slideUp = () => {
      this.$().slideUp(this.hide.bind(this));
    };

    let html =
      app.forum.attribute("funkeye-custom-welcome-hero.custom_html") || "";

    let obContent = {
      "##ATTRIBUTE.WELCOME_TITLE": app.forum.attribute("welcomeTitle"),
      "##ATTRIBUTE.WELCOME_MESSAGE": app.forum.attribute("welcomeMessage"),
      "##COMPONENT.HERO_CLOSE": '<div id="welcomeHeroButton-dismiss"></div>',
    };
    let hasDismissButton = false;
    let ret = html.replace(
      /##ATTRIBUTE.WELCOME_TITLE|##ATTRIBUTE.WELCOME_MESSAGE|##COMPONENT.HERO_CLOSE/gi,
      (matched) => {
        hasDismissButton =
          matched === "##COMPONENT.HERO_CLOSE" ? true : hasDismissButton;
        return obContent[matched];
      }
    );

    return m(
      "header",
      { className: "Hero WelcomeHero" },
      m(
        ".container",
        m(
          "div#welcomeHeroButton-dismiss",
          hasDismissButton
            ? Button.component({
                icon: "fas fa-times",
                onclick: slideUp,
                className: "Hero-close Button Button--icon Button--link",
              })
            : ""
        ),
        m.trust(ret)
      )
    );
  }

  /**
   * Hide the welcome hero.
   */
  hide() {
    localStorage.setItem("customwelcomehero_welcomeHidden", "true");

    this.hidden = true;
  }
}
