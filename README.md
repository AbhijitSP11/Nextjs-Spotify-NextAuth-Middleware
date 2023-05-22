This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started with Spotify Clone

Introducing Spotify Clone 

Spotify Clone is .....

## Tech Stack Used

Nextjs 12 (Back-end and routing)
React (Front-end)
Debounce (Prevent spamming)
Middleware (Checks all the requests if you authenticated)
Tailwind CSS (Styling)
Spotify API (Fetch playlists, songs, etc)
oAuth JWT (Access/refresh tokens)
NextAuth (Spotify Auth)
Recoil (State management)
ReactIcons (Icons)
lodash (Utility functions)
Custom hook (Spotify Hook)

##  Installation Steps

Clone the repository
Install dependencies
Create .env file in root and add your variables
```bash
NEXTAUTH_URL=ADD http://localhost:3000 for LOCAL OR YOUR URL
NEXT_PUBLIC_CLIENT_SECRET=FROM SPOTIFY DASHBOARD
NEXT_PUBLIC_CLIENT_ID=FROM SPOTIFY DASHBOARD
JWT_SECRET=ANY SECRET VALUE
```
Run the app
```bash 
npm start
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
