const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { UserEntity } = require('../entities');
const { encrypt, compare } = require('../../utils/hash')
const mongoose_delete = require('mongoose-delete')

const UserSchema = new Schema(UserEntity, { timestamp: true })

UserSchema.plugin(mongoose_delete, { overrideMethods: "all" })

UserSchema.set("toJSON", {
    transform: (doc, ret, options) => {
        delete ret.password;

        return ret;
    },
});

UserSchema.pre("save", async function (next) {
    this.password = await encrypt({
        plainText: this.password,
        saltRound: 15
    });

    next();
});

UserSchema.pre("findOneAndUpdateWithDeleted", async function (next) {
    const data_update = { ...this.getUpdate() }

    if (data_update.password) {
        data_update.password = await encrypt({
            plainText: this.password,
            saltRound: 15
        });

        this.setUpdate(data_update);
    }

    next();
});

UserSchema.statics.findByEmail = async function (email) {
    try {
        const user = await this.findOne({ email }, "+password").exec();

        return user;
    }
    catch (err) {
        console.error(err);
    }
}

UserSchema.statics.findByName = async function (name) {
    try {
        const user = await this.findOne({ name }, "+password").exec();

        return user;
    }
    catch (err) {
        console.error(err);
    }
}

UserSchema.statics.findById = async function (id) {
    try {
        const user = await this.findOne({ id }, "+password").exec();

        return user;
    }
    catch (err) {
        console.error(err);
    }
}

UserSchema.statics.findAll = async function () {
    try {
        const users =
            await this.find()
                .sort({
                    createdAt: "desc"
                })
                .lean({ virtuals: true })
                .exec();

        return users;
    }
    catch (err) {
        console.error(err);
    }
}

UserSchema.statics.findAllPaginated = async function ({ query, page, entries_per_page }) {
    try {
        const query_conditions = {};

        const number_of_entries_to_skip = (page - 1) * entries_per_page;

        if (query) {
            query_conditions["$or"] = [
                { username: { $regex: ".*" + query + ".*", $options: "si" } },
                { email: { $regex: ".*" + query + ".*", $options: "si" } },
            ]
        }

        const users =
            await this.find(query_conditions)
                .skip(number_of_entries_to_skip)
                .limit(entries_per_page)
                .sort({
                    createdAt: "desc"
                })
                .lean({ virtuals: true });

        if (users) {
            const from = page - 1 > 0 ? page - 1 : null;
            const has_more_entries = users.length === entries_per_page && page * entries_per_page !== total_count;
            const to = has_more_entries ? page + 1 : null;
            const total_pages = Math.ceil(total_count / entries_per_page);

            return {
                users,
                pagination: {
                    current_page: page,
                    from,
                    to,
                    per_page: entries_per_page,
                    total: total_count,
                    total_pages,
                },
            };
        }

        return null;
    }
    catch (err) {
        console.error(err);
    }
}

UserSchema.statics.findAllDeleted = async function () {
    try {
        const users = await this.findDeleted();

        return users;
    }
    catch (err) {
        console.error(err);
    }
}

UserSchema.statics.findAllWithDeleted = async function () {
    try {
        const users = await this.findWithDeleted();

        return users;
    }
    catch (err) {
        console.error(err);
    }
}

UserSchema.statics.register = async function ({ data }) {
    try {
        const user = await new this(data).save();

        return user;
    }
    catch (err) {
        console.error(err);
    }
}

module.exports = UserSchema;