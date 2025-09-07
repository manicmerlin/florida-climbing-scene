// Florida Climbing Gyms Data with Regions and Real Hours
const climbingGyms = [
  {
    "name": "Adventure HQ",
    "city": "Palm Shores",
    "region": "central",
    "address": "5270 N US HWY 1, Palm Shores, FL 32940",
    "website": "", 
    "phone": "321-775-9825",
    "instagram": "@adventurehqfl",
    "hours": "Sun: 11am-7pm, Mon: 4pm-9pm, Tue-Fri: 12pm-9pm, Sat: 11am-7pm",
    "amenities": ["Bouldering", "Rope climbing", "Ninja course"]
  },
  {
    "name": "Aiguille Rock Climbing Center",
    "city": "Longwood",
    "region": "central",
    "address": "999 Charles St, Longwood, FL 32750",
    "website": "https://www.aiguille.com",
    "phone": "(407) 332-1430",
    "instagram": "",
    "hours": "Mon-Thu: 10am-10pm, Fri: 10am-10pm, Sat: 9am-10pm, Sun: 10am-9pm",
    "amenities": ["Top rope", "Lead climbing", "Bouldering"]
  },
  {
    "name": "Alchemy Climbing",
    "city": "Tallahassee",
    "region": "north",
    "address": "2810 Sharer Rd, Tallahassee, FL 32312",
    "website": "https://www.alchemyclimbing.com",
    "phone": "(850) 224-7625",
    "instagram": "@alchemyclimbing",
    "hours": "Sun: 12pm-8pm, Mon: 4pm-10pm, Tue-Sat: 12pm-10pm",
    "amenities": ["Top rope", "Bouldering", "Lead climbing"]
  },
  {
    "name": "Beaches Rock Gym",
    "city": "Atlantic Beach",
    "region": "north",
    "address": "14 W 3rd St, Atlantic Beach, FL 32233",
    "website": "https://www.beachesrockgym.com",
    "phone": "(904) 222-0707",
    "instagram": "@beaches_rock_gym",
    "hours": "Mon-Fri: 11am-9pm, Sat: 11am-8pm, Sun: 11am-5pm",
    "amenities": ["Bouldering (open-air)"]
  },
  {
    "name": "Blue Swan Boulders",
    "city": "Orlando",
    "region": "central",
    "address": "400 Pittman St Suite 103, Orlando, FL 32801",
    "website": "https://www.blueswanboulders.com",
    "phone": "(407) 601-0752",
    "instagram": "",
    "hours": "Mon-Fri: 6am-10pm, Sat-Sun: 9am-9pm",
    "amenities": ["Bouldering", "Yoga", "Fitness training"]
  },
  {
    "name": "Boca Prep International School",
    "city": "Boca Raton",
    "region": "south",
    "address": "10333 Diego Dr., Boca Raton, FL",
    "website": "https://www.bocaprep.net",
    "phone": "(561) 852-1410",
    "instagram": "",
    "hours": "",
    "amenities": ["Climbing wall (school)"]
  },
  {
    "name": "Boulder Bloc",
    "city": "Pompano Beach",
    "region": "south",
    "address": "437 E Atlantic Blvd #6, Pompano Beach, FL 33060",
    "website": "https://www.boulderblocgym.com",
    "phone": "+1 954-953-8899",
    "instagram": "",
    "hours": "Mon-Fri: 12pm-10pm, Sat: 9am-9pm, Sun: 9am-5pm",
    "amenities": ["Bouldering", "Training area"]
  },
  {
    "name": "Broward College South Campus",
    "city": "Pembroke Pines",
    "region": "south",
    "address": "7200 Pines Blvd, Bldg 65 (Gymnasium), Pembroke Pines, FL 33024",
    "website": "https://www.broward.edu",
    "phone": "(954) 201-8238",
    "instagram": "",
    "hours": "Mon-Thu: 8am-9pm, Fri: 8am-6pm, Sat: 9am-1pm (closed Sun)",
    "amenities": ["Climbing wall (college)"]
  },
  {
    "name": "Central Rock Gym - Citrus Park",
    "city": "Tampa",
    "region": "central",
    "address": "6918 Gunn Highway, Tampa, FL 33625",
    "website": "https://centralrockgym.com",
    "phone": "",
    "instagram": "",
    "hours": "Mon-Fri: 10am-10pm, Sat-Sun: 10am-8pm",
    "amenities": ["Bouldering", "Fitness & Yoga", "Training boards", "Sauna"]
  },
  {
    "name": "Central Rock Gym - Fort Myers",
    "city": "Fort Myers",
    "region": "central",
    "address": "6090 Exchange Lane, Fort Myers, FL 33912",
    "website": "https://centralrockgym.com",
    "phone": "",
    "instagram": "",
    "hours": "",
    "amenities": ["Lead", "Top rope", "Bouldering", "Auto belay", "Fitness", "Yoga", "Training boards"]
  },
  {
    "name": "Central Rock Gym - Miami",
    "city": "Miami",
    "region": "south",
    "address": "8800 NW 7th Ave, Miami, FL 33150",
    "website": "https://centralrockgym.com",
    "phone": "",
    "instagram": "",
    "hours": "",
    "amenities": ["Lead", "Top rope", "Bouldering", "Auto belay"]
  },
  {
    "name": "Central Rock Gym - Orlando",
    "city": "Orlando",
    "region": "central",
    "address": "1766 W Sand Lake Rd, Orlando, FL 32809",
    "website": "https://centralrockgym.com",
    "phone": "",
    "instagram": "",
    "hours": "Mon-Fri: 10am-10pm, Sat-Sun: 9am-8pm",
    "amenities": ["Bouldering", "Fitness", "Yoga"]
  },
  {
    "name": "Central Rock Gym - Tampa",
    "city": "Tampa",
    "region": "central",
    "address": "4479 W Gandy Blvd, Tampa, FL 33611",
    "website": "https://centralrockgym.com",
    "phone": "",
    "instagram": "",
    "hours": "Mon-Fri: 10am-10pm, Sat: 10am-8pm, Sun: 12:30pm-8:30pm",
    "amenities": ["Bouldering", "Kids' top-rope", "Fitness", "Yoga"]
  },
  {
    "name": "Central Rock Gym - Wynwood",
    "city": "Miami",
    "region": "south",
    "address": "2916 N Miami Ave, Miami, FL 33127",
    "website": "https://centralrockgym.com",
    "phone": "(305) 200-3700",
    "instagram": "",
    "hours": "Mon-Tue: 2pm-10pm, Wed: 10am-10pm, Thu-Fri: 2pm-10pm, Sat: 9am-8pm, Sun: 11am-8pm",
    "amenities": ["Bouldering (300+ ft)", "Fitness & training", "Yoga", "Kilter board"]
  },
  {
    "name": "Coral Cliffs (Indoor Rock Climbing)",
    "city": "Fort Lauderdale",
    "region": "south",
    "address": "3400 SW 26th Terrace #A4, Fort Lauderdale, FL 33312",
    "website": "https://www.coralcliffs.com",
    "phone": "(954) 321-9898",
    "instagram": "",
    "hours": "Mon-Fri: 12pm-10pm, Sat-Sun: 11am-6pm",
    "amenities": ["Top rope", "Lead climbing", "Bouldering"]
  },
  {
    "name": "Cornerstone Rock Gym",
    "city": "Glen Saint Mary",
    "region": "north",
    "address": "6746 E Mount Vernon St, Glen St Mary, FL 32040",
    "website": "https://cornerstonerockgym.com",
    "phone": "(904) 259-0011",
    "instagram": "@cornerstone_rock_gym",
    "hours": "Mon, Tue, Thu, Fri: 11am-8pm, Wed: Closed, Sat: 10am-8pm, Sun: 1pm-7pm",
    "amenities": ["Top rope", "Bouldering", "Fitness classes"]
  },
  {
    "name": "Daytona Lagoon",
    "city": "Daytona Beach",
    "region": "central",
    "address": "601 Earl St, Daytona Beach, FL 32118",
    "website": "https://www.daytonalagoon.com",
    "phone": "(386) 254-5020",
    "instagram": "",
    "hours": "Mon-Tue: 12pm-10pm, Wed-Thu: 11am-10pm, Fri-Sat: 11am-11pm, Sun: 11am-10pm",
    "amenities": ["Climbing wall (amusement center)"]
  },
  {
    "name": "DynoClimb",
    "city": "DeLand",
    "region": "central",
    "address": "528 S Woodland Blvd, DeLand, FL 32720",
    "website": "https://www.dynoclimb.com",
    "phone": "386-624-7399",
    "instagram": "",
    "hours": "Mon-Thu: 10am-10pm, Fri-Sat: 9am-11pm, Sun: 10am-8pm",
    "amenities": ["Top rope", "Bouldering"]
  },
  {
    "name": "Fort Rock Climbing Center",
    "city": "Fort Myers",
    "region": "central",
    "address": "7131 Alico Rd Ste 130, Fort Myers, FL 33912",
    "website": "https://fortrockclimbing.com",
    "phone": "239-990-7430",
    "instagram": "",
    "hours": "Mon-Thu: 11am-9pm, Fri: 11am-10pm, Sat: 9am-10pm, Sun: 9am-6pm",
    "amenities": ["Top rope", "Lead climbing", "Bouldering", "Fitness area", "Pro shop", "Party room"]
  },
  {
    "name": "Hatco International",
    "city": "Coral Springs",
    "region": "south",
    "address": "11776 W Sample Rd #102, Coral Springs, FL 33065",
    "website": "https://www.capwholesalers.com",
    "phone": "(877) 984-2277",
    "instagram": "",
    "hours": "",
    "amenities": ["Climbing wall (private/corporate)"]
  },
  {
    "name": "High Point Orlando (at Lake Nona)",
    "city": "Orlando",
    "region": "central",
    "address": "1978 Stanhome Way, Orlando, FL 32804",
    "website": "https://www.highpointclimbing.com",
    "phone": "(689) 306-9021",
    "instagram": "",
    "hours": "Mon-Sat: 10am-10pm, Sun: 10am-8pm",
    "amenities": ["Top rope", "Lead climbing", "Bouldering"]
  },
  {
    "name": "On The Edge Rock Climbing Gym",
    "city": "Melbourne",
    "region": "central",
    "address": "200 West Drive, Melbourne, FL 32904",
    "website": "https://www.ontheedgerockclimbing.com",
    "phone": "321-724-8775",
    "instagram": "",
    "hours": "Mon, Wed, Fri: 2pm-9pm, Tue & Thu: 11am-9pm, Sat: 10am-7pm, Sun: 1pm-7pm",
    "amenities": ["Top rope", "Lead climbing", "Bouldering"]
  },
  {
    "name": "Project 24 Micro",
    "city": "Sarasota",
    "region": "central",
    "address": "2075 Global Court, Sarasota, FL 34240",
    "website": "https://www.project24climbing.com",
    "phone": "941-504-5188",
    "instagram": "",
    "hours": "Open by reservation only (2-hour private sessions)",
    "amenities": ["Bouldering (private sessions)"]
  },
  {
    "name": "Project Rock",
    "city": "Oakland Park",
    "region": "south",
    "address": "3580 N Andrews Ave, Oakland Park, FL 33309",
    "website": "https://www.projectrock.com",
    "phone": "954-766-4836",
    "instagram": "",
    "hours": "Mon-Thu: 1pm-10pm (members 12-1pm), Fri: 12pm-10pm (members 11am-12pm), Sat: 10am-10pm (members 8-10am), Sun: 10am-6pm (members 8-10am)",
    "amenities": ["Top rope", "Lead climbing", "Bouldering", "60ft walls"]
  },
  {
    "name": "Rec Rock (Oviedo)",
    "city": "Oviedo",
    "region": "central",
    "address": "148 S Division St, Oviedo, FL 32765",
    "website": "https://www.cityofoviedo.net",
    "phone": "(407) 971-5565",
    "instagram": "",
    "hours": "Mon-Fri: 6pm-8pm, Sat-Sun: 1pm-5pm (city rec center)",
    "amenities": ["Top rope", "Auto belay", "Bouldering"]
  },
  {
    "name": "Rock Out Climbing Gym",
    "city": "Destin",
    "region": "north",
    "address": "2001 98 Palms Blvd Ste 5, Destin, FL 32541",
    "website": "https://www.rockoutclimbing.com",
    "phone": "850-837-0526",
    "instagram": "",
    "hours": "Mon-Thu: 11am-8pm, Fri: 11am-9pm, Sat: 10am-9pm, Sun: 10am-6pm",
    "amenities": ["Top rope", "Bouldering", "Training area"]
  },
  {
    "name": "Rox Climbing Gym",
    "city": "Orlando",
    "region": "central",
    "address": "6775 Chopra Terrace, Orlando, FL 32827",
    "website": "https://lakenonaperformanceclub.com/rox-climbing-gym",
    "phone": "407-216-5672",
    "instagram": "",
    "hours": "Mon: 12pm-9pm, Tue-Fri: 11am-9pm, Sat: 10am-7pm, Sun: 10am-5pm",
    "amenities": ["Top rope", "Lead climbing", "Bouldering", "Auto belay"]
  },
  {
    "name": "Sheinberg Family YMCA of Weston",
    "city": "Weston",
    "region": "south",
    "address": "20201 Saddle Club Rd, Weston, FL 33327",
    "website": "https://www.ymcabroward.org",
    "phone": "(954) 424-9622",
    "instagram": "",
    "hours": "Mon-Fri: 5am-9pm, Sat: 7am-8pm, Sun: 8am-4pm (YMCA facility)",
    "amenities": ["Climbing wall (YMCA facility)"]
  },
  {
    "name": "Stone Climbing",
    "city": "St. Augustine",
    "region": "north",
    "address": "115 Strongway Court, St. Augustine, FL 32086",
    "website": "https://stoneclimbing.com",
    "phone": "904-217-4139",
    "instagram": "",
    "hours": "Mon-Sat: 11am-9pm, Sun: 11am-6pm",
    "amenities": ["Top rope", "Lead climbing", "Bouldering", "Yoga", "Gear shop", "Cafe"]
  },
  {
    "name": "Sun Country Rocks",
    "city": "Newberry",
    "region": "north",
    "address": "333 SW 140th Terrace, Newberry, FL 32669",
    "website": "https://www.suncountrysports.com",
    "phone": "(352) 331-8773",
    "instagram": "",
    "hours": "Mon-Wed: 8:30am-9pm, Thu-Fri: 8:30am-8:30pm, Sat: 9am-5:15pm, Sun: 12pm-6pm",
    "amenities": ["Top rope", "Bouldering"]
  },
  {
    "name": "The Edge Rock Climbing Gym (Miami)",
    "city": "Miami",
    "region": "south",
    "address": "13972 SW 139th Ct, Miami, FL 33186",
    "website": "https://www.theedgerockgymmiami.com",
    "phone": "(305) 233-6623",
    "instagram": "",
    "hours": "Mon-Fri: 11am-10pm, Sat: 11am-9pm, Sun: 11am-8pm",
    "amenities": ["Top rope", "Lead climbing", "Bouldering", "Auto belays"]
  },
  {
    "name": "The Edge Rock Gym (Jacksonville)",
    "city": "Jacksonville",
    "region": "north",
    "address": "3563 Phillips Hwy Suite 702, Jacksonville, FL 32207",
    "website": "https://www.theedgerockgym.com",
    "phone": "(904) 683-2512",
    "instagram": "",
    "hours": "Mon-Fri: 11am-10pm, Sat: 9am-10pm, Sun: 11am-7pm",
    "amenities": ["Top rope", "Lead climbing", "Bouldering", "Auto belay", "Gear shop"]
  },
  {
    "name": "The Knot (Climbing Gym)",
    "city": "Gainesville",
    "region": "north",
    "address": "704 S Main St, Gainesville, FL 32601",
    "website": "https://climbtheknot.com",
    "phone": "352-322-2402",
    "instagram": "",
    "hours": "Mon-Fri: 7am-10pm, Sat-Sun: 9am-7pm",
    "amenities": ["Bouldering"]
  },
  {
    "name": "UCF Recreation Center Rock Tower",
    "city": "Orlando",
    "region": "central",
    "address": "4000 Central Florida Blvd, Orlando, FL 32816",
    "website": "https://rwc.sdes.ucf.edu",
    "phone": "(407) 823-2408",
    "instagram": "",
    "hours": "Mon-Thu: 12pm-8pm, Fri: 3pm-7pm, Sat: Closed, Sun: 12pm-4pm (students)",
    "amenities": ["Climbing tower (university facility)"]
  },
  {
    "name": "University Climbing Wall (FAU)",
    "city": "Boca Raton",
    "region": "south",
    "address": "777 Glades Road (FAU campus), Boca Raton, FL 33431",
    "website": "",
    "phone": "",
    "instagram": "",
    "hours": "",
    "amenities": ["Climbing wall (university)"]
  },
  {
    "name": "UWF Climbing Center",
    "city": "Pensacola",
    "region": "north",
    "address": "11000 University Pkwy, Pensacola, FL 32514",
    "website": "https://uwf.edu",
    "phone": "(850) 474-2819",
    "instagram": "",
    "hours": "Mon-Thu: 3:30pm-7:30pm, Fri: 3:30pm-7pm, Sat: Closed, Sun: 2:30pm-6pm",
    "amenities": ["Climbing wall (university rec center)"]
  },
  {
    "name": "Velocity Climbing",
    "city": "Miami",
    "region": "south",
    "address": "2280 NW 41st St, Miami, FL 33142",
    "website": "https://www.velocityclimbing.com",
    "phone": "(786) 542-5005",
    "instagram": "",
    "hours": "Mon-Fri: 3pm-10pm, Sat: 9am-10pm, Sun: 9am-8pm",
    "amenities": ["Top rope", "Bouldering"]
  },
  {
    "name": "Vertical Ventures (St. Petersburg)",
    "city": "St. Petersburg",
    "region": "central",
    "address": "116 18th St S, St. Petersburg, FL 33712",
    "website": "https://stpete.verticalventures.com",
    "phone": "(727) 304-6290",
    "instagram": "@verticalventures",
    "hours": "Mon: 4pm-10pm, Tue-Thu: 10am-10pm, Fri: 10am-12am, Sat: 10am-10pm, Sun: 10am-6pm",
    "amenities": ["Top rope", "Lead climbing", "Bouldering"]
  },
  {
    "name": "Weatherford's Climbing Wall",
    "city": "Pensacola",
    "region": "north",
    "address": "3009 E Cervantes St, Pensacola, FL 32503",
    "website": "",
    "phone": "",
    "instagram": "",
    "hours": "",
    "amenities": ["Climbing wall (outdoor gear shop)"]
  }
];

// Get DOM elements
const regionBtns = document.querySelectorAll('.region-btn');
const typeBtns = document.querySelectorAll('.type-btn');
const gymGrid = document.getElementById('gymGrid');

// Current filter states
let currentRegion = 'all';
let currentType = 'all';

// Create gym card HTML
function createGymCard(gym) {
    const hasWebsite = gym.website && gym.website.trim() !== '';
    const hasInstagram = gym.instagram && gym.instagram.trim() !== '';
    const hasPhone = gym.phone && gym.phone.trim() !== '';

    return `
        <div class="gym-card" data-amenities="${gym.amenities.join(',').toLowerCase()}" data-region="${gym.region}">
            <div class="gym-header">
                <h3 class="gym-name">${gym.name}</h3>
                <div class="gym-location">${gym.city}, FL</div>
            </div>
            
            <div class="gym-details">
                <div class="gym-address">${gym.address}</div>
                
                <div class="gym-contact">
                    ${hasPhone ? `<div class="contact-item phone">${gym.phone}</div>` : ''}
                    ${gym.hours ? `<div class="contact-item hours">🕒 ${gym.hours}</div>` : ''}
                </div>
                
                <div class="amenities">
                    <div class="amenities-title">Amenities:</div>
                    <div class="amenities-tags">
                        ${gym.amenities.map(amenity => `<span class="amenity-tag">${amenity}</span>`).join('')}
                    </div>
                </div>
            </div>
            
            <div class="gym-actions">
                ${hasWebsite ? 
                    `<a href="${gym.website}" target="_blank" class="action-btn website-btn">Website</a>` : 
                    `<button class="action-btn website-btn" disabled>Website</button>`
                }
                ${hasInstagram ? 
                    `<a href="https://instagram.com/${gym.instagram.replace('@', '')}" target="_blank" class="action-btn instagram-btn">Instagram</a>` : 
                    `<button class="action-btn instagram-btn" disabled>Instagram</button>`
                }
            </div>
        </div>
    `;
}

// Render all gyms
function renderGyms(gymsToShow = climbingGyms) {
    gymGrid.innerHTML = gymsToShow.map(gym => createGymCard(gym)).join('');
}

// Filter functionality
function filterGyms() {
    let filteredGyms = climbingGyms;
    
    // Filter by region
    if (currentRegion !== 'all') {
        filteredGyms = filteredGyms.filter(gym => gym.region === currentRegion);
    }
    
    // Filter by type
    if (currentType !== 'all') {
        filteredGyms = filteredGyms.filter(gym => {
            const amenities = gym.amenities.join(',').toLowerCase();
            
            switch (currentType) {
                case 'bouldering':
                    return amenities.includes('bouldering');
                case 'rope':
                    return amenities.includes('top rope') || amenities.includes('rope climbing');
                case 'lead':
                    return amenities.includes('lead');
                default:
                    return true;
            }
        });
    }
    
    renderGyms(filteredGyms);
}

// Event listeners
regionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active state
        regionBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update current region and filter
        currentRegion = btn.getAttribute('data-region');
        filterGyms();
    });
});

typeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active state
        typeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update current type and filter
        currentType = btn.getAttribute('data-filter');
        filterGyms();
    });
});

// Menu toggle functionality
const menuToggle = document.getElementById('menuToggle');
const menuDropdown = document.getElementById('menuDropdown');

if (menuToggle && menuDropdown) {
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        menuDropdown.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !menuDropdown.contains(e.target)) {
            menuDropdown.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderGyms();
});
