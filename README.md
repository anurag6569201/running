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
   cd <project_directory>
   ```

2. Create a virtual environment and activate it:
   ```bash
   python3 -m venv env
   source env/bin/activate  # On Windows use `env\Scripts\activate`
   ```

3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Apply migrations and start the server:
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

3. Start the development server:
   ```bash
   npm start
   ```

## Deployment
### Backend Deployment
- Hosted on Render for scalable backend operations.
- Ensure environment variables for production, such as `SECRET_KEY`, `DEBUG`, and database configurations, are securely set.

### Frontend Deployment
- Hosted on Vercel for fast and reliable delivery.

## Contribution Guidelines
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any queries or support, please contact the project maintainers at [anurag6569201@gmail.com].
