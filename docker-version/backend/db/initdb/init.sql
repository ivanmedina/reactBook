CREATE DATABASE reactBook;
use reactBook;


CREATE TABLE users (
 id int NOT NULL AUTO_INCREMENT,
 names varchar(50) NOT NULL,
 surnames varchar(50) NOT NULL,
 username varchar(20) NOT NULL,
 email varchar(50) NOT NULL,
 created varchar(20) NOT NULL,
 passw varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
 PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;


CREATE TABLE posts (
 id int NOT NULL AUTO_INCREMENT,
 user_id int NOT NULL,
 posted varchar(19) CHARACTER SET ascii COLLATE ascii_general_ci NOT NULL,
 post varchar(1000) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
 PRIMARY KEY (id),
 KEY user_id (user_id),
 CONSTRAINT posts_ibfk_1 FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;

