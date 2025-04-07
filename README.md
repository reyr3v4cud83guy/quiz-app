# Biology Quiz Application

A comprehensive quiz application designed for GCSE Biology students to test their knowledge and receive immediate feedback on their answers.

## Features

- Interactive quiz interface
- Real-time answer validation
- Automatic grading system
- Detailed score reporting
- Mobile-responsive design
- TypeScript-based backend
- Express.js server
- MongoDB database integration

## Project Structure

```
quiz-app
├── src
│   ├── controllers
│   │   └── quizController.ts       # Handles quiz-related requests and logic
│   ├── models
│   │   └── responseModel.ts        # Defines the structure of user responses
│   ├── routes
│   │   └── quizRoutes.ts           # Sets up the routes for the quiz application
│   ├── services
│   │   └── gradingService.ts       # Contains methods to grade user responses
│   ├── views
│   │   ├── index.html              # Main quiz interface
│   │   └── styles.css              # Styling for the quiz interface
│   ├── app.ts                      # Application entry point
│   └── types
│       └── index.ts                # TypeScript type definitions
├── scripts
│   ├── diagnostic.js               # Project health check script
│   ├── migrate.js                  # Database migration script
│   └── seed.js                     # Database seeding script
├── package.json                    # Project dependencies and scripts
├── tsconfig.json                   # TypeScript configuration
└── README.md                       # Project documentation
```

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- MongoDB (for database functionality)

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd quiz-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory with:
   ```
   PORT=3001
   MONGODB_URI=mongodb://localhost:27017/biology-quiz
   ```

## Running the Application

1. **Development Mode**:
   ```bash
   npm run dev
   ```
   This starts the server with hot-reloading enabled.

2. **Production Mode**:
   ```bash
   npm start
   ```

3. **Running Tests**:
   ```bash
   npm test
   ```

4. **Checking Project Health**:
   ```bash
   npm run diagnose
   ```

## Accessing the Application

- Open your web browser
- Navigate to `http://localhost:3001`
- The quiz interface will be displayed
- Follow the on-screen instructions to begin the quiz

## Available Scripts

- `npm run dev` - Start development server
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run lint` - Check code quality
- `npm run format` - Format code
- `npm run diagnose` - Run project diagnostics
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed the database

## API Endpoints

- `GET /api/quiz/questions` - Get quiz questions
- `POST /api/quiz/submit` - Submit quiz answers
- `GET /test` - Test server connection

## Troubleshooting

If you encounter issues:

1. **Server not starting**:
   - Check if port 3001 is available
   - Verify MongoDB is running
   - Check `.env` file configuration

2. **Database connection issues**:
   - Ensure MongoDB is installed and running
   - Verify MONGODB_URI in .env file

3. **TypeScript compilation errors**:
   - Run `npm run build` to check for errors
   - Verify tsconfig.json settings

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.