# Tools for Internet Cookies

This JavaScript code provides various functions related to handling internet cookies. It includes functionality to generate a unique ID hash code, determine the area of interest based on the URL, create or increment a visit count in a cookie, wrap up and store data in a cookie, retrieve the value of a cookie, and send data to a backend server.

## Installation and Usage

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


### Notes and Considerations

Make sure to replace the placeholders and adjust the code as needed for your specific use case. For example, replace "URL_TO_FUNCTION.PHP" with the appropriate URL for sending data to the backend, replace "API_KEY############################" with your Telegram bot token, and replace "CHAT_ID" with the appropriate chat ID for sending messages via Telegram API.
Take into account the security implications of storing and transmitting sensitive user data. Ensure that you handle user data responsibly and comply with privacy regulations.
Review and modify the code to fit your project's overall structure and requirements.
It's recommended to include appropriate error handling and validation in your implementation to handle any potential issues.
This code relies on several browser-specific objects and properties. Make sure it is compatible with your target browsers and environments.

### License

This code is provided under the MIT License. Feel free to modify and use it according to your needs.
For more information and examples, refer to the TFI.Tools website.
