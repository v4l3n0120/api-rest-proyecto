CREATE DATABASE IF NOT EXISTS trueke;
USE trueke;

CREATE TABLE compradores (
    id int(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) NOT NULL,
    apellido VARCHAR(45) NOT NULL,
    codigopostal INT,
    direccion VARCHAR(45) DEFAULT NULL,
    telefonofijo VARCHAR(20) DEFAULT NULL,
    telefonocelular VARCHAR(20) DEFAULT NULL,
    correo VARCHAR (45) DEFAULT NULL,
    PRIMARY KEY (id)
);

-- Insertar datos de clientes en la tabla

INSERT INTO compradores (nombre, apellido, codigopostal, direccion, telefonofijo, telefonocelular, correo)
VALUES
    ('Juan', 'Pérez', '12345', 'Calle 123, Ciudad A', '555-1234', '555-5678', 'juan@example.com'),
    ('María', 'González', '54321', 'Avenida XYZ, Ciudad B', '555-9876', '555-4321', 'maria@example.com'),
    ('Carlos', 'Rodríguez', '67890', 'Carrera 789, Ciudad C', '555-1111', '555-2222', 'carlos@example.com'),
    ('Ana', 'Martínez', '34567', 'Avenida ABC, Ciudad D', '555-7890', '555-3456', 'ana@example.com'),
    ('Pedro', 'López', '45678', 'Calle 456, Ciudad E', '555-2222', '555-9999', 'pedro@example.com'),
    ('Laura', 'Díaz', '56789', 'Boulevard ZZZ, Ciudad F', '555-3333', '555-7777', 'laura@example.com'),
    ('Miguel', 'Fernández', '67890', 'Calle 789, Ciudad G', '555-4444', '555-6666', 'miguel@example.com'),
    ('Luis', 'Sánchez', '78901', 'Avenida MNO, Ciudad H', '555-5555', '555-1111', 'luis@example.com'),
    ('Isabel', 'López', '89012', 'Calle 789, Ciudad I', '555-2222', '555-3333', 'isabel@example.com'),
    ('Ricardo', 'Ramírez', '90123', 'Boulevard XYZ, Ciudad J', '555-6666', '555-7777', 'ricardo@example.com'),
    ('Sofía', 'Torres', '23456', 'Calle 234, Ciudad K', '555-7777', '555-8888', 'sofia@example.com'),
    ('Fernando', 'Gómez', '34567', 'Avenida 345, Ciudad L', '555-8888', '555-9999', 'fernando@example.com')
;

    -- Puedes seguir agregando más registros de vendedores aquí
    
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    precio DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    descripcion TEXT,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
);
-- Insertar datos de productos en la tabla


INSERT INTO productos (precio, stock, descripcion)
VALUES
    ( 29.99, 50, 'Camiseta de algodón para hombre'),
    ( 499.99, 25, 'Teléfono inteligente de última generación'),
    (899.99, 10, 'Portátil de alto rendimiento'),
    ( 9.99, 100, 'Producto de la marca Goyas'),
    (299.99, 20, 'Licuadora de alta potencia'),
    (39.99, 75, 'Vestido elegante para mujer'),
    ( 349.99, 30, 'Teléfono Android de gama media'),
    ( 649.99, 15, 'Computadora de escritorio con pantalla grande'),
    (19.99, 80, 'Producto de la marca Goyas en oferta'),
    (199.99, 15, 'Lavadora automática de carga frontal')
    ;
    -- Puedes seguir agregando más registros de vendedores aquí

CREATE TABLE Vendedores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(45) NOT NULL,
    apellido VARCHAR(45) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefono VARCHAR(20),
    direccion VARCHAR(100),
    fechaRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar datos de vendedores en la tabla
INSERT INTO Vendedores (Nombre, Apellido, Email, Telefono, Direccion)
VALUES
    ('Juan', 'Pérez', 'juan.perez@example.com', '555-1234', 'Calle 123, Ciudad A'),
    ('María', 'González', 'maria.gonzalez@example.com', '555-9876', 'Avenida XYZ, Ciudad B'),
    ('Carlos', 'Rodríguez', 'carlos.rodriguez@example.com', '555-1111', 'Carrera 789, Ciudad C'),
    ('Ana', 'Martínez', 'ana.martinez@example.com', '555-7890', 'Calle ABC, Ciudad D'),
    ('Pedro', 'López', 'pedro.lopez@example.com', '555-2222', 'Calle 456, Ciudad E'),
    ('Laura', 'Díaz', 'laura.diaz@example.com', '555-3333', 'Boulevard MNO, Ciudad F')
    ;
    -- Puedes seguir agregando más registros de vendedores aquí
    
CREATE TABLE facturas (
    id int(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) NOT NULL,
    apellido VARCHAR(45) NOT NULL,
    codigopostal INT,
    direccion VARCHAR(45) DEFAULT NULL,
    telefonofijo VARCHAR(20) DEFAULT NULL,
    correo VARCHAR (45) DEFAULT NULL,
    PRIMARY KEY (id)
);
INSERT INTO facturas(nombre, apellido, codigopostal, direccion, telefonofijo, correo)
VALUES
    ('Juan', 'Perez', 12345, 'Calle 123', '555-123-4567', 'juan@example.com'),
    ('Maria', 'Lopez', 54321, 'Avenida 456', '555-987-6543', 'maria@example.com'),
    ('Carlos', 'Gomez', 67890, 'Calle 789', '555-456-7890', 'carlos@example.com'),
    ('Ana', 'Martinez', 98765, 'Avenida 987', '555-876-5432', 'ana@example.com'),
    ('Luis', 'Rodriguez', 23456, 'Calle 234', '555-234-5678', 'luis@example.com'),
    ('Laura', 'Gonzalez', 34567, 'Avenida 345', '555-765-4321', 'laura@example.com'),
    ('Pedro', 'Sanchez', 87654, 'Calle 876', '555-654-3210', 'pedro@example.com'),
    ('Isabel', 'Torres', 76543, 'Avenida 765', '555-321-6547', 'isabel@example.com'),
    ('Miguel', 'Fernandez', 45678, 'Calle 456', '555-876-5432', 'miguel@example.com'),
    ('Sofia', 'Ramirez', 56789, 'Avenida 567', '555-987-6541', 'sofia@example.com');