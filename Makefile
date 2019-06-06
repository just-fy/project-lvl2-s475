install:
	npm install

build:
	npm run build

test:
	npm test

run:
	npx babel-node 'src/bin/hexlet.js' 10

publish:
    npm publish --dry-run

lint:
	npx eslint .
