#!/usr/bin/env sh

set -e

yarn docs:build

cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/es-fe/blog.git master:gh-pages

cd -
