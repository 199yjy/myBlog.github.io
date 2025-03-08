import { Contributors } from "D:/yanjieyan/workSpace/vuepressTest/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_fc5580ff63524c7da49d79199f3ded76/node_modules/@vuepress/plugin-git/lib/client/components/Contributors.js";
import { Changelog } from "D:/yanjieyan/workSpace/vuepressTest/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_fc5580ff63524c7da49d79199f3ded76/node_modules/@vuepress/plugin-git/lib/client/components/Changelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", Contributors);
    app.component("GitChangelog", Changelog);
  },
};
