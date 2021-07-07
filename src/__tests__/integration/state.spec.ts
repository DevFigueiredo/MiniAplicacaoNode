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

  
it('Search States', async () => {
  const response = await request(app)
  .get('/state/find?name=SP')
   expect(response.statusCode).toBe(200);    
});  

it('List States', async () => {
  const response = await request(app)
  .get('/state/find')
   expect(response.statusCode).toBe(200);    
});  



    });
