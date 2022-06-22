const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#FF9138",
              "@btn-font-weight": 700,

              "@height-base": "44px",
              "@font-size-base": "18px",
              "@border-width-base": "1.5px",
              "@border-radius-base": "8px",
              //input
              "@input-border-color": "#D4D4D7",
              //layout
              "@layout-body-background": "#F6F6F6",
              "@layout-header-background": "#ffffff",

              //typography
              "@typography-title-font-weight": 700,
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
