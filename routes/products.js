// importando o Express para uma constante chamada express
const express = require('express');
// Iniciando o Express Router em uma constante chamada router
const router = express.Router();

/**
 * Return todos os produtos
 */
router.get('/', (req, res, next) => {
    res.status(200).send({
        message: 'Retorna todos os produtos'
    });
});

/**
 * Insere um produto
 */
router.post('/', (req, res, next) => {
    res.status(201).send({
        message: 'O produto foi criado'
    });
});

/**
 * Return um produto exclusivo
 */
router.get('/:id_product', (req, res, next) => {
    const id = req.params.id_product
    if (id === 'especial') {
        res.status(200).send({
            message: 'Você descobriu um id especial',
            id: id
        });
    } else {
        res.status(200).send({
            message: 'Você passou um ID'
        })
    }

});

/**
 * Alterar um produto
 */
router.patch('/:id_product', (req, res, next) => {
    res.status(201).send({
        message: 'Produto alterado'
    })
})

/**
 * Deletando um produto
 */
router.delete('/:id_product', (req, res, next) => {
    res.status(200).send({
        message: 'Produto excluido'
    })
})

module.exports = router;