#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Build the project.
yarn build # if using a npm, 'npm run build'

# Go To Build folder
cd build

# Git init
git init

# Git add origin
git remote add origin git@github.com:datamate/datamate.github.io.git

# Add changes to git.
git add --all

# Commit changes.
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

# Push source and build repos.
git push origin master -f

# Come Back up to the Project Root
cd ..
