export interface simpleLink{
    icon:any,
    name: string,
    link:string
}

export interface ListLink{
    icon:any,
    name: string,
    link:simpleLink[] | string, //note that there's some mix in data structure a component names link as an array and another as a string so to avoid the issue I declared the `as string` in the code throws a warning
    childItems?: ListLink[]
}