-- MySQL dump 10.13  Distrib 8.0.17, for Linux (x86_64)
--
-- Host: localhost    Database: project_db
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Address`
--

DROP TABLE IF EXISTS `Address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Address` (
  `address_id` int(11) NOT NULL AUTO_INCREMENT,
  `building_name` varchar(500) DEFAULT NULL,
  `area` varchar(500) DEFAULT NULL,
  `landmark` varchar(500) DEFAULT NULL,
  `pincode` int(11) DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`address_id`),
  KEY `FK_address_customer` (`customer_id`),
  CONSTRAINT `FK_address_customer` FOREIGN KEY (`customer_id`) REFERENCES `Customer` (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Address`
--

LOCK TABLES `Address` WRITE;
/*!40000 ALTER TABLE `Address` DISABLE KEYS */;
INSERT INTO `Address` VALUES (1,'Sushila Residency phase 3','Akashwani','Hadapsar',411028,1),(2,'Sahydri Hostel','Hinjawadi Phase 2','TCG Building',411057,1);
/*!40000 ALTER TABLE `Address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Cart`
--

DROP TABLE IF EXISTS `Cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Cart` (
  `cart_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`cart_id`),
  KEY `FK_cart_product` (`product_id`),
  KEY `FK_cart_customer` (`customer_id`),
  CONSTRAINT `FK_cart_customer` FOREIGN KEY (`customer_id`) REFERENCES `Customer` (`customer_id`),
  CONSTRAINT `FK_cart_product` FOREIGN KEY (`product_id`) REFERENCES `Product` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Cart`
--

LOCK TABLES `Cart` WRITE;
/*!40000 ALTER TABLE `Cart` DISABLE KEYS */;
INSERT INTO `Cart` VALUES (3,10,10),(4,15,1),(5,9,1),(6,17,1),(7,10,1),(8,13,10),(11,10,10),(12,13,10),(13,33,10),(14,10,10),(15,10,10);
/*!40000 ALTER TABLE `Cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Category`
--

DROP TABLE IF EXISTS `Category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Category`
--

LOCK TABLES `Category` WRITE;
/*!40000 ALTER TABLE `Category` DISABLE KEYS */;
INSERT INTO `Category` VALUES (1,'HOME'),(2,'MOBILE'),(3,'LAPTOP'),(4,'ELECTRONIC ACCESSORIES'),(7,'Micro Appliancence'),(13,'apple'),(19,'arti'),(20,'charger'),(22,'undefined'),(25,'abc'),(26,'home appliacnecs'),(28,'Home App'),(29,'app');
/*!40000 ALTER TABLE `Category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Customer`
--

DROP TABLE IF EXISTS `Customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Customer` (
  `customer_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(100) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `mobile_no` double DEFAULT NULL,
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Customer`
--

LOCK TABLES `Customer` WRITE;
/*!40000 ALTER TABLE `Customer` DISABLE KEYS */;
INSERT INTO `Customer` VALUES (1,'Pranjal Rahinj','ishwarirahinj@gmail.com','pranjal',9921342594),(2,'Arti Bokse','artibokse@gmail.com','arti',7276660303),(3,'Pranjal Rahinj','ishwarirahinj@gmail.com','pranjal',9921342594),(4,'safiya mulla','safiyamulla@gmail.com','safiya',9011696460),(5,'pranali humne','pranalihumne@gmail.com','pranali',844619044),(6,'vanita rahinj','vanitarahinj@gmail.com','vanita',9921342594),(7,'sham','sham@gmail.com','sham',9921342255),(8,'shraddha','shraddha@gmail.com','shraddha',99213567),(9,'test','test@test.com','test',123465790),(10,'pranjal','pranjal@gmail.com','pranjal',9921342596),(11,'chinu','chinu@gmail.com','chinu',99076545);
/*!40000 ALTER TABLE `Customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Item`
--

DROP TABLE IF EXISTS `Item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Item` (
  `item_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) DEFAULT NULL,
  `offer_id` int(11) DEFAULT NULL,
  `final_price` int(11) DEFAULT NULL,
  PRIMARY KEY (`item_id`),
  KEY `FK_item_product` (`product_id`),
  KEY `FK_item_offer` (`offer_id`),
  CONSTRAINT `FK_item_offer` FOREIGN KEY (`offer_id`) REFERENCES `Offer` (`offer_id`),
  CONSTRAINT `FK_item_product` FOREIGN KEY (`product_id`) REFERENCES `Product` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Item`
--

LOCK TABLES `Item` WRITE;
/*!40000 ALTER TABLE `Item` DISABLE KEYS */;
/*!40000 ALTER TABLE `Item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Offer`
--

DROP TABLE IF EXISTS `Offer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Offer` (
  `offer_id` int(11) NOT NULL AUTO_INCREMENT,
  `offer_detail` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`offer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Offer`
--

LOCK TABLES `Offer` WRITE;
/*!40000 ALTER TABLE `Offer` DISABLE KEYS */;
INSERT INTO `Offer` VALUES (1,'NewYearOffer'),(2,'DiwaliOffer'),(3,'DasaraOffer'),(7,'republic cell'),(8,'diwali dhamaka 1');
/*!40000 ALTER TABLE `Offer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `OrderDetails`
--

DROP TABLE IF EXISTS `OrderDetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `OrderDetails` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `item_id` int(11) DEFAULT NULL,
  `order_qty` int(11) DEFAULT NULL,
  `final_price` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `FK_order_item` (`item_id`),
  KEY `FK_order_customer` (`customer_id`),
  CONSTRAINT `FK_order_customer` FOREIGN KEY (`customer_id`) REFERENCES `Customer` (`customer_id`),
  CONSTRAINT `FK_order_item` FOREIGN KEY (`item_id`) REFERENCES `Item` (`item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `OrderDetails`
--

LOCK TABLES `OrderDetails` WRITE;
/*!40000 ALTER TABLE `OrderDetails` DISABLE KEYS */;
/*!40000 ALTER TABLE `OrderDetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Orders`
--

DROP TABLE IF EXISTS `Orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(70) DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `total_amount` float DEFAULT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Orders`
--

LOCK TABLES `Orders` WRITE;
/*!40000 ALTER TABLE `Orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `Orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PaymentDetail`
--

DROP TABLE IF EXISTS `PaymentDetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PaymentDetail` (
  `payment_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) DEFAULT NULL,
  `account_no` int(11) DEFAULT NULL,
  `account_holder_name` varchar(200) DEFAULT NULL,
  `ifsc_code` int(11) DEFAULT NULL,
  PRIMARY KEY (`payment_id`),
  KEY `FK_paymentdetail_customer` (`customer_id`),
  CONSTRAINT `FK_paymentdetail_customer` FOREIGN KEY (`customer_id`) REFERENCES `Customer` (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PaymentDetail`
--

LOCK TABLES `PaymentDetail` WRITE;
/*!40000 ALTER TABLE `PaymentDetail` DISABLE KEYS */;
/*!40000 ALTER TABLE `PaymentDetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Product`
--

DROP TABLE IF EXISTS `Product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Product` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(100) DEFAULT NULL,
  `shipment_id` int(11) DEFAULT NULL,
  `product_price` float DEFAULT NULL,
  `product_description` varchar(300) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `subcategory_id` int(11) DEFAULT NULL,
  `thumbnail` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `FK_product_category` (`category_id`),
  KEY `FK_product_shipment` (`shipment_id`),
  KEY `FK_product_subcategory` (`subcategory_id`),
  CONSTRAINT `FK_product_category` FOREIGN KEY (`category_id`) REFERENCES `Category` (`category_id`),
  CONSTRAINT `FK_product_shipment` FOREIGN KEY (`shipment_id`) REFERENCES `Shipment` (`shipment_id`),
  CONSTRAINT `FK_product_subcategory` FOREIGN KEY (`subcategory_id`) REFERENCES `SubCategory` (`subcategory_id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Product`
--

LOCK TABLES `Product` WRITE;
/*!40000 ALTER TABLE `Product` DISABLE KEYS */;
INSERT INTO `Product` VALUES (9,'laptop',1,21550,'laptop description',3,2,'79d4d5b98dfc3286e612efb4d8837d6d'),(10,'charger',1,400,'charger description',4,3,'1367343bc23556e3b4622f2b4a59196e'),(11,'fan',1,800,'bajaj fan',1,3,'23ec6347c00df04d9ae37f35de95313d'),(13,'Dyson Airwrap Styler Complete Fuchsia',1,4000,'The Dyson airwrap styler has intelligent heat control that does not go beyond 150 degree celsius It attracts and wraps hair using only air and Dyson airwrap complete - for all types of hair, fine and limp hair or for frizz prone hair.',1,2,'e38a6cff42400690677c08c10b412f50'),(14,'vivo v5 plus',1,55555,'Vivo V5 Plus with dual front camera for a perfect selfie. The 20MP front camera (1/2.78 inch sensor size, f/2.0 aperture, 5P lens system)',2,2,'bdd60ba1fedd1585c49b4f2f10c44549'),(15,'kall bar mobile phone',1,600,'mobile phone is too old.',2,2,'40ea5f2326fb6a0a8f0f1525c230f655'),(17,'SH-12 wireless Bluetooth Headphone',1,2100,'High Fidelity & Clear Bass Effect This headphone supports various sound effects adjustment, easily realize the sound quality you prefer',4,2,'eb1b019e7142309fc76e3f983c5bf85a'),(20,'Split Ac',1,3500,'Split Unit Air Conditioner with Temperatures set at 22 Degrees Celcius',1,2,'3fb45243d24334fde5b1fa1c344a2b2a'),(21,'T.V',1,32000,'Television (TV), sometimes shortened to tele or telly, is a telecommunication medium used for transmitting moving images in monochrome (black and white), or in colour, and in two or three dimensions and sound.',1,2,'181226c93c96e8bbbd88fea7f811b651'),(24,'fan',1,5222,'fannnn',1,4,'56e7849b8549646315873093b2d58ce7'),(26,'Redmi note pro',1,15000,'Performance: Smooth gaming experience with powerful Helio gaming processor, Game turbo and Liquid cooling technology',2,3,'556062de90638e664687cddb87bf43aa'),(27,'Apple Mobile',1,64000,'Apple iPhone SE has a 4-inch Retina Display. The smartphone comes with 12-megapixel iSight rear camera with support for Live Photos and 4K video support',2,3,'4b58b73f9efc5c74f11d75fa16cd924d'),(30,'Apple Laptop',1,45000,'Our firm is a foremost name, involved in providing a diverse range of Apple Laptop.  \n\n',3,4,'99d5f5e2a1681b9835413b61eb9f6cf0'),(32,'Asus Laptop',1,34400,'The Asus Vivobook S14 is another lightweight Windows ultrabook with good performance and stylish design.',3,4,'485f2eb797ac53adf0abb0bd45a55a52'),(33,'Mobile 1',1,4566,'Mobile 1',2,3,'1286b87e1ae3edd5782883d1391070f5');
/*!40000 ALTER TABLE `Product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Shipment`
--

DROP TABLE IF EXISTS `Shipment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Shipment` (
  `shipment_id` int(11) NOT NULL AUTO_INCREMENT,
  `shipment_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`shipment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Shipment`
--

LOCK TABLES `Shipment` WRITE;
/*!40000 ALTER TABLE `Shipment` DISABLE KEYS */;
INSERT INTO `Shipment` VALUES (1,'BAJAJ'),(2,'SONY'),(3,'DELL'),(4,'AMBRANE'),(5,'KEMEI'),(8,'bajaj1'),(9,'bajaj1');
/*!40000 ALTER TABLE `Shipment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SubCategory`
--

DROP TABLE IF EXISTS `SubCategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SubCategory` (
  `subcategory_id` int(11) NOT NULL AUTO_INCREMENT,
  `subcategory_name` varchar(100) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `offer_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`subcategory_id`),
  KEY `FK_subcategory_category` (`category_id`),
  KEY `FK_category_offer` (`offer_id`),
  CONSTRAINT `FK_category_offer` FOREIGN KEY (`offer_id`) REFERENCES `Offer` (`offer_id`),
  CONSTRAINT `FK_subcategory_category` FOREIGN KEY (`category_id`) REFERENCES `Category` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SubCategory`
--

LOCK TABLES `SubCategory` WRITE;
/*!40000 ALTER TABLE `SubCategory` DISABLE KEYS */;
INSERT INTO `SubCategory` VALUES (1,'Refrigerator',1,1),(2,'ANDROID',2,3),(3,'LENOVO',3,3),(4,'IPHONE',2,2),(6,'Straightner',4,3);
/*!40000 ALTER TABLE `SubCategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ordered_items`
--

DROP TABLE IF EXISTS `ordered_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ordered_items` (
  `ordered_item_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) DEFAULT NULL,
  `customer_name` varchar(100) DEFAULT NULL,
  `product_name` varchar(100) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `amount` float DEFAULT NULL,
  PRIMARY KEY (`ordered_item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordered_items`
--

LOCK TABLES `ordered_items` WRITE;
/*!40000 ALTER TABLE `ordered_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `ordered_items` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-13 12:40:31
