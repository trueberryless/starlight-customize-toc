import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

export const onRequest = defineRouteMiddleware((context) => {
  const { starlightRoute } = context.locals;
  const individualOverviewTitle = starlightRoute.entry.data.overviewTitle;

  const overviewItem = starlightRoute.toc?.items[0];
  if (overviewItem)
    overviewItem.text = individualOverviewTitle ?? "Back to top";
});
