# Daily Progress Tracker

A modern web application to help you track your daily activities, progress, and maintain productivity. Built with HTML, CSS, JavaScript, and Express.js.

## Features

- 📅 **Enhanced Schedule Management**: 
  - Add activities with start time and expected end time
  - Track actual completion time vs expected time
  - Time difference calculation (over/under expected duration)
  - Activity completion tracking with visual indicators
  - Automatic sorting by start time

- 📊 **Advanced Progress Tracking**: 
  - **Study Hours**: Hours and Minutes input with automatic accumulation
  - **LeetCode Problems**: Track problems solved (accumulates daily)
  - **Job Applications**: Monitor applications sent (accumulates daily)
  - **Exercise Minutes**: Track workout time (accumulates daily)
  - **Meditation Minutes**: Monitor meditation sessions (accumulates daily)
  - **Phone Usage**: Track phone usage time (accumulates daily)
  - All categories now accumulate values throughout the day

- ✨ **Morning Wishes**: Set and track your daily goals and wishes
- ⏱️ **Focus Timer**: Pomodoro-style timer for focused work sessions (25-minute default)
- 🌓 **Dark/Light Mode**: Toggle between dark and light themes
- 💾 **Data Management**: Export and import your data for backup
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🔔 **Smart Notifications**: Real-time feedback for all actions
- 📈 **Progress Visualization**: Clear display of accumulated progress

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

### Enhanced Schedule Management
- **Add Activities**: Set start time, expected end time, and activity name
- **Complete Activities**: Enter actual end time when finished
- **Time Tracking**: See if you were over/under your expected time
- **Visual Feedback**: Completed activities are highlighted
- **Smart Sorting**: Activities automatically sorted by start time

### Advanced Progress Tracking
- **Study Hours**: 
  - Enter hours and minutes separately
  - Automatically converts to decimal hours (e.g., 1h 30m = 1.5 hours)
  - Accumulates throughout the day
  - Shows "Added X hours. Total: Y hours"
- **Other Categories**: 
  - Enter values that accumulate daily
  - Perfect for tracking daily progress
  - Shows "Added X. Total: Y" notifications

### Morning Wishes
- Add new wishes for the day
- Mark wishes as complete/incomplete
- Track your daily goals and aspirations

### Focus Timer
- **25-minute Pomodoro sessions** for focused work
- **Start/Pause/Reset** functionality
- **Time-up notifications** when session ends
- Perfect for study sessions, LeetCode practice, or any focused work

### Data Management
- Export your data as a JSON file
- Import previously exported data
- All data is automatically saved to the server
- Data persists between sessions

## Key Improvements

### Study Hours Feature
- **Dual Input Method**: Hours and Minutes fields
- **Automatic Conversion**: Minutes convert to decimal hours
- **Daily Accumulation**: Adds to previous study time
- **Smart Validation**: Must enter either hours or minutes

### Schedule Enhancements
- **Expected vs Actual Time**: Compare planned vs actual duration
- **Time Difference Calculator**: Shows over/under expected time
- **Completion Tracking**: Mark activities as complete
- **Visual Indicators**: Completed activities are highlighted

### Progress Accumulation
- **All Categories Accumulate**: No more replacing values
- **Daily Totals**: Track progress throughout the day
- **Better Notifications**: Clear feedback on what was added
- **Consistent Behavior**: All categories work the same way

## Data Storage

The application uses file-based storage:
- Data is stored in `data/timetable-data.json`
- Automatic saving on every change
- Data persists between sessions
- JSON format for easy backup and restore

## Technical Features

- **Form Validation**: Smart validation for all inputs
- **Error Handling**: Comprehensive error messages
- **Responsive Design**: Works on all device sizes
- **Real-time Updates**: Instant UI updates
- **Data Persistence**: Automatic saving to server
- **Theme Persistence**: Remembers your theme preference

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