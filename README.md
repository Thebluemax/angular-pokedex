# Pokedex App
A web application that simulates a Pokédex device, built with Angular. All visual components are crafted using pure CSS, creating a authentic look and feel of the classic Pokédex. The application fetches Pokémon data, items, and other information from the PokeAPI (poke.io).

> **Note**: This project was initially created with Angular 8.3.24 and has been maintained through updates to the current Angular 17.

### Features
- Responsive Pokédex interface built with CSS
- Real-time Pokémon data from PokeAPI
- Detailed Pokémon information and statistics
- Item database integration
- Search and filter capabilities
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.24.

## Getting Started

### Prerequisites
- Node.js (v20 or higher)
- npm (11 or higher)
- Angular CLI (17 or higher)

### Installation
1. Clone the repository
```bash
git clone https://github.com/yourusername/angular-pokedex.git
cd angular-pokedex
```

2. Install dependencies
```bash
npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

### Development Build
```bash
npm run build
# or
ng build
```
Creates a development build with source maps and debugging information enabled. Build artifacts are stored in the `dist/` directory.

### Production Build
```bash
npm run build:prod
# or
ng build --aot --configuration production --build-optimizer
```
Creates an optimized production build with:
- Ahead-of-Time (AOT) compilation
- Build optimizer enabled
- Minification and tree-shaking
- Production environment configuration

Build artifacts will be stored in the `dist/poke/` directory and are ready for deployment.

## Testing

### Unit Tests
```bash
# Run tests in watch mode (default)
npm test
# or
ng test

# Run tests once in headless Chrome
npm run test:headless

# Run tests with coverage report
npm run test:coverage

# Explicit watch mode
npm run test:watch
```

Unit tests are executed via [Karma](https://karma-runner.github.io) test runner with Jasmine framework. Tests run in Chrome by default, or Chrome Headless for CI environments.

#### Coverage Reports
When running `npm run test:coverage`, coverage reports are generated in the `coverage/` directory. Open `coverage/index.html` in your browser to view detailed coverage information.

### Test Configuration
- Test files follow the `*.spec.ts` naming convention
- Test configuration is in `karma.conf.js`
- TypeScript configuration for tests is in `tsconfig.spec.json`

