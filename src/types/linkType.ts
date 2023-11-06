export interface simpleLink{
    icon:any,
    name: string,
    link:string
}

export interface ListLink{
    icon:any,
    name: string,
<<<<<<< HEAD
    link:simpleLink[]
}

export interface NotifLink{
    icon:any,
    name: string,
    link:string,
    notif:number
=======
    link:simpleLink[] | string, //note that there's some mix in data structure a component names link as an array and another as a string so to avoid the issue I declared the `as string` in the code throws a warning
    childItems?: ListLink[]
>>>>>>> 08d8e0d757d1e364a5c3756830178b3728d0d1db
}