const pool = require('../db_connect.js');

const getNews = ( req, res) => {
    const sql = 'SELECT * from news';
    pool.query(sql, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error getting all news from the database')
        } else {
            res.json(result)
        }
    });
};

//bl wahda
const get1News = ( req, res ) => {
    const newsId = req.params.id;
    const sql = 'SELECT * FROM news where news_id = ?';
    pool.query(sql, [newsId], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error getting the news from the database');
        } else if ( result.length === 0 ) {
            res.status(404).json({ message: 'News with this id was not found'});
        } else {
            res.json(result[0]);
        }
    });
};

const createNews = ( req, res ) => {
    
    const {news_id, news_title, content, news_author, published_at} = req.body
    const newNews = {news_id, news_title, content, news_author, published_at};

    const sql = 'INSERT INTO news SET ?';
    pool.query(sql, newNews, (error) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error adding news')
        } else {
            res.status(200).json( { status: 'success', message: 'News created successfully!'});
        }
    });
};

const updateNews = ( req, res ) => {

    const newstId = req.params.id;
    const {news_id, news_title, content, news_author, published_at} = req.body;
    const updatedNews = {news_id, news_title, content, news_author, published_at};

    const sql = 'UPDATE news SET ? WHERE news_id = ?';
    pool.query(sql, [updatedNews, newsId], (error) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error updating news');
        }
        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'News not found'})
        }
        {
            res.status(200).json({ status: 'success', message: 'News updated successfully!'});
        }
    });
};

const deleteNews = ( req, res ) => {
    const newsId= req.params.id;
    
    const sql = 'DELETE FROM news WHERE news_Id = ?';
    pool.query(sql, newsId, (error) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error deleting news');
        }
        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'News not found'})
        }
        res.status(200).json({ status: 'success', messasge: 'News deleted successfully!'});
    });
};

module.exports = {
    getNews,
    get1News,
    createNews,
    updateNews,
    deleteNews
};