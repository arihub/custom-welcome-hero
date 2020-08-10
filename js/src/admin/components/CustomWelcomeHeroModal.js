import SettingsModal from "flarum/components/SettingsModal";

export default class CustomWelcomeHeroModal extends SettingsModal {
  className() {
    return "CustomWelcomeHeroModal Modal--large";
  }

  title() {
    return app.translator.trans(
      "funkeye-custom-welcome-hero.admin.settings.title"
    );
  }

  form() {
    return [
      <div className="Form-group">
        <label>
          {app.translator.trans(
            "funkeye-custom-welcome-hero.admin.settings.html_label"
          )}
        </label>
        <textarea
          className="FormControl"
          rows="30"
          bidi={this.setting("funkeye-custom-welcome-hero.custom_html")}
        />
      </div>,
      <div className="Form-group">
        <label>
          {app.translator.trans(
            "funkeye-custom-welcome-hero.admin.settings.placeholder_title"
          )}
        </label>
        <div className="FormControl">##ATTRIBUTE.WELCOME_TITLE</div>
      </div>,
      <div className="Form-group">
        <label>
          {app.translator.trans(
            "funkeye-custom-welcome-hero.admin.settings.placeholder_message"
          )}
        </label>
        <div className="FormControl">##ATTRIBUTE.WELCOME_MESSAGE</div>
      </div>,
      <div className="Form-group">
        <label>
          {app.translator.trans(
            "funkeye-custom-welcome-hero.admin.settings.placeholder_button"
          )}
        </label>
        <div className="FormControl">##COMPONENT.HERO_CLOSE</div>
      </div>,
    ];
  }
}
