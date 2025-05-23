# ProductVerse

ProductVerse is a Next.js application designed to display and manage a table of products. It allows users to view product details, perform inline editing of product titles, delete products, and apply dynamic filters to the product list.

## Features

- **Product Table Display**: Shows products with columns for Image, Title, Brand, Category, Price, and Rating.
- **Inline Title Editing**: Allows direct editing of the product title within the table.
- **Product Deletion**: Enables removal of products from the table.
- **Dynamic Column Filters**: Provides dropdown filters for Brand and Category, populated with unique values from the dataset. A search bar allows filtering by title or description.
- **Filter Reset**: A button to clear all active filters and the search term.
- **Loading and Error States**: Displays appropriate messages during data fetching, if an error occurs, or if no products match the applied filters.
- **Responsive Design**: The interface is designed to be usable across various screen sizes.

## Tech Stack

- **Next.js 15**: React framework for server-side rendering and static site generation.
- **React 18**: JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript for static typing.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **ShadCN UI**: Collection of re-usable UI components.
- **Lucide React**: Library for icons.
- **Mock API**: Initial data is fetched from `https://dummyjson.com/products`, with subsequent interactions managed client-side.

## Getting Started

### Prerequisites

- Node.js (version 18.x or later recommended)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd productverse 
    ```
    (Replace `<repository-url>` with the actual URL of your Git repository if applicable, or use the project folder name if starting from scratch based on provided files.)

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

To start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:9002](http://localhost:9002) (or the port specified in your `package.json` or Next.js config) with your browser to see the application.

## Project Structure

- `src/app/page.tsx`: The main page component, responsible for initial data fetching (server-side) and rendering the primary view.
- `src/app/globals.css`: Global styles and Tailwind CSS configuration, including the application's color theme.
- `src/components/product-verse/`: Contains all React components specific to the ProductVerse feature.
  - `ProductView.tsx`: The main client-side component that manages state (products, filters, loading/error) and orchestrates the UI.
  - `ProductTable.tsx`: Renders the table of products.
  - `EditableCell.tsx`: Component for inline editing of cell content (specifically for product titles).
  - `FilterDropdown.tsx`: Reusable dropdown component for filtering table columns.
- `src/lib/mockApi.ts`: Utility for fetching initial product data from `dummyjson.com`.
- `src/types/index.ts`: TypeScript type definitions (e.g., `Product` interface).
- `public/`: Static assets.
- `next.config.ts`: Next.js configuration file.
- `tailwind.config.ts`: Tailwind CSS configuration.
- `tsconfig.json`: TypeScript configuration.

## UI Style

- **Primary Color**: Soft Lavender (e.g., `#E0D8FF` / `hsl(250 65% 75%)`) - Used for primary actions and highlights.
- **Background Color**: Light Gray (e.g., `#F5F5F5` / `hsl(20 0% 96%)`) - Provides a neutral backdrop.
- **Accent Color**: Dusty Rose (e.g., `#F0D6F0` / `hsl(300 40% 88%)`) - Used for secondary interactive elements.
- **Typography**: Clean and readable system fonts (defaults to Geist Sans from `layout.tsx`).
- **Iconography**: Simple and intuitive icons from `lucide-react` (e.g., for edit, delete, search).
- **Layout**: Clean, organized, and responsive layout focusing on data presentation and usability.
- **Animations**: Subtle transitions for loading states and interactive elements.

This README provides a basic overview. You can expand it with deployment instructions, more detailed API documentation (if it were a real API), and other relevant information as the project evolves.
```