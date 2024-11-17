const { Router } = require("express")

const router = Router()

const animes = []

router.post('/animes', (req, res) => {
    const { name, genre, studio } = req.body;

    if (!name || !genre || !studio) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }

    const newAnime = {
        id: Date.now(),
        name,
        genre,
        studio
    };

    animes.push(newAnime);
    res.status(201).json(newAnime);
});


router.get('/animes', (req, res) => {
    res.json(animes);
});


router.get('/animes/:id', (req, res) => {
    const { id } = req.params;
    const anime = animes.find(a => a.id === parseInt(id));

    if (!anime) {
        return res.status(404).json({ error: "Anime não encontrado" });
    }

    res.json(anime);
});


router.put('/animes/:id', (req, res) => {
    const { id } = req.params;
    const { name, genre, studio } = req.body;

    if (!name || !genre || !studio) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }

    const anime = animes.find(a => a.id === parseInt(id));

    if (!anime) {
        return res.status(404).json({ error: "Anime não encontrado" });
    }

    anime.name = name;
    anime.genre = genre;
    anime.studio = studio;

    res.json(anime);
});


router.delete('/animes/:id', (req, res) => {
    const { id } = req.params;
    const index = animes.findIndex(a => a.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ error: "Anime não encontrado" });
    }

    animes.splice(index, 1);

    res.status(204).send();
});

module.exports = router;
