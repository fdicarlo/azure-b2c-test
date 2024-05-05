## Azure B2C Test Application

This is a simple web application built using React that demonstrates the integration of Azure B2C for login and logout functionality.

### Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Configuration](#configuration)
6. [Usage](#usage)
7. [Deployment](#deployment)
8. [Contributing](#contributing)
9. [License](#license)

### Introduction

The Azure B2C Test Application is a React-based web application that allows users to test the login and logout functionality of an Azure B2C tenant. This application can be used as a starting point for developers who want to integrate Azure B2C into their own web applications.

### Features

- Login and logout functionality using Azure B2C
- Responsive design with a clean and simple user interface
- Customizable Azure B2C configuration

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your system
- An Azure B2C tenant with a configured sign-in policy

### Installation

1. Clone the repository:

```
git clone https://github.com/fdicarlo/azure-b2c-test.git
```

2. Navigate to the project directory:

```
cd azure-b2c-test
```

3. Install the required dependencies:

```
npm install
```

### Configuration

1. Open the `src/App.js` file and replace the following placeholders with your actual Azure B2C configuration:

```javascript
const msalConfig = {
  auth: {
    clientId: 'YOUR_CLIENT_ID',
    authority: 'https://YOUR_TENANT_NAME.b2clogin.com/YOUR_TENANT_NAME.onmicrosoft.com/YOUR_SIGN_IN_POLICY',
    redirectUri: 'http://localhost:3000',
  },
};
```

2. If you want to use a custom logo, replace the `logo.png` file in the `src/assets` folder with your own logo image.

### Usage

1. Start the development server:

```
npm start
```

2. Open your web browser and navigate to `http://localhost:3000`.
3. Click the "Login" button to initiate the Azure B2C login flow.
4. After successful login, the button should change to "Logout".
5. Click the "Logout" button to sign out of the application.

### Deployment

To deploy the application, you can follow these steps:

1. Build the production-ready version of the application:

```
npm run build
```

2. Deploy the contents of the `build` folder to your preferred hosting platform (e.g., GitHub Pages, Netlify, or a web server).

### Contributing

If you find any issues or have suggestions for improvements, feel free to open a new issue or submit a pull request.

### License

This project is licensed under the [MIT License](LICENSE).
