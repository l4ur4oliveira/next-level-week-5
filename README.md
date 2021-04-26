# Next Level Week #5 :rocket:

Projeto desenvolvido durante a trilha **[Node.js](https://nextlevelweek.com/)** com as principais noções sobre a tecnologia.

## Links

- [Configurações do ambiente](https://www.notion.so/Configura-es-do-ambiente-d0fcddac0de642fb99fca7d8dbd28cc3)

## Projeto - Chat

Iniciando server:

- Instalar dependências com `yarn install`
- Start server `yarn dev`
- Create migrations `yarn typeorm migration:create -n table_name`
- Run migrations `yarn typeorm migration:run`
- Revert migrations `yarn typeorm migration:revert`

Acesso Cliente: [http://localhost:3333/pages/client](http://localhost:3333/pages/client).
<br>
Acesso Admin: [http://localhost:3333/pages/admin](http://localhost:3333/pages/admin).

## Tools

- Visual Studio Code
- Google Chrome
- Postman
- Express
- TypeORM
- SQLite
- Socket.io

## Endpoints

<br>

### POST
- /settings/
```
BODY:
{
    "chat": true,
    "username": "admin"
}
```

### PUT
- /settings/**:username**
```
BODY:
{
    "chat": true
}
```

### POST
- /users
```
BODY:
{
    "email": "email@email.com.br"
}
```

### POST
- /messages
```
BODY:
{
    "user_id": "uuid-string-here",
    "text": "Texto da mensagem",
    "admin_id": "uuid-string-here"  (nullable)
}
```

### GET
- /messages/**:id**