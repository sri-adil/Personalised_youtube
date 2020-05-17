pipeline {
  agent any
    
  tools {nodejs "LocalNPM"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/sri-adil/Personalised_youtube'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
	sh 'npm run build'
      }
    }  
    
  }
}
