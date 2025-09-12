# Learn Node.js

A comprehensive learning repository covering Node.js fundamentals and Express.js web development with practical examples and in-depth explanations.

## 🎥 Video Tutorials

### 📺 Node.js Tutorial Series
**Complete Node.js Tutorial Playlist** - Learn Node.js from basics to advanced concepts
🔗 [Watch on YouTube](https://youtube.com/playlist?list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&si=Cq8FiHzUIOtmcB4R)

### 🚀 Express.js Tutorial
**Express.js Complete Course** - Build web applications and APIs with Express
🔗 [Watch on YouTube](https://youtu.be/MIJt9H69QVc?si=BGmW9OVSsgee1ivO)

## 📚 Repository Structure

This repository is organized into two main sections:

### 🟢 Node.js Fundamentals (`/nodejs`)
Core Node.js concepts, built-in modules, and advanced topics including event loop internals, worker threads, and CLI development.

### 🚀 Express.js Applications (`/express`)
Real-world Express.js applications demonstrating REST APIs, GraphQL, authentication, file uploads, real-time communication, and TypeScript integration.

## 🎯 What You'll Learn

### Node.js Core Concepts
- **Event-driven Architecture**: Understanding the non-blocking I/O model
- **Module System**: CommonJS and ES Modules with practical examples
- **Built-in Modules**: File system, HTTP, crypto, events, cluster, and more
- **Event Loop Internals**: Deep dive into libuv, microtasks, and macrotasks
- **Concurrency**: Worker threads, cluster module, and thread pool management
- **CLI Development**: Building command-line tools and npm packages

### Express.js Web Development
- **REST API Development**: CRUD operations with MongoDB integration
- **Authentication & Authorization**: JWT-based auth with role-based access
- **File Upload & Management**: Cloudinary integration with Multer
- **Real-time Communication**: WebSocket implementation with Socket.IO
- **GraphQL APIs**: Apollo Server integration with Express
- **Template Engines**: EJS for server-side rendering
- **TypeScript Integration**: Type-safe Express applications

## 🗂️ Project Examples

### Node.js Examples (`/nodejs`)
```
nodejs/
├── basics/           # Module system, IIFE, and core concepts
├── event_loop/       # Event loop behavior and timing examples
├── cluster_module/   # Multi-process scaling examples
├── my-custom-cli/    # CLI tool development
├── my-custom-package/# NPM package creation
└── docs/            # In-depth documentation and diagrams
```

### Express.js Applications (`/express`)
```
express/
├── basics/          # Express fundamentals and middleware
├── auth/            # JWT authentication with file uploads
├── bookstore-api/   # REST API with MongoDB
├── mongoose/        # Mongoose ODM examples
├── graphql/         # GraphQL API implementations
├── socket/          # Real-time chat application
├── ejs/             # Server-side rendering with EJS
└── typescript/      # TypeScript Express application
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (for database examples)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd learn-nodejs
   ```

2. **Install Express dependencies**
   ```bash
   cd express
   npm install
   ```

3. **Install TypeScript dependencies**
   ```bash
   cd typescript
   npm install
   ```

### Running Examples

#### Node.js Examples
```bash
# Navigate to nodejs directory
cd nodejs

# Run basic examples
node basics/index.js

# Run event loop examples
node event_loop/event_loop_1.js
```

#### Express Applications
```bash
# Navigate to express directory
cd express

# Run authentication server
node auth/server.js

# Run bookstore API
node bookstore-api/server.js

# Run Socket.IO chat
node socket/server.js

# Run TypeScript application
cd typescript
npm run dev
```

## 🛠️ Key Technologies

- **Runtime**: Node.js
- **Web Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Multer + Cloudinary
- **Real-time**: Socket.IO
- **API**: REST and GraphQL (Apollo Server)
- **Template Engine**: EJS
- **Language**: JavaScript and TypeScript
- **Development**: Nodemon, ts-node

## 📖 Learning Path

1. **Start with Node.js Basics** (`/nodejs/basics`)
2. **Understand Event Loop** (`/nodejs/event_loop`)
3. **Explore Built-in Modules** (`/nodejs`)
4. **Learn Express Fundamentals** (`/express/basics`)
5. **Build REST APIs** (`/express/bookstore-api`, `/express/mongoose`)
6. **Implement Authentication** (`/express/auth`)
7. **Add Real-time Features** (`/express/socket`)
8. **Explore GraphQL** (`/express/graphql`)
9. **TypeScript Integration** (`/express/typescript`)

## 🔧 Environment Setup

Most examples require environment variables. Create `.env` files where needed:

```env
# For authentication examples
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# For database examples
MONGODB_URI=mongodb://localhost:27017/your_database
```

## 📝 Notes

- Each directory contains focused examples with detailed comments
- Express applications demonstrate production-ready patterns
- Node.js examples include performance considerations and best practices
- TypeScript examples show type-safe development approaches