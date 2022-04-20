## Git Cheat Sheet

### Git Setup

1. Create directory `mkdir`
2. `git init` creates a local repository. It is done in an existing directory
3. `$ git clone https://github.com/<directory>` to clone a repository into the directory
4. `git add`
5. `git commit`
6. `git push`

`git log`

Used to display commits.
It includes:

- the SHA: a unique identifier for each commit (first 6-8 characters enough to search for specific one)
- the author
- the date
- the commit message

![](2022-04-12-10-12-54.png)

`git log --oneline`
cuts down SHA to 7 characters and only shows commit message

![](2022-04-12-10q-11-59.png)

`git log --stat`
displays additional information:

- which files were modified
- how many files were modified
- how many lines added
- how many lines deleted

![](2022-04-12-10-29-44.png)

`git log -p` (same as `--patch` flag)
Shows information specific to what changes were made, you can see the following:

- file that was changed
- versions of the file `a/` `b/` etc.
- which lines were changed `@@ -40,6` - start line, how many lines were changed.
- actual changes to the code are shown (green for added, red for removed)

![](2022-04-12-10-41-34.png)

` -w`
Ignores whitespace changes.

`git show`

Search by specific SHA

### Adding Commits to Repo

`git add`
used to move files into the staging index

`git add index.html app.css js/app.js` to move multiple items

`git add .` to move all files in current directory into staging index

`git commit` adds files to repository from staging index:

- prompts editor to open requesting a commit message

  - enter, save and close editor.

    - Result:

      ─tim@LAPTOP-7RMVA9J2 ~/udacity-git-course/new-git-project ‹master●›
      ╰─$ git commit
      [master (root-commit) 4f78fd3] Initial commit
      3 files changed, 14 insertions(+)
      create mode 100644 css/app.css
      create mode 100644 index.html
      create mode 100644 js/app.js

    - Editor can be skipped with `git commit -m "Initial commit"`

`

`git diff`
shows changes that have been made but haven't been committed.

### Git ignore

`git ignore`
create `.gitignore` file and add files you want ignored into it.

_Globbing_ you can add patterns/characters to `.gitignore` to avoid listing each file individually.
Options:

    blank lines can be used for spacing
    # - marks line as a comment
    * - matches 0 or more characters
    ? - matches 1 character
    [abc] - matches a, b, _or_ c
    ** - matches nested directories - a/**/z matches
        a/z
        a/b/z
        a/b/c/z

`samples/*.jpg` for example.

![](2022-04-12-14-12-37.png)

### Commit rules

- _Each commit should record a single change_ (add a new image to sidebar, change header, add a carousel etc.)

- _Keep messages short and explain what the commit does, not how._
- _You shouldn't need to use the word 'and' as the commit should be singular._
- _Use the template "This commit will..." except, only type the sentences end._
- _Be consistent_

If you need to add a description of why you made a commit do it in the Editor, 2 lines down from commit message.

Also, describe changes in imperative:

    Describe your changes in imperative mood, e.g. "make xyzzy do frotz" instead of "[This patch] makes xyzzy do frotz" or "[I] changed xyzzy to do frotz" as if you are giving orders to the codebase to change its behaviour. Try to make sure your explanation can be understood without external resources. Instead of providing a URL to a mailing list archive, summarize the relevant points of the discussion.
            - git.kernel.org

### Navigating

Navigating The Log

If you're not used to a pager on the command line, navigating in Less can be a bit odd. Here are some helpful keys:

    to scroll down, press
        j or ↓ to move down one line at a time
        d to move by half the page screen
        f to move by a whole page screen
    to scroll up, press
        k or ↑ to move _up_ one line at a time
        u to move by half the page screen
        b to move by a whole page screen
    press q to quit out of the log (returns to the regular command prompt)

## Branch, Pull, Merge

`git branch <name>` to create a new branch
`git checkout <branch name>` to switch to branch
`git merge <branch name>` merges branch with current branch.
`git branch -d <branch name>` to delete branches that aren't needed.

`git checkout -b admin` Creates a branch _and_ checks it out.

When merging the Editor can come up asking if you want to change the merge message. Once you have changed it type `:wq` (write + quit)

### make push request

when you want to add you branch to the main, you typically need someone to check it for you and merge. To set this up you need to make a **_pull request_**:

1. Push your branch up `git push origin your-name`
2. Create pull request by clicking `new pull request`
3. Share link `https://github.com/dev-academy-foundations/ko-wai-koe/pull/830`
4. Colleague merges pull request after checking it and delete branch.
5. Check out main branch and pull down changes `git pull`

## Git merge conflicts

git will insert "Head Markers" into the document to highlight the conflicting changes.
Delete what you don't want, save and push it back up.

## Fork and clone

1.  Go to repository click `fork`
2.  clone repository `git clone <repo https>`
3.  configure Git to pull changes from original _upsteam_ repo into your local clone:

- go to directory
- `git remote -v` shows current remote repository for your fork

  > origin https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
  > origin https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)

- `git remote upstream <https>` to change remote repository

  > git remote -v

          origin  https://github.com/treegroves/Spoon-Knife.git (fetch)
          origin  https://github.com/treegroves/Spoon-Knife.git (push)
          upstream https://github.com/treegroves/Spoon-Knife.git (fetch)
          upstream https://github.com/treegroves/Spoon-Knife.git (push)

4. Make changes, `add`, `commit` and `push`
5. Go to your copy of the repo, you will see something like:
   ` This branch is 1 commit ahead of octocat/Spoon-Knife:main.`
   To the right click `contribute` then `open pull request`
6. click `create pull request` and add a title and comment about the commit
7. click `Create pull request`
8. pull request page comes up copy and share url e.g.
   `https://github.com/octocat/Spoon-Knife/pull/26747`

   Example of final window.

   [result looks like this:](https://github.com/treegroves/reflections/blob/main/sprint-1/notes/2022-04-13-15-28-10.png)
