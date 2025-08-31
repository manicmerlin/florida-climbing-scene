## Project: Florida Climbing Scene Directory

This is a web-based directory for climbing gyms and facilities across Florida. The project uses vanilla HTML, CSS, and JavaScript to create a responsive, filterable directory with a dark theme.

### Key Features:
- Dark themed UI with gradient backgrounds
- Responsive card-based layout for gym listings
- Interactive filtering by climbing type (All, Bouldering, Rope, Lead)
- Comprehensive gym information including contact details and amenities
- Mobile-friendly responsive design

### Architecture:
- **index.html**: Main structure with header, navigation, and gym grid
- **styles.css**: Modern dark theme with responsive grid layout
- **script.js**: Gym data and filtering functionality
- **README.md**: Project documentation

### Data Structure:
Each gym entry contains: name, city, address, website, phone, instagram, and amenities array.

### Development Notes:
- No build process required - pure vanilla web technologies
- Easy to add new gyms by updating the data array in script.js
- Filters work by checking amenities for specific climbing types
- Cards include action buttons for website and Instagram (disabled if not available)
