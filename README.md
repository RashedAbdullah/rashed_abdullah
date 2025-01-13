# Rashed Abdullah Portfolio Website

Welcome to the source code of my personal portfolio website. This project is built with **Next.js** and showcases my work, including projects, YouTube videos, blogs, and personal information. The site also integrates SEO best practices and uses dynamic server-side rendering for improved performance.

## Features

- **Dynamic YouTube Video Showcase**: Fetches and displays my Nasheed and Quran recitation videos with categories such as Quran, Nasheeds, and Lectures. It uses dynamic routing to fetch and display videos by category.
- **Blog Section**: Showcases my blogs with detailed pages for each post. The blog data is statically or dynamically fetched, with support for markdown rendering and SEO optimization.
- **Projects Showcase**: Highlights my key development projects, including Next.js, MongoDB, React.js, and more.
- **SEO Optimized**: Includes SEO-friendly metadata and schema.org structured data to ensure good search engine indexing. A custom sitemap is also generated to improve site visibility.
- **Responsive Design**: The design is fully responsive, utilizing Tailwind CSS for styling, making it mobile-friendly.
- **Server-side Rendering**: Implements server-side rendering (SSR) for better performance and SEO.
- **No Client Components**: Moved entirely to server-side components to enhance performance and optimize load times.
- **Theming**: Supports both dark and light modes using Tailwind CSS.

## Tech Stack

- **Next.js**: A React framework for building fast, dynamic websites.
- **Tailwind CSS**: A utility-first CSS framework for designing responsive and customizable UI components.
- **MongoDB**: Used for storing video data and blog posts.
- **React Icons**: For adding icons like `FaEye`, `FaThumbsUp`, and `FaYoutube` for visual enhancements.
- **Framer Motion**: Previously used for animations (now replaced by Tailwind animations).
- **SEO Optimization**: Implemented with schema.org metadata for video, article, and page content to improve visibility in search engines.

## Key Pages

### 1. **Home Page**

- Features a brief introduction about me and displays recent YouTube videos, blogs, and key projects.
- Includes category filters for videos (e.g., Quran, Nasheed) to easily navigate content.

### 2. **YouTube Video Pages**

- Each video has a dedicated page where users can view details like views, likes, and the video itself.
- Videos are dynamically fetched using slugs and categorized for easy navigation.

### 3. **Project Pages**

- Highlights key development projects such as:
  - **Quran Kareem with Bangla translation**: A React.js project.
  - **Madrasha Management System**: A Next.js and MongoDB project.
  - **Learning Arabic**: A Next.js project for teaching Arabic from scratch.

### 4. **Blog Pages**

- Blogs are displayed on a dedicated page, where each post links to a full detailed page.
- The blog page supports rich content including images, links, and HTML content.

### 5. **Portfolio Page**

- Displays all of my completed projects and professional achievements in web development.

### 6. **About Me Page**

- Provides detailed information about my background, skills, and professional journey.
