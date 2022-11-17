const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'publication',
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			image: {
				type: DataTypes.STRING
			},
			text: {
				type: DataTypes.STRING
			},
			event: {
				type: DataTypes.STRING,
				allowNull: false
			},
			location: {
				type: DataTypes.STRING
			}
		},
		{ timestamps: false }
	);
};
