#!groovy

node {
   def REGISTRY = "registry.gitlab.com/sfulasalle/febiz"
   def IMAGENAME = "1002.cfe-conector"
   def USERSERVER = 'mcalle'
   def IPSERVER = '35.196.243.220'

   ///build, junit,, sonaqube, imagen docker, push, despliegue
   stage ('Actualizar Repositorio') {
      echo 'Descargando código de SCM'
      bat 'del *.* /s /q'
      checkout scm
   }

   stage ('Instalando Librerías'){
        bat 'xcopy D:\\La_Salle\\1002.OFE-REPO\\node_modules\\*.* D:\\Programas\\jenkins\\workspace\\prueba_master-S4LHNL6HXWQFZEWJEZEGZW67KBNCNV6AYI5AIBREZLKFKL7YP2OQ\\node_modules\\ /E /Y'
        bat 'npm install --global --production windows-build-tools'
        bat 'npm install -g node-gyp'
        bat 'npm run postinstall-sqlite'
        bat 'npm run rebuild'
   }
   
   stage ('Creando instalador'){
       bat 'npm run dist'
   }
   stage('subiendo'){
       bat 'copy offline.exe offline${env.BUILD_NUMBER}.exe'
       bat 'd:\\Programas\\PneumaticTube\\PneumaticTube.exe -f offline${env.BUILD_NUMBER}.exe -p offline_dev'
   }
}
