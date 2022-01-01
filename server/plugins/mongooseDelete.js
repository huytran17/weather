const mongoose_delete = require('mongoose-delete');

const UseMongooseDelete = (schema, options) => {
    schema.plugin(mongoose_delete, {
        deletedAt: true,
        options
    })
}

module.exports = UseMongooseDelete;