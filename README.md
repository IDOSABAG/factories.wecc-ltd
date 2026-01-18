# WeCcelerate Factory Finder

A landing page for WeCcelerate - a service that helps entrepreneurs find manufacturing factories for their products.

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- React 18
- Vite
- TailwindCSS
- Framer Motion
- React Router
- React Hook Form
- Radix UI components

## Environment Variables

Create a `.env` file in the root directory:

```env
# Optional: API URL for backend services
VITE_API_URL=

# Optional: Supabase configuration
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

## Project Structure

```
src/
  api/           # API clients and services
  components/    # React components
    factory-finder/  # Main page components
    ui/              # Reusable UI components
  lib/           # Utilities and context providers
  pages/         # Page components
public/
  images/        # Static images
```
