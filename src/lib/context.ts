import Vanish from "@/components/projects/Vanish";
import StrideJournal from "../components/projects/StrideJournal";

export const projects = [
  {
    name: "Vanish",
    live: "",
    description:
      "Vanish isn’t just a chat platform—it’s your shield in the age of surveillance. Whether you’re a whistleblower exposing corruption, a journalist protecting your sources, or someone who values privacy, Vanish guarantees your conversations remain completely secure and confidential.",
    featureImages: [],
    videoId: "a103ei5esOY",
    component: Vanish,
  },
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
];
