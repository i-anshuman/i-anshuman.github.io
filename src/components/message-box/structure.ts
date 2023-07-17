import { FormStructure } from "@/types";

const structure: FormStructure = [
  {
    id: "name",
    name: "name",
    label: "May I've your name?",
    validate: (name: string) => {
      return (
        /^[\w ]+$/.test(name)
          ? ""
          : "I would be delighted to learn your name..."
      );
    }
  },
  {
    id: "email",
    name: "email",
    type: "email",
    label: "May I've your email?",
    validate: (email: string) => {
      if(email === "") {
        return "No worries, no spamming here...";
      }
      return (
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
          ? ""
          : "Uh-oh! That email doesn't seem right..."
      );
    }
  },
  {
    id: "message",
    name: "message",
    label: "Your message for me...",
    validate: (message: string) => {
      return (
        /^[\w ]+$/.test(message)
          ? ""
          : "A simple hello would suffice..."
      );
    }
  }
];

export default structure;
