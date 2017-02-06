git clone --depth 1 --branch master --single-branch $DEPLOY_REPO .deploy 
cd .deploy

rm -rf ./*
cp -r ../public/* .
git add -A .
git commit -m "Site updated: $(date)"
git push -q -u origin master
