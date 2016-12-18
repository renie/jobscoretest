## Jobscore test

### Instructions

Clone this project:
```
git clone git@github.com:renie/jobscoretest.git
```


Now enter clone's path and intall project dependencies:

```
cd jobscoretest
npm install
```

Then, export your API data:

```
export JOBSCORE_API_KEY=your-key
export JOBSCORE_API_USER=your-user
export JOBSCORE_API_PASS=your-pass
```
* Important! Don't forget to include these exports to your `.bashrc` , `profile.d` or `/etc/environment` (as you wish) if you want to have them after reboot or logoff.

And last, run project

```
npm start
```
