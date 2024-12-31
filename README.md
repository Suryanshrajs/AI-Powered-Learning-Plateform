# AI Powered Learning Management System

Welcome to the repository of my innovative web application, designed to address real-life problems by integrating state-of-the-art technologies. This project combines **Next.js**, **Express**, **MongoDB**, **Flowbite**, **Firebase**, **TypeScript** and **JavaScript** to create a seamless user experience. It also incorporates **Gemini API** for advanced interaction capabilities.

---

## Features

### 1. **Interactive Video Doubt Resolution**

- While watching a video on the website, users can easily address their doubts.
- A dedicated `Ask Doubt` button triggers a JavaScript function that:
  - Captures a screenshot of the video.
  - Sends the screenshot to the **Gemini API** for contextual analysis.
  - Opens a chat bar for real-time interaction with the Gemini assistant related to the video.

### 2. **Technology Stack**

#### **Frontend:**

- **Next.js**: Fast and efficient React-based framework for server-side rendering and static site generation.
- **Flowbite**: Tailwind CSS-based UI component library for responsive and accessible design.

#### **Backend:**

- **Express.js**: Lightweight and flexible Node.js framework for handling server-side logic.

#### **Database:**

- **MongoDB**: NoSQL database for scalable and efficient data storage.

#### **Other Integrations:**


- **Gemini API**: Provides AI-powered assistance by analyzing video screenshots.


---

## Installation and Setup

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (>= 14.x)
- **MongoDB** (>= 4.x)
- **npm** (or **yarn**) package manager

### Steps

1. **Clone the Repository**

```bash
git clone https://github.com/Lalitmax/AI-Powered-LMS

```

2. **Install Dependencies**

```bash
npm install
```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and configure the following:

```env
MONGODB_URI=<your-mongodb-connection-string>
FIREBASE_CONFIG=<your-firebase-config>
GEMINI_API_KEY=<your-gemini-api-key>
```

4. **Run the Application**

- **Development Mode:**

```bash
npm run dev
```

- **Production Mode:**

```bash
npm start
```

5. **Access the Website**
   Visit `http://localhost:3000` in your browser.

---

## Folder Structure

#### client
```plaintext           
├── public/            
├── src/               
├── .gitignore                   
├── .env         
├── package.json      
├── README.md             
```
#### server
```plaintext
        
├── .env                
├── package.json       
├── README.md            
```

---

## Key Functionalities

1. **Video Screenshot Capture**

   - JavaScript captures the exact frame where the user clicked `Ask Doubt`.

2. **Gemini API Integration**

   - Sends the screenshot to the Gemini API.
   - Receives and displays context-aware responses in a chat interface.

3. **Real-Time Chat**

   - Users interact with Gemini for video-related questions.

---

## Contributions

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Submit a pull request with a detailed explanation of your changes.

---


## Acknowledgements

- **Next.js** for its powerful SSR capabilities.
- **Flowbite** for elegant UI components.
- **Gemini API** for AI-powered assistance.

---

## Contact

For queries or feedback, please contact:

- **Email:** [Lalit](mailto:lalitmaxy@gmail.com), 
   [Suryansh](mailto:suryansh.rajs96@gmail.com)
- **GitHub:** [Lalit](https://github.com/lalitmax) [Suryansh](https://github.com/suryanshrajs)

---

Thank you for exploring this project! Feel free to explore, use, and contribute. Together, we can make problem-solving intuitive and accessible for everyone.
