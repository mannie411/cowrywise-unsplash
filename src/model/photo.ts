export default interface Photo {
    urls: Url;
    user: User;
}


interface Url {
    regular: string;
    full: string;
    small: string;
    thumb: string;
    raw: string;

}

interface User {
    name: string;
    location: string;
}