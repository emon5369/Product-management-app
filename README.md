# UShop - Product Management App

**UShop** is a full-stack product management application built using the MERN stack (MongoDB, Express, React, Node.js). It provides a responsive user interface for managing product listings, allowing users to create, update, view, and delete products. The app integrates a backend API for handling product data stored in MongoDB, with a frontend developed using Chakra UI for a modern, responsive design.

## Features

- Add new products with name, price, and image URL
- Edit existing product details
- Delete products
- View all products in a responsive grid layout
- Backend API for managing product data
- Fully responsive design using Chakra UI

## Tech Stack

- **Frontend**: React, Chakra UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **State Management**: Zustand
- **Build Tool**: Vite

## Installation

### Prerequisites

Ensure the following installed on your system:

- Node.js
- MongoDB (local or cloud, e.g., MongoDB Atlas)

### Clone the repository

```bash
git clone https://github.com/your-username/ushop.git
cd ushop
```

### Backend Setup

1. Navigate to the root directory:
   
   ```bash
   cd backend
   ```

2. Install the backend dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add your MongoDB connection string and port number:

   ```bash
   MONGODB_URI=<your-mongodb-connection-string>
   PORT=5000
   ```

4. Start the backend server:

   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install the frontend dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:

   ```bash
   npm run dev
   ```

4. The app should now be running on `http://localhost:5173` (frontend) and `http://localhost:5000` (backend).

## Usage

- **Create a Product**: Fill out the product name, price, and image URL fields, and click "Create".
- **Edit a Product**: Click the edit icon on any product card, update the details, and save.
- **Delete a Product**: Click the delete icon on any product card to remove it from the list.
- **View Products**: All products are displayed in a grid layout with responsive design.

## Contributing

Please feel free to submit a Pull Request or open an Issue to discuss improvements or bug fixes.

