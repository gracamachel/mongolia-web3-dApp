# Project README.md

## Introduction

This project is a hobby project designed to simulate real-world development scenarios and assess my skills. It involves fixing a verification issue on the registration and login processes, integrating a wallet connection feature on the profile page using Web3, and displaying the current Ethereum price on the user profile page. The project is built using Node.js version 16, and you'll need to work with potentially deprecated packages due to this version requirement.

### Prerequisites

Before starting, ensure you have Node Version Manager (NVM) installed on your system. NVM allows you to easily switch between different versions of Node.js. To install NVM, follow the instructions on the [official NVM GitHub repository](https://github.com/nvm-sh/nvm). Once NVM is installed, you can set up the project environment by running the following commands:

```bash
nvm install 16.5.0
nvm use 16.5.0
```
Ensure you are using the correct node version by running

```bash
node -v
```

From the root directory, run the following command to install client/frontend dependencies

```bash
npm install
```

Navigate to the backend directory and install dependencies by running

``` bash
cd backend
npm install
```

### Starting the Project

To start the project, you'll need to have MySQL and Apache running on XAMPP or any other mysql client ```eg mysql workbench```.
From the root directory of the project, execute the following command:

```bash 
npm run dev
```
This command starts both the client and server concurrently.
Ensure your database and Gmail credentials are correctly configured in the `backend/.env` file.

## Task Descriptions

### Fix Verification Issue on Register and Login

I addressed the verification issue by commenting out the API server and replacing it with my localhost server. This change allowed me to bypass the original server's limitations. Additionally, I edited the SQL migration to create a users table, including the `get_bnb` column. For the email verification issue, I updated the environment variables to use Gmail's SMTP service, configured the host port to 465, and added my own credentials. This setup resolved the email verification problem, and everything worked as expected.

![Code verification](https://i.ibb.co/0XsrBNf/Screenshot-from-2024-05-13-13-48-15.png)
![Code verification](https://i.ibb.co/Ldb0pzy/Screenshot-from-2024-05-13-13-50-43.png)

### Add Wallet Connect on Profile Page Using Web3

The second task was dependent on user authorization errors. After successful registration, the create wallet function and add eexisting wallet based on key phrase was working as expected. On the profile page, the wallet is alredy connected

![Wallet connect](https://i.ibb.co/P5s1HYr/Screenshot-from-2024-05-13-13-53-32.png)
![Wallet connect](https://i.ibb.co/XjgNxBN/Screenshot-from-2024-05-13-13-53-59.png)

### Add Current Eth Price on User Profile Page

For the third task, I utilized the existing implementation of market prices and rendered only the price for Ethereum on the user profile page. By leveraging the existing implementation of market prices, I rendered only the Ethereum price on the user profile page. This approach simplified the task by avoiding unnecessary complexity and focusing on the core functionality.

![Wallet connect](https://i.ibb.co/Sf6pM9Y/Screenshot-from-2024-05-13-13-54-22.png)

## Bugs and Recommendations

### Improved Error Messages

One area for improvement is the error messages for form submissions, such as when an "email is inavalid" in the `email_verify` upon requesting a code. These messages should be more informative to the user. For instance, instead of a generic "Email is invalid", a message like "The email address you entered is already registered. Please use a different email address." would be more helpful. This approach aligns with best practices for error messaging, making it easier for users to understand and correct their mistakes.

