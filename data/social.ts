export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/sakshamcreates",
    icon: "github",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/saksham-singh-726308394",
    icon: "linkedin",
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:sakshamsingh4663@gmail.com",
    icon: "mail",
  },
  // TODO: Add your phone number (optional) — no value was provided yet.
  // {
  //   id: "phone",
  //   name: "Phone",
  //   url: "tel:TODO_ADD_YOUR_PHONE",
  //   icon: "phone",
  // },
];
