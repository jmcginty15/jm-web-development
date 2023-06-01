import { PitchItemProps } from "./components/pitchItem";

export const ICON_SIZE = 80;

export const PERSONAL_URL = "http://jasonmcginty.net";

export const pitchItems: PitchItemProps[] = [
  {
    title: "Personal Touch",
    description:
      "I'm a one-man shop, which means you deal directly with me, the developer, throughout the entire development process. There's no need to go through layers of sales people, project managers, and designers. I'll work personally with you every step of the way to make sure I understand your expectations and implement them to your satisfaction.",
    iconName: "THUMBS_UP",
    route: "personal-touch",
    longDescription: [
      "I'm a one-man shop, which means you deal directly with me, the developer, throughout the entire process. There's no need to go through layers of sales people, project managers, and designers. I'll work personally with you every step of the way to make sure I understand your expectations and implement them to your satisfaction.",
      "I'll start by getting some basic information about your business: name, industry, logos, photos, and any other branding materials you may have. Then I'll ask if you have any of your own design ideas, or examples of other businesses in your industry with elements to their sites that you like or dislike. This will help me come up with an initial design, completely custom and tailored to your specific needs.",
      "Once the initial design is complete, I'll deploy it to a staging URL for you to look at and give feedback on. I'll make revisions based on your feedback until you're satisfied; there's no limit to the number of revisions we can make. Once you're satisfied with the design, I'll deploy the final version to your chosen domain.",
    ],
  },
  {
    title: "Fully Custom Solutions",
    description:
      "Craft your message exactly how you want it. No chopping up or bending your material to fit someone else's pre-built template. I design your site around your material, not the other way around. All of my designs are built with responsiveness in mind and will work well and look great on any device: desktop, laptop, smartphone, or tablet.",
    iconName: "DRAFTING_TOOLS",
    route: "fully-custom-solutions",
    longDescription: [
      "Craft your message exactly how you want it. No chopping up or bending your material to fit someone else's pre-built template. I design your site around your material, not the other way around. All of my designs are built with responsiveness in mind and will work well and look great on any device: desktop, laptop, smartphone, or tablet.",
      `With everyone glued to their phones these days, it is no longer optional that a good website should look good on mobile devices. <a className="PitchItemFull-link" href="https://capitalcounselor.com/what-percentage-of-internet-traffic-is-mobile/" target="_blank" rel="noreferrer">According to some estimates</a>, over half of all web traffic now comes from mobile devices, meaning responsive web design is absolutely essential. I'll create a custom design tailored to your business that satisfies this need.`,
    ],
  },
  {
    title: "Balanced Design Philosophy",
    description:
      "As a small business, your website needs to align with customer expectations for your industry to ensure that your potential customers can easily understand what your business is and the products or services you offer. It also needs to stand out and be unique enough to set you apart from your competition. I strive to balance these competing priorities, with an emphasis on meeting customer expectations for the look, feel, and user experience of your site.",
    iconName: "SCALES",
    route: "balanced-design-philosophy",
    longDescription: [
      "As a small business, your website needs to align with customer expectations for your industry to ensure that your potential customers can easily understand what your business is and the products or services you offer. It also needs to stand out and be unique enough to set you apart from your competition. I strive to balance these competing priorities, with an emphasis on meeting customer expectations for the look, feel, and user experience of your site.",
      "Some designers focus overly much on creating something unique. While some degree of uniqueness can help your business stand out from the competition, keep in mind that the primary goal of your site is to clearly and effectively communicate your message to potential customers. If the look and feel of your site falls too far outside what customers typically expect of businesses in your industry, it becomes harder for them to understand at a glance what your business is offering. This is why I prioritize alignment with industry standards, throwing in unique touches where appropriate.",
    ],
  },
  {
    title: "Flexibility and Design Control",
    description:
      "Take as much or as little control over the design and development process as you want. Tell me nothing but your business name and industry and let me run with it, give me fully fleshed out mockups of your site to work from, or anything in between. Either way, my goal is to satisfy your vision.",
    iconName: "DEVELOPER",
    route: "flexibility-and-design-control",
    longDescription: [
      "Take as much or as little control over the design and development process as you want. Tell me nothing but your business name and industry and let me run with it, give me fully fleshed out mockups of your site to work from, or anything in between.",
      "My goal is to satisfy you, the customer. If you already have a very concrete vision of what you want your site to look like, I'm happy to simply implement that for you. On the other hand, I can come up with my own ideas and design your site completely myself. Every step of the way, the choice is yours as to how much involvement you want.",
      "Branding materials are the same way. You can provide me with your own photos, logos, color scheme, etc., or you can have me create these things. Some clients have me find royalty-free stock photos to use on their sites, or I can organize professional photos to be taken of your business, property, or products.",
    ],
  },
  {
    title: "Fast Service, Quick Turnaround",
    description:
      "You need a developer who responds promptly and gets your added features done quickly, especially when working with time sensitive content. Since there are no layers of management between you and me, I'm only a text, email, or phone call away.",
    iconName: "RACECAR",
    route: "fast-service-quick-turnaround",
    longDescription: [
      "You need a developer who responds promptly and gets your added features done quickly, especially when working with time sensitive content. Since there are no layers of management between you and me, I'm only a text, email, or phone call away.",
      "Depending on the complexity of your site, you can typically expect the initial design and development process to take around 2-3 weeks. This can become longer if your site has more complexity or you want to make a lot of revisions, or it can become shorter if you already have a solid idea of what you want your site to look like.",
      "After that, time for changes depends on scope. Simple updates such as changing a photo or piece of text can usually be done the same day you ask. Adding or redesigning a whole page could take in the ballpark of a week. Whatever features you need, I will always strive to meet your deadlines.",
    ],
  },
  {
    title: "Ongoing Support",
    description:
      "I offer options for ongoing support with hosting, maintenance, and additional features once initial development is complete. Change your logo? Have new photos to post? Want to run a limited time promotion? Let me handle all the technical details of adding or updating content, while you focus on serving your customers.",
    iconName: "PHONE",
    route: "ongoing-support",
    longDescription: [
      "I offer options for ongoing support with hosting, maintenance, and additional features once initial development is complete. Let me handle all the technical details of adding or updating content, while you focus on serving your customers.",
      "Every website has ongoing costs for server resources associated with hosting. I offer a monthly subscription that not only covers this cost, but also includes minor updates such as changing a logo, adding new photos, or highlighting a limited time promotion. This is optional but highly recommended, especially if you know you will have plenty of updates to make in the future.",
    ],
  },
];