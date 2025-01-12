import StrideJournal from "../components/projects/StrideJournal";
import HeyChats from "../components/projects/HeyChats";

export const projects = [
  {
    name: "Stride Journal",
    live: "",
    description:
      "A no-nonsense journaling app built to keep you on track, amplify your habits, and push you toward your goals daily.",
    featureImages: [
      {
        large: "log-journal/log-large.jpg",
        medium: "log-journal/log-medium.jpg",
      },
      {
        large: "log-journal/home-large.jpg",
        medium: "log-journal/home-medium.jpg",
      },
      {
        large: "log-journal/journal-large.jpg",
        medium: "log-journal/journal-medium.jpg",
      },
    ],
    component: StrideJournal,
  },
  // {
  //   name: "Heychats",
  //   live: "https://github.com/code-meta/heychats-frontend",
  //   description:
  //     "A modern, dark-themed messaging app with a clean UI, featuring intuitive chat previews, image sharing, and easy navigation for seamless conversations.",
  //   featureImages: [
  //     {
  //       large: "heychats/chats-large.jpg",
  //       medium: "heychats/chats-medium.jpg",
  //     },
  //     {
  //       large: "heychats/login-large.jpg",
  //       medium: "heychats/login-medium.jpg",
  //     },
  //     {
  //       large: "heychats/settings-large.jpg",
  //       medium: "heychats/settings-medium.jpg",
  //     },
  //   ],
  //   component: HeyChats,
  // },
];
