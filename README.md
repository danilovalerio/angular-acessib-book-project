![Buscante](thumbnail.png)

# Buscante

Aplicação que permite pesquisar e descobrir livros utilizando a API do Google Books.

## 🔨 Funcionalidades do projeto

### Pesquisa de Livros:

As pessoas podem inserir palavras-chave na barra de pesquisa para buscar livros de forma dinâmica.

### Detalhes do Livro:

Ao clicar em um livro específico pode-se obter mais detalhes, como título, sinopse, autoria e outras informações fornecidas pela API do Google Books.

### Link para ler prévia do livro:

Link com opção de ler uma prévia do livro.

## ✔️ Técnicas e tecnologias utilizadas

As técnicas e tecnologias utilizadas foram:

- `Angular`
- `Google Books API`
- `RxJs`

## 📁 Acesso ao projeto

Você pode [acessar o código fonte do projeto inicial](https://github.com/nayannelbatista/3491-angular-a11y) ou [baixá-lo](https://github.com/nayannelbatista/3491-angular-a11y/archive/refs/heads/projeto-base.zip).

## 🛠️ Abrir e rodar o projeto

Para abrir e rodar o projeto, execute _npm i_ para instalar as dependências e _ng serve_ para iniciar o projeto.

Depois, acesse [http://localhost:4200/](url) no seu navegador.

## 📚 Mais informações do curso

O curso visa implementar estratégias de acessibilidade para tornar o Buscante uma aplicação mais inclusiva e acessível.

Link do figma
[Figma Project](https://www.figma.com/file/ttYCM7sXVv5G9VUysEQ8NE/Buscante-%7C-Acessibilidade-Avan%C3%A7ada-Angular?type=design&node-id=19-10&mode=design)

## Extras

### Renderer 2

O Renderer2 no Angular desempenha um papel crucial ao facilitar a manipulação segura do DOM, proporcionando uma camada de abstração sobre as operações. Suas principais vantagens incluem a promoção de códigos mais seguros e flexíveis e a prevenção de problemas de segurança e desempenho associados à manipulação direta do DOM.

Entre seus métodos, destacam-se:

setStyle: Utilizado para definir estilos em um elemento DOM, proporcionando uma maneira segura de modificar a apresentação visual.

createElement: Essencial para criar dinamicamente elementos DOM, oferecendo flexibilidade na construção de interfaces interativas.

createText: Permite a criação de nós de texto, contribuindo para a manipulação de conteúdo textual em tempo de execução.

appendChild e removeChild: Essenciais para adicionar e remover elementos filhos, controlando a estrutura do DOM de maneira segura.

setAttribute: Utilizado para definir atributos em elementos, possibilitando a configuração dinâmica de propriedades.

addClass e removeClass: Contribuem para a adição e remoção de classes, permitindo a manipulação de estilos de forma modular.

Ao aplicar o Renderer2 em cenários práticos, é essencial seguir boas práticas, como preferir métodos específicos da classe em vez de manipulação direta, contribuindo para a manutenção e escalabilidade do código Angular. Além disso, a reflexão sobre como o Renderer2 contribui para a acessibilidade e responsividade destaca sua importância em projetos web modernos, onde a compatibilidade e a segurança são cruciais.
