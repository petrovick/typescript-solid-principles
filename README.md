
## INiciando o projeto typescript
```
yarn init -y
yarn add express
arn add typescript -D
yarn tsc --init
```

## Executando um proejto TypeScript

### Parametros para execução

transpileOnly: Apenas vai converter, não vai verificar se o código está certo ou errado
ignore-watch: Ignora a o build de alguma pasta

### Database Postgres Connection

```
{
  "type": "postgres",
  "host": "localhost",
  "port": "5433",
  "username": "postgres",
  "password": "docker",
  "database": "gostack_gobarber"
}
```
