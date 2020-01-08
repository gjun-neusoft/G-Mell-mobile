/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50625
Source Host           : localhost:3306
Source Database       : mart

Target Server Type    : MYSQL
Target Server Version : 50625
File Encoding         : 65001

Date: 2019-12-13 17:05:20
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for ai
-- ----------------------------
DROP TABLE IF EXISTS `ai`;
CREATE TABLE `ai` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `img` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ai
-- ----------------------------
INSERT INTO `ai` VALUES ('17', '算法实战', '144', '80', '/img/01.jpg');
INSERT INTO `ai` VALUES ('18', '个性化推广', '100', '30', '/img/02.jpg');
INSERT INTO `ai` VALUES ('19', '机器学习', '22', '54', '/img/03.jpg');

-- ----------------------------
-- Table structure for bigdata
-- ----------------------------
DROP TABLE IF EXISTS `bigdata`;
CREATE TABLE `bigdata` (
  `id` int(11) NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bigdata
-- ----------------------------
INSERT INTO `bigdata` VALUES ('1', '大数据分析', '33', '32', '/img/04.jpg');

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `num` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES ('1', '200');
INSERT INTO `cart` VALUES ('7', '18');
INSERT INTO `cart` VALUES ('11', '35');
INSERT INTO `cart` VALUES ('17', '128');
INSERT INTO `cart` VALUES ('65', '22');

-- ----------------------------
-- Table structure for column
-- ----------------------------
DROP TABLE IF EXISTS `column`;
CREATE TABLE `column` (
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of column
-- ----------------------------
INSERT INTO `column` VALUES ('Fe');
INSERT INTO `column` VALUES ('Python');
INSERT INTO `column` VALUES ('Java');
INSERT INTO `column` VALUES ('Ai');
INSERT INTO `column` VALUES ('Bigdata');

-- ----------------------------
-- Table structure for fe
-- ----------------------------
DROP TABLE IF EXISTS `fe`;
CREATE TABLE `fe` (
  `id` int(11) NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of fe
-- ----------------------------
INSERT INTO `fe` VALUES ('11', 'VUE实战', '455', '193', '/img/05.jpg');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `desc` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `id` int(11) DEFAULT NULL,
  `images` varchar(255) DEFAULT NULL,
  `count` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('算法实战', '19', '机器学习算法及实战——朴素贝叶斯 朴素贝叶斯(Naive Bayes)= Naive + Bayes 。(特征条件独立 + Bayes定理)的实现。零、贝叶斯定理(Bayes\' theorem)', '17', '[{\"img\": \"/img/01.jpg\"},{\"img\": \"/img/02.jpg\"},{\"img\": \"/img/03.jpg\"},{\"img\": \"/img/04.jpg\"}]', '144');
INSERT INTO `goods` VALUES ('个性化推广', '88', '个性化营销推广策略+五度传播理念=高效品牌传播 五度传播 发布时间:07-1622:31 怎样才能让一个品牌在行业中脱颖而出,一直坚持有持久的生命力,并且给广', '18', '[{\"img\": \"/img/01.jpg\"},{\"img\": \"/img/02.jpg\"},{\"img\": \"/img/03.jpg\"},{\"img\": \"/img/04.jpg\"}]', '100');
INSERT INTO `goods` VALUES ('机器学习', '33', '机器学习是一门多领域交叉学科，涉及概率论、统计学、逼近论、凸分析、算法复杂度理论等多门学科。专门研究计算机怎样模拟或实现人类的学习行为，以获取新的知识或技能', '19', '[{\"img\": \"/img/01.jpg\"},{\"img\": \"/img/02.jpg\"},{\"img\": \"/img/03.jpg\"},{\"img\": \"/img/04.jpg\"}]', '22');
INSERT INTO `goods` VALUES ('大数据分析', '32', '大数据用户行为分析产品 , 神策数据 , 数据分析必备工具 , 自定义多维度分析 , 深度洞察用户数据 , 可实现多维度 , 精细化的统计分析 , 秒级处理 , 实时更新', '1', '[{\"img\": \"/img/01.jpg\"},{\"img\": \"/img/02.jpg\"},{\"img\": \"/img/03.jpg\"},{\"img\": \"/img/04.jpg\"}]', '33');
INSERT INTO `goods` VALUES ('VUE实战', '195', 'Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式JavaScript框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，方便与第三方库或既有项目整合', '11', '[{\"img\": \"/img/01.jpg\"},{\"img\": \"/img/02.jpg\"},{\"img\": \"/img/03.jpg\"},{\"img\": \"/img/04.jpg\"}]', '455');
INSERT INTO `goods` VALUES ('java编程', '88', 'ava是一种可以撰写跨平台应用程序的面向对象的程序设计语言。Java 技术具有卓越的通用性、高效性、平台移植性和安全性,广泛应用于PC、数据中心、游戏控制台', '7', '[{\"img\": \"/img/01.jpg\"},{\"img\": \"/img/02.jpg\"},{\"img\": \"/img/03.jpg\"},{\"img\": \"/img/04.jpg\"}]', '99');
INSERT INTO `goods` VALUES ('深度学习', '33', '深度学习(DL, Deep Learning)是机器学习(ML, Machine Learning)领域中一个新的研究方向，它被引入机器学习使其更接近于最初的目标——人工智能(AI, Artificial Intelligence)。', '65', '[{\"img\": \"/img/01.jpg\"},{\"img\": \"/img/02.jpg\"},{\"img\": \"/img/03.jpg\"},{\"img\": \"/img/04.jpg\"}]', '44');

-- ----------------------------
-- Table structure for java
-- ----------------------------
DROP TABLE IF EXISTS `java`;
CREATE TABLE `java` (
  `id` int(11) NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of java
-- ----------------------------
INSERT INTO `java` VALUES ('7', 'java编程', '99', '88', '/img/02.jpg');

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `orderid` int(11) DEFAULT NULL,
  `id` int(11) DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `desc` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `price` float(10,0) DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------

-- ----------------------------
-- Table structure for orderuserinfo
-- ----------------------------
DROP TABLE IF EXISTS `orderuserinfo`;
CREATE TABLE `orderuserinfo` (
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `orderid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orderuserinfo
-- ----------------------------
INSERT INTO `orderuserinfo` VALUES ('郭军', '辽宁省沈阳市创新路108号东软医疗信息技术有限公司', '13898184852', '2147483647');
INSERT INTO `orderuserinfo` VALUES ('郭军', '辽宁省沈阳市创新路108号东软医疗信息技术有限公司', '13898184852', '2147483647');
INSERT INTO `orderuserinfo` VALUES ('郭军', '辽宁省沈阳市创新路108号东软医疗信息技术有限公司', '13898184852', '2147483647');
INSERT INTO `orderuserinfo` VALUES ('郭军', '辽宁省沈阳市创新路108号东软医疗信息技术有限公司', '13898184852', '2147483647');
INSERT INTO `orderuserinfo` VALUES ('郭军', '辽宁省沈阳市创新路108号东软医疗信息技术有限公司', '13898184852', '2147483647');
INSERT INTO `orderuserinfo` VALUES ('郭军', '辽宁省沈阳市创新路108号东软医疗信息技术有限公司', '13898184852', '2147483647');
INSERT INTO `orderuserinfo` VALUES ('郭军', '辽宁省沈阳市创新路108号东软医疗信息技术有限公司', '13898184852', '2147483647');
INSERT INTO `orderuserinfo` VALUES ('郭军', '辽宁省沈阳市创新路108号东软医疗信息技术有限公司', '13898184852', '2147483647');

-- ----------------------------
-- Table structure for python
-- ----------------------------
DROP TABLE IF EXISTS `python`;
CREATE TABLE `python` (
  `id` int(11) NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of python
-- ----------------------------
INSERT INTO `python` VALUES ('65', '深度学习', '44', '55', '/img/01.jpg');

-- ----------------------------
-- Table structure for routes
-- ----------------------------
DROP TABLE IF EXISTS `routes`;
CREATE TABLE `routes` (
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `label` varchar(255) DEFAULT NULL,
  `componentPath` varchar(255) DEFAULT NULL,
  `id` int(11) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of routes
-- ----------------------------
INSERT INTO `routes` VALUES ('home', 'Home', '/Home', '0', '/');
INSERT INTO `routes` VALUES ('cart', 'Cart', '/Cart', '1', '/cart');
INSERT INTO `routes` VALUES ('login', 'Login', '/Login', '2', '/login');

-- ----------------------------
-- Table structure for slider
-- ----------------------------
DROP TABLE IF EXISTS `slider`;
CREATE TABLE `slider` (
  `id` int(11) NOT NULL,
  `img` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of slider
-- ----------------------------
INSERT INTO `slider` VALUES ('11', 'img/04.jpg');
INSERT INTO `slider` VALUES ('17', '/img/01.jpg');
INSERT INTO `slider` VALUES ('18', '/img/02.jpg');
INSERT INTO `slider` VALUES ('19', '/img/03.jpg');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('郭军', '辽宁省沈阳市创新路108号东软医疗信息技术有限公司', '13898184852');
