const mongoose_delete = require('mongoose-delete');

module.exports = (schema, options) => {
    schema.plugin(mongoose_delete, {
        deletedAt: true,
        options
    })
}