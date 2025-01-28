export interface IMenuItem {
  name: string;
  url: string;
  icon: string;
}
export const MENU_DATA: IMenuItem[] = [
  {
    name: "home",
    icon: "radix-icons:dashboard",
    url: "/",
  },
  {
    name: "Products",
    icon: "ep:goods",
    url: "products",
  },
  {
    name: "Payments",
    icon: "ph:contactless-payment",
    url: "/payment",
  },
  {
    name: "Orders",
    icon: "fluent:receipt-28-regular",
    url: "/orders",
  },
  {
    name: "Customers",
    icon: "mingcute:group-line",
    url: "/customers",
  },
  {
    name: "Feedback",
    icon: "fluent:person-feedback-48-regular",
    url: "/feedback",
  },
  {
    name: "Settings",
    icon: "radix-icons:gear",
    url: "/settings",
  },
  {
    name: "help center",
    icon: "radix-icons:question-mark",
    url: "/help",
  },
];
