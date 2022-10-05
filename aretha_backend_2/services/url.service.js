const { databaseQuery } = require('../database');

const getUrls = async () => {
    try {
        const query = `SELECT * FROM praktikan_webdev`;
        const result = await databaseQuery(query);
        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error;
    }
}

const getUrlByName = async (nama) => {
    try {
        const query = `SELECT * FROM praktikan_webdev WHERE nama='${nama}'`;
        const result = await databaseQuery(query);
        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}    

const getUrlByPhoneEmail = async (telepon,email) => {
    try {
        // This is not safe, but it's just an example
        const query = `SELECT * FROM praktikan_webdev WHERE telepon='${telepon}' and email='${email}'`;
        const result = await databaseQuery(query);
        
        
        // This is safer. It uses a parameterized query
        // const query = `SELECT * FROM links WHERE name=$1`;
        // const result = await databaseQuery(query, [name]);

        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}

const insertUrl = async (nama, jenis_kelamin, angkatan, email, telepon, deskripsi) => {
    try {
        // This is not safe, but it's just an example
        const query = `INSERT INTO praktikan_webdev VALUES ('${nama}','${jenis_kelamin}','${angkatan}','${email}','${telepon}','${deskripsi}')`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `INSERT INTO links (url, name, description) VALUES ($1, $2, $3)`;
        // const result = await databaseQuery(query, [url, name, description]);

        if (!result) {
            throw new Error('Error inserting user');
        }
        return {
            message: 'user inserted successfully',
        }; 
    } catch (error) {
        return error 
    }
}

const deleteUrl = async (email) => {
    try {
        // This is not safe, but it's just an example
        const query = `DELETE FROM praktikan_webdev WHERE email = $1`;
        const result = await databaseQuery(query, [email]);

        // This is safer. It uses a parameterized query
        // const query = `DELETE FROM links WHERE url=$1`;
        // const result = await databaseQuery(query, [url]);

        if (!result) {
            throw new Error('Error deleting user');
        }
        if (result.rowCount === 0) {
            throw new Error('user not found');
        }
        return {
            message: 'user deleted successfully',
        }; 
    } catch (error) {
        return error
    }
}

const updateUrl = async (deskripsi ,nama) => {
    try {
        // This is not safe, but it's just an example
        const query = `UPDATE praktikan_webdev SET deskripsi='${deskripsi}' WHERE nama='${nama}'`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `UPDATE links SET name=$1, description=$2 WHERE url=$3`;
        // const result = await databaseQuery(query, [name, description, url]);
        if (!result) {
            throw new Error('Error deleting user');
        }
        if (result.rowCount === 0) {
            throw new Error('user not found');
        }
        return {
            message: 'user updated successfully',
        };
    } catch (error) {
        return error
    }
}

module.exports =  {
    getUrls,
    getUrlByName,
    getUrlByPhoneEmail,
    insertUrl,
    deleteUrl,
    updateUrl
}