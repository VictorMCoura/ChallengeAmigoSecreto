# ChallengeAmigoSecreto
-Desafio do curso OracleOne para criar uma pagina que faz sorteios de amigo secreto.
Este projeto é um simples aplicativo de sorteio de amigos. O usuário pode adicionar nomes de amigos, sorteá-los aleatoriamente e visualizar os resultados. Quando um amigo é sorteado, seu nome é removido da lista para garantir que não seja sorteado novamente.

-Funcionalidades
Adicionar amigos: O usuário pode inserir o nome de amigos e adicioná-los a uma lista.
Sorteio aleatório: O sistema sorteia um nome aleatoriamente da lista de amigos.
Remoção automática: O nome sorteado é removido da lista após o sorteio, garantindo que ele não seja sorteado novamente.
Exibição do nome sorteado: O nome sorteado é exibido na tela para o usuário.
Limpar lista: Caso o nome sorteado seja retirado, a lista é atualizada na tela.
Campo de entrada limpo: Após o sorteio, o campo de inserção de nome é limpo, pronto para o próximo usuário adicionar um novo nome, se desejar.


-Tecnologias Usadas
HTML: Para estruturar o layout da página.
CSS: Para estilizar a página (opcional, não incluído no código).
JavaScript: Para toda a lógica de funcionamento (adicionar, sortear, remover).

-Funcionalidades em JavaScript:
adicionarAmigo(): Adiciona um nome à lista de amigos.
sortearAmigo(): Sorteia um nome da lista de amigos, remove esse nome da lista e exibe o resultado na tela.
limparCampo(): Limpa o campo de entrada de nome após o sorteio.
atualizarLista(): Atualiza a lista exibida na página após a remoção de um nome.

-Explicações:
Math.random(): Usado para gerar um índice aleatório e sortear um nome da lista.
splice(): Métodos usados para remover o amigo sorteado da lista de maneira eficiente.
innerHTML: Usado para atualizar o conteúdo de elementos HTML dinamicamente (por exemplo, mostrando o nome sorteado).

-Exemplo de Uso
Adicione o nome "João" ao campo de texto.
Clique em "Adicionar". O nome "João" será adicionado à lista.
Clique em "Sortear". O nome "João" será sorteado e removido da lista.

