# deploy.sh - deploy the generated site to Github Pages

git clone --depth 1 --branch master --single-branch $DEPLOY_REPO .deploy 
cd .deploy

git config --global user.name 'HearingVietnam-bot'
git config --global user.email 'hearingvietnam.bot@gmail.com'

rm -rf ./*
cp -r ../public/* .
git add -A .
git commit -m "Site updated: $(date)"
git push -q -u origin master