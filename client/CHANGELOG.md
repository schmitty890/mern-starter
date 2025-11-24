# Changelog

All notable changes to the client project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.1] - 2025-11-24

### Changed
- Updated Navbar background color from dark gray to white
- Changed Navbar text colors to dark gray for better contrast on white background
- Updated hover states to use light gray backgrounds instead of dark

## [1.2.0] - 2025-11-23

### Added
- Footer component with responsive design
- Navigation sections: Solutions, Support, Company, Legal
- Social media icons: Facebook, Instagram, X, GitHub, YouTube
- Dark mode support in Footer component
- Bank of America logo in Footer matching Navbar branding

### Fixed
- ESLint violations in Footer component (prop spreading, redundant roles, unused imports)

## [1.1.3] - 2025-11-23

### Fixed
- Downgraded Tailwind CSS from v4 to v3.4.18 to fix PostCSS compatibility issues
- Resolved module build error with PostCSS loader

## [1.1.2] - 2025-11-23

### Changed
- Replaced placeholder logo with Bank of America logo
- Updated logo alt text for better accessibility
- Changed logo width class from fixed to auto for better aspect ratio

### Added
- Bank of America logo image saved to src/assets/images/

## [1.1.1] - 2025-11-23

### Fixed
- Added aria-label to mobile menu button for accessibility compliance
- Resolved ESLint jsx-a11y/control-has-associated-label warning

## [1.1.0] - 2025-11-23

### Added
- Tailwind CSS for utility-first styling
- Navbar component with responsive design
- Dropdown menu in Navbar for Services
- Mobile-responsive navigation menu
- Logo placeholder in Navbar
- Login and Sign Up buttons in Navbar

### Changed
- Updated index.css to include Tailwind directives
- Added Navbar to App.js layout

### Dependencies
- Added `tailwindcss@^3.4.17`
- Added `postcss@^8.5.1`
- Added `autoprefixer@^10.4.20`

## [1.0.2] - 2025-11-23

### Added
- ESLint with Airbnb style guide configuration
- ESLint plugins: import, jsx-a11y, react, react-hooks
- NPM scripts for linting: `lint` and `lint:fix`

### Changed
- Fixed all ESLint violations in codebase
- Moved styles object before component definition in StringForm.js
- Added eslint-disable comments for intentional console statements

## [1.0.1] - 2025-11-23

### Removed
- Removed unused reportWebVitals.js file and related functionality
- Removed web-vitals performance tracking from index.js

## [1.0.0] - 2025-11-22

### Added
- Initial React application setup with Create React App
- String input form component
- String list display component
- Axios integration for API calls
- Connection to backend API at `http://localhost:5001`
- POST functionality to save strings
- GET functionality to retrieve and display strings
- Basic styling and UI layout

### Dependencies
- `react@^19.2.0`
- `react-dom@^19.2.0`
- `react-scripts@5.0.1`
- `axios@^1.13.2`
- `@testing-library/react@^16.3.0`
- `@testing-library/jest-dom@^6.9.1`
- `@testing-library/user-event@^13.5.0`
- `web-vitals@^2.1.4`
