install:
	npm install

build:
	npm run build

test:
	npm test

run:
	npx babel-node -- src/bin/gendiff.js

publish:
    npm publish --dry-run

lint:
	npx eslint .
