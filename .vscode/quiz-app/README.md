# Quiz Application

This project is a quiz application that allows users to take quizzes, submit their responses, and receive grades based on their answers. The application is built using TypeScript and follows a modular structure for better maintainability and scalability.

## Project Structure

```
quiz-app
├── src
│   ├── controllers
│   │   └── quizController.ts       # Handles quiz-related requests
│   ├── models
│   │   └── responseModel.ts         # Defines the structure of user responses
│   ├── routes
│   │   └── quizRoutes.ts            # Sets up the routes for the quiz application
│   ├── services
│   │   └── gradingService.ts         # Contains methods to grade user responses
│   ├── views
│   │   ├── index.html                # HTML structure for the quiz application
│   │   └── styles.css                # CSS styles for the HTML views
│   ├── app.ts                        # Entry point of the application
│   └── types
│       └── index.ts                  # Defines types used throughout the application
├── package.json                      # npm configuration file
├── tsconfig.json                     # TypeScript configuration file
└── README.md                         # Documentation for the project
```

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd quiz-app
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Compile TypeScript**:
   ```
   npm run build
   ```

4. **Run the application**:
   ```
   npm start
   ```

## Usage

- Navigate to `http://localhost:3000` in your web browser to access the quiz application.
- Follow the on-screen instructions to complete the quiz and submit your responses.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.