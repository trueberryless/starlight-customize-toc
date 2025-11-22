import { defineRouteMiddleware } from "@astrojs/starlight/route-data";
import starlightConfig from "virtual:starlight/user-config";

const defaultLang =
  starlightConfig.defaultLocale.lang ??
  starlightConfig.defaultLocale.locale ??
  "en";

const translations: Record<string, string> = {
  en: "Back to top",
  de: "Zurück nach oben",
};

export const onRequest = defineRouteMiddleware((context) => {
  const { starlightRoute } = context.locals;
  const { locale } = starlightRoute;

  const overviewItem = starlightRoute.toc?.items[0];
  if (overviewItem) overviewItem.text = translations[locale ?? defaultLang];
});
