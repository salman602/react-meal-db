const saveToDb = (db) => {
    const dbJson = JSON.stringify(db);
    localStorage.setItem('shopping-cart', dbJson);
};

const getDb = () => {
    let savedDb = localStorage.getItem('shopping-cart');
    if (savedDb) {
        savedDb = JSON.parse(savedDb);
    }
    else {
        savedDb = {};
    }
    return savedDb;
};

const addToDb = (item) => {
    const db = getDb();
    if (item in db) {
        db[item] += 1;
    }
    else {
        db[item] = 1;
    }
    saveToDb(db)
};

export { addToDb, getDb }