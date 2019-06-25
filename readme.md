In order to make a hassle-free environment, I implore you all (_while contributing_) to follow the instructions mentioned below!
Happy Contributing :slightly_smiling_face:


## :arrow_down: Installation

- First, fork this repository :fork_and_knife: and follow the given instructions:

```bash
# clone the repository to your local machine
$ git clone https://github.com/<YOUR-GITHUB-USERNAME>/events-backend.git

# navigate to the project's directory and install all the relevant dependencies
$ cd app && npm i 

# include all the latest changes from the remote repository
$ git remote add upstream https://github.com/Manvityagi/events-backend
$ git fetch upstream
$ git merge upstream/master
```


Next, create a new branch for the particular issue - `$ git checkout -b <NEW-BRANCH-NAME>` and make PR from that branch while leaving
**master** branch unchanged :white_check_mark:

- Once you have made your changes, run the following command:

```bash
# add your changes
$ git add .

# make your commit
$ git commit -m "<YOUR-COMMIT-MESSAGE>"

#push your new branch
$ git push - u origin <NEW-BRANCH-NAME>

READY TO MAKE A PR !!

