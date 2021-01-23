relatório


Primeiro temos de instalar o Node.js em nodejs.org
Verificar versão do Node no terminal – node -- version
Instalar Angular:

npm install -g @angular/cli

ng –version para verificar qual a versão instalada.

Criação de App
ng new nome_da_app

ng serve – correr comandos para Angular, iniciar servidor.

IDE e Ficheiros

Dentro da pasta que criamos na nossa app temos já ficheiros. 
Uma boa IDE pode ser Visual Studio Code.
Abrimos no VS Code a pasta que criamos.
Extensões para instalar : Typescript por exemplo.

Pasta src será onde faremos o desenvolvimento da nossa App.
 
Frontend – Angular

Criar Projeto

No terminal do Windows – cd Desktop – ng new cine-rater – Fazer yes e No

Cd cine-rater para ir dentro da pasta criada e fazemos code . para abrir o Visual Studio Code.
Nota : Se estiver a dar um erro de permissão, abrir o Power Shell do Windows com permissão de Administrador e executar este código :
 Set-ExecutionPolicy -ExecutionPolicy Unrestricted

Servidor a correr:

![image](https://user-images.githubusercontent.com/72763664/105600846-d547f700-5d8c-11eb-8a72-920c8c0017ed.png)



Para alterar o conteúdo dessa página é no ficheiro app.component.html:
 
![image](https://user-images.githubusercontent.com/72763664/105601205-ec86e480-5d8c-11eb-8331-b6cb2c0f6d4f.png)

 
Resultado na página web principal após essa mudança:

![image](https://user-images.githubusercontent.com/72763664/105601369-f872a680-5d8c-11eb-8961-56b29041cbc2.png)
 
No ficheiro app.component.ts podemos remover o title:
 
![image](https://user-images.githubusercontent.com/72763664/105601653-0b857680-5d8d-11eb-868c-884fab0bcb11.png)


Podemos eliminar o ficheiro app.component.spec.ts

Criar Módulos

No terminal do VsCode vamos criar um módulo para autenticação de utilizadores:
ng generate module auth

Vamos criar um módulo chamado main para a app principal:
ng generate module main

Gerar Componentes
Vamos gerar componentes dentro da pasta main:
ng generate component main –module=main

Fazemos o mesmo para a pasta auth:
ng generate component auth –module=auth
 
Registo dos Modelos criados
Vamos registar então no ficheiro app.module.ts os modules que acabamos de criar:
 
![image](https://user-images.githubusercontent.com/72763664/105601846-193afc00-5d8d-11eb-8d97-820098e5a306.png)

 
Routing

No ficheiro app.module.ts podemos criar o nosso RouteModule:
 
 
![image](https://user-images.githubusercontent.com/72763664/105602001-235cfa80-5d8d-11eb-95c6-5f61a5d4eea5.png)

Fazemos o import do Routes para o ficheiro auth.module.ts e main.module.ts:
 
 ![image](https://user-images.githubusercontent.com/72763664/105602124-2eb02600-5d8d-11eb-846f-e4772f1745b8.png)
 
Colocar o const ROutes nos 2 ficheiros:
 
 ![image](https://user-images.githubusercontent.com/72763664/105602252-366fca80-5d8d-11eb-9b9d-03141cdca661.png)

No auth.module.ts colocar um path(caminho):
 
 ![image](https://user-images.githubusercontent.com/72763664/105602351-3e2f6f00-5d8d-11eb-842a-50102e72a7d9.png)

 
Fazer a mesma coisa para o main.module.ts:
 
 ![image](https://user-images.githubusercontent.com/72763664/105602475-4687aa00-5d8d-11eb-9b0f-7d75c96a8e33.png)

Para testar vamos ao browser e colocamos no fim do link /auth ou /movies:
 
 ![image](https://user-images.githubusercontent.com/72763664/105602584-4daeb800-5d8d-11eb-87ed-5f95e314f673.png)
 
No app.module.ts colocamos no const routes um path que faz com que se não tivermos colocado nada em cima no link, um path ele redireciona automaticamente para neste caso o movies que é o que nós queremos:
 
 ![image](https://user-images.githubusercontent.com/72763664/105602767-5a331080-5d8d-11eb-90a2-397cc2b120bc.png)
 
Componentes do Main

Vamos gerar um componente novo:
ng generate component movie-list
ng generate component movie-details
ng generate component movie-form
No VsCode pegamos nessas 3 pastas criadas e arrastamos para dentro da pasta main.

 
No app.module.ts ele importou os 3 componentes criados mas vamos apagar e criar manualmente.
No app.module.ts apagamos estas 3 linhas:
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieFormComponent } from './movie-form/movie-form.component';


Pegamos nessas 3 linhas e importamos para o main.module.ts:
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieFormComponent } from './movie-form/movie-form.component';


No mesmo ficheiro fazemos também o import dos Components:
 
![image](https://user-images.githubusercontent.com/72763664/105602977-6919c300-5d8d-11eb-8378-75285e63af29.png)
 
No ficheiro main.component.html colocamos:
 
![image](https://user-images.githubusercontent.com/72763664/105603088-7171fe00-5d8d-11eb-9982-f8523e88c122.png)

Iniciamos o servidor com ng serve e verificamos no browser:

![image](https://user-images.githubusercontent.com/72763664/105603193-78990c00-5d8d-11eb-93d7-63e560750633.png)

 
Novamente no main.component.html inserimos agora o movie-details:

![image](https://user-images.githubusercontent.com/72763664/105603295-80f14700-5d8d-11eb-87c6-08c31a4c06cc.png)
 
No browser confirmamos:
 
 ![image](https://user-images.githubusercontent.com/72763664/105603859-a8481400-5d8d-11eb-8b77-0db051fbe293.png)

Vamos estilizar um bocado com css, no main.component.html colocamos:

![image](https://user-images.githubusercontent.com/72763664/105603975-b007b880-5d8d-11eb-8166-0a34ac6acdf7.png)
 
No main.component.css vamos usar um bocado de css:

![image](https://user-images.githubusercontent.com/72763664/105604082-b5fd9980-5d8d-11eb-9f00-c3c9ae5b0f83.png)
 

 
Lista de Filmes(Movie List)

Precisamos dos ficheiros movie-list.component.ts e movie-list.component.html
No movie-list.component.ts adicionamos:
 
 ![image](https://user-images.githubusercontent.com/72763664/105604501-d4fc2b80-5d8d-11eb-8509-0297c06feb61.png)

No movie-list.component.html adicionamos:
 
 ![image](https://user-images.githubusercontent.com/72763664/105604632-de859380-5d8d-11eb-9c2e-80749085b5e5.png)
 
Fazemos um ngFor para fazer um loop e ir buscar os filmes.

 
Com o browser podemos ver uma lista:
 
 ![image](https://user-images.githubusercontent.com/72763664/105604731-e5140b00-5d8d-11eb-9e38-9017a16a81e5.png)


Agora ir buscar os nossos Filmes á API:
Vamos ligar o servidor da nossa API com o Pycharm e desligar o servidor Angular no VsCode(Ctrl + C)

Vamos criar um serviço no VsCode com comando:
ng generate service api	(chamei api ao serviço mas pode ser dado outro nome)

Isto cria 2 ficheiros:

![image](https://user-images.githubusercontent.com/72763664/105604840-ecd3af80-5d8d-11eb-9376-72d6076e2a21.png)
 
Podemos remover o ficheiro spec pois é para fazer testes e não precisamos.

 
Vamos ao ficheiro main.module.ts importar o Serviço da API:

![image](https://user-images.githubusercontent.com/72763664/105604946-f3622700-5d8d-11eb-9377-632a36eee2d3.png)
 

E vamos no mesmo ficheiro colocar nos providers:
 
![image](https://user-images.githubusercontent.com/72763664/105605045-fa893500-5d8d-11eb-877f-7971e645773d.png)
 
No movie-list.component.ts adicionamos:

![image](https://user-images.githubusercontent.com/72763664/105605185-04129d00-5d8e-11eb-98a3-256a0091639c.png)
 

No movie-list.component.ts deixamos o ficheiro assim nesta parte:
 
![image](https://user-images.githubusercontent.com/72763664/105605293-0aa11480-5d8e-11eb-8b1f-ab3512a3c3b7.png)
 
No ficheiro api.service.ts vamos buscar esses Filmes:

![image](https://user-images.githubusercontent.com/72763664/105605390-112f8c00-5d8e-11eb-8d6a-1d4371da2685.png)

No ficheiro movie-list.component.ts vamos buscar os ficheiros através do método getMovies:

![image](https://user-images.githubusercontent.com/72763664/105605523-1987c700-5d8e-11eb-8342-b02c80cfbd06.png)
 
Para resolver o erro do this.movies, na linha 11 onde tem movies = [] vamos substituir por 
movies: any[] = []; 

Buscar Dados á API
De momento temos uma lista fixa de filmes, o que nós queremos é ir buscar a nossa lista de filmes á API:

![image](https://user-images.githubusercontent.com/72763664/105605632-21476b80-5d8e-11eb-9913-90a073b03cdb.png)

No ficheiro api.service.ts colocamos:
 
Vamos exportar o nosso baseUrl que é o GET da listagem de movies, no método getMovies vamos através do httpCLient que importamos vamos buscar o baseUrl.
Isto ainda vai dar erros no browser, podemos ver no Inspecionar e Consola do browser.

 
No ficheiro app.module.ts colocamos:
 
 ![image](https://user-images.githubusercontent.com/72763664/105605837-34f2d200-5d8e-11eb-868c-98a9d5f4ec2f.png)
 
Vamos importar o HttpClient em forma de Module.

No ficheiro api.service.ts vamos reformular:

![image](https://user-images.githubusercontent.com/72763664/105605843-3d4b0d00-5d8e-11eb-9c7c-1ccf30fe4989.png)
 
Vamos eliminar o que tínhamos a mais, os private movies que estavam fixos e o GetMovies fica simplesmente com o return do baseUrl
Vamos ter erros no ficheiro movie-list.component.ts no this.movies:

![image](https://user-images.githubusercontent.com/72763664/105605850-4805a200-5d8e-11eb-9531-d9ca00ca081f.png)

 
Vai-nos dar erro por causa do CORS que é um protocolo de segurança, para ultrapassar isso vamos também ter de ir ao Django fazer configurações para conseguir buscar os dados á API.

 
CORS e AUTH

Não conseguimos comunicar com a nossa API pois estão em portas diferentes, na parte do Angular estamos na porta 4200, na parte do Django estamos na porta 8000.

No Django paramos o nosso servidor e vamos instalar um package chamado CORS Headers:
O comando é pip install django-cors-headers

A seguir nas settings.py vamos colocar nas INSTALLED_APPS => ‘corsheaders’


![image](https://user-images.githubusercontent.com/72763664/105605861-56ec5480-5d8e-11eb-9dfb-14d592347ebd.png)
 

Vamos também adicionar MiddleWares:
 
 
 ![image](https://user-images.githubusercontent.com/72763664/105605865-5c499f00-5d8e-11eb-99e0-7f6a7489b163.png)
 
Vamos então criar uma configuração nova para permitir o Frontend buscar dados ao backend:

![image](https://user-images.githubusercontent.com/72763664/105605871-65d30700-5d8e-11eb-983d-4a6d074ca52c.png)
 
Podemos colocar isso em qualquer sitio das settings.

No ficheiro app.service.ts vamos adicionar os headers e uma token fixa(mais tarde adicionamos tokens automáticas):

![image](https://user-images.githubusercontent.com/72763664/105605875-69ff2480-5d8e-11eb-8c2c-3a34f64c246d.png)


 
 
Vai-nos dar um erro no ficheiro movie-list.component.ts e vamos ter que alterar:

![image](https://user-images.githubusercontent.com/72763664/105605878-71263280-5d8e-11eb-9ced-4b129dea9dcd.png)

 
Vamos ter que colocar o data:any[]

 
 

 
Dados no Main(Movies)

No main.component.ts vamos colocar:
 
![image](https://user-images.githubusercontent.com/72763664/105605958-89964d00-5d8e-11eb-99d1-58cd8ef77677.png)
 
O nosso movie-list.component.ts vai ficar assim:
 
 ![image](https://user-images.githubusercontent.com/72763664/105605968-8f8c2e00-5d8e-11eb-9dbb-166c70d4a55e.png)

No main.component.html vamos colocar:
 
 ![image](https://user-images.githubusercontent.com/72763664/105605970-974bd280-5d8e-11eb-8d26-29c8c5e5ced9.png)
 
No movie-list.component.ts colocamos:

![image](https://user-images.githubusercontent.com/72763664/105605985-9f0b7700-5d8e-11eb-936b-e49da9d2fc21.png)
 
Importamos o Input em cima e colocamos @Input() no export. Estamos a ir buscar os Dados e a passar no main do nosso Frontend. Main = Página principal que foi o nome que lhe demos.

No main,componente.ts colocamos:

![image](https://user-images.githubusercontent.com/72763664/105605995-a763b200-5d8e-11eb-8726-6b8397b64127.png)
 
SelectedMovie em null, vamos querer clicar em cada filme que aparece para saber os detalhes do mesmo.

No movie.list.component.ts importamos depois do Input, Output e EventEmitter(é o que acontece quando se carrega em cima).


 
Vamos ao movie-list.component.html:


 ![image](https://user-images.githubusercontent.com/72763664/105606049-f1e52e80-5d8e-11eb-9008-1bfb5ca7ad59.png)
 
Vamos gerar um evento, dentro do loop para ser igual para todos onde cada vez que clicarmos vai acontecer qualquer coisa.

Vamos ao movie-list.component.ts:

 ![image](https://user-images.githubusercontent.com/72763664/105606065-09bcb280-5d8f-11eb-8d96-6dfabfe07b10.png)

Adicionamos um console.log para teste, no browser cada vez que clicarmos em cada filme podemos ver na consola do browser o clique efetuado:
 
 ![image](https://user-images.githubusercontent.com/72763664/105606068-0f19fd00-5d8f-11eb-9b8a-173df5ec008f.png)
 
No ficheiro movie-list.component.ts:

 ![image](https://user-images.githubusercontent.com/72763664/105606071-150fde00-5d8f-11eb-83ce-0b63da45af8c.png)


Ao selecionarmos o filme e clicarmos vamos então ao ficheiro main.component.html buscar a informação que acabamos de clicar:

![image](https://user-images.githubusercontent.com/72763664/105606076-1fca7300-5d8f-11eb-855c-fd302e94668c.png)
 
Adicionamos o SelectMovie.
 
Vamos ao main.component.ts:

![image](https://user-images.githubusercontent.com/72763664/105606081-2822ae00-5d8f-11eb-8989-12d62d8035aa.png)
 
Adicionamos o novo método para o selectMovie para darmos a informação ao selectedMovie.

selectMovie(movie: any) {
  this.selectedMovie = movie;
  console.log('selectedMovie', this.selectedMovie)
}

Fazemos um console.log para vermos a informação no browser.

No final no browser, o que acontece é quando clicamos vemos o selectedMovie com a informação toda disponível:
 
 ![image](https://user-images.githubusercontent.com/72763664/105606085-2f49bc00-5d8f-11eb-889e-3116dc8eb43e.png)
 
Detalhes dos Filmes

Quando clicarmos no título de cada filme vai mostrar os detalhes do mesmo.

No main.component.html vamos colocar:
 
![image](https://user-images.githubusercontent.com/72763664/105606103-41c3f580-5d8f-11eb-8ea6-7299998629c4.png)

No movie-details.component.ts:

Importamos o Input:
 
![image](https://user-images.githubusercontent.com/72763664/105606107-48526d00-5d8f-11eb-9daa-c2e6a8ef2d0a.png)
 
No ficheiro movie-details.component.html vamos mostrar as informações do filme que carregarmos:
 
 ![image](https://user-images.githubusercontent.com/72763664/105606112-4d172100-5d8f-11eb-8787-967af01efe5b.png)

Vamos buscar os 3 parâmetros que colocamos no backend. O ponto de interrogação é uma operação ternária que verifica se temos esses campos e depois mostra.

Em vez de termos essa operação podemos fazer um If dos filmes, se tivermos os filmes ele vai mostrar o que temos:
 
![image](https://user-images.githubusercontent.com/72763664/105606119-52746b80-5d8f-11eb-8aa5-bd8759dba590.png)

Colocamos também o número de ratings e média de ratings:
 
 ![image](https://user-images.githubusercontent.com/72763664/105606120-586a4c80-5d8f-11eb-9355-fc4f3e844f17.png)
 
Resultado Final:
 
 
 ![image](https://user-images.githubusercontent.com/72763664/105606123-5dc79700-5d8f-11eb-8190-81ccb0c67dd6.png)
 
 
Falta depois dar styling aos ratings para aparecer com melhor informação para o utilizador.


 
Rating com Estrelas

Dar ao utilizador estrelas para conseguir efetuar ratings.

Vamos usar o Font Awesome para ir buscar um ícone duma estrela.
Para instalarmos o Font Awesome no Angular fazemos:
Seguir este tutorial:
https://www.npmjs.com/package/@fortawesome/angular-fontawesome

 
![image](https://user-images.githubusercontent.com/72763664/105606677-b2b8dc80-5d92-11eb-90c9-ac500f6480d2.png)

 
 ![image](https://user-images.githubusercontent.com/72763664/105606682-ba788100-5d92-11eb-9ff7-0cb9e5d262f1.png)
 
 
 ![image](https://user-images.githubusercontent.com/72763664/105606684-bf3d3500-5d92-11eb-9faa-31a66f64c917.png)
 
 
 ![image](https://user-images.githubusercontent.com/72763664/105606690-c401e900-5d92-11eb-8a1d-d1e52f60963a.png)


![image](https://user-images.githubusercontent.com/72763664/105606698-ce23e780-5d92-11eb-9cae-1fc87cc01f79.png)
  
User Rating

Dar ao utilizador possibilidade de dar rating ao clicar nas estrelas.

![image](https://user-images.githubusercontent.com/72763664/105606705-d9771300-5d92-11eb-9c55-a4e3ac733766.png)
 
 
No css acrescentamos:

![image](https://user-images.githubusercontent.com/72763664/105606708-e0058a80-5d92-11eb-9807-5a74eb96efa8.png) 

O resultado será este:

![image](https://user-images.githubusercontent.com/72763664/105606719-f3b0f100-5d92-11eb-9835-15d15b0ba3be.png)

 
Ao passarmos com o rato por cima das estrelas grandes deve aparecer um ponteiro como cursor.
 
Vamos agora fazer uma classe rateHover com um ngFor:


![image](https://user-images.githubusercontent.com/72763664/105606726-fc092c00-5d92-11eb-82e6-44e4a00c1d0a.png)
 
Fazemos um For para as 5 estrelas, quando com o cursor passarmos por cima das estrelas, as mesmas vão ficar a roxo.

 ![image](https://user-images.githubusercontent.com/72763664/105606730-0297a380-5d93-11eb-80c5-b21037b5144a.png)
 
Podemos fazer o rateHovered para quando tirarmos o cursor de cima das estrelals, ficamos sem estrelas nenhumas:

![image](https://user-images.githubusercontent.com/72763664/105606742-10e5bf80-5d93-11eb-947b-d7663f15f514.png)

Agora com o click e o rateClicked vamos fazer com que ao clicar nas estrelas, vamos enviar o rating para o nosso backend:

 
![image](https://user-images.githubusercontent.com/72763664/105606745-17743700-5d93-11eb-8d0d-4bda00d20a00.png)
 
Vamos ao api.service.ts:
 

![image](https://user-images.githubusercontent.com/72763664/105606761-1f33db80-5d93-11eb-89b1-6987034e4aa3.png)
 
Depois pegamos no ApiService e colocamos no movie-details.component.ts:

![image](https://user-images.githubusercontent.com/72763664/105606771-278c1680-5d93-11eb-9ee7-7ebffd1f9a9c.png)
 
Fazemos o import e o construtor privado. Vamos á função rateClicked e colocamos:
 
![image](https://user-images.githubusercontent.com/72763664/105606780-2e1a8e00-5d93-11eb-9fc2-ef550ec04374.png) 
 
Vamos ao ficheiro api.service.ts:
 
![image](https://user-images.githubusercontent.com/72763664/105606786-35419c00-5d93-11eb-9b36-bd5bb894c21d.png) 
 
Semelhante ao getMovies mas mudamos para post em vez de get.


Depois adicionamos um body no método post:

![image](https://user-images.githubusercontent.com/72763664/105606797-3c68aa00-5d93-11eb-853a-659b3e833c99.png)
 
Atenção: No this.baseUrl usar acento e não plicas.

Depois fazemos um JSON.stringify para enviar as estrelas como um rate.
 
Fazer Update ao Rating

Queremos ao clicar no Rating que ele dê update aos rating do filme que demos, para não ficar sempre com as mesmas estrelas.


Vamos criar um novo método no ficheiro api.service.ts semelhante ao getMovies:

 ![image](https://user-images.githubusercontent.com/72763664/105606802-45f21200-5d93-11eb-9920-25f4389ec15e.png)

Vamos ao ficheiro movie-details.component.ts:

![image](https://user-images.githubusercontent.com/72763664/105606809-4d192000-5d93-11eb-9b4a-bfc7f13c0172.png)
 
No rateClicked vamos buscar o getDetails(), no método getDetails, vamos buscar o nosso método getMovie pelo id e mostramos o resultado.
 
Vamos ao main.component.html:
 
![image](https://user-images.githubusercontent.com/72763664/105606816-530f0100-5d93-11eb-930a-ca779d960655.png) 

Vamos ao movie-details.component.ts outra vez:

![image](https://user-images.githubusercontent.com/72763664/105606818-599d7880-5d93-11eb-8142-9add58446edd.png)

![image](https://user-images.githubusercontent.com/72763664/105606821-5f935980-5d93-11eb-80ff-1407a4c8dc53.png)

 

Vamos basicamente emitir o evento e atualizar o rating do filme para emitir novos dados.
Ou seja se tivermos 2 ratings com 5 estrelas e dermos um rating com um user novo com 1 estrela o mesmo vai atualizar em tempo real o rating do filme.
 
CRUD Controls

Vamos importar o FortAwesome para termos ícones para o movie-list.component.ts:

 ![image](https://user-images.githubusercontent.com/72763664/105606826-67eb9480-5d93-11eb-86ed-38281d211352.png)

No movie-list.component.html colocamos os ícones:
 
![image](https://user-images.githubusercontent.com/72763664/105606829-6cb04880-5d93-11eb-8e28-176f9521a64e.png) 

Sempre que quisermos colocar um ícone novo temos que o importar no movie-list.component.ts e colocar depois no html.
 
 ![image](https://user-images.githubusercontent.com/72763664/105606834-72a62980-5d93-11eb-9cbf-212aa63d9bbe.png)

Adicionamos um classe movie-item e vamos ao ficheiro movie-list.component.css adicionar estilos:

![image](https://user-images.githubusercontent.com/72763664/105606838-7a65ce00-5d93-11eb-81f3-ce8115911ab6.png) 

Depois vamos ao ficheiro movie-list.component.html, pois quando clicamos nos botões de editar e lixo, queremos que ele clique mesmo nos botões em vez de clicar no titulo todo e mostrar os detalhes dos filmes, vamos fazer essa separação:

![image](https://user-images.githubusercontent.com/72763664/105606842-805baf00-5d93-11eb-9e34-eefd95262b08.png)
 
Vamos mover o clique só para o titulo.
Vamos adicionar um simples botão para criarmos filmes:

 ![image](https://user-images.githubusercontent.com/72763664/105606854-97020600-5d93-11eb-8952-aa29c15d1509.png)

Depois vamos ao main.component.html:
Adicionamos form para fazer com que os dados dos filmes apareçam do lado direito da página.

 ![image](https://user-images.githubusercontent.com/72763664/105606868-9cf7e700-5d93-11eb-9303-6deb66747706.png)


Vamos colocar os 2 numa div e fazer um ngIf com editMovie:
 
![image](https://user-images.githubusercontent.com/72763664/105606873-a3865e80-5d93-11eb-819a-f499497df2a2.png)

 
Vamos ao ficheiro main.component.ts:
 
![image](https://user-images.githubusercontent.com/72763664/105606877-a97c3f80-5d93-11eb-904b-f594cec08de4.png)


CRUD Events

Vamos fazer eventos, ao clicar no botão editar, apagar ou criar filmes vamos fazer com que consigamos editar, criar e apagar filmes.

Vamos ao movie-list.component.html e vamos fazer da edição de filmes:

![image](https://user-images.githubusercontent.com/72763664/105606884-b13be400-5d93-11eb-86d2-3fe28b82b1cd.png)
 

Criamos a função que ao clicar vai editar o filme em especifico.

Vamos ao ficheiro movie-list.component.ts:

![image](https://user-images.githubusercontent.com/72763664/105606891-b6992e80-5d93-11eb-90da-0bd5431644c1.png)
 
Vamos colocar um novo EventEmitter

 ![image](https://user-images.githubusercontent.com/72763664/105606898-bdc03c80-5d93-11eb-9b50-0e1a4b1e19a4.png)
 
Bem como a função
 
Vamos ao ficheiro main.component.html:

![image](https://user-images.githubusercontent.com/72763664/105606905-c6b10e00-5d93-11eb-9550-2e8fcab048a5.png) 

Vamos adicionar o editedMovie.


Voltamos ao ficheiro main.component.ts:

![image](https://user-images.githubusercontent.com/72763664/105606917-d2043980-5d93-11eb-9a36-74be5f94cf03.png)

 
 
Voltamos ao ficheiro main.component.html:

 ![image](https://user-images.githubusercontent.com/72763664/105606920-d92b4780-5d93-11eb-8ed8-1dbbc0df728b.png)

Alteramos o editMovie para editedMovie.

Adicionamos e passamos o movie para o editedMovie:

 ![image](https://user-images.githubusercontent.com/72763664/105606924-dd576500-5d93-11eb-8683-86d6a7fcb4b2.png)


No ficheiro movie-list.component.ts alteramos:

 
Colocamos o this com editedMovie

 
Queremos agora fazer com que ao passar do titulo do filme para o botão editar o façamos sem que apareça os 2 ao mesmo tempo, para isso no main component.ts fazemos:

![image](https://user-images.githubusercontent.com/72763664/105606935-e6e0cd00-5d93-11eb-8f83-c6cfd0c5a723.png)
 
O que isto faz é que no selectMovie ao clicarmos no titulo mostra-nos os detalhes do mesmo e anula o editedMovie, se clicarmos no botão editar com os detalhes abertos, anula o selectedMovie e mostra a edição do filme.

Agora vamos fazer o mesmo para criar Filmes:

No ficheiro movie-list.component.html adicionamos um clique no botão New Movie:
 
![image](https://user-images.githubusercontent.com/72763664/105606940-eba58100-5d93-11eb-9214-eaa79af536e8.png)
 
No ficheiro movie-list.component.ts adicionamos:

 ![image](https://user-images.githubusercontent.com/72763664/105606947-f3652580-5d93-11eb-8e5d-dd13def4ae86.png)

No ficheiro main.component.html colocamos:
 
 ![image](https://user-images.githubusercontent.com/72763664/105606951-f9f39d00-5d93-11eb-898c-a222e5309995.png)

Adicionamos o createnewMovie.

 
Vamos ao ficheiro main.component.ts e colocamos:
 
![image](https://user-images.githubusercontent.com/72763664/105606957-00821480-5d94-11eb-9532-46454286c1bd.png)

Agora vamos fazer para deleteMovie:

No movie-list.component.html colocamos:
 
![image](https://user-images.githubusercontent.com/72763664/105606960-07a92280-5d94-11eb-9568-ef864887eb9c.png)
 
Vamos ao ficheiro movie-list.component.ts:
 
![image](https://user-images.githubusercontent.com/72763664/105606995-3626fd80-5d94-11eb-85bc-2852fc5ff6ab.png) 

Vamos ao ficheiro main.component.html:
 
![image](https://user-images.githubusercontent.com/72763664/105607003-4212bf80-5d94-11eb-90d7-2a37931ee3e6.png)

Adicionamos o deletedMovie.

 
Vamos ao ficheiro main.component.ts:
 
 ![image](https://user-images.githubusercontent.com/72763664/105607006-47700a00-5d94-11eb-9389-52d8bc4fec0a.png)

Para já colocamos assim para testar. Se formos no browser fazer a inspeção e em Console, e clicarmos no botão do lixo para apagar, ele vai dar o console log de delete e titulo do filme.

No main.component.html acrescentamos isto para ficar a funcionar:

 ![image](https://user-images.githubusercontent.com/72763664/105607010-4d65eb00-5d94-11eb-8920-519f6b2d7f0f.png)

 
Formulários

Vamos ao ficheiro movie-form.component.ts:

 ![image](https://user-images.githubusercontent.com/72763664/105607017-5c4c9d80-5d94-11eb-9d7a-a8df8253deb9.png)


No main.component.html colocamos:

 ![image](https://user-images.githubusercontent.com/72763664/105607023-679fc900-5d94-11eb-9752-7f2251c7fd31.png)
 
 
Colocamos o this.editedMovie e movie em [ ]

 
O resultado será ao clicar no browser no botão editar, aparece o titulo do filme.

No ficheiro movie-form.component.html colocamos:
 
![image](https://user-images.githubusercontent.com/72763664/105607028-6e2e4080-5d94-11eb-99ac-16e3546348ed.png) 

Vamos colocar um formulário.

 
Vamos ao ficheiro main.module.ts:
Vamos importar formulários reativos:

 
![image](https://user-images.githubusercontent.com/72763664/105607037-7a1a0280-5d94-11eb-8e9d-902d5f34897a.png)

 
Vamos ao ficheiro movie-form.component.ts adicionar e importar formulários:

![image](https://user-images.githubusercontent.com/72763664/105607041-7f774d00-5d94-11eb-8f98-bf658b577cbb.png)
 

No ficheiro movie-form.component.html colocamos:

![image](https://user-images.githubusercontent.com/72763664/105607047-88681e80-5d94-11eb-81a4-d9517d2ea847.png)
 

 
Vamos ao ficheiro movie-form.component.ts:

![image](https://user-images.githubusercontent.com/72763664/105607049-8ef69600-5d94-11eb-93b6-e48f1161d1ac.png)
 

Importamos o FormGroup e Control e adicionamos o saveForm:
 
![image](https://user-images.githubusercontent.com/72763664/105607054-974ed100-5d94-11eb-9af5-0b9de1aa10e7.png)


 
Método POST

Obter a informação do utilizador e enviar para a API.

Vamos ao ficheiro api.service.ts:

 ![image](https://user-images.githubusercontent.com/72763664/105607058-a03fa280-5d94-11eb-964d-b44d76d80b21.png)

Vamos ao ficheiro movie-form.component.ts:

 
 ![image](https://user-images.githubusercontent.com/72763664/105607060-a6358380-5d94-11eb-9744-84098a46bd54.png)
 
![image](https://user-images.githubusercontent.com/72763664/105607062-aafa3780-5d94-11eb-9af9-08e1fb999405.png)
 
Métodos PUT e DELETE

PUT

No ficheiro api.service.ts:

![image](https://user-images.githubusercontent.com/72763664/105607069-b3eb0900-5d94-11eb-8a58-b9d651d94fdb.png)



Adicionamos um updateMovie com id:number


Vamos ao ficheiro movie-form.component.ts:
![image](https://user-images.githubusercontent.com/72763664/105607074-b9485380-5d94-11eb-9f39-1b1722c0d38b.png)
 

 
No mesmo ficheiro vamos aproveitar o saveForm para fazer o PUT:

 ![image](https://user-images.githubusercontent.com/72763664/105607083-c06f6180-5d94-11eb-9600-a0cfd8a20530.png)

Vamos ao ficheiro movie-form.component.html:
 ![image](https://user-images.githubusercontent.com/72763664/105607090-c6fdd900-5d94-11eb-86c8-d2485630aae1.png)

Tiramos o botão save e criamos 2 spans com 2 ifs, isto vai fazer se clicarmos no botão New Movie, o nosso botão vai dizer Create, se clicarmos no edit, o nosso botão vai dizer Update.

Vamos ao ficheiro api.service.ts fazer o Delete:
 ![image](https://user-images.githubusercontent.com/72763664/105607093-ce24e700-5d94-11eb-8cea-56b3ca22cffa.png)

 
Vamos ao ficheiro main.component.ts:

 ![image](https://user-images.githubusercontent.com/72763664/105607098-d715b880-5d94-11eb-82e7-177d13e8cd5c.png)



Atualizar Vistas(Views)
Fazer com que ao apagar ou atualizar um filme, o mesmo seja atualizado ou apagado em tempo real em vez de termos que fazer refresh ao browser.

 ![image](https://user-images.githubusercontent.com/72763664/105607101-dc730300-5d94-11eb-8fa4-cb165062a8fa.png)

Vai fazer um filtro de todos os ids dos filmes e apagar. Se o id for igual ao filme que queremos apagar, vai ser apagado.

 
Vamos ao ficheiro movie-form.component.ts:
![image](https://user-images.githubusercontent.com/72763664/105607109-e7c62e80-5d94-11eb-9171-b5e1790a1465.png)

 
Importar Output e EventEmitter.
![image](https://user-images.githubusercontent.com/72763664/105607115-ef85d300-5d94-11eb-9fad-52b237af3921.png)
![image](https://user-images.githubusercontent.com/72763664/105607117-f4e31d80-5d94-11eb-94c8-7ee209ac09bf.png)
 

 

No ficheiro main.component.html adicionar:
![image](https://user-images.githubusercontent.com/72763664/105607120-fad8fe80-5d94-11eb-9c08-3c0359587dd0.png)
 

No ficheiro main.component.ts adicionar:
 ![image](https://user-images.githubusercontent.com/72763664/105607125-ff9db280-5d94-11eb-96ac-8179aeb1b6b3.png)

 
Fazer o mesmo para o movieUpdated:
![image](https://user-images.githubusercontent.com/72763664/105607129-05939380-5d95-11eb-9e9a-3eb6f1a6edc3.png)
 

Ir ao ficheiro main.component.ts adicionar o EventEmitter:

 

No ficheiro main.component.ts adicionamos:
![image](https://user-images.githubusercontent.com/72763664/105607132-0a584780-5d95-11eb-9eb7-85176256fa2f.png)
 

Vai encontrar o id do filme e verificar se o index for maior que 0 e se corresponde ao id que pretendemos.

Neste momento ao editarmos um filme, depois de editarmos com sucesso ficamos na mesma com o formulário á nossa frente, para tirarmos isso e fazer tipo um reset, colocamos o editedMovie = null:

 
Ficheiro main.component.ts:
 ![image](https://user-images.githubusercontent.com/72763664/105607139-1512dc80-5d95-11eb-9aa4-a0012d30c09c.png)
 


Adicionar Botão para desativar Campos que não estão a ser usados
![image](https://user-images.githubusercontent.com/72763664/105607145-1d6b1780-5d95-11eb-80f2-12eb52e0524b.png)
 
No ficheiro movie-form.component.html adicionamos o formDisabled

Vamos ao ficheiro movie-form.component.ts:
![image](https://user-images.githubusercontent.com/72763664/105607147-25c35280-5d95-11eb-8439-79263a13401c.png)
 
 
Vamos ao ficheiro Styles.css:
![image](https://user-images.githubusercontent.com/72763664/105607150-29ef7000-5d95-11eb-9e40-9571ff621d2b.png)
 
Adicionamos o button disabled, ou seja, quando não tivermos texto no title e description o nosso botão de create fica inativo e não deixar mandar conteúdo.







 
Formulário Login

Vamos fazer uma página aparte para o login dos utilizadores.

No nosso ficheiro app.module.ts:
Mudamos o path(caminho) para uma página auth:
 ![image](https://user-images.githubusercontent.com/72763664/105607152-2f4cba80-5d95-11eb-880f-c4b1bae3736a.png)

Agora sempre que colocarmos locahost:4200 sem nada á frente, redireciona-nos para a página auth em vez da movies como estava anteriormente.

 ![image](https://user-images.githubusercontent.com/72763664/105607163-396eb900-5d95-11eb-87c7-bc1665c2db57.png)

Vamos inserir o nosso formulário de Login.

 
Vamos ao ficheiro auth.module.ts:
![image](https://user-images.githubusercontent.com/72763664/105607169-3ecc0380-5d95-11eb-939e-659a095d70b5.png)
 

Importamos os ReactiveFormsModule.


No nosso ficheiro auth.component.ts:
Importamos os FormGroup e FormControl e um formulário authForm:
![image](https://user-images.githubusercontent.com/72763664/105607174-44294e00-5d95-11eb-8d47-f67f879b0f7d.png)

 
No ficheiro auth.component.ts colocamos o nosso saveForm:

 ![image](https://user-images.githubusercontent.com/72763664/105607180-4c818900-5d95-11eb-83eb-48a92c28b9bf.png)

O resultado final para já, será este:

![image](https://user-images.githubusercontent.com/72763664/105607185-51ded380-5d95-11eb-983c-1e3563b9d56d.png)

 
No browser fazemos inspecionar > Console > ao metermos dados e clicarmos em Login obtemos o console.log desses dados.

 
Token Cookie

Fazer o link do formulário com o nosso serviço da API.

No ficheiro api.service.ts:
Vamos mudar os nossos baseUrl para baseMovieUrl:
![image](https://user-images.githubusercontent.com/72763664/105607192-599e7800-5d95-11eb-82ff-e38e371fe882.png)

 

Vamos depois nas nossas funções mudar de baseUrl para baseMovieUrl:

 ![image](https://user-images.githubusercontent.com/72763664/105607202-615e1c80-5d95-11eb-908c-15a24e7bf9b2.png)
 ![image](https://user-images.githubusercontent.com/72763664/105607204-64f1a380-5d95-11eb-97ab-acca993640c7.png)
![image](https://user-images.githubusercontent.com/72763664/105607208-69b65780-5d95-11eb-86e0-db6795c85c31.png)

 
A nossa função loginUser vai ficar com o baseUrl:

 ![image](https://user-images.githubusercontent.com/72763664/105607211-6de27500-5d95-11eb-986a-435d040f0768.png)

Colocar também o any á frente de authData.

Vamos ao ficheiro auth.component.ts:
![image](https://user-images.githubusercontent.com/72763664/105607214-73d85600-5d95-11eb-9c5f-aef45e507b3c.png)
 
Importamos o ApiService


Em baixo no constructor colocamos:
![image](https://user-images.githubusercontent.com/72763664/105607219-7aff6400-5d95-11eb-8b2c-fa2cf2dbc5da.png)
 
 
No ficheiro api.service.ts na função loginUser colocar método POST:
 
 ![image](https://user-images.githubusercontent.com/72763664/105607223-818ddb80-5d95-11eb-9bd1-9858463f27fa.png)


Vamos então buscar um serviço de cookies para o Angular:

No terminal colocar: npm install ngx-cookie-service --save


No ficheiro auth.module.ts vamos importar o serviço:
import { CookieService } from 'ngx-cookie-service';
 
 ![image](https://user-images.githubusercontent.com/72763664/105607229-894d8000-5d95-11eb-869b-a494608ce38f.png)

E colocamos o serviço nos providers:
![image](https://user-images.githubusercontent.com/72763664/105607235-90748e00-5d95-11eb-9148-6da12f3dd80f.png)
 
Nota: se não tivermos providers, adicionar.

 
No ficheiro auth.component.ts adicionamos e importamos o serviço:

 ![image](https://user-images.githubusercontent.com/72763664/105607241-97030580-5d95-11eb-9f73-cbff8cb98d70.png)
 
 ![image](https://user-images.githubusercontent.com/72763664/105607245-9bc7b980-5d95-11eb-81cf-f42cfa936941.png)


 

No nosso saveForm vamos colocar:

![image](https://user-images.githubusercontent.com/72763664/105607251-a1250400-5d95-11eb-87ad-c696adc65a91.png)

 

Vamos colocar e fazer set á nossa token.




 
Token Dinâmico

No ficheiro auth.component.ts:

![image](https://user-images.githubusercontent.com/72763664/105607255-a6824e80-5d95-11eb-87ad-7f3a5f48207b.png)
 
Importamos o serviço de routing
![image](https://user-images.githubusercontent.com/72763664/105607264-af732000-5d95-11eb-9de4-9a927459fa01.png)
 
Colocamos no constructor
![image](https://user-images.githubusercontent.com/72763664/105607268-b437d400-5d95-11eb-924f-cd3baa6b5ef5.png)

 
Adicionamos no ngOnInit
![image](https://user-images.githubusercontent.com/72763664/105607276-bb5ee200-5d95-11eb-8ac5-a9a52e2d88bd.png)

 
Colocamos o this.router no saveForm.
Vamos ao ficheiro api.service.ts:
![image](https://user-images.githubusercontent.com/72763664/105607280-c154c300-5d95-11eb-9d92-c59677e07b96.png)
 
Importamos o CookieService

 ![image](https://user-images.githubusercontent.com/72763664/105607285-c87bd100-5d95-11eb-86cf-b9aa71527762.png)


Colocamos no constructor
![image](https://user-images.githubusercontent.com/72763664/105607286-cdd91b80-5d95-11eb-8b42-40a19ca9188d.png)

 
Adicionamos o token com o get para obtermos o mr-token e no Authorization vamos buscar a token.

Fazemos um método novo:

![image](https://user-images.githubusercontent.com/72763664/105607290-d29dcf80-5d95-11eb-852f-7e8298206bce.png)
 
Colocamos assim o this.getAuthHeaders em todos:
 
![image](https://user-images.githubusercontent.com/72763664/105607292-d7fb1a00-5d95-11eb-9527-1e44a8d58021.png)
 
![image](https://user-images.githubusercontent.com/72763664/105607294-dc273780-5d95-11eb-9b02-cf3036b8b81d.png)

![image](https://user-images.githubusercontent.com/72763664/105607299-e0ebeb80-5d95-11eb-8316-d821e37e4470.png)

 

Apagamos o resto:

![image](https://user-images.githubusercontent.com/72763664/105607302-e5b09f80-5d95-11eb-98b8-2702bb5f4e32.png)
 
 
No ficheiro main.component.ts:
![image](https://user-images.githubusercontent.com/72763664/105607310-ecd7ad80-5d95-11eb-88f5-78fddec7b265.png)
 
Importar os serviços

![image](https://user-images.githubusercontent.com/72763664/105607318-f3662500-5d95-11eb-9a33-3d6efcfb4644.png)

 
Colocar no constructor
![image](https://user-images.githubusercontent.com/72763664/105607329-f7924280-5d95-11eb-887d-41b06475cf1c.png)

 
Isto vai fazer com que se o utilizador não tiver a token e cookies, volta á página de login, se tiver consegue ver os filmes.



 
Registar utilizadores

Fazer logout da página:

![image](https://user-images.githubusercontent.com/72763664/105607343-04af3180-5d96-11eb-94f8-c00f5e616279.png)

No ficheiro main.component.html:
 
Colocar o botão logout


No ficheiro main.component.ts:
 ![image](https://user-images.githubusercontent.com/72763664/105607350-0bd63f80-5d96-11eb-8d19-803efb50d676.png)

Para registar utilizadores:
No ficheiro auth.component.html:
![image](https://user-images.githubusercontent.com/72763664/105607355-10025d00-5d96-11eb-91e2-36e184b15fe2.png)
 
 
Vamos ao ficheiro api.service.ts:
 ![image](https://user-images.githubusercontent.com/72763664/105607359-17296b00-5d96-11eb-8ba9-48877caa9d30.png)

No ficheiro auth.component.ts:

![image](https://user-images.githubusercontent.com/72763664/105607366-1e507900-5d96-11eb-9ad4-02b23cf73c7d.png)

 
Iniciar o registerMode como false.


 
No ficheiro auth.component.ts:
![image](https://user-images.githubusercontent.com/72763664/105607373-25778700-5d96-11eb-97ea-3a5fc5130cb9.png)
 
Se no primeiro if não itvermos registados vai para o login.

 
Vamos transformar o nosso código desta maneira:

![image](https://user-images.githubusercontent.com/72763664/105607379-2c05fe80-5d96-11eb-8e88-f2ce080ac5d9.png)

 

Criamos a função loginUser com os dados normais, no nosso saveForm, se automaticamente registarmos e tivermos sucesso entramos logo direto com a nossa token e cookies.
