export interface simpleLink {
  icon?: any;
  name: string;
  link: string;
}

export interface ListLink {
  icon?: any;
  name: string;
  link: simpleLink[];
  currentLink?: string
}

export interface NotifLink {
  icon: any;
  name: string;
  link: string;
  notif: number;
}
