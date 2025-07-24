# Finora Expense Tracker

Finora is a full-stack expense tracking application that helps users manage their finances by tracking income and expenses, visualizing financial data, and providing insightful dashboards. 

## Features
- User authentication (sign up, login)
- Add, edit, and delete income and expense transactions
- Dashboard with charts and summaries
- Responsive and modern UI

## Folder Structure

```
finora/
│
├── backend/                # Node.js/Express backend API
│   ├── config/             # Database configuration
│   ├── controllers/        # Route controllers (auth, dashboard, expense, income)
│   ├── middleware/         # Custom middleware (auth, file upload)
│   ├── models/             # Mongoose models (User, Expense, Income)
│   ├── routes/             # Express route definitions
│   ├── uploads/            # Uploaded files (e.g., profile photos)
│   ├── package.json        # Backend dependencies and scripts
│   └── server.js           # Entry point for backend server
│
├── frontend/
│   └── expense-tracker/    # React frontend (Vite project)
│       ├── public/         # Static assets
│       ├── src/            # Source code
│       │   ├── assets/     # Images and static files
│       │   ├── components/ # Reusable React components
│       │   ├── context/    # React context providers
│       │   ├── hooks/      # Custom React hooks
│       │   ├── pages/      # Page components (Auth, Dashboard, etc.)
│       │   └── utils/      # Utility functions and API helpers
│       ├── package.json    # Frontend dependencies and scripts
│       └── vite.config.js  # Vite configuration
│
└── README.md               # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Backend Setup
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure your MongoDB connection in `config/db.js`.
4. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd frontend/expense-tracker
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm run dev
   ```

## Technologies Used
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT
- **Frontend:** React, Vite, Axios, Recharts, TailwindCSS

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

