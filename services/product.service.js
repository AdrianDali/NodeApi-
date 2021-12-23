const faker = require('faker');
class ProductsService {

  constructor(){
    this.products = [];
    this.generate();
  }

  generate(){
    const limit =  100;
    for(let index = 0; index < limit; index++){
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(),10),
        image: faker.image.imageUrl(),
      });
    }
  }

  async create(data){
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct)
    return newProduct;

  }
  async find(){
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(this.products);
      },5000)
    })

  }
  async findOne(id){
    return  this.products.find(item => item.id === id)

  }
  async update(id, changes){
    const index = this.products.findIndex(item => item.id === id);
    //ver si si existe el elemento
    if(index === -1){
      throw new Error('product not found')
    }
    const product = this.products[index];
    // enla posicion le mandara los cambios
    this.products[index] = {
      ...product,
      ...changes
    };
    //lo retornamos
    return this.products[index];

  }
  async delete(id){
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1){
      throw new Error("product not found")
    }
    //splice elimina elemento de una posicion y a partir de que posicion
    this.products.splice(index, 1)
    return {
      message: true,
      id
    }

  }
}

module.exports = ProductsService;
