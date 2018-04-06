-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 27, 2014 at 02:12 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `organizations`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `adminName` varchar(30) NOT NULL,
  `ngo_number` varchar(20) NOT NULL,
  `ngo_name` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`, `adminName`, `ngo_number`, `ngo_name`) VALUES
(1, 'admin1', 'stf61vqArAGXQ', 'Robyn Wienand', '354677288811', 'PWAP');

-- --------------------------------------------------------

--
-- Table structure for table `archive`
--

CREATE TABLE IF NOT EXISTS `archive` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name_of_school` varchar(60) NOT NULL,
  `physical_address` varchar(100) NOT NULL,
  `province` char(20) NOT NULL,
  `principal` char(30) NOT NULL,
  `contact_number` varchar(10) NOT NULL,
  `longitude` double NOT NULL,
  `latitude` double NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `archive`
--

INSERT INTO `archive` (`id`, `name_of_school`, `physical_address`, `province`, `principal`, `contact_number`, `longitude`, `latitude`, `email`) VALUES
(1, 'Otlamentse', 'Leeu Road, Kagiso', 'Gauteng', 'Kedibone Nalane', '0717493828', -26.14439, 27.79963, 'otl@mail.com'),
(2, 'Birdsville Educare', 'Cnr Mogorosi, Kunupi Drive, Kagiso', 'Gauteng', 'Sandra Mokgwathi', '0780277151', -26.15801, 27.77445, 'bd@mail.com');

-- --------------------------------------------------------

--
-- Table structure for table `ngo_archive`
--

CREATE TABLE IF NOT EXISTS `ngo_archive` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `ngo_number` varchar(30) NOT NULL,
  `ngo_name` varchar(30) NOT NULL,
  `president` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `contact_person` varchar(30) NOT NULL,
  `contact_number` varchar(30) NOT NULL,
  `ngo_description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `ngo_archive`
--

INSERT INTO `ngo_archive` (`id`, `username`, `password`, `ngo_number`, `ngo_name`, `president`, `email`, `contact_person`, `contact_number`, `ngo_description`) VALUES
(1, '', '', '2249992', 'Non Profit Org', 'James Jonathan', 'john2@mail.com', 'Tom Jerry', '08272727272', 'Non Profit org'),
(2, '', '', '677775', 'george', 'jjkjklk', 'ajmoy1@yahoo.com', 'meeeee', '088788888', '6556555565');

-- --------------------------------------------------------

--
-- Table structure for table `ngo_temp`
--

CREATE TABLE IF NOT EXISTS `ngo_temp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ngo_number` varchar(20) NOT NULL,
  `ngo_name` varchar(50) NOT NULL,
  `president` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `contact_person` varchar(50) NOT NULL,
  `contact_number` varchar(40) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- Dumping data for table `ngo_temp`
--

INSERT INTO `ngo_temp` (`id`, `ngo_number`, `ngo_name`, `president`, `email`, `contact_person`, `contact_number`, `description`) VALUES
(4, '123-564', 'monash help', 'Aj', 'albert@yahoo.com', 'Alma', '06543442424', 'eryewgfokqf'),
(5, '52525252525', 'shshshsh', 'hshshshs', 'jk@mail.com', 'dydydyd', 'sshhshshhs', 'shhshshsh'),
(15, '223-636', 'jAM', 'James Barker', 'john@mail.com', 'John Carter', '078 231 1111', 'We iiwewdqwe'),
(16, '223-636', 'jAM', 'James Barker', 'john@mail.com', 'John Carter', '078 231 1111', 'We iiwewdqwe');

-- --------------------------------------------------------

--
-- Table structure for table `nursery_schools`
--

CREATE TABLE IF NOT EXISTS `nursery_schools` (
  `nursery_school_id` int(11) NOT NULL AUTO_INCREMENT,
  `name_of_school` char(20) NOT NULL,
  `physical_address` varchar(40) NOT NULL,
  `province` char(20) NOT NULL,
  `principal` char(30) NOT NULL,
  `contact_number` varchar(10) NOT NULL,
  `longitude` double DEFAULT NULL,
  `latitude` double DEFAULT NULL,
  `email` varchar(30) NOT NULL,
  PRIMARY KEY (`nursery_school_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=39 ;

--
-- Dumping data for table `nursery_schools`
--

INSERT INTO `nursery_schools` (`nursery_school_id`, `name_of_school`, `physical_address`, `province`, `principal`, `contact_number`, `longitude`, `latitude`, `email`) VALUES
(2, 'Sunshine Daycare', 'East Motsoaledi Rd, Dobsonville', 'Gauteng', 'Florence Temba', '0735747124', -26.22314, 27.87243, 'sunshine@mail.com'),
(3, 'Disney', '123 Harry road, hatfield', 'North West', 'Belinda Moyo', '0786662839', -28.9874, 27.0213, 'disney@mail.com'),
(4, 'Bonolo', 'Kotane Street, Jouberton', 'Gauteng', 'Doreen Nthwane', '0835919174', -26.90415, 26.59357, 'bonolo@mail.com'),
(5, 'Junior ELC', 'Matlosana Drive, Jouberton', 'Gauteng', 'Bella Nkwali', '0733356428', -26.88689, 26.60408, 'jrelc@mail.com'),
(6, 'Ledibeng', 'Kuamosi Street, Jouberton', 'Gauteng', 'Sylvia Setlaleng/Joy', '0715592086', -26.88782, 26.5855, 'lediben@mail.com'),
(7, 'Kingz & Queenz Acade', 'Kutlwanong Street, Kagiso', 'Gauteng', 'Queen Somdaka', '0711252675', -26.1539, 27.78026, 'kingandq@mail.com'),
(8, 'Hulani Daycare', '10552 Corner of Dresden and Afghanistan', 'Gauteng', 'Francinah Ndivheni', '0724582259', -26.0377, 27.91644, ''),
(9, 'Khanya Educare', '1148 Violet Crescent street  Ext6 Kagiso', 'Gauteng', 'Lindiwe Matlala', '0783543588', -26.1685607, 27.7880024, ''),
(10, 'Knowledge and Love', 'Cosmo City', 'Gauteng', 'Busi Mncube', '0717319463', NULL, NULL, ''),
(11, 'Little Angels Hillfo', '29 Kroton street South  Weltevredenpark ', 'Gauteng', 'Desire Levenson', '0825533729', -26.13758, 27.9165, ''),
(12, 'Lufuno Diepsloot', '5823 Riverbank Extension 7 Dieplsoot', 'Gauteng', 'Thembi', '0835396065', NULL, NULL, ''),
(13, 'Mohau', 'Plot 32 Hebron Sterkfontein Road Kromdra', 'Gauteng', 'Thembi Phethani', '0739055144', -26.02878, -26.02878, ''),
(14, 'Ontlametse', 'Leeu Rd, Kagiso', 'Gauteng', 'Kedibone Nalane', '0717493828', -26.14439, 27.79963, ''),
(15, 'Orient Hills Daycare', 'Magaliesberg', 'Gauteng', 'Paulinah Mabaso', '0735991801', NULL, NULL, ''),
(16, 'PWAP Krugersdorp', 'C/o Rustenburg Street and Luipaard Kruge', 'Gauteng', 'Helen Du Plessis', '0825177254', -26.10022, 27.850678, ''),
(17, 'Rainbow Drift', 'Andries Road Muldersdrift', 'Gauteng', 'Sarah-Leigh Hamilton', '0725741242', -26.0405, 27.850678, ''),
(18, 'Rainbow Valley', '908 Veldpond Avenue Strubens Valley', 'Gauteng', 'Priscilla Dengler', '0837344949', -26.1203, 27.90278, ''),
(19, 'Sechaba  Video Centr', 'Plot 81 Rietfontein', 'Gauteng', 'Petunia Maleke', '0764076964', -26.0357664, 27.8484446, ''),
(20, 'Sprouting Roses', '3382 San Marino Crescent Extension 3 Cos', 'Gauteng', 'Maureen Letlape', '0837598678', -26.0462089, 27.922821, ''),
(21, 'Sunrise Daycare', 'Tudeeshaft Road Kagiso', 'Gauteng', 'Juliet Magwazo', '0790430286', -26.13022, 27.8016, ''),
(22, 'Mokuhle', 'Diepsloot', 'Gauteng', 'Prisca Msibi', '0781800160', NULL, NULL, ''),
(23, 'Aganang', 'Mayibuye Street', 'Gauteng', 'Evidia Khauwe', '', -26.905524, 26.595553, ''),
(24, 'Boitumelo', '', 'Gauteng', 'Onica Serame', '0783974771', -26.856147, 26.86673, ''),
(25, 'Boitumelong', 'J D Khumalo Street, Kanana Ext 6', 'Gauteng', 'Tsakani Ngamlana', '0791010506', -26.94267, 26.63561, ''),
(26, 'Botshelo', '', '', 'Violet Selamolela', '0727292205', NULL, NULL, ''),
(27, 'Ithemba Lam', 'A Disele Street', 'Gauteng', '', '', -26.965327, 26.641134, ''),
(28, 'Shalom Pre-School', 'Kuamosi St, Jouberton', 'Gauteng', 'Sharon Rhodes', '0721425609', NULL, NULL, ''),
(29, 'Sizanani', 'Tshepo St, Kanana', 'Gauteng', 'Nondumiso Gayiya', '0820572219', -26.95947, 26.64071, ''),
(30, 'Thusano', '', 'Gauteng', '', '0835399722', NULL, NULL, ''),
(31, 'Bunny Beez Daycare', '943 Texas Street Ext 0 Cosmo City', 'Gauteng', 'Mpho Sithole', '0828624028', -26.0212049, 27.938236, ''),
(32, 'Cosmo City Daycare', '', 'Gauteng', 'Rose Gumede', '0733650226', -26.014926, 27.938132, ''),
(33, 'Ethandweni Preschool', '8051 Guenia Street Ext 6', 'Gauteng', 'Nyameka Silo', '0733650226', -26.033068, 27.928876, ''),
(34, 'Flame Lily Preschool', '361 Rhode Island Extension 0 Cosmo City', 'Gauteng', 'Nompumulelo Moyo', '0727271242', -26.0172539, 27.935691, ''),
(35, 'Kwena Molapo', '', 'Gauteng', 'Mathilda Mathaba', '0720557763', -26.01723, 27.93377, ''),
(36, 'Lethlabile Nursery', '6616 Miamy Crescent EXT 6  Cosmo City', 'Gauteng', 'Esther Maluleke', '0837535741', -26.016593, 27.935439, ''),
(37, 'Luzuko', 'Seychelles Ave, Cosmo City', 'Gauteng', 'Brenda Mpokela', '0842124468', -26.0324, 27.9295, '');

-- --------------------------------------------------------

--
-- Table structure for table `ongoing_projects`
--

CREATE TABLE IF NOT EXISTS `ongoing_projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ngo_name` varchar(50) NOT NULL,
  `name_of_school` varchar(50) NOT NULL,
  `project` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;

--
-- Dumping data for table `ongoing_projects`
--

INSERT INTO `ongoing_projects` (`id`, `ngo_name`, `name_of_school`, `project`) VALUES
(11, 'Non Profit Organization', 'Bonolo', 'Food project'),
(12, 'Non Profit Organization', 'Ledibeng', 'Water and Juice'),
(13, 'Non Profit Organization', 'Ledibeng', 'Food project for the school'),
(14, 'Non Profit Organization', 'Otlamentse', 'Water and Juice project at the school. '),
(15, 'Non Profit Organization', 'Junior ELC', 'Food and Water '),
(16, 'Joint Aid Management', 'Sizanani', 'Painting the school wall fences'),
(17, 'Non Profit Organization', 'Birdsville Educare', 'w9hwxhwxwhx9hxw9');

-- --------------------------------------------------------

--
-- Table structure for table `pictures`
--

CREATE TABLE IF NOT EXISTS `pictures` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `link` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

-- --------------------------------------------------------

--
-- Table structure for table `project_temp`
--

CREATE TABLE IF NOT EXISTS `project_temp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ngo_number` varchar(100) NOT NULL,
  `ngo_name` varchar(100) NOT NULL,
  `project_description` text NOT NULL,
  `name_of_school` varchar(50) NOT NULL,
  `province` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `project_temp`
--

INSERT INTO `project_temp` (`id`, `ngo_number`, `ngo_name`, `project_description`, `name_of_school`, `province`) VALUES
(2, '12345678', 'Non Profit Organization', '9ehhex9hex', 'Birdsville Educare', 'Gauteng'),
(3, '12345678', 'Non Profit Organization', 'We deal with food', 'Disney', 'North West');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `ngoNumber` varchar(60) NOT NULL,
  `ngoName` varchar(60) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phoneNumber` varchar(20) NOT NULL,
  `president` varchar(40) NOT NULL,
  `contactPerson` varchar(40) NOT NULL,
  `ngoDescription` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `ngoNumber`, `ngoName`, `email`, `phoneNumber`, `president`, `contactPerson`, `ngoDescription`) VALUES
(1, 'nonprofitorg', 'stNcmBkKct0DU', '12345678', 'Non Profit Organization', 'nonprofitorg@mail.com', '0718005447', 'James Barker', 'Patricia Brown', 'Non Profit org is a non profit org with the aim of helping pre-schools.'),
(3, 'nonprofitorg2', 'stNcmBkKct0DU', '08292929339992', 'Joint Aid Management', 'jam@mail.com', '08234637833', 'Tinashe Kunda', 'James Grey', 'This organization is dedicated to helping others in need.'),
(4, 'nonprofitorg3', 'stNcmBkKct0DU', '83737822839392', 'Hands That Build', 'htb@gmail.com', '02773382782', 'Mark Matthews', 'Clark Jenkins', 'This organization is dedicated to helping children that are in need.');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
