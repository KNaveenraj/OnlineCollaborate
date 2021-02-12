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
IsOnline boolean,
Enabled boolean,
primary key(UserId)
);

insert into User values(1,"Naveenraj","K","Naveen101","naveen@123","naveenraj29k@gmail.com","HR","Active",1,1);

select * from User;


create table Blog(
BlogId int not null auto_increment,
BlogTitle varchar(30),
BlogContent varchar(200),
BlogPosted datetime,
Status varchar(10),
NoOfLikes int,
NoOfComments int,
NoOfViews int,
UserId int not null,
UserName varchar(20),
primary key(BlogId)
);

create table BlogComments(
BlogCommentId int not null auto_increment,
UserId int not null,
UserName varchar(20),
UserProfileId varchar(20),
Title varchar(30),
NoOfLikes int,
BlogComment varchar(20),
CurrentDate date,
primary key(BlogCommentId)
);



