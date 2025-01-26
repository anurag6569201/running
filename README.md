# Athlete Sports Participation Registration Platform

This project is a comprehensive web-based platform designed for managing school athlete registrations and participation in sports events. The application leverages the power of Django REST Framework (DRF) for backend APIs and ReactJS for a dynamic, interactive frontend.

## Live Application
- Backend hosted on Render: [https://running-5ymt.onrender.com](https://running-5ymt.onrender.com)
- Frontend hosted on Vercel: [https://runningwebsite.vercel.app/](https://runningwebsite.vercel.app/)

## Key Features
- **User Registration and Management:** Secure registration for schools and athletes.
- **Event Management:** Easy configuration of sports events.
- **Data Management:** Efficient storage and management of athlete and event data.
- **API Integration:** DRF provides robust API endpoints for frontend communication.
- **Frontend Integration:** Responsive and user-friendly interface using ReactJS.

## Technologies Used
- **Backend:** Django, Django REST Framework (DRF)
- **Frontend:** ReactJS
- **Database:** PostgreSQL (or SQLite for development)
- **Hosting:** 
  - Backend: Render
  - Frontend: Vercel

## Installation and Setup

### Backend Setup
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd backend
   ```

2. Create a virtual environment and activate it:
   ```bash
   virtualenv envname
   source envname/bin/activate 
   ```

3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Add env file
   ```bash
   VITE_BASE_BACKEND_URL="http://127.0.0.1:8000"
   FRONTEND_URL="http://localhost:5173"
   ```

5. Apply migrations and start the server:
   ```bash
   python manage.py migrate
   python manage.py runserver
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install the required packages:
   ```bash
   npm install
   ```

3. Add env file
   ```bash
   VITE_BASE_BACKEND_URL="http://127.0.0.1:8000"
   ```
   
4. Start the development server:
   ```bash
   npm start
   ```

### Creating admin for the backend
```bash
python manage.py createsuperuser
add email and username and after that create password

python manage.py runserver
visit (base_url/admin)
Enter login credentials of the admin pannel
```

## Deployment
### Backend Deployment
- Hosted on Render for scalable backend operations.
- Ensure environment variables for production, such as `SECRET_KEY`, `DEBUG`, and database configurations, are securely set.

### Frontend Deployment
- Hosted on Vercel for fast and reliable delivery.

\
## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any queries or support, please contact the project maintainers at [anurag6569201@gmail.com].
