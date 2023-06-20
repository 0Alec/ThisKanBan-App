# ThisKanBan-App

https://www.youtube.com/watch?v=1ibmWyt8hfw 
tuts by simon

Create an account with github then log in 

// go to the folder where the docs are stored
cd ~/Documents/Warmup\ Course\ JS\ /ThisKanBan-App 

// add the local information to git
git remote add origin https://github.com/0Alec/ThisKanBan-App.git

// tell git who is accessing the app 
git config --global user.name "0Alec" 
git config --global user.email "alec22022@gmail.com"


git add . to track all files  
git status / status of whats been updated and what hasn't

(to remove the added file if needed / git rm --cached index.html) 

add all the files to the branch master 

git commit -m 'updated js file'

git push (pushes the repo from local to remote)

// not successful on git push 

// errors  how to solve this problem of "! [rejected] master -> master (fetch first)"

We need to 

git fetch origin master

git merge  master

git fetch origin master:tmp

git rebase tmp

git push origin HEAD:master

git branch -D tmp

git push 
// branch 'master' set up to track 'origin/master'

finally check the work and send it to github 

git remote -v

git status

On branch master
Your branch is up to date with 'origin/master'.


lastly to merge master branch to main branch 
when everything is up to date 

now we can concentrate on building our app and use Github as a backup 

on the master branch 
git add . to track all files  
git commit -m 'update files'
git push 

