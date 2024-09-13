export const parseRequestUrl = () =>{
    const url = document.location.hash.toLocaleLowerCase();
    console.log(url);
    const request = url.split("/");
    return {
        resource: request[1],
        id: request[2],
        action: request[3],
    }
    // git text
    // for homepage "/#/" : request[0] = '#', request[1]=""
    // for product page "/#/product/1"  : request[0] = '#', request[1]="product", request[2]="<product id>", 
}