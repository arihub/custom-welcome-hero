import { override } from "flarum/extend";
import IndexPage from "flarum/components/IndexPage";
import CustomWelcomeHero from "./components/CustomWelcomeHero";

app.initializers.add("funkeye-custom-welcome-hero", () => {
  override(IndexPage.prototype, "hero", (el) => {
    return CustomWelcomeHero.component();
  });
});
