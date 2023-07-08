# Contributing to the Ibadan Techies Club Website

Hey, First timer 👋,
Thanks for visiting here. It sure means you are probably thinking of making some great contribution to us.
The objective here is to help you contribute quickly and follow our standard of doing so. Please kindly [read our code of conduct](./CODE-OF-CONDUCT.md)
😊 We can't wait to see your thoughtful contribution.

## General workflow

Before you decide to work on an issue, pick the issue up by writing a comment with `.take` on the issue. Else, you won't be regarded as the trusted assignee.

If you've been assigned to an issue:

1. Clone down the main branch to your local machine (there are other alternatives like cloud, codespaces, codesanbox, etc we do not care where).

```bash
git clone https://github.com/Ibadan-Techies/badtechies.git
cd badtechies
// see the package.json for how to run the code
```
Run this command to install all dependencies:
```bash
$:npm install
```
Run this command to run on your local environment:
```bash
$:npm run dev
```
2. Create a branch with your name followed by what you are implementing.
   - use descriptive text like 'bug' or 'feature' in the branch name. For example sekx-bug-XXXx.
 To create a new branch run this command
  ```bash
-git checkout -b branchname  
```
Add changes to the code then run this command
```bash
-git status 
-git add . (to add new changes)
-git status (to confirm if changes have been added)
```
3. Make commits to your branch (preferably on every successful working code completion).
   - again use a descriptive text describing what you've done.
Run the following command on your terminal to commit
```bash
-git commit -m "your text"
```
4. When you've finished with your fix or feature, bug, or whatever:
   ```bash
     git pull --rebase origin main
   ```
   - fix any merge conflicts before pushing to origin
5. Your pull request will be reviewed by another maintainer. The point of code reviews is to help keep the codebase clean and of high quality and, equally as important, to help you grow as a programmer. If your code reviewer requests you make a change you don't understand, ask them why.
   - Fix any issues raised by your code reviewer, and push your fixes as a single new commit.
   - Once the pull request has been reviewed, it will be merged by another member of the team. Do not merge your commits 👿.

### Commit Message Guidelines

- Commit messages should be written in the present tense; e.g. "Fix continuous integration script".
- The first line of your commit message should be a summary of what the commit changes. Aim for about 70 characters max. Remember: This is a summary, not a detailed description of everything that changed.
- If you want to explain the commit in more depth, following the first line should be a blank line and then a more detailed description of the commit. This can be as detailed as you want, so dig into details here and keep the first line short.

### Rebase origin changes into your branch

Once you are done making changes, you can begin the process of getting
your code merged into the main repo. **Step 1** is to rebase upstream
changes of the main branch into yours by running this command
from your branch:

```bash
git pull --rebase origin main
```

_This will start the rebase process. You must commit all of your changes
before doing this_. If there are no conflicts, this should just roll all
of your changes back on top of the changes from upstream, leading to a
nice, clean, linear commit history.

> If there are conflicting changes, git will start yelling 😬 at you part way

    through the rebasing process. Git will pause rebasing to allow you to sort
    out the conflicts. You do this the same way you solve merge conflicts,
    by checking all of the files git says have been changed in both histories
    and picking the versions you want. Be aware that these changes will show
    up in your pull request, so try and incorporate upstream changes as much
    as possible.

You pick a file by `git add`ing it - you do not make commits during a
rebase.

Once you are done fixing conflicts for a specific commit, run:

```bash
git rebase --continue
```

This will continue the rebasing process. Once you are done fixing all
conflicts you should run the existing tests to make sure you didn’t break
anything, then run your new tests (if you wrote any tests) and
make sure they pass also.

If rebasing broke anything, fix it, then repeat the above process until
you get here again and nothing is broken and all the tests pass.

### Make a pull request

Make a clear pull request from your fork and the branch to the upstream main
branch, detailing exactly what changes you made and what feature this
should add. The clearer your pull request is the faster you can get
your changes incorporated into this repo.

At least one other person MUST give your changes a code review, and once
they are satisfied they will merge your changes into the upstream. Alternatively,
they may have some requested changes. You should make more commits to your
branch to fix these, then follow this process again from rebasing onwards.

Once you get back here, make a comment requesting further review and
someone will look at your code again. If they like it, it will get merged,
else, just repeat it.

Hurray, Thanks for contributing 🤣!

### Guidelines

1. Uphold code standard:
   - Keep your code [DRY].
   - Apply the [boy scout rule], etc
2. Run the [tests] locally before submitting a pull request.
3. Automated Tests are very, very important to us. Submit tests if your pull request contains
   new, testable behavior. We strongly encourage you to write a test where logic applies to your code (give it a try!).
4. Always review your code first. Do this by leaving comments in your coding and noting questions, or interesting things for the reviewer.
5. Always communicate. Whether it is in the issue or the pull request, keeping the lines of communication helps everyone around you.
6. Always leave screenshots for visual changes if you implement a design.

   ## Checklist:

This is just to help you organize your process

- [ ] Did I cut my work branch off of the main (don't cut new branches from existing feature branches)?
- [ ] Did I follow the correct naming convention for my branch?
- [ ] Is my branch focused on a single main change?
- [ ] Do all of my changes directly relate to this change?
- [ ] Did I rebase the upstream main branch after I finished all my
      work?
- [ ] Did I write a clear pull request message detailing what changes I made?
- [ ] Did I get a code review?
- [ ] Did I make any requested changes from that code review?

If you follow all of these guidelines and make good changes, you should have
no problem getting your changes merged in.

## References

This contributing guide is heavily influenced by https://github.com/OpenSauced/OpenSauce/blob/main/CONTRIBUTING.md.
