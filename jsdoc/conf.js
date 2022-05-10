module.exports = {
  "recurseDepth": 10,
  "source": {
    "include": [
      "src/FileManager.js",
      "src/ArrayManager.js",
    ]
  },
  "opts": {
    "template": "templates/default",
    "encoding": "utf8",
    "destination": "./jsdoc/documentation/",
    "recurse": true,
  },
  "plugins": ["./jsdoc/plugins/search/search"],
  "templates": {
    "default": {
      "layoutFile": "./jsdoc/plugins/search/layout.tmpl",
      "staticFiles": {
        "include": [
          "./jsdoc/plugins/search/statics"
        ]
      }
    }
  }
}