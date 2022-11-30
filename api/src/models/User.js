const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'user',
		{
			id: {
				type: DataTypes.STRING,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false
			},
			dni: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			years: {
				type: DataTypes.DATE,
				allowNull: false
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false
			},
			image: {
				type: DataTypes.STRING
			},
			cel: {
				type: DataTypes.STRING
			}
		},
		{ timestamps: false }
	);
};
