# Daily Progress Tracker

A modern web application to help you track your daily activities, progress, and maintain productivity. Built with HTML, CSS, JavaScript, and Express.js.

## Features

- 📅 **Schedule Management**: Add and organize your daily activities with time slots
- 📊 **Progress Tracking**: Monitor various metrics including:
  - Study Hours
  - LeetCode Problems Solved
  - Job Applications
  - Exercise Minutes
  - Meditation Minutes
  - Phone Usage
- ✨ **Morning Wishes**: Set and track your daily goals and wishes
- ⏱️ **Focus Timer**: Pomodoro-style timer for focused work sessions
- 🌓 **Dark/Light Mode**: Toggle between dark and light themes
- 💾 **Data Management**: Export and import your data for backup
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/riddhi-vyas/daily-progress-app.git
cd daily-progress-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. Open your browser and visit:
```
http://localhost:3000
```

## Usage

### Schedule Management
- Add activities with specific time slots
- View your daily schedule in chronological order
- Activities are automatically sorted by time

### Progress Tracking
- Select a category from the dropdown
- Enter the value for your progress
- View your progress across different categories

### Morning Wishes
- Add new wishes for the day
- Mark wishes as complete
- Track your daily goals

### Focus Timer
- Start a 25-minute focus session
- Pause and resume as needed
- Reset timer when needed
- Get notified when the session ends

### Data Management
- Export your data as a JSON file
- Import previously exported data
- All data is automatically saved to the server

## Data Storage

The application uses file-based storage:
- Data is stored in `data/timetable-data.json`
- Automatic saving on every change
- Data persists between sessions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with Express.js
- Uses the Inter font family
- Quotes powered by quotable.io API
- Icons from Material Design Icons

## Contact

Riddhi Vyas - riddhikamleshkumar.vyas@sjsu.edu

Project Link: [https://github.com/riddhi-vyas/daily-progress-app](https://github.com/riddhi-vyas/daily-progress-app) 