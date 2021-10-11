before you run the app

1 install git 
2 intall npm 10.16.0
3 on centos env
4 set up mysql config info  modify  defaultConfig.js file

set up database test

create database test;
use test;

create table if not exists users(
 id INT NOT NULL AUTO_INCREMENT,
 name VARCHAR(100) NOT NULL,
 pass VARCHAR(40) NOT NULL,
 avator  VARCHAR(40) NOT NULL,
 PRIMARY KEY ( id )
);

run the app 
1 cd koa-tasks
2 npm start 

finally  run 

3 sh runTasks.sh 



