import { override } from "flarum/extend";

import WelcomeHero from "flarum/components/WelcomeHero";
import CustomWelcomeHero from "./components/CustomWelcomeHero";
app.initializers.add("funkeye-custom-welcome-hero", () => {
  override(WelcomeHero.prototype, "view", (el) => {
    return CustomWelcomeHero.component();
  });
});
