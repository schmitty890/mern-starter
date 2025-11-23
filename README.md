# MERN Stack String Saver

A simple full-stack application built with the MERN stack (MongoDB, Express, React, Node.js) that allows users to save and retrieve string values to a MongoDB Atlas database.

## Project Structure

```
ctest/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   └── StringForm.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── server/                 # Express backend
│   ├── models/
│   │   └── String.js      # MongoDB schema
│   ├── routes/
│   │   └── strings.js     # API routes
│   ├── .env               # Environment variables
│   ├── .gitignore
│   ├── server.js          # Express server
│   └── package.json
└── README.md
```

## Features

- Save string values to MongoDB Atlas
- Retrieve all saved strings
- Real-time form validation
- Success/error message display
- Hot reload for development (frontend and backend)
- ES6 module syntax
- Organized route structure

## Tech Stack

### Frontend
- **React** - UI library
- **Axios** - HTTP client for API requests

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - MongoDB object modeling
- **dotenv** - Environment variable management
- **CORS** - Cross-origin resource sharing

### Development Tools
- **Nodemon** - Auto-restart server on changes
- **Create React App** - React development environment

## Prerequisites

- Node.js (v20.x or higher)
- npm or yarn
- MongoDB Atlas account

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/schmitty890/ctest.git
cd ctest
```

### 2. Install backend dependencies
```bash
cd server
npm install
```

### 3. Install frontend dependencies
```bash
cd ../client
npm install
```

### 4. Configure environment variables

Create a `.env` file in the `server` folder:

```env
MONGODB_URI=your_mongodb_atlas_connection_string
PORT=5001
```

Replace `your_mongodb_atlas_connection_string` with your actual MongoDB Atlas connection string.

## Running the Application

### Start the backend server
```bash
cd server
npm run dev
```
Server will run on `http://localhost:5001`

### Start the frontend (in a new terminal)
```bash
cd client
npm start
```
Frontend will run on `http://localhost:3000`

## API Endpoints

### POST /api/strings
Save a new string to the database.

**Request Body:**
```json
{
  "value": "your string here"
}
```

**Response (201):**
```json
{
  "message": "String saved successfully",
  "data": {
    "_id": "...",
    "value": "your string here",
    "createdAt": "2025-11-23T..."
  }
}
```

### GET /api/strings
Retrieve all saved strings, sorted by creation date (newest first).

**Response (200):**
```json
[
  {
    "_id": "...",
    "value": "string 1",
    "createdAt": "2025-11-23T..."
  },
  {
    "_id": "...",
    "value": "string 2",
    "createdAt": "2025-11-23T..."
  }
]
```

## Development Scripts

### Backend (server/)
- `npm start` - Start server with nodemon
- `npm run dev` - Start server in development mode with nodemon

### Frontend (client/)
- `npm start` - Start React development server
- `npm run build` - Build for production
- `npm test` - Run tests

## MongoDB Schema

**String Model:**
```javascript
{
  value: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}
```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB Atlas connection string | `mongodb+srv://user:pass@cluster.mongodb.net/dbname` |
| `PORT` | Server port number | `5001` |

## Notes

- Port 5000 is often used by macOS AirPlay Receiver, so we use port 5001
- The `.env` file is git-ignored to protect sensitive credentials
- CORS is configured to allow requests from `http://localhost:3000`
- Both frontend and backend support hot reload during development

## License

ISC

## Author

Jason Schmitt
