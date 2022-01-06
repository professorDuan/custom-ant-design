yarn add -D eslint@^7.6.0 eslint-config-byted @typescript-eslint/eslint-plugin@^3.8.0 @typescript-eslint/parser@^3.8.0 &&
yarn add -D eslint-config-prettier eslint-loader eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier@^2.0.5 &&
yarn husky install &&
yarn husky add .husky/commit-msg 'yarn commitlint --edit $1' &&
yarn husky add .husky/pre-commit 'yarn precommit' &&
yarn commitizen init cz-conventional-changelog --save-dev --save-exact --force 