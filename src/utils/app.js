export function getUsername() {
    return sessionStorage.getItem("username");
}

export function setUsername(usernam) {
    sessionStorage.setItem("username",usernam);
}
export function removeUsername(){
    sessionStorage.removeItem("username");
}