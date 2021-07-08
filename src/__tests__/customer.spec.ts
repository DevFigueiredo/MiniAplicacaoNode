import connection from '../database/connection';
import request from 'supertest'
import {app} from '../server'
import { CustomerService } from '../services/CustomerService';
import { CityService } from '../services/CityService';

beforeAll(async ()=>{
  await connection.create();
  })

   afterAll(async ()=>{
      //  await connection.clear()
       await connection.close();
   })

describe('Customer', () => {
    
  it('Create Customer', async () => {
    const rndInt = Math.floor(Math.random() * 80) + 1
    const data = {
      name: "Cliente de Teste"+rndInt,
      gender: "MASCULINO",
      birth_date:	"1999-10-27",
      city_id: "d8f43881-b57e-45fd-8fdf-49d0cefd80f1"
    }
    
    const response = await request(app)
    .post('/v1/customer/create')
    .send(data)
    expect(response.statusCode).toBe(201);    
});    

  
it('Search Customer with name', async () => {
  const response = await request(app)
  .get('/v1/customer/find?name=Teste')
  expect(response.statusCode).toBe(200);    
  });  


  
it('Search Customer with ID', async () => {
  const customer = new CustomerService();
  const customerData = (await customer.findByName("Teste"))[0];

  const response = await request(app)
  .get('/v1/customer/find/'+customerData.id)
   expect(response.statusCode).toBe(200);    
});  


it('Update Customer', async () => {
  const customer = new CustomerService();
  const customerData = (await customer.findByName("Teste"))[0];
  
  const city = new CityService();
  const cityData = (await city.find("Teste"))[0];
  
  const data = {
    name: "Cliente de Teste",
    gender: "MASCULINO",
    birth_date:	"1999-10-27",
    city_id:cityData.id,
  }

  const response = await request(app)
  .put('/v1/customer/update/'+customerData.id)
  .send(data)
  expect(response.statusCode).toBe(202);  

});  



it('Delete Customer', async () => {
  const customer = new CustomerService();
  const {id} = (await customer.findByName("Teste"))[0];
   const response = await request(app)
   .delete('/v1/customer/delete/'+id)
   expect(response.statusCode).toBe(204);  

});  



    });
