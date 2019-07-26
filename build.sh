#/bin/bash
git pull
cd frontend
npm install
npm run build
cd ..
cp -rfv backend/* ../wowQuestHeroku
cd ../wowQuestHeroku
git status
git add .
git status
git commit -m "build"
git push heroku master
