# Vscode Setting

## 概要

```lang
vscode formatter  ->  prettier formatter  ->  es linter
                                          ->  style linter
```

- .editorconfig: vscode 設定檔
- .prettierrc: prettier 設定檔
- .eslintrc: eslint 設定檔
- .stylelintrc: stylelint 設定檔

## vscode 設定

```json
  //不要顯示已開啟的編輯器
  "explorer.openEditors.visible": 0,
  //側欄位置
  "workbench.sideBar.location": "right",
  //多重游標選取觸發
  "editor.multiCursorModifier": "ctrlCmd",
  //右側minimap
  "editor.minimap.enabled": true,
  //如果有minimap只顯示色塊
  "editor.minimap.renderCharacters": false,
  "prettier.singleQuote": true,
  "stylelint.enable": true,
  "css.validate": false,
  "scss.validate": false,
  "less.validate": false,
  "prettier.stylelintIntegration": true,
  "editor.formatOnSave": true,
  "liveServer.settings.donotShowInfoMsg": true,
  "vetur.validation.template": false,
  "team.showWelcomeMessage": false,
  "files.exclude": {
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    "**/node_modules": true
  }
```

## .editorconfig 設定

```lang
# editorconfig.org
root = true

[*]
indent_size = 2
indent_style = space
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
```

## prettier

```json
{
  "eslintIntegration": true,
  "stylelintIntegration": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "semi": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "arrowParens": "always",
  "requirePragma": false,
  "insertPragma": false
}
```

## eslint

```javascript
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    'vue/html-self-closing': 'off',
  },
};
```

## stylelint

```json
{
  "extends": "stylelint-config-recommended",
  "rules": {
    "max-nesting-depth": 3,
    "selector-max-class": 3,
    "declaration-no-important": true,
    "declaration-block-single-line-max-declarations": 1,
    "max-empty-lines": 2,
    "selector-max-id": 1
  }
}
```
