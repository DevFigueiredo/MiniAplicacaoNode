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
      name: "SP"+rndInt,
    }
    const response = await request(app)
    .post('/state/create')
    .send(data)
    expect(response.statusCode).toBe(201);    
});    

  
it('List States', async () => {
  const response = await request(app)
  .get('/customer/find?name=Teste')
   expect(response.statusCode).toBe(200);    
});  


  
it('Search Customer with ID', async () => {
  const response = await request(app)
  .get('/customer/find/74a37cc1-e70f-4912-9cdd-0e32b14ac9cc')
   expect(response.statusCode).toBe(200);    
});  


it('Update Customer', async () => {
  const data = {
    name: "Cliente de Teste",
    gender: "MASCULINO",
    birth_date:	"1999-10-27",
    city_id: "2a7a9fca-a7ca-48c9-8587-752ad70714b9",
    id: "74a37cc1-e70f-4912-9cdd-0e32b14ac9cc"
  }
  const response = await request(app)
  .put('/customer/update')
  .send(data)
  expect(response.statusCode).toBe(201);  

});  



it('Delete Customer', async () => {
  // const rndInt = Math.floor(Math.random() * 80) + 1
  // const data = {
  //   name: "Cliente de Teste"+rndInt,
  //   gender: "MASCULINO",
  //   birth_date:	"1999-10-27",
  //   city_id: "2a7a9fca-a7ca-48c9-8587-752ad70714b9",
  //   id: "74a37cc1-e70f-4912-9cdd-0e32b14ac9cc"
  // }
  
  // console.log(data)
  // const response = await request(app)
  // .put('/customer/update')
  // .send(data)
  // expect(response.statusCode).toBe(201);  

});  



    });
