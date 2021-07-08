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
    	state_id: "3e22b263-1f44-441d-b706-02f2998e100c"
    }
    const response = await request(app)
    .post('/city/create')
    .send(data)
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
