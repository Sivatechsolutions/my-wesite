-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 18, 2026 at 09:04 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sivatech_website`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_users`
--

CREATE TABLE `admin_users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','staff') DEFAULT 'admin',
  `is_active` tinyint(1) DEFAULT 1,
  `last_login` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin_users`
--

INSERT INTO `admin_users` (`id`, `name`, `email`, `password`, `role`, `is_active`, `last_login`, `created_at`, `updated_at`) VALUES
(1, 'Siva Prakash', 'sivatechsolution2020@gmail.com', '$2y$12$placeholder_bcrypt_hash', 'admin', 1, NULL, '2026-05-09 10:56:01', '2026-05-09 10:56:01');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(150) DEFAULT NULL,
  `business` varchar(150) NOT NULL,
  `location` varchar(100) NOT NULL,
  `service` varchar(100) NOT NULL,
  `budget` varchar(50) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `status` enum('new','contacted','closed') DEFAULT 'new',
  `notes` text DEFAULT NULL COMMENT 'Admin notes',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `phone`, `email`, `business`, `location`, `service`, `budget`, `message`, `status`, `notes`, `created_at`, `updated_at`) VALUES
(1, 'Siva Prakash R', '09489651231', 'sivatechsolution2020@gmail.com', 'Siva Tech Solutions', 'marthandam', 'CCTV Installation', '₹10,000 – ₹25,000', NULL, 'new', NULL, '2026-05-09 06:23:48', '2026-05-09 06:23:48'),
(2, 'aswathy', '09744977477', 'sivatechsolution2020@gmail.com', '9876543213', 'marthandam', 'Biometric System', '₹50,000 – ₹1,00,000', NULL, 'new', NULL, '2026-05-09 07:10:28', '2026-05-09 07:10:28'),
(3, 'vijin', '08344259685', 'sivatechsolution2020@gmail.com', 'Siva Tech Solutions', 'asas', 'IT Consulting', NULL, NULL, 'new', NULL, '2026-05-09 07:21:47', '2026-05-09 07:21:47'),
(4, 'swathy', '09847557661', 'sivatechsolution2020@gmail.com', 'Siva Tech Solutions', 'kk', 'MediPharmacy', NULL, NULL, 'new', NULL, '2026-05-09 07:46:01', '2026-05-09 07:46:01');

-- --------------------------------------------------------

--
-- Table structure for table `enquiries`
--

CREATE TABLE `enquiries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(150) DEFAULT NULL,
  `business` varchar(150) NOT NULL,
  `product` varchar(100) NOT NULL,
  `message` text DEFAULT NULL,
  `status` enum('new','contacted','closed') DEFAULT 'new',
  `source` varchar(50) DEFAULT 'product_page',
  `notes` text DEFAULT NULL COMMENT 'Admin notes',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `enquiries`
--

INSERT INTO `enquiries` (`id`, `name`, `phone`, `email`, `business`, `product`, `message`, `status`, `source`, `notes`, `created_at`, `updated_at`) VALUES
(1, 'ram', '08090809080', 'sivatechsolution2020@gmail.com', 'Siva Tech Solutions', 'ShopMate POS', NULL, 'new', 'product_page', NULL, '2026-05-09 06:45:34', '2026-05-09 06:45:34'),
(2, 'Siva Prakash R', '09489651231', 'sivatechsolution2020@gmail.com', 'Siva Tech Solutions', 'Gold Finance Pro', NULL, 'new', 'product_page', NULL, '2026-05-09 07:05:29', '2026-05-09 07:05:29'),
(3, 'Siva Prakash R', '09489651231', 'sivatechsolution2020@gmail.com', 'Siva Tech Solutions', 'Gold Finance Pro', NULL, 'new', 'product_page', NULL, '2026-05-09 07:05:38', '2026-05-09 07:05:38'),
(4, 'Siva Prakash R', '09489651231', 'sivatechsolution2020@gmail.com', 'Siva Tech Solutions', 'Gold Finance Pro', NULL, 'new', 'product_page', NULL, '2026-05-09 07:05:45', '2026-05-09 07:05:45'),
(5, 'Siva Prakash R', '09489651231', 'sivatechsolution2020@gmail.com', 'Siva Tech Solutions', 'Gold Finance Pro', NULL, 'new', 'product_page', NULL, '2026-05-09 07:05:56', '2026-05-09 07:05:56'),
(6, 'BRAND MASTERS', '08344259685', 'sivatechsolution2020@gmail.com', 'Siva Tech Solutions', 'MediPharmacy', NULL, 'new', 'product_page', NULL, '2026-05-09 07:24:48', '2026-05-09 07:24:48'),
(7, 'mathu', '08754668130', 'sivatechsolution2020@gmail.com', 'Siva Tech Solutions', 'HospitalMate Pro', NULL, 'new', 'product_page', NULL, '2026-05-09 07:38:42', '2026-05-09 07:38:42');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Stand-in structure for view `recent_enquiries`
-- (See below for the actual view)
--
CREATE TABLE `recent_enquiries` (
`type` varchar(7)
,`id` bigint(20) unsigned
,`name` varchar(100)
,`phone` varchar(20)
,`business` varchar(150)
,`subject` varchar(100)
,`status` varchar(9)
,`created_at` timestamp
);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure for view `recent_enquiries`
--
DROP TABLE IF EXISTS `recent_enquiries`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `recent_enquiries`  AS SELECT 'product' AS `type`, `enquiries`.`id` AS `id`, `enquiries`.`name` AS `name`, `enquiries`.`phone` AS `phone`, `enquiries`.`business` AS `business`, `enquiries`.`product` AS `subject`, `enquiries`.`status` AS `status`, `enquiries`.`created_at` AS `created_at` FROM `enquiries`union all select 'contact' AS `type`,`contacts`.`id` AS `id`,`contacts`.`name` AS `name`,`contacts`.`phone` AS `phone`,`contacts`.`business` AS `business`,`contacts`.`service` AS `subject`,`contacts`.`status` AS `status`,`contacts`.`created_at` AS `created_at` from `contacts` order by `created_at` desc  ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_users`
--
ALTER TABLE `admin_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_status` (`status`),
  ADD KEY `idx_service` (`service`),
  ADD KEY `idx_created` (`created_at`);

--
-- Indexes for table `enquiries`
--
ALTER TABLE `enquiries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_status` (`status`),
  ADD KEY `idx_product` (`product`),
  ADD KEY `idx_created` (`created_at`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_users`
--
ALTER TABLE `admin_users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `enquiries`
--
ALTER TABLE `enquiries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
