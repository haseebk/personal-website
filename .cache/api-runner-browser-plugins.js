module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Haseeb Khan Portfolio","short_name":"Haseeb Khan Portfolio","start_url":"/","background_color":"#FFFFFF","theme_color":"#4f3b78","display":"minimal-ui","icon":"media/icon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"bd811806cc1b8afc275a716b064f3106"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
