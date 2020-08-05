const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { email, senha } = request.body;

        const users = await connection('users')
        .where('email', email)
        .where('senha', senha)
        .select('nome', 'perfil')
        .first();

        if(!users){
            return response.status(400).json({
                error: 'Usuário não encontrado!'
            });
        }
        return response.json(users);
        
    }
}