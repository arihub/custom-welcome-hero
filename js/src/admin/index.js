import app from "flarum/app";
import CustomWelcomeHeroModal from "./components/CustomWelcomeHeroModal";

app.initializers.add("funkeye-custom-welcome-hero", () => {
  app.extensionSettings["funkeye-custom-welcome-hero"] = () =>
    app.modal.show(new CustomWelcomeHeroModal());
});
