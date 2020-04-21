git
github
objects ?
array's vs objects
DOM

git:

1. git init - creating the folder .git inside the current repository, in the project level ONLY
2. git status - show us the tracking files status (red - untracked)
3. git add - < file path > / . (dot means all the latest changes)
4. git commit - take the source code snapshot and document it under a specific id
5. git log - my commits history - all snapshots on the relevant branch
6. git checkout <commit hash> || <branch name> moving to the relevant source code version
7. git branch - list all the project branchs
8. git checkout -b <branch name> - create new branch
9. clone - download copy of the source code to your machine - git clone <URL>
   example:
   git clone https://github.com/galamo/online_52_lesson_2.git (to get this repo)
10. git pull - get the latest changes on the relevant branch
11. git remote add origin https://github.com/galamo/test_git.git connect between the local repository to the github service repository adding a remote address for management in github
    this command shoud executed once you want to connect the local repo to the origin repo
12. git push -u origin master - push the code to the github service - to the relevant github repository

- git push origin - upload the last changes to the github

  # master - the updated main version of our source code
