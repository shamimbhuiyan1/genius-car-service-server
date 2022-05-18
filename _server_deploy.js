/**
 * ONE TIME:
 * ----------------
 * 1. create heroku account
 * 2. verify email
 * 3. install heroku cli
 * 4.heroku login
 * -----------------
 * For each project one time
 * ------------------
 * 1. heroku create
 * 2. make sure you : git add . git commit and git push
 * 3. git push heroku main
 * 4.Go to heroku Dashboard > current project> settings > reveal congfig vars
 * 5. copy paste config vars from .env files
 *6.make sure you whitelisted all ip address to access to mongodb
 -----------------------
 Update server with new changes
 -----------------------
 1.make changes
 2. make sure you : git add . git commit and git push
 3. git push heroku main

 -----------------------
 Connect server with client and deploy
 ----------------------------
 1. replace localhost by heroku project url
 2. npm run build
 3. firebase deploy

 */
