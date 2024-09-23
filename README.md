## Getting Started

### 1. Configure DB

First, create a .env file to setup the DB configuration:

```
DATABASE_URL="mysql://user:password@localhost:3306/db_name"
```

- Replace:
  - username: Your MySQL username (e.g., root).
  - password: Your MySQL password.
  - database_name: The name of the database for the project (e.g., chat_app).

### 2. Initialize Prisma

If Prisma is not already initialized, run:

```npx prisma init```

### 3. Run database migrations

Apply the Prisma schema to your database:

```
npx prisma migrate dev --name init
```

### 3. Initialize development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Using the aplpication

- You will be prompted to submit your email, this will create a unique id for your emails and by consequence your chats.
- Once you submit your email, you will be taken to the chat interface where you can input any message and will be answered with once of 6 differnt responses.

#### Future Features

Currently the app has the necesary api endpoints to return all the list of chats and thier respective messages. Though the UI to do this has not yet been implmemented, you may access the information in the following urls:

- Get all chats

GET <http://localhost:3000/api/chat>

- Get chats from a single user email

GET <http://localhost:3000/api/chat/[email]>

- Get all messages from a chat with the chat Id
  
GET <http://localhost:3000/api/messages/[chatId]>
