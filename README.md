# Recuperaçao de senha

**Requisitos Funcionais**

- O Usuário deve poder recuperar sua senha informando o seu e-mail;
- O Usuário deve receber um e-mail com instruções de recuperação de senha;
- O Usuário deve poder resetar sua senha;

**Requisitos Não Funcionais**

- Utilizar Mailtrap apra testar envios de e-mail em desempenho;
- Utilizar Amazon SES para envios em produção
- O envio de e-mails deve acontecer em sgundo plano (background job);

**Requisitos de Negócio**

- O link enviado por e-mail para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização do perfil

**Requisitos Funcionais**

- O Usuário deve poder atualizar o seu nome, email e senha;

- O usuário não pode alterar seu email para um e-mail já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

**Requisitos de Negócio**


# Painel do prestador

**Requisitos Funcionais**

- O Usuário deve poder lsitar seus agendamentos de um dia específico;
- O Prestador deve receber uam notificação sempre que houver um novo;agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**Requisitos Não Funcionais**

- Os agendamento do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**Requisitos de Negócio**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

# Agendamento de serviço

**Requisitos Funcionais**

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador.
- O usuário deve poder realizar um novo agendamento com um prestador.

**Requisitos Não Funcionais**

- A listagem de prestadores devem ser armazenadas em cache;

**Requisitos de Negócio**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h as 18h(PRimeiro as 8h, último as 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou.
- O usuário não pode agendar serviços consigo memso;


## Iniciando o projeto typescript
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



### Padrões - SOLID

1) DDD
2) Liskov Substitution Principle
