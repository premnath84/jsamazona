import { parseRequestUrl } from '../utils';
import {getProduct} from '../api';

const ProductScreen = {
  //render: () =>`<div> ProductScreen </div>`,
  render: async ()=> {
    const request = parseRequestUrl()
    const product = await getProduct  (request.id);
    return `<h1>${product.name}</h1>`;
  },
};
export default ProductScreen;