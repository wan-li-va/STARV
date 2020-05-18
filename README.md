### Some git commands

Cloning a repo
`git clone URL_of_repo`

Create a new branch
`git branch name_of_branch`

Go into a branch
`git checkout name_of_branch`

Do both at once:
`git checkout -b name_of_branch`

After editing, committing, and pushing
`git add .`
`git commit -m "comments"`
`git push origin name_of_branch`

After pushing to your branch, go to GitHub website --> click new pull request --> choose the branch you want to merge to master --> continue the process

Pulling updates from branch
`git pull`

Merging master into your branch: Go to your branch after pulling from master --> `git merge master`

ALWAYS CHECK WHAT BRANCH YOU'RE IN BEFORE YOU START CODING

### Extra Instructions
To deploy to the Github.io page, run the command `npm run deploy` in the root folder.

Run `npm install` to install necessary packages if stuff isn't working.

If you need to install another package to make things work, make sure you use the `--save-dev` flag. 
- Ex: `npm install gh-pages --save-dev`
