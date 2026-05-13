const fetch = require("node-fetch");
const crypto = require("crypto");
const links = require("./src/data/projects");

const ENABLE_PREVIEWS = false;

exports.sourceNodes = async ({ boundActionCreators }) => {
  if (!ENABLE_PREVIEWS) return;
  const { createNode } = boundActionCreators;

  await Promise.all(
    links.map(async ({ url }) => {
      let screenshotUrl = "";
      try {
        const res = await fetch(
          `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false`
        );
        const data = await res.json();
        if (data.status === "success" && data.data.screenshot) {
          screenshotUrl = data.data.screenshot.url;
        } else {
          console.log(`[screenshots] no screenshot for ${url}:`, JSON.stringify(data));
        }
      } catch (e) {
        console.log(`[screenshots] fetch error for ${url}:`, e.message);
      }

      createNode({
        id: `ProjectScreenshot-${url}`,
        parent: null,
        children: [],
        internal: {
          type: "ProjectScreenshot",
          contentDigest: crypto
            .createHash("md5")
            .update(screenshotUrl || url)
            .digest("hex")
        },
        projectUrl: url,
        screenshotUrl
      });
    })
  );
};
