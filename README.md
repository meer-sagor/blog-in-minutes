# Project Documentation

## Feature List

- **Protected Route**
- Secure routes that require authentication for access
- **Authentication**
- Login & Signup feature
- Inside dashboard, show created article list
- Create article with file upload
- List all articles on the landing page
- Dynamic route for article details pages
- Implement SEO in Open Graph
- Optimize metadata for better social media sharing

## Backend Setup

### Using Supabase for Database

#### Supabase Configuration

1. Create a Supabase project.
2. Once the project is created, set up a table:
    - Table name: `articles`
    - Bucket storage name: `events`
    - Ensure both the `table` and `bucket` are set to `public` for public access.
3. Update the `.env` file:
    - Refer to `.env.example` for the required environment variables.

## Setup

### Clone the Repository

```sh
# Replace with actual repo link
git clone git@github.com:meer-sagor/blog-in-minutes.git
```

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
