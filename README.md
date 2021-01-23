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




Para alterar o conteúdo dessa página é no ficheiro app.component.html:
 

 
Resultado na página web principal após essa mudança:
 
No ficheiro app.component.ts podemos remover o title:
 

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
 


 
Routing

No ficheiro app.module.ts podemos criar o nosso RouteModule:
 

Fazemos o import do Routes para o ficheiro auth.module.ts e main.module.ts:
 
 
Colocar o const ROutes nos 2 ficheiros:
 

No auth.module.ts colocar um path(caminho):
 

 
Fazer a mesma coisa para o main.module.ts:
 

Para testar vamos ao browser e colocamos no fim do link /auth ou /movies:
 
 
No app.module.ts colocamos no const routes um path que faz com que se não tivermos colocado nada em cima no link, um path ele redireciona automaticamente para neste caso o movies que é o que nós queremos:
 

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
 

 
No ficheiro main.component.html colocamos:
 

Iniciamos o servidor com ng serve e verificamos no browser:
 
Novamente no main.component.html inserimos agora o movie-details:
 
No browser confirmamos:
 

Vamos estilizar um bocado com css, no main.component.html colocamos:
 
No main.component.css vamos usar um bocado de css:
 
Podemos adicionar um grid-gap:20px; para adicionar uma gap entre as 2 tabelas

No browser verificamos:
 

Vamos adicionar css á app.component.css:
 

No app.component.html adicionamos:
 

Temos um ficheiro global para dar styling á página toda chamado Styles.css:
 
 
No browser podemos validar o resultado:
 

No app.component.css adicionamos:
 

Podemos ver no browser:
 
Ficamos com a página completa.

 
No final a app.component.css para já fica assim:
 

Titledisplay está no app.component.html:
 

 
Lista de Filmes(Movie List)

Precisamos dos ficheiros movie-list.component.ts e movie-list.component.html
No movie-list.component.ts adicionamos:
 

No movie-list.component.html adicionamos:
 
Fazemos um ngFor para fazer um loop e ir buscar os filmes.

 
Com o browser podemos ver uma lista:
 

Agora ir buscar os nossos Filmes á API:
Vamos ligar o servidor da nossa API com o Pycharm e desligar o servidor Angular no VsCode(Ctrl + C)

Vamos criar um serviço no VsCode com comando:
ng generate service api	(chamei api ao serviço mas pode ser dado outro nome)

Isto cria 2 ficheiros:
 
Podemos remover o ficheiro spec pois é para fazer testes e não precisamos.

 
Vamos ao ficheiro main.module.ts importar o Serviço da API:
 

E vamos no mesmo ficheiro colocar nos providers:
 

 
No movie-list.component.ts adicionamos:
 

No movie-list.component.ts deixamos o ficheiro assim nesta parte:
 

 
No ficheiro api.service.ts vamos buscar esses Filmes:
 

No ficheiro movie-list.component.ts vamos buscar os ficheiros através do método getMovies:
 
Para resolver o erro do this.movies, na linha 11 onde tem movies = [] vamos substituir por 
movies: any[] = []; 

Buscar Dados á API
De momento temos uma lista fixa de filmes, o que nós queremos é ir buscar a nossa lista de filmes á API:

No ficheiro api.service.ts colocamos:
 
Vamos exportar o nosso baseUrl que é o GET da listagem de movies, no método getMovies vamos através do httpCLient que importamos vamos buscar o baseUrl.
Isto ainda vai dar erros no browser, podemos ver no Inspecionar e Consola do browser.

 
No ficheiro app.module.ts colocamos:
 
Vamos importar o HttpClient em forma de Module.

No ficheiro api.service.ts vamos reformular:
 
Vamos eliminar o que tínhamos a mais, os private movies que estavam fixos e o GetMovies fica simplesmente com o return do baseUrl
Vamos ter erros no ficheiro movie-list.component.ts no this.movies:

 
Vai-nos dar erro por causa do CORS que é um protocolo de segurança, para ultrapassar isso vamos também ter de ir ao Django fazer configurações para conseguir buscar os dados á API.

 
CORS e AUTH

Não conseguimos comunicar com a nossa API pois estão em portas diferentes, na parte do Angular estamos na porta 4200, na parte do Django estamos na porta 8000.

No Django paramos o nosso servidor e vamos instalar um package chamado CORS Headers:
O comando é pip install django-cors-headers

A seguir nas settings.py vamos colocar nas INSTALLED_APPS => ‘corsheaders’

 

Vamos também adicionar MiddleWares:
 
 
Vamos então criar uma configuração nova para permitir o Frontend buscar dados ao backend:
 
Podemos colocar isso em qualquer sitio das settings.

No ficheiro app.service.ts vamos adicionar os headers e uma token fixa(mais tarde adicionamos tokens automáticas):

 
 
Vai-nos dar um erro no ficheiro movie-list.component.ts e vamos ter que alterar:

 
Vamos ter que colocar o data:any[]

O resultado vai ser este:
 
Aparece Object vamos ter que ir ao movie-list.component.html adicionar :
 
Movie.title que é para irmos buscar o titulo dos filmes que temos na BD.

Resultado Final:
 

 
Dados no Main(Movies)

No main.component.ts vamos colocar:
 

 
O nosso movie-list.component.ts vai ficar assim:
 

No main.component.html vamos colocar:
 
 
No movie-list.component.ts colocamos:
 
Importamos o Input em cima e colocamos @Input() no export. Estamos a ir buscar os Dados e a passar no main do nosso Frontend. Main = Página principal que foi o nome que lhe demos.

No main,componente.ts colocamos:
 
SelectedMovie em null, vamos querer clicar em cada filme que aparece para saber os detalhes do mesmo.

No movie.list.component.ts importamos depois do Input, Output e EventEmitter(é o que acontece quando se carrega em cima).

 
Vamos ao movie-list.component.html:

 
Vamos gerar um evento, dentro do loop para ser igual para todos onde cada vez que clicarmos vai acontecer qualquer coisa.

Vamos ao movie-list.component.ts:

 

Adicionamos um console.log para teste, no browser cada vez que clicarmos em cada filme podemos ver na consola do browser o clique efetuado:
 
 
No ficheiro movie-list.component.ts:

 

Ao selecionarmos o filme e clicarmos vamos então ao ficheiro main.component.html buscar a informação que acabamos de clicar:

 
Adicionamos o SelectMovie.
 
Vamos ao main.component.ts:
 
Adicionamos o novo método para o selectMovie para darmos a informação ao selectedMovie.

selectMovie(movie: any) {
  this.selectedMovie = movie;
  console.log('selectedMovie', this.selectedMovie)
}

Fazemos um console.log para vermos a informação no browser.

No final no browser, o que acontece é quando clicamos vemos o selectedMovie com a informação toda disponível:
 
 
Detalhes dos Filmes

Quando clicarmos no título de cada filme vai mostrar os detalhes do mesmo.

No main.component.html vamos colocar:
 

No movie-details.component.ts:

Importamos o Input:
 

 
No ficheiro movie-details.component.html vamos mostrar as informações do filme que carregarmos:
 

Vamos buscar os 3 parâmetros que colocamos no backend. O ponto de interrogação é uma operação ternária que verifica se temos esses campos e depois mostra.

Em vez de termos essa operação podemos fazer um If dos filmes, se tivermos os filmes ele vai mostrar o que temos:
 

Colocamos também o número de ratings e média de ratings:
 
 
Resultado Final:
 
Falta depois dar styling aos ratings para aparecer com melhor informação para o utilizador.


 
Rating com Estrelas

Dar ao utilizador estrelas para conseguir efetuar ratings.

Vamos usar o Font Awesome para ir buscar um ícone duma estrela.
Para instalarmos o Font Awesome no Angular fazemos:
Seguir este tutorial:
https://www.npmjs.com/package/@fortawesome/angular-fontawesome

 

 
 
 
 
 

  
User Rating

Dar ao utilizador possibilidade de dar rating ao clicar nas estrelas.


 
 
No css acrescentamos:

 

O resultado será este:
 
Ao passarmos com o rato por cima das estrelas grandes deve aparecer um ponteiro como cursor.
 
Vamos agora fazer uma classe rateHover com um ngFor:

 
Fazemos um For para as 5 estrelas, quando com o cursor passarmos por cima das estrelas, as mesmas vão ficar a roxo.

 
 
Podemos fazer o rateHovered para quando tirarmos o cursor de cima das estrelals, ficamos sem estrelas nenhumas:

 

Agora com o click e o rateClicked vamos fazer com que ao clicar nas estrelas, vamos enviar o rating para o nosso backend:

 

 
Vamos ao api.service.ts:
 

 
Depois pegamos no ApiService e colocamos no movie-details.component.ts:
 
Fazemos o import e o construtor privado. Vamos á função rateClicked e colocamos:
 
 
Vamos ao ficheiro api.service.ts:
 
Semelhante ao getMovies mas mudamos para post em vez de get.


Depois adicionamos um body no método post:

 
Atenção: No this.baseUrl usar acento e não plicas.

Depois fazemos um JSON.stringify para enviar as estrelas como um rate.
 
Fazer Update ao Rating

Queremos ao clicar no Rating que ele dê update aos rating do filme que demos, para não ficar sempre com as mesmas estrelas.


Vamos criar um novo método no ficheiro api.service.ts semelhante ao getMovies:

 

Vamos ao ficheiro movie-details.component.ts:
 
No rateClicked vamos buscar o getDetails(), no método getDetails, vamos buscar o nosso método getMovie pelo id e mostramos o resultado.
 
Vamos ao main.component.html:
 

Vamos ao movie-details.component.ts outra vez:

 

 

Vamos basicamente emitir o evento e atualizar o rating do filme para emitir novos dados.
Ou seja se tivermos 2 ratings com 5 estrelas e dermos um rating com um user novo com 1 estrela o mesmo vai atualizar em tempo real o rating do filme.
 
CRUD Controls

Vamos importar o FortAwesome para termos ícones para o movie-list.component.ts:

 

No movie-list.component.html colocamos os ícones:
 

Sempre que quisermos colocar um ícone novo temos que o importar no movie-list.component.ts e colocar depois no html.
 
 

Adicionamos um classe movie-item e vamos ao ficheiro movie-list.component.css adicionar estilos:

 

Depois vamos ao ficheiro movie-list.component.html, pois quando clicamos nos botões de editar e lixo, queremos que ele clique mesmo nos botões em vez de clicar no titulo todo e mostrar os detalhes dos filmes, vamos fazer essa separação:
 
Vamos mover o clique só para o titulo.
Vamos adicionar um simples botão para criarmos filmes:

 

Depois vamos ao main.component.html:
Adicionamos form para fazer com que os dados dos filmes apareçam do lado direito da página.

 

Vamos colocar os 2 numa div e fazer um ngIf com editMovie:
 

 
Vamos ao ficheiro main.component.ts:
 

CRUD Events

Vamos fazer eventos, ao clicar no botão editar, apagar ou criar filmes vamos fazer com que consigamos editar, criar e apagar filmes.

Vamos ao movie-list.component.html e vamos fazer da edição de filmes:

 

Criamos a função que ao clicar vai editar o filme em especifico.

Vamos ao ficheiro movie-list.component.ts:

 
Vamos colocar um novo EventEmitter

 
Bem como a função
 
Vamos ao ficheiro main.component.html:

 

Vamos adicionar o editedMovie.


Voltamos ao ficheiro main.component.ts:
 
 
Voltamos ao ficheiro main.component.html:

 

Alteramos o editMovie para editedMovie.

Adicionamos e passamos o movie para o editedMovie:

 

No ficheiro movie-list.component.ts alteramos:

 
Colocamos o this com editedMovie

 
Queremos agora fazer com que ao passar do titulo do filme para o botão editar o façamos sem que apareça os 2 ao mesmo tempo, para isso no main component.ts fazemos:

 
O que isto faz é que no selectMovie ao clicarmos no titulo mostra-nos os detalhes do mesmo e anula o editedMovie, se clicarmos no botão editar com os detalhes abertos, anula o selectedMovie e mostra a edição do filme.

Agora vamos fazer o mesmo para criar Filmes:

No ficheiro movie-list.component.html adicionamos um clique no botão New Movie:
 

 
No ficheiro movie-list.component.ts adicionamos:

 

No ficheiro main.component.html colocamos:
 

Adicionamos o createnewMovie.
 
Vamos ao ficheiro main.component.ts e colocamos:
 

Agora vamos fazer para deleteMovie:

No movie-list.component.html colocamos:
 

 
Vamos ao ficheiro movie-list.component.ts:
 

Vamos ao ficheiro main.component.html:
 

Adicionamos o deletedMovie.

 
Vamos ao ficheiro main.component.ts:
 

Para já colocamos assim para testar. Se formos no browser fazer a inspeção e em Console, e clicarmos no botão do lixo para apagar, ele vai dar o console log de delete e titulo do filme.

No main.component.html acrescentamos isto para ficar a funcionar:

 

 
Formulários

Vamos ao ficheiro movie-form.component.ts:

 

Vamos ao ficheiro movie-form.component.html:

 

No main.component.html colocamos:

 
Colocamos o this.editedMovie e movie em [ ]

 
O resultado será ao clicar no browser no botão editar, aparece o titulo do filme.

No ficheiro movie-form.component.html colocamos:
 

Vamos colocar um formulário.

 
Vamos ao ficheiro main.module.ts:
Vamos importar formulários reativos:

 


 
Vamos ao ficheiro movie-form.component.ts adicionar e importar formulários:
 

No ficheiro movie-form.component.html colocamos:

 

 
Vamos ao ficheiro movie-form.component.ts:
 

Importamos o FormGroup e Control e adicionamos o saveForm:
 

 
Método POST

Obter a informação do utilizador e enviar para a API.

Vamos ao ficheiro api.service.ts:

 

Vamos ao ficheiro movie-form.component.ts:

 
 
 

 
Métodos PUT e DELETE

PUT

No ficheiro api.service.ts:
 
Adicionamos um updateMovie com id:number


Vamos ao ficheiro movie-form.component.ts:

 

 
No mesmo ficheiro vamos aproveitar o saveForm para fazer o PUT:

 

Vamos ao ficheiro movie-form.component.html:
 

Tiramos o botão save e criamos 2 spans com 2 ifs, isto vai fazer se clicarmos no botão New Movie, o nosso botão vai dizer Create, se clicarmos no edit, o nosso botão vai dizer Update.

Vamos ao ficheiro api.service.ts fazer o Delete:
 

 
Vamos ao ficheiro main.component.ts:

 

Atualizar Vistas(Views)
Fazer com que ao apagar ou atualizar um filme, o mesmo seja atualizado ou apagado em tempo real em vez de termos que fazer refresh ao browser.

 

Vai fazer um filtro de todos os ids dos filmes e apagar. Se o id for igual ao filme que queremos apagar, vai ser apagado.

 
Vamos ao ficheiro movie-form.component.ts:
 
Importar Output e EventEmitter.

 

 

No ficheiro main.component.html adicionar:
 

No ficheiro main.component.ts adicionar:
 

 
Fazer o mesmo para o movieUpdated:

 

Ir ao ficheiro main.component.ts adicionar o EventEmitter:

 

No ficheiro main.component.ts adicionamos:

 

Vai encontrar o id do filme e verificar se o index for maior que 0 e se corresponde ao id que pretendemos.

Neste momento ao editarmos um filme, depois de editarmos com sucesso ficamos na mesma com o formulário á nossa frente, para tirarmos isso e fazer tipo um reset, colocamos o editedMovie = null:

 
Ficheiro main.component.ts:
 

Adicionar Botão para desativar Campos que não estão a ser usados

 
No ficheiro movie-form.component.html adicionamos o formDisabled

Vamos ao ficheiro movie-form.component.ts:

 
 
Vamos ao ficheiro Styles.css:

 
Adicionamos o button disabled, ou seja, quando não tivermos texto no title e description o nosso botão de create fica inativo e não deixar mandar conteúdo.







 
Formulário Login

Vamos fazer uma página aparte para o login dos utilizadores.

No nosso ficheiro app.module.ts:
Mudamos o path(caminho) para uma página auth:
 

Agora sempre que colocarmos locahost:4200 sem nada á frente, redireciona-nos para a página auth em vez da movies como estava anteriormente.

 

Vamos inserir o nosso formulário de Login.

 
Vamos ao ficheiro auth.module.ts:

 

Importamos os ReactiveFormsModule.


No nosso ficheiro auth.component.ts:
Importamos os FormGroup e FormControl e um formulário authForm:

 
No ficheiro auth.component.ts colocamos o nosso saveForm:

 

O resultado final para já, será este:
 
No browser fazemos inspecionar > Console > ao metermos dados e clicarmos em Login obtemos o console.log desses dados.

 
Token Cookie

Fazer o link do formulário com o nosso serviço da API.

No ficheiro api.service.ts:
Vamos mudar os nossos baseUrl para baseMovieUrl:

 

Vamos depois nas nossas funções mudar de baseUrl para baseMovieUrl:

 
 
 
A nossa função loginUser vai ficar com o baseUrl:

 

Colocar também o any á frente de authData.

Vamos ao ficheiro auth.component.ts:
 
Importamos o ApiService

Em baixo no constructor colocamos:

 
 
No ficheiro api.service.ts na função loginUser colocar método POST:
 

Vamos então buscar um serviço de cookies para o Angular:

No terminal colocar: npm install ngx-cookie-service --save


No ficheiro auth.module.ts vamos importar o serviço:
import { CookieService } from 'ngx-cookie-service';
 

E colocamos o serviço nos providers:
 
Nota: se não tivermos providers, adicionar.

 
No ficheiro auth.component.ts adicionamos e importamos o serviço:

 

 

No nosso saveForm vamos colocar:

 

Vamos colocar e fazer set á nossa token.

 
Token Dinâmico

No ficheiro auth.component.ts:
 
Importamos o serviço de routing

 
Colocamos no constructor


 
Adicionamos no ngOnInit


 
Colocamos o this.router no saveForm.
Vamos ao ficheiro api.service.ts:
 
Importamos o CookieService

 

Colocamos no constructor


 
Adicionamos o token com o get para obtermos o mr-token e no Authorization vamos buscar a token.

Fazemos um método novo:
 
Colocamos assim o this.getAuthHeaders em todos:
 

 

 

Apagamos o resto:
 
 
No ficheiro main.component.ts:

 
Importar os serviços


 
Colocar no constructor


 
Isto vai fazer com que se o utilizador não tiver a token e cookies, volta á página de login, se tiver consegue ver os filmes.
 
Registar utilizadores

Fazer logout da página:

No ficheiro main.component.html:
 
Colocar o botão logout


No ficheiro main.component.ts:
 

Para registar utilizadores:
No ficheiro auth.component.html:
 
 
Vamos ao ficheiro api.service.ts:
 

No ficheiro auth.component.ts:
 
Iniciar o registerMode como false.


 
No ficheiro auth.component.ts:
 
Se no primeiro if não itvermos registados vai para o login.

 
Vamos transformar o nosso código desta maneira:
 

Criamos a função loginUser com os dados normais, no nosso saveForm, se automaticamente registarmos e tivermos sucesso entramos logo direto com a nossa token e cookies.
