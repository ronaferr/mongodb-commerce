db.produtos.find(
    { "vendidos": { $gt: 0 } },
    { "nome": 1, "vendidos": 1, "_id": 0 }
    ).sort(
        { "vendidos": 1 }
        );