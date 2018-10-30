eval "$(ssh-agent -s)" &&
ssh-add -k ~/.ssh/id_rsa.pub &&

cd /home/ubuntu/react/react_deploy &&
git pull &&
npm install &&
npm run build
