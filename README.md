CREATE TABLE Usuario(
	id INT AUTO_INCREMENT,
    Nombre VARCHAR(35) NOT NULL,
    Usuario VARCHAR(25) NOT NULL,
    password VARCHAR(255) NOT NULL,
    Tipo TINYINT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE Empresa(
	IdEmpresa INT AUTO_INCREMENT,
    Nombre VARCHAR(65) NOT NULL,
    NIT VARCHAR(15) NOT NULL,
    Sigla VARCHAR(8) NOT NULL,
    Telefono VARCHAR(18) NOT NULL,
    Correo VARCHAR(50) NOT NULL,
    Direccion VARCHAR(360) NOT NULL,
    Niveles INT NOT NULL,
    Estado TINYINT NOT NULL,
    IdUsuario INT NOT NULL,
    PRIMARY KEY(IdEmpresa),
    FOREIGN KEY(IdUsuario) REFERENCES Usuario(id)
);

CREATE TABLE Gestion(
	IdGestion INT AUTO_INCREMENT,
    Nombre VARCHAR(35) NOT NULL,
    FechaInicio DATE NOT NULL,
    FechaFin DATE NOT NULL,
    Estado TINYINT NOT NULL,
    IdUsuario INT NOT NULL,
    IdEmpresa INT NOT NULL,
    PRIMARY KEY(IdGestion),
    FOREIGN KEY(IdUsuario) REFERENCES Usuario(id),
    FOREIGN KEY(IdEmpresa) REFERENCES Empresa(IdEmpresa)
);

CREATE TABLE Periodo(
	IdPeriodo INT AUTO_INCREMENT,
    Nombre VARCHAR(35) NOT NULL,
    FechaInicio DATE NOT NULL,
    FechaFin DATE NOT NULL,
    Estado TINYINT NOT NULL,
    IdUsuario INT NOT NULL,
    IdGestion INT NOT NULL,
    PRIMARY KEY(IdPeriodo),
    FOREIGN KEY(IdUsuario) REFERENCES Usuario(id),
    FOREIGN KEY(IdGestion) REFERENCES Gestion(IdGestion)
);

CREATE TABLE Cuenta(
	IdCuenta INT AUTO_INCREMENT,
	Codigo VARCHAR(22) NOT NULL,
	Nombre VARCHAR(45) NOT NULL,
	Nivel INT NOT NULL,
	TipoCuenta TINYINT NOT NULL,
	IdUsuario INT NOT NULL,
	IdEmpresa INT NOT NULL,
	IdCuentaPadre INT DEFAULT NULL,
	PRIMARY KEY(IdCuenta),
	FOREIGN KEY(IdUsuario) REFERENCES Usuario(id),
	FOREIGN KEY(IdEmpresa) REFERENCES Empresa(IdEmpresa),
	FOREIGN KEY(IdCuentaPadre) REFERENCES Cuenta(IdCuenta)
);
CREATE TABLE Moneda(
	IdMoneda INT AUTO_INCREMENT,
	Nombre VARCHAR(35) NOT NULL,
	Descripcion VARCHAR(100) NOT NULL,
	Abreviatura VARCHAR(6) NOT NULL,
	IdUsuario INT NOT NULL,
	PRIMARY KEY(IdMoneda),
	FOREIGN KEY(IdUsuario) REFERENCES Usuario(id)

);
CREATE TABLE EmpresaMoneda(
	IdEmpresaMoneda INT AUTO_INCREMENT,
	Cambio DOUBLE NOT NULL,
	Activo INT NOT NULL,
	FechaRegistro DATE NOT NULL,
	IdEmpresa INT NOT NULL,
	IdMonedaPrincipal INT NOT NULL,
	IdMonedaAlternativa INT DEFAULT NULL,
	IdUsuario INT NOT NULL,
	PRIMARY KEY(IdEmpresaMoneda),
	FOREIGN KEY(IdEmpresa) REFERENCES Empresa(IdEmpresa),
	FOREIGN KEY(IdMonedaPrincipal) REFERENCES Moneda(IdMoneda),
	FOREIGN KEY(IdMonedaAlternativa) REFERENCES Moneda(IdMoneda),
	FOREIGN KEY(IdUsuario) REFERENCES Usuario(id)
);
CREATE TABLE Comprobante(
	IdComprobante INT AUTO_INCREMENT,
	Serie INT NOT NULL,
	Glosa VARCHAR(200) NOT NULL,
	Fecha DATE NOT NULL,
	TC DOUBLE NOT NULL,
	TipoComprobante TINYINT NOT NULL,
	Estado TINYINT NOT NULL,
	IdEmpresa INT NOT NULL,
	IdUsuario INT NOT NULL,
	IdMoneda INT NOT NULL,
	PRIMARY KEY(IdComprobante),
	FOREIGN KEY(IdEmpresa) REFERENCES Empresa(IdEmpresa),
	FOREIGN KEY(IdUsuario) REFERENCES Usuario(id),
	FOREIGN KEY(IdMoneda) REFERENCES Moneda(IdMoneda)
);
CREATE TABLE DetalleComprobante(
	IdDetalleComprobante INT AUTO_INCREMENT,
	Numero INT NOT NULL,
	Glosa VARCHAR(200) NOT NULL,
	MontoDebe DOUBLE NOT NULL,
	MontoHaber DOUBLE NOT NULL,
	MontoDebeAlt DOUBLE NOT NULL,
	MontoHaberAlt DOUBLE NOT NULL,
	IdUsuario INT NOT NULL,
	IdComprobante INT NOT NULL,
	IdCuenta INT NOT NULL,
	PRIMARY KEY(IdDetalleComprobante),
	FOREIGN KEY(IdUsuario) REFERENCES Usuario(id),
	FOREIGN KEY(IdComprobante) REFERENCES Comprobante(IdComprobante),
	FOREIGN KEY(IdCuenta) REFERENCES Cuenta(IdCuenta)
);

CREATE TABLE Categoria(
	IdCategoria INT AUTO_INCREMENT,
	Nombre VARCHAR(45) NOT NULL,
	Descripcion VARCHAR(255) DEFAULT NULL,
	IdEmpresa INT NOT NULL,
	IdUsuario INT NOT NULL,
	IdCategoriaPadre INT DEFAULT NULL,
	PRIMARY KEY(IdCategoria),
	FOREIGN KEY(IdEmpresa) REFERENCES Empresa(IdEmpresa),
	FOREIGN KEY(IdUsuario) REFERENCES Usuario(id)
);

CREATE TABLE Articulo(
	IdArticulo INT AUTO_INCREMENT,
	Nombre VARCHAR(45) NOT NULL,
	Descripcion VARCHAR(255) DEFAULT NULL,
	Cantidad INT NOT NULL,
	PrecioVenta DOUBLE NOT NULL,
	IdEmpresa INT NOT NULL,
	IdUsuario INT NOT NULL,
	PRIMARY KEY(IdArticulo),
	FOREIGN KEY(IdEmpresa) REFERENCES Empresa(IdEmpresa),
	FOREIGN KEY(IdUsuario) REFERENCES Usuario(id)
);

CREATE TABLE ArticuloCategoria(
	IdArticulo INT NOT NULL,
	IdCategoria INT NOT NULL,
	PRIMARY KEY(IdArticulo, IdCategoria),
	FOREIGN KEY(IdArticulo) REFERENCES Articulo(IdArticulo),
	FOREIGN KEY(IdCategoria) REFERENCES Categoria(IdCategoria)
);

CREATE TABLE Nota(
	IdNota INT AUTO_INCREMENT,
	NroNota INT NOT NULL,
	Fecha DATE NOT NULL,
	Descripcion VARCHAR(255) NOT NULL,
	Total DOUBLE NOT NULL,
	Estado TINYINT NOT NULL,
	Tipo INT NOT NULL,
	IdEmpresa INT NOT NULL,
	IdUsuario INT NOT NULL,
	IdComprobante INT DEFAULT NULL,
	PRIMARY KEY(IdNota),
	FOREIGN KEY(IdEmpresa) REFERENCES Empresa(IdEmpresa),
	FOREIGN KEY(IdUsuario) REFERENCES Usuario(id),
	FOREIGN KEY(IdComprobante) REFERENCES Comprobante(IdComprobante)
);

CREATE TABLE Lote(
	IdArticulo INT NOT NULL,
	NroLote INT NOT NULL,
	FechaIngreso DATE NOT NULL,
	FechaVencimiento DATE DEFAULT NULL,
	Cantidad INT NOT NULL,
	PrecioCompra DOUBLE NOT NULL,
	Stock INT NOT NULL,
	Estado TINYINT NOT NULL,
	IdNota INT NOT NULL,
	PRIMARY KEY(IdArticulo, NroLote),
	FOREIGN KEY(IdArticulo) REFERENCES Articulo(IdArticulo),
	FOREIGN KEY(IdNota) REFERENCES Nota(IdNota)
);

CREATE TABLE Detalle(
	IdArticulo INT NOT NULL,
	NroLote INT NOT NULL,
	IdNota INT NOT NULL,
	Cantidad INT NOT NULL,
	PrecioVenta DOUBLE NOT NULL,
	Estado TINYINT NOT NULL,
	PRIMARY KEY(IdArticulo, NroLote, IdNota),
	FOREIGN KEY(IdArticulo) REFERENCES Articulo(IdArticulo),
	FOREIGN KEY(IdNota) REFERENCES Nota(IdNota)
);

CREATE TABLE ConfIntegracion(
    IdEmpresa INT NOT NULL,
    IdUsuario INT NOT NULL,
    IdCuentaCaja INT NOT NULL,
    IdCuentaCreditoFiscal INT NOT NULL,
    IdCuentaDebitoFiscal INT NOT NULL,
    IdCuentaCompra INT NOT NULL,
    IdCuentaVenta INT NOT NULL,
    IdCuentaIT INT NOT NULL,
    IdCuentaITPorPagar INT NOT NULL,
    integracion BOOLEAN,
    PRIMARY KEY(IdEmpresa),
    FOREIGN KEY(IdEmpresa) REFERENCES Empresa(IdEmpresa),
    FOREIGN KEY(IdUsuario) REFERENCES Usuario(id),
    FOREIGN KEY(IdCuentaCaja) REFERENCES Cuenta(IdCuenta),
    FOREIGN KEY(IdCuentaCreditoFiscal) REFERENCES Cuenta(IdCuenta),
    FOREIGN KEY(IdCuentaDebitoFiscal) REFERENCES Cuenta(IdCuenta),
    FOREIGN KEY(IdCuentaCompra) REFERENCES Cuenta(IdCuenta),
    FOREIGN KEY(IdCuentaVenta) REFERENCES Cuenta(IdCuenta),
    FOREIGN KEY(IdCuentaIT) REFERENCES Cuenta(IdCuenta),
    FOREIGN KEY(IdCuentaITPorPagar) REFERENCES Cuenta(IdCuenta)
);

//DROP TABLE
DROP TABLE ConfIntegracion;
DROP TABLE Detalle;
DROP TABLE Lote;
DROP TABLE Nota;
DROP TABLE ArticuloCategoria;
DROP TABLE Articulo;
DROP TABLE Categoria;
DROP TABLE DetalleComprobante;
DROP TABLE Comprobante;
DROP TABLE EmpresaMoneda;
DROP TABLE Moneda;
DROP TABLE Cuenta;
DROP TABLE Periodo;
DROP TABLE Gestion;
DROP TABLE Empresa;

//INSERT
INSERT Usuario (Nombre,Usuario,password,Tipo) VALUES('Diego', 'Master', '81dc9bdb52d04dc20036dbd8313ed055', 1);

INSERT Moneda (Nombre,Descripcion,Abreviatura,IdUsuario) VALUES('Dolar', 'Moneda de los Estados Unidos.', 'USD.', 1);
INSERT Moneda (Nombre,Descripcion,Abreviatura,IdUsuario) VALUES('Boliviano', 'Moneda Boliviana.', 'BOB.', 1);
INSERT Moneda (Nombre,Descripcion,Abreviatura,IdUsuario) VALUES('Rublo', 'Moneda Rusa.', 'RUB.', 1);
INSERT Moneda (Nombre,Descripcion,Abreviatura,IdUsuario) VALUES('Euro', 'Moneda Europea.', 'EUR.', 1);
INSERT Moneda (Nombre,Descripcion,Abreviatura,IdUsuario) VALUES('Libra Esterlina', 'Moneda del Reino Unido.', 'GBP.', 1);


//QUERY CUSTOM

SELECT cu.Codigo, cu.Nombre, (SUM(dc.MontoDebe) - SUM(dc.MontoHaber)) as Monto
FROM Comprobante as co
INNER JOIN DetalleComprobante as dc ON dc.IdComprobante = co.IdComprobante
LEFT JOIN Cuenta as cu ON cu.IdCuenta = dc.IdCuenta
WHERE 
     cu.IdUsuario=1 AND
     cu.IdEmpresa=1
     GROUP BY cu.IdCuenta;


//FUNCTION CUSTOM

DELIMITER $$
CREATE DEFINER=`root`@`127.0.0.1` FUNCTION getMonto(id_acc INT, id_gest INT) RETURNS DOUBLE
	DETERMINISTIC
BEGIN
	RETURN IFNULL((
    SELECT (SUM(dc.MontoDebe) - SUM(dc.MontoHaber)) AS monto FROM DetalleComprobante as dc
    INNER JOIN Comprobante as co ON dc.IdComprobante=co.IdComprobante
   	LEFT JOIN Gestion as ge ON (ge.FechaInicio<=co.Fecha AND ge.FechaFin>=co.Fecha)
    WHERE dc.IdCuenta = id_acc
    AND ge.IdGestion = id_gest
    AND (co.Estado=0 OR co.Estado=1)
    ), 0);
END$$


CREATE DEFINER=`root`@`127.0.0.1` FUNCTION getMontoApertura(id_acc INT, id_gest INT) RETURNS DOUBLE
	DETERMINISTIC
BEGIN
	RETURN IFNULL((
    SELECT (SUM(dc.MontoDebe) - SUM(dc.MontoHaber)) AS monto FROM DetalleComprobante as dc
    INNER JOIN Comprobante as co ON dc.IdComprobante=co.IdComprobante AND co.TipoComprobante=3
   	LEFT JOIN Gestion as ge ON (ge.FechaInicio<=co.Fecha AND ge.FechaFin>=co.Fecha)
    WHERE dc.IdCuenta = id_acc
    AND ge.IdGestion = id_gest
    AND (co.Estado=0 OR co.Estado=1)
    ), 0);
END;

DELIMITER $$
CREATE DEFINER=`root`@`127.0.0.1` FUNCTION getMontoAlternativo(id_acc INT, id_gest INT) RETURNS DOUBLE
	DETERMINISTIC
BEGIN
	RETURN IFNULL((
    SELECT (SUM(dc.MontoDebeAlt) - SUM(dc.MontoHaberAlt)) AS monto FROM DetalleComprobante as dc
    INNER JOIN Comprobante as co ON dc.IdComprobante=co.IdComprobante
   	LEFT JOIN Gestion as ge ON (ge.FechaInicio<=co.Fecha AND ge.FechaFin>=co.Fecha)
    WHERE dc.IdCuenta = id_acc
    AND ge.IdGestion = id_gest
    AND (co.Estado=0 OR co.Estado=1)
    ), 0);
END$$


CREATE DEFINER=`root`@`127.0.0.1` FUNCTION getMontoAperturaAlternativo(id_acc INT, id_gest INT) RETURNS DOUBLE
	DETERMINISTIC
BEGIN
	RETURN IFNULL((
    SELECT (SUM(dc.MontoDebeAlt) - SUM(dc.MontoHaberAlt)) AS monto FROM DetalleComprobante as dc
    INNER JOIN Comprobante as co ON dc.IdComprobante=co.IdComprobante AND co.TipoComprobante=3
   	LEFT JOIN Gestion as ge ON (ge.FechaInicio<=co.Fecha AND ge.FechaFin>=co.Fecha)
    WHERE dc.IdCuenta = id_acc
    AND ge.IdGestion = id_gest
    AND (co.Estado=0 OR co.Estado=1)
    ), 0);
END;



DELIMITER $$
CREATE DEFINER=`root`@`127.0.0.1` FUNCTION `INET_TRUCHON`(`p1` VARCHAR(255)) RETURNS bigint
    DETERMINISTIC
BEGIN 
DECLARE total BIGINT DEFAULT 0; 
DECLARE nPow INT DEFAULT 0;
DECLARE nVal INT DEFAULT 0; 
IF p1 IS NULL THEN 
    set p1 = ""; 
END IF; 
WHILE p1 != "" DO 
    SET nPow = LENGTH(p1) - LENGTH(REPLACE(p1, '.', ''));
    IF LOCATE('.', p1) > 0 THEN 
        SET nVal = LEFT(p1, LOCATE('.', p1) - 1); 
        SET total = total + nVal * POW(256, nPow); 
        SET p1 = MID(p1,LOCATE('.',p1)+1); 
    ELSE 
        SET total = total + p1; 
        SET p1 = ""; 
    END IF; 
END WHILE; 
RETURN total; 
END$$
DELIMITER ;




// PROCEDURE CUSTOM

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `LibroDiario`(IN `id_com` INT, IN `id_user` INT, IN `id_ges` INT, IN `id_per` INT)
BEGIN
DECLARE val1 INT DEFAULT NULL;
DECLARE val2 timestamp DEFAULT NULL;
DECLARE val3 VARCHAR(255) DEFAULT NULL;
DECLARE val4 VARCHAR(255) DEFAULT NULL;
DECLARE val5 VARCHAR(255) DEFAULT NULL;
DECLARE val6 VARCHAR(255) DEFAULT NULL;

DECLARE done TINYINT DEFAULT FALSE;

DECLARE cursor1
    CURSOR FOR
    SELECT rc.IdComprobante ,DATE_FORMAT(rc.Fecha, "%d/%m/%Y") as Fecha, "" as Código, rc.Glosa as Cuenta, "" as Debe, "" as Haber
    FROM Comprobante as rc
    INNER JOIN Periodo as pe ON (pe.FechaInicio<=rc.Fecha AND pe.FechaFin>=rc.Fecha) AND pe.IdUsuario=rc.IdUsuario
    INNER JOIN Gestion as ge ON pe.IdGestion=ge.IdGestion AND rc.IdEmpresa=id_com
    #Los que tengan detalles que vengan
    WHERE rc.IdEmpresa = id_com AND rc.IdUsuario=id_user AND pe.IdPeriodo LIKE IF(id_per > 0,  ""+id_per, "%") AND ge.IdGestion=id_ges AND rc.Estado!=2;
DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
##Def temp table
CREATE TEMPORARY TABLE IF NOT EXISTS tempCuentas
(ids INT, Fecha VARCHAR(255) DEFAULT "", Codigo VARCHAR(255) DEFAULT "", Cuenta VARCHAR(255) DEFAULT "", Debe VARCHAR(255) DEFAULT "", Haber VARCHAR(255) DEFAULT "", DebeAlternativo VARCHAR(255) DEFAULT "", HaberAlternativo VARCHAR(255) DEFAULT "" );

OPEN cursor1;
my_loop: 
LOOP
    FETCH NEXT FROM cursor1 INTO val1, val2, val3, val4, val5, val6;
    IF done THEN 
        LEAVE my_loop;
    ELSE
        INSERT INTO tempCuentas
        SELECT rc.IdComprobante, rc.Fecha as Fecha, "" as Código, rc.Glosa as Cuenta, "" as Debe, "" as Haber, "" as DebeAlternativo, 
        "" as HaberAlternativo
        FROM Comprobante as rc
        WHERE rc.IdComprobante = val1
        UNION ALL
        SELECT rcd.IdDetalleComprobante as id_detalle, "" as Fecha, acc.Codigo as Codigo, acc.Nombre as Cuenta, 
        CAST(rcd.MontoDebe AS DECIMAL(12,2)) as Debe, CAST(rcd.MontoHaber AS DECIMAL(12,2)) as Haber,
        CAST(rcd.MontoDebeAlt AS DECIMAL(12,2)) as DebeAlternativo, CAST(rcd.MontoHaberAlt AS DECIMAL(12,2)) as HaberAlternativo
        FROM DetalleComprobante as rcd
        LEFT JOIN Cuenta as acc
        ON acc.IdCuenta = rcd.IdCuenta
        WHERE rcd.IdComprobante = val1;
        #CALL DetallesComprobante(val1);
    END IF;
END LOOP;
SELECT * FROM tempCuentas;
DROP TEMPORARY TABLE tempCuentas;
CLOSE cursor1;
END$$