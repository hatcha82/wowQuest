#/bin/bash
cp -rfv backend/* ../wowQuestHeroku
cd ../wowQuestHeroku
git status
git add .
git status
git commit -m "build"
git push heroku master
