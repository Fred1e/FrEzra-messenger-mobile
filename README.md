# FrEzra Messenger Mobile App

FrEzra Messenger is a mobile messaging app that integrates Firebase for authentication, chat functionality, and real-time WebSocket communication. It allows users to send and receive messages, and supports multiple platforms (iOS and Android).

## Features:
- User registration and login via Firebase Authentication.
- Real-time chat via WebSocket.
- Profile setup and logout functionality.
- Firebase Firestore to store user data and messages.

## Setup
1. Clone this repository:
    ```bash
    git clone https://github.com/Fred1e/FrEzra-messenger-mobile.git
    ```

2. Install dependencies:
    ```bash
    flutter pub get
    ```

3. Set up Firebase:
    - Follow the steps on the Firebase Console to add your Android and iOS apps to the project.
    - Download **google-services.json** (for Android) and **GoogleService-Info.plist** (for iOS), and place them in their respective directories.

4. Run the app:
    ```bash
    flutter run
    ```

## Project Structure:
- **lib/**
    - `main.dart` - App entry point.
    - `services/` - Contains business logic like authentication and chat services.
    - `screens/` - Screens for login, chat, and home.
    - `widgets/` - Reusable UI components like message bubbles.
- **android/** and **ios/** - Platform-specific configurations.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
