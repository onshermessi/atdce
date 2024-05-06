const pool = require('../db_connect.js');

//lkol
const getBlogs = ( req, res ) => {
    const sql = 'SELECT * from blog';
    pool.query(sql, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error getting blogs from the database')
        } else {
            res.json(result)
        }
    });
};

//bl wahda
const getBlog = ( req, res ) => {
    const blogId = req.params.id;
    const sql = 'SELECT * FROM blog where blog_id = ?';
    pool.query(sql, [blogId], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error getting the blog from the database');
        } else if ( result.length === 0 ) { //result.length nestaamloha ken maa query SELECT. fl update nestaamlou result.affectedrows
            res.status(404).json({ message: 'Blog with this id was not found' });
        } else {
            res.json(result[0]);
        }
    });
};


const createBlog = ( req, res ) => {

    const {blog_id, blog_title, blog_description, blog_author, blog_url} = req.body;
    const newBlog = {blog_id, blog_title, blog_description, blog_author, blog_url};

    const sql = 'INSERT INTO blog SET ?';
    pool.query(sql, newBlog, (error) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error creating Blog');
        } else {
            res.status(200).json( { status: 'success', message: 'Blog created successfully!'});
        }
    });
};

const updateBlog = ( req, res ) => {

    const blogId = req.params.id;
    const {blog_id, blog_title, blog_description, blog_author, blog_url} = req.body;
    const updatedBlog = {blog_id, blog_title, blog_description, blog_author, blog_url};

    const sql = 'UPDATE blog SET ? WHERE blog_id = ?';
    pool.query(sql , [updatedBlog, blogId], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error updating blog');
        } 
        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Blog not found'})
        }
        {
            res.status(200).json({ status: 'success', message: 'Blog updated successfully!'});
        }
    });
};

const deleteBlog = ( req, res ) => {
        const blogId = req.params.id;
    
        const sql = 'DELETE FROM blog WHERE blog_id= ?';
        pool.query(sql, blogId, (error, result) => {
            if (error) {
                console.error(error);
                res.status(500).send('Error deleting blog');
            }
            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Blog not found'})
            }
            res.status(200).json({ status: 'success', messasge: 'Blog deleted successfully!'});    
        });
};

module.exports = {
    getBlogs,
    getBlog,
    createBlog,
    updateBlog,
    deleteBlog
};