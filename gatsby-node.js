const fetch = require("node-fetch");
const links = require("./src/data/projects");

exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage, deletePage } = boundActionCreators;

  if (page.path !== "/projects/") return;

  const screenshots = {};
  await Promise.all(
    links.map(async ({ url, delay = 0 }) => {
      try {
        const res = await fetch(
          `https://api.microlink.io/?url=${encodeURIComponent(
            url
          )}&screenshot=true${
            delay ? `&waitForTimeout=${delay}` : ""
          }&force=true&meta=false`
        );
        const data = await res.json();
        if (data.status === "success" && data.data.screenshot) {
          screenshots[url] = data.data.screenshot.url;
        }
      } catch (e) {}
    })
  );

  deletePage(page);
  createPage({ ...page, context: { screenshots } });
};
