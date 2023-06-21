// Tools for Internet Cookies
// Function to generate a one-time uniqueID hash code
function function_UID_TFI() {
  // Check if the cookie exists
  if (document.cookie.indexOf('TFI__TOOLS__ID=') === -1) {
    // Generate a random uniqueID
    var uniqueID = Math.random().toString(36).substring(2, 9);

    // Set the cookie with expiry date of 444 days
    var expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 444);
    document.cookie = `TFI__TOOLS__ID=${uniqueID}; expires=${expiryDate.toUTCString()}; path=/; samesite=none; secure`;
  }
}

// Function to determine the area of interest based on the URL
function function_interest_4() {
  var url = window.location.href;
  var areaOfInterest = "";

  if (url.includes("bandsaw") || url.includes("saw") || url.includes("band")) {
    areaOfInterest = "bandsaw";
  } else if (url.includes("press") || url.includes("brake") || url.includes("bend")) {
    areaOfInterest = "pressbrake";
  } else if (url.includes("grind") || url.includes("sharp") || url.includes("zatochka")) {
    areaOfInterest = "sharpening";
  } else if (url.includes("anti") || url.includes("film") || url.includes("mark")) {
    areaOfInterest = "antiMark";
  } else if (url.includes("link3") || url.includes("shrt") || url.includes("link3")) {
    areaOfInterest = "BusinessCard";
  } else if (url.includes("zirconia") || url.includes("ceramic") || url.includes("pentagon")) {
    areaOfInterest = "ceramic";
  } else if (url.includes("guillotine") || url.includes("shear")) {
    areaOfInterest = "shearing";
  } else {
    areaOfInterest = "generalVisit";
  }

  // Store the area of interest in JSON format in a cookie with expiry date 333 days
  var expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 333);
  document.cookie = `Area_of_interest_TT_=${JSON.stringify(areaOfInterest)}; expires=${expiryDate.toUTCString()}; path=/; samesite=none; secure`;

  return areaOfInterest;
}

// Function to create or increment visit count in a cookie
function function_VISIT() {
  // Check if the cookie exists
  if (document.cookie.indexOf('Visit_count_TFI=') === -1) {
    // Create the cookie with initial visit count of 1
    var expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 333);
    document.cookie = `Visit_count_TFI=1; expires=${expiryDate.toUTCString()}; path=/; samesite=none; secure`;
  } else {
    // Increment the visit count in the existing cookie
    var visitCountCookie = document.cookie.replace(/(?:(?:^|.*;\s*)Visit_count_TFI\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    var visitCount = parseInt(visitCountCookie) + 1;

    // Update the cookie with the incremented visit count
    var expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 333);
    document.cookie = `Visit_count_TFI=${visitCount}; expires=${expiryDate.toUTCString()}; path=/; samesite=none; secure`;
  }
}

// Function to wrap up and store the data in a cookie
function Function_Wrap_itup() {
  var uniqueID = getCookieValue('TFI__TOOLS__ID');
  var areaOfInterest = function_interest_4();
  var visitCount = getCookieValue('Visit_count_TFI');

  var data = {
    "Area_of_interest": areaOfInterest,
    "visit_count": visitCount,
    "uniqueID": uniqueID
  };

  // Set the cookie with expiry date 333 days
  var expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 333);
  document.cookie = `TFI_TOOLS_OOO=${JSON.stringify(data)}; expires=${expiryDate.toUTCString()}; path=/; samesite=none; secure`;
}

// Function to get the value of a cookie
function getCookieValue(cookieName) {
  var name = cookieName + "=";
  var cookieArray = document.cookie.split(';');
  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
}

// Function to send data to the backend
function function_send_to_backend() {
  var uniqueID = getCookieValue('TFI__TOOLS__ID');
  var areaOfInterest = getCookieValue('Area_of_interest_TT_');
  var visitCount = getCookieValue('Visit_count_TFI');
  var currentURL = window.location.href;
  var ipAddress = "";
  var countryName = "";
  var language = navigator.language;
  var city = "";
  var screenWidth = screen.width;
  var screenHeight = screen.height;
  var innerWindowWidth = window.innerWidth;
  var innerWindowHeight = window.innerHeight;
  var userAgent = navigator.userAgent;
  var browserName = navigator.appName;
  var referrerURL = document.referrer;
  var asn = "";
  var hostname = window.location.hostname;
  var domain = document.domain;
  var platform = navigator.platform;
  var appCodeName = navigator.appCodeName;
  var appVersion = navigator.appVersion;
  var vendor = navigator.vendor;
  var languages = navigator.languages;
  var cookieEnabled = navigator.cookieEnabled;
  var online = navigator.onLine;
  var buildID = navigator.buildID;
  var keyboardLayout = navigator.keyboard;
  var deviceMemory = navigator.deviceMemory;
  var gpu = navigator.gpu;
  var hardwareConcurrency = navigator.hardwareConcurrency;
  var pageTitle = document.title;
  var organization = "";
  var version = "";

  // Perform API request to obtain IP details from ipapi.co
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://ipapi.co/json/", true);
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
    var data = JSON.parse(xhr.responseText);
    ipAddress = data.ip;
    countryName = data.country_name;
    city = data.city;
    asn = data.asn;
    organization = data.org;
    version = data.version;

    // Get the emoji of the country
    var countryEmoji = '';
    setTimeout(function() {
      if (data.country_code !== null && data.country_code.length === 2) {
        var countryCode = data.country_code.toUpperCase();
        var codePoints = countryCode.split('').map(function (char) {
          return 127397 + char.charCodeAt();
        });
       countryEmoji = String.fromCodePoint.apply(null, codePoints);
     }
  }, 500);

      // Prepare the data to be sent
      var sendData = {
        "Visited_URL": currentURL,
        "IP_Address": ipAddress,
        "Country_IP": countryName,
        "Main_langage": language,
		"Other_languages": languages,
        "City_IP": city,
        "Computer_resolution": `${screenWidth}x${screenHeight}`,
        "Window_resolution": `${innerWindowWidth}x${innerWindowHeight}`,
        "User_agent": userAgent,
        "BROWSER_NAME": browserName,
        "Rerferrer_URL": referrerURL,
        "ASN": asn,
        "host_name": hostname,
        "DOMAIN_NAME": domain,
        "PLATFORM_DEVICE": platform,
        "BROWSER_CORE": appCodeName,
        "APP_VERSION": appVersion,
        "MACHINE_VEN": vendor,
        "COOKIE_EN": cookieEnabled,
        "ISITONLINE": online,
        "BUILD_ID": buildID,
        "keyboard": keyboardLayout,
        "MEMORY_MACHINE": deviceMemory,
        "GPU": gpu,
        "CPU_CORE": hardwareConcurrency,
        "PAGE_TITLE": pageTitle,
        "ORG": organization,
        "IPV": version,
        "UniqueID": uniqueID,
        "Visit_count": visitCount,
        "Area_of_interest": areaOfInterest
      };

      // Send the data to the backend
      var xhrBackend = new XMLHttpRequest();
      xhrBackend.open("POST", "URL_TO_FUNCTION.PHP", true); // Replace with your URL
      xhrBackend.setRequestHeader("Content-Type", "application/json");
      xhrBackend.onreadystatechange = function () {
    if (xhrBackend.readyState === 4 && xhrBackend.status === 200) {
      console.log(xhrBackend.responseText);

      // Send a message to the Telegram API
      var telegramAPIUrl = 'https://api.telegram.org/botAPI_KEY############################/sendMessage'; // Replace with your Telegram bot token

      // Create the message to send
      var message = `┌──${countryEmoji}🎉💰🧲 🏅🏆${countryEmoji}──┐\n` + 
              ` | \n` + 
              ` | 🙏🏼0.45KG of Gold/Month 🔑\n` + 
              ` |─────────────────\n` +
              ` | 🔗 |  ${currentURL}\n` +
              ` | 👉🏼 |  ${referrerURL}\n` +
              ` |─────────────────\n` +
              ` | 🌎 |  ${countryName} ${countryEmoji} <b>${city}</b>\n` +
              ` | 🌐 |  <a href="http://${ipAddress}/">${ipAddress}</a>` +
              ` | 🍪 |  ${cookieEnabled}  \n` +
              ` | 🔢 |  <u>${visitCount}</u>  | 🔑 <code>${uniqueID}</code>\n` +
              ` | 💼 |  ${organization}  \n` +
              ` | 📱 |  ${vendor} - ${platform}  \n` +
              ` | 📐 |  ${screenWidth}x${screenHeight}  \n` +
              ` | 🐏 |  ${deviceMemory}GB  | ⚡️ | ${hardwareConcurrency}Cores\n` +
              ` | 🗣 |  ${languages}\n` +
              ` | ❇️ |  <b>${areaOfInterest}</b>\n` +
              ` | ⚙️ |  ${appVersion}\n` +
              ` | \n` +
              `└──🍀☘️🎓💎💰💪🏼🙏🏼──┘\n`;

        // Create the request to send the message
        var xhrTelegram = new XMLHttpRequest();
        xhrTelegram.open("POST", telegramAPIUrl, true);
        xhrTelegram.setRequestHeader("Content-Type", "application/json");
        xhrTelegram.onreadystatechange = function () {
          if (xhrTelegram.readyState === 4 && xhrTelegram.status === 200) {
            console.log('https://tfi.tools/cookies/');
          }
        };

        // Set the parse mode to HTML
        var params = {
          chat_id: 'CHAT_ID', // Replace with Chat ID
          parse_mode: 'HTML',
          disable_web_page_preview: true,
          text: message
        };

        xhrTelegram.send(JSON.stringify(params));
            }
          };
              xhrBackend.send(JSON.stringify(sendData));
            }
          };
          xhr.send();
        }

// Call the functions
function_UID_TFI();
function_interest_4();
function_VISIT();
Function_Wrap_itup();
function_send_to_backend();
