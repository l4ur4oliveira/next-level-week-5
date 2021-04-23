# Next Level Week #5 :rocket:

Projeto desenvolvido durante a trilha **[Node.js](https://nextlevelweek.com/)** com as principais noções sobre a tecnologia.

## Links

- [Configurações do ambiente](https://www.notion.so/Configura-es-do-ambiente-d0fcddac0de642fb99fca7d8dbd28cc3)

## Projeto - Chat

Iniciando server:

- Instalar dependências com `yarn install`
- Start server `yarn dev`
- Create migrations `yarn typeorm migrations:create -n table_name`
- Run migrations `yarn typeorm migrations:run`
- Revert migrations `yarn typeorm migrations:revert`

Acesso em [`localhost:3333`](http://localhost:3333).

## Tools

- Visual Studio Code
- Google Chrome
- Postman
- Express
- TypeORM
- SQLite

<!-- ## Endpoints

<br>

### POST
- /api/**users** (cria um usuário com uma conta zerada)
```
BODY:
{
    "name": "nome_do_usuario",
    "nickname": "nickname_do_usuario",  // unique
    "email": "email@usuario.com",       // unique
    "age": 30,                          // >=18
    "password": "123456"                // min 6 characters
}
``` -->