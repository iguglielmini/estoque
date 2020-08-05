
const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;
        const [count] = await connection('users').count();
        const users = await connection('users')
        .limit(25)
        .offset((page - 1) * 25)
        .select('*');

        response.header('X-Total-Count', count['count(*)'])

        return response.json(users);
    },

    async create(request, response) {

        const { nome, cpf, telefone, email, senha, filial, perfil } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('users').insert({
            id,
            nome,
            cpf,
            telefone,
            email,
            senha,
            filial,
            perfil
        })

        return response.json({ id });
    },
    async delete(request, response){
        const { id } = request.params;

        await connection('users').where('id', id).delete();

        return response.status(204).send();

    }
}