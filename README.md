# Tools for Internet Cookies

This JavaScript code provides various functions related to handling internet cookies. It includes functionality to generate a unique ID hash code, determine the area of interest based on the URL, create or increment a visit count in a cookie, wrap up and store data in a cookie, retrieve the value of a cookie, and send data to a backend server.

## Javascript Snippet

To use this code, follow these steps:

1. Include the JavaScript code in your project by copying and pasting it into your JavaScript file or inline script tag.

2. Call the desired functions in your code to utilize their functionality. For example:

```javascript
function_UID_TFI();
function_interest_4();
function_VISIT();
Function_Wrap_itup();
function_send_to_backend();
```
## Function Descriptions

### function_UID_TFI()
Generates a one-time unique ID hash code and sets it as a cookie if it doesn't already exist.
### function_interest_4()
Determines the area of interest based on the URL and stores it in a cookie. The area of interest is determined by checking specific keywords in the URL.
### function_VISIT()
Creates or increments a visit count in a cookie. If the cookie doesn't exist, it creates a new one with an initial visit count of 1.
### Function_Wrap_itup()
Wraps up the unique ID, area of interest, and visit count into an object and stores it in a cookie.
### function_send_to_backend()
Sends the collected data, including IP details, browser information, and cookie values, to a backend server using an API request. It also sends a message to the Telegram API with the collected data.
### getCookieValue(cookieName)
Helper function that retrieves the value of a cookie by name.

## PHP backend 
### PHP File for Storing Visitor Information

This PHP file is responsible for receiving data from the frontend and storing it in a MySQL database. It performs the following actions:

1. Connects to the MySQL server using the `config.php` file.
2. Retrieves the data sent from the frontend as JSON and decodes it.
3. Extracts the individual variables from the decoded JSON data.
4. Checks if a table with the provided `UniqueID` exists in the database.
5. If the table exists, inserts the visitor information into a new row.
6. If the table does not exist, creates a new table with the `UniqueID` as the table name and inserts the visitor information.
7. Provides appropriate success or error messages based on the database operations.
8. Closes the database connection.

### Usage

To use this PHP file, follow these steps:

1. Include the `config.php` file to establish a connection with the MySQL server.
2. Send the visitor information from the frontend to this PHP file using a JSON payload.
3. Modify the code as needed to ensure the correct variable names and data structure match your frontend implementation.
4. Execute the PHP file on a server with PHP and MySQL support.

### Database Structure

The PHP file assumes the following structure for the visitor information table:

```sql
CREATE TABLE `tableName` (
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
)
```
Ensure that the table structure matches your requirements and adjust the code accordingly.
Additional Considerations
Modify the code to include appropriate validation and sanitization of the data received from the frontend to prevent security vulnerabilities and ensure data integrity.
Adapt the code to handle any additional requirements specific to your project, such as sending notifications, performing additional database operations, or implementing authentication and authorization mechanisms.
Review and adjust the code to adhere to coding standards and best practices, including error handling, logging, and performance optimizations.
For more information and examples, refer to the TFI.Tools website.
License
This code is provided under the MIT License. Feel free to modify and use it according to your needs.

### Notes and Considerations

Make sure to replace the placeholders and adjust the code as needed for your specific use case. For example, replace "URL_TO_FUNCTION.PHP" with the appropriate URL for sending data to the backend, replace "API_KEY############################" with your Telegram bot token, and replace "CHAT_ID" with the appropriate chat ID for sending messages via Telegram API.
Take into account the security implications of storing and transmitting sensitive user data. Ensure that you handle user data responsibly and comply with privacy regulations.
Review and modify the code to fit your project's overall structure and requirements.
It's recommended to include appropriate error handling and validation in your implementation to handle any potential issues.
This code relies on several browser-specific objects and properties. Make sure it is compatible with your target browsers and environments.

### License

This code is provided under the MIT License. Feel free to modify and use it according to your needs.
For more information and examples, refer to the TFI.Tools website.
