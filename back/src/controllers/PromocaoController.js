const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const connection = require('../database/connection');

const STORAGE = multer.diskStorage({
    destination: "../frontend/public/uploads/promocao/",
    filename: function (req, file, cb) {
        cb(null, "PRODUCT-[" + Date.now() + ']-' + path.extname(file.originalname));
    }
});
const upload = multer({
    storage: STORAGE,
    limits: {
        fieldSize: 1000000,
    }
});

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('promocao').count();

        const promocao = await connection('promocao')
            .limit(25)
            .offset((page - 1) * 25)
            .select('*');

        response.header('X-Total-Count', count['count(*)'])

        return response.json(promocao);
    },
    async create(request, response) {
        const users_id = request.headers.authorization;

        upload.single('file')(request, response, async function (error) {
            if (error) response.json({
                status: 400,
                msg: "Couldn't upload product image",
            });

            const { file, body } = request;
            let imgProduto = null;

            if (file) {
                imgProduto = "./uploads/" + file['filename'];
            }
            const { nome, categoria, preco, descricao, dataInicio, dataTermino, promocaoAtiva } = body;
            const [id] = await connection('promocao').insert({
                nome,
                categoria,
                preco,
                descricao,
                dataInicio,
                dataTermino,
                promocaoAtiva,
                imgProduto,
                users_id,

            });

            response.json({ id })
        });

    },
    async delete(request, response) {
        const { id } = request.params;

        await connection('promocao').where('id', id).delete();

        return response.status(204).send();

    }
}