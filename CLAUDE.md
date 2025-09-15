# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Development Server
- `npm start` or `ng serve` - Start development server at http://localhost:4200
- `ng serve --open` - Start dev server and open browser automatically

### Building
- `npm run build` - Development build with source maps
- `npm run build:prod` - Production build with AOT compilation and optimization

### Testing
- `npm test` - Run unit tests with Karma in watch mode
- `npm run test:headless` - Run tests once in headless Chrome
- `npm run test:coverage` - Run tests and generate coverage report
- `npm run test:watch` - Explicit watch mode for tests

### Code Quality
- `npm run lint` - Run ESLint on the project
- `npm run lint:prod` - Run linting with increased memory allocation

### Documentation
- `npm run docs:serve` - Generate and serve documentation with Compodoc

### Other Commands
- `ng generate component component-name` - Generate new component
- `ng generate service service-name` - Generate new service
- `ng e2e` - Run end-to-end tests

## Project Architecture

### Core Structure
This is an Angular 17 Pokédex application with a modular architecture:

- **Core Module** (`src/app/core/`): Contains business logic and data access
  - `services/`: API services for Pokemon data (PokebaseService)
  - `models/`: TypeScript models for Pokemon, Berry, Region entities
  - `interfaces/`: Service contracts and type definitions

- **Feature Modules**:
  - `components/pokedex/`: Main Pokédex component with visual CSS-based UI
  - `pages/`: Route-based components (pokemon, berry, location, region views)
  - `shared/`: Reusable components, directives, and pipes

### State Management
- Uses NgRx Store for state management
- Root state configured in `app.reducer.ts`
- Feature-specific reducers in component directories (e.g., `control-footer/redux/`)

### API Integration
- Connects to PokeAPI (pokeapi.co) via `PokebaseService`
- Environment-based API URL configuration
- Service implements `ItemsService` interface for consistent data access

### Styling
- Uses Bootstrap 4 + custom SCSS
- Pure CSS for Pokédex visual components
- SCSS variables and mixins in `src/sass/`
- Component-specific styles co-located with components

### Module Organization
- Lazy-loaded feature modules where applicable
- Shared module for common components and utilities
- Clear separation between presentation and business logic

### Key Services
- `PokebaseService`: Primary API service for Pokemon data
- `DinamicComponentService`: Dynamic component loading
- `SecondaryScreenService`: Screen management for Pokédex UI

When working with this codebase, follow the existing modular patterns and maintain the clear separation between core business logic and UI components.