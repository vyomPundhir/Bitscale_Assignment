# React App with Login, Profile, Table View, and Card View

This is a React application that provides a simple user interface with the following features:

- **Login page** with frontend validations for email and password.
- **Profile page** displaying dummy profile info with a shimmer effect while loading.
- **Table View page** displaying dummy data in a table format.
- **Card View page** displaying the same dummy data in a card format.

## Features

1. **Login Page**:

   - Contains two input fields: email and password.
   - Form validation ensures that the user enters a valid email and password.
   - No backend API integration, so the validation is handled only on the frontend.
   - After a successful login, the user is redirected to the Table View page.

2. **Table View Page**:

   - Displays some dummy data in a table format.
   - Accessible only after successful login.

3. **Card View Page**:

   - Displays the same dummy data as in the Table View, but in a card format.
   - Accessible via the sidebar on the Table View page.

4. **Profile Page**:
   - Displays some dummy profile info.
   - Uses a shimmer effect to simulate a loading state, although no API is involved.
   - Accessible via the sidebar or directly via navigation.

---

## Project Setup

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (version 14 or higher)
- **npm** (version 6 or higher)

### Steps to Run the App Locally

1. **Clone the Repository**:

   First, clone the repository to your local machine using the following command:

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd <project-folder>
   ```

3. **Install Dependencies**:
   Run the following command to install all the necessary dependencies:

   ```bash
   npm install
   ```

4. **Run the Application**:
   Once the dependencies are installed, you can start the development server:

   ```bash
   npm run dev
   ```

   This will start the app and it will be available at:

   ```
   http://localhost:5173
   ```

---

## Features Walkthrough

### 1. **Login Page**

- The login form consists of two fields: **Email** and **Password**.
- **Email Validation**: The email should follow a valid format (e.g., `user@example.com`).
- **Password Validation**: The password should not be empty.
- If both fields are valid, the user can proceed to the **Table View Page**.

- **Error Handling**:
  - If the email or password is invalid, an error message will appear below the respective fields, and the user will not be able to proceed.

### 2. **Table View Page**

- After logging in with valid credentials, the user is redirected to the **Table View** page.
- Dummy data is displayed in a table format.
- The sidebar is available on this page, which provides navigation to the **Card View** page and **Profile Page**.

### 3. **Card View Page**

- The **Card View** page shows the same dummy data as the **Table View**, but in a card layout instead of a table.
- Access this page via the sidebar from the **Table View** page.

### 4. **Profile Page**

- The **Profile Page** shows some dummy profile information.
- A shimmer effect simulates a loading state while the profile info is being "loaded".
- Once the profile info has loaded, it is displayed in the form of a user profile with details like name, email, etc.

---

## Navigating the App

1. **Login Page**:

   - Visit the login page by default.
   - Enter a valid email and password and click **Login** to proceed.

2. **Table View Page**:

   - After successful login, you'll be redirected to the **Table View Page** where you can see the dummy data in table format.
   - You can navigate to the **Card View Page** or **Profile Page** from the sidebar.

3. **Card View Page**:

   - From the Table View Page, click the link in the sidebar to view the **Card View Page**, which shows the same data in a different format.

4. **Profile Page**:
   - From the sidebar, click the link to navigate to the **Profile Page**, where you can view the dummy profile info with a shimmer loading effect.

---

## Conclusion

This app provides a simple and user-friendly way to demonstrate frontend validations, routing, and basic UI components like tables, cards, and loading states. It simulates a real-world scenario where you validate user inputs and show dummy data in various formats, all without relying on backend APIs.

Feel free to modify the app further, especially if you want to integrate real APIs or extend its features.
