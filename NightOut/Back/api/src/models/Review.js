const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'review',
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true
			},
			like: {
				type: DataTypes.BOOLEAN,
				defaultValue: false
			},
			comment: {
				type: DataTypes.STRING
			}
		},
		{ timestamps: false }
	);
};
