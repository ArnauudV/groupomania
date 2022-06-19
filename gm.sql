-- Création de la base de données --


-- Création des tables

-- Table user --

CREATE TABLE `user` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `nickname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `privilege` varchar(100) NOT NULL DEFAULT 'normal',
  `picture` text,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `nickname` (`nickname`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
-- Table post --

CREATE TABLE `post` (
  `id_post` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `date_created` datetime DEFAULT NULL,
  `id_user` int DEFAULT NULL,
  `post_text` text,
  `image` text,
  `date_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id_post`),
  KEY `FK_id_user_post` (`id_user`),
  CONSTRAINT `FK_id_user_post` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- Table likes --

CREATE TABLE `likes` (
  `id_post` int DEFAULT NULL,
  `id_user` int DEFAULT NULL,
  UNIQUE KEY `UC_likes` (`id_post`,`id_user`),
  KEY `FK_id_user_likes` (`id_user`),
  CONSTRAINT `FK_id_post_likes` FOREIGN KEY (`id_post`) REFERENCES `post` (`id_post`) ON DELETE CASCADE,
  CONSTRAINT `FK_id_user_likes` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;


-- Création du compte admin --

INSERT INTO user (nickname, email, password, privilege) values ('Admin', 'admin@gmail.com', 'admin', 'admin');