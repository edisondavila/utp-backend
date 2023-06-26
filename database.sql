
-- Tabla "usuario"
CREATE TABLE usuario (
  codigo SERIAL PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  apePaterno VARCHAR(25) NOT NULL,
  apeMaterno VARCHAR(25) NOT NULL,
  correo VARCHAR(80) NOT NULL,
  contrasena VARCHAR(25) NOT NULL,
  rol INTEGER NOT NULL
);

-- Tabla "curso"
CREATE TABLE curso (
  codigo SERIAL PRIMARY KEY,
  nombre_curso VARCHAR(50) NOT NULL,
  codDocente INTEGER NOT NULL
);

-- Tabla "evaluaciones"
CREATE TABLE evaluaciones (
  codigo SERIAL PRIMARY KEY,
  codCurso INTEGER NOT NULL,
  nombre_evaluacion VARCHAR(80) NOT NULL
);

-- Tabla "evaluacion_persona"
CREATE TABLE evaluacion_persona (
  codigo SERIAL PRIMARY KEY,
  codEvaluacion INTEGER NOT NULL,
  codUsuario INTEGER NOT NULL,
  nota INTEGER NOT NULL
);

-- Tabla "solicitud_rectificacion"
CREATE TABLE solicitud_rectificacion (
  codigo SERIAL PRIMARY KEY,
  codEvaluacionUsuario INTEGER NOT NULL,
  archivo BYTEA NOT NULL,
  nota INTEGER NOT NULL,
  estado INTEGER NOT NULL
);

INSERT INTO usuario (codigo, nombre, apePaterno, apeMaterno, correo, contrasena, rol)
VALUES
  ('0001', 'JORGE', 'BLANCO', 'CUCHO', 'JBLANCO@utp.edu.pe', '12345678', 2),
  ('0002', 'JOSE', 'BENDEZU', 'CORTEZ', 'JBENDEZUO@utp.edu.pe', '12345678', 2),
  ('0003', 'JAIME', 'CENTENO', 'VARGAS', 'JCENTENO@utp.edu.pe', '12345678', 2),
  ('0004', 'PETERLIK', 'AZABACHE', 'SALCEDO', 'PAZABACHE@utp.edu.pe', '12345678', 1);

INSERT INTO curso (codigo, nombre_curso, codDocente)
VALUES ('0001', 'MATEMATICAS', '0004'),
       ('0002', 'LENGUAJE', '0004'),
       ('0003', 'CIENCIAS SOCIALES', '0004'),
       ('0004', 'COMUNICACIÓN', '0004');

-- Insertar registros en la tabla 'evaluaciones'
INSERT INTO evaluaciones (codigo, codCurso, nombre_evaluacion)
VALUES ('0001', '0001', 'PRACTICA CALIFICADA 1'),
       ('0002', '0001', 'PRACTICA CALIFICADA 2'),
       ('0003', '0001', 'PRACTICA CALIFICADA 3'),
       ('0004', '0001', 'PRACTICA CALIFICADA 4');

-- Insertar registros en la tabla 'evaluacion_persona'
INSERT INTO evaluacion_persona (codigo, codEvaluacion, codUsuario, nota)
VALUES ('0001', '0001', '0001', 12),
       ('0002', '0001', '0002', 15),
       ('0003', '0001', '0003', 17);