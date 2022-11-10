import * as firebase  from 'firebase';
import { Usuario } from "./acesso/usuario.model";


export class Autenticacao { 
    public cadastrarUsuario(usuario: Usuario): void {
        console.log('Chegamos até o servico', usuario);
        
        firebase.auth().createUserWithEmailAndPassword(usuario.email,usuario.senha)
        .then((resposta: any) => {
            console.log(resposta);
            
        })
        .catch((error: Error) => {
            console.log(error);
            
        })
    }
}