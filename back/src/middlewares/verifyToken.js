// copiado e colado do backend do lucas - ainda não botei isso em canto nenhum, tô tentando entender primeiro
require('dotenv').config();
const jwtSecret = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');
const { getClienteByIdQuery } = require('../models/clienteModel');


// const verifyToken = (req, res, next) => {
//     const token = req.headers.authorization;
//     if (!token) {
//         return res.status(401).json({ message: 'Token de acesso não fornecido' });
//     }
//     const jwtToken = token.replace('Bearer ', '');
//     jwt.verify(jwtToken, jwtSecret, (err, decoded) => {
//         if (err) {
//             return res.status(401).json({ message: 'Token de acesso inválido' });
//         }
//         req.user = decoded;
//         res.json({
//             message: "Token funcionou!"
//         })
//         next();
//     });
// };

const verifyToken = async (req, res, next) => {
    try {
      const { authorization } = req.headers;

      if (!authorization) {
        return res.status(401).json({ error: "Não autorizado" })
      }
  
      const token = authorization.split(" ")[1]
  
      const { id } = jwt.verify(token, jwtSecret)
  
      const cliente = await getClienteByIdQuery(id)
  
      if (!cliente) {
        return res.status(401).json({ error: "Não autorizado" })
      }
  
      const { senha_hash: _, ...loggedCliente } = cliente
      console.log('aqui é após a retirada da senha', loggedCliente)
  
      req.cliente = loggedCliente
  
      next()
    } catch (error) {
      console.error(error);
      return res.status(401).json({ error: "Não autorizado" })
    }
  }

const verifyAdminRoleToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Access token not provided' });
    }

    const jwtToken = token.replace('Bearer ', '');
    jwt.verify(jwtToken, jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid access token' });
        }

        if (decoded.role !== 0) {
            return res.status(403).json({ message: 'Only users with role 0 can perform this action' });
        }

        req.user = decoded;
        next();
    });
};

//um teste aleatório pra criar um token de autorização.
// const createAuthToken = (req, res, next) => {
//     const {nome_usuario} = req.body;
//     if (nome_usuario) {
//         return jwt.sign({user}, jwtSecret, {
//             usuario: user.nome_usuario,
//             expiresIn: "1h"
//         });
//     }
//     next();
// }; 


module.exports = {verifyToken, verifyAdminRoleToken};