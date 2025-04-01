// const { createLivrosQuery } = require("../models/livroModel");
// const { createClientQuery } = require("../models/clienteModel");
// const { getLivros } = require("./livro");

// const popularBd = async (req, res) => {
//     const Livro1 = await createLivrosQuery(
//       (titulo = "Harry Potter e a Pedra Filosofal"),
//       (autor = "J. K. Rowlling"),
//       (ano_publicacao = 1997),
//       (genero = "Fantasia Fantasiosa"),
//       (capa =
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0QbeTdJt9pDB6bgoeABV7kWdfM81TQwSKkA&s"),
//       (sinopse = "Magia muita magia"),
//       (preco = 49.9)
//     );
//     const Livro2 = await createLivrosQuery(
//       (titulo = "Harry Potter e a Câmara Secreta"),
//       (autor = "J. K. Rowlling"),
//       (ano_publicacao = 1998),
//       (genero = "Fantasia Fantasiosa"),
//       (capa =
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQORELAOczSIAp-AvYQ_X0Ey-9cPrrxvmuz24gM1y7FjPuh8bxu106JOp_c6jD-0qMLqyQ&usqp=CAU"),
//       (sinopse = "Magia muita magia"),
//       (preco = 49.9)
//     );
//     const Livro3 = await createLivrosQuery(
//       (titulo = "Harry Potter e o Prisioneiro de Azkaban"),
//       (autor = "J. K. Rowlling"),
//       (ano_publicacao = 1999),
//       (genero = "Fantasia Fantasiosa"),
//       (capa =
//         "https://m.media-amazon.com/images/I/81yhVdW-MWL._AC_UF1000,1000_QL80_.jpg"),
//       (sinopse = "Magia muita magia"),
//       (preco = 49.9)
//     );
//     const Livro4 = await createLivrosQuery(
//       (titulo = "Harry Potter e o Cálice de Fogo"),
//       (autor = "J. K. Rowlling"),
//       (ano_publicacao = 2000),
//       (genero = "Fantasia Fantasiosa"),
//       (capa =
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvPGvwqwqoi2MA7nCDJ71SHf_CamOjt9tUHA&s"),
//       (sinopse = "Magia muita magia"),
//       (preco = 49.9)
//     );
//     const Livro5 = await createLivrosQuery(
//       (titulo = "Harry Potter e a Ordem da Fênix"),
//       (autor = "J. K. Rowlling"),
//       (ano_publicacao = 2001),
//       (genero = "Fantasia Fantasiosa"),
//       (capa =
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuZ4zC56yP5yWtOGhUpuZh17MDsKjTxKzyhQ&s"),
//       (sinopse = "Magia muita magia"),
//       (preco = 49.9)
//     );
//     const Livro6 = await createLivrosQuery(
//       (titulo = "Harry Potter e o Enigma do Príncipe"),
//       (autor = "J. K. Rowlling"),
//       (ano_publicacao = 2002),
//       (genero = "Fantasia Fantasiosa"),
//       (capa =
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiUvaIk21qOpvl01odRHy6jjipjndLE3XlXg&s"),
//       (sinopse = "Magia muita magia"),
//       (preco = 49.9)
//     );
//     const Livro7 = await createLivrosQuery(
//       (titulo = "Harry Potter e as Relíquias da Morte"),
//       (autor = "J. K. Rowlling"),
//       (ano_publicacao = 2003),
//       (genero = "Fantasia Fantasiosa"),
//       (capa =
//         "https://m.media-amazon.com/images/I/81LVlvKAgsL._AC_UF1000,1000_QL80_.jpg"),
//       (sinopse = "Magia muita magia"),
//       (preco = 49.9)
//     );

//     const User01 = await createClientQuery(
//       (nome_usuario = "iagop"),
//       (email = "iago.ponte4@gmail.com"),
//       (senha_hash = "iago12345")
//     );

//     const User02 = await createClientQuery(
//       (nome_usuario = "carlinhos"),
//       (email = "carlito5@gmail.com"),
//       (senha_hash = "carlito12345")
//     );

//     const getTudo = await getLivros;
//   res.status(200).json(getTudo);
// };

// module.exports = { popularBd };

const { createLivrosQuery } = require("../models/livroModel");
const { createClientQuery } = require("../models/clienteModel");

const popularBd = async (req, res) => {
    try {
        const livros = [
            {
                titulo: "Harry Potter e a Pedra Filosofal",
                autor: "J. K. Rowlling",
                ano_publicacao: 1997,
                genero: "Fantasia Fantasiosa",
                capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0QbeTdJt9pDB6bgoeABV7kWdfM81TQwSKkA&s",
                sinopse: "Magia muita magia",
                preco: 49.9
            },
            {
                titulo: "Harry Potter e a Câmara Secreta",
                autor: "J. K. Rowlling",
                ano_publicacao: 1998,
                genero: "Fantasia Fantasiosa",
                capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQORELAOczSIAp-AvYQ_X0Ey-9cPrrxvmuz24gM1y7FjPuh8bxu106JOp_c6jD-0qMLqyQ&usqp=CAU",
                sinopse: "Magia muita magia",
                preco: 49.9
            },
            {
                titulo: "Harry Potter e o Prisioneiro de Azkaban",
                autor: "J. K. Rowlling",
                ano_publicacao: 1999,
                genero: "Fantasia Fantasiosa",
                capa: "https://m.media-amazon.com/images/I/81yhVdW-MWL._AC_UF1000,1000_QL80_.jpg",
                sinopse: "Magia muita magia",
                preco: 49.9
            },
            {
                titulo: "Harry Potter e o Cálice de Fogo",
                autor: "J. K. Rowlling",
                ano_publicacao: 2000,
                genero: "Fantasia Fantasiosa",
                capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvPGvwqwqoi2MA7nCDJ71SHf_CamOjt9tUHA&s",
                sinopse: "Magia muita magia",
                preco: 49.9
            },
            {
                titulo: "Harry Potter e a Ordem da Fênix",
                autor: "J. K. Rowlling",
                ano_publicacao: 2001,
                genero: "Fantasia Fantasiosa",
                capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuZ4zC56yP5yWtOGhUpuZh17MDsKjTxKzyhQ&s",
                sinopse: "Magia muita magia",
                preco: 49.9
            },
            {
                titulo: "Harry Potter e o Enigma do Príncipe",
                autor: "J. K. Rowlling",
                ano_publicacao: 2002,
                genero: "Fantasia Fantasiosa",
                capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiUvaIk21qOpvl01odRHy6jjipjndLE3XlXg&s",
                sinopse: "Magia muita magia",
                preco: 49.9
            },
            {
                titulo: "Harry Potter e as Relíquias da Morte",
                autor: "J. K. Rowlling",
                ano_publicacao: 2003,
                genero: "Fantasia Fantasiosa",
                capa: "https://m.media-amazon.com/images/I/81LVlvKAgsL._AC_UF1000,1000_QL80_.jpg",
                sinopse: "Magia muita magia",
                preco: 49.9
            }
        ];

        const usuarios = [
            {
                nome_usuario: "iagop",
                email: "iago.ponte4@gmail.com",
                senha_hash: "iago12345"
            },
            {
                nome_usuario: "carlinhos",
                email: "carlito5@gmail.com",
                senha_hash: "carlito12345"
            }
        ];

        // Inserir livros no banco de dados
        const livrosCriados = await Promise.all(livros.map(livro => createLivrosQuery(
            livro.titulo, livro.autor, livro.ano_publicacao, livro.genero, livro.capa, livro.sinopse, livro.preco
        )));

        // Inserir usuários no banco de dados
        const usuariosCriados = await Promise.all(usuarios.map(user => createClientQuery(
            user.nome_usuario, user.email, user.senha_hash
        )));

        res.status(200).json({
            mensagem: "Banco de dados populado com sucesso!",
            livros: livrosCriados,
            usuarios: usuariosCriados,
        });
    } catch (error) {
        res.status(500).json({ erro: "Erro ao popular o banco de dados", detalhe: error.message });
    }
};

module.exports = { popularBd };
