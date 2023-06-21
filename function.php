<?php
// Include the config.php file to connect to the MySQL server
require_once 'config.php';

// Retrieve the data sent from the frontend
$data = json_decode(file_get_contents('php://input'), true);

// Extract the variables
$a = $data['Visited_URL'];
$b = $data['IP_Address'];
$c = $data['Country_IP'];
$d = $data['Main_langage'];
$q = $data['Other_languages'];
$e = $data['City_IP'];
$f = $data['Computer_resolution'];
$f2 = $data['Window_resolution'];
$g = $data['User_agent'];
$h = $data['BROWSER_NAME'];
$i = $data['Rerferrer_URL'];
$j = $data['ASN'];
$k = $data['host_name'];
$l = $data['DOMAIN_NAME'];
$m = $data['PLATFORM_DEVICE'];
$n = $data['BROWSER_CORE'];
$o = $data['APP_VERSION'];
$p = $data['MACHINE_VEN'];
$r = $data['COOKIE_EN'];
$s = $data['ISITONLINE'];
$t = $data['BUILD_ID'];
$u = $data['keayboard'];
$v = $data['MEMORY_MACHINE'];
$w = $data['GPU'];
$x = $data['CPU_CORE'];
$z = $data['PAGE_TITLE'];
$z1 = $data['ORG'];
$z2 = $data['IPV'];
$uniqueID = $data['UniqueID'];
$visitCount = $data['Visit_count'];
$areaOfInterest = $data['Area_of_interest'];

// Check if the table with the UniqueID exists
$tableName = $uniqueID;
$tableExistsQuery = "SHOW TABLES LIKE '$tableName'";
$result = mysqli_query($conn, $tableExistsQuery);
$tableExists = mysqli_num_rows($result) > 0;

if ($tableExists) {
  // Add the visitor information to a new row
  $insertQuery = "INSERT INTO `$tableName` (UniqueID, Visited_URL, IP_Address, Country_IP, Main_langage, Other_languages, City_IP, Computer_resolution, Window_resolution, User_agent, BROWSER_NAME, Rerferrer_URL, ASN, host_name, DOMAIN_NAME, PLATFORM_DEVICE, BROWSER_CORE, APP_VERSION, MACHINE_VEN, COOKIE_EN, ISITONLINE, BUILD_ID, keyboard, MEMORY_MACHINE, GPU, CPU_CORE, PAGE_TITLE, ORG, IPV, Visit_count, Area_of_interest, Name, email)
                  VALUES ('$uniqueID', '$a', '$b', '$c', '$d', '$q', '$e', '$f', '$f2', '$g', '$h', '$i', '$j', '$k', '$l', '$m', '$n', '$o', '$p', '$r', '$s', '$t', '$u', '$v', '$w', '$x', '$z', '$z1', '$z2', '$visitCount', '$areaOfInterest','','')";

  if (mysqli_query($conn, $insertQuery)) {
    echo "https://tfi.tools/POSTED";
  } else {
    echo "Error inserting data: " . mysqli_error($conn);
  }
} else {
  // Create a new table with the UniqueID
  $createTableQuery = "CREATE TABLE `$tableName` (
                      id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                      UniqueID VARCHAR(100) NOT NULL,
                      Visited_URL VARCHAR(1000) NOT NULL,
                      IP_Address VARCHAR(100) NOT NULL,
                      Country_IP VARCHAR(100) NOT NULL,
                      Main_langage VARCHAR(100) NOT NULL,
                      Other_languages VARCHAR(1000) NOT NULL,
                      City_IP VARCHAR(100) NOT NULL,
                      Computer_resolution VARCHAR(10) NOT NULL,
                      Window_resolution VARCHAR(10) NOT NULL,
                      User_agent VARCHAR(1000) NOT NULL,
                      BROWSER_NAME VARCHAR(100) NOT NULL,
                      Rerferrer_URL VARCHAR(1000) NOT NULL,
                      ASN VARCHAR(1000) NOT NULL,
                      host_name VARCHAR(1000) NOT NULL,
                      DOMAIN_NAME VARCHAR(1000) NOT NULL,
                      PLATFORM_DEVICE VARCHAR(1000) NOT NULL,
                      BROWSER_CORE VARCHAR(1000) NOT NULL,
                      APP_VERSION VARCHAR(1000) NOT NULL,
                      MACHINE_VEN VARCHAR(1000) NOT NULL,
                      COOKIE_EN TINYINT,
                      ISITONLINE VARCHAR(1000) NOT NULL,
                      BUILD_ID VARCHAR(1000) NOT NULL,
                      keyboard VARCHAR(1000) NOT NULL,
                      MEMORY_MACHINE VARCHAR(1000) NOT NULL,
                      GPU VARCHAR(1000) NOT NULL,
                      CPU_CORE VARCHAR(1000) NOT NULL,
                      PAGE_TITLE VARCHAR(1000) NOT NULL,
                      ORG VARCHAR(1000) NOT NULL,
                      IPV VARCHAR(1000) NOT NULL,
                      Visit_count INT(6) NOT NULL,
                      Area_of_interest VARCHAR(100) NOT NULL,
					Name VARCHAR(100) NOT NULL,
					email VARCHAR(100) NOT NULL,
                    created_date DATE DEFAULT CURRENT_DATE(),
  					created_time TIME DEFAULT CURRENT_TIME(),
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP()
                      )";

  if (mysqli_query($conn, $createTableQuery)) {
    // Add the visitor information to the new table
    $insertQuery = "INSERT INTO `$tableName` (UniqueID, Visited_URL, IP_Address, Country_IP, Main_langage, Other_languages, City_IP, Computer_resolution, Window_resolution, User_agent, BROWSER_NAME, Rerferrer_URL, ASN, host_name, DOMAIN_NAME, PLATFORM_DEVICE, BROWSER_CORE, APP_VERSION, MACHINE_VEN, COOKIE_EN, ISITONLINE, BUILD_ID, keyboard, MEMORY_MACHINE, GPU, CPU_CORE, PAGE_TITLE, ORG, IPV, Visit_count, Area_of_interest, Name, email)
                    VALUES ('$uniqueID', '$a', '$b', '$c', '$d', '$q', '$e', '$f', '$f2', '$g', '$h', '$i', '$j', '$k', '$l', '$m', '$n', '$o', '$p', '$r', '$s', '$t', '$u', '$v', '$w', '$x', '$z', '$z1', '$z2', '$visitCount', '$areaOfInterest', '','')";

    if (mysqli_query($conn, $insertQuery)) {
      echo "Data inserted successfully";
    } else {
      echo "Error inserting data: " . mysqli_error($conn);
    }
  } else {
    echo "Error creating table: " . mysqli_error($conn);
  }
}

// Close the database connection
mysqli_close($conn);
?>
