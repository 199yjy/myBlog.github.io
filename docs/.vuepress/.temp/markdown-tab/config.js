import { CodeTabs } from "D:/yanjieyan/workSpace/vuepressTest/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_aaf9de523143c86d033af558717e6e5c/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/yanjieyan/workSpace/vuepressTest/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_aaf9de523143c86d033af558717e6e5c/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/yanjieyan/workSpace/vuepressTest/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_aaf9de523143c86d033af558717e6e5c/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
