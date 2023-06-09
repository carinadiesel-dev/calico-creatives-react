module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next",
    "@storybook/addon-postcss",
  ],
  "staticDirs": [
    "../public"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  previewHead: (head) => (`
    ${head}
    <link rel="stylesheet" href="../src/styles/brilon-regular.css" />
  `)
}