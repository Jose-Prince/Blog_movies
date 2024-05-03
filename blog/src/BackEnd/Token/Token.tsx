import * as crypto from 'crypto';

interface Payload {
  user: string
  password : string
  exp?: number
  // Otros campos del payload si es necesario
}

// Función para generar un token JWT
 export const generarTokenJWT = (payload: Payload, expiresIn: string): string => {
    // Obtener la fecha actual y calcular la fecha de expiración en segundos
    const issuedAt = Math.floor(Date.now() / 1000);
    const expiration = issuedAt + parseInt(expiresIn, 10);
  
    // Agregar la fecha de expiración al payload si expiresIn está definido
    if (expiresIn) {
      payload.exp = expiration;
    }
  
    // Definir la cabecera del token (en este caso, solo usamos el algoritmo HS256)
    const header = {
      alg: 'HS256',
      typ: 'JWT',
    };
  
    // Codificar la cabecera en base64
    const encodedHeader = Buffer.from(JSON.stringify(header)).toString('base64');
  
    // Codificar el payload en base64
    const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64');
  
    // Crear el string que contiene el header y el payload, separados por un punto
    const encodedTokenBody = `${encodedHeader}.${encodedPayload}`;
  
    // Calcular el hash HMAC del token body utilizando una clave secreta
    const secretKey = 'your-secret-key'; // Cambia esta clave por una secreta y segura
    const signature = crypto.createHmac('sha256', secretKey).update(encodedTokenBody).digest('base64');
  
    // Concatenar el token body y la firma, separados por un punto, para obtener el token completo
    const token = `${encodedTokenBody}.${signature}`;
  
    return token;
  };

export const verificarExpiracionTokenJWT = (token: string): boolean => {
    try {
      // Separar el token en sus partes: encabezado, payload y firma
      const parts = token.split('.');
      if (parts.length !== 3) {
        // El token no tiene el formato correcto
        console.error('El token no tiene el formato correcto');
        return true; // Se considera que el token ha expirado en caso de error
      }
  
      // Decodificar el payload (parte 1)
      const payload = JSON.parse(Buffer.from(parts[1], 'base64').toString('utf-8'));
  
      // Obtener la fecha de expiración del payload
      const expirationDate = new Date(payload.exp * 1000); // Convertir segundos a milisegundos
  
      // Obtener la fecha actual
      const currentDate = new Date();
  
      // Comparar la fecha de expiración con la fecha actual
      if (currentDate < expirationDate) {
        // El token aún no ha expirado
        return false;
      } else {
        // El token ha expirado
        return true;
      }
    } catch (error) {
      // Error al decodificar el token o campo "exp" no encontrado en el payload
      console.error('Error al verificar la expiración del token:', error);
      return true; // Se considera que el token ha expirado en caso de error
    }
  };
  