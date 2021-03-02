create database collaboration;

use collaboration;

create Table User(
UserId int not null auto_increment,
FirstName varchar(30),
LastName varchar(30),
UserName varchar(20),
Password varchar(20),
Email varchar(40),
Role varchar(5),
Status varchar(10),
IsOnline varchar(5),
Enabled varchar(5),
primary key(UserId)
);

create table Blog(
BlogId int not null auto_increment,
BlogTitle varchar(30),
BlogContent varchar(200),
BlogPosted Date,
Status varchar(10),
NoOfLikes int,
NoOfViews int,
NoOfComments int,
UserId int,
UserName varchar(20),
primary key(BlogId)
);

create table BlogComments(
BlogCommentId int not null auto_increment,
UserId int,
UserName varchar(20),
UserProfileId varchar(20),
Title varchar(30),
NoOfLikes int,
BlogComment varchar(20),
CurrentDate date,
BlogId int,
primary key(BlogCommentId)
);

insert into User(FirstName,LastName,UserName,Password,Email,Role,Status,IsOnline,Enabled) 
values("Naveenraj","K","Naveen101","naveen@123","naveenraj29k@gmail.com","Admin","Active","false","false");

select * from User;

drop table User;

