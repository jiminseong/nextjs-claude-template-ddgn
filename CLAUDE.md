# Next.js Claude Template - DDGN

## Project Overview
This project is a web application built with Next.js 15 and React 19, featuring a user authentication system. It implements signup and signin functionality using the DDGN test library.

## Tech Stack

### Framework & Libraries
- **Next.js 15.5.3** - Using App Router
- **React 19.1.0** - Latest React version
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Styling
- **@deltalab-corp/ddgn-test** - API communication library

### UI Components
- **Radix UI** - Accessible base components
  - `@radix-ui/react-label`
  - `@radix-ui/react-slot`
- **Lucide React** - Icon library
- **class-variance-authority** - Component variant management
- **tailwind-merge** - Tailwind class optimization

### Form Management & Validation
- **React Hook Form 7.62.0** - Form state management
- **@hookform/resolvers** - Form validation resolvers
- **Zod 4.1.9** - Schema validation

### Development Tools
- **ESLint 9** - Code quality management
- **PostCSS** - CSS post-processing

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # App layout
│   ├── page.tsx           # Main page (signup/signin toggle)
│   └── api.tsx            # API client configuration
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── button.tsx     # Button component
│   │   ├── card.tsx       # Card component
│   │   ├── form.tsx       # Form component
│   │   ├── input.tsx      # Input field component
│   │   └── label.tsx      # Label component
│   ├── signin-form.tsx    # Signin form
│   └── signup-form.tsx    # Signup form
└── lib/
    └── utils.ts           # Utility functions
```

## Key Features

### 1. User Authentication System
- **Signup**: Email, password, and password confirmation input
- **Signin**: Simple name-based login
- **Form Validation**: Real-time validation and error messages
- **API Communication**: Server communication through DDGN library

### 2. UI/UX Features
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **Accessibility**: Web accessibility compliance with Radix UI components
- **User Feedback**: Loading states, error messages, success notifications
- **Korean Language Support**: All UI text provided in Korean

### 3. Component Design
- **Reusability**: Built UI component library
- **Type Safety**: Full app type definitions with TypeScript
- **State Management**: Efficient form state management with React Hook Form

## Development Environment Setup

### Required Environment Variables
```bash
# .env.local
NEXT_PUBLIC_API_URL=https://lux.upsilon.cloud
```

### Run Development Server
```bash
npm run dev
```

### Build and Deploy
```bash
npm run build
npm run start
```

### Code Quality Check
```bash
npm run lint
```

## API Communication

### API Client Configuration
- **File**: `src/app/api.tsx`
- **Library**: `@deltalab-corp/ddgn-test`
- **Endpoint**: `https://lux.upsilon.cloud`
- **Debug Mode**: Enabled

### Main API Methods
- `api.account.signup({ name })` - User signup
- `api.account.signin({ name })` - User signin

### Error Handling
The project handles the following API error codes:
- `account:no_such_user` - User does not exist
- `invalid_argument` - Invalid argument
- `invalid_request` - Invalid request
- `network` - Network error

## Development Guide

### Adding New Components
1. Create basic UI components in `src/components/ui/` folder
2. Use Radix UI and Tailwind CSS
3. Define TypeScript interfaces
4. Design reusable props

### Form Development
1. Use React Hook Form
2. Define validation logic with Zod schemas
3. Implement real-time error display
4. Manage loading states

### Styling Guide
- Use Tailwind CSS utility classes
- Resolve class conflicts with `tailwind-merge`
- Manage component variants with `class-variance-authority`
- Prioritize responsive design

## Notes
- Utilizes Next.js App Router for modern routing system
- Can leverage new React 19 features
- All components implemented with client-side rendering
- API communication optimized for user experience with async processing