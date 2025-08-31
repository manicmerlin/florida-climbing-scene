# Florida Climbing Scene Directory

A comprehensive directory website for discovering climbing gyms and facilities across Florida.

## Features

- **Interactive Filtering**: Filter gyms by climbing type (Bouldering, Rope Climbing, Lead Climbing)
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark Theme**: Modern dark UI with gradient backgrounds
- **Comprehensive Information**: Each gym listing includes:
  - Name and location
  - Address and contact information
  - Website and Instagram links
  - Available amenities and climbing types

## Getting Started

Simply open `index.html` in your web browser to view the directory.

## Data Structure

The gym data is stored in `script.js` as a JavaScript array. Each gym object contains:

```json
{
  "name": "Gym Name",
  "city": "City Name",
  "address": "Full Address",
  "website": "https://website.com",
  "phone": "Phone Number",
  "instagram": "@instagram_handle",
  "amenities": ["Bouldering", "Top rope", "Lead climbing"]
}
```

## Adding New Gyms

To add a new gym to the directory:

1. Open `script.js`
2. Add a new gym object to the `climbingGyms` array
3. Save the file and refresh the page

## Customization

- **Styling**: Modify `styles.css` to change colors, fonts, and layout
- **Filters**: Add new filter categories in both HTML and JavaScript
- **Data**: Update the gym data in `script.js`

## File Structure

```
Florida Climbing Scene/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality and gym data
└── README.md           # This file
```

## Browser Compatibility

This site works in all modern browsers including:
- Chrome/Chromium
- Firefox
- Safari
- Edge

No build process or dependencies required - just pure HTML, CSS, and JavaScript!
