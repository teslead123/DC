-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: teslead_connect
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dc_desc`
--

DROP TABLE IF EXISTS `dc_desc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dc_desc` (
  `id` int NOT NULL,
  `dc_number` varchar(255) DEFAULT NULL,
  `item_name` varchar(255) DEFAULT NULL,
  `item_description` varchar(255) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `uom` varchar(255) DEFAULT NULL,
  `rate` float DEFAULT NULL,
  `project_name` varchar(255) DEFAULT NULL,
  `project_incharge` varchar(255) DEFAULT NULL,
  `weight_per_unit` varchar(255) DEFAULT NULL,
  `total_weight` varchar(255) DEFAULT NULL,
  `sq_feet_per_unit` varchar(255) DEFAULT NULL,
  `total_sq_feet` varchar(255) DEFAULT NULL,
  `pre_send_remarks` varchar(255) DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dc_desc`
--

LOCK TABLES `dc_desc` WRITE;
/*!40000 ALTER TABLE `dc_desc` DISABLE KEYS */;
/*!40000 ALTER TABLE `dc_desc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dc_desc_updates`
--

DROP TABLE IF EXISTS `dc_desc_updates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dc_desc_updates` (
  `id` int NOT NULL,
  `dc_number` varchar(255) DEFAULT NULL,
  `item_name` varchar(255) DEFAULT NULL,
  `item_description` varchar(255) DEFAULT NULL,
  `received_quantity` int DEFAULT NULL,
  `defect_quantity` int DEFAULT NULL,
  `received_doc_type` varchar(255) DEFAULT NULL,
  `supplier_dc_number` varchar(255) DEFAULT NULL,
  `supplier_dc_date` date DEFAULT NULL,
  `supplier_invoice_number` varchar(255) DEFAULT NULL,
  `supplier_invoice_date` date DEFAULT NULL,
  `received_remarks` varchar(255) DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dc_desc_updates`
--

LOCK TABLES `dc_desc_updates` WRITE;
/*!40000 ALTER TABLE `dc_desc_updates` DISABLE KEYS */;
/*!40000 ALTER TABLE `dc_desc_updates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dc_details`
--

DROP TABLE IF EXISTS `dc_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dc_details` (
  `id` int NOT NULL,
  `dc_number` varchar(255) DEFAULT NULL,
  `dc_date` date DEFAULT NULL,
  `dc_type` varchar(255) DEFAULT NULL,
  `process` varchar(255) DEFAULT NULL,
  `vehicle_no` varchar(255) DEFAULT NULL,
  `no_of_items` int DEFAULT NULL,
  `total_quantity` int DEFAULT NULL,
  `total_received_quantity` int DEFAULT NULL,
  `notes` varchar(255) DEFAULT NULL,
  `total_supplier_dc_received` int DEFAULT NULL,
  `total_supplier_invoice_received` int DEFAULT NULL,
  `supplier_name` varchar(255) DEFAULT NULL,
  `address_line_1` varchar(255) DEFAULT NULL,
  `address_line_2` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `pincode` int DEFAULT NULL,
  `gstin_no` varchar(255) DEFAULT NULL,
  `state_code` int DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `updated_date` date DEFAULT NULL,
  `dc_status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dc_details`
--

LOCK TABLES `dc_details` WRITE;
/*!40000 ALTER TABLE `dc_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `dc_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-06 16:41:19
