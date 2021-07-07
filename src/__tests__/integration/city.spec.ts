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

describe('City', () => {
    
  it('Create City', async () => {
    const rndInt = Math.floor(Math.random() * 1000) + 1
    const data = {
      name: "CidadeTeste"+rndInt,
    	state_id: "5ec4219c-988e-4eec-a588-5706d2280aa5"
    }
    console.log(data)
    const response = await request(app)
    .post('/city/create')
    .send(data)
    console.log(response.body)
    expect(response.statusCode).toBe(201);    
});    

  
it('Search City', async () => {
 
  const response = await request(app)
  .get('/city/find?name=CidadeTeste')
   expect(response.statusCode).toBe(200);    
});  



it('Search Cities with State', async () => {
  const response = await request(app)
  .get('/city/find?name=CidadeTeste&state_name=SP')
   expect(response.statusCode).toBe(200);    
});  


it('List all Cities of State', async () => {
  const response = await request(app)
  .get('/city/find?state_name=SP')
   expect(response.statusCode).toBe(200);    
});  



    });
