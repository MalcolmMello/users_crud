import express from 'express'
import bearerAuthenticationMiddleware from './middlewares/bearer-authentication.middleware';
import authorizationRoute from './routes/authorization.route'
import errorHandler from './middlewares/error-handler.middleware'
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app =  express();

// Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

// Configurações de rotas

app.use(statusRoute);
app.use(bearerAuthenticationMiddleware ,usersRoute);
app.use(authorizationRoute)

// Configuração dos Handlers de Error
app.use(errorHandler)

// Inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000')
});