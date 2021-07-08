import connection from '../../database/connection';
import request from 'supertest'
import {app} from '../../server'

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
    .post('/customer/create')
    .send(data)
    console.log(response.body)
    expect(response.statusCode).toBe(201);    
});    

  
it('Search Customer with name', async () => {
  const response = await request(app)
  .get('/customer/find?name=Teste')
   expect(response.statusCode).toBe(200);    
});  


  
it('Search Customer with ID', async () => {
  const response = await request(app)
  .get('/customer/find/9d2a0979-fcca-4db0-99b3-287b10422f11')
   expect(response.statusCode).toBe(200);    
});  


it('Update Customer', async () => {
  const data = {
    name: "Cliente de Teste",
    gender: "MASCULINO",
    birth_date:	"1999-10-27",
    city_id: "d8f43881-b57e-45fd-8fdf-49d0cefd80f1",
  }
  const response = await request(app)
  .put('/customer/update/9d2a0979-fcca-4db0-99b3-287b10422f11')
  .send(data)
  expect(response.statusCode).toBe(202);  

});  



it('Delete Customer', async () => {
  // const rndInt = Math.floor(Math.random() * 80) + 1
  // const data = {
  //   name: "Cliente de Teste"+rndInt,
  //   gender: "MASCULINO",
  //   birth_date:	"1999-10-27",
  //   city_id: "d8f43881-b57e-45fd-8fdf-49d0cefd80f1",
  //   id: "74a37cc1-e70f-4912-9cdd-0e32b14ac9cc"
  // }
  
  // console.log(data)
  // const response = await request(app)
  // .put('/customer/update')
  // .send(data)
  // expect(response.statusCode).toBe(201);  

});  



    });
