export const createArticle  = (req, res, next) => {
    try {
        res.status(201).send("create article")
    } catch (err) {
        next(err)
    }
}

export const updateArticleById  = (req, res, next) => {
    try {
        res.status(201).send("update article")
    } catch (err) {
        next(err)
    }
}

export const deleteArticleById  = (req, res, next) => {
    try {
        res.status(201).send("deleted article")
    } catch (err) {
        next(err)
    }
}

export const getAllArticles  = (req, res, next) => {
    try {
        res.status(201).send("all article")
    } catch (err) {
        next(err)
    }
}

export const getArticleById  = (req, res, next) => {
    try {
        res.status(201).send("get article by id")
    } catch (err) {
        next(err)
    }
}