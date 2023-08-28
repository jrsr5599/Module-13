// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// Define a Product as having one Category to create a foreign key in the `porduct` table
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  // When we delete a Category, set the category_id field in Product to null.
  onDelete: 'SET NULL',
});

// Categories have many Products
// We can also define the association starting with Category
Category.hasMany(Product, {
  foreignKey: 'category_id',
});


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: ProductTag,
  // Define an alias for when data is retrieved
  // as: 'associated_products',
  foreignKey: 'product_id'

});

Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: ProductTag,
    
  // Define an alias for when data is retrieved
  // as: 'associated_tags',
  foreignKey: 'tag_id'
});



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
