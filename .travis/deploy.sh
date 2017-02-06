git clone --depth 1 --branch gh-pages --single-branch $DEPLOY_REPO .deploy 
cd .deploy
git remote add -t master origin $DEPLOY_REPO

rm -rf ./*
cp -r ../public/* .
git add -A .
git commit -m 'Site updated'
git push -q -u origin master
