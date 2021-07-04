import connection from '../../database/connection';


describe('Testes Gerais do Sistema (Simplificado)', () => {
    
        beforeAll(async ()=>{
        await connection.create();
        })

         afterAll(async ()=>{
            //  await connection.clear()
             await connection.close();
         })

       it('Importação de Usuários', async () => {
     
        });    
      

      


     

    });
