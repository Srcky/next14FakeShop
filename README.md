# NextJS 14 Fake Shop Application

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Getting Started

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm start` - Starts the production server
- `npm run lint` - Runs ESLint for code linting
- `npm run test` - Runs the test suite

## Testing

To run tests:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## Environment Variables

Create a `.env.local` file in the root directory and add your environment variables:

```env
# Example environment variables
NEXT_PUBLIC_API_URL=your_api_url
```

## Project Structure

```
nextFakeShop/
├── src/
│   ├── app/         # App router pages
│   ├── components/  # Reusable components
│   └── lib/        # Utility functions
├── public/         # Static files
└── tests/         # Test files
```
